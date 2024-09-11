// 1. Select the heading by its id and change its text content
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = "Updated: Welcome to the DOM Selector Practice";

// 2. Select all paragraphs with the class 'text-content' and change their color to blue
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}

// 3. Select the image with the id 'main-image' and change its source
const mainImage = document.getElementById('main-image');
mainImage.src = 'https://via.placeholder.com/200';

// 4. Select the container div by its class name and change its background color
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0';

// 5. Select all paragraphs inside the container div and change their text content
const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Updated text inside the container div';
});
