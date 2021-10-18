const start = [
    'Champ, ',
    'Fact: ',
    'Everybody says ',
    'Dang...',
    'Check it: ',
    'Just sayin\'...',
    'Superstar, ',
    'Tiger, ',
    'Self, ',
    'Know this: ',
    'News alert: ',
    'Girl, ',
    'Ace, ',
    'Excuse me but ',
    'Experts agree: ',
    'In my opinion, ',
    'Here ye, hear ye: ',
    'Okay, listen up: '
];

const middle1 = [
    'the mere idea of you ',
    'your soul ',
    'your hair today ',
    'everything you do ',
    'your personal style ',
    'every thought you have ',
    'that sparkle in your eye ',
    'your presence here ',
    'what you got going on ',
    'the essential you ',
    'your life\'s journey ',
    'that saucy personality ',
    'your DNA ',
    'that brain of yours ',
    'your choice of attire ',
    'the way you roll ',
    'whatever your secret is ',
    'all of y\'all ',
];

const middle2 = [
    'has serious game, ',
    'rains magic, ',
    'deserves the Nobel Prize, ',
    'raises the roof, ',
    'breeds miracles, ',
    'is paying off big time, ',
    'shows mad skills, ',
    'just shimmers, ',
    'is a national treasure, ',
    'is the next big thing, ',
    'roars like a lion, ',
    'is a rainbow factory, ',
    'is made of diamonds, ',
    'makes birds sing, ',
    'should be taught in school, ',
    'makes my world go \'round\', ',
    'is 100% legit, ',
];

const ending = [
    '24/7.',
    'can I get an amen?',
    'and that\'s a fact!',
    'so treat yoself',
    'you feel me?',
    'that\'s just science.',
    'would I lie?',
    'for reals.',
    'mic drop.',
    'you hidden gem.',
    'snuggle bear.',
    'period.',
    'now let\'s dance.',
    'high five!',
    'say it again!',
    'according to CNN',
    'so get used to it.',
];

const allPhrases = [start, middle1, middle2, ending];

function pepTalkGen() {
    const phrases = allPhrases.map(segment => segment[Math.floor(Math.random() * segment.length)]);
    return `${phrases[0]}${phrases[1]}${phrases[2]}${phrases[3]}`;
}

const output = pepTalkGen();
const speed = 90;
let i = 0;

function typeWriter() {
    if (i < output.length) {
        document.getElementById("pepTalkTag").innerHTML += output.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

//document.getElementById('pepTalkTag').innerHTML = output;

console.log(output);