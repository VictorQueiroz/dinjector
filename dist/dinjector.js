var modules = {};

function define (moduleName, fn) {
  modules[moduleName] = fn;
}

function require (moduleName) {
  var module = modules[moduleName];

  if(typeof module === 'function') {
    module = modules[moduleName] = module();
  }

  return module;
}