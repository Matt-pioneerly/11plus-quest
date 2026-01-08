import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const next = searchParams.get('next') ?? '/quiz'

  const supabase = createClient()

  if (code) {
    // OAuth flow
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  if (token_hash && type) {
    // Magic link flow
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as 'email' | 'signup',
    })
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // If we get here, just redirect to quiz and let it check auth
  return NextResponse.redirect(`${origin}/quiz`)
}