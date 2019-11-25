import '../styles/index.scss';

console.log('webpack starterkit');

window.addEventListener('load', function () {
    addActionListeners();
    console.log(API_URL);
});

function addActionListeners() {
    document.getElementById('aboutBtn').addEventListener('click', () => {
        console.log("click button");
        window.location.href = 'about';
    });
}