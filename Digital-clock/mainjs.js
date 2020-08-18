function myClock() {
    var clock = document.getElementById("clock");
    var currentDate = new Date();

    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();
    var a = "AM"

    if (h>12) {
        h=h-12;
        a="PM";

    }

    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    clock.innerText = `${h} : ${m} : ${s} ${a}`;

    setTimeout(myClock,1000);
}

myClock();