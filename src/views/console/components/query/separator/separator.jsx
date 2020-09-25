import React, { useState } from 'react';
import './separator.scss';

function Separator() {
  // const [dragStarted, setDragStarted] = useState(false);
  // const first = document.getElementById('first');
  // const second = document.getElementById('second');

  // const dragStart = (event) => {
  //   window.addEventListener('mousemove', dragMove(first));
  //   window.addEventListener('mouseup', dragEnd(first));
  // }
  // const dragMove = (first) => (event) => {
  //   const delta = event.pageX - first.getBoundingClientRect().right;
  //   first.style.width =  parseInt(getComputedStyle(first, '').width) + delta + 'px';
  // }
  // const dragEnd = (first) => (event) => {
  //   window.removeEventListener('mousemove', dragMove);
  //   window.removeEventListener('mouseup', dragEnd);
  // }


  return (
    <span className="separator" />
    // <span className="separator" onMouseDown={dragStart} />
  )
}

export default Separator;
