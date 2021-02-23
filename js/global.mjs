//importing myNumbers module
import {myNumbers} from "./myNumbers.mjs"
//importing imagepaths module.
import {imagePaths} from "./imagePaths.mjs";

const result=document.querySelector('.random-number');
const myImage=document.querySelector('.random-img');

//Random Number Generator
result.addEventListener('mouseover',function(){

  randomNumnerGenerator(myNumbers);

});
//Random Image Generator
myImage.addEventListener('mouseover',function(){

  randomImageGenerator(imagePaths);

});

//Random Number Generator function
const randomNumnerGenerator= function(arry){

  const myRandomNumber=arry[Math.floor(Math.random() * arry.length)];
  result.innerHTML=myRandomNumber;

}
//Random Image Generator function
const randomImageGenerator= function(myArry){

  let myRandomIdex=Math.floor(Math.random() * myArry.length);

  const myRandomImagePath=myArry[myRandomIdex][0];
  const myRandomImageAlt=myArry[myRandomIdex][1];
  
  myImage.setAttribute('src',myRandomImagePath);
  myImage.setAttribute('alt',myRandomImageAlt);

}