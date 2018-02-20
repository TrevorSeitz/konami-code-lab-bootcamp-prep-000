const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
      key = parseInt(e.detail || e.which);

  function onKeyDownHandler(e) {
    var key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      if (index === code.length) {
        console.log('Hooray!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
