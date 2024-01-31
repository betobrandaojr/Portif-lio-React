import React, { useState, useEffect } from 'react';

const TextAnimator = ({ toRotate, period }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentText = toRotate[loopNum % toRotate.length];
    const updateText = () => {
      const delta = isDeleting ? 50 : 150 - Math.random() * 50;
      setTimeout(() => {
        let newText;
        if (isDeleting) {
          newText = currentText.substring(0, text.length - 1);
          setText(newText);
          if (newText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
        } else {
          newText = currentText.substring(0, text.length + 1);
          setText(newText);
          if (newText === currentText) {
            setTimeout(() => setIsDeleting(true), period);
          }
        }
      }, delta);
    };
    updateText();
  }, [text, isDeleting, loopNum, toRotate, period]);

  return <span className="wrap">{text}</span>;
};

export default TextAnimator;
