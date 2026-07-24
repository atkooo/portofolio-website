/**
 * Typewriter effect for hero title roles
 */
export const initTypewriter = () => {
  const typewriterEl = document.querySelector("#typewriter-text");
  if (!typewriterEl) return;

  const texts = [
    "Full Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
  ];
  let count = 0;
  let index = 0;

  const type = () => {
    if (count === texts.length) count = 0;
    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    if (typewriterEl) {
      typewriterEl.textContent = letter;

      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 100);
      }
    }
  };

  type();
};
