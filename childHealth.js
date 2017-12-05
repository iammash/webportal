//DHIS2 plugin code starts here
var url = 'http://localhost:8080/demo';
var username = 'rkaponde';
var password ='Mashekwa1!';
chartPlugin.url = url;
chartPlugin.username = username ;
chartPlugin.password = password ;
chartPlugin.loadingIndicator = true;
crossDomain: true;

function getchart(yr, ou, level){
var ch1 = {
"columns": [
    {
      "dimension": "dx",
      "items": [
        {
          "id": "BuEuWl0eLvq",
          "name": "Measles coverage under 1 year"
        },
        {
          "id": "JO8Fhdbupwy",
          "name": "Fully Immunised coverage under 1 year"
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "ou",
      "items": [
        {
          "id": level
        },
        {
          "id": ou
        }
      ]
    }
  ],
  "filters": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": yr
        }
      ]
    }
  ],
  "title": "Measles Coverage vs Fully Immunized Coverage For Children Under 1 year",
  "type": "column",
  "percentStackedValues": false,
  "cumulativeValues": false,
  "hideEmptyRowItems": "NONE",
  "showAsEpiCurve": false,
  "hideSubtitle": false,
  "subtitle": null,
  "el": "ch1"
};

var ch2 = {
"columns": [
    {
      "dimension": "dx",
      "items": [
        {
          "id": "tyesP5ewNwx",
          "name": "Vitamin A coverage under 5 years "
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "ou",
      "items": [
        {
          "id": level
        },
        {
          "id": ou
        }
      ]
    }
  ],
  "filters": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": yr
        }
      ]
    }
  ],
  "title": "Vitamin A Coverage Under 5 Years",
  //"type": "column",
  "type": "pie",
  "percentStackedValues": false,
  "cumulativeValues": false,
  "hideEmptyRowItems": "NONE",
  "showAsEpiCurve": false,
  "hideSubtitle": false,
  "subtitle": null,
  "el": "ch2"	
};

var ch3 = {
"columns": [
    {
      "dimension": "dx",
      "items": [
        {
          "id": "JfY9vBHsyzF",
          "name": "Vitamin A supplement to 12-59 months child"
        },
        {
          "id": "DSbbltBORY3",
          "name": "Vitamin A supplement to 6-11 months infant"
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "ou",
      "items": [
        {
          "id": level
        },
        {
          "id": ou
        }
      ]
    }
  ],
  "filters": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": yr
        }
      ]
    }
  ],
  "title": "Vitamin A supplement",
  "type": "column",
  "percentStackedValues": false,
  "cumulativeValues": false,
  "hideEmptyRowItems": "NONE",
  "showAsEpiCurve": false,
  "hideSubtitle": false,
  "subtitle": null,
  "el": "ch3"
	
}

//Not Visual Yet.
var ch4 = {
  "columns": [
    {
      "dimension": "dx",
      "items": [
        {
          "id": "G4vWZAJ0uz7",
          "name": "Children who received insecticide-treated nets (ITNs)"
        },
        {
          "id": "qpR4fWPKqmi",
          "name": "ITN provided to pregnant woman at ANC visit"
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "ou",
      "items": [
        {
          "id": level
        },
        {
          "id": ou
        }
      ]
    }
  ],
  "filters": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": yr
        }
      ]
    }
  ],
  "title": "X",
  "type": "column",
  "percentStackedValues": false,
  "cumulativeValues": false,
  "hideEmptyRowItems": "NONE",
  "showAsEpiCurve": false,
  "hideSubtitle": false,
  "subtitle": null,
  "el": "ch4"
}

var ch5 = {
  "columns": [
    {
      "dimension": "dx",
      "items": [
        {
          "id": "B8nBT4kGhtB",
          "name": "De-worming dose to child 12-59 months"
        },
        {
          "id": "JfY9vBHsyzF",
          "name": "Vitamin A supplement to 12-59 months child"
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "ou",
      "items": [
        {
          "id": "LEVEL-2",
          "name": "LEVEL-2"
        },
        {
          "id": "Ot1P2HjvtvL",
          "name": "Ot1P2HjvtvL"
        }
      ]
    }
  ],
  "filters": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": "2017",
          "name": "2017"
        }
      ]
    }
  ],
  "title": "De-worming dose to children 12-59 months & Vitamin A supplement to 12-59 months in the last 12 month",
  "type": "column",
  "percentStackedValues": false,
  "cumulativeValues": false,
  "hideEmptyRowItems": "NONE",
  "showAsEpiCurve": false,
  "hideSubtitle": false,
  "subtitle": null,
  "el": "ch5"
}


//Return all charts created.
return [ch1, ch2, ch3];
}

chartPlugin.load(getchart("2016","Ot1P2HjvtvL", "LEVEL-2"));
//chart ends here

//on change function here
function updatevariable() { 
		yr = document.getElementById('year').value;
		oulevel = document.getElementById('org_u').value;
        split = oulevel.split(",");
        ou = split[0];
        level = split[1];				
	    	chartPlugin.load(getchart(yr, ou, level));
};