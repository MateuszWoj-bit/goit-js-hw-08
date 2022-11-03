const e=document.querySelector("iframe"),t=new Vimeo.Player(e),r=localStorage.getItem("videoplayer-current-time"),o=_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3);t.on("timeupdate",o),t.setCurrentTime(r);
//# sourceMappingURL=02-video.776e3349.js.map
