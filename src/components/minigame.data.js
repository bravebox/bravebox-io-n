const adventure = {
  clouds: [1, 2, 3, 4],
  currentScene: 0,
  scenes: 4,

  dialog: [
    'Hi! wanna storm a castle?!',
    'Don\'t judge me!',
    'I have come to slay a dragon!',
    'Man.. I could go for some coco puffs right now!',
    'You rip on me 12 or 13 more times, <br>I am out of here!',
    'Live long and phosphorus!',
    'Leave Britney alone!',
    'Welease the kwaken!',
    'My sword is shiny and sharp!',
    'You\'re a hairy wizard!',
    'I polished my armour yesterday!',
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
        'Songs will be sung of heroic deeds... alas not of you.',
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
        '\'I fear no beast!\' You quietly whisper, and you walk on...',
        'You approach the dragon. It snorts and you startle easily. You sneak away... glad it did not notice you!',
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
        'You drink heavily without eating. The next day people laugh at you for something large and erect drawn on your helm.',
        'You eat and drink well. The next day, your armour is less comfy then before',
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
        'They already see you, you are next to them... You try and reason with them, but they take your lunch money anyway.',
        'You do the most non-obvious thing and attack, you trip and your sword brak',
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