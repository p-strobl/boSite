export const loadImages = () => {
  const images = document.getElementsByClassName("AsyncImage");

  Array.from(images).map((item) => {
    // Start loading image
    const image = new Image();

    image.src = item.dataset.imageSrc;
    // Once image is loaded replace the src of the HTML element
    image.onload = () => {
      item.classList.remove("AsyncImage");

      if (item.nodeName !== "IMG") {
        return;
      }

      item.src = item.dataset.imageSrc;
    };
    return false;
  });
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    loadImages();
  },
  false,
);
