/**
 * Created by sravan on 12/7/2016.
 */

// Code goes here

$(document).ready(function() {


    $("#owl-demo").owlCarousel({

        autoPlay: 2000, //Set AutoPlay to 3 seconds

        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,4],
        itemsTablet: [768,3],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
        singleItem : false,
        itemsScaleUp : true,
        pagination	:false,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        // autoPlay : true,
        stopOnHover : true,

        // Navigation
        /* navigation : true,
         navigationText : ["prev","next"],
         rewindNav : true,
         scrollPerPage : false,*/

    });
    $("#owl-demo2").owlCarousel({

        autoPlay: 2000, //Set AutoPlay to 3 seconds

        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,4],
        itemsTablet: [768,3],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
        singleItem : false,
        itemsScaleUp : true,
        pagination	:false,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        // autoPlay : true,
        stopOnHover : true,

        // Navigation
        /* navigation : true,
         navigationText : ["prev","next"],
         rewindNav : true,
         scrollPerPage : false,*/

    });
    $('.link').on('click', function(event){
        var $this = $(this);
      //  alert($this.attr('src'));
        var image = $this.attr('src');
        $('#myModal').on('show.bs.modal', function () {
            $(".showimage").attr("src", image);
        });
        /* if($this.hasClass('clicked')){
            $this.removeAttr('style').removeClass('clicked');
        } else{
            $this.css('background','#7fc242').addClass('clicked');
        }*/
    });

});
