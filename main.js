const image = document.querySelector(".image");
let images = ["/images/pic1.jpg", "/images/pic2.jpg","/images/thor1.jpeg","/images/thor2.jpeg"]


function displayImages(){
    const img = document.createElement("img");
    
    setInterval(()=>{
        const random = Math.floor(Math.random() * images.length); 
        img.src = images[random]
        image.style.display = "flex";
        console.log(random)
    },2000)

    image.appendChild(img);
}

displayImages()

function showSidebar() {
    event.preventDefault()
    navigator.vibrate(100)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
    }
    
function hideSidebar() {
    event.preventDefault()
    navigator.vibrate(100)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'  
    }

 function submitBtn() {
      navigator.vibrate(100)
    }
