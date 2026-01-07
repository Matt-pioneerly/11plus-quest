export type Question = {
  id: string
  type: string
  question: string
  options: string[]
  answer: number
  explanation: string
  subject?: string
  level?: string
}

export type Subject = 'verbal' | 'nonverbal' | 'english' | 'maths'
export type Level = 'easy' | 'medium' | 'hard'

export const questionBank: Record<Subject, Record<Level, Question[]>> = {
  verbal: {
    easy: [
      { id: 'v1e', type: 'synonym', question: 'Which word means the same as HAPPY?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], answer: 1, explanation: 'Happy and joyful both mean feeling pleasure.' },
      { id: 'v2e', type: 'antonym', question: 'Which word is opposite to BIG?', options: ['Large', 'Huge', 'Small', 'Giant'], answer: 2, explanation: 'Big means large, small is the opposite.' },
      { id: 'v3e', type: 'analogy', question: 'Cat is to Kitten as Dog is to...', options: ['Paw', 'Puppy', 'Bark', 'Collar'], answer: 1, explanation: 'A kitten is a baby cat, a puppy is a baby dog.' },
      { id: 'v4e', type: 'synonym', question: 'Which word means the same as FAST?', options: ['Slow', 'Quick', 'Heavy', 'Quiet'], answer: 1, explanation: 'Fast and quick both mean moving with speed.' },
      { id: 'v5e', type: 'antonym', question: 'Which word is opposite to HOT?', options: ['Warm', 'Burning', 'Cold', 'Sunny'], answer: 2, explanation: 'Hot means high temperature, cold is the opposite.' },
      { id: 'v6e', type: 'missing', question: 'The _____ jumped over the fence.', options: ['rabbit', 'sleep', 'blue', 'quickly'], answer: 0, explanation: 'We need a noun that can jump - rabbit.' },
      { id: 'v7e', type: 'analogy', question: 'Up is to Down as Left is to...', options: ['Up', 'Right', 'Below', 'Side'], answer: 1, explanation: 'Up/down and left/right are opposites.' },
      { id: 'v8e', type: 'synonym', question: 'Which word means the same as PRETTY?', options: ['Ugly', 'Beautiful', 'Dark', 'Loud'], answer: 1, explanation: 'Pretty and beautiful both describe pleasant appearance.' },
      { id: 'v9e', type: 'antonym', question: 'Which word is opposite to LIGHT?', options: ['Bright', 'Dark', 'White', 'Clear'], answer: 1, explanation: 'Light and dark are opposites.' },
      { id: 'v10e', type: 'analogy', question: 'Bird is to Fly as Fish is to...', options: ['Walk', 'Swim', 'Run', 'Jump'], answer: 1, explanation: 'Birds fly, fish swim.' },
    ],
    medium: [
      { id: 'v1m', type: 'synonym', question: 'Which word is closest in meaning to ABUNDANT?', options: ['Scarce', 'Plentiful', 'Empty', 'Tiny'], answer: 1, explanation: 'Abundant means having plenty.' },
      { id: 'v2m', type: 'antonym', question: 'Which word is opposite to CONCEAL?', options: ['Hide', 'Cover', 'Reveal', 'Protect'], answer: 2, explanation: 'Conceal means to hide, reveal is opposite.' },
      { id: 'v3m', type: 'analogy', question: 'Hot is to Cold as Day is to...', options: ['Light', 'Sun', 'Night', 'Morning'], answer: 2, explanation: 'Hot/Cold and Day/Night are opposites.' },
      { id: 'v4m', type: 'code', question: 'If CAT = 24 and DOG = 26, what does PIG equal? (A=1, B=2...)', options: ['30', '32', '34', '36'], answer: 1, explanation: 'P=16, I=9, G=7. 16+9+7=32.' },
      { id: 'v5m', type: 'antonym', question: 'Which word is opposite to ANCIENT?', options: ['Old', 'Historic', 'Modern', 'Antique'], answer: 2, explanation: 'Ancient means old, modern is opposite.' },
      { id: 'v6m', type: 'analogy', question: 'Painter is to Brush as Writer is to...', options: ['Book', 'Pen', 'Paper', 'Story'], answer: 1, explanation: 'A painter uses a brush, a writer uses a pen.' },
      { id: 'v7m', type: 'synonym', question: 'Which word means ENORMOUS?', options: ['Small', 'Tiny', 'Huge', 'Average'], answer: 2, explanation: 'Enormous means extremely large.' },
      { id: 'v8m', type: 'missing', question: 'The _____ cat sat on the warm windowsill.', options: ['sleepy', 'angry', 'swimming', 'flying'], answer: 0, explanation: 'Sleepy makes sense for a cat on a warm windowsill.' },
      { id: 'v9m', type: 'code', question: 'If BOAT = 35, what does SHIP equal? (A=1, B=2...)', options: ['47', '50', '52', '55'], answer: 2, explanation: 'S=19, H=8, I=9, P=16. 19+8+9+16=52.' },
      { id: 'v10m', type: 'analogy', question: 'Doctor is to Hospital as Teacher is to...', options: ['Student', 'School', 'Book', 'Desk'], answer: 1, explanation: 'Doctors work in hospitals, teachers work in schools.' },
    ],
    hard: [
      { id: 'v1h', type: 'synonym', question: 'Which word means BENEVOLENT?', options: ['Malicious', 'Kind-hearted', 'Indifferent', 'Hostile'], answer: 1, explanation: 'Benevolent means kind and generous.' },
      { id: 'v2h', type: 'antonym', question: 'Which word is opposite to EPHEMERAL?', options: ['Temporary', 'Fleeting', 'Permanent', 'Brief'], answer: 2, explanation: 'Ephemeral means short-lived, permanent is opposite.' },
      { id: 'v3h', type: 'analogy', question: 'Cacophony is to Sound as Chaos is to...', options: ['Noise', 'Order', 'Disorder', 'Harmony'], answer: 2, explanation: 'Cacophony is disordered sound, chaos is disorder.' },
      { id: 'v4h', type: 'code', question: 'In code RIVER = SJWFS (+1 each). What is OCEAN?', options: ['PDFBO', 'NDBZM', 'PCEAO', 'ODFAN'], answer: 0, explanation: 'O→P, C→D, E→F, A→B, N→O = PDFBO.' },
      { id: 'v5h', type: 'antonym', question: 'Which word is opposite to OSTENTATIOUS?', options: ['Showy', 'Modest', 'Flashy', 'Extravagant'], answer: 1, explanation: 'Ostentatious means showy, modest is opposite.' },
      { id: 'v6h', type: 'analogy', question: 'Bibliophile is to Books as Audiophile is to...', options: ['Music', 'Sound equipment', 'Radio', 'Hearing'], answer: 1, explanation: 'Bibliophile loves books, audiophile loves sound equipment.' },
      { id: 'v7h', type: 'synonym', question: 'Which word means UBIQUITOUS?', options: ['Rare', 'Everywhere', 'Unique', 'Invisible'], answer: 1, explanation: 'Ubiquitous means present everywhere.' },
      { id: 'v8h', type: 'missing', question: "The politician's _____ remarks alienated supporters.", options: ['diplomatic', 'incendiary', 'conciliatory', 'measured'], answer: 1, explanation: 'Incendiary means inflammatory.' },
      { id: 'v9h', type: 'synonym', question: 'Which word means PERNICIOUS?', options: ['Helpful', 'Harmful', 'Obvious', 'Hidden'], answer: 1, explanation: 'Pernicious means having a harmful effect.' },
      { id: 'v10h', type: 'antonym', question: 'Which word is opposite to GREGARIOUS?', options: ['Sociable', 'Solitary', 'Friendly', 'Outgoing'], answer: 1, explanation: 'Gregarious means sociable, solitary is opposite.' },
    ]
  },
  nonverbal: {
    easy: [
      { id: 'n1e', type: 'sequence', question: "Shapes go: Circle, Square, Circle, Square... What's next?", options: ['Triangle', 'Circle', 'Square', 'Rectangle'], answer: 1, explanation: 'Pattern alternates, circle comes next.' },
      { id: 'n2e', type: 'odd', question: 'Odd one out: Apple, Banana, Carrot, Orange', options: ['Apple', 'Banana', 'Carrot', 'Orange'], answer: 2, explanation: 'Carrot is a vegetable, others are fruits.' },
      { id: 'n3e', type: 'sequence', question: 'What comes next: 2, 4, 6, 8, ...?', options: ['9', '10', '11', '12'], answer: 1, explanation: 'Pattern adds 2 each time. 8+2=10.' },
      { id: 'n4e', type: 'fold', question: 'Fold paper in half - how many layers?', options: ['1', '2', '3', '4'], answer: 1, explanation: 'Folding once creates 2 layers.' },
      { id: 'n5e', type: 'odd', question: 'Odd one out: 3 squares and 1 circle', options: ['Square 1', 'Square 2', 'Square 3', 'Circle'], answer: 3, explanation: 'Circle has no corners.' },
      { id: 'n6e', type: 'sequence', question: 'What comes next: 1, 2, 3, 4, ...?', options: ['4', '5', '6', '7'], answer: 1, explanation: 'Pattern adds 1. 4+1=5.' },
      { id: 'n7e', type: 'reflection', question: 'Raise RIGHT hand in mirror - which appears raised?', options: ['Right', 'Left', 'Both', 'Neither'], answer: 1, explanation: 'Mirrors flip left and right.' },
      { id: 'n8e', type: 'odd', question: 'Odd one out: Cat, Dog, Bird, Table', options: ['Cat', 'Dog', 'Bird', 'Table'], answer: 3, explanation: 'Table is furniture, others are animals.' },
      { id: 'n9e', type: 'sequence', question: 'What comes next: 3, 6, 9, 12, ...?', options: ['13', '14', '15', '16'], answer: 2, explanation: 'Pattern adds 3. 12+3=15.' },
      { id: 'n10e', type: 'odd', question: 'Odd one out: Red, Blue, Green, Square', options: ['Red', 'Blue', 'Green', 'Square'], answer: 3, explanation: 'Square is a shape, others are colours.' },
    ],
    medium: [
      { id: 'n1m', type: 'sequence', question: 'Triangle rotates 90° clockwise each step. After 3 rotations from UP?', options: ['Up', 'Right', 'Down', 'Left'], answer: 3, explanation: '1st: Right, 2nd: Down, 3rd: Left.' },
      { id: 'n2m', type: 'odd', question: 'Odd one out: Square, Rectangle, Triangle, Cube', options: ['Square', 'Rectangle', 'Triangle', 'Cube'], answer: 3, explanation: 'Cube is 3D, others are 2D.' },
      { id: 'n3m', type: 'sequence', question: "Pattern: 1, 3, 6, 10 dots. What's next?", options: ['12', '13', '14', '15'], answer: 3, explanation: 'Adds +2, +3, +4, +5. 10+5=15.' },
      { id: 'n4m', type: 'fold', question: 'Fold square diagonally - what shape?', options: ['Rectangle', 'Square', 'Triangle', 'Pentagon'], answer: 2, explanation: 'Diagonal fold creates a triangle.' },
      { id: 'n5m', type: 'reflection', question: 'Reflect letter "b" in vertical mirror - looks like?', options: ['b', 'd', 'p', 'q'], answer: 1, explanation: 'Vertical mirror swaps left/right: b→d.' },
      { id: 'n6m', type: 'odd', question: 'Odd one out by sides: Pentagon, Hexagon, Octagon, Circle', options: ['Pentagon', 'Hexagon', 'Octagon', 'Circle'], answer: 3, explanation: 'Circle has no straight sides.' },
      { id: 'n7m', type: 'cube', question: "Cube: ★ opposite ●, ■ opposite △. What's opposite ♦?", options: ['★', '●', '♥', '■'], answer: 2, explanation: 'Stars/circles paired, squares/triangles paired, diamonds/hearts paired.' },
      { id: 'n8m', type: 'sequence', question: 'Shapes gain 1 side each. 4th shape after triangle?', options: ['Pentagon', 'Hexagon', 'Square', 'Heptagon'], answer: 1, explanation: 'Triangle(3), Square(4), Pentagon(5), Hexagon(6).' },
      { id: 'n9m', type: 'sequence', question: "Pattern: 1, 4, 9, 16... What's next?", options: ['20', '23', '25', '28'], answer: 2, explanation: 'Square numbers: 1², 2², 3², 4², 5²=25.' },
      { id: 'n10m', type: 'fold', question: 'Fold paper twice, punch hole in corner. How many holes when unfolded?', options: ['1', '2', '4', '8'], answer: 2, explanation: 'Two folds = 4 layers = 4 holes.' },
    ],
    hard: [
      { id: 'n1h', type: 'sequence', question: 'Shape rotates 45° AND changes colour each step. Step 4 from black/up?', options: ['Black, right', 'White, right', 'Black, down', 'White, down'], answer: 2, explanation: 'Step 4: black, 180° = down.' },
      { id: 'n2h', type: 'odd', question: 'Odd one out: 8, 27, 64, 100', options: ['8', '27', '64', '100'], answer: 3, explanation: '8=2³, 27=3³, 64=4³, 100=10² (not a cube).' },
      { id: 'n3h', type: 'net', question: "Which net WON'T fold to a cube?", options: ['Cross shape', 'T-shape', 'Line of 6 squares', 'L-shape'], answer: 2, explanation: "Line of 6 squares can't fold into cube." },
      { id: 'n4h', type: 'sequence', question: 'Pattern: 2, 6, 12, 20, 30... Next?', options: ['40', '42', '44', '46'], answer: 1, explanation: 'Differences: 4,6,8,10,12. 30+12=42.' },
      { id: 'n5h', type: 'fold', question: 'Square folded twice, corner cut. Holes when unfolded?', options: ['1', '2', '4', '8'], answer: 2, explanation: '4 layers = 4 holes.' },
      { id: 'n6h', type: 'reflection', question: '"AMBULANCE" backwards in mirror shows?', options: ['ECNALUBMA', 'AMBULANCE', 'AMAULBNCE', 'Reversed'], answer: 1, explanation: 'Mirror reverses, so backwards text appears normal.' },
      { id: 'n7h', type: 'cube', question: 'Painted cube cut into 27 small cubes. How many have 2 faces painted?', options: ['6', '8', '12', '16'], answer: 2, explanation: 'Edge cubes (not corners) = 12.' },
      { id: 'n8h', type: 'matrix', question: "3×3 grid needs ○△□ once per row/column. Row 1: ○△□, Col 1: ○△□. What's at (2,2)?", options: ['○', '△', '□', 'Any'], answer: 2, explanation: 'Position (2,2) must be □.' },
      { id: 'n9h', type: 'sequence', question: 'Pattern: 1, 1, 2, 3, 5, 8... Next?', options: ['11', '12', '13', '14'], answer: 2, explanation: 'Fibonacci: each = sum of previous two. 5+8=13.' },
      { id: 'n10h', type: 'cube', question: 'Painted cube cut into 64 small cubes. How many have NO paint?', options: ['4', '8', '16', '24'], answer: 1, explanation: '4×4×4 cube, inner 2×2×2 = 8 unpainted.' },
    ]
  },
  english: {
    easy: [
      { id: 'e1e', type: 'grammar', question: '"I _____ to school yesterday."', options: ['go', 'went', 'going', 'goes'], answer: 1, explanation: 'Yesterday = past tense = went.' },
      { id: 'e2e', type: 'spelling', question: 'Which is spelled correctly?', options: ['Becuase', 'Because', 'Becasue', 'Beacuse'], answer: 1, explanation: 'Because is correct.' },
      { id: 'e3e', type: 'punctuation', question: 'Which needs a capital? "my friend lives in london."', options: ['my', 'friend', 'lives', 'london'], answer: 3, explanation: 'London is a place name.' },
      { id: 'e4e', type: 'vocabulary', question: 'What is a "puppy"?', options: ['Baby cat', 'Baby dog', 'Baby bird', 'Baby fish'], answer: 1, explanation: 'A puppy is a young dog.' },
      { id: 'e5e', type: 'grammar', question: '"She _____ very happy."', options: ['are', 'is', 'am', 'be'], answer: 1, explanation: 'She goes with is.' },
      { id: 'e6e', type: 'spelling', question: 'Which is spelled correctly?', options: ['Freind', 'Friend', 'Frend', 'Friende'], answer: 1, explanation: 'Friend is correct.' },
      { id: 'e7e', type: 'punctuation', question: 'End of "What is your name"?', options: ['.', '!', '?', ','], answer: 2, explanation: 'Questions need question marks.' },
      { id: 'e8e', type: 'vocabulary', question: 'What does "tiny" mean?', options: ['Very big', 'Very small', 'Very fast', 'Very slow'], answer: 1, explanation: 'Tiny means very small.' },
      { id: 'e9e', type: 'grammar', question: '"They _____ playing football."', options: ['is', 'are', 'am', 'be'], answer: 1, explanation: 'They goes with are.' },
      { id: 'e10e', type: 'spelling', question: 'Which is spelled correctly?', options: ['Wensday', 'Wendesday', 'Wednesday', 'Wednesdey'], answer: 2, explanation: 'Wednesday is correct.' },
    ],
    medium: [
      { id: 'e1m', type: 'grammar', question: 'Which is correct?', options: ['Me and him went', 'Him and me went', 'He and I went', 'I and he went'], answer: 2, explanation: 'He and I is correct for subjects.' },
      { id: 'e2m', type: 'spelling', question: 'Which is spelled correctly?', options: ['Neccessary', 'Necessary', 'Necesary', 'Neccesary'], answer: 1, explanation: "One c, two s's." },
      { id: 'e3m', type: 'punctuation', question: 'Correct punctuation?', options: ['Its a lovely day isnt it', "It's a lovely day, isn't it?", "Its a lovely day, isn't it?", "It's a lovely day isnt it?"], answer: 1, explanation: "It's and isn't need apostrophes." },
      { id: 'e4m', type: 'vocabulary', question: 'What does "benevolent" mean?', options: ['Evil', 'Kind and generous', 'Angry', 'Confused'], answer: 1, explanation: 'Benevolent means kind.' },
      { id: 'e5m', type: 'grammar', question: '"The team _____ playing well."', options: ['is', 'are', 'be', 'were'], answer: 0, explanation: 'Team as unit takes is.' },
      { id: 'e6m', type: 'spelling', question: 'Which is spelled correctly?', options: ['Seperate', 'Separete', 'Separate', 'Seperete'], answer: 2, explanation: 'A RAT in sepARAte.' },
      { id: 'e7m', type: 'comprehension', question: '"The oak stood sentinel over the village." Meaning?', options: ['Dying', 'Watching protectively', 'Very small', 'Recently planted'], answer: 1, explanation: 'Sentinel means guard.' },
      { id: 'e8m', type: 'grammar', question: "Correct their/there/they're?", options: ['Their going', "They're bags", 'There going', "They're going"], answer: 3, explanation: "They're = they are." },
      { id: 'e9m', type: 'spelling', question: 'Which is spelled correctly?', options: ['Occured', 'Ocurred', 'Occurred', 'Occurrd'], answer: 2, explanation: 'Double c, double r.' },
      { id: 'e10m', type: 'vocabulary', question: 'What does "hesitant" mean?', options: ['Confident', 'Uncertain', 'Angry', 'Happy'], answer: 1, explanation: 'Hesitant means uncertain or reluctant.' },
    ],
    hard: [
      { id: 'e1h', type: 'grammar', question: 'Correct subjunctive?', options: ['If I was you', 'If I were you', 'If I am you', 'If I be you'], answer: 1, explanation: 'Subjunctive uses were for hypotheticals.' },
      { id: 'e2h', type: 'spelling', question: 'Which is spelled correctly?', options: ['Conscientous', 'Conscientious', 'Conciencious', 'Consientious'], answer: 1, explanation: 'Conscientious is correct.' },
      { id: 'e3h', type: 'punctuation', question: 'Correct semicolon use?', options: ['I love reading; and writing.', 'I love reading; my sister prefers sport.', 'I love; reading.', 'I; love reading.'], answer: 1, explanation: 'Semicolons join related independent clauses.' },
      { id: 'e4h', type: 'vocabulary', question: 'What does "obsequious" mean?', options: ['Rebellious', 'Excessively eager to please', 'Loud', 'Intelligent'], answer: 1, explanation: 'Obsequious means overly compliant.' },
      { id: 'e5h', type: 'grammar', question: 'Correct parallel structure?', options: ['Swimming, to run, biking', 'Swimming, running, biking', 'To swim, running, to bike', 'Swim, run, bike'], answer: 1, explanation: 'All -ing words = parallel.' },
      { id: 'e6h', type: 'comprehension', question: '"His Achilles heel was pride." Literary device?', options: ['Simile', 'Metaphor', 'Allusion', 'Personification'], answer: 2, explanation: 'Allusion to Greek mythology.' },
      { id: 'e7h', type: 'vocabulary', question: 'Synonym for "perfidious"?', options: ['Loyal', 'Treacherous', 'Perfect', 'Persistent'], answer: 1, explanation: 'Perfidious means deceitful.' },
      { id: 'e8h', type: 'grammar', question: 'Correct "whom" use?', options: ['Whom is calling?', 'To whom should I address this?', 'Whom wants to go?', 'Whom did you say is coming?'], answer: 1, explanation: 'Whom is the object form.' },
      { id: 'e9h', type: 'vocabulary', question: 'What does "loquacious" mean?', options: ['Quiet', 'Talkative', 'Angry', 'Sad'], answer: 1, explanation: 'Loquacious means very talkative.' },
      { id: 'e10h', type: 'grammar', question: 'Which is correct?', options: ['Less people came', 'Fewer people came', 'Lesser people came', 'Little people came'], answer: 1, explanation: 'Fewer for countable nouns.' },
    ]
  },
  maths: {
    easy: [
      { id: 'm1e', type: 'arithmetic', question: 'What is 24 + 38?', options: ['52', '62', '72', '82'], answer: 1, explanation: '24 + 38 = 62.' },
      { id: 'm2e', type: 'arithmetic', question: 'What is 50 - 23?', options: ['23', '27', '33', '37'], answer: 1, explanation: '50 - 23 = 27.' },
      { id: 'm3e', type: 'multiplication', question: 'What is 6 × 7?', options: ['36', '42', '48', '54'], answer: 1, explanation: '6 × 7 = 42.' },
      { id: 'm4e', type: 'division', question: 'What is 36 ÷ 4?', options: ['6', '7', '8', '9'], answer: 3, explanation: '36 ÷ 4 = 9.' },
      { id: 'm5e', type: 'fractions', question: 'What is half of 20?', options: ['5', '10', '15', '20'], answer: 1, explanation: '20 ÷ 2 = 10.' },
      { id: 'm6e', type: 'problem', question: 'Tom has 8 apples, gives 3 away. How many left?', options: ['3', '4', '5', '6'], answer: 2, explanation: '8 - 3 = 5.' },
      { id: 'm7e', type: 'sequence', question: 'Next: 5, 10, 15, 20, ...?', options: ['22', '25', '30', '35'], answer: 1, explanation: 'Pattern +5. 20+5=25.' },
      { id: 'm8e', type: 'geometry', question: 'How many sides does a rectangle have?', options: ['3', '4', '5', '6'], answer: 1, explanation: 'Rectangle has 4 sides.' },
      { id: 'm9e', type: 'arithmetic', question: 'What is 7 × 8?', options: ['54', '56', '58', '64'], answer: 1, explanation: '7 × 8 = 56.' },
      { id: 'm10e', type: 'division', question: 'What is 45 ÷ 9?', options: ['4', '5', '6', '7'], answer: 1, explanation: '45 ÷ 9 = 5.' },
    ],
    medium: [
      { id: 'm1m', type: 'arithmetic', question: 'What is 347 + 286?', options: ['623', '633', '533', '643'], answer: 1, explanation: '347 + 286 = 633.' },
      { id: 'm2m', type: 'fractions', question: 'What is ¾ + ½?', options: ['1', '1¼', '1½', '5/6'], answer: 1, explanation: '¾ + ½ = 5/4 = 1¼.' },
      { id: 'm3m', type: 'percentage', question: 'What is 15% of 80?', options: ['8', '10', '12', '15'], answer: 2, explanation: '10% = 8, 5% = 4, total = 12.' },
      { id: 'm4m', type: 'problem', question: 'Train at 60mph for 2h 30min. Distance?', options: ['120 miles', '150 miles', '130 miles', '180 miles'], answer: 1, explanation: '2.5 × 60 = 150 miles.' },
      { id: 'm5m', type: 'arithmetic', question: 'What is 504 ÷ 8?', options: ['62', '63', '64', '65'], answer: 1, explanation: '504 ÷ 8 = 63.' },
      { id: 'm6m', type: 'algebra', question: 'If 3x + 7 = 22, what is x?', options: ['3', '4', '5', '6'], answer: 2, explanation: '3x = 15, x = 5.' },
      { id: 'm7m', type: 'ratio', question: 'Share £48 in ratio 3:5. Larger share?', options: ['£18', '£24', '£30', '£36'], answer: 2, explanation: '8 parts, each £6. 5×6=£30.' },
      { id: 'm8m', type: 'geometry', question: 'Triangle area: base 12cm, height 8cm?', options: ['96 cm²', '48 cm²', '40 cm²', '20 cm²'], answer: 1, explanation: '½ × 12 × 8 = 48 cm².' },
      { id: 'm9m', type: 'percentage', question: 'What is 25% of 120?', options: ['25', '30', '35', '40'], answer: 1, explanation: '120 ÷ 4 = 30.' },
      { id: 'm10m', type: 'fractions', question: 'What is ⅔ of 27?', options: ['9', '15', '18', '21'], answer: 2, explanation: '27 ÷ 3 × 2 = 18.' },
    ],
    hard: [
      { id: 'm1h', type: 'algebra', question: 'Solve: 2(3x - 4) = 5x + 2', options: ['x = 6', 'x = 8', 'x = 10', 'x = 12'], answer: 2, explanation: '6x - 8 = 5x + 2, x = 10.' },
      { id: 'm2h', type: 'fractions', question: 'What is ⅔ × ¾ ÷ ½?', options: ['¼', '½', '1', '2'], answer: 2, explanation: '⅔ × ¾ = ½. ½ ÷ ½ = 1.' },
      { id: 'm3h', type: 'percentage', question: '+20% then -20%. Overall change?', options: ['No change', '4% decrease', '4% increase', '2% decrease'], answer: 1, explanation: '100→120→96. 4% decrease.' },
      { id: 'm4h', type: 'problem', question: 'Trains 200km apart at 60 & 40 km/h toward each other. When meet?', options: ['1 hour', '2 hours', '2.5 hours', '4 hours'], answer: 1, explanation: 'Combined 100km/h. 200÷100=2h.' },
      { id: 'm5h', type: 'geometry', question: 'Circle radius 7cm. Area? (π = 22/7)', options: ['44 cm²', '88 cm²', '154 cm²', '308 cm²'], answer: 2, explanation: '22/7 × 49 = 154 cm².' },
      { id: 'm6h', type: 'ratio', question: 'A:B = 2:3, B:C = 4:5. What is A:C?', options: ['2:5', '8:15', '6:10', '4:9'], answer: 1, explanation: 'A:B:C = 8:12:15. A:C = 8:15.' },
      { id: 'm7h', type: 'sequence', question: 'Sequence: 2, 5, 11, 23, 47... Rule & next?', options: ['×2+1, 95', '×2+1, 94', '+3+6+12, 71', '×2-1, 93'], answer: 0, explanation: '×2+1. 47×2+1=95.' },
      { id: 'm8h', type: 'problem', question: 'Tank fills: Pipe A in 6h, Pipe B in 4h. Both together?', options: ['2 hours', '2.4 hours', '3 hours', '5 hours'], answer: 1, explanation: '1/6 + 1/4 = 5/12. Time = 2.4h.' },
      { id: 'm9h', type: 'algebra', question: 'If 2x + 3y = 13 and x = 2, what is y?', options: ['2', '3', '4', '5'], answer: 1, explanation: '4 + 3y = 13, 3y = 9, y = 3.' },
      { id: 'm10h', type: 'percentage', question: 'Price was £80, now £100. % increase?', options: ['20%', '25%', '30%', '35%'], answer: 1, explanation: '20/80 = 25%.' },
    ]
  }
}

export const subjectInfo = {
  verbal: { name: 'Verbal Reasoning', icon: '📝', color: '#f472b6', gradient: 'from-pink-400 to-purple-400', mascot: '🦊', mascotName: 'Kitsune' },
  nonverbal: { name: 'Non-Verbal Reasoning', icon: '🧩', color: '#a78bfa', gradient: 'from-purple-400 to-indigo-400', mascot: '🐱', mascotName: 'Neko' },
  english: { name: 'English', icon: '📚', color: '#fb7185', gradient: 'from-rose-400 to-pink-400', mascot: '🐰', mascotName: 'Usagi' },
  maths: { name: 'Maths', icon: '🔢', color: '#34d399', gradient: 'from-emerald-400 to-teal-400', mascot: '🐻', mascotName: 'Kuma' }
}

export const levelInfo = {
  easy: { name: 'Level 1', color: '#22c55e', label: 'Beginner', stars: 1, timePerQ: 60 },
  medium: { name: 'Level 2', color: '#eab308', label: 'Intermediate', stars: 2, timePerQ: 50 },
  hard: { name: 'Level 3', color: '#ef4444', label: 'Advanced', stars: 3, timePerQ: 40 }
}

export const encouragements = {
  correct: ["スゴイ! Amazing!", "완벽해요! Perfect!", "Fantastic! 🎉", "화이팅! On fire!", "素晴らしい! Excellent!", "Super star! ⭐", "天才! Brilliant!"],
  incorrect: ["Almost! 괜찮아요!", "Good try! 頑張って!", "포기하지마! Keep going!", "Every mistake helps! 💫", "ファイト! You've got this!"],
  streak: ["🔥 2x Combo!", "🔥🔥 3x Streak!", "🔥🔥🔥 4x FIRE!", "⚡ 5x UNSTOPPABLE!", "💥 6x LEGENDARY!", "🌟 7x GODLIKE!"]
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
