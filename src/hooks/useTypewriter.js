import { useState, useEffect } from 'react';

export const useTypewriter = (
  words = [],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800
) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setText(currentWord.substring(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            // Reached full word, pause before deleting
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting
          setText(currentWord.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
};
