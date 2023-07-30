const categorySelect = document.getElementById('category');
const productSelect = document.getElementById('product');
const Hello = document.getElementById('order-button');
const confirmationMessage = document.getElementById('confirmation-message');
const products = {
  beverages: ['Mango Shakes', 'Juices','Lassi','Cold drink'],
  Fast_food: ['Momos', 'Spring Roll' ,'Burgur' , 'Chaowmin'],
  Lunch: ['Full Talli','Chole Bhatura' , 'Aalo Paratha']
};

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  updateProductOptions(selectedCategory);
});

function updateProductOptions(category) {
  productSelect.innerHTML = '<option value="">Select a product</option>';

  if (category) {
    const categoryProducts = products[category];

    categoryProducts.forEach(product => {
      const option = document.createElement('option');
      option.value = product;
      option.textContent = product;
      productSelect.appendChild(option);
    });
  }
}

emailjs.init('VyiJZs9CtwAil8hJg'); 

Hello.addEventListener('click', (p) => {
  p.preventDefault();

  const category = document.getElementById('category').value;
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;

  const templateParams = {
    category: category,
    product: product,
    quantity: quantity
  };

  emailjs.send('service_vbbv0sc', 'template_5vkt0eo', templateParams)
    .then(() => {
      confirmationMessage.textContent = 'Order is confirmed!';
      form.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('An error occurred while placing the order. Please try again later.');
    });
});
