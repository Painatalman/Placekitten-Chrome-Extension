document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('kitten-image');
    const widthInput = document.getElementById('kitten-width');
    const heightInput = document.getElementById('kitten-height');
    const urlInput = document.getElementById('kitten-url');
    const title = document.getElementById('title');
    let isGrayscale;

    chrome.storage.sync.get({
        isGrayscale: false
    }, function(options){
        isGrayscale = options.isGrayscale;
        // set title based on grayscale option
        title.textContent = `${isGrayscale ? 'Gray ' : ''}${title.textContent}`;
    });

    function setKittenUrl() {
        let width = widthInput.value;
        let height = heightInput.value;

        if (width && height) {
            imageElement.src = `http://placekitten.com/${isGrayscale ? 'g/' : ''}${width}/${height}`;
            imageElement.removeAttribute('hidden');

            urlInput.value = imageElement.src;
        } else {
            imageElement.setAttribute('hidden');
        }

        
    }

    widthInput.onchange = setKittenUrl;
    heightInput.onchange = setKittenUrl;
});
