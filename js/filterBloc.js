
    const filterBloc = document.querySelectorAll('.text-white');

    document.querySelector('.navigate_links').addEventListener('click', event => {
        event.preventDefault();
        if (event.target.tagName !== 'A') return false;

        let filterClass = event.target.dataset['filter'];
        // console.log(filterClass);

        filterBloc.forEach(elem => {
            elem.classList.remove('noneText');
            if (!elem.classList.contains(filterClass) && filterClass !== 'js-all'){
                elem.classList.add('noneText');
            }
        });
    });