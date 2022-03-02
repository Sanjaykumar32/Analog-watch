setInterval(() => {
    var d = new Date();

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    session = "AM"
    if (h == 0) {
        h = 12
    }
    if (h > 12) {
        h = h - 12
        session = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    alarm(h, m)
    // if (h == "03" && m == "22" && s == "00") {
    //     ring.play();
    // }
    document.getElementById("digital").innerText = h + ":" + m + ":" + s + ":" + session

}, 1000);

function alarm(hr, min) {
    var set = document.getElementById("set").value
    var set1 = document.getElementById("set1").value

    if (hr == set && min == set1) {
        ring.play();
    }
}

