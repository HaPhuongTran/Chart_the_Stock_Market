var check = "false";
var name_stock_array = ["VNET", "AGTK", "AKAM", "BIDU", "BCOR", "WIFI", "BRNW", "CARB", "JRJC", "CCIH", "CHICF", "CCOI", "CXDO", "CRWG", "EATR", "EDXC",
                        "ENV", "FB", "FLPC", "FZRO", "GEGI", "GDDY", "IAC", "IIJI", "IPAS","JCOM", "LOGL", "LLNW", "MOMO", "NTES", "EGOV", "OTOW", "OPESY",
                        "PTOP", "SIFY", "SINA", "SMCE", "SOHU", "FCCN", "SNST", "TCTZF", "TCEHY", "TMMI", "TRON", "TCX", "TWTR", "WEB", "XNET", "YAHOY", "YNDX"];

var color = ["#000000", "#2F4F4F", "#97FFFF", "#528B8B", "#EEE8AA", "#8B4513", "#8B795E", "#E0EEE0", "#CDC1C5", "#E6E6FA", 
            "#8470FF", "#473C8B", "#27408B", "#0000EE", "#191970", "#B0E0E6", "#00B2EE", "#00688B", "#6CA6CD", "#E0FFFF",
            "#5F9EA0", "#53868B", "#48D1CC", "#00CED1", "#40E0D0", "#00868B", "#76EEC6", "#9BCD9B", "#2E8B57", "#9AFF9A",
            "#00EE76", "#008B45", "#00CD00", "#008B00", "#006400", "#20B2AA", "#00FA9A", "#ADFF2F", "#B3EE3A", "#556B2F",
            "#A2CD5A", "#8B8B00", "#CDAD00", "#CD9B1D", "#8B658B", "#8B3A3A", "#CD6839", "#8B1A1A", "#8B0A50", "#551A8B"]

//data.push("datasets: [{label: get_name_stock,backgroundColor: 'rgb(255, 255, 255, 0)',borderColor: 'rgb(255, 199, 132)',data: [1.137, 263.600, 555.700, 426.6002, 428.276]}]");

function add(){
    //alert(name_stock_array.length);
    var get_name_stock = document.getElementById("fill_stock").value;
    if(get_name_stock.length != 0){
    	for(var i = 0; i<name_stock_array.length; i++){
            var n = name_stock_array[i].localeCompare(get_name_stock) 
            if(n == 0){
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


                var canvas = document.getElementById('myChart').getContext('2d');
                var dts = [
                           {label: "line1",
                            backgroundColor: 'rgb(255, 255, 255, 0)',
                           borderColor: '#990033',
                           data: [1.137, 263.600, 555.700, 426.6002, 428.276]}
                       ];
                dts.push ({ label: "line2",
                            backgroundColor: 'rgb(255, 255, 255, 0)',
                           borderColor: color[i],
                           data: [210.137, 263.600, 355.700, 426.6002, 64.276]});
                dts.push ({ label: "line2",
                            backgroundColor: 'rgb(255, 255, 255, 0)',
                           borderColor: color[i],
                           data: [210.137, 263.600, 1.700, 426.6002, 64.276]});
                var data1 = {
                    labels: ["22 May", "22 may", "22 may", "22 may", "22 may"],
                    datasets: dts
                };

                var chart = new Chart(canvas, {
                    type: "line",
                    data:data1,
                    options:{}
                });
                document.getElementById("fill_stock").value = "";
                break;
            }
        }
    }
}

