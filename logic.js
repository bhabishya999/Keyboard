const insert = document.getElementById('insert');

document.addEventListener('keydown',(event)=>{
  insert.innerHTML = `
  <div class = 'keys'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${event.key === " " ? "Space" : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
  </div>`
})

