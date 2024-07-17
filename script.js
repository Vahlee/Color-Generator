// Add background color
const backgroundColors = [
    'Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 
     'White', 'Gray', 'Cyan', 'Maroon', 'Olive', 
    'Lime', 'Teal', 'Aqua', 'Violet'
];

// create function
function backgroundEffect() {
    let randomColor = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randomColor];
}

// Select button element using JS DOM Manipulation
const pageButton = document.querySelector('.btn');

// Add event listener
pageButton.addEventListener('click', () => {
    let bColor = backgroundEffect();
    document.body.style.backgroundColor = bColor;
});