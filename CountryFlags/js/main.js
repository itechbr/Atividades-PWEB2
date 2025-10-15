import flags from './model/flags.js';

const container = document.querySelector('.container main');

flags.forEach(flag => {
  const flagDiv = document.createElement('div');
  flagDiv.className = 'flag col-2 my-2 text-center';

  const img = document.createElement('img');
  img.src = flag.image;
  img.alt = flag.name;

  const p = document.createElement('p');
  p.textContent = flag.name;

  flagDiv.appendChild(img);
  flagDiv.appendChild(p);

  container.appendChild(flagDiv);
});
