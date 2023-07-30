// Indian Vegetarian Meals (Define the meal options directly in JavaScript)
const meals = {
  breakfast: [
    { name: 'Poha', image: 'https://pipingpotcurry.com/wp-content/uploads/2020/12/Poha-Recipe-indori-Piping-Pot-Curry.jpg', recipeLink: 'https://www.youtube.com/watch?v=ttBtrOIYTDQ' },
    { name: 'Aloo Paratha', image: 'https://pipingpotcurry.com/wp-content/uploads/2022/11/Aloo-Paratha-Piping-Pot-Curry.jpg', recipeLink: 'https://www.youtube.com/watch?v=jLmYDZ2zjSg' },
    { name: 'Dosa', image: 'https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg', recipeLink: 'https://www.youtube.com/watch?v=J75VQSxOtdo' },
    { name: 'Methi Thepla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxpk2_ZbzlrS-bQqXlf75NigbIyynK28vMw&usqp=CAU', recipeLink: 'https://www.youtube.com/watch?v=P9Mk-fafWm4' },
    { name: 'Pancakes', image: 'https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j', recipeLink: 'https://hebbarskitchen.com/eggless-pancake-recipe-pancakes-recipes/#:~:text=eggless%20pancake%20video%20recipe%3A' },
    { name: 'Medu Vada', image: 'https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg', recipeLink: 'https://www.example.com/medu-vada-recipe' },
    { name: 'Vegetable Uttapam', image: 'https://www.example.com/vegetable-uttapam.jpg', recipeLink: 'https://www.example.com/vegetable-uttapam-recipe' },
    { name: 'Puri Bhaji', image: 'https://www.example.com/puri-bhaji.jpg', recipeLink: 'https://www.example.com/puri-bhaji-recipe' },
    { name: 'Vegetable Poha', image: 'https://www.example.com/vegetable-poha.jpg', recipeLink: 'https://www.example.com/vegetable-poha-recipe' },
    { name: 'Paneer Paratha', image: 'https://www.example.com/paneer-paratha.jpg', recipeLink: 'https://www.example.com/paneer-paratha-recipe' },
    { name: 'Mysore Masala Dosa', image: 'https://www.example.com/mysore-masala-dosa.jpg', recipeLink: 'https://www.example.com/mysore-masala-dosa-recipe' },
    { name: 'Vegetable Sandwich', image: 'https://www.example.com/vegetable-sandwich.jpg', recipeLink: 'https://www.example.com/vegetable-sandwich-recipe' },
    { name: 'Rava Upma', image: 'https://www.example.com/rava-upma.jpg', recipeLink: 'https://www.example.com/rava-upma-recipe' },
    { name: 'Sabudana Khichdi', image: 'https://www.example.com/sabudana-khichdi.jpg', recipeLink: 'https://www.example.com/sabudana-khichdi-recipe' },
    { name: 'Palak Puri', image: 'https://www.example.com/palak-puri.jpg', recipeLink: 'https://www.example.com/palak-puri-recipe' },
    { name: 'Aloo Poha', image: 'https://www.example.com/aloo-poha.jpg', recipeLink: 'https://www.example.com/aloo-poha-recipe' },
    { name: 'Vegetable Dalia', image: 'https://www.example.com/vegetable-dalia.jpg', recipeLink: 'https://www.example.com/vegetable-dalia-recipe' },
    // Add more Indian vegetarian breakfast options here
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
