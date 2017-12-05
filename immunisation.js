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
var i1 = {
    "columns": [
        {
          "dimension": "dx",
          "items": [
            {
              "id": "eNRPnB88JPl",
              "name": "Fully immunised Total "
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
              "id":yr
            }
          ]
        }
      ],
      "title": "Fully Immunised Total",
      "type": "pie",
      "percentStackedValues": false,
      "cumulativeValues": false,
      "hideEmptyRowItems": "NONE",
      "showAsEpiCurve": false,
      "hideSubtitle": false,
      "subtitle": null,
      "el": "i1"
};

var i2 = {
    "columns": [
        {
          "dimension": "dx",
          "items": [
            {
              "id": "RfqHJwkzFd1",
              "name": "RBF- checked Children below 1 year fully immunised "
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
              "id": "2016",
              "name": "2016"
            }
          ]
        }
      ],
      "title": "RBF - Checked Children Below 1 Year Fully Immunised",
      "type": "stackedbar",
      "percentStackedValues": false,
      "cumulativeValues": false,
      "hideEmptyRowItems": "NONE",
      "showAsEpiCurve": false,
      "hideSubtitle": false,
      "subtitle": null,
      "el": "i2"

};

var i3 = {

	
}

//Not Visual Yet.
var i4 = {

}

var i5 = {

}


//Return all charts created.
return [i1, i2, i3];
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