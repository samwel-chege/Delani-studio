$(document).ready(function() {
    $('#icon1').on('click', function(){
        $('#icon1').hide(function(){
            $('#description1').show();
        });
    });
    $('#description1').on('click', function(){
        $('#icon1').show();
        $('#description1').hide();
    });
    $('#icon2').on('click', function(){
        $('#icon2').hide(function(){
            $('#description2').show();
        });
    });
    $('#description2').on('click', function(){
        $('#icon2').show();
        $('#description2').hide();
    });
    $('#icon3').on('click', function(){
        $('#icon3').hide(function(){
            $('#description3').show();
        });
    });
    $('#description3').on('click', function(){
        $('#icon3').show();
        $('#description3').hide();
    });
    
});
$(document).ready(function(){
    $("#port1").mouseover(function(){
      $("#asgn1").show();
    }).mouseout(function(){
      $("#asgn1").hide();
    });
    $("#port2").mouseover(function(){
        $("#asgn2").show();
      }).mouseout(function(){
        $("#asgn2").hide();
      });
    $("#port3").mouseover(function(){
        $("#asgn3").show();
      }).mouseout(function(){
        $("#asgn3").hide();
      });
      $("#port4").mouseover(function(){
        $("#asgn4").show();
      }).mouseout(function(){
        $("#asgn4").hide();
      });
      $("#port5").mouseover(function(){
        $("#asgn5").show();
      }).mouseout(function(){
        $("#asgn5").hide();
      });
      $("#port6").mouseover(function(){
        $("#asgn6").show();
      }).mouseout(function(){
        $("#asgn6").hide();
      });
      $("#port7").mouseover(function(){
        $("#asgn7").show();
      }).mouseout(function(){
        $("#asgn7").hide();
      });
      $("#port8").mouseover(function(){
        $("#asgn8").show();
      }).mouseout(function(){
        $("#asgn8").hide();
      });
  });
  $(document).ready(function(){
      var name = $("#Name").val();
      var email = $('#Email').val();
      if (name == "" && email == "" ){
          alert(name + "fill in the form");
      } 
      else{
          alert(" name + we have received your message. Thank you  for reaching out to us.");
      }
  });
   
