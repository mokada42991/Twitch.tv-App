$(document).ready(function() {
  
  //Create an array with all the channels' names.
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "riotgames"];
  
  //Loop through the array of channels
  for (var i = 0; i < channels.length; i++) {
    
    //Create an Immediately-Invoked Function Expresssion in order to keep the variable "i" running through the loop and not get set to the last value after the getJSON is called back.
    (function(i) {
      
      //Insert the channel's name into the API call and GET the JSON file.
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channels[i] + "?callback=?", function(response) {
        
        //Allocate data from the JSON file according to the channel's status.
        if (response.stream === null) {
          //Offline.
          $(".channelb" + i).html("<div class='panel panel-danger'><div class='panel-heading'>Offline</div><div class='panel-body'>" + channels[i] + "</div></div>");
        } else {
          //Online.
          $(".channela" + i).html("<div class='panel panel-success'><div class='panel-heading'><a href='" + response.stream.channel.url + "' target='blank'><span class='title'>" + response.stream.channel.display_name + "</span></a>&nbsp is Online<br>Now Streaming: &nbsp" + response.stream.channel.status + "</div><div class='panel-body' style='background-image: url(" + response.stream.channel.profile_banner + "); background-size: cover;'><div class='media'><div class='media-left'><a href='" + response.stream.channel.url + "' target='blank'><img class='media-object' src='" + response.stream.channel.logo + "'></a></div></div></div>");
        }
      
      });
      
    })(i);
   
  }
  
  //Toggle button functions to show all channels, only online channels and only offline channels.
  $(".all").on("click", function() {
    $(".offline-channels").show(500);
    $(".online-channels").show(500);
  });
  $(".online").on("click", function() {
    $(".offline-channels").hide(500);
    $(".online-channels").show(500);
  });
  $(".offline").on("click", function() {
    $(".offline-channels").show(500);
    $(".online-channels").hide(500);
  });


});