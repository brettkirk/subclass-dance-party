var makeExtraDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  this.$node = $('<span class="extra"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, this.$node);
  this.size = 10;
};

makeExtraDancer.prototype = Object.create(makeDancer.prototype);
makeExtraDancer.prototype.constructor = makeExtraDancer;

makeExtraDancer.prototype.step = function(timeBetweenSteps) {
  
  makeDancer.prototype.step.call(this);
  // if ($('.superman').radius > 99) {
  //   this.size -= 5;
  //   $('.superman').css('radius', this.size);
  //   $('.superman').css('border-radius', this.size);
  // }
};