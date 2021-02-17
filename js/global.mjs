//importing myNumbers module
import {myNumbers} from "./myNumbers.mjs"
//importing imagepaths module.
import {imagePaths} from "./imagePaths.mjs";

const result=document.querySelector('.random-number');
const myImage=document.querySelector('.random-img');
//Random Number Generator
result.addEventListener('mouseover',function(){
  const myRandomNumber=myNumbers[Math.floor(Math.random() * myNumbers.length)];
  result.innerHTML=myRandomNumber;
});
//Random Image Generator
myImage.addEventListener('mouseover',function(){
  let myRandomIdex=Math.floor(Math.random() * imagePaths.length);
  const myRandomImagePath=imagePaths[myRandomIdex][0];
  const myRandomImageAlt=imagePaths[myRandomIdex][1];
  myImage.setAttribute('src',myRandomImagePath);
  myImage.setAttribute('alt',myRandomImageAlt);
});