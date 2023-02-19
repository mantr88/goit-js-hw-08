import VimeoPlayer from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(iframe);

player.on(
    'timeupdate', throttle() => {
    console.log("Scroll handler call every 300ms");
}, 1000);