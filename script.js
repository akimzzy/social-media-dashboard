// Checkbox element
const chekbox = document.querySelector(".switch__checkbox");
// Switch element --- will be used to change the BG color when checkbox is checked
const switchBox = document.querySelector(".switch");

const color = [
    {name: "--TopLightBG", dark: 'hsl(232, 19%, 15%)', light: 'hsl(225, 100%, 98%)'},
    {name: "--LightBG", dark: 'hsl(230, 17%, 14%)', light: 'hsl(0, 0%, 100%)'},
    {name: "--CardLightBG", dark: 'hsl(228, 28%, 20%)', light: 'hsl(227, 47%, 96%)'},
    {name: "--TextLight", dark: 'hsl(228, 34%, 66%)', light: 'hsl(228, 12%, 44%)'},
    {name: "--Dark", dark: 'hsl(0, 0%, 100%)', light: 'hsl(230, 17%, 14%)'},
    {name: "--White", dark: 'hsl(230, 17%, 14%)', light: 'hsl(0, 0%, 100%)'},
    {name: "--hover", dark: 'hsl(228, 28%, 28%)', light: 'hsl(226, 48%, 91%)'}
]

// function that changes color when checkbox is checked and unchecked
const anotherDarkMode = (property, darkColor, lightColor) => {
    if(chekbox.checked) {
        document.documentElement.style.setProperty(property, darkColor);
        switchBox.style.backgroundImage = "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
    } else {
        document.documentElement.style.setProperty(property, lightColor);
        switchBox.style.backgroundImage = "none";
    }
}

chekbox.addEventListener("click", () => { 
    color.forEach(cur => anotherDarkMode(cur.name, cur.dark, cur.light))
})