var wms_layers = [];

var format_la_countygeojson_0 = new ol.format.GeoJSON();
var features_la_countygeojson_0 = format_la_countygeojson_0.readFeatures(json_la_countygeojson_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_la_countygeojson_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_la_countygeojson_0.addFeatures(features_la_countygeojson_0);
var lyr_la_countygeojson_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_la_countygeojson_0, 
                style: style_la_countygeojson_0,
                interactive: true,
                title: '<img src="styles/legend/la_countygeojson_0.png" /> la_county.geojson'
            });
var format_CALosAngeles1939_1 = new ol.format.GeoJSON();
var features_CALosAngeles1939_1 = format_CALosAngeles1939_1.readFeatures(json_CALosAngeles1939_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CALosAngeles1939_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALosAngeles1939_1.addFeatures(features_CALosAngeles1939_1);
var lyr_CALosAngeles1939_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CALosAngeles1939_1, 
                style: style_CALosAngeles1939_1,
                interactive: true,
    title: 'CALosAngeles1939<br />\
    <img src="styles/legend/CALosAngeles1939_1_0.png" /> A<br />\
    <img src="styles/legend/CALosAngeles1939_1_1.png" /> B<br />\
    <img src="styles/legend/CALosAngeles1939_1_2.png" /> C<br />\
    <img src="styles/legend/CALosAngeles1939_1_3.png" /> D<br />\
    <img src="styles/legend/CALosAngeles1939_1_4.png" /> <br />'
        });
var format_LATimesPhotoArchive_2 = new ol.format.GeoJSON();
var features_LATimesPhotoArchive_2 = format_LATimesPhotoArchive_2.readFeatures(json_LATimesPhotoArchive_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LATimesPhotoArchive_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATimesPhotoArchive_2.addFeatures(features_LATimesPhotoArchive_2);
var lyr_LATimesPhotoArchive_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_LATimesPhotoArchive_2, 
                radius: 5 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'LA Times Photo Archive'
            });
var format_39_47GreenBook_LAonly_3 = new ol.format.GeoJSON();
var features_39_47GreenBook_LAonly_3 = format_39_47GreenBook_LAonly_3.readFeatures(json_39_47GreenBook_LAonly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_47GreenBook_LAonly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_47GreenBook_LAonly_3.addFeatures(features_39_47GreenBook_LAonly_3);
var lyr_39_47GreenBook_LAonly_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_39_47GreenBook_LAonly_3, 
                style: style_39_47GreenBook_LAonly_3,
                interactive: true,
    title: '39_47GreenBook_LAonly<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_0.png" /> Automotive<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_1.png" /> Barber Shop<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_2.png" /> Beauty Parlor<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_3.png" /> Drug Stores<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_4.png" /> Garages<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_5.png" /> Hotel<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_6.png" /> Liquor Store<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_7.png" /> Night Club<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_8.png" /> Restaurants<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_9.png" /> Road House<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_10.png" /> Service Station<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_11.png" /> Service Stations<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_12.png" /> Tailors<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_13.png" /> Tavern<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_14.png" /> Tourist Home<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_15.png" /> Tourist Homes<br />\
    <img src="styles/legend/39_47GreenBook_LAonly_3_16.png" /> <br />'
        });
var lyr_CA_LosAngeles1_193911_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "CA_LosAngeles1_193911",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CA_LosAngeles1_193911_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13195856.863743, 4015686.975360, -13150773.594510, 4047827.137855]
                            })
                        });

lyr_la_countygeojson_0.setVisible(true);lyr_CALosAngeles1939_1.setVisible(true);lyr_LATimesPhotoArchive_2.setVisible(true);lyr_39_47GreenBook_LAonly_3.setVisible(true);lyr_CA_LosAngeles1_193911_4.setVisible(true);
var layersList = [lyr_la_countygeojson_0,lyr_CALosAngeles1939_1,lyr_LATimesPhotoArchive_2,lyr_39_47GreenBook_LAonly_3,lyr_CA_LosAngeles1_193911_4];
lyr_la_countygeojson_0.set('fieldAliases', {'name': 'name', 'slug': 'slug', });
lyr_CALosAngeles1939_1.set('fieldAliases', {'name': 'name', 'holc_id': 'holc_id', 'holc_grade': 'holc_grade', 'area_description_data': 'area_description_data', });
lyr_39_47GreenBook_LAonly_3.set('fieldAliases', {'Type': 'Type', 'Name': 'Name', 'Street Address': 'Street Address', 'Year': 'Year', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'latlong': 'latlong', 'Image': 'Image', 'NYPL': 'NYPL', });
lyr_la_countygeojson_0.set('fieldImages', {'name': 'TextEdit', 'slug': 'TextEdit', });
lyr_CALosAngeles1939_1.set('fieldImages', {'name': 'TextEdit', 'holc_id': 'TextEdit', 'holc_grade': 'TextEdit', 'area_description_data': 'TextEdit', });
lyr_39_47GreenBook_LAonly_3.set('fieldImages', {'Type': 'TextEdit', 'Name': 'TextEdit', 'Street Address': 'TextEdit', 'Year': 'Range', 'City': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'latlong': 'TextEdit', 'Image': 'TextEdit', 'NYPL': 'TextEdit', });
lyr_la_countygeojson_0.set('fieldLabels', {'name': 'no label', 'slug': 'no label', });
lyr_CALosAngeles1939_1.set('fieldLabels', {'name': 'no label', 'holc_id': 'no label', 'holc_grade': 'no label', 'area_description_data': 'no label', });
lyr_39_47GreenBook_LAonly_3.set('fieldLabels', {'Type': 'no label', 'Name': 'no label', 'Street Address': 'no label', 'Year': 'no label', 'City': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'latlong': 'no label', 'Image': 'no label', 'NYPL': 'no label', });
lyr_39_47GreenBook_LAonly_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});