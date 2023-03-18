$(document).ready(function() {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
          if ($("#carouselButton").children('span').hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children('span').removeClass('fa-pause');
              $("#carouselButton").children('span').addClass('fa-play');
          }
          else if ($("#carouselButton").children('span').hasClass('fa-play')) {
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children('span').removeClass('fa-play');
              $("#carouselButton").children('span').addClass('fa-pause');
          }
      });
  
  
        $(".item1").click(function () {
            $("#mycarousel").carousel(0);
        });
        $(".item2").click(function () {
            $("#mycarousel").carousel(1);
        });
        $(".item3").click(function () {
            $("#mycarousel").carousel(2);
        });
  
        // Enable Carousel Controls
        $("#prev_button").click(function () {
            $("#mycarousel").carousel("prev");
        });
        $("#next_button").click(function () {
            $("#mycarousel").carousel("next");
        });
  
    $("#LoginButton").click(function() {
    $("#Login_Modal").modal();
    });
    $(".close").click(function() {
      $("#Login_Modal").modal('hide');
    });
    $("#LoginCloseButton").click(function() {
      $("#Login_Modal").modal('hide');
    });
    $("#LoginCancel").click(function() {
      $("#Login_Modal").modal('hide');
    });
    $("#reserve_btn").click(function() {
      $("#reserveModal").modal();
    });
    $(".close").click(function() {
      $("#reserveModal").modal('hide');
    });
    $("#ReserveModalCancel").click(function() {
      $("#reserveModal").modal('hide');
    });
  
  });