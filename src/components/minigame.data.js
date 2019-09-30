const adventure = {
  clouds: [1, 2, 3, 4],
  currentScene: 0,
  scenes: 4,

  dialog: [
    'Hi you want to storm a castle?!',
    'Don\'t judge me!',
    'I have come to slay a dragon!',
    'Man.. I could go for some coco puffs right now!',
    'You rip on me 12 or 13 more times, <br>I am out of here!',
    'Live long and phosphorus!',
    'Leave Britney alone!',
    'Welease the kwaken!',
    'My sword is shiny and sharp!',
    'You\'re a hairy wizard!',
    'I polished my armour!',
  ],

  sceneDialog: [
    // empty
    {
      question: '',
      answers: ['', ''],
      resolutions: ['', '']
    },
    //
    {
      question: 'You near a high tower, <i>what do you do</i>?',
      answers: [
        'you walk on',
        'you attack',
      ],
      resolutions: [
        'Songs will be sung of heroic deeds... but alas not of you.',
        'Honor demands you storm the tower and liberate its oppressed pheasants... You weigh your options and decide to come back when you have more men and a few siege engines...',
      ]
    },
    ///
    {
      question: 'A dragon is sleeping peacefully, <i>what do you do</i>?',
      answers: [
        'you walk on',
        'you attack',
      ],
      resolutions: [
        '\'I fear no beast!\' You whisper, and you walk on...',
        'You approach the dragon. It snorts and you startle easily. You scamble away... glad it did not notice you...',
      ]
    },
    ///
    {
      question: 'Finally! A town to quench your hunger and thirst, <i>what do you do</i>?',
      answers: [
        'you drink',
        'you eat and drink',
      ],
      resolutions: [
        'You drink heavily without eating. When you leave the next day, people snicker at you. You discover there is a giant dick drawn on your helm...',
        'You eat and drink well. When you leave the next day, you swear your armour shrunk overnight...',
      ]
    },
    ///
    {
      question: 'There are two nasty goblins blocking your path, <br><i>what do you do</i>?',
      answers: [
        'you flee',
        'you attack',
      ],
      resolutions: [
        'As they have already seen you... You try to reason with them, but in the end you still have to pay the little you own...',
        'You feel confident, but flee anyway...',
      ]
    },
    ///
    {
      question: 'There is a icecream stand next to the road, <i>what do you do</i>?',
      answers: [
        'you walk on',
        'you order some icecream',
      ],
      resolutions: [
        'a',
        'b',
      ]
    },
  ]
}

export default adventure;