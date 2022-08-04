import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function play ({seconds}) {
  localStorage.setItem('videoplayer-current-time', seconds)
  console.log(seconds);
};

player.on('timeupdate', throttle(play, 1000))

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))