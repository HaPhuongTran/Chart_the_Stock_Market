var name_stock_array =[{name:VNET, contant:"first contan", color: "#000000", data:"1, 2, 3, 4,5"}];
var color1 = ["#000000", "#2F4F4F", "#97FFFF", "#528B8B", "#EEE8AA", "#8B4513", "#8B795E", "#E0EEE0", "#CDC1C5", "#E6E6FA", 
            "#8470FF", "#473C8B", "#27408B", "#0000EE", "#191970", "#B0E0E6", "#00B2EE", "#00688B", "#6CA6CD", "#E0FFFF",
            "#5F9EA0", "#53868B", "#48D1CC", "#00CED1", "#40E0D0", "#00868B", "#76EEC6", "#9BCD9B", "#2E8B57", "#9AFF9A",
            "#00EE76", "#008B45", "#00CD00", "#008B00", "#006400", "#20B2AA", "#00FA9A", "#ADFF2F", "#B3EE3A", "#556B2F",
            "#A2CD5A", "#8B8B00", "#CDAD00", "#CD9B1D", "#8B658B", "#8B3A3A", "#CD6839", "#8B1A1A", "#8B0A50", "#551A8B"];

var canvas = document.getElementById('myChart').getContext('2d');

   var dta.push([name_stock_array[0].data]);

   var dts.push ({
                label: get_name_stock,
                backgroundColor: 'rgb(255, 255, 255,0)',
                borderColor: color1[i],
                data: dta});
    var data1 = {
        labels: ["22 May", "22 may", "22 may", "22 may", "22 may"],
        datasets: dts
    };

    var chart = new Chart(canvas, {
        type: "line",
        data:data1,
        options:{}
    });