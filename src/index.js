"use strict";
const $ = require('jquery');

(() => {
    $('body').css('background-color','red');

    const sayHello = () => console.log("hello");

    sayHello();
})();
