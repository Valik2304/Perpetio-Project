    //
    //
    // function ready(){
    //
    //     var inputs = document.querySelectorAll('input-file');
    //     Array.prototype.forEach.call(inputs, function (input) {
    //
    //         var label = input.nextElementSibling,
    //             labelVal = label.innerHTML;
    //
    //         input.addEventListener('change', function (e) {
    //
    //             console.log(this.files);
    //             var fileName = '';
    //             if (this.files && this.files.length > 1)
    //                 // alert('Можна додати лише 1 файл!');
    //                 fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    //             else
    //                 fileName = this.files[0].name;
    //
    //             if (fileName)
    //                 label.querySelector('span' ).innerHTML = fileName;
    //             else
    //                 label.innerHTML = labelVal;
    //         })
    //
    //     });
    // }
    //
    // document.addEventListener("DOMContentLoaded", ready);
    var inputs = document.querySelectorAll('.input-file');
    Array.prototype.forEach.call(inputs, function (input) {

        const hiddenInput = input.parentElement.querySelector('label');
        const label = input.parentElement.querySelector('label');
        const defaultText = 'Drag or Upload your CV';


        label.textContent = defaultText;
        label.title = defaultText;

        input.addEventListener('click', function () {
            // inputs
            hiddenInput.click();
        });

        hiddenInput.addEventListener('change', function () {
            console.log(hiddenInput.files);
        });

        // var label = input.nextElementSibling,
        //     labelVal = label.innerHTML;
        //
        // input.addEventListener('change', function (e) {
        //
        //     console.log(this.files);
        //     var fileName = '';
        //     if (this.files && this.files.length > 1)
        //         // alert('Можна додати лише 1 файл!');
        //         fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        //     else
        //         fileName = this.files[0].name;
        //
        //     if (fileName)
        //         label.querySelector('span' ).innerHTML = fileName;
        //     else
        //         label.innerHTML = labelVal;
        // })

    });