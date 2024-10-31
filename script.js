function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    imageInput.click();

    imageInput.addEventListener('change', function() {
        if (imageInput.files && imageInput.files[0]) {
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = URL.createObjectURL(imageInput.files[0]);
        }
    });
}
// فتح النافذة المنبثقة
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// إغلاق النافذة المنبثقة
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// إغلاق النافذة عند النقر خارجها
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
