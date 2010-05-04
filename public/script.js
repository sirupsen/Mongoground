var DELETED = "Deleted all entries"

jQuery.fn.fadeThenSlideToggle = function(speed, easing, callback) {
  if (this.is(":hidden")) {
    return this.slideDown(speed, easing).fadeTo(speed, 1, easing, callback);
  } else {
    return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
  }
};

$(function(){
    $("#username").focus();

    $("#clear").click(function() {
      $.ajax({
        url: "/clear",
        success: function(response) {
          $("#users").fadeThenSlideToggle();
          // Put in text, hide it again, and then display it
          $(".notice").append(DELETED).hide().fadeThenSlideToggle();

          // Fade out after 4 seconds
          window.setTimeout(function() {
            $(".notice").fadeThenSlideToggle();
          }, 4000);
        }
      });
    });

    $("#submit").click(function() {
      var username = $("#username").val();
      var age = $("#age").val();

      $.ajax({
        type: "POST",
        url: "/",
        data: "username=" + username + "&age=" + age,
        success: function(response){
          location.reload();
        }
      });

      return false;
    });
});
