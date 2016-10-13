(function() {

  var $ctaButton = $('button.btn-cta');

  $ctaButton.click(function (e) {
    e.preventDefault();
    changeText();
  })
  var changeText = function() {
    $('.bullet2:first-child').text("Great. You're now on the right track");
    $('.bullet2:last-child').text("Just a few questions..");
    addBox();
  }

  var addBox = function() {
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
    // e.preventDefault();
    $instruction.text("Where dat business at");
    $input.remove();
    $stateBar = $('select#state');

    $('.info-box').append($stateBar.show());
    $nextButton.text("See The Score");
  }

  // var makeState = function() {
  //   $stateBar = $('<select>').addClass("form-control input-lg").attr('id', );
  // }
}(jQuery, _));
