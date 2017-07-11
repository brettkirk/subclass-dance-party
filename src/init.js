$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
      */
// debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    // debugger;
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position 
    //debugger;
    if (dancerMakerFunctionName === 'makeBlinkyDancer') {
      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      dancers.push(dancer.$node);
    } else if (dancerMakerFunctionName === 'makeSupermanDancer') {
      var superman = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(superman.$node);
      dancers.push(superman.$node);
    } else if (dancerMakerFunctionName === 'makeExtraDancer') {
      var extra = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(extra.$node);
      dancers.push(extra.$node);
    } else if (dancerMakerFunctionName === 'doSomething') {
      for (var i = 0; i < dancers.length; i++) {
        window.dancers[i].css({left: $('body').width() * (i / dancers.length)});
        window.dancers[i].css({top: $('body').height() * .5});
      } 
    }
  });
});

