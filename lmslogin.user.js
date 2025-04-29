// ==UserScript==
// @name         Login to Moodle
// @namespace    HrishikeshMK
// @version      1.0
// @description  Login to Moodle
// @author       HrishikeshMK
// @match        https://lms.erp.bits-pilani.ac.in/moodle/*
// @match        https://accounts.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at       document-idle
// ==/UserScript==

"use strict";

switch(document.location.host){
    case "lms.erp.bits-pilani.ac.in":
        document.querySelector("span.login a")?.click();
        document.querySelector(".login-identityprovider-btn")?.click();
		break;
    case "accounts.google.com":
        for (let acc of document.querySelectorAll("div")) {
            if (acc.innerText.includes("bits-pilani.ac.in") && !acc.innerText.includes("\n")) {
                setTimeout(() => acc.click(), 500);
                break;
        }
    }
    break;
}
