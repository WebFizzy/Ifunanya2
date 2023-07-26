const chart = document.querySelector('#chart').getContext('2d')

// create a new chart instance

new Chart(chart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

    datasets: [
      {
      label: 'BTC',
      data: [2345, 4856, 4956, 4956, 4958, 3292, 4202, 5098, 4056, 49586, 5965],
      borderColor: 'red',
      borderWidth: 2
    },
    {
      label: 'ETH',
      data: [2345, 4856, 4956, 4956, 4958, 3292, 4202, 5098, 4056, 49586, 5965],
      borderColor: 'blue',
      borderWidth: 2
    }
  ]
  },
  options: {
    responsive: true
  }
})

// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const sideBar = document.querySelector('aside')

menuBtn.addEventListener('click', () => {
  sideBar.style.display ='block'
})

closeBtn.addEventListener('click', () => {
  sideBar.style.display ='none'
})

// change theme 
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

  themeBtn.querySelector('span:first-child').classList.toggle('active');
  
  themeBtn.querySelector('span:last-child').classList.toggle('active');
})
