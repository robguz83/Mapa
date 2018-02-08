/** loads js */

if (localStorage.version) {
    localStorage.version = Number(localStorage.version) + 1;
} else {
    localStorage.version = 1;
}
//console.log(localStorage.version + " veces en esta sesion.");


loadJS('leaflet', 'files/leaflet-src.js');
loadJS('markercluster', 'files/leaflet.markercluster-src.js');
loadJS('featuregroup', 'files/leaflet.featuregroup.subgroup-src.js');

loadJS('Datos_PaginaWeb', 'datos/Datos_PaginaWeb.js?'+localStorage.version.toString());

loadJS('heat', 'files/leaflet-heat.js');
loadJS('jquery', 'files/jquery-1.10.2.js');
loadJS('jquery-ui', 'files/jquery-ui.js');


loadJS('jquery.corner', 'files/jquery.corner.js');


//loadJS('Map.Sync', 'files/L.Map.Sync.js');

loadJS('handlebars', 'files/handlebars-v4.0.5.js');


//loadJS('Leaflet.GoogleMutant', 'files/Leaflet.GoogleMutant.js');



loadJS('SlideMenu', 'files/L.Control.SlideMenu.js');



loadJS('tile_stamen', 'files/tile.stamen.js');




//loadJS('funciones', 'files/funciones_back.js?'+localStorage.version.toString());
loadJS('funciones', 'files/funciones.js?'+localStorage.version.toString());


loadJS('bowser', 'files/bowser.js');





function loadJS(id, src) {
    if (document.getElementById(id) != null) return;
    var js = document.createElement('script'); 
    js.id = id; js.async = false; js.src = src;
    document.getElementsByTagName('head')[0].appendChild(js);
}

