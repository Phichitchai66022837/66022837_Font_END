Name = document.getElementById('nametext')
Display = document.getElementById('Txt')



function Focusbox(){
    Name.style.background = "yellow"

}

function Blurbox(){
    Name.style.background = "white"
}

function Textchange(){
    var TBV = Yourname.value
    console.log(TBV)
    Display.innerText = TBV
}

function Selectmenu(){
    skill = document.getElementById('menu').value
    disp = document.getElementById('asw')

    selskill = skill
    disp.innerText = selskill
}