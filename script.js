document.getElementById('generate').addEventListener('click', function() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = 'Random Number: ' + randomNum;
});
