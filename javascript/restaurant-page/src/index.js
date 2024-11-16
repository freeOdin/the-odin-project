import createHomepage from './homepage';
import createMenu from './menu';
import createContact from './contact';

const contentDiv = document.getElementById('content');

const buttons = document.querySelectorAll('header nav button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const tabName = event.target.textContent.toLowerCase();

    contentDiv.innerHTML = '';

    switch (tabName) {
      case 'home':
        createHomepage();
        break;
      case 'menu':
        const menuDiv = createMenu();
        contentDiv.appendChild(menuDiv);
        break;
      case 'contact':
        const contactDiv = createContact();
        contentDiv.appendChild(contactDiv);
        break;
      default:
        console.error(`Unknown tab: ${tabName}`);
    }
  });
});

createHomepage();