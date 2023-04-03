export const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 1,
  questions: [
    {
      question:
        "What command is used to start the React local development server?",
      choices: ["npm build", "npm start", "npm run dev", "npm serve"],
      type: "MCQs",
      correctAnswer: "npm start",
    },
    {
      question:
        "What is the default local host port that a React development server uses?",
      choices: ["3000", "8080", "5000", "3500"],
      type: "MCQs",
      correctAnswer: "3000",
    },
    {
      question: "To develop and run React code, Node.js is required.",
      choices: ["true", "false"],
      type: "MCQs",
      correctAnswer: "true",
    },
  ],
};
