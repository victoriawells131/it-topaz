function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        var fromvalue = document.getElementById("FromValue").value;

        var fromunit;
        if (document.getElementById("cm").checked) {
            fromunit = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            fromunit = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            fromunit = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            fromunit = document.getElementById("in").value;
        }
        if (document.getElementById("yd").checked) {
            fromunit = document.getElementById("yd").value;
        }
        if (document.getElementById("ft").checked) {
            fromunit = document.getElementById("ft").value;
        }
        if (document.getElementById("mi").checked) {
            fromunit = document.getElementById("mi").value;
        }

        var tounit;
        if (document.getElementById("centimeters").checked) {
            tounit =  document.getElementById("centimeters").value;
        }
        if (document.getElementById("meters").checked) {
            tounit =  document.getElementById("meters").value;
        }
        if (document.getElementById("kilometers").checked) {
            tounit =  document.getElementById("kilometers").value;
        }
        if (document.getElementById("inches").checked) {
            tounit =  document.getElementById("inches").value;
        }
        if (document.getElementById("yards").checked) {
            tounit =  document.getElementById("yards").value;
        }
        if (document.getElementById("feet").checked) {
            fromunit = document.getElementById("feet").value;
        }
        if (document.getElementById("miles").checked) {
            tounit =  document.getElementById("miles").value;
        }

        CalculateResult(fromvalue, fromunit, tounit);
    }
}

    async function CalculateResult(fromvalue, fromunit, tounit) {
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromUnit=" + encodeURIComponent(fromunit) + "&ToUnit=" + encodeURIComponent(tounit);

        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();

        document.getElementById("Result").innerHTML = myResult;
    }
    function clearform() {
        "use strict";
        
        /* Set all of the form values to blank or false */
        document.getElementById("FromValue").value = "";
        document.getElementById("cm").checked = false;
        document.getElementById("m").checked = false;
        document.getElementById("km").checked = false;
        document.getElementById("in").checked = false;
        document.getElementById("ft").checked = false;
        document.getElementById("yd").checked = false;
        document.getElementById("mi").checked = false;
        document.getElementById("centimeters").checked = false;
        document.getElementById("meters").checked = false;
        document.getElementById("kilometers").checked = false;
        document.getElementById("inches").checked = false;
        document.getElementById("feet").checked = false;
        document.getElementById("yards").checked = false;
        document.getElementById("miles").checked = false;
        document.getElementById("Result").innerHTML = "";
    }
    
    $( "#myform" ).validate({
    
    });