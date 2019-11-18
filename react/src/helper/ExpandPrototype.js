// HTML Audio Player Prototype
Audio.prototype.stop = function() {
  this.pause();
  this.currentTime = 0;
};

Audio.prototype.restart = function() {
  this.pause();
  this.currentTime = 0;
  this.play();
};
