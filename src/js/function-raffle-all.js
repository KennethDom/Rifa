const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let interval;

function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${600 * index}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval); 
    goToSlide(Number(dot.dataset.index));
    startAutoSlide();
  });
});

function startAutoSlide() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    goToSlide(currentIndex);
  }, 5000);
}

startAutoSlide();

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
};

const buttons = document.querySelectorAll('.ticket-grid button');

// Se hizo de esta forma para poder tener ids separados y poder administrarlos mejor(se que no es la mejor forma) -->
// Si queremos desactivar los botones nadamas cambiemos el estado de "true" a "false"
const tickets = [
  { id: 0, available: true },
  { id: 1, available: true },
  { id: 2, available: true },
  { id: 3, available: true },
  { id: 4, available: true },
  { id: 5, available: true },
  { id: 6, available: true },
  { id: 7, available: true },
  { id: 8, available: true },
  { id: 9, available: true },
  { id: 10, available: true },
  { id: 11, available: true },
  { id: 12, available: true },
  { id: 13, available: true },
  { id: 14, available: true },
  { id: 15, available: true },
  { id: 16, available: true },
  { id: 17, available: true },
  { id: 18, available: true },
  { id: 19, available: true },
  { id: 20, available: true },
  { id: 21, available: true },
  { id: 22, available: true },
  { id: 23, available: true },
  { id: 24, available: true },
  { id: 25, available: true },
  { id: 26, available: true },
  { id: 27, available: true },
  { id: 28, available: true },
  { id: 29, available: true },
  { id: 30, available: true },
  { id: 31, available: true },
  { id: 32, available: true },
  { id: 33, available: true },
  { id: 34, available: true },
  { id: 35, available: true },
  { id: 36, available: true },
  { id: 37, available: true },
  { id: 38, available: true },
  { id: 39, available: true },
  { id: 40, available: true },
  { id: 41, available: true },
  { id: 42, available: true },
  { id: 43, available: true },
  { id: 44, available: true },
  { id: 45, available: true },
  { id: 46, available: true },
  { id: 47, available: true },
  { id: 48, available: true },
  { id: 49, available: true },
  { id: 50, available: true },
  { id: 51, available: true },
  { id: 52, available: true },
  { id: 53, available: true },
  { id: 54, available: true },
  { id: 55, available: true },
  { id: 56, available: true },
  { id: 57, available: true },
  { id: 58, available: true },
  { id: 59, available: true },
  { id: 60, available: true },
  { id: 61, available: true },
  { id: 62, available: true },
  { id: 63, available: true },
  { id: 64, available: true },
  { id: 65, available: true },
  { id: 66, available: true },
  { id: 67, available: true },
  { id: 68, available: true },
  { id: 69, available: true },
  { id: 70, available: true },
  { id: 71, available: true },
  { id: 72, available: true },
  { id: 73, available: true },
  { id: 74, available: true },
  { id: 75, available: true },
  { id: 76, available: true },
  { id: 77, available: true },
  { id: 78, available: true },
  { id: 79, available: true },
  { id: 80, available: true },
  { id: 81, available: true },
  { id: 82, available: true },
  { id: 83, available: true },
  { id: 84, available: true },
  { id: 85, available: true },
  { id: 86, available: true },
  { id: 87, available: true },
  { id: 88, available: true },
  { id: 89, available: true },
  { id: 90, available: true },
  { id: 91, available: true },
  { id: 92, available: true },
  { id: 93, available: true },
  { id: 94, available: true },
  { id: 95, available: true },
  { id: 96, available: true },
  { id: 97, available: true },
  { id: 98, available: true },
  { id: 99, available: true },
];

function updateTicketStatus() {
  buttons.forEach((button, index) => {
    const ticket = tickets[index];
    if (ticket.available) {
      button.classList.add('available');
      button.classList.remove('unavailable');
    } else {
      button.classList.add('unavailable');
      button.classList.remove('available');
    }
  });
}
updateTicketStatus();


const selectedList = document.querySelector('.selected-tickets ul');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const ticket = tickets[index];

    if (ticket.available) {
      ticket.available = false;  
      const listItem = document.createElement('li');
      listItem.textContent = `Boleto: ${ticket.id} `;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'X';
      removeBtn.style.marginLeft = '10px';
      removeBtn.addEventListener('click', () => {
        selectedList.removeChild(listItem);
        ticket.available = true;

        if (selectedList.children.length === 0) {
          document.getElementById('confirm-btn').style.display = 'none';
        }
      
      });

      listItem.appendChild(removeBtn);
      selectedList.appendChild(listItem);
      
      if (selectedList.children.length > 0) {
        mostrarConfirmar();  
      }
    }
  });
});

function mostrarConfirmar() {
  document.getElementById('confirm-btn').style.display = 'inline-block';
}
