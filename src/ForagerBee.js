var ForagerBee = function() {
  Bee.call(this)
  this.age = 10
  this.job = 'find pollen'
  this.canFly = true
  this.treasureChest = []
};

ForagerBee.prototype = Object.create(Bee)
ForagerBee.prototype.constructor = ForagerBee

ForagerBee.prototype.eat = function () {
  Grub.eat()
}

ForagerBee.prototype.forage = function () {
  this.treasureChest.push('💰')
}