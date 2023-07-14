setInterval(myfunction, 1000);
const myHours = document.getElementById("hours");
const myMins = document.getElementById("mins");
const mySecs = document.getElementById("secs");
const amPm = document.getElementById("ampm");
let leftMessageBox = document.getElementById("leftMessageBox");

function myfunction() {
    var dateobj = new Date();
    var hour = dateobj.getHours();
    var minute = dateobj.getMinutes();
    var second = dateobj.getSeconds();
    var ampm = "AM";
    // console.log(hour);

    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    myHours.innerHTML = hour;
    myMins.innerHTML = minute;
    mySecs.innerHTML = second;
    amPm.innerHTML = ampm;

}



let wakeUpTime = document.getElementById("wakeUpTime");
let lunchTime = document.getElementById("lunchTime");
let napTime = document.getElementById("napTime");
let nightTime = document.getElementById("nightTime");
let messageBox = document.getElementById("messageBox");

let image = document.querySelector('.image');



function setAlarm() {


    let WselectIndex = wakeUpTime.selectedIndex;
    let WtargetIndex = wakeUpTime.options[WselectIndex];
    document.getElementById("wat").innerHTML = WtargetIndex.innerHTML;


    let LselectIndex = lunchTime.selectedIndex;
    let LtargetIndex = lunchTime.options[LselectIndex];
    document.getElementById("lt").innerHTML = LtargetIndex.innerHTML;


    let NselectIndex = napTime.selectedIndex;
    let NtargetIndex = napTime.options[NselectIndex];
    document.getElementById("nt").innerHTML = NtargetIndex.innerHTML;


    let GselectIndex = nightTime.selectedIndex;
    let GtargetIndex = nightTime.options[GselectIndex];
    document.getElementById("st").innerHTML = GtargetIndex.innerHTML;


    let time = new Date();
    let hour = time.getHours();
    console.log(hour);
    if (parseInt(wakeUpTime.value) === hour) {
        messageBox.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        image.src = 'morning.png';
    }

    if (parseInt(lunchTime.value) === hour) {
        messageBox.innerHTML = "LET'S HAVE SOME LUNCH !!";
        image.src = 'lunch.png';
    }

    if (parseInt(napTime.value) === hour) {
        messageBox.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        image.src = 'evening.png';
    }

    if (parseInt(nightTime.value) === hour) {
        messageBox.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        image.src = 'night.png';
    }

}



let time1 = new Date();
let hrs = time1.getHours();

if (hrs > 1 && hrs <= 12) {
    leftMessageBox.innerHTML = "GOOD MORNING!! WAKE UP !!";

}

if (hrs > 12 && hrs <= 16) {
    leftMessageBox.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";

}

if (hrs > 16 && hrs <= 20) {
    leftMessageBox.innerHTML = "GOOD EVENING !!";

}
if (hrs > 20 && hrs < 24) {
    leftMessageBox.innerHTML = "GOOD NIGHT !!";

}