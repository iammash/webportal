//DHIS2 plugin code starts here
var url = 'http://localhost:8080/demo';
var username = 'rkaponde';
var password ='Mashekwa1!';
chartPlugin.url = url;
chartPlugin.username = username ;
chartPlugin.password = password ;
chartPlugin.loadingIndicator = true;
crossDomain: true;

reportTablePlugin.url = url;
reportTablePlugin.username = username;
reportTablePlugin.password = password;
reportTablePlugin.loadingIndicator = true;

function getchart(yr, ou, level){
var ch1 = {
"columns": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": "2016Q1",
          "name": "January - March 2016"
        },
        {
          "id": "2016Q2",
          "name": "April - June 2016"
        },
        {
          "id": "2016Q3",
          "name": "July - September 2016"
        },
        {
          "id": "2016Q4",
          "name": "October - December 2016"
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
      "dimension": "dx",
      "items": [
        {
          "id": "g4z3Lw7OhS6",
          "name": "Percentage targeted premises inspected"
        }
      ]
    }
  ],
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
          "id": "qYoU0KJbHc4",
          "name": "Tonnes of refuse collected"
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
  "title": "Tonnes of refuse collected",
  "type": "pie",
  "percentStackedValues": false,
  "cumulativeValues": false,
  "hideEmptyRowItems": "NONE",
  "showAsEpiCurve": false,
  "hideSubtitle": false,
  "subtitle": null,
  "el": "ch2"
};

//Return all charts created.
return [ch1, ch2];
}

chartPlugin.load(getchart("2016","Ot1P2HjvtvL", "LEVEL-2"));
//chart ends here


//Table Starts Here

function gettable(yr, ou, level){
var tb1 = {
    "columns": [
    {
      "dimension": "dx",
      "items": [
        {
          "id": "mQhVLio9VtB",
          "name": "Water sources inspected"
        },
        {
          "id": "cWOR2icq6ty",
          "name": "Water samples taken"
        },
        {
          "id": "vkYasgD65A1",
          "name": "Coverage  of water samples compliant with WHO standards"
        }
      ]
    }
  ],
  "rows": [
    {
      "dimension": "pe",
      "items": [
        {
          "id": "2016",
          "name": "2016"
        }
      ]
    },
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
  "filters": null,
  "showRowTotals": false,
  "showColSubTotals": false,
  "showRowSubTotals": false,
  "legendDisplayStyle": "FILL",
  "legendDisplayStrategy": "FIXED",
  "el": "tb1"
};
return [tb1];
}

reportTablePlugin.load(gettable("2016","Ot1P2HjvtvL", "LEVEL-2"));
//Table Ends Here

//on change function here
function updatevariable() { 
		yr = document.getElementById('year').value;
		oulevel = document.getElementById('org_u').value;
        split = oulevel.split(",");
        ou = split[0];
        level = split[1];				
	    	chartPlugin.load(getchart(yr, ou, level));
};