export default [
  {
    quizTheme: 'computers',
    title: 'Computers',
    bgColor: '#36b1f0',
    questions: [
      {
        question: "What is localhost's IP adress?",
        answers: [
          { id: '1', text: '192.168.1.1' },
          { id: '2', text: '127.0.0.1', correct: true },
          { id: '3', text: '255.255.0.0' },
          { id: '4', text: '192.168.0.1' },
        ],
      },
      {
        question: 'What kind of fruit was used to name a computer in 1984?',
        answers: [
          { id: '1', text: 'Blackberry' },
          { id: '2', text: 'Blueberry' },
          { id: '3', text: 'Pear' },
          { id: '4', text: 'Apple', correct: true },
        ],
      },
    ],
  },
  {
    quizTheme: 'space',
    title: 'Space',
    bgColor: '#799496',
    questions: [
      {
        question: 'Which county landed to the moon first?',
        answers: [
          { id: '1', text: 'USA', correct: true },
          { id: '2', text: 'USSR' },
          { id: '3', text: 'China' },
          { id: '4', text: 'Zambia' },
        ],
      },
      {
        question: 'What is the fifth planet from the sun?',
        answers: [
          { id: '1', text: 'Mars' },
          { id: '2', text: 'Jupiter', correct: true },
          { id: '3', text: 'Saturn' },
          { id: '4', text: 'Venus' },
        ],
      },
    ],
  },
]
