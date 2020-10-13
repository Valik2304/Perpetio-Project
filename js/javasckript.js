$(window).scroll(function() {
    $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});

// $(function() {
// //     $('.marquee').marquee({
// //         duration: 7000,
// //         startVisible: true,
// //         duplicated: true
// //     });
// // });