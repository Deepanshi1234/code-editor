
function run(){

    let code=document.getElementById("editor").value;
    let output=document.getElementById("output").value;

    output.contentDocument.body.innerHTML=code;
}




let locked = false;

function toggleLock() {
  locked = !locked;
  document.getElementById('editor').readOnly = locked;
}

document.getElementById('copyBtn').addEventListener('click', function() {
  const editorContent = document.getElementById('editor');
  editorContent.select();
  document.execCommand('copy');
  alert('Code copied to clipboard!');
});

document.getElementById('saveBtn').addEventListener('click', function() {
  const editorContent = document.getElementById('editor').value;
  // You can implement save functionality here, e.g., sending content to a server
  alert('Code saved!');
});
var content = document.getElementsByTagName('body','textarea')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
// addline
// function addLineClass (textarea) {
//     var lines = textarea.innerText.split("\n"); // can use innerHTML also
//     while(textarea.childNodes.length > 0) {
//         textarea.removeChild(textarea.childNodes[0]);
//     }
//     for(var i = 0; i < lines.length; i++) {
//         var span = document.createElement("span");
//         span.className = "line";
//         span.innerText = lines[i]; // can use innerHTML also
//         textarea.appendChild(span);
//         textarea.appendChild(document.createTextNode("\n"));
//     }
// }
// window.addEventListener("load", function () {
//     var pres = document.getElementsByTagName("textarea");
//     for (var i = 0; i < pres.length; i++) {
//         addLineClass(pres[i]);
//     }
// }, false);