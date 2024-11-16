const createHomepage = () => {
    const contentDiv = document.getElementById('content');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Bistro Bliss!';
  
    const image = document.createElement('img');
    image.src = 'https://picsum.photos/200/300';
    image.alt = 'Restaurant photo';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'At Bistro Bliss, we are passionate about serving up delicious, farm-to-table cuisine in a cozy and inviting atmosphere. Our chefs use only the freshest ingredients to craft dishes that are both flavorful and visually stunning. Come visit us today and taste the difference for yourself!';
  
    contentDiv.appendChild(headline);
    contentDiv.appendChild(image);
    contentDiv.appendChild(paragraph);
};

export default createHomepage;
