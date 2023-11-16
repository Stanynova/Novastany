const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

const explorerImages = ["explorer1.jpg", "explorer2.jpg", "explorer3.jpg"];
let currentImageIndex = 0;


function updateExplorerImage() {
    const explorerImageElement = document.getElementById("explorer-image");
    explorerImageElement.src = explorerImages[currentImageIndex];
}


function nextExplorerImage() {
    currentImageIndex = (currentImageIndex + 1) % explorerImages.length;
    updateExplorerImage();
}
