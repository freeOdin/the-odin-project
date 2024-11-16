const createMenu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
  
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu';
  
    const menuList = document.createElement('ul');
    menuList.innerHTML = `
      <li>Item 1: $10</li>
      <li>Item 2: $12</li>
      <li>Item 3: $15</li>
    `;
  
    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuList);
  
    return menuDiv;
  };
  
  export default createMenu;