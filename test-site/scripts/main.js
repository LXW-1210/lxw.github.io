const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kobe.jpg") {
    myImage.setAttribute("src", "images/LeBron.jpg");
  } else {
    myImage.setAttribute("src", "images/kobe.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `伟大的巨星, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {

    const storedName = localStorage.getItem("name");
    myHeading.textContent = `伟大的巨星, ${storedName}`;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  