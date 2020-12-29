//add listener to sun button to allow user switch between
//day mode and dark mode
//version 1 
// const btn = document.getElementById('modeBtn');
// btn.addEventListener('click', (e) => {
//   const body = document.body;
//   if (e.target.innerHTML === '🌞') {
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
//     e.target.innerHTML = '🌜';
//   } else {
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
//     e.target.innerHTML = '🌞';
//   }
// });

//version 2 use class name
//this a good practice. Not always rely on js
const btn = document.getElementById('modeBtn');
btn.addEventListener('click', (e) => {
  const body = document.body;
  if (body.className != 'night') {
    body.className = 'night';
  } else {
    body.className = '';
  }
});

