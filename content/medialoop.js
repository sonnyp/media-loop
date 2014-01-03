window.addEventListener("load", function () {
  var appcontent = document.getElementById("appcontent");
  if(appcontent)
    appcontent.addEventListener("DOMContentLoaded", medialoop.onLoad, false);
  var initMediaPlayerItems_orig = nsContextMenu.prototype.initMediaPlayerItems;
  nsContextMenu.prototype.initMediaPlayerItems = function () {
    var onMedia = (this.onVideo || this.onAudio);
    var loop = this.target.hasAttribute("loop");
    this.showItem("context-video-disableloop", onMedia && loop == true);
    this.showItem("context-video-enableloop", onMedia && loop == false);
    initMediaPlayerItems_orig.apply(this);
  };
  nsContextMenu.prototype.enableLoop = function () {
    this.target.setAttribute("loop", "loop");
    this.target.addEventListener("ended", medialoop.play, false);
  };
  nsContextMenu.prototype.disableLoop = function () {
    this.target.removeAttribute("loop");
    this.target.removeEventListener("ended", medialoop.play, false);
  };
}, false);

var medialoop = {
  play: function(aEvent){
    aEvent.target.play();
  },
  onLoad: function(aEvent){
    var doc = aEvent.originalTarget;
    var mediaCollection = doc.querySelectorAll("video, audio");
		for(var i=0; i<mediaCollection.length; i++){
      if(mediaCollection[i].hasAttribute("loop") == true)
        mediaCollection[i].addEventListener("ended", medialoop.play, false);
    }
  }
};
    
  
