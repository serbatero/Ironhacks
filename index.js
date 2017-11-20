var cadena = [];	
var arreglo = [];
var names = [];
var xy = [];
var arrayInterest = [];

$.get("https://data.cityofnewyork.us/api/views/ssdk-4qjy/rows.json", {accessType: "DOWNLOAD"}, function(data){
    
for(var i = 0; i < data.data.length; i++){
    arreglo.push(data.data[i][8]);
    names.push(data.data[i][11]);
   
}
console.log(names);

for(var j = 0; j < arreglo.length; j++){
    
    cadena = arreglo[j];
    cadena = cadena.substring(7,40);
    cadena = cadena.split(" ");
    xy.push(cadena);

}   
});
console.log(xy);

function setMarkers(map){
    for(var i = 0; i < xy.length; i++){
        
        var mark = new google.maps.Marker({ 
            
            position : {lat: Number(xy[i][1]), lng : Number(xy[i][0])},
            title : names[i],
            map: map, 
        
            });
            
        arrayInterest.push(mark);
    }
    
}

function buttonRentF(){
var elem = document.getElementById("rentButton");
//alert(elem.style.backgroundColor + myarray.length);
if( elem.style.backgroundColor == 'rgb(243, 243, 243)' ){
//alert("ome");
deleteMarkers(myarray);
elem.style.backgroundColor = "#FFCD38";
elem.innerHTML = "<dd>Show rents</dd>"
}else{
elem.style.backgroundColor = "#F3F3F3" ;
elem.innerHTML = "<dd>hide rents</dd>"
showMarkers(myarray);
var dist = document.getElementById("sel1").value;
// alert(dist);
deleteMarkersD(myarray, dist);
} 
}

var show = 1;

function buttonRentF(){
    
    var elem = document.getElementById("Areas");
    if(show == 1){
        elem.style.backgroundColor = "#d9534f";
        elem.innerHTML = "<dd>Show Areas</dd>"
        deleteMarkers(arrayInterest);
        show = 0;
    }else{
        elem.style.backgroundColor = "#5bc0de";
        elem.innerHTML = "<dd>Hide Areas</dd>"
        showMarkers(arrayInterest);
        show = 1;
    }
    
}
    



function initMap(){
		var mapDiv = document.getElementById('map');
		
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 40.7291, lng: -73.9965},
			zoom: 12});
			
	    var image = "https://drive.google.com/a/unal.edu.co/file/d/1geaDLKNvHde2BNsr6sJvsJOQZK5jx1xl/view?usp=sharing";
		
		var marker = new google.maps.Marker({ 
			    position: {lat: 40.7291, lng: -73.9965},
		    	map: map,
		    	title: 'NYU Stern School of Business',
		       
		  
		});
		setMarkers(map);
		showMarkers(arrayInterest);
		
}

function showMarkers(markersArray) {
for (var i = 0; i < markersArray.length; i++) {
markersArray[i].setVisible(true);
}
}






/*function loadMark(mp, cadena) {
    
    console.log("estoy en la funcion") 
    console.log(cadena)
    var marker2 = new google.maps.Marker({ 
        
        position: {lat: Number(cadena[1]), lng: Number(cadena[0])},
    		    
        map: mp,
    	title: 'new'
    });  
    
}*/



function deleteMarkers(markersArray) {

    for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setVisible(false);
    }
//markersArray = [];
}

