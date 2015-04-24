var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

var modules = {
	require: function () {
		return require;
	}
};

function getModule (moduleName) {
	var module = modules[moduleName];

  if(typeof module === 'function') {
    module = modules[moduleName] = module();
  }

  return module;
}

function define (moduleName, fn) {
  modules[moduleName] = fn;
}

function require (moduleName) {
  return getModule(moduleName);
}