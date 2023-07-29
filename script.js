// Indian Vegetarian Meals (Define the meal options directly in JavaScript)
const meals = {
  breakfast: [
    { name: 'Poha', image: 'https://pipingpotcurry.com/wp-content/uploads/2020/12/Poha-Recipe-indori-Piping-Pot-Curry.jpg', recipeLink: 'https://konkanikhanna.com/kanda-batata-poha-kande-phanna-poha/#recipe-video:~:text=tea%20or%20coffee%20%E2%98%95%EF%B8%8F-,Video,-TAGS' },
    { name: 'Aloo Paratha', image: 'https://pipingpotcurry.com/wp-content/uploads/2022/11/Aloo-Paratha-Piping-Pot-Curry.jpg', recipeLink: 'https://www.youtube.com/watch?v=jLmYDZ2zjSg' },
    { name: 'Dosa', image: 'dosa.jpg', recipeLink: 'https://www.example.com/dosa-recipe' },
    { name: 'Chole Bhature', image: 'https://www.cookwithmanali.com/wp-content/uploads/2020/04/Chole-Bhature.jpg', recipeLink: 'https://www.cookwithmanali.com/chole-bhature/' },
    { name: 'Methi Thepla', image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Methi-Thepla-1.jpg', recipeLink: 'https://www.cookwithmanali.com/methi-thepla/' },
    // Add more breakfast options
  ],
  lunch: [
    { name: 'Rajma Chawal', image: 'rajma_chawal.jpg', recipeLink: 'https://www.example.com/rajma-chawal-recipe' },
    { name: 'Chole Bhature', image: 'chole_bhature.jpg', recipeLink: 'https://www.example.com/chole-bhature-recipe' },
    { name: 'Palak Paneer', image: 'palak_paneer.jpg', recipeLink: 'https://www.example.com/palak-paneer-recipe' },
    { name: 'Aloo Gobi', image: 'aloo_gobi.jpg', recipeLink: 'https://www.example.com/aloo-gobi-recipe' },
    { name: 'Dal Makhani', image: 'dal_makhani.jpg', recipeLink: 'https://www.example.com/dal-makhani-recipe' },
    // Add more lunch options
  ],
  dinner: [
    { name: 'Vegetable Biryani', image: 'veg_biryani.jpg', recipeLink: 'https://www.example.com/vegetable-biryani-recipe' },
    { name: 'Paneer Tikka', image: 'paneer_tikka.jpg', recipeLink: 'https://www.example.com/paneer-tikka-recipe' },
    { name: 'Matar Paneer', image: 'matar_paneer.jpg', recipeLink: 'https://www.example.com/matar-paneer-recipe' },
    { name: 'Veg Pulao', image: 'veg_pulao.jpg', recipeLink: 'https://www.example.com/veg-pulao-recipe' },
    { name: 'Aloo Methi', image: 'aloo_methi.jpg', recipeLink: 'https://www.example.com/aloo-methi-recipe' },
    // Add more dinner options
  ],
};


// Function to get a random meal from the given array
function getRandomMeal(mealsArray) {
  const randomIndex = Math.floor(Math.random() * mealsArray.length);
  return mealsArray[randomIndex];
}

// Function to display meal details
function displayMeal(mealType, mealName, imageUrl, recipeUrl) {
  const mealTypeDisplay = document.getElementById('mealType');
  const mealDisplay = document.getElementById('meal');
  const mealImage = document.getElementById('mealImage');
  const recipeLink = document.getElementById('recipeLink');
  const recipeContainer = document.querySelector('.recipe');

  mealTypeDisplay.textContent = mealType;
  mealDisplay.textContent = mealName;
  mealImage.src = imageUrl;
  recipeLink.href = recipeUrl;

  // Show the meal image and its label when a button is clicked
  mealImage.style.display = 'block';
  recipeContainer.style.display = 'block';
}

// Event listeners for buttons
const breakfastBtn = document.getElementById('breakfastBtn');
const lunchBtn = document.getElementById('lunchBtn');
const dinnerBtn = document.getElementById('dinnerBtn');

breakfastBtn.addEventListener('click', () => {
  const randomMeal = getRandomMeal(meals.breakfast);
  displayMeal('Breakfast', randomMeal.name, randomMeal.image, randomMeal.recipeLink);
});

lunchBtn.addEventListener('click', () => {
  const randomMeal = getRandomMeal(meals.lunch);
  displayMeal('Lunch', randomMeal.name, randomMeal.image, randomMeal.recipeLink);
});

dinnerBtn.addEventListener('click', () => {
  const randomMeal = getRandomMeal(meals.dinner);
  displayMeal('Dinner', randomMeal.name, randomMeal.image, randomMeal.recipeLink);
});

// Function to handle language change
document.getElementById('languageSelect').addEventListener('change', function () {
  const selectedLanguage = this.value;
  if (selectedLanguage === 'hi') {
    window.location.href = 'hindi.html';
  } else {
    window.location.href = 'index.html'; // Redirect back to the default (English) page
  }
});
