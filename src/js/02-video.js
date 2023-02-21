import VimeoPlayer from '@vimeo/player';
const throttle = require('lodash.throttle');

const CURRENT_TIME_KEY = "videoplayer-current-time"
const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(iframe);

player.on(
    'timeupdate', throttle((data) => {
        localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
        
    }, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))
