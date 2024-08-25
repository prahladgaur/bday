const imageScroll = document.getElementById('image-scroll');
let currentIndex = 0;

imageScroll.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 2; // Toggle between 0 and 1 for two images
    const offset = -currentIndex * 520; // Adjust the width based on your image size
    imageScroll.style.transform = `translateX(${offset}px)`;
});


function showParagraph(paragraphNumber) {
    var paragraph1 = document.getElementById('paragraph1');
    var paragraph2 = document.getElementById('paragraph2');

    if (paragraphNumber === 1) {
        paragraph1.style.display = 'block';
        paragraph1.classList.add('highlighted');
        paragraph2.style.display = 'none';
        paragraph2.classList.remove('highlighted');
    } else if (paragraphNumber === 2) {
        paragraph2.style.display = 'block';
        paragraph2.classList.add('highlighted');
        paragraph1.style.display = 'none';
        paragraph1.classList.remove('highlighted');
    }
}


