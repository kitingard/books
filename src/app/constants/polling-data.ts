import { Question } from '../models/question.interface';

export const pollingData: Question = {
  question: 'What do you expect from a good book?',
  options: [
    {
      answer: 'Something that will make me laugh, cry, and ponder all at once.',
      question: 'Your emotional rollercoaster menu for today is:',
      options: [
        {
          answer:
            'Learn taxidermy while working in the English countryside B&B.',
          bookId: 'english-animals-laura-kaye',
        },
        {
          answer: "Take a look at the doctor's secret diary.",
          bookId: 'this-is-going-to-hurt-adam-kay',
        },
        {
          answer:
            'Meet four graduates in New York and watch them grow and their friendship evolve.',
          bookId: 'a-little-life-hanya-yanagihara',
        },
        {
          answer:
            'Listen to the story of a young neurologist attempting to find a cure for addiction while caring for her depressed mother.',
          bookId: 'transcendent-kingdom-yaa-gyasi',
        },
      ],
    },
    {
      answer: 'Adventures that make me forget about reality for a bit.',
      question: 'What kind of vibe do you prefer for your adventure?',
      options: [
        {
          answer: 'Take a breathtaking trip to space in a one-man ship.',
          bookId: 'project-hail-mary-andy-weir',
        },
        {
          answer:
            'Dive into a modern dystopian setting that feels eerily possible.',
          bookId: 'prophet-song-paul-lynch',
        },
        {
          answer: 'Explore the hidden underground city beneath London.',
          bookId: 'neverwhere-neil-gaiman',
        },
        {
          answer:
            'Navigate a world struck by a pandemic, seeking resilience and hope.',
          bookId: 'stand-stephen-king',
        },
      ],
    },
  ],
};
