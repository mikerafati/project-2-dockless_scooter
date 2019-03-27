// data.sort(function(a,b){
//         return parseFloat(b.weather_description) - parseFloat(a.weather_description);
//     });
    
//     data = data.slice();
    
//     data = data.reverse();
//     var trace1 = {
//         x: data.map(row => row.weather_description),
//         // x: data.map(row => row.rides_hr),
//         y: data.map(row => row.total_rides),
//         text: data.map(row => row.total_rides),
//         name: "scooter",
//         type: "liner",
//         orientation: "h"
//       };
//     var data = [trace1];
//     var layout = {
//         title: "Rides VS weather description",
//         xaxis:{ title:"weather_description"},
//         yaxis: {title: "Total Rides per hour"},
//         margin: {
//           l: 100,
//           r: 100,
//           t: 100,
//           b: 100
//         }
//       };
//       Plotly.newPlot("plot", data, layout);

// ...............................................................

var data_desc = [{"weather_description":"Clear","total_rides":152335,"hour":1296,"rides_hr":117.5424382716},{"weather_description":"Cloudy","total_rides":263411,"hour":608,"rides_hr":433.2417763158},{"weather_description":"Fog","total_rides":15284,"hour":78,"rides_hr":195.9487179487},{"weather_description":"Heavy rain","total_rides":721,"hour":15,"rides_hr":48.0666666667},{"weather_description":"Light drizzle","total_rides":154773,"hour":249,"rides_hr":621.578313253},{"weather_description":"Light rain","total_rides":28283,"hour":75,"rides_hr":377.1066666667},{"weather_description":"Light rain shower","total_rides":139790,"hour":306,"rides_hr":456.8300653595},{"weather_description":"Mist","total_rides":39469,"hour":282,"rides_hr":139.9609929078},{"weather_description":"Moderate or heavy rain shower","total_rides":58189,"hour":162,"rides_hr":359.1913580247},{"weather_description":"Moderate or heavy rain with thunder","total_rides":1022,"hour":6,"rides_hr":170.3333333333},{"weather_description":"Moderate rain","total_rides":24750,"hour":51,"rides_hr":485.2941176471},{"weather_description":"Moderate rain at times","total_rides":14576,"hour":12,"rides_hr":1214.6666666667},{"weather_description":"Overcast","total_rides":296094,"hour":591,"rides_hr":501.0050761421},{"weather_description":"Partly cloudy","total_rides":1212136,"hour":2281,"rides_hr":531.405523893},{"weather_description":"Patchy light drizzle","total_rides":9151,"hour":21,"rides_hr":435.7619047619},{"weather_description":"Patchy light rain","total_rides":396,"hour":3,"rides_hr":132.0},{"weather_description":"Patchy light rain with thunder","total_rides":23364,"hour":39,"rides_hr":599.0769230769},{"weather_description":"Patchy rain possible","total_rides":357295,"hour":639,"rides_hr":559.1471048513},{"weather_description":"Sunny","total_rides":742278,"hour":1491,"rides_hr":497.8390342052},{"weather_description":"Thundery outbreaks possible","total_rides":28710,"hour":117,"rides_hr":245.3846153846},{"weather_description":"Torrential rain shower","total_rides":17341,"hour":51,"rides_hr":340.0196078431}]


      data_desc.sort(function(a,b){
        return parseFloat(b.weather_description) - parseFloat(a.weather_description);
    });
    
    data_desc = data_desc.slice();
    
    data_desc = data_desc.reverse();
    var trace1 = {
        x: data_desc.map(row => row.weather_description),
        y: data_desc.map(row => row.total_rides),
        text: data_desc.map(row => row.hour),
        name: "weather description",
        type: "line",
        orientation: "h"
      };
    var data_desc = [trace1];
    var layout = {
        title: "Rides VS weather description",
        xaxis:{ title:"Weather_Description"},
        
        yaxis: {title: "Total Rides"},
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
      Plotly.newPlot("plot3", data_desc, layout);      