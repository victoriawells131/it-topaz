
async function GetCurrency() {
    "use strict";
}

var form = $("#myform");
form.validate();
if (form.valid()) {
    var BaseCurrency = document.getElementById("BaseCurrency").value;
    var ConvertCurrency = document.getElementById("ConvertCurrency").value;
    var apiKey = "lXvmWzeEVTRT_vhoH_AaN2HpZqaYh6R5"
    var FromDate = document.getElementById("FromDate").value;
    var ToDate = document.getElementById("ToDate").value;
    
    var myURL1 = "https://api.polygon.io/v1/meta/symbols/" + BaseCurrency + ConvertCurrency + "/range/1/day/"
    + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
    /* Make the AJAX call */
    var msg1Object = await fetch(myURL1);
    /* Check the status */
    if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
        var msg1JSONText = await msg1Object.text();
        // Parse the JSON string into an object
        var msg1 = JSON.parse(msg1JSONText);
        /* Your code to process the result goes here - 
           display the returned message */
           var currencydate = [];
           var currencyvalue = [];
           var numdays = msg1.results.length;
           if (numdays > 0) {
               for (var i = 0; i < numdays; i++) {
                   /*currency close value */
                   currencyvalue[i] = msg1.results[i].c;
                   /* date is in Unix milliseconds - create temporary date variable */
                   var tempdate = new Date(msg1.results[i].t);
                   /* extract the date string from the value */
                   currencydate[i] = tempdate.toLocaleDateString();
               }
           }
    }
    else {
        /* AJAX complete with error - probably invalid currency ticker symbol */
            /* Your code to process the result goes here - 
               display the returned message */
        alert("currency Not Found - Status: " + msg1Object.status)
        return;
        }        
            document.getElementById("title").innerHTML = BaseCurrency + " to " + ConvertCurrency;
            var ctx0 = document.getElementById("chartjs-0");
            var myChart = new Chart(ctx0, {
                "type":"line",
                "data": {
                    "labels": currencydate,
                    "datasets":[
                        {
                        "label":"One " + BaseCurrency + " to " + ConvertCurrency,
                        "data": currencyvalue,
                        "fill": false,
                        "borderColor":"rgb(75,192,192)",
                        "lineTension":0.1
                        }
                    ]
                },
                    }
            );
        }
}


function ClearForm() {
document.getElementById("BaseCurrency").value = "";
document.getElementById("ConvertCurrency").value = "";
document.getElementById("FromDate").value = "";
document.getElementById("ToDate").value = "";
document.getElementById("title").value = "";

