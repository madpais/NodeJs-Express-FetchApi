fetch('http://localhost:3000')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));


  fetch('http://localhost:3000/oi')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));