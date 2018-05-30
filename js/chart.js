var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Line 1",
            backgroundColor: 'rgb(255, 255, 255, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }, 
        	{
            label: "Line 2",
            backgroundColor: 'rgb(255, 255, 255, 0)',
            borderColor: 'rgb(255, 199, 132)',
            data: [0, 10, 6, 9, 20, 30, 50],
        }]
    },

    // Configuration options go here
    options: {}
});
var name_stock_array = ["VNET", "AGTK", "AKAM", "BIDU", "BCOR", "WIFI", "BRNW", "CARB", "JRJC", "CCIH", "CHICF", "CCOI", "CXDO", "CRWG", "EATR", "EDXC"];


function add(){
 
    var get_name_stock = document.getElementById("fill_stock").value;
    for(var i =0)
	var div_add = document.createElement("div");
    var sub_div_add = document.createElement("div");
    var h3_add = document.createElement ("h3");
    var p_add = document.createElement ("p");

    

	div_add.classList.add("name_stock");
    sub_div_add.classList.add("sub_div");

	var textnode = document.createTextNode("MSFT");
	var text_add = document.createTextNode("Microsoft Corporation (MSFT) Prices, Dividends, Splits and Trading Volume");
    
    div_add.appendChild(sub_div_add);
    div_add.appendChild(p_add);
    sub_div_add.appendChild(h3_add)
    p_add.appendChild(text_add);
    h3_add.appendChild(textnode);

	document.getElementById("name_of_stock").appendChild(div_add);
}