ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([410365.804753, 983185.445976, 410843.623656, 983454.355472]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lineas_2 = new ol.format.GeoJSON();
var features_Lineas_2 = format_Lineas_2.readFeatures(json_Lineas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lineas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_2.addFeatures(features_Lineas_2);
var lyr_Lineas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_2, 
                style: style_Lineas_2,
                popuplayertitle: 'Lineas',
                interactive: true,
                title: '<img src="styles/legend/Lineas_2.png" /> Lineas'
            });
var format_Finca_Completa_3 = new ol.format.GeoJSON();
var features_Finca_Completa_3 = format_Finca_Completa_3.readFeatures(json_Finca_Completa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Finca_Completa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finca_Completa_3.addFeatures(features_Finca_Completa_3);
var lyr_Finca_Completa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Finca_Completa_3, 
                style: style_Finca_Completa_3,
                popuplayertitle: 'Finca_Completa',
                interactive: true,
                title: '<img src="styles/legend/Finca_Completa_3.png" /> Finca_Completa'
            });
var group_Gpsmap60CSxTrack = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Gpsmap 60 CSx Track'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Lineas_2.setVisible(true);lyr_Finca_Completa_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatellite_1,lyr_Lineas_2,lyr_Finca_Completa_3];
lyr_Lineas_2.set('fieldAliases', {'id': 'id', 'Dist': 'Dist', });
lyr_Finca_Completa_3.set('fieldAliases', {'id': 'id', 'Área': 'Área en Ha', 'M2': 'Área en Metros Cuadrados', 'Somos': 'QUIENES SOMOS', });
lyr_Lineas_2.set('fieldImages', {'id': 'TextEdit', 'Dist': 'TextEdit', });
lyr_Finca_Completa_3.set('fieldImages', {'id': 'TextEdit', 'Área': 'UniqueValues', 'M2': 'UniqueValues', 'Somos': 'ExternalResource', });
lyr_Lineas_2.set('fieldLabels', {'id': 'hidden field', 'Dist': 'hidden field', });
lyr_Finca_Completa_3.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'M2': 'inline label - always visible', 'Somos': 'inline label - always visible', });
lyr_Finca_Completa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});