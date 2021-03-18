
import confetti from '../_snowpack/pkg/canvas-confetti.js';

export function print() {
  console.log('Module 2 -------- 2');
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 2000, spread: 1800 , colors: ['#FF0000','#FFFF00']});
}


