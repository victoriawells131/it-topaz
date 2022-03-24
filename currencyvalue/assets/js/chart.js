var ctx = document.getElementById("chartjs-0");

var myChart = new Chart(ctx, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{
            "data": values,
            fill: false
        }]
    },
    "options":{ 
        responsive: false,
        maintainAspectRatio: true,
    }
})
var form = $("#myform");
form.validate();
if (form.valid()) {
    var apiKey = "lXvmWzeEVTRT_vhoH_AaN2HpZqaYh6R5"
    var FromDate = document.getElementById("FromDate").value;
    var ToDate = document.getElementById("ToDate").value;
    
    var myURL1 = "https://api.polygon.io/v1/meta/symbols/"