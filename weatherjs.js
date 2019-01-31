 $(document).ready(function () {


     // url of where we get the data from. forecast request
     var url = 'https://api.forecast.io/forecast/79604e4ee69c37aaa38d207ff18fea3c/40.014984,-105.270546'

     //call the API for Boulder
     $.ajax({
         url: url,
         dataType: "jsonp"
     }).then(function (data) {

         console.log(data) //print all data to the console

         //Boulder!
         //for the daily weather
         var skycons = new Skycons({
             "color": "lightblue"
         });
         skycons.add("icon2", data.hourly.icon);
         skycons.play();
         $('#daily_summary').text(data.hourly.summary);

         // for the current weather
         var skycons = new Skycons({
             "color": "white"
         });
         skycons.add("icon1", data.currently.icon);
         skycons.play();

         $('#results').html(data.currently.temperature + "&#8457");
         $('#feelsLike').html("Feels like " + data.currently.apparentTemperature + "&#8457");
         $('#summary').text(data.currently.summary);

         $('#boulder_button').on('click', function () {
             $("#boulder_button").hide();
             $("#boulder_button2").show();
         });

         $('#boulder_button2').on('click', function () {
             $("#boulder_button2").hide();
             $("#boulder_button").show();
         });

     })

     //call API for Denver
     var denverurl = 'https://api.forecast.io/forecast/79604e4ee69c37aaa38d207ff18fea3c/39.7392,-104.9903'

     $.ajax({
         url: denverurl,
         dataType: "jsonp"
     }).then(function (data) {

         //for the daily weather
         var skycons = new Skycons({
             "color": "lightblue"
         });
         skycons.add("icon3", data.hourly.icon);
         skycons.play();
         $('#den_daily').text(data.hourly.summary);

         // for the current weather
         var skycons = new Skycons({
             "color": "white"
         });
         skycons.add("den_icon2", data.currently.icon);
         skycons.play();

         $('#den_results').html(data.currently.temperature + "&#8457");
         $('#den_feelsLike').html("Feels like " + data.currently.apparentTemperature + "&#8457");
         $('#den_summary').text(data.currently.summary);

         $('#denver_button').on('click', function () {
             $("#denver_button").hide();
             $("#denver_button2").show();
         });

         $('#denver_button2').on('click', function () {
             $("#denver_button2").hide();
             $("#denver_button").show();
         });

     })

     //call API for Ontario
     var onturl = 'https://api.forecast.io/forecast/79604e4ee69c37aaa38d207ff18fea3c/34.0633,-117.6509'

     $.ajax({
         url: onturl,
         dataType: "jsonp"
     }).then(function (data) {

         //for the daily weather
         var skycons = new Skycons({
             "color": "lightblue"
         });
         skycons.add("icon4", data.hourly.icon);
         skycons.play();
         $('#ont_daily').text(data.hourly.summary);

         // for the current weather
         var skycons = new Skycons({
             "color": "white"
         });
         skycons.add("ont_icon2", data.currently.icon);
         skycons.play();

         $('#ont_results').html(data.currently.temperature + "&#8457");
         $('#ont_feelsLike').html("Feels like " + data.currently.apparentTemperature + "&#8457");
         $('#ont_summary').text(data.currently.summary);

         $('#ont_button').on('click', function () {
             $("#ont_button").hide();
             $("#ont_button2").show();
         });

         $('#ont_button2').on('click', function () {
             $("#ont_button2").hide();
             $("#ont_button").show();
         });
     })

     //call API for ABQ
     var abqurl = 'https://api.forecast.io/forecast/79604e4ee69c37aaa38d207ff18fea3c/35.0844,-106.6504'

     $.ajax({
         url: abqurl,
         dataType: "jsonp"
     }).then(function (data) {

         //for the daily weather
         var skycons = new Skycons({
             "color": "lightblue"
         });
         skycons.add("icon5", data.hourly.icon);
         skycons.play();
         $('#abq_daily').text(data.hourly.summary);
         
          // for the current weather
         var skycons = new Skycons({
             "color": "white"
         });
         skycons.add("abq_icon2", data.currently.icon);
         skycons.play();

         $('#abq_results').html(data.currently.temperature + "&#8457");
         $('#abq_feelsLike').html("Feels like " + data.currently.apparentTemperature + "&#8457");
         $('#abq_summary').text(data.currently.summary);

         $('#abq_button').on('click', function () {
             $("#abq_button").hide();
             $("#abq_button2").show();
         });

         $('#abq_button2').on('click', function () {
             $("#abq_button2").hide();
             $("#abq_button").show();
         });

     })

     
     

 })
