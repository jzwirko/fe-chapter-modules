
import confetti from '../_snowpack/pkg/canvas-confetti.js';

export function print() {
  console.log('Module 1 -------- 1');
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 2000, spread: 1800, colors: ['#00FF00','#00AA00'], gravity: .3});
}


