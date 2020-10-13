
    var disable = document.querySelectorAll('.disable');

    var body = document.querySelector('body');

    var show = function (state) {
        let form = document.getElementById('formCv');
        form.style.display = state;
        document.getElementById('filter').style.display = state;

        disableScroll();

        let removeFile = form.querySelectorAll('input, textarea');
        for (var i = 0; i < removeFile.length; i++){
            removeFile[i].value = "";
        }
    };

    function disableScroll() {
     var dis =   body.classList.toggle('disable-scroll');
        console.log(dis);
    }

    body.getElementById('filter').addEventListener('click', function (event) {
        enableScroll();
        console.log(event.currentTarget);
    });

   function enableScroll() {
       body.classList.toggle('disable-scroll');
   }







    // $('#but').bind('click', show,function () {
    //     $('body').css("overflow","hidden");
    //     return false;
    // });
    // $('#formCv').display(function () {
    //     $('body').css("overflow","hidden");
    // })

    // $('#div').on('mouseenter', function (event) {
    //     $("body").css("overflow","hidden");
    // }).on('mouseleave',  function(){
    //     $("body").css("overflow","auto");
    // });

