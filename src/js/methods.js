let ConvertStringToHTML = function (str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};


var stringToHTML = function (str) {
  var dom = document.createElement('div');
  dom.innerHTML = str;
  // const div = document.querySelector("body");  // <div></div>

// div.innerHTML = str; // <div>Hola a todos</div>
// div.textContent; 
  return dom;

};
 