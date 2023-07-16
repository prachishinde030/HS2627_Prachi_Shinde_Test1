// script.js

// JavaScript code for handling form submission and error handling

const signupForm = document.querySelector('#signup-form');
const errorMessage = document.querySelector('#error-message');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Simulate form submission
  const name = signupForm.name.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const confirmPassword = signupForm['confirm-password'].value;

  // Perform validation
  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    errorMessage.textContent = 'Please fill in all fields.';
  } else if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
  } else {
    // Clear error message
    errorMessage.textContent = '';

    // Perform sign-up logic
    // ...

    // Redirect to user dashboard or confirmation page
    window.location.href = 'userdashboard.html';
  }
});

// script.js

// JavaScript code for handling crop data, generating dynamic crop items, and adding crops to the user's listing

const cropList = document.getElementById("crop-list");
const addCropForm = document.getElementById("add-crop-form");

const userCrops = [];

// script.js

// JavaScript code for handling crop data, generating dynamic crop items, and search functionality

const cropData = [
    { 
      name: "Crop 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "crop1.jpg",
      price: 10.99
    },
    { 
      name: "Crop 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "crop2.jpg",
      price: 15.99
    }
  ];
  
  function generateCropItems(crops) {
    const cropList = document.getElementById("crop-list");
    cropList.innerHTML = '';
  
    crops.forEach(function(crop) {
      const cropItem = document.createElement("div");
      cropItem.classList.add("crop-item");
  
      const cropImage = document.createElement("img");
      cropImage.src = crop.image;
      cropImage.alt = crop.name;
  
      const cropName = document.createElement("h3");
      cropName.textContent = crop.name;
  
      const cropDescription = document.createElement("p");
      cropDescription.textContent = crop.description;
  
      const cropPrice = document.createElement("p");
      cropPrice.textContent = "$" + crop.price.toFixed(2);
  
      const viewDetailsButton = document.createElement("a");
      viewDetailsButton.classList.add("cta-button");
      viewDetailsButton.textContent = "View Details";
      viewDetailsButton.href = "#";
      viewDetailsButton.addEventListener("click", function() {
        // Handle click event for viewing crop details
        viewCropDetails(crop);
      });
  
      cropItem.appendChild(cropImage);
      cropItem.appendChild(cropName);
      cropItem.appendChild(cropDescription);
      cropItem.appendChild(cropPrice);
      cropItem.appendChild(viewDetailsButton);
  
      cropList.appendChild(cropItem);
    });
  }
  
  function viewCropDetails(crop) {
    // Redirect to the crop details page or implement a modal/pop-up to show crop details
    console.log("Crop Name:", crop.name);
    console.log("Crop Description:", crop.description);
    console.log("Crop Price:", crop.price);
  }
  
  function searchCrops(event) {
    event.preventDefault();
  
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredCrops = cropData.filter(function(crop) {
      return crop.name.toLowerCase().includes(searchTerm);
    });
  
    generateCropItems(filteredCrops);
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    generateCropItems(cropData);
  });

  // script.js

// JavaScript code for handling crop listing and cart functionality

// script.js

// JavaScript code for handling search functionality

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const searchQuery = searchInput.value.trim().toLowerCase();

  // Perform search logic here
  searchCrops(searchQuery);
});

function searchCrops(query) {
  // Implement your search logic here
  console.log("Searching for:", query);

  // Clear the search input field
  searchInput.value = "";
}
