document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const amount = document.getElementById('amount').value;
  
    // Redirect to success.html with query parameters
    window.location.href = `success.html?name=${name}&phone=${phone}&address=${address}&amount=${amount}`;
  });
  
  
  
  