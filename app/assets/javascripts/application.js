
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


google.maps.event.addDomListener(window, 'load', initialize_map);
google.maps.event.addDomListener(window, 'page:load', initialize_map);

function initialize_map() {
     var mapProperties = {
            center: new google.maps.LatLng(34, -118),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
     }

    var my_map = new google.maps.Map(document.getElementById("map"), mapProperties);
  
      navigator.geolocation.getCurrentPosition(function(res){
            
            //res now represents the user's location info
            console.log("Location info: ", res);
            
            //Create coord
            var c = new google.maps.LatLng(res.coords.latitude, res.coords.longitude);
            
            my_map.setCenter(c);

            var marker = new google.maps.Marker({
                position: c
            })
            marker.setMap(my_map);
        })

}


$(window).load(function() { //start after HTML, images have loaded

 
 var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 2000;
 
            //interval between items (in milliseconds)
            var itemInterval = 10000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 0;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});

$(document).ready(function(){
    $(".btn-default").click(function(){
        $('#rotating-image').hide();
        $('#map').fadeIn('fast');
    });
})




// //add our HTML element to the document, added a div with user input to the html
// $(document).ready(function() { 
//     $("#button").hover(function() {
//     	//setting a variable that is equal to the value of the user input
//         var toAdd = $("input[name=checkListItem]").val();
//     $(".list").append('<div class="item">' + toAdd + '</div>');
//     });
//  });


// // $(document).ready(function() { 
// //     $("#button").hover(function() {
// //     	$('#button').after('<p class="current">current location</p>')
// //     });
// //  });




// //removed the unchecked item from the list. 
// // $(document).ready(function() { 
// //     $("#button").click(function() {
// //         var toAdd = $("input[name=checkListItem]").val();
// //     $(".list").append('<div class="item">' + toAdd + '</div>');
// //     });
// //     $(document).on('click', '.item', function(){
// //         .remove();
// //     })
// //  });

// //see new page
// // $(document).ready(function(){
// //     $(".body1").click(function(){
// //         $(".body1").fadeOut('fast')
// //     });
// //     $(".body1").hover(function(){
// //         $(".body1").addClass("red")
// //     });
// // })

// //adding hover, see show page
// $(document).ready(function(){

//   $(".nav1").hover(
//     function(){
//         $(this).addClass("active");
    
//     },
//     function(){
//         $(this).removeClass('active');
        
//     }
//   );

// });

// //adding focus on the input box, select input and change the color outline to red, see create page
// $(document).ready(function(){
//     $("input").focus(function(){
//         $("input").css("outline-color", "#FF0000")
//     })
// })


//using keydow to move object with animation effect. Below will take the first div it finds and move it ten pixels to the right. Remember, increasing the distance from the left margin moves something to the right; the += bit is just a shorthand for "take the existing number and add ten to it." In this case, it add ten pixels to the current distance from the left margin. see new view, line 9

// $(document).ready(function(){
//     $(document).keydown(function(){
//         $(".keydown").animate({left:'+=10px'}, 500);

//     })
// })


//see new line 11, different key to move the image around
// $(document).ready(function() {
//     $(document).keydown(function(key) {
//         switch(parseInt(key.which,10)) {
// 			// Left arrow key pressed
// 			case 37:
// 				$('img').animate({left: "-=10px"}, 'fast');
// 				break;
// 			// Up Arrow Pressed
// 			case 38:
// 			    $('img').animate({top: "-=10px"})
// 				break;
// 			// Right Arrow Pressed
// 			case 39:
// 				 $('img').animate({left: "+=10px"})
// 				break;
// 			// Down Arrow Pressed
// 			case 40:
// 				 $('img').animate({top: "+=10px"})
// 				break;
// 		}
// 	});
// });

// //see new view, line 13. more practice on animation, elevator drop
// $(document).ready(function() {
//     $('img').animate({top:'+=100px'},1000);
// });


// $(document).ready(function(){
//     $('.body1').click(function(){
//         $('.body1').effect('bounce', {times:3}, 500);
//     })
// })

// //see create
// $(document).ready(function() {
//     $("#menu").accordion({collapsible: true, active: false});
// });

// //see new for draggle feature
// $(document).ready(function(){
//  $('#car').draggable()   
// })