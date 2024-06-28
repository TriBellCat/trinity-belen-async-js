const imgURL = document.querySelector("#imgURL");
const button = document.querySelector("#load-image");
const output = document.querySelector("#output");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

async function loadImage(imageURL) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(imageURL);
            const blob = await response.blob();
            const imageBitmap = await createImageBitmap(blob);
            resolve(imageBitmap);
        } catch (error) {
            reject(error);
        }
    });
}

button.addEventListener("click", async () => {
    try {
        const imageBitmap = await loadImage(imgURL.value);

        //Sets canvas size so that the entire image is shown
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;

        //Clears the specified pixels
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imageBitmap, 0, 0);
        output.textContent = "Image loaded successfully!";
    } catch (error) {
        output.textContent = `Couldn't load image: ${error}`;
    }
});
