const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");



function renderTime()
{
    let year = new Date().getFullYear() + 1;
    document.getElementById("year").innerHTML = "New Year " +"(" + year + ")";  
    
    const futuredate = new Date(year,0,1, 0,0,0).getTime();
    let today = new Date().getTime();
    let diff = futuredate - today;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;

    let daysL = Math.floor(diff / oneDay);
    let hoursL = Math.floor((diff % oneDay) / oneHour);
    let minsL = Math.floor(((diff % oneDay) % oneHour)/ oneMin);
    let secsL = Math.floor((((diff % oneDay) % oneHour)% oneMin) / oneSec);
    
    days.innerHTML = daysL;
    hours.innerHTML = hoursL;
    mins.innerHTML = minsL;
    secs.innerHTML = secsL;



}

renderTime();
setInterval(renderTime, 1000);


