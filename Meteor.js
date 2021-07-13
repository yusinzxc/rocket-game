const Meteorite = {
  goldMeteor: function() {
    gold = document.querySelector('.gold')
    gold.addEventListener('animationiteration', () => {
      randomGoldPosition = Math.floor(Math.random() * 308)
      gold.style.left = randomGoldPosition + 'px'
    })
  },
  blackMeteor: function() {
    black = document.querySelector('.black')
    black.addEventListener('animationiteration', () => {
      randomBlackPosition = Math.floor(Math.random() * 308)
      black.style.left = randomBlackPosition + 'px'
    })
  }
}
