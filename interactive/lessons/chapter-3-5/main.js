import {defineLesson} from '../lesson-contract.js';
import {mountLesson} from '../lesson-runtime.js';
const definition=defineLesson({
  "id": "chapter-3-5",
  "title": "The Prompt Architecture",
  "sections": [
    {
      "id": "fields",
      "title": "From brief to musical specification"
    },
    {
      "id": "evidence",
      "title": "Constraints require a verification method"
    },
    {
      "id": "translation",
      "title": "Separate target, interface and evidence"
    }
  ]
});
mountLesson({definition,examples:[
  {
    "id": "fields",
    "title": "From brief to musical specification",
    "paragraphs": [
      "Separate the artistic brief from musical facts, arrangement preferences and tool-specific input fields.",
      "A plan can specify C major, quarter note = 96 BPM, 4/4, one chord per bar, and piano with bass without claiming any generator will obey these details."
    ],
    "question": {
      "text": "Which is a measurable musical constraint?",
      "options": [
        "Warm and nostalgic",
        "One chord per bar in 4/4",
        "Professionally produced"
      ],
      "answer": 1,
      "correct": "Correct. Bar-by-bar transcription can test chord rhythm.",
      "incorrect": "Choose the statement with an objective verification method."
    }
  },
  {
    "id": "evidence",
    "title": "Constraints require a verification method",
    "paragraphs": [
      "A constraint says what should remain fixed; a test describes evidence that it was honored. For one chord per bar, inspect a bar-by-bar transcription.",
      "Tempo is not emotion. Beat unit, harmonic rhythm, articulation and texture all influence perceived motion."
    ]
  },
  {
    "id": "translation",
    "title": "Separate target, interface and evidence",
    "paragraphs": [
      "A musical target is not the same as the interface text field used to submit it; neither is evidence that the result complied.",
      "Bracketed chord cues and exclusions such as 'no drums' are not universal control codes. Verify the resulting sound."
    ],
    "prompt": "Instrumental indie-pop, C major, quarter note = 96 BPM, 4/4, piano and bass, eight bars, one chord per bar: C | G | Am | F | C | F | G | C. End with a stable C-major arrival. Verify chord and bar adherence from the result."
  }
]});
