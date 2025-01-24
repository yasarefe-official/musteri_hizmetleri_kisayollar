document.addEventListener('DOMContentLoaded', () => {
  // Numaraları tıklanabilir yapma
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number => {
    const tel = number.textContent.replace(/\s/g, '');
    number.innerHTML = `<a href="tel:${tel}">${number.textContent}</a>`;
  });

  // Kartları arama fonksiyonu eklenebilir
  const searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = 'Aramak istediğiniz firmayı yazın...';
  searchBox.classList.add('search-box');
  document.querySelector('.container').insertBefore(searchBox, document.querySelector('.category'));

  searchBox.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(searchText)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Stil eklemeleri
const style = document.createElement('style');
style.textContent = `
  .search-box {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    font-size: 1rem;
  }

  .number a {
    color: inherit;
    text-decoration: none;
  }

  .number a:hover {
    color: var(--primary-color);
  }
`;
document.head.appendChild(style);