import { useState, useEffect } from 'react';

/**
 * Custom hook for live typewriter text animation.
 * 
 * @param {string[]} phrases Array of strings to cycle through
 * @param {number} typeSpeed Delay between typing characters (ms)
 * @param {number} deleteSpeed Delay between deleting characters (ms)
 * @param {number} holdDuration Delay to keep full text displayed before deleting (ms)
 * @param {number} pauseBeforeNext Delay before typing the next word (ms)
 * @returns {string} Currently rendered text
 */
export function useTypewriter(
  phrases = [],
  typeSpeed = 60,
  deleteSpeed = 28,
  holdDuration = 2200,
  pauseBeforeNext = 350
) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typeSpeed);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    const fullPhrase = phrases[phraseIndex] || '';

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setSpeed(typeSpeed);

        if (currentText.length === fullPhrase.length) {
          setSpeed(holdDuration);
          setIsDeleting(true);
        }
      } else {
        // Deleting backwards
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setSpeed(deleteSpeed);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setSpeed(pauseBeforeNext);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, speed, phrases, typeSpeed, deleteSpeed, holdDuration, pauseBeforeNext]);

  return currentText;
}

export default useTypewriter;
