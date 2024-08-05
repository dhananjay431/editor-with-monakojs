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