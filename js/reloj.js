const d = document;

const digitalClock = (clock, playBtn, stopBtn) =>{
    let clockTempo;
    
    d.addEventListener("click", e => {
        if (e.target.matches(playBtn)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000);

            e.target.disabled = true;
        }
        
        if (e.target.matches(stopBtn)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(playBtn).disabled = false;
        }
    })
};


const alarm = (sound, playBtn, stopBtn) => {
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", e => {
        if (e.target.matches(playBtn)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            },2000)

            e.target.disabled = true;
        }

        if (e.target.matches(stopBtn)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(playBtn).disabled = false;
        }
    })
};


digitalClock("#clock", "#activate-clock", "#deactivate-clock");
alarm("assets/alarm-clock.mp3","#activate-alarm","#deactivate-alarm");