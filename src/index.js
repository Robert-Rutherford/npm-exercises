"use strict";
import $ from 'jquery';
import {item as eggs,thing} from './practice.js';
import greeting from "./say-hello";

(() => {
    $('body').css('background-color','red');

    const sayHello = () => console.log("hello");

    sayHello();
    console.log(eggs.color);
    console.log(thing.weight);
    console.log(greeting());

})();
