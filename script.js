const currentColorElement=document.querySelector("span");
const newColorbtnElement=document.querySelector("button");
const backgroundColorElement=document.querySelector(".container");


const hexValues=["1","2","3","4","5","6","7","8","9","A","B","C","D","F"];
 function getRandomHexValues(){
    const randomIndexPosition=Math.floor(Math.random()*hexValues.length);

    const randomHexValu=hexValues[randomIndexPosition];

    return randomHexValu;
 };

 function getRandomHexString(stringlength){
    let hexString="";
    for (let i = 0; i < stringlength; i++) {
        hexString += getRandomHexValues();
        
    }
    return hexString;
 }
 newColorbtnElement.addEventListener("click",()=>{
    const randomHexString="#"+getRandomHexString(6);
    document.body.style.setProperty(
        'background-color',randomHexString
    );
    currentColorElement.textContent=randomHexString;
 });