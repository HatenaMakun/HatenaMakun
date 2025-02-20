document.addEventListener("DOMContentLoaded", function() {
    // ハンバーガーメニューの開閉
    const openBtn = document.querySelector('.openbtn');
    const gNav = document.getElementById('g-nav');

    openBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        gNav.classList.toggle('panelactive');
    });

    document.querySelectorAll('#g-nav a').forEach(link => {
        link.addEventListener('click', function() {
            openBtn.classList.remove('active');
            gNav.classList.remove('panelactive');
        });
    });
});
