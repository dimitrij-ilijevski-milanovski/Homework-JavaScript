console.log("works...");

const changeParagraOne = document.getElementsByClassName("paragraph")[0];
changeParagraOne.innerText = "Changed by Dimi";

const changeParagraTwo = document.querySelector(".second");
changeParagraTwo.innerText = "changedddd by dimi";

const changeHeaderOne = document.getElementById("mainHeading");
changeHeaderOne.innerText = "CHAAAAA";

const changeOtherHeader = document.querySelector("h3");
console.log(changeOtherHeader);
changeOtherHeader.innerText = "changeeeeeeee";

const changeTheText = document.querySelector("text");
changeTheText.innerText = "DASDAG";

const changeChild = document.querySelectorAll("h1");
changeChild[1].innerText = "AAAAAAAAA";
