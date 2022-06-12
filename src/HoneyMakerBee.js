var HoneyMakerBee = function() {
  Bee.call(this)
  this.age = 10
  this.job = 'make honey'
  this.honeyPot = 0
};

HoneyMakerBee.prototype = Object.create(Bee)
HoneyMakerBee.prototype.constructor = HoneyMakerBee

HoneyMakerBee.prototype.eat = function() {
  Bee.prototype.eat.call(this)
}

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--
}
