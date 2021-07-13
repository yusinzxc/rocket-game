const Collision = {
  rocketP: function() {
    MovingRocket.rocketContent()
    property = rocketContainer.getBoundingClientRect()
    rocketHeight = property.height;
    rocketWidth = property.width;
    rocketX = property.x;
    rocketY = property.y;
    
  },
  goldMeteorP: function() {
    Meteorite.goldMeteor()
    property = gold.getBoundingClientRect()
    goldHeight = property.height;
    goldWidth = property.width;
    goldX = property.x;
    goldY = property.y;
  },
  blackMeteorP: function() {
    Meteorite.blackMeteor()
    property = black.getBoundingClientRect()
    blackHeight = property.height;
    blackWidth = property.width;
    blackX = property.x;
    blackY = property.y;
  },
  algorithm:function(){
    
    setInterval(()=>{
    this.rocketP()
    this.goldMeteorP()
    this.blackMeteorP()
    
    if (rocketX < blackX + blackWidth &&
	rocketX + rocketWidth > blackX &&
	rocketY < blackY + blackHeight &&
	rocketY + rocketHeight > blackY) {
	  black.style.display = 'none'
	  ScoreLife.scoreContent()
	  ScoreLife.life -= 1;
	  setTimeout(()=>{
	    randomGoldPosition = Math.floor(Math.random() * 308)
      black.style.left = randomGoldPosition + 'px'
	  })
  } else if(rocketX < goldX + goldWidth &&
	rocketX + rocketWidth > goldX &&
	rocketY < goldY + goldHeight &&
	rocketY + rocketHeight > goldY){
	  gold.style.display = 'none'
	  ScoreLife.scoreContent()
	  ScoreLife.score += 100;
	  setTimeout(()=>{
	    randomGoldPosition = Math.floor(Math.random() * 308)
      gold.style.left = randomGoldPosition + 'px'
	  })
}else{
  gold.style.display = 'block'
  black.style.display = 'block'
}
})
  }
}