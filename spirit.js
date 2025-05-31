
const colorGen=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for (let i = 0; i< 6; i++) {
      color+=hex[Math.floor(Math.random()*16)];         //The math .random operation is like it gives out an array entery to hex and it iterates over the 16 digits it has to create a hex code after 6 iterations
    }
    return color;
}
const insert=document.getElementById('insert')
// const hiddenInput = document.getElementById('hiddenInput');

// document.body.addEventListener('touchstart', function() {
//   hiddenInput.focus();
// });

document.querySelector('input').focus();

window.addEventListener('keydown',function(e){
    const rand=colorGen();
    insert.innerHTML=`
    <table style="border: 1px solid ${rand};">
    <tr>
      <th style="border: 1px solid ${rand};">key</th>
      <th style="border: 1px solid ${rand};">keyCode</th>
      <th style="border: 1px solid ${rand};">Code</th>
    </tr>
    <tr>
      <td style="border: 1px solid ${rand};">${e.key === " " ?"Space":e.key}</td>
      <td style="border: 1px solid ${rand};">${e.keyCode}</td>
      <td style="border: 1px solid ${rand};">${e.code}</td>
    </tr>
  </table>`
  insert.style.color="white";
});