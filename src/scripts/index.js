import '../styles/main.css';

import { SnippetNav } from "./Navigators/snippetNav";
import { SnippetAside } from "./Navigators/snippetAside";
import { ActionButtons } from "./Navigators/actionButtons";


let googleSignOut;
let googleSignin;


class MainView {

    init() {
        this.actionButtons = new ActionButtons(this);
        this.snippetAside = new SnippetAside(this);
        this.snippetNav = new SnippetNav(this);
        let modalView = document.getElementById('addSnippet');
        modalView.style.visibility = "hidden";
        googleSignOut.addEventListener('click', () => {
            signOut();
        });
        this.renderButton();
    }


    renderButton() {
        console.log("render");
        gapi.signin2.render('google-signin', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': (googleUser) => { this.onSignIn(googleUser) },
            'onfailure': (googleUser) => { this.onFailure(googleUser) }
        });
    }

    onSignIn(googleUser) {
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
        this.snippetNav.loadSnippets();
    }

    onFailure(error) {
        console.log(error);
    }

    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
            googleSignin = document.getElementById('google-signin')
            googleSignin.hidden = false;
            googleSignOut.hidden = true;
        });

    }

}

const mainView = new MainView();

window.addEventListener('load', function () {
    googleSignOut = document.getElementById('googleSignOut');
    googleSignin = document.getElementById('google-signin')
    mainView.init();
});

