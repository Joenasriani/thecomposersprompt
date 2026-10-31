import {defineLesson} from '../lesson-contract.js';
import {mountLesson} from '../lesson-runtime.js';
const definition=defineLesson({
  "id": "chapter-3",
  "title": "Four Strategies for Prompting Theory",
  "sections": [
    {
      "id": "examples",
      "title": "Examples in context"
    },
    {
      "id": "procedure",
      "title": "A transparent analytical procedure"
    },
    {
      "id": "perspectives",
      "title": "Choose an analytical perspective"
    },
    {
      "id": "verification",
      "title": "Research, analyze, compose, verify"
    }
  ]
});
mountLesson({definition,examples:[
  {
    "id": "examples",
    "title": "Examples in context",
    "paragraphs": [
      "A checked worked example and a new problem provide a verifiable target for text analysis. In C major, A7–Dm is V7/ii–ii, while D7–G is V7/V–V.",
      "The written progression C | F | G7 | C in C major is I | IV | V7 | I. A correct written answer does not certify that an audio generator played those chords."
    ],
    "notes": [
      "C4",
      "E4",
      "G4"
    ],
    "question": {
      "text": "In C major, what is the function of A7 resolving to D minor?",
      "options": [
        "V7/ii–ii",
        "V7/V–V",
        "I–ii"
      ],
      "answer": 0,
      "correct": "Correct. A7 is the secondary dominant of ii.",
      "incorrect": "Check the destination chord: D minor is ii in C major."
    }
  },
  {
    "id": "procedure",
    "title": "A transparent analytical procedure",
    "paragraphs": [
      "Ask for key evidence, spelled chord notes, Roman numerals, possible tonicization and cadence evidence. A chord list alone cannot confirm a phrase-ending cadence.",
      "C–F–Am | D7–G could involve Am as a pivot chord, but a shift to G major requires additional phrase and tonal-center evidence."
    ],
    "question": {
      "text": "What additional evidence is needed before claiming a cadence?",
      "options": [
        "A chord list alone",
        "Phrase ending and tonic arrival",
        "A genre label"
      ],
      "answer": 1,
      "correct": "Correct. Harmonic sequence alone does not prove a phrase boundary.",
      "incorrect": "Listen for or inspect an actual phrase ending and tonic arrival."
    }
  },
  {
    "id": "perspectives",
    "title": "Choose an analytical perspective",
    "paragraphs": [
      "Functional analysis describes harmonic departure and arrival. Jazz chord-scale analysis emphasizes available tensions and substitutions. Voice-leading analysis traces individual voices.",
      "These methods answer different questions; choosing the appropriate one is part of a reliable specification."
    ]
  },
  {
    "id": "verification",
    "title": "Research, analyze, compose, verify",
    "paragraphs": [
      "Research needs sources; chord analysis needs actual pitches; composition needs construction; verification needs notation, recording or transcription.",
      "Separate a verified text-analysis result from the musical result produced by a generator."
    ],
    "prompt": "Analyze C | F | G7 | C with C major established as tonic. Spell each chord, give its Roman numeral, explain G7, and state what phrase evidence would be needed to verify a cadence."
  }
]});
