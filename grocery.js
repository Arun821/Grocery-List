
function grains(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.stastus==200){
            var response = JSON.parse(this.responseText);
            var Jproduct = response.table1;
    document.getElementById('heading').innerHTML = "Grains List";
    document.body.style.backgroundImage = "url('https://s3.amazonaws.com/re-work-production/post_images/166/green-wheat-field-wallpaper-3/original.jpg?1461938464')"
var col = [];
for (var i = 0; i < table1.length; i++) {
    for (var key in table1[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}


var table = document.createElement("table");

var tr = table.insertRow(-1);                  

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      
    th.innerHTML = col[i];
    tr.appendChild(th);
}


for (var i = 0; i < table1.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = table1[i][col[j]];
    }
}


var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);
        }
    }
    xhttp.open("GET", "product.json", true);
    xhttp.send();
}


function oil(){
    document.getElementById('heading').innerHTML = "Oil & Butter List";
    document.body.style.backgroundImage = "url('https://ak6.picdn.net/shutterstock/videos/1023494986/thumb/3.jpg')";
    var col = [];
        for (var i = 0; i < fats.length; i++) {
            for (var key in fats[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        
        
        var table = document.createElement("table");
        
    
        
        var tr = table.insertRow(-1);                   
        
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        
    
        for (var i = 0; i < fats.length; i++) {
        
            tr = table.insertRow(-1);
        
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = fats[i][col[j]];
            }
        }
        
        
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        }


function veg(){
    document.body.style.backgroundImage = "url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4245117/910/588/m2/fpnw/wm1/egngk5ww7j1s6xitop6ghvzailzdizz0pkozfzkumuodvmfe857p3xwdbck5as2c-.jpg?1522939627&s=06c3c06ea0d51e2c0a7149d195a618d2')";
    document.getElementById('heading').innerHTML = "Vegetables & Fruits List";
    var col = [];
        for (var i = 0; i < fruits.length; i++) {
            for (var key in fruits[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        
    var table = document.createElement("table");
            
            var tr = table.insertRow(-1);                   
            
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            
            for (var i = 0; i < fruits.length; i++) {
            
                tr = table.insertRow(-1);
            
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = fruits[i][col[j]];
                }
            }
            
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            }


function dairy(){
    document.body.style.backgroundImage = "URL('https://www.indiafilings.com/learn/wp-content/uploads/2017/06/GST-Rate-for-Milk.jpg')";
    document.getElementById('heading').innerHTML = "Dairy & Egg List";
    var col = [];
        for (var i = 0; i < dairyEggs.length; i++) {
            for (var key in dairyEggs[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                    }
                }
            }
                
                
    var table = document.createElement("table");
                
                
                
    var tr = table.insertRow(-1);                   
                
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");     
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
                
                
        for (var i = 0; i < dairyEggs.length; i++) {
                
            tr = table.insertRow(-1);
                
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = dairyEggs[i][col[j]];
                }
            }
                
                
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}


function condiments(){
    document.body.style.backgroundImage ="url('https://st4.depositphotos.com/10480078/27146/i/1600/depositphotos_271461166-stock-photo-various-spices-and-condiments-for.jpg')";
    document.getElementById('heading').innerHTML = "Condiments List";
    var col = [];
        for (var i = 0; i < condi.length; i++) {
            for (var key in condi[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
             }
        }
                
                
    var table = document.createElement("table");

                
     var tr = table.insertRow(-1);                   
                
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
                
                
        for (var i = 0; i < condi.length; i++) {
                
            tr = table.insertRow(-1);
                
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = condi[i][col[j]];
                }
            }
                
                
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

           
function fish(){
    document.body.style.backgroundImage ="url('https://cdn.miscellaneoushi.com/1920x1080/20121028/fruits%20food%20meat%20fish%20chinese%20sushi%20seafood%20cuisine%201920x1080%20wallpaper_www.miscellaneoushi.com_48.jpg')";
    document.getElementById('heading').innerHTML = "Fish & Meat List";
    var col = [];
        for (var i = 0; i < meat.length; i++) {
            for (var key in meat[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
            }
        }
    }
                                
    var table = document.createElement("table");
                                                               
    var tr = table.insertRow(-1); 
                                
        for (var i = 0; i < col.length; i++) {
             var th = document.createElement("th");      
                th.innerHTML = col[i];
                tr.appendChild(th);
    }
                                
                                
        for (var i = 0; i < meat.length; i++) {
                                
            tr = table.insertRow(-1);
                                
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = meat[i][col[j]];
                }
            }
                                
                                
    var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
                           
function snks(){
    document.body.style.backgroundImage ="url('https://res.klook.com/image/upload/fl_lossy.progressive,q_65,f_auto/c_fill,w_1920,h_1080/v1507882862/activities/nj0tyiwetqwchujoueui.webp')";
    document.getElementById('heading').innerHTML = "Snacks list";
    var col = [];
        for (var i = 0; i < snacks.length; i++) {
            for (var key in snacks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
                                                
                                                
    var table = document.createElement("table");
                                                
                                               
                                                
    var tr = table.insertRow(-1);                   
                                                
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
                                                
                                                
        for (var i = 0; i < snacks.length; i++) {
                                                
            tr = table.insertRow(-1);
                                                
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = snacks[i][col[j]];
            }
        }
                                                
                                                
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
                                           

function spi(){
    document.body.style.backgroundImage = "url('https://wallpapermemory.com/uploads/340/herbs-and-spices-background-hd-1152x768-410399.jpg')";

    document.getElementById('heading').innerHTML = "Spices List";
    var col = [];
        for (var i = 0; i < spices.length; i++) {
            for (var key in spices[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
                                                                
                                                                
    var table = document.createElement("table");
                                                                
                                                               
                                                                
    var tr = table.insertRow(-1);                   
                                                                
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
                th.innerHTML = col[i];
                tr.appendChild(th);
        }
                                                                
                                                                
        for (var i = 0; i < spices.length; i++) {
                                                                
            tr = table.insertRow(-1);
                                                                
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = spices[i][col[j]];
                }
        }
                                                                
                                                                
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
                                                           