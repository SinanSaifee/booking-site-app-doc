window.onload = function() {
    const rows = document.querySelectorAll('.hero-row'); // Select all hero rows
  
    // Function to add the 'active' class to rows with a delay
    rows.forEach((row, index) => {
      setTimeout(() => {
        row.classList.add('active'); // Trigger the animation by adding 'active'
      }, index * 160); // Delay each row by 500ms
    });

    // Function to apply scaling to each layer sequentially
    document.querySelector('.hero-img').style.transform = 'scale(1)';
  };
  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links ul').style.right = '0';
    document.querySelector('.menu-backdrop').style.display = 'block';

  });

 document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.nav-links ul').style.right = '-100%';
    document.querySelector('.menu-backdrop').style.display = 'none';
  });
  document.querySelector('.menu-backdrop').addEventListener('click', function() {
    document.querySelector('.nav-links ul').style.right = '-100%';
    document.querySelector('.menu-backdrop').style.display = 'none';

  });