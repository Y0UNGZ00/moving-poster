$(document).ready(function() {

    $(".menu-item").on("click", function() {
        $('.menu-item').removeClass("active");
        $(this).addClass("active");
        $('.season-name').removeClass("active");
        $('.text-container').removeClass("active");
        $('.text-container').width();
    })

    $(".menu-spring").on("click", function() {
        $(".photo-container").attr("src", "img/photo_1.png")
        $(".food-container").attr("src", "img/food_1.png")
        $(".road-container").attr("src", "img/road_1.png")
        $(".text-container").attr("src", "img/text_1.png")
        $(".text-container").addClass("active");
        $(".name-spring").addClass("active");
    })
    $(".menu-summer").on("click", function() {
        $(".photo-container").attr("src", "img/photo_2.png")
        $(".food-container").attr("src", "img/food_2.png")
        $(".road-container").attr("src", "img/road_2.png")
        $(".text-container").attr("src", "img/text_2.png")
        $(".text-container").addClass("active");
        $(".name-summer").addClass("active");
    })
    $(".menu-fall").on("click", function() {
        $(".photo-container").attr("src", "img/photo_3.png")
        $(".food-container").attr("src", "img/food_3.png")
        $(".road-container").attr("src", "img/road_3.png")
        $(".text-container").attr("src", "img/text_3.png")
        $(".text-container").addClass("active");
        $(".name-fall").addClass("active");
    })
    $(".menu-winter").on("click", function() {
        $(".photo-container").attr("src", "img/photo_4.png")
        $(".food-container").attr("src", "img/food_4.png")
        $(".road-container").attr("src", "img/road_4.png")
        $(".text-container").attr("src", "img/text_4.png")
        $(".text-container").addClass("active");
        $(".name-winter").addClass("active");
    })
})

/* 랜덤 */
// var random_number_X;
// var random_number_Y;
// var random_img;
// var random_duration;

// $(document).ready(function () {
//     for (var i = 0; i < 100; i = i + 1) {
//       random_number_X = parseInt(Math.random() * $("body").width());
//       random_number_Y = parseInt(Math.random() * $("body").height());
//       random_img = parseInt(Math.random() * 5);
//       random_duration = parseInt(Math.random() * 50) / 10 + 2;

//       var img =
//         "<img src='img/piece-spring_" +
//         random_img +
//         ".png' style='top:" +
//         random_number_Y +
//         "px;left:" +
//         random_number_X +
//         "px; animation-duration:" +
//         random_duration +
//         "s'/>";

//       $("body").append(img);
//     }
//    // $(".piece-container").html(random_number_X + " and " + random_number_Y);
// });