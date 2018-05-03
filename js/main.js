$(document).ready(function(){
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.enabled = false;
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: ["money1", "money2"],
            datasets: [
                {
                    label: "avg orders this week",
                    backgroundColor: ["#889aaa", "#687787"],
                    data: [10,30]
                }
            ]
        },
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }   
            }
        }
    });

    new Chart(document.getElementById("doughnut-chart-2"), {
        type: 'doughnut',
        data: {
            labels: ["money1", "money2"],
            datasets: [
                {
                    label: "avg orders this week",
                    backgroundColor: ["#889aaa", "#687787"],
                    data: [30,10]
                }
            ]
        },
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }   
            }
        }
    });
});


$( "#hamburger" ).click(function() {
    $( "#left-nav" ).toggle();
    $( "#hamburger-icon" ).toggleClass( "mdi-menu mdi-close" );
  });