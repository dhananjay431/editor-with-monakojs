(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require.config({ paths: { vs: '../node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function () {
  const editor = monaco.editor.create(
    document.getElementById('container'),
    {
      value: '// Your initial code here',
      language: 'javascript',
      theme: 'vs-dark',
    }
  );
  function run() {
    const value = editor.getValue();
    try {
      document.getElementById("res").innerHTML = "";
      let res = new Function(value);
      res();
    } catch (err) {

    }
  }

  let x;
  editor.onDidChangeModelContent((event) => {
    // Code that will be executed whenever the editor content changes

    if(x){
      clearTimeout(x);
    }
    x = setTimeout(()=>{
      run();
      x= undefined;
    },3000)
    


  });
});
},{}]},{},[1]);
