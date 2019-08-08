document.getElementById('buttonTxt').addEventListener('click',loadTxt);
document.getElementById('buttonJson').addEventListener('click', loadJson);
document.getElementById('buttonApi').addEventListener('click',loadREST);
//read a txt file
function loadTxt(){
     fetch('datos.txt').then(function(res){
          return res.text();
     }).then(function(empleados){ 
          document.getElementById('result').innerHTML = empleados;
     }).catch(function(error){
          console.log(error);
     });
}

// load a json file
function loadJson(){
     fetch('file.json')
          .then(function(res){
               return res.json();
     })
     .then(function(data){
          let html='';
          data.forEach(function(empleado){
               html+=`<p>${empleado.name} ${empleado.year}
               
               </p>`;
          }) 
          document.getElementById('result').innerHTML = html;
     });
}

function loadREST(){
     fetch('https://picsum.photos/list')
          .then(function(res){
               return res.json();
          })
          .then(function(images){
               let html=''; 
               images.forEach(function(image){
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