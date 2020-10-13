
    window.addEventListener('beforeunload', (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        var file = document.querySelector('.input-file');
        console.log('hello');
        // console.log(file.files[0].name);
        file.value = "";
        // console.log(file.files[0].name);
        event.returnValue = '';
    });