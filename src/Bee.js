var Bee = function() {
  Grub.call(this)
  this.age = 5
  this.color = 'yellow'
  this.job = 'keep on growing'
};

Bee.prototype = Object.create(Grub)
Bee.prototype.constructor = Bee

Bee.prototype.eat = function() {
  Grub.eat()
}

