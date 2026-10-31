import {defineLesson} from '../lesson-contract.js';
import {mountLesson} from '../lesson-runtime.js';
const definition=defineLesson({
  "id": "chapter-5",
  "title": "Scales and Modes",
  "sections": [
    {
      "id": "collection",
      "title": "One collection, seven tonal centers"
    },
    {
      "id": "dorian",
      "title": "D Dorian versus D Aeolian"
    },
    {
      "id": "phrygian",
      "title": "E Phrygian and characteristic semitone"
    },
    {
      "id": "parallel",
      "title": "Parallel modal and scale comparison"
    }
  ]
});
mountLesson({definition,examples:[
  {
    "id": "collection",
    "title": "One collection, seven tonal centers",
    "paragraphs": [
      "The introductory white-key collection can support C Ionian, D Dorian, E Phrygian, F Lydian, G Mixolydian, A Aeolian and B Locrian.",
      "A different starting note does not by itself establish a different tonic; harmonic, melodic and bass emphasis must reinforce the center."
    ],
    "notes": [
      "C4",
      "D4",
      "E4",
      "F4",
      "G4",
      "A4",
      "B4",
      "C5"
    ],
    "question": {
      "text": "Do D Dorian and C Ionian use different pitch-class collections?",
      "options": [
        "Yes",
        "No, but they have different tonics",
        "Only if the tempo changes"
      ],
      "answer": 1,
      "correct": "Correct. They share the natural notes but establish different centers.",
      "incorrect": "They use the same seven notes; tonic emphasis distinguishes them."
    }
  },
  {
    "id": "dorian",
    "title": "D Dorian versus D Aeolian",
    "paragraphs": [
      "D Dorian uses D E F G A B C. D Aeolian uses D E F G A B♭ C. Holding D as tonic isolates the characteristic sixth.",
      "A useful modal design sustains D as bass, emphasizes D and A at phrase boundaries, and makes B natural audible."
    ],
    "notes": [
      "D4",
      "F4",
      "A4",
      "B4"
    ],
    "question": {
      "text": "What distinguishes D Dorian from D natural minor?",
      "options": [
        "B natural rather than B flat",
        "F sharp rather than F",
        "An altered tonic"
      ],
      "answer": 0,
      "correct": "Correct. The sixth is natural in D Dorian.",
      "incorrect": "Compare the sixth degree over the same tonic D."
    }
  },
  {
    "id": "phrygian",
    "title": "E Phrygian and characteristic semitone",
    "paragraphs": [
      "E Phrygian uses E F G A B C D. Emphasize E as home and the F–E semitone to reveal its lowered second.",
      "An E drone and repeated melodic arrivals on E help establish tonic rather than simply playing an ascending white-key scale."
    ],
    "notes": [
      "E4",
      "F4",
      "G4",
      "B4"
    ],
    "prompt": "Compose a brief E Phrygian melody over a sustained E. Make F natural audible as the lowered second, and return to E at phrase boundaries."
  },
  {
    "id": "parallel",
    "title": "Parallel modal and scale comparison",
    "paragraphs": [
      "Relative comparisons change tonic within one pitch collection; parallel comparisons hold tonic fixed and change scale degrees.",
      "E Phrygian to E Phrygian dominant raises G to G♯. E Phrygian dominant to E double harmonic major raises D to D♯."
    ],
    "notes": [
      "E4",
      "F4",
      "G#4",
      "B4",
      "D#5"
    ],
    "question": {
      "text": "Which pitch changes from E Phrygian dominant to E double harmonic major?",
      "options": [
        "G to G sharp",
        "D to D sharp",
        "F to F sharp"
      ],
      "answer": 1,
      "correct": "Correct. The seventh degree is raised to D sharp.",
      "incorrect": "Keep the other pitches fixed while comparing the seventh."
    }
  }
]});
