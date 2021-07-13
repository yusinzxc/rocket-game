let clear;
clear = setTimeout(()=>{
MovingRocket.rocketStart()
Meteorite.goldMeteor()
Meteorite.blackMeteor()
ScoreLife.scoreContent()

})
  Collision.algorithm()
if(ScoreLife.life === 0){
	    clearTimeout(clear)
	  }
