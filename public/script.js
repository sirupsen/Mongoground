$(function(){
    $("#clear").click(function() {
      $.ajax({
        url: "/clear",
        success: function(response) {
          $("#users").fadeOut("slow");
          $("#notice").append("<h2>Deleted all entries</h2>").hide().fadeIn("slow"); 
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
