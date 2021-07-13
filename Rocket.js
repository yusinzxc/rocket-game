const MovingRocket = {
  x: null,
  rocketContent: function() {
    return rocketContainer = document.querySelector('.rocket-container');
    getPropertyRocket = rocketContainer.getBoundingClientRect()
  },
  rocketMove: function() {
    this.rocketContent()
    x = event.touches[0].clientX - 195;
    rocketContainer.style.left = x + 'px'
    if (x > 0) {
      document.querySelector('.right').style.display = 'block'
      document.querySelector('.left').style.display = 'none'
    } else {
      document.querySelector('.right').style.display = 'none'
      document.querySelector('.left').style.display = 'block'
    }
  },
  rocketStart: function() {
    main = document.querySelector('.main')
    main.ontouchmove = () => {
      this.rocketMove(event)
    }
    main.ontouchstart = () => {
      this.rocketMove(event)
      rocketContainer.style.transition = '0.5s'
    }
  }
}