document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('colorForm').addEventListener('submit', function (e) {
        e.preventDefault(); // to prevent the form from submitting and refreshing the page
        var colorValue = document.getElementById('colorInput').value;
        document.getElementById('header').style.color = colorValue;
    });
});
