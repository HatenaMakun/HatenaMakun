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

    // 投稿フォームの処理
    const form = document.getElementById("newsForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            const imageInput = document.getElementById("image");
            
            if (!title || !content || !imageInput.files.length) {
                alert("すべての項目を入力してください！");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
                const imageData = e.target.result;

                const post = {
                    title: title,
                    content: content,
                    image: imageData,
                    date: new Date().toLocaleString("ja-JP"),
                };

                let posts = JSON.parse(localStorage.getItem("newsPosts")) || [];
                posts.unshift(post);  // 新しい投稿を先頭に追加
                localStorage.setItem("newsPosts", JSON.stringify(posts));

                alert("投稿が完了しました！");
                form.reset();
            };
            reader.readAsDataURL(imageInput.files[0]);
        });
    }
});
