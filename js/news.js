document.addEventListener("DOMContentLoaded", function() {
    // ナビゲーションの開閉処理
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

    // ニュースの投稿データを表示
    const newsContainer = document.getElementById("newsContainer");
    let posts = JSON.parse(localStorage.getItem("newsPosts")) || [];

    if (posts.length === 0) {
        newsContainer.innerHTML = "<p>まだ投稿がありません。</p>";
        return;
    }

    posts.forEach(post => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <img src="${post.image}" alt="投稿画像" style="max-width: 100%; height: auto;">
            <p class="date">${post.date}</p>
            <hr>
        `;

        newsContainer.appendChild(newsItem);
    });
});
