document.addEventListener('DOMContentLoaded', function() {
    const rhombuses = document.querySelectorAll('.rhombus');
    const mainImage = document.getElementById('main-image');

    rhombuses.forEach(rhombus => {
        rhombus.addEventListener('mouseover', function() {
            const newImage = this.getAttribute('data-image');
            mainImage.src = newImage;
        });

        rhombus.addEventListener('mouseout', function() {
            // Mouse çıkarken fotoğrafı eski haline döndürün
            mainImage.src = 'https://scontent.fgyd3-1.fna.fbcdn.net/v/t39.30808-6/410973041_267937659596238_4311744812220467072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TcWVKWIhHfgQ7kNvgGD_Grw&_nc_ht=scontent.fgyd3-1.fna&oh=00_AYDhKWuNi4q8YlUSUEbBJySazj_a2g3Ok66q9INcDvCIbA&oe=66C26AFD'; // Eski fotoğraf
        });
    });
});



