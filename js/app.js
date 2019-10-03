var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
var HOURS = ['0 am', '1 am', '2 am', '3 am', '4  am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '0  pm', '1 pm', '2 pm', '3 pm', '4 pm', '5  pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'];
var color = Chart.helpers.color;

var chartColors = {
    primary: "rgb(14,104,206)",
    info: "rgb(150,104,66)",
    warning: "rgb(238,220,49)",
    danger: "rgb(244,71,71)",
    success: "rgb(127,219,106)"
}

var dailySeles = {
    labels: DAYS,
    datasets: [{
        backgroundColor: color(chartColors.success).alpha(0.5).rgbString(),
        borderColor: chartColors.success,
        borderWidth: 1,
        data: randomData(7, 1, 20),
        fill: false
    }, ]
}

var subcription = {
    labels: MONTHS_SHORT,
    datasets: [{
        backgroundColor: color(chartColors.primary).alpha(0.5).rgbString(),
        borderColor: chartColors.primary,
        borderWidth: 1,
        data: randomData(12, 1, 20),
        fill: false
    }, ]
}
var taks = {
    labels: HOURS,
    datasets: [{
        backgroundColor: color(chartColors.danger).alpha(0.5).rgbString(),
        borderColor: chartColors.danger,
        borderWidth: 1,
        data: randomData(24, 1, 20),
        fill: false
    }, ]
}

window.onload = function() {
    // Chart.defaults.global.defaultFontFamily = `'Barlow', sans-serif`;
    // window.DailySeles = new Chart(
    //     document.getElementById("chart-daily-seles").getContext('2d'), {
    //         type: "line",
    //         data: dailySeles,
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             legend: false
    //         }
    //     }
    // );
    // window.DailySeles = new Chart(
    //     document.getElementById("chart-subcription").getContext('2d'), {
    //         type: "bar",
    //         data: subcription,
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             legend: false
    //         }
    //     }
    // );
    // window.DailySeles = new Chart(
    //     document.getElementById("chart-taks").getContext('2d'), {
    //         type: "line",
    //         data: taks,
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             legend: false
    //         }
    //     }
    // );

    // var map = L.map('map').setView([37.8, -96], 4);
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //     maxZoom: 18,
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    //     id: 'mapbox.light'
    // }).addTo(map);


    // // control that shows state info on hover
    // var info = L.control();

    // info.onAdd = function(map) {
    //     this._div = L.DomUtil.create('div', 'info');
    //     this.update();
    //     return this._div;
    // };

    // info.update = function(props) {
    //     this._div.innerHTML = '<h6>US Population Density</h6>' + (props ?
    //         '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>' :
    //         'Hover over a state');
    // };

    // info.addTo(map);


    // // get color depending on population density value
    // function getColor(d) {
    //     return d > 1000 ? '#800026' :
    //         d > 500 ? '#BD0026' :
    //         d > 200 ? '#E31A1C' :
    //         d > 100 ? '#FC4E2A' :
    //         d > 50 ? '#FD8D3C' :
    //         d > 20 ? '#FEB24C' :
    //         d > 10 ? '#FED976' :
    //         '#FFEDA0';
    // }

    // function style(feature) {
    //     return {
    //         weight: 2,
    //         opacity: 1,
    //         color: 'white',
    //         dashArray: '3',
    //         fillOpacity: 0.7,
    //         fillColor: getColor(feature.properties.density)
    //     };
    // }

    // function highlightFeature(e) {
    //     var layer = e.target;

    //     layer.setStyle({
    //         weight: 5,
    //         color: '#666',
    //         dashArray: '',
    //         fillOpacity: 0.7
    //     });

    //     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //         layer.bringToFront();
    //     }

    //     info.update(layer.feature.properties);
    // }

    // var geojson;

    // function resetHighlight(e) {
    //     geojson.resetStyle(e.target);
    //     info.update();
    // }

    // function zoomToFeature(e) {
    //     map.fitBounds(e.target.getBounds());
    // }

    // function onEachFeature(feature, layer) {
    //     layer.on({
    //         mouseover: highlightFeature,
    //         mouseout: resetHighlight,
    //         click: zoomToFeature
    //     });
    // }

    // geojson = L.geoJson(statesData, {
    //     style: style,
    //     onEachFeature: onEachFeature
    // }).addTo(map);

    // // map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


    // var legend = L.control({ position: 'bottomright' });

    // legend.onAdd = function(map) {

    //     var div = L.DomUtil.create('div', 'info legend'),
    //         grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    //         labels = [],
    //         from, to;

    //     for (var i = 0; i < grades.length; i++) {
    //         from = grades[i];
    //         to = grades[i + 1];

    //         labels.push(
    //             '<i style="background:' + getColor(from + 1) + '"></i> ' +
    //             from + (to ? '&ndash;' + to : '+'));
    //     }

    //     div.innerHTML = labels.join('<br>');
    //     return div;
    // };

    // legend.addTo(map);
    // mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    // var map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     center: [110.36444, -7.80139],
    //     zoom: 9
    // });
    // map.on('load', function() {

    //     map.addLayer({
    //         "id": "route",
    //         "type": "line",
    //         "source": {
    //             "type": "geojson",
    //             "data": {
    //                 "type": "Feature",
    //                 "properties": {},
    //                 "geometry": {
    //                     "type": "LineString",
    //                     "coordinates": [
    //                         [110.355943, -7.621738],
    //                         [110.355724, -7.62196],
    //                         [110.355193, -7.622346],
    //                         [110.355107, -7.62241],
    //                         [110.354786, -7.622575],
    //                         [110.354599, -7.622676],
    //                         [110.35445, -7.622665],
    //                         [110.354349, -7.622627],
    //                         [110.354114, -7.622565],
    //                         [110.353982, -7.622571],
    //                         [110.353763, -7.622635],
    //                         [110.353497, -7.62277],
    //                         [110.353294, -7.622932],
    //                         [110.353138, -7.623042],
    //                         [110.352997, -7.623075],
    //                         [110.352669, -7.623147],
    //                         [110.352216, -7.623327],
    //                         [110.35206, -7.623392],
    //                         [110.351825, -7.623402],
    //                         [110.351466, -7.623373],
    //                         [110.351294, -7.623366],
    //                         [110.351013, -7.623337],
    //                         [110.350833, -7.623328],
    //                         [110.3507, -7.623366],
    //                         [110.350607, -7.623472],
    //                         [110.350357, -7.623721],
    //                         [110.350208, -7.623783],
    //                         [110.349614, -7.624035],
    //                         [110.349263, -7.624717],
    //                         [110.349115, -7.624857],
    //                         [110.349029, -7.624939],
    //                         [110.348943, -7.624996],
    //                         [110.348654, -7.625163],
    //                         [110.348505, -7.625205],
    //                         [110.348185, -7.625307],
    //                         [110.348021, -7.62541],
    //                         [110.347888, -7.62547],
    //                         [110.347669, -7.625522],
    //                         [110.34749, -7.62556],
    //                         [110.347154, -7.625558],
    //                         [110.343603, -7.628199],
    //                         [110.336364, -7.633246],
    //                         [110.334798, -7.635284],
    //                         [110.332438, -7.638353],
    //                         [110.32477, -7.643704],
    //                         [110.322255, -7.646501],
    //                         [110.317224, -7.64869],
    //                         [110.313053, -7.651973],
    //                         [110.308084, -7.653979],
    //                         [110.302747, -7.656837],
    //                         [110.301029, -7.661761],
    //                         [110.297348, -7.666504],
    //                         [110.292502, -7.672523],
    //                         [110.286245, -7.681338],
    //                         [110.285018, -7.686263],
    //                         [110.280907, -7.691916],
    //                         [110.276552, -7.698543],
    //                         [110.273607, -7.70213],
    //                         [110.273607, -7.704987],
    //                         [110.273055, -7.706689],
    //                         [110.272074, -7.706993],
    //                         [110.270724, -7.706932],
    //                         [110.269622, -7.706395]
    //                     ]
    //                 }
    //             }
    //         },
    //         "layout": {
    //             "line-join": "round",
    //             "line-cap": "round"
    //         },
    //         "paint": {
    //             "line-color": "#888",
    //             "line-width": 8
    //         }
    //     });
    // });
    //
}

function showDetailsMap() {
    let target = event.target;
    let page = document.querySelector(".data-province");
    page.innerHTML = target.id;
}

function outMouseDetailsMap() {
    let target = event.target;
    let page = document.querySelector(".data-province");
    page.innerHTML = "Indonesia Maps";
}
