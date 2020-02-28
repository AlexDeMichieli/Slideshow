let wrapper1 = document.getElementById("wrapper1");
let wrapper2 = document.getElementById("wrapper2");
let images = document.getElementsByClassName("image")
let next =  document.getElementById("next");
let prev = document.getElementById("prev");
let test = document.getElementById("index");


let newArrray = [];
let emptyThumbailArray = []
let index = 0;

for (let i=0; i< images.length; i++) {
  
 newArrray.push(images[i].currentSrc)
}

function backward() {
  wrapper1.style.transition = ".3s";

  index = index - 1
  if (index < 0) {
  images[newArrray.length -1].style.width = "15%" ;
  index = newArrray.length -1;
  console.log(index)
  }

  if (index == newArrray.length -1) {
  images[0].style.width = "10%"  
  }  

  let url = "url" + '(' + newArrray[index] + ')'
  wrapper1.style.backgroundImage =  url;
  images[index].style.width = "15%"
  console.log(index);
  images[index].style.transition = "all .1s";
  
}

function forward(){
  
  wrapper1.style.transition = ".3s";
  index = index + 1

  if (index > newArrray.length - 1) {
  images[newArrray.length - 1].style.width = "10%"
  index = 0;
  console.log(index)
  }

  let url = "url" + '(' + newArrray[index] + ')'
  wrapper1.style.backgroundImage =  url;
  images[index].style.width = "15%"
  images[index].style.transition = "all .1s";
  console.log(index)
}
 
 function pushArray() {
   
     emptyThumbailArray.push(images[index])
  
    if (emptyThumbailArray.length > 1){
      
    emptyThumbailArray[(emptyThumbailArray.length -1) -1].style.width = "10%"
    emptyThumbailArray[(emptyThumbailArray.length -1) -1].style.transition = "all .1s";
    console.log(emptyThumbailArray)
    }
   
 }


next.addEventListener("click", () => {
  
  forward()
  pushArray()

});


prev.addEventListener("click", () => {
      
  backward()
  pushArray()

});

////////////////////////////////////////////////
///////////EVENTS LISTENERS////////////////////
////////////////////////////////////////////////

 $("#wrapper2").on("click", function(event) {
  
    let $link = $(event.target).attr("src");
   
    if ($link === undefined ) {
        
        console.log('undefined')
      
      } else {
        
      $("#wrapper1").css('background-image', 'url(' + $link + ')');

      }
   
    index = $(event.target).index("img")
   
    images[index].style.width = "15%"
    
    pushArray()
});

////////////////////////////////////////////////
/////FUNCTIONS TO MOVE THUMBNAILS WITH KEYS/////
////////////////////////////////////////////////

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        backward()
        pushArray()
    }
    else if (e.keyCode == '39') {
        forward()
        pushArray()
    }
}