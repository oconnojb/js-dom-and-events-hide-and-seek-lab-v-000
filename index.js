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
  let aule = document.getElementById('#grand-node');
  conslole.log("aule: " + aule)
  let melko = depth(aule);
  conslole.log("melko: " + melko)
  return melko;
}

function depth(node) {
  conslole.log("depth(node): " + node)
  if (node.firstChild) {
    conslole.log("node.firstChild: " + node.firstChild)
    depth(node.firstChild);
  }
  else {
    return node;
  }
}
