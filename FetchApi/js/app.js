document.getElementById('buttonTxt').addEventListener('click',loadTxt);
document.getElementById('buttonJson').addEventListener('click', loadJson);
document.getElementById('buttonApi').addEventListener('click',loadREST);
//read a txt file
function loadTxt(){
     fetch('datos.txt').then(res=>{
          return res.text();
     }).then(empleados=>{ 
          document.getElementById('result').innerHTML = empleados;
     }).catch(error=>{
          console.log(error);
     });
}

// load a json file
function loadJson(){
     fetch('file.json')
          .then(res=>{
               return res.json();
     })
     .then(data=>{
          let html='';
          data.forEach(empleado=>{
               html+=`<p>${empleado.name} ${empleado.year}
               
               </p>`;
          }) 
          document.getElementById('result').innerHTML = html;
     });
}

function loadREST(){
     fetch('https://picsum.photos/list')
          .then(res=>{
               return res.json();
          })
          .then(images=>{
               let html=''; 
               images.forEach(image=>{
                    html +=`
                    <li> 
                         <strong>${image.author}</strong>
                         <a href="${image.post_url}">Ver Imagen</a>

                    </li>
                    `
               })
               document.getElementById('result').innerHTML = html;
          })
}