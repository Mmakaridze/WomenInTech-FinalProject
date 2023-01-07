//burger
let burger = document.getElementById('burger-bar');
let header = document.getElementById('header-h')

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    header.classList.toggle('toggle');
})

// // error
// document.getElementById('button-i').addEventListener('click',function(){
//     alert('Error!')
// })

// slider

let data = [
    {
        id: 1,
        url: "https://w0.peakpx.com/wallpaper/414/785/HD-wallpaper-funny-parrot-bird-pasare-parrot-bike-funny-white-blue.jpg",
    },
    {
        id: 2,
        url: "https://wallpaperaccess.com/full/4143648.jpg",
    },
    {
        id: 3,
        url: "https://i.ytimg.com/vi/8uXrgv1xIFk/maxresdefault.jpg",
    },
    {
        id: 4,
        url: "https://wallpaperaccess.com/full/4143698.jpg",
    },
    {
        id: 5,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2RSnY8hggW6Fu-WZDJKkCRaIvugihQBUNw&usqp=CAU",
    },
    {
        id: 6,
        url: "https://media.istockphoto.com/id/678594810/photo/two-birds-are-on-a-green-background.jpg?s=612x612&w=0&k=20&c=FxZKf8hIVC7PCsKXRJmiC1GJoHSoKpmUL28HUOz0Lgw=",
    }
];
const arrowLeft = document.getElementById("left-symbol");
const arrowRight = document.getElementById("right-symbol");
const slider = document.getElementById("slider");
let sliderIndex = 0;

function createDivTag() {
    const divTag = document.createElement("div");
    divTag.classList.add("slide");
  
    return divTag;
  }

function createImgDiv(item) {
    const imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = `url(${item.url})`;

    imgDiv.classList.add("bg-img-slide");

    return imgDiv;
}

function slide() {
    slider.innerHTML = " ";
    const slideItem = createDivTag(data[sliderIndex]);
    const divImg = createImgDiv(data[sliderIndex]);

    slideItem.appendChild(divImg);
    slider.appendChild (slideItem);
  }

  function arrowLeftClick(){
    if(sliderIndex==0){
        sliderIndex = data.length - 1;
        slide();
        return;
    }
    sliderIndex--;
    slide();
}

function arrowRightClick(){
    if(sliderIndex==data.length-1){
        sliderIndex = 0;
        slide();
        return;
    }
    sliderIndex++;
    slide();
}


arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

slide();

// validation

let contactUs = document.getElementById("contact");

contactUs.addEventListener ("submit", function (event) {
    event.preventDefault();
    let errors = {};

    // email
    let emailValue = document.getElementById("email").value;
    if (emailValue == "") {
        errors.inputemail = "email address field can not be empty";
   }
   if (!(emailValue.includes(".") && emailValue.includes("@"))) {
        errors.inputemail = "Please enter a valid email address.";
   }   

   // text
   let textValue = document.getElementById("mess").value;
   if (textValue == "") {
        errors.message = "message field can not be empty";
   }  
   
   document.querySelectorAll(".error-text").forEach((item) => {
       item.innerText = " ";
   })

   for (let key in errors) {
    let spanText = document.getElementById("error-" + key);
    if (spanText) {
        spanText.innerText = errors[key];
      }
    }

    if (Object.keys(errors).length == 0) {
        contactUs.submit();
      }
})