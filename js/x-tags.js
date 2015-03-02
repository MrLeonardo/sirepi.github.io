var xtags = {};
var xGistProto = Object.create(HTMLElement.prototype);

xGistProto.createdCallback = function() {
  this.innerHTML = "<b>I'm in the element's Shadow DOM!</b>";
};

xtags.gist = document.registerElement('x-gistss', {prototype: xGistProto});