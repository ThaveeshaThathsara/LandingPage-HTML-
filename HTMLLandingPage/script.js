document.addEventListener("DOMContentLoaded", function () {
    // Array of thumbnail elements
    const thumbnails = document.querySelectorAll(".thumbnail .thumb img");

    // Main slider element
    const slider = document.getElementById("slider");

    // Function to update background image on click
    function updateBackgroundImage(index) {
        const items = document.querySelectorAll(".listitem .item");
        items.forEach((item) => {
            item.style.zIndex = 0;
            
             // Move all items to the background
        });

        items[index].style.zIndex = 1; // Move the selected item to the foreground
    }

    // Event listener for thumbnail clicks
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function () {
            updateBackgroundImage(index);
        });
    });
});
