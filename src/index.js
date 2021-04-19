
document.addEventListener('DOMContentLoaded', function () {
  loadpeds();
    
  });
  
 function loadpeds() {
  const imgUrl = "http://localhost:3000/pups"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {console.log(results)
        dogbar = document.getElementById("dog-bar")
        doginfo = document.getElementById("dog-info")
             
        for (const resulDog of results) {  
          span = document.createElement('span')
          span.classList.add(`classValue`)
          span.textContent = `  ${resulDog.name}   `
          span.accessKey = `${resulDog.id}` 
          span.addEventListener('click', loadImage)
          dogbar.appendChild(span)  
                     
           }
    });
    
}


function loadImage() {
 const imgUrl = "http://localhost:3000/pups"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {console.log(results)
       for (const imageDog of results) {   
           
          document.getElementById("dog-info").innerHTML = `
           <img  src = "${imageDog.image}"/></a>`   
           h2 =  document.createElement("h2") 
           h2.textContent = `  ${imageDog.name}   `
           doginfo.appendChild(h2)
           var x = document.createElement("BUTTON")
           if ( `${imageDog.name} ` == true){
            var t = document.createTextNode("Good Dog!")
              
            } else {var t = document.createTextNode("Bad Dog!")}
              
           
           
           x.appendChild(t);
           doginfo.appendChild(x)
 
               
        } 
    })
}
