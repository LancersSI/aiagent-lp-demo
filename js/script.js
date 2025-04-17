// 背景画像の設定
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const bgImage = hero.dataset.bgImage;
        if (bgImage) {
            hero.style.setProperty('--hero-bg-image', `url('${bgImage}')`);
        }
    }
});