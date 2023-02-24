import VimeoPlayer from '@vimeo/player';
const throttle = require('lodash.throttle');

const CURRENT_TIME_KEY = "videoplayer-current-time"
const iframe = document.querySelector('#vimeo-player');

const player = new VimeoPlayer(iframe);

player.on(
    'timeupdate', throttle((data) => {
        const { seconds } = data;
        localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
    }, 1000));

function playBack() {
    const pause = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));
    
    if (pause === null) {
        return;
    }
    
    player.setCurrentTime(pause); 
};

playBack();