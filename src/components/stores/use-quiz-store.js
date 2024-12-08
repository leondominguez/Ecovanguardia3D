import { create } from 'zustand';
import '../pages/logical-components/Quiz';

const useQuizStore = create((set) => ({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    percentageQuizComplete: 0, // Corregir typo y usar coma en lugar de punto
  },

  setQuiz: (quizUpdates) => 
    set((state) => ({
      quiz: { ...state.quiz, ...quizUpdates },
    })),

  clearQuiz: () =>
    set({
      quiz: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        percentageQuizComplete: 0, // Corregir typo
      },
    }),

  incrementQuizPercentage: () =>
    set((state) => {
      const newPercentage = Math.min(state.quiz.percentageQuizComplete + 25, 100);
      return {
        quiz: { ...state.quiz, percentageQuizComplete: newPercentage },
      };
    }),
}));

export default useQuizStore;
