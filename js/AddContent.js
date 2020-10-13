

    // let hideBtns = document.getElementsByClassName('js-hide-text-btn');console.log(hideBtns);
    let showBtns = document.getElementsByClassName('js-show-text-btn');
    console.log(showBtns);

    let hideShowText = function( event){
        event.preventDefault();
        // console.log(event.target.parentNode.parentElement);
        // console.log(event.target.parentNode);
        // console.log(event.target.parentNode.children);

        if (event.target.classList.contains('plus')){
            var childOne = event.target.parentNode.parentElement.children;
            console.log(childOne);
            for (var e = 0; e < childOne.length; e++){
                childOne[e].classList.toggle("noneText")
            }
            let elementClass = event.target.parentNode.parentElement.getAttribute('data-field');
            console.log(elementClass);
            let hideTextEl = document.getElementsByClassName(elementClass);
            hideTextEl.item(0).classList.toggle("noneText");
        }
        else if (!event.target.classList.contains('plus')){
            var childTwo = event.target.parentNode.children;
            for (var i = 0; i < childTwo.length; i++){
                childTwo[i].classList.toggle("noneText")
            }
            let elementClass = event.target.parentNode.getAttribute('data-field');
            console.log(elementClass);
            let hideTextEl = document.getElementsByClassName(elementClass);
            hideTextEl.item(0).classList.toggle("noneText");
        }

    };

    Array.from(showBtns).forEach(function(btn) {
        btn.addEventListener('click', hideShowText);
    });
    //
    // showBtns.addEventListener('click', function (event) {
    //     let elementClass = event.target.parentNode.getAttribute('data-field');
    //     let hideTextEl = document.getElementsByClassName(elementClass);
    //
    //     let linkContent = showBtns.firstElementChild;
    //     let linkContent2 = showBtns[i].lastElementChild;
    //     if (hideTextEl[i].classList.contains("noneText")){
    //         hideTextEl[i].classList.remove("noneText");
    //         // linkContent.classList.toggle("noneText")
    //         // showBtns[i].textContent = "Hide -";
    //
    //         linkContent.className = "noneText";
    //         linkContent2.className = "";
    //     }
    //     else if (!hideTextEl[i].classList.contains("noneText")){
    //         hideTextEl[i].classList.add("noneText");
    //         linkContent.className = "";
    //         linkContent2.className = "noneText";
    //         // linkContent.classList.toggle("noneText")
    //         // showBtns[i].innerHTML = "View Case Study +";
    //         // showBtns[i].innerHTML = "View Case Studyyy<img src='/svg/plus_logo_Plus.svg' class='plus'>";
    //     }
    // });

    // let showText = function(event){
    //     event.preventDefault();
    //     let text = document.querySelector('.noneText');
    //     text.className = 'displayLink';
    //     console.log(text);
    // };


    // let plusContent = document.querySelector('.main__section__7__mobile .plusContent');
    // let linkOnePlus = plusContent.querySelector('.linkOne');
    // let noneLinkPlusContent = plusContent.querySelector('.noneLink');
    // let main__section__7_Clone = document.querySelector('.main__section__7_Clone');
    // console.log(noneLink);
    // // let newText2Cont3 = plusContent.querySelector('.section__7__text__burn div');
    //
    // linkOnePlus.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     // if (!newText2Cont3.classList.contains('noneText')){
    //     //     newText2Cont3.classList.add('addText2');
    //     // }
    //     // else {
    //     //     newText2Cont3.classList.remove('noneText');
    //     //     newText2Cont3.classList.add('addText2');
    //     //     newText2Cont3.style.maxHeight = 600 + 'px';
    //     //     // newText2.style.whiteSpace = 'nowrap';
    //     //     newText2Cont3.style.overflow = 'hidden';
    //     //     newText2Cont3.style.textOverflow = 'ellipsis';
    //     //     newText2Cont3.style.transition = .55 + 's';
    //     //     linkOnePlus.className = 'noneLink';
    //     //     noneLinkCont3.className = 'displayLink';
    //     //     console.log(newText2Cont3);
    //     // }
    //
    //     linkOnePlus.className = 'noneLink';
    //     main__section__7_Clone.style.display = 'bloc';
    //     // main__section__7_Clone.className = 'displayLink';
    //     noneLinkPlusContent.className = 'displayLink';
    //
    // });
    //
    // noneLinkPlusContent.addEventListener('click', function (event) {
    //     event.preventDefault();
    //
    //     // if (newText2Cont3.classList.contains('addText2')){
    //     //     newText2Cont3.className = 'noneText';
    //     //     noneLinkCont3.className = 'noneLink';
    //     //     linkOnePlus.className = 'displayLink';
    //     // }
    //     noneLinkPlusContent.className = 'noneLink';
    //     linkOnePlus.className = 'displayLink';
    //     main__section__7_Clone.style.display = 'none';
    //     // main__section__7_Clone.className = 'noneLink';
    //
    // });