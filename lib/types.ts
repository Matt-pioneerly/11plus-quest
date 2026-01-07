export type Score = {
  id: string
  user_id: string
  user_name: string
  user_avatar?: string
  score: number
  total: number
  percentage: number
  subject: string
  level: string
  time_taken: number
  xp_earned: number
  created_at: string
}

export type UserStats = {
  user_id: string
  total_xp: number
  total_correct: number
  total_questions: number
  mock_exams_completed: number
  perfect_scores: number
  best_streak: number
  updated_at: string
}
