// ==UserScript==
// @name     AWSAlias
// @version  2
// @grant    none
// @match https://*.console.aws.amazon.com/*
// ==/UserScript==
(function() {
    'use strict';
    window.setTimeout(() => {
        const jsonld = JSON.parse(document.querySelector('meta[name="awsc-session-data"]').content)
        const label = jsonld.accountAlias
        document.getElementsByClassName('_more-menu__button-content--label_znf2v_148')[3].innerHTML += `/${label}`
        //const acct = document.getElementsByClassName('_more-menu__button-content--label_znf2v_148')[3].title
        //document.getElementsByClassName('_more-menu__button-content--label_znf2v_148')[3].innerHTML = `/${acct}`
    }, 2000);
})();