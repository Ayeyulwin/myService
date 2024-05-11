
$(document).ready(function(){
    $('#signIn').click(function(){
        $('#signInForm').toggle(2000);
        if($('signUpForm').show()){
            $('#signUpForm').hide();
        }
    });

    $('#signUp').click(function(){
        $('#signUpForm').toggle(2000);
        if($('signInForm').show()){
            $('#signInForm').hide();
        }
    });
    
    $('.fa-xmark').click(function(){
        $('#signInForm').hide();
        $('#signUpForm').hide();
        $('#feedbackForm').hide();
    });

    $('.feedback').click(function(){
        $('#feedbackForm').toggle(2000);
    });

});

function myfunction() {
    var dots = $("#dots");
    var moreText = $("#more");
    var btnText = $("#myBtn");
    if (dots.css("display") == "none") {
        dots.css("display","inline");
        btnText.text("Read more");
        moreText.css("display","none");
    } else {
      dots.css("display","none");
      btnText.text("Read less");
      moreText.css("display","inline");
    }
  };

  function myfunction1() {
    var dots = $("#dots1");
    var moreText = $("#more1");
    var btnText = $("#myBtn1");
    if (dots.css("display") == "none") {
        dots.css("display","inline");
        btnText.text("Read more");
        moreText.css("display","none");
    } else {
      dots.css("display","none");
      btnText.text("Read less");
      moreText.css("display","inline");
    }
  };

  function myfunction2() {
    var dots = $("#dots2");
    var moreText = $("#more2");
    var btnText = $("#myBtn2");
    if (dots.css("display") == "none") {
        dots.css("display","inline");
        btnText.text("Read more");
        moreText.css("display","none");
    } else {
      dots.css("display","none");
      btnText.text("Read less");
      moreText.css("display","inline");
    }
  };