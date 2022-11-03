import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeStamp = localStorage.getItem('videoplayer-current-time');
const throttled = throttle(saveTime, 1000);

function saveTime(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
}

player.on('timeupdate', throttled);
player.setCurrentTime(timeStamp);
