
/* Chapter-specific learning checks. These are instructional tools, not model-output simulators. */
const tasks={
'1':{heading:'Layered score audit',question:'Which instruction is an explicit harmonic constraint?',answers:['Use [Am] [F] [C] [G] in this order','Make the music beautiful','Aim for an inspiring mood'],correct:0,why:'A named sequence is testable against the result. Mood descriptions are less determinate.'},
'2':{heading:'Theory verification',question:'Which evidence is needed before labeling C–E♭–G?',answers:['The exact pitch classes','Its genre label','The prompt wording alone'],correct:0,why:'C–E♭–G is a minor triad; pitch evidence must precede the label.'},
'3':{heading:'Prompt strategy diagnostic',question:'Which instruction requires a checkable reasoning process?',answers:['Name the chord, spell each note and justify the intervals','Act like an expert only','Make it dramatic'],correct:0,why:'Explicit output and evidence requirements can be inspected.'},
'3-5':{heading:'Prompt architecture audit',question:'Which is a measurable specification?',answers:['90 BPM, A minor, Am–F–C–G','A cinematic feeling','Make it modern'],correct:0,why:'Tempo, tonal center and chord sequence establish inspectable constraints.'},
'4':{heading:'Interval diagnostic',question:'From C4 to E♭4, what is the interval?',answers:['Minor third','Major third','Perfect fourth'],correct:0,why:'C to E♭ spans three semitones and three letter names.'},
'5':{heading:'Modal diagnostic',question:'Which pitch distinguishes D Dorian from D natural minor?',answers:['B natural (major sixth)','B♭ (minor sixth)','F♯ (major third)'],correct:0,why:'D Dorian has the major sixth B; D Aeolian has B♭.'},
'6':{heading:'Key and mode audit',question:'What must be verified beyond writing D Dorian in a prompt?',answers:['D as tonal center and B natural in context','Only the word Dorian','Only instrument selection'],correct:0,why:'The tonal center and characteristic scale tones establish the mode.'},
'7':{heading:'Progression identification',question:'In C major, what is I–V–vi–IV?',answers:['C–G–Am–F','C–F–G–C','Am–F–C–G'],correct:0,why:'I=C, V=G, vi=Am and IV=F.'},
'8':{heading:'Temporal-grid calculation',question:'How many quarter-note beats are in four bars of 4/4?',answers:['16','12','8'],correct:0,why:'Four bars multiplied by four quarter-note beats per bar equals sixteen.'},
'9':{heading:'Contour discrimination',question:'Which sequence rises stepwise?',answers:['C4–D4–E4–F4','C4–G4–D4–A4','G4–E4–C4'],correct:0,why:'Adjacent scale steps produce a stepwise ascending contour.'},
'10':{heading:'Four-layer prompt audit',question:'Which four fields match the manuscript template?',answers:['Key/mode, tempo/meter, chords, instrumentation/texture','Genre, logo, platform, hashtags','Mood, image, slogan, length'],correct:0,why:'These four layers specify the musical foundation and arrangement.'},
'11':{heading:'Cadence function diagnostic',question:'Which progression expresses tonic–predominant–dominant–tonic in C?',answers:['C–F–G7–C','C–Am–C–Am','G–C–F–D'],correct:0,why:'I–IV–V7–I realizes T–S–D–T functions in a simple tonal context.'},
'12':{heading:'Non-chord-tone diagnostic',question:'In C–D–E over a C-major harmony, D may act as what?',answers:['Passing tone','Chordal third','Root'],correct:0,why:'D connects chord tones C and E by step when placed and accented accordingly.'},
'13':{heading:'Arrangement specification',question:'Which instruction describes register explicitly?',answers:['Place bass below C3 and melody above C4','Use nice instruments','Make it intense'],correct:0,why:'A register specification constrains how an arrangement is distributed.'},
'14':{heading:'Extension diagnostic',question:'Which tones make Cmaj7?',answers:['C–E–G–B','C–E–G–B♭','C–F–G'],correct:0,why:'The major seventh B distinguishes Cmaj7 from C7.'},
'15':{heading:'Borrowed-chord audit',question:'In C major, where can F minor be borrowed from?',answers:['C minor (parallel minor)','G major (dominant key)','D major'],correct:0,why:'F minor is iv in parallel C minor, commonly borrowed into C major.'},
'16':{heading:'Secondary dominant audit',question:'Which chord acts as V/ii in C major?',answers:['A7','G7','Fmaj7'],correct:0,why:'A7 is the dominant of D minor, the ii chord in C major.'},
'17':{heading:'Inversion audit',question:'Which pitch must be lowest in C/E?',answers:['E','C','G'],correct:0,why:'C/E indicates a C-major triad with E in the bass.'},
'18':{heading:'Parallelism diagnostic',question:'What remains constant during parallel major-triad planing?',answers:['Chord quality and interval structure','The same root','Functional dominant motion'],correct:0,why:'Parallel planing transposes a fixed chord shape.'},
'19':{heading:'Harmony prompt audit',question:'What makes a named chord extension verifiable?',answers:['Audible pitches consistent with the chord','The tool name only','A genre tag'],correct:0,why:'The pitch set and voicing have to be checked in the realization.'},
'20':{heading:'Modulation diagnostic',question:'What distinguishes modulation from a brief tonicization?',answers:['Sustained establishment of a new tonal center','Any chromatic note','Any borrowed chord'],correct:0,why:'A modulation requires evidence of arrival and continuation in the new key.'},
'21':{heading:'Arrangement timeline diagnostic',question:'Which prompt specifies behavior over time?',answers:['Add strings in bar five and remove drums in bar nine','Use drums and strings','Give it energy'],correct:0,why:'Entry and exit timing define a temporal arrangement.'},
'22':{heading:'Preflight check',question:'Which step belongs before generation?',answers:['Record constraints and acceptance criteria','Assume any output is correct','Ignore meter'],correct:0,why:'A specification makes subsequent verification possible.'},
'23':{heading:'Single-variable experiment',question:'To test a tempo change, what stays constant?',answers:['All other prompt variables','Nothing','Instrumentation and key also change'],correct:0,why:'Controlled comparison isolates one changed parameter.'},
'24':{heading:'Negative control audit',question:'How should exclusions be evaluated?',answers:['Test whether excluded elements are absent','Assume negative wording is obeyed','Judge only track title'],correct:0,why:'Negative instructions are claims to be verified from output.'},
'25':{heading:'Section replacement',question:'What should an inpainting comparison preserve?',answers:['Unaffected surrounding musical context','Only the filename','No reference to the original'],correct:0,why:'A section edit is evaluated against the retained arrangement.'},
'26':{heading:'Competency diagnostic',question:'Why record audible evidence?',answers:['To distinguish specification from realization','To make prompts longer','To avoid comparing results'],correct:0,why:'Theory-guided prompts need verifiable outcomes.'},
'27':{heading:'Class exercise diagnostic',question:'What produces a meaningful learning comparison?',answers:['Change one musical constraint and document results','Change everything simultaneously','Use only adjectives'],correct:0,why:'A controlled musical comparison supports learning.'},
'28':{heading:'Teach-back diagnostic',question:'A learner calls C–E♭–G major. What is the correct correction?',answers:['It is minor because the third is E♭','It is major because G is present','It has no triad quality'],correct:0,why:'Correct the third interval and explain the reasoning.'},
'28-5':{heading:'Harmony decision record',question:'Which record enables reproducible iteration?',answers:['Constraint, result, evidence and next change','Only the track title','Only the mood'],correct:0,why:'A useful decision record connects specifications to observed outcomes.'},
'29':{heading:'Suno constraint audit',question:'What must be tested after entering chord tags?',answers:['Whether the audio follows the intended chords','Whether tags look decorative','Only the model version name'],correct:0,why:'Tool-specific text syntax cannot guarantee harmonic realization.'},
'30':{heading:'Udio constraint audit',question:'What is needed before trusting a structural prompt?',answers:['Listen for the requested section behavior','Assume the token is obeyed','Check only output duration'],correct:0,why:'Section and arrangement behavior require inspection.'},
'31':{heading:'Cross-tool translation',question:'What should remain invariant across tools?',answers:['Underlying musical intent and testable constraints','Every interface keyword','The output filename'],correct:0,why:'Translate the specification, then adapt syntax to each tool.'},
'31-5':{heading:'Tool-landscape comparison',question:'What provides a fair tool comparison?',answers:['Same brief and explicit acceptance criteria','Different unrelated prompts','Promotional feature claims only'],correct:0,why:'A consistent task and criteria separate differences in execution.'},
'32':{heading:'Capstone diagnostic',question:'What completes a full musical specification study?',answers:['Brief, generated result, evidence and revision','Prompt text alone','A genre label'],correct:0,why:'A complete study compares a designed specification with actual musical output.'}
};
export function buildPractice(chapter){
 const lesson=tasks[chapter];if(!lesson)return;
 const main=document.querySelector('main'),before=document.querySelector('#manuscript');if(!main||!before)return;
 const section=document.createElement('section');section.className='practice';section.id='learning-check';section.setAttribute('aria-label',lesson.heading);
 const left=document.createElement('div'),right=document.createElement('div');
 const eyebrow=document.createElement('p');eyebrow.className='eyebrow';eyebrow.textContent='03 · THEORY CHECK';
 const h=document.createElement('h2');h.textContent=lesson.heading;
 const question=document.createElement('p');question.textContent=lesson.question;
 left.append(eyebrow,h,question);
 const answers=document.createElement('div');answers.className='answers';answers.style.flexWrap='wrap';
 const feedback=document.createElement('p');feedback.className='feedback';feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 lesson.answers.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.addEventListener('click',()=>{answers.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));feedback.dataset.correct=String(i===lesson.correct);feedback.textContent=(i===lesson.correct?'Correct. ':'Not quite. ')+lesson.why});answers.append(b)});
 right.append(answers,feedback);section.append(left,right);main.insertBefore(section,before);
}

