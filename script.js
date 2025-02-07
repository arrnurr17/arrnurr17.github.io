document.addEventListener("DOMContentLoaded", () => {
    const changeRGBBtn = document.getElementById("changeRGBBtn");
    const changeImageBtn = document.getElementById("changeImageBtn");

    const backgroundImages = [
        'url("https://redriven.com/wp-content/uploads/2022/12/Lexus-ISF-7-scaled.jpg")',
        'url("https://redriven.com/wp-content/uploads/2022/12/Lexus-ISF-1-scaled.jpg")',
        'url("https://redriven.com/wp-content/uploads/2022/12/Lexus-ISF-10-scaled.jpg")',
    ];

    // Обработчик для смены фона на случайный RGB цвет
    changeRGBBtn.addEventListener("click", () => {
        document.body.style.backgroundImage = ''; // Убираем изображение фона
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;
        document.body.style.backgroundColor = randomColor; // Меняем фон на случайный цвет
    });

    // Обработчик для смены фона на изображение поочередно
    let currentImageIndex = 0; // Индекс текущего изображения

    changeImageBtn.addEventListener("click", () => {
        // Убираем цвет фона, если он был
        document.body.style.backgroundColor = ''; 

        // Устанавливаем изображение по индексу
        document.body.style.backgroundImage = backgroundImages[currentImageIndex]; 

        // Переход к следующему изображению
        currentImageIndex++;

        // Если индекс выходит за пределы массива, начинаем с первого изображения
        if (currentImageIndex >= backgroundImages.length) {
            currentImageIndex = 0;
        }
    });
});
