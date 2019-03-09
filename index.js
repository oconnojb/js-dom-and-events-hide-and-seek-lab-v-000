function getFirstSelector(selector) {
  let aule = document.querySelector(selector);
  return aule;
}

function nestedTarget() {
  let aule = document.querySelector('#nested');
  let melko = aule.querySelector('.target');
  return melko;
}

function increaseRankBy(n) {
  let aule = document.querySelectorAll('.ranked-list');

  for (var i = 0; i < aule.length; i++) {
    let melko = aule[i].getElementsByTagName('li');

    for (var a = 0; a < melko.length; a++) {
      melko[a].innerHTML = parseInt(melko[a].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let aule = document.getElementById('grand-node');
  let prev;

  while (aule.querySelector('div') != null) {
    prev = aule;
    aule = aule.querySelector('div');
  }

  return prev;
}
