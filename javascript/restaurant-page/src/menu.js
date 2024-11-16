const createMenu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
  
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu';
  
    const menuList = document.createElement('ul');
  
    const menuItems = [
      { name: 'Burger', description: 'Our signature burger with fresh beef, lettuce, tomato, and our special sauce', price: 12, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150' },
      { name: 'Salad', description: 'Fresh mixed greens with your choice of toppings', price: 10, image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150' },
      { name: 'Pizza', description: 'Our classic margherita pizza with fresh basil and mozzarella', price: 15, image: 'https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150' },
      { name: 'Fries', description: 'Crispy french fries with your choice of dipping sauce', price: 5, image: 'https://images.pexels.com/photos/1117682/pexels-photo-1117682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150' },
      { name: 'Soup', description: 'Our daily soup special', price: 8, image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150' },
      { name: 'Dessert', description: 'Our famous chocolate cake', price: 7, image: 'https://images.pexels.com/photos/1432887/pexels-photo-1432887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150' },
    ];
  
    menuItems.forEach((item) => {
      const menuItem = document.createElement('li');
      const menuItemHeader = document.createElement('h3');
      const menuItemDescription = document.createElement('p');
      const menuItemPrice = document.createElement('p');
      const menuItemImage = document.createElement('img');
  
      menuItemHeader.textContent = item.name;
      menuItemDescription.textContent = item.description;
      menuItemPrice.textContent = `Price: $${item.price}`;
      menuItemImage.src = item.image;
      menuItemImage.alt = item.name;
  
      menuItem.appendChild(menuItemImage);
      menuItem.appendChild(menuItemHeader);
      menuItem.appendChild(menuItemDescription);
      menuItem.appendChild(menuItemPrice);
  
      menuList.appendChild(menuItem);
    });
  
    const menuImage = document.createElement('img');
    menuImage.src = 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300';
    menuImage.alt = 'Menu photo';
  
    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuImage);
    menuDiv.appendChild(menuList);
  
    return menuDiv;
  };
  
  export default createMenu;