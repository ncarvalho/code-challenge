$( "#hamburger" ).click(function() {
    console.log("clicked...");
    $( "#left-nav" ).toggle();
    $( "#hamburger-icon" ).toggleClass( "mdi-menu mdi-close" );
  });

  var donutEl = document.getElementById("donut").getContext("2d");
  var donut = new Chart(donutEl, {
      type: 'doughnut',
      data : [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ],
    // Options
    options: {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 50,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        animateScale: true
    }
});