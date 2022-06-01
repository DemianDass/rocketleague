function finMe(){
    var output = document.getElementById('map');

    if(navigator.geolocation){

        output.innerHTML ="<p> si se puede</p>";
    }else{
        output.innerHTML ="<p> no se puede</p>";
    }
}