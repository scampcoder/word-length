const print = function(msg) {
  document.getElementById('output').innerHTML = "Length is " + msg; //put concatenation of str and msg in HTML

}

document.getElementById('btn').onclick = function(e) {
  print(document.getElementById('str').value.length); //upon clicking the button, run the print with the length of the string
}
