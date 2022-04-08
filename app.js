let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
if (e.keyCode == 13) {
    run(e);
}
});

userNum.focus();


function run() {
    document.getElementById("paragraph").innerHTML = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "green";
    x.style.color = "white";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber () {
 let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "#ff00e2";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumbers () {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementbyId("compare");

    if (a!= b) {
        document.getElementById("compare").innerHTML = "Numbers are not the same LoL. The computer got " + b + ", and you got " + a +"";
        z.style.color = "white";
        z.style.backgroundColor = "ff00e2";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    } else if (a == b) {
        z.innerHTML = "WOW, the numbers are the same. The computer got " + b + ", and you got " + a +"";
        z.style.color = "white";
        z.style.backgroundColor = "00ff00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    }
}

resetInput ();

function resetInput() {
    document.getElementById("getNumber").value = "";
}
