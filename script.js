document.addEventListener('DOMContentLoaded', function () {
    const text = "Solte a criatividade e crie sua própria página :)";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.querySelector('.main-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
