import '../styles/main.css';
import { getSnippets } from "./restClient/snippetApi";
import { SnippetNav } from "./Navigators/snippetNav";
import { SnippetAside } from "./Navigators/snippetAside";
import { ActionButtons } from "./Navigators/actionButtons";

var snippetNav;
var snippetAside;
let googleSignOut;
let googleSignin;
const actionButtons = new ActionButtons();
window.addEventListener('load', function () {
    googleSignOut = document.getElementById('googleSignOut');
    googleSignin = document.getElementById('google-signin')
    init();
    renderButton();
});


function init() {
    snippetAside = new SnippetAside();
    snippetNav = new SnippetNav();

    googleSignOut.addEventListener('click', () => {
        signOut();
    });
}

async function getSnippetsFromAPI() {
    var result = await getSnippets(0, 100);
    if (result.ok) {
        snippetNav.populate(result.snippets);
    }
}

function renderButton() {
    console.log("render");
    gapi.signin2.render('google-signin', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn,
        'onfailure': onFailure
    });
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/google');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText);
        localStorage.setItem('user', xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);

    googleSignin.hidden = true;
    googleSignOut.hidden = false;
}

function onFailure(error) {
    console.log(error);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        googleSignin = document.getElementById('google-signin')
        googleSignin.hidden = false;
        googleSignOut.hidden = true;
    });

}

