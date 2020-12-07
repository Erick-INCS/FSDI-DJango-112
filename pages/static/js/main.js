/*
let pointer = document.getElementById('p');

document.onmouseover = (e) => {

  p.style.top = e.clientY + 'px';
  p.style.left = e.clientX + 'px';
};
*/
window.onload = () => {

  let ps = document.getElementsByTagName('p');
  for (p of ps) {
    p.innerHTML = p.innerText.split('').map(c=>`<span class="p">${c}</span>`).join('');
  }
}
