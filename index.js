const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {
  const titleTutorials = tutorials.map(changeCase);

  return titleTutorials;
}

function changeCase(listArray) {
  listArray = listArray.toLowerCase();
  listArray = listArray.split(' ');
  for (var i = 0; i < listArray.length; i++) {
    listArray[i] = listArray[i].charAt(0).toUpperCase() + listArray[i].slice(1);
    if (listArray[i] === "Oo") {
      listArray[i] = "OO";
    }
    else if (listArray[i] === "Api") {
      listArray[i] = "API";
    }
    else if (listArray[i] === "Nan") {
      listArray[i] = "NaN";
    }
    else if (listArray[i] === "Stoppropagation") {
      listArray[i] = "StopPropagation";
    }
    else if (listArray[i] === "Preventdefault?") {
      listArray[i] = "PreventDefault?";
    }
    else if (listArray[i] === "Jsonp?") {
      listArray[i] = "JSONP?";
    }
  }
  return listArray.join(' ');
}

