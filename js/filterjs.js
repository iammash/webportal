function populatepe(p1,p2){
    var p1 = document.getElementById(p1);
    var p2 = document.getElementById(p2);

    p2.innerHTML = "";
    if(p1.value == "yearly"){
        var optionArray = [
            "|",
            "2016|2016",
            "2015|2015",
            "2014|2014"
        ];
    } else if (p1.value == "quarterly"){
        var optionArray = [
            "|",
            "2016Q1|1st Quarter 2016",
            "2016Q2|2nd Quarter 2016",
            "2016Q3|3rd Quarter 2016",
            "2016Q4|4th Quarter 2016",
            "|",
            "2015Q1|1st Quarter 2015",
            "2015Q2|2nd Quarter 2015",
            "2015Q3|3rd Quarter 2015",
            "2015Q4|4th Quarter 2015",
            "|",
            "2014Q1|1st Quarter 2014",
            "2014Q2|2nd Quarter 2014",
            "2014Q3|3rd Quarter 2014",
            "2014Q4|4th Quarter 2014"
        ];
    }
    //Add options to dropdown
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        p2.options.add(newOption);
    }
}