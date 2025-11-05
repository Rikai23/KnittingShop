// -- Смена текста в приветствии --

// Получаем данные из Django
const texts = JSON.parse(document.getElementById("texts-data").textContent);

let index = 0;

function changeText()
{
    const title = document.getElementById("welcome-text");
    const desc = document.getElementById("welcome-desc");

    //Уезжает влево (скрыть текст)
    title.classList.add("slide-out-left");
    desc.classList.add("slide-out-left");

    setTimeout(() => {
        //Смена текста
        index = (index + 1) % texts.length;
        title.textContent = texts[index].title;
        desc.textContent = texts[index].desc;

        //Сбросить старую анимацию
        title.classList.remove("slide-out-left");
        desc.classList.remove("slide-out-left");

        //Заезжает справа (отобр. нового текста)
        title.classList.add("slide-in-right");
        desc.classList.add("slide-in-right");

        //Через 1с убрать класс,  чтобы можно было повторять
        setTimeout( () => {
            title.classList.remove("slide-in-right");
            desc.classList.remove("slide-in-right");
        }, 1000);
    }, 1000); //Ждать завершение анимации
}

setInterval(changeText, 4000); //каждые 4с

document.addEventListener("DOMContentLoaded", function() {
    // -- Автослайд фото товаров --
    document.querySelectorAll('.product-slider').forEach(slider => {
        const images = slider.querySelectorAll('img');
        if(images.length <= 1) return; //Если одно фото ничего не делаем

        let current = 0;
        setInterval( () => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        }, 3000);
    });
});

// --- Смена изображений в разделе "О продукции" ---
const aboutImages = [
    "/static/images/about_products1.jpg",
    "/static/images/about_products2.jpg",
    "/static/images/about_products3.jpg"
];

let aboutIndex = 0;
const aboutImgEl = document.getElementById("about-image");

function changeAboutImage() {
    aboutImgEl.classList.add("fade-out");
    setTimeout(() => {
        aboutIndex = (aboutIndex + 1) % aboutImages.length;
        aboutImgEl.src = aboutImages[aboutIndex];
        aboutImgEl.classList.remove("fade-out");
    }, 1000);
}

setInterval(changeAboutImage, 4000);
