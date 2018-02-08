!function(e){function t(e,t){for(var o=a(e),n=0;n<t.length;n++){var r=[e,t[n]].join("-");s[r]=i(r,o.type,o.minZoom,o.maxZoom),s[r].deprecated=!0}}function o(e,t,o){for(var n=a(e),r=0;r<t.length;r++){var l=[e,t[r]].join("-");s[l]=i(l,o||n.type,n.minZoom,n.maxZoom)}}function a(e){if(e in s){var t=s[e];return t.deprecated&&console&&console.warn&&console.warn(e+" is a deprecated style; it will be redirected to its replacement. For performance improvements, please change your reference."),t}throw"No such provider ("+e+")"}function n(e){return e.replace(/({.})/g,function(e){return"$"+e.toLowerCase()})}var r="a. b. c. d.".split(" "),i=function(e,t,o,a){return{url:["http://{S}tile.stamen.com/",e,"/{Z}/{X}/{Y}.",t].join(""),type:t,subdomains:r.slice(),minZoom:o,maxZoom:a,attribution:['Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ','under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ','Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>, ','under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'].join("")}},s={toner:i("toner","png",0,20),terrain:i("terrain","png",0,18),"terrain-classic":i("terrain-classic","png",0,18),watercolor:i("watercolor","jpg",1,18),"trees-cabs-crime":{url:"http://{S}.tiles.mapbox.com/v3/stamen.trees-cabs-crime/{Z}/{X}/{Y}.png",type:"png",subdomains:"a b c d".split(" "),minZoom:11,maxZoom:18,extent:[{lat:37.853,lon:-122.577},{lat:37.684,lon:-122.313}],attribution:['Design by Shawn Allen at <a href="http://stamen.com/">Stamen</a>.','Data courtesy of <a href="http://fuf.net/">FuF</a>,','<a href="http://www.yellowcabsf.com/">Yellow Cab</a>','&amp; <a href="http://sf-police.org/">SFPD</a>.'].join(" ")}};s["terrain-classic"].url="http://{S}tile.stamen.com/terrain/{Z}/{X}/{Y}.png",o("toner",["hybrid","labels","lines","background","lite"]),o("terrain",["background","labels","lines"]),t("toner",["2010"]),t("toner",["2011","2011-lines","2011-labels","2011-lite"]);for(var l=["toner","toner-hybrid","toner-labels","toner-lines","toner-background","toner-lite","terrain","terrain-background","terrain-lines","terrain-labels","terrain-classic"],m=0;m<l.length;m++){var p=l[m];s[p].retina=!0,s[p].attribution=['Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ','under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ','Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ','under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'].join("")}if(e.stamen=e.stamen||{},e.stamen.tile=e.stamen.tile||{},e.stamen.tile.providers=s,e.stamen.tile.getProvider=a,"object"==typeof MM){var c="function"==typeof MM.Template?MM.Template:MM.TemplatedMapProvider;MM.StamenTileLayer=function(e){var t=a(e);this._provider=t,MM.Layer.call(this,new c(t.url,t.subdomains)),this.provider.setZoomRange(t.minZoom,t.maxZoom),this.attribution=t.attribution},MM.StamenTileLayer.prototype={setCoordLimits:function(e){var t=this._provider;return!!t.extent&&(e.coordLimits=[e.locationCoordinate(t.extent[0]).zoomTo(t.minZoom),e.locationCoordinate(t.extent[1]).zoomTo(t.maxZoom)],!0)}},MM.extend(MM.StamenTileLayer,MM.Layer)}"object"==typeof L&&(L.StamenTileLayer=L.TileLayer.extend({initialize:function(e,t){var o=a(e),n=o.url.replace(/({[A-Z]})/g,function(e){return e.toLowerCase()}),r=L.Util.extend({},t,{minZoom:o.minZoom,maxZoom:o.maxZoom,subdomains:o.subdomains,scheme:"xyz",attribution:o.attribution,sa_id:e});L.TileLayer.prototype.initialize.call(this,n,r)}}),L.stamenTileLayer=function(e,t){return new L.StamenTileLayer(e,t)}),"object"==typeof OpenLayers&&(OpenLayers.Layer.Stamen=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(e,t){var o=a(e),r=o.url,i=o.subdomains,s=[];if(r.indexOf("{S}")>-1)for(var l=0;l<i.length;l++)s.push(n(r.replace("{S}",i[l])));else s.push(n(r));return t=OpenLayers.Util.extend({numZoomLevels:o.maxZoom,buffer:0,transitionEffect:"resize",tileOptions:{crossOriginKeyword:null},attribution:o.attribution},t),OpenLayers.Layer.OSM.prototype.initialize.call(this,e,s,t)}})),"object"==typeof google&&"object"==typeof google.maps&&(google.maps.ImageMapType=function(e){var t=function(){arguments.length&&e.apply(this,arguments)};return t.prototype=e.prototype,t}(google.maps.ImageMapType),google.maps.StamenMapType=function(e){var t=a(e),o=t.subdomains;return google.maps.ImageMapType.call(this,{getTileUrl:function(e,a){var n=1<<a,r=e.x%n,i=r<0?r+n:r,s=e.y,l=(a+i+s)%o.length;return t.url.replace("{S}",o[l]).replace("{Z}",a).replace("{X}",i).replace("{Y}",s)},tileSize:new google.maps.Size(256,256),name:e,minZoom:t.minZoom,maxZoom:t.maxZoom})},google.maps.StamenMapType.prototype=new google.maps.ImageMapType)}("undefined"==typeof exports?this:exports);