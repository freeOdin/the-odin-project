const createContact = () => {
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';
  
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Get in Touch';
  
    const contactForm = document.createElement('form');
    contactForm.innerHTML = `
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea><br><br>
      <input type="submit" value="Send">
    `;
  
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
      <p>Phone: 555-555-5555</p>
      <p>Email: [info@example.com](mailto:info@example.com)</p>
      <p>Address: 123 Main St, Anytown, USA</p>
    `;
  
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactForm);
    contactDiv.appendChild(contactInfo);
  
    return contactDiv;
  };
  
  export default createContact;