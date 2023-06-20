


// Assume isLoggedIn is a variable indicating the login status

const isLoggedIn = false; // Change this to true if the user is logged in

document.addEventListener("DOMContentLoaded", function() {
  const loginLink = document.getElementById("login-link");

  if (isLoggedIn) {
    loginLink.textContent = "Logout";
    loginLink.addEventListener("click", Logout);
  } else {
    loginLink.textContent = "Login";
    loginLink.addEventListener("click", Login);
  }
});

function Login() {
    // Logic for handling login
    console.log("Loggedin");
  }
  
function Logout() {
    // Logic for handling logout
    console.log("Loggedout");
}

// Get the profile cards and next page button elements
const profileCards = document.querySelectorAll('.profile-card');
const nextPageButton = document.getElementById('next-page-button');

// Set the number of profile cards to display per page and initialize the page counter
const cardsPerPage = 6; // Adjust this value as per your requirement
let currentPage = 1;

// Function to show/hide profile cards based on the current page
function showProfileCards() {
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  profileCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Event listener for the next page button
nextPageButton.addEventListener('click', () => {
  currentPage++;
  showProfileCards();
});

// Initially show the profile cards on the first page
showProfileCards();



// User data (example)
const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Undergraduate",
      year: "Class of 202X",
      location: "On Campus",
      hobbies: "Hobbies listed",
      about: "About Me stuff"
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        status: "Graduate",
        year: "Class of 202Y",
        location: "Off Campus",
        hobbies: "Hobbies listed",
        about: "About Me stuff"
      },
];
  
  // Function to generate user blocks
  function generateUserBlocks() {
    const userBlockContainer = document.getElementById("user-blocks");
  
    users.forEach(user => {
      const userBlock = document.createElement("div");
      userBlock.classList.add("user-details");
  
      const profilePicture = document.createElement("img");
      profilePicture.src = "user-pfp.jpg";
      profilePicture.alt = "User Pfp";
      profilePicture.classList.add("profile-picture");
  
      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");
  
      const userName = document.createElement("h3");
      userName.classList.add("user-name");
      userName.textContent = user.name;
  
      const userEmail = document.createElement("p");
      userEmail.classList.add("user-email");
      userEmail.textContent = user.email;
  
      const userStatus = document.createElement("p");
      userStatus.classList.add("user-status");
      userStatus.textContent = user.status;
  
      const userYear = document.createElement("p");
      userYear.classList.add("user-year");
      userYear.textContent = user.year;
  
      const userLocation = document.createElement("p");
      userLocation.classList.add("user-location");
      userLocation.textContent = user.location;
  
      userInfo.appendChild(userName);
      userInfo.appendChild(userEmail);
      userInfo.appendChild(userStatus);
      userInfo.appendChild(userYear);
      userInfo.appendChild(userLocation);
  
      userBlock.appendChild(profilePicture);
      userBlock.appendChild(userInfo);
  
      const personalInfo = document.createElement("div");
      personalInfo.classList.add("personal-info");
  
      const infoHeading = document.createElement("h4");
      infoHeading.classList.add("info-heading");
      infoHeading.textContent = "Personal Information";
  
      const infoBox = document.createElement("div");
      infoBox.classList.add("info-box");
  
      const hobbies = document.createElement("p");
      hobbies.classList.add("info-item");
      hobbies.innerHTML = `<span class="info-label">Hobbies:</span> ${user.hobbies}`;
  
      const about = document.createElement("p");
      about.classList.add("info-item");
      about.innerHTML = `<span class="info-label">About Me:</span> ${user.about}`;
  
      const connectButton = document.createElement("a");
      connectButton.href = "#";
      connectButton.classList.add("connect-button");
      connectButton.textContent = "Connect with User";
  
      infoBox.appendChild(hobbies);
      infoBox.appendChild(about);
  
      personalInfo.appendChild(infoHeading);
      personalInfo.appendChild(infoBox);
      personalInfo.appendChild(connectButton);
  
      const userBlockWrapper = document.createElement("div");
      userBlockWrapper.classList.add("user-block");
      userBlockWrapper.appendChild(userBlock);
      userBlockWrapper.appendChild(personalInfo);
  
      userBlockContainer.appendChild(userBlockWrapper);
    });
  }
  
  // Call the function to generate user blocks
  generateUserBlocks();
  








