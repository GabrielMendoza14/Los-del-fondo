const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const player = {
    x: 100,
    y: 100,
    width: 40,
    height: 40,
    speed: 5,
};
const enemies = [
    {
        x: 200,
        y: 100,
        width: 40,
        height: 40,
        speed: 3,
    },
    {
        x: 300,
        y: 100,
        width: 40,
        height: 40,
        speed: 3,
    },
    {
        x: 400,
        y: 100,
        width: 40,
        height: 40,
        speed: 3,
    },
];
const coins = [
    {
        x: 50,
        y: 50,
        width: 20,
        height: 20,
    },
    {
        x: 150,
        y: 50,
        width: 20,
        height: 20,
    },
    {
        x: 250,
        y: 50,
        width: 20,
        height: 20,
    },
];
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = 'red';
        enemies.forEach((enemy) => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
    ctx.fillStyle = 'yellow';
    coins.forEach((coin) =>
    ctx.fillRect(coin));
}