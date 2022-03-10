var x = 800
var z = 350
var xi = 30
var ruu = document.getElementById('move')
var tim = document.getElementById('tim')
var con = document.getElementById('congrats')
var los = document.getElementById('lose')
var play = document.getElementById('play')
var points = 0
var poi = document.getElementById('point')
var interval = window.setInterval(' lose () ;', 100)
var timer = window.setInterval(' n9s () ;', 1000)
var a = 0
var nom = 'Name'


function run() {
    if (ruu.id == 'move') {
        var i = Math.floor(Math.random() * 10)
        if (i == 0) {
            z = z - 50;
            x = x + 50
        }
        if (i == 1) {
            z = z + 50;
            x = x - 50
        }
        if (i == 2) {
            z = z - 50;
            x = x - 50
        }
        if (i == 3) {
            z = z + 50;
            x = x + 50
        }
        if (i == 4) {
            z = z - 50
        }
        if (i == 5) {
            z = z + 50
        }
        if (i == 6) {
            x = x + 50
        }
        if (i == 7) {
            x = x - 50
        }
        if (i == 8) {
            z = z - 50;
            x = x + 50
        }
        if (i == 9) {
            z = z + 50;
            x = x - 50
        }
        if (i == 9) {
            z = z + 50;
        }
        ruu.style =
            "background-color: red; width: 100px; height: 100px; border-radius: 100%; border: 50px solid white; margin-left:" +
            x + "px ; margin-top: " + z + "px; cursor: pointer;"
    }
}

function lose() {
    if (parseInt(ruu.style.marginLeft) >= 1840 || parseInt(ruu.style.marginLeft) <= -100 || parseInt(ruu.style
        .marginTop) >= 900 || parseInt(ruu.style.marginTop) <= 0) {
        los.style.display = 'block'
        ruu.style =
            "background-color: red; width: 100px; height: 100px; border-radius: 100%; border: 50px solid white; margin-left:800px ; margin-top: 350px; cursor: pointer;"
        x = 800
        z = 350
        points = 0
        a = 0
        poi.innerText = nom + ' : ' + points

    }
}

function win() {
    a = 0
    xi = 30
    tim.innerText = '00 : ' + xi
    ruu.id = 'win'
    ruu.style =
        "background-color: green; width: 100px; height: 100px; border-radius: 100%; border: 50px solid white; margin-left:" +
        x + "px ; margin-top: " + z + "px; cursor: pointer;";
    con.style.display = 'block'
    points += 1
    poi.innerText = nom + ' : ' + points
}

function n9s() {
    if(a == 1) {
        xi -= 1
        tim.innerText = '00 : ' + xi
    }
    

    if (xi < 21) {
        tim.style.border = '3px solid orange'
        tim.style.color = 'orange'
    }
    if (xi < 11) {
        tim.style.border = '3px solid red'
        tim.style.color = 'red'
    }
    if (xi == -1) {
        los.style.display = 'block'
        a = 0
        xi = 30
        points = 0
        poi.innerText = nom + ' : ' + points
    }
}

function again() {
    ruu.style =
        "background-color: red; width: 100px; height: 100px; border-radius: 100%; border: 50px solid white; margin-left:800px ; margin-top: 350px; cursor: pointer;"
    x = 800
    z = 350
    xi = 30
    tim.innerText = '00 : ' + xi
    con.style.display = 'none'
    los.style.display = 'none'
    ruu.id = 'move'
    tim.style.border = '3px solid green'
    tim.style.color = 'green'
    a = 1
}
function start() {
    play.style.display = 'none'
    xi = 30
    tim.innerText = '00 : ' + xi
    a = 1
    var nam = (document.getElementById('name')).value
    nom = nam
    poi.innerText = nom + ' : ' + points
}