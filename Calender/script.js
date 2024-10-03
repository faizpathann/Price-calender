const prices = {
    1: 1000,
    2: 1200,
    3: 1500,
    4: 1900,
    5: 2000,
    6: 2200,
    7: 2500,
    8: 2700,
    9: 3000,
    10: 3200,
    11: 3500,
    12: 4000,
    13: 4200,
    14: 4500,
    15: 4800,
    16: 5000,
    17: 5500,
    18: 5800,
    19: 6000,
    20: 7500,
    21: 8500,
    22: 9000,
    23: 9500,
    24: 10000,
    25: 15000,
    26: 20000,
    27: 25000,
    28: 35000,
    29: 45000,
    30: "END",
    
  };
  
  const datesContainer = document.getElementById('dates');
  const monthName = document.getElementById('month-name');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let currentMonth = 9;  
  let currentYear = 2024;
  
  function createCalendar() {
    datesContainer.innerHTML = '';
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    for (let day = 1; day <= daysInMonth; day++) {
      const dateDiv = document.createElement('div');
      dateDiv.classList.add('date');
      dateDiv.innerHTML = `<span>${day}</span>`;

      const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
      if (dayOfWeek === 0) {   
        dateDiv.classList.add('sunday');  
      }
  
      if (prices[day]) {
        const priceSpan = document.createElement('span');
        priceSpan.classList.add('price');
        priceSpan.innerText = `₹${prices[day]}`;
        dateDiv.appendChild(priceSpan);
      }
  
      datesContainer.appendChild(dateDiv);
    }
  
    monthName.innerText = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
  }
  
  prevButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    createCalendar();
  });
  
  nextButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    createCalendar();
  });
  
  createCalendar();
  