
// Declaring An array containing objects of images and their related data
const gallery_array = [
    {
        imageLink: "./images/fox.jpg",
        objectClassfication: "Fennec",
        objectName: "Fox",
        objectLocation: "India"
    },
    {
        imageLink: "./images/whale.jpeg",
        objectClassfication: "Humpback",
        objectName: "Whale",
        objectLocation: "South Africa"
    },
    {
        imageLink: "./images/baboon.jpg",
        objectClassfication: "Common Brown",
        objectName: "Baboon",
        objectLocation: "South Africa"
    },
    {
        imageLink: "./images/deer.jpg",
        objectClassfication: "Spotted",
        objectName: "Deer",
        objectLocation: "Amazon"
    }
];

// Declaring a constant variable for the html gallery container element
const gallery_grid = document.getElementById("gallery-grid")

gallery_grid.innerHTML = "";

/* Appending the images' html elements and their data 
 to the innerHTML of the gallery container */
gallery_array.map((photo_item) => {
    return (
        gallery_grid.innerHTML += `
        <div class="photo-item">
            <img class="photo-img" src="${photo_item.imageLink}" alt="${photo_item.objectClassfication+" "+ photo_item.objectName}" />
            <div class="overlay">
                <div class="overlay-content">
                    <div class="image-caption">
                        <p class="object-classification">${photo_item.objectClassfication}</p>
                        <p class="object-name">${photo_item.objectName}</p>
                        <p class="location">${photo_item.objectLocation}</p>
                    </div>
                    <a class="know-more-link" href="#"><span>Know more</span><img class="link-arrow" src="./images/right-arrow.png"></a>
                </div>
            </div>
        </div>
        `
    )
})
