

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = "0123456789ABCDEF"

// Below function will get a random value from the variable hex..
function getRandom(){
    return hex[Math.floor(Math.random() * hex.length)]
};

//Below code will loop the getRandom() function until randomValue reach to 6 random value to create a hex color code..
btn.addEventListener("click", function(){
    let randomValue = "#"
    for(let i = 0; i < 6; i++){
        randomValue += getRandom()
    };

    //It will change background color of body to hex code which is stored in randomValue
    document.body.style.backgroundColor = randomValue;
    color.textContent = randomValue;
});