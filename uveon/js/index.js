"use strict";
(function () {
    var opacity_all = document.querySelectorAll(".opacity_all");
    window.addEventListener('scroll', function () {

        opacity_all.forEach(function (element) {
            let h_element = element.offsetHeight;
            let pageHeight = element.getBoundingClientRect().top;
            pageHeight = pageHeight - h_element;
            if (pageHeight < 0) {
                element.style.opacity = 1;
                element.style.transition = 'opacity 0.8s ease';
            }
        })

    })


})()