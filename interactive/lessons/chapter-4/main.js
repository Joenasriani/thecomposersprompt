import {defineLesson} from '../lesson-contract.js';
import {mountLesson} from '../lesson-runtime.js';
const definition=defineLesson({
  "id": "chapter-4",
  "title": "The Emotional Grammar of Intervals",
  "sections": [
    {
      "id": "construct",
      "title": "Count first, interpret second"
    },
    {
      "id": "quality",
      "title": "Interval number and quality"
    },
    {
      "id": "melodic",
      "title": "Melodic and harmonic intervals"
    },
    {
      "id": "interpret",
      "title": "Interpret expressive character with care"
    }
  ]
});
mountLesson({definition,examples:[
  {
    "id": "construct",
    "title": "Count first, interpret second",
    "paragraphs": [
      "In 12-tone equal temperament adjacent piano keys are one semitone apart. C–D is two semitones, E–F is one.",
      "Written interval identity also depends on letter spelling: C–F♯ is an augmented fourth while C–G♭ is a diminished fifth. Both span six semitones."
    ],
    "notes": [
      "C4",
      "Db4"
    ],
    "question": {
      "text": "How many semitones separate E and F?",
      "options": [
        "Two",
        "One",
        "Three"
      ],
      "answer": 1,
      "correct": "Correct. E to F is one semitone.",
      "incorrect": "There is no black key between E and F."
    }
  },
  {
    "id": "quality",
    "title": "Interval number and quality",
    "paragraphs": [
      "Count letter names inclusively to find the generic number, then count semitones to determine quality.",
      "C–E♭ is a minor third (3 semitones); C–E is a major third (4). A perfect fifth C–G spans 7 semitones."
    ],
    "notes": [
      "C4",
      "E4"
    ],
    "question": {
      "text": "C to F sharp is written as which interval?",
      "options": [
        "Augmented fourth",
        "Diminished fifth",
        "Major third"
      ],
      "answer": 0,
      "correct": "Correct. C to F spans four letters; the raised F makes it augmented.",
      "incorrect": "Count letter names C–D–E–F before considering semitones."
    }
  },
  {
    "id": "melodic",
    "title": "Melodic and harmonic intervals",
    "paragraphs": [
      "A melodic interval sounds sequentially. A harmonic interval sounds simultaneously. Their expressive effects depend on timbre, harmony, register and context.",
      "This playback sounds pitches together. For a successive melodic interval, the notes must be articulated one after the other."
    ],
    "notes": [
      "B4",
      "C5"
    ],
    "prompt": "Write a short melodic phrase that moves upward from B4 to C5 in succession, rather than sounding the two pitches simultaneously. Keep instrument and dynamics constant to compare the semitone motion."
  },
  {
    "id": "interpret",
    "title": "Interpret expressive character with care",
    "paragraphs": [
      "Interval distance is a measurable property; labels such as tense, hopeful or nostalgic are interpretations, not definitions.",
      "Describe the interval's spelling, motion and harmonic situation before assessing its expression."
    ]
  }
]});
