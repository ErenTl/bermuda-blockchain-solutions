var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
    labels: [
        'Avax',
        'Solana',
        'Ethereum'
    ],
    datasets: [
        {
        label: "work load",
        data: [60,120,180],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ]
        }
    ],
    },
});