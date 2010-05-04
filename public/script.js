var DELETED = "Deleted all entries"

jQuery.fn.fadeThenSlideToggle = function(speed, easing, callback) {
  if (this.is(":hidden")) {
    return this.slideDown(speed, easing).fadeTo(speed, 1, easing, callback);
  } else {
    return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
  }
};

$(function(){
    $("#clear").click(function() {
      $.ajax({
        url: "/clear",
        success: function(response) {
          $("#users").fadeThenSlideToggle();
          $(".notice").append(DELETED).hide().fadeThenSlideToggle();
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
