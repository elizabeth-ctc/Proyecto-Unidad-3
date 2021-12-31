
ScrollReveal().reveal('.container');
ScrollReveal().reveal('.button', { delay: 300});
ScrollReveal().reveal('.btn', { delay: 300});
ScrollReveal().reveal('.btn-medallas', { delay: 300});

ScrollReveal().reveal('#main-container');
ScrollReveal().reveal('table', { delay: 500});
ScrollReveal().reveal('th, td', { delay: 500});
ScrollReveal().reveal('thead', { delay: 500});

const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['AR', 'BR', 'CO', 'CU', 'US','CA', 'RU', 'GB', 'DE', 'RO', 'FR', 'IT', 'ES', 'NE', 'FI', 'TH', 'KE', 'ET', 'AU', 'NZ', 'JP'],
            datasets: [{
                label: 'Total medallas de oro',
                data: [21, 1, 3, 5, 139, 4, 52, 64, 15, 4, 20, 8, 9, 9, 13, 2, 6, 1, 23, 6, 17],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
 
