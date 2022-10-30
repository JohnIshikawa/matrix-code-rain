const wrapper = document.getElementById('wrapper');
const readyButton = document.getElementById('ready-btn');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const letters = 'abcdefghijklmnopqrstuvwxyz0123456789!?<>+-*/'
const fontSize = 15;
const rainSpeed = 50;
const line = Array(screenWidth / fontSize).join(0).split('');

function startMatrix() {
    wrapper.remove();
    initCanvas();
    setInterval(draw, rainSpeed);
}
readyButton.addEventListener('click', startMatrix);


function initCanvas() {
    canvas.width = screenWidth;
    canvas.height = screenHeight;

    let monoidFont = new FontFace('Monoid', 'url(./font/Monoid-Regular.ttf)');
    monoidFont.load().then(function(font){
        document.fonts.add(font);
    });

    ctx.fillStyle = 'rgba(0, 0, 0, .06)';
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}


function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .06)';
    ctx.fillRect(0, 0, screenWidth, screenHeight);
    line.map(function(y, index) {
        let randomIndex = getRandomInteger(letters.length);
        ctx.fillStyle = '#7f0';
        ctx.font = `${fontSize}px Monoid`;
        let x = index * fontSize;
        ctx.fillText(letters[randomIndex], x, y);

        line[index] = (y > 0 + Math.random() * 1e4) ? 0 : y + fontSize;
    });
}


function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

