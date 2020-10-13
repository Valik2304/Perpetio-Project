
    var divModal = document.querySelector('.div_2_modal');
    var form = divModal.querySelector('.formValidate');
    var validateButton = divModal.querySelector('.validateButton');
    var name = divModal.querySelector('.name');
    var email = divModal.querySelector('.email').value;
    var message = divModal.querySelector('.message').value;
    var inputFile = divModal.querySelector('.input-file');
    var fields = divModal.querySelectorAll('.field');
    var fieldsLength = fields.length;
    var label = form.querySelectorAll('label');
    var regular = /[0-9a-zа-яє]/i;

    var removeValidation = function(){
        var  errors = form.querySelectorAll('.error');
        for(var i = 0; i < errors.length; i++){
            errors[i].remove();
        }
    };
    // var removeValidationSuccess = function(){
    //     var  successes = form.querySelectorAll('.success');
    //     for(var i = 0; i < successes.length; i++){
    //         successes[i].remove();
    //     }
    // };

    var generateError = function (text, ){
        var error = document.createElement('div');
        error.className = 'error';
        // error.style.color = 'red';
        error.style.fontSize = 10 + 'px';
        error.style.textAlign = 'right';
        error.style.marginBottom = -25 + 'px';
        error.style.marginTop = -3 + 'px';
        error.style.textTransform = 'uppercase';
        error.innerHTML = text;
        return error
    };
    // var generateSuccess = function (text, ){
    //     var success = document.createElement('div');
    //     success.className = 'success';
    //     success.style.color = 'green';
    //     success.style.fontSize = 10 + 'px';
    //     success.style.textAlign = 'right';
    //     success.style.marginBottom = -25 + 'px';
    //     success.style.marginTop = -3 + 'px';
    //     success.style.textTransform = 'uppercase';
    //     success.innerHTML = text;
    //     return success
    // };

    var checkFields = function(){
        for (var e = 0; e < fieldsLength; e++){
            if ( !fields[e].value.match(regular)){
                console.log('fields is blank', fields[e]);
                // var error = document.createElement('div');
                // error.className = 'error';
                // error.style.color = 'red';
                // error.style.fontSize = 10 + 'px';
                // error.style.textAlign = 'right';
                // error.style.marginBottom = -10 + 'px';
                // error.style.marginTop = -3 + 'px';
                // error.style.textTransform = 'uppercase';
                // error.innerHTML = 'Cannot be blank';
                 var error = generateError('Cannot be blank' + ' - ' + fields[e].name);
                 error.style.color ="red";
                form[e].parentElement.appendChild(error);
            }
            else if (fields[e].value.match(regular)) {
                // else var success = generateSuccess("THANK YOU FOR YOUR " + fields[e].name +"!");
                // form[e].parentElement.appendChild(success);
                console.log('поле заповнене:', fields[e]);
                var error = generateError('Field is not empty' + ' - ' + fields[e].name);
                error.style.color ="green";
                form[e].parentElement.appendChild(error);
                //label[i].parentElement.appendChild(error);
                //label[i].appendChild(error);
            }
        }
    };



    var checkFile = function(){
        if (!inputFile.value || inputFile.value === ""){
            console.log('not equals', inputFile);
            var error = generateError('File not uploaded!');
            // var error = document.createElement('div');
            // error.className = 'error';
            // error.style.color = 'red';
            // error.style.fontSize = 10 + 'px';
            // error.style.textAlign = 'right';
            // error.style.marginBottom = -10 + 'px';
            error.style.marginTop = -15 + 'px';
            error.style.marginRight = -15 + 'px';
            error.style.color ="red";
            // error.style.textTransform = 'uppercase';
            // error.innerHTML = 'File not uploaded';
            document.querySelector('.file').appendChild(error);
            // var rex = /[^а-я]/;
            // var str = 'абвгдеєжзиіїйклмнопрстуфхцчшщьюя';
            // console.log(str.match(rex));
            // console.log('є'.charCodeAt());
        }
        // else console.log('файл завантажено', inputFile.value);
        else console.log('завантажено файл:', inputFile.files[0].name);
    };

 validateButton.addEventListener('click', function (event) {
        event.preventDefault();

        // console.log(event.target.parentsNode.querySelector('form'));
        // console.log(`${fields} ${fields.length}`)
        // console.log(document.querySelector('form').elements.name_id.value);

        removeValidation();

        checkFields();

        checkFile();
    });


    var inputs = form.querySelectorAll('.input-file');
    Array.prototype.forEach.call(inputs, function (input) {

    //     const hiddenInput = input.parentElement.querySelector('label');
    //     const label = input.parentElement.querySelector('label');
    //     const defaultText = 'Drag or Upload your CV';
    //
    //     label.textContent = defaultText;
    //     label.title = defaultText;
    //
    //     input.addEventListener('change', function () {
    //         console.log('good');
    //         // console.log(input.files);
    //         const fileName = Array.prototype.map.call(input.files, function (file) {
    //             return file.name;
    //         });
    //         label.textContent = fileName.join(', ') || defaultText;
    //     });

        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {

            // console.log(this.files[0].name);
            var fileName = '';
            if (this.files && this.files.length > 1)
                alert('Можна додати лише 1 файл!');
                // fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
             else
                fileName = this.files[0].name;

            if (fileName){
                label.querySelector('span' ).innerHTML = fileName;

                 var labelChange = document.querySelector('.fileLabel');
                // var img = labelChange.querySelector('img');
                //  img.classList.toggle('noneText');
                 labelChange.style.border = 'none';
                 labelChange.style.textAlign = 'left';
                 labelChange.style.paddingLeft = 1 + 'rem';
                 labelChange.style.width = 100 + '%';
                 labelChange.style.maxWidth = 464 + 'px';
                 labelChange.style.left = 0;
                }
            else
                label.innerHTML = labelVal;
                // img.classList.toggle('noneText');
        });

    });
