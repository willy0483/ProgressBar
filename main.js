document.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / windowHeight) * 100;
        document.getElementById('progress-bar').style.width = scrolled;
    });
});
