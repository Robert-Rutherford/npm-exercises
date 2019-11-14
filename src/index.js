"use strict";
import $ from 'jquery';
const {item,thing} = require('./practice.js');

(() => {
    $('body').css('background-color','red');

    const sayHello = () => console.log("hello");

    sayHello();
    console.log(item.color);
    console.log(thing.weight);

})();
