(function() {

  var $ctaButton = $('button.btn-cta');
  var changeText = function() {
    $('.bullet:first-child').text("That's Why You Need Your");
    $underline = $('<div>').addClass('underline');
    $('.bullet:last-child').text("Free Business Credit Score").append($underline);
    $('.heading-1').fadeIn("slow");
  }
  window.setTimeout(function(){
    $('.heading-1').css({display: "none"});
    changeText();
  }, 2500)
  $ctaButton.click(function (e) {
    e.preventDefault();
    addBox();
  })

  var addBox = function() {
    $firstBullet = $('.bullet:first-child').text("Great You're now on the right track!");
    $underline = $('<div>').addClass('underline');
    $firstBullet.append($underline);
    $('.bullet:last-child').text("Just a few questions..");
    // $('.heading-1').removeClass("heading-1").addClass('new-heading');
    $('.heading-1').css({display: "none"}).fadeIn("slow");;
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
    $instruction.text("Where dat business at").addClass('box-header');
    $input.remove();
    $stateBar = $('select#state');

    $stateBar.insertAfter('.box-header');
    $stateBar.css({display:"block"});
    $nextButton.text("See The Score");
  }

}(jQuery, _));
