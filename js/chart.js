
var name_stock_array = ["VNET", "AGTK", "AKAM", "BIDU", "BCOR", "WIFI", "BRNW", "CARB", "JRJC", "CCIH", "CHICF", "CCOI", "CXDO", "CRWG", "EATR", "EDXC",
                        "ENV", "FB", "FLPC", "FZRO", "GEGI", "GDDY", "IAC", "IIJI", "IPAS","JCOM", "LOGL", "LLNW", "MOMO", "NTES", "EGOV", "OTOW", "OPESY",
                        "PTOP", "SIFY", "SINA", "SMCE", "SOHU", "FCCN", "SNST", "TCTZF", "TCEHY", "TMMI", "TRON", "TCX", "TWTR", "WEB", "XNET", "YAHOY", "YNDX"];


function add(){
    
    var get_name_stock = document.getElementById("fill_stock").value;
	for(var i =0; i<name_stock_array.length; i++){
        if(name_stock_array[i].localeCompare(get_name_stock)){
            var div_add = document.createElement("div");
            var sub_div_add = document.createElement("div");
            var h3_add = document.createElement ("h3");
            var p_add = document.createElement ("p");

            

            div_add.classList.add("name_stock");
            sub_div_add.classList.add("sub_div");

            var textnode = document.createTextNode(get_name_stock);
            var text_add = document.createTextNode("Microsoft Corporation (MSFT) Prices, Dividends, Splits and Trading Volume");
            
            div_add.appendChild(sub_div_add);
            div_add.appendChild(p_add);
            sub_div_add.appendChild(h3_add)
            p_add.appendChild(text_add);
            h3_add.appendChild(textnode);

            document.getElementById("name_of_stock").appendChild(div_add);

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ["22 May", "22 may", "22 may", "22 may", "22 may"],
                    datasets: [{
                        label: get_name_stock,
                        backgroundColor: 'rgb(255, 255, 255, 0)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [1.137, 863.600, 777.700, 426.6002, 128.276],
                    }]
                },

                // Configuration options go here
                options: {}
            });

            break;
        }
        
    }
}