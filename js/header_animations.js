(function() {

  var $ctaButton = $('button.btn-cta');
  var changeText = function() {
    $('.bullet:first-child').text("That's Why You Need Your");
    $underline = $('<div>').addClass('underline');
    $('.bullet:last-child').text("Free Business Credit Score").append($underline);
  }
  window.setTimeout(function(){
    changeText();
  }, 4000)
  $ctaButton.click(function (e) {
    e.preventDefault();
    addBox();
  })

  var addBox = function() {
    $firstBullet = $('.bullet:first-child').text("Great You're now on the right track!");
    $underline = $('<div>').addClass('underline');
    $firstBullet.append($underline);
    $('.bullet:last-child').text("Just a few questions..");
    $('.heading-1').addClass('new-heading');
    $('button.btn-cta').remove()
    var $infoBox = $('<div>').addClass('info-box'),
        $instruction = $('<p>').text("Step One: Choose Your Business"),
        $input = $('<input>').attr("placeholder", "Business Name"),
        $nextButton = $('<button>').addClass('btn-secondary').text('Continue');

    $infoBox.append($instruction, $input, $nextButton);
    $('.landing-flow').append($infoBox);

    $nextButton.click( function(e) {
      e.preventDefault();
      updateBox($instruction, $nextButton, $input);
    })
  }

  var updateBox = function($instruction, $nextButton, $input, e) {
    $instruction.text("Where dat business at");
    $input.remove();
    $stateBar = $('select#state');

    $('.info-box').append($stateBar.show());
    $nextButton.text("See The Score");
  }

}(jQuery, _));
