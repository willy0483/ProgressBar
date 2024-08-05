document.addEventListener('scroll', () => {
    requestAnimationFrame(updateProgressBar);
});

function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const windowHeight = scrollHeight - clientHeight;
    const scrolled = (scrollTop / windowHeight) * 100;

    document.getElementById('progress-bar').style.width = scrolled + '%';
}
