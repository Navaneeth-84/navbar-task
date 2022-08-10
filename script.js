linkArr = [
  "https://www.google.com",
  "https://www.wikipedia.com",
  "https://www.bing.com",
  "https://www.yahoo.com",
];

showLinks.onclick = function () {
  makeVisibleOrHidden();
};

function makeVisibleOrHidden() {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
    if(b1.style.visibility=='visible')
    {
      b1.style.visibility = 'hidden';
      b2.style.visibility = 'hidden';
      b3.style.visibility = 'hidden';
      b4.style.visibility = 'hidden';

    }
    else
    {
      b1.style.visibility = 'visible';
      b2.style.visibility = 'visible';
      b3.style.visibility = 'visible';
      b4.style.visibility = 'visible';
    }
}

b1.onclick = function()
{
  window.open(linkArr[0], "_blank");
}
b2.onclick = function()
{
  window.open(linkArr[1], "_blank");
}
b3.onclick = function()
{
  window.open(linkArr[2], "_blank");
}
b4.onclick = function()
{
  window.open(linkArr[3], "_blank");
}