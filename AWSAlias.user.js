// ==UserScript==
// @name     AWSAccountAliasTab
// @version  3
// @grant    none
// @match https://*.console.aws.amazon.com/*
// @Edited from: https://gist.github.com/emmanuelnk/c34a361c79c0f3792de533170cbfcd01
// ==/UserScript==
(function() {
    'use strict';
    window.setTimeout(() => {
        let label = JSON.parse(document.querySelector('meta[name="awsc-session-data"]').content).accountAlias
        switch(label) {
            // If Alias is undefined
            case '0000':
                label = 'awsAcct'
                break;
        }
        const styleClasses = document.querySelector('[data-testid="more-menu__awsc-nav-regions-menu-button"]').classList
        const topBarList = document.getElementById('awsc-navigation__more-menu--list')
        const newTopBarListItem = topBarList.firstChild.cloneNode()
        const newTopBarListItemTextDiv = document.createElement('div')

        newTopBarListItemTextDiv.classList.add(styleClasses[0])
        newTopBarListItem.appendChild(document.createTextNode(label))
        newTopBarListItemTextDiv.appendChild(newTopBarListItem)
        topBarList.prepend(newTopBarListItemTextDiv)
    }, 900);
})();
