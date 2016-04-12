
$(document).ready(function(){


var cities = ["Austin", "Los Angeles", "New York City", "San Francisco", "Sydney"];
for (var i = 0; i < cities.length; i++){
 $("#city-type").append("<option>" + cities[i] + "</option>");   
}


$("select").change(changeCity);

function changeCity(event) {
	event.preventDefault();


    var cityName = $("#city-type").val();
    cityName = cityName.toLowerCase()

        if (cityName == 'new york city') {
            $("body").attr("class", "nyc");

        }


        else if (cityName == 'san francisco') {
            $("body").attr("class", "sf");

        }


        else if (cityName == 'los angeles') {
            $("body").attr("class", "la");

        }

        else if (cityName == 'austin') {
            $("body").attr("class", "austin");

        }

        else if (cityName == 'sydney') {
            $("body").attr("class", "sydney");

        }

}

});
