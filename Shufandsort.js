

function shuffle() {
  var cardNumbers = [];
  
  $('.card').each(function() {
    cardNumbers.push(this.innerHTML);
  });
  
  var theLength = cardNumbers.length - 1;
  var toSwap;
  var temp;
  
  for (var i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * (i + 1));
    temp = cardNumbers[i];
    cardNumbers[i] = cardNumbers[toSwap];
    cardNumbers[toSwap] = temp;
  }
  
  i = 0;
  
  $('.card').each(function() {
    this.innerHTML = cardNumbers[i];
    i++;
  });
}

function sort(){
  var cardNumbers = [];
  
  $('.card').each(function() {
    cardNumbers.push(+this.innerHTML);
  });
  
  cardNumbers.sort();
  
  i = 0;
  
  $('.card').each(function() {
    this.innerHTML = cardNumbers[i];
    i++;
  });
}
