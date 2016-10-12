(function() {

  var ctaButton = $('button.btn-cta');

  ctaButton.click(function (e) {
    e.preventDefault();
    changeText();
  })
  var changeText = function() {
    console.log('hey');
    $('.heading-2').text("Great. You're on the right track \n Just a few questions..");
  }

}(jQuery, _));
