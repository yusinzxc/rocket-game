const ScoreLife = {
  score: 0000,
  life: 3,
  scoreContent: function() {
    Collision.algorithm()
    setInterval(() => {
      this.score += 103;
      document.querySelector('.score').innerHTML = this.score
    }, 1000)
    document.querySelector('.life').innerHTML = this.life
  },
}