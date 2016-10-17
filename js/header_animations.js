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
  }, 1500)
  $ctaButton.click(function (e) {
    e.preventDefault();
    addBox();
  })

  var addBox = function() {
    $firstBullet = $('.bullet:first-child').text("Great, You're now on the right track!");
    $underline = $('<div>').addClass('underline');
    $searchBar = $('<div>').addClass('search-bar');

    $firstBullet.append($underline);
    $('.bullet:last-child').text("Let's get started..");
    $('.heading-1').css({display: "none"}).fadeIn("slow");;
    $('button.btn-cta').remove()
    var $infoBox = $('<div>').addClass('info-box'),
        $instruction = $('<p>').text("Step One: Choose Your Business"),
        $input = $('<input>').attr("placeholder", "Business Name").addClass('search-input col-sm-4'),
        $stateBar = $('select#state').css({display: "block"}).addClass('col-sm-4');
        $nextButton = $('<button>').addClass('btn-secondary btn-search col-sm-4').text('See The Score');

    $searchBar.append($input, $stateBar, $nextButton);
    $infoBox.append($instruction, $searchBar);
    $('.landing-flow').append($infoBox);

    // $nextButton.click( function(e) {
    //   e.preventDefault();
    //   updateBox($instruction, $nextButton, $input);
    // })
  }

  var updateBox = function($instruction, $nextButton, $input, e) {
    $instruction.text("Where dat business at").addClass('box-header');
    $input.remove();

    $nextButton.text("See The Score");
  }

}(jQuery, _));
