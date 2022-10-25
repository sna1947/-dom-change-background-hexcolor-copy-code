//Requerment: add abuton to copy the color code.......

window.onload = () => {
    main()
};

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function () {
        const bgcolor = generateHexColor();
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
        console.log(bgcolor);
    });

    //copy code button....
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
    })

};

function generateHexColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)} `
}