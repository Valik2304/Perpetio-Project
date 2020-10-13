
    var form = document.querySelector('.div_2 .js-form-validation');
    var fields = form.querySelectorAll('.inputValidate');
    var uniqueButton = form.querySelector('.uniqueButton');
    console.log(uniqueButton);

    // var name = form.querySelector('.name');
    // var email = form.querySelector('.email');
    // var message = form.querySelector('.message');
    // var fieldsLength = fields.length;
    // var label = form.querySelectorAll('label');
    var regular = /[0-9a-zа-яє]/i;
    var blocNone = form.querySelector('span');
    var formElements = document.getElementsByClassName("js-form-validation")[0].elements;
    // console.log(formElements);

    // console.log(formElements)
    // console.log(formElements);
    // var removeError = function () {
    //     var errors = form.querySelectorAll('.error');
    //     for (var i = 0; i < errors.length; i++){
    //         errors[i].remove();
    //     }
    // };

    // var generateError = function (text) {
    //     var error = document.createElement('div');
    //     error.className = 'error';
    //     error.style.color = 'red';
    //     error.style.fontSize = 10 + 'px';
    //     error.style.marginBottom = -15 + 'px';
    //     error.style.textTransform = 'uppercase';
    //     // error.style.position = 'absolute';
    //     // error.style.right = 0;
    //     error.style.textAlign = 'end';
    //     error.innerHTML = text;
    //     return error;
    // };

    // var removeError = function () {
    //     var errors = form.querySelectorAll('.error');
    //     for (var i = 0; i < errors.length; i++) {
    //         errors[i].classList.remove('error');
    //     }
    // };



        var toggleError = (el, isError) => {
            if (isError) {
                if (!el.classList.contains('error')) {
                    el.classList.add('error');
                }
            } else {
                el.classList.remove('error');
            }
        };

        var checkErrors = () => {
            Array.from(formElements).forEach((el) => {
                toggleError(el.parentNode, !el.value.match(regular));
            });
        };

    uniqueButton.addEventListener('click', function (event) {
            event.preventDefault();
            // console.log(event.target.parentNode.querySelector('label'));
            checkErrors();
        });


    window.addEventListener('unload', function () {
        for (var i = 0; i < fields.length; i++){
            fields[i].value = "";
        }
    });

    // var checkEmail = function () {
    //     //....
    //     if (!email.value.match()){
    //
    //     }
    // };

    //
    // var form = document.querySelector('.div_2 form');
    // var fields = form.querySelectorAll('.inputValidate');
    // var name = form.querySelector('.name');
    // var email = form.querySelector('.email');
    // var message = form.querySelector('.message');
    // var fieldsLength = fields.length;
    // var label = form.querySelectorAll('label');
    // var regular = /[0-9a-zа-яє]/i;
    //
    //
    // var removeError = function () {
    //     var errors = form.querySelectorAll('.error');
    //     for (var i = 0; i < errors.length; i++){
    //         errors[i].remove();
    //     }
    // };
    //
    // var generateError = function (text) {
    //     var error = document.createElement('div');
    //     error.className = 'error';
    //     error.style.color = 'red';
    //     error.style.fontSize = 10 + 'px';
    //     error.style.marginBottom = -15 + 'px';
    //     error.style.textTransform = 'uppercase';
    //     // error.style.position = 'absolute';
    //     // error.style.right = 0;
    //     error.style.textAlign = 'end';
    //     error.innerHTML = text;
    //     return error;
    // };
    //
    // var checkFields = function () {
    //     for (var e = 0; e < fields.length; e++){
    //         if (!fields[e].value.match(regular)){
    //             console.log('Поле порожнє', fields[e]);
    //             var error = generateError('Поле не заповнено');
    //             form[e].parentElement.appendChild(error);console.log(form[e].parentElement);
    //         }
    //         else console.log('Поле заповнено', fields[e])
    //     }
    // };
    //
    // var checkEmail = function () {
    //     //....
    //     if (!email.value.match()){
    //
    //     }
    // };
    //
    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //
    //     removeError();
    //
    //     checkFields();
    // });

