const quotes=[
{
  quote:
  "Programming isn't about what you know; it's about what you can figure out.",
  author:
  "Chris Pine"
},
{
  quote:
  "The only way to learn a new programming language is by writing programs in it.",
author:
" Dennis Ritchie"
},
{
  quote:
  "Sometimes it's better to leave something alone, to pause, and that's very true of programming.", 
  author:
  "Joyce Wheeler"
},
{
  quote:
  "Testing leads to failure, and failure leads to understanding." ,
  author:
  "Burt Rutan"
},
{
  quote:
  "The best error message is the one that never shows up.",
author:
"Thomas Fuchs"

},
]
  const gen = document.querySelector('.generate');
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');

  gen.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;

  });