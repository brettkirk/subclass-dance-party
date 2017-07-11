var makeSupermanDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.size = 10;
  this.$node = $('<span class="superman"></span>');
};

makeSupermanDancer.prototype = Object.create(makeDancer.prototype);
makeSupermanDancer.prototype.constructor = makeSupermanDancer;

makeSupermanDancer.prototype.step = function(timeBetweenSteps) {
  
  makeDancer.prototype.step.call(this);
  // if ($('.superman').radius > 99) {
  //   this.size -= 5;
  //   $('.superman').css('radius', this.size);
  //   $('.superman').css('border-radius', this.size);
  // }
  this.$node.css('color', 'green');
};