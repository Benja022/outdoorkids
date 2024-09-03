document.addEventListener('DOMContentLoaded', function () {
    const familyPhotoInput = document.getElementById('family-photo-input');
    const familyPhoto = document.getElementById('family-photo');
    const defaultIcon = document.getElementById('default-icon');

    familyPhoto.addEventListener('click', function () {
        familyPhotoInput.click();
    });

    familyPhotoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {

                if (defaultIcon) {
                    defaultIcon.style.display = 'none';
                }

                const existingImage = familyPhoto.querySelector('img:not(#default-icon)');
                if (existingImage) {
                    existingImage.remove();
                }

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Foto de la familia';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                familyPhoto.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});
