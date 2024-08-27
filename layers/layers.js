ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4283").setExtent([115.770995, -32.652131, 115.877101, -32.596548]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RuralResidentialInvestigation_2 = new ol.format.GeoJSON();
var features_RuralResidentialInvestigation_2 = format_RuralResidentialInvestigation_2.readFeatures(json_RuralResidentialInvestigation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_RuralResidentialInvestigation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidentialInvestigation_2.addFeatures(features_RuralResidentialInvestigation_2);
var lyr_RuralResidentialInvestigation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidentialInvestigation_2, 
                style: style_RuralResidentialInvestigation_2,
                popuplayertitle: "Rural Residential Investigation",
                interactive: true,
                title: '<img src="styles/legend/RuralResidentialInvestigation_2.png" /> Rural Residential Investigation'
            });
var format_RuralResidential_3 = new ol.format.GeoJSON();
var features_RuralResidential_3 = format_RuralResidential_3.readFeatures(json_RuralResidential_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_RuralResidential_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidential_3.addFeatures(features_RuralResidential_3);
var lyr_RuralResidential_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidential_3, 
                style: style_RuralResidential_3,
                popuplayertitle: "Rural Residential",
                interactive: false,
                title: '<img src="styles/legend/RuralResidential_3.png" /> Rural Residential'
            });
var format_UrbanDeferred_4 = new ol.format.GeoJSON();
var features_UrbanDeferred_4 = format_UrbanDeferred_4.readFeatures(json_UrbanDeferred_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_UrbanDeferred_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanDeferred_4.addFeatures(features_UrbanDeferred_4);
var lyr_UrbanDeferred_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanDeferred_4, 
                style: style_UrbanDeferred_4,
                popuplayertitle: "Urban Deferred",
                interactive: false,
                title: '<img src="styles/legend/UrbanDeferred_4.png" /> Urban Deferred'
            });
var format_UrbanExpansion_5 = new ol.format.GeoJSON();
var features_UrbanExpansion_5 = format_UrbanExpansion_5.readFeatures(json_UrbanExpansion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_UrbanExpansion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanExpansion_5.addFeatures(features_UrbanExpansion_5);
var lyr_UrbanExpansion_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanExpansion_5, 
                style: style_UrbanExpansion_5,
                popuplayertitle: "Urban Expansion",
                interactive: true,
                title: '<img src="styles/legend/UrbanExpansion_5.png" /> Urban Expansion'
            });
var format_UrbanInvestigation_6 = new ol.format.GeoJSON();
var features_UrbanInvestigation_6 = format_UrbanInvestigation_6.readFeatures(json_UrbanInvestigation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_UrbanInvestigation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanInvestigation_6.addFeatures(features_UrbanInvestigation_6);
var lyr_UrbanInvestigation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanInvestigation_6, 
                style: style_UrbanInvestigation_6,
                popuplayertitle: "Urban Investigation",
                interactive: true,
                title: '<img src="styles/legend/UrbanInvestigation_6.png" /> Urban Investigation'
            });
var format_Urban_7 = new ol.format.GeoJSON();
var features_Urban_7 = format_Urban_7.readFeatures(json_Urban_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_Urban_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_7.addFeatures(features_Urban_7);
var lyr_Urban_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_7, 
                style: style_Urban_7,
                popuplayertitle: "Urban",
                interactive: false,
                title: '<img src="styles/legend/Urban_7.png" /> Urban'
            });
var format_PlanningInvestigation_8 = new ol.format.GeoJSON();
var features_PlanningInvestigation_8 = format_PlanningInvestigation_8.readFeatures(json_PlanningInvestigation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_PlanningInvestigation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningInvestigation_8.addFeatures(features_PlanningInvestigation_8);
var lyr_PlanningInvestigation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningInvestigation_8, 
                style: style_PlanningInvestigation_8,
                popuplayertitle: "Planning Investigation",
                interactive: true,
                title: '<img src="styles/legend/PlanningInvestigation_8.png" /> Planning Investigation'
            });
var format_StackedOverlays_9 = new ol.format.GeoJSON();
var features_StackedOverlays_9 = format_StackedOverlays_9.readFeatures(json_StackedOverlays_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_StackedOverlays_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StackedOverlays_9.addFeatures(features_StackedOverlays_9);
var lyr_StackedOverlays_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StackedOverlays_9, 
                style: style_StackedOverlays_9,
                popuplayertitle: "Stacked Overlays",
                interactive: false,
                title: '<img src="styles/legend/StackedOverlays_9.png" /> Stacked Overlays'
            });
var format_RezoneParcels_10 = new ol.format.GeoJSON();
var features_RezoneParcels_10 = format_RezoneParcels_10.readFeatures(json_RezoneParcels_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_RezoneParcels_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RezoneParcels_10.addFeatures(features_RezoneParcels_10);
var lyr_RezoneParcels_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RezoneParcels_10, 
                style: style_RezoneParcels_10,
                popuplayertitle: "Rezone Parcels",
                interactive: true,
                title: '<img src="styles/legend/RezoneParcels_10.png" /> Rezone Parcels'
            });
var format_ZonedParcels_11 = new ol.format.GeoJSON();
var features_ZonedParcels_11 = format_ZonedParcels_11.readFeatures(json_ZonedParcels_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_ZonedParcels_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedParcels_11.addFeatures(features_ZonedParcels_11);
var lyr_ZonedParcels_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedParcels_11, 
                style: style_ZonedParcels_11,
                popuplayertitle: "Zoned Parcels",
                interactive: true,
                title: '<img src="styles/legend/ZonedParcels_11.png" /> Zoned Parcels'
            });
var group_Parcel = new ol.layer.Group({
                                layers: [lyr_RezoneParcels_10,lyr_ZonedParcels_11,],
                                fold: "open",
                                title: "Parcel"});
var group_OverlaysDeduct = new ol.layer.Group({
                                layers: [lyr_StackedOverlays_9,],
                                fold: "open",
                                title: "Overlays Deduct"});
var group_PerthandPeelLandUse = new ol.layer.Group({
                                layers: [lyr_RuralResidentialInvestigation_2,lyr_RuralResidential_3,lyr_UrbanDeferred_4,lyr_UrbanExpansion_5,lyr_UrbanInvestigation_6,lyr_Urban_7,lyr_PlanningInvestigation_8,],
                                fold: "open",
                                title: "Perth and Peel Land Use"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layers"});

lyr_GoogleMaps_0.setVisible(true);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_RuralResidentialInvestigation_2.setVisible(true);lyr_RuralResidential_3.setVisible(true);lyr_UrbanDeferred_4.setVisible(true);lyr_UrbanExpansion_5.setVisible(true);lyr_UrbanInvestigation_6.setVisible(true);lyr_Urban_7.setVisible(true);lyr_PlanningInvestigation_8.setVisible(true);lyr_StackedOverlays_9.setVisible(true);lyr_RezoneParcels_10.setVisible(true);lyr_ZonedParcels_11.setVisible(true);
var layersList = [group_BaseLayers,group_PerthandPeelLandUse,group_OverlaysDeduct,group_Parcel];
lyr_RuralResidentialInvestigation_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RuralResidential_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UrbanDeferred_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UrbanExpansion_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UrbanInvestigation_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Urban_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PlanningInvestigation_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_StackedOverlays_9.set('fieldAliases', {'layer_name': 'layer_name', });
lyr_RezoneParcels_10.set('fieldAliases', {'locality': 'locality', 'area_ha': 'area_ha', 'zoned_ha': 'zoned_ha', 'Address,': 'Address,', 'REMARKS': 'REMARKS', 'NDH': 'NDH', 'Lead Link': 'Lead Link', 'Zone': 'Zone', 'Pri_Vendor': 'Pri_Vendor', 'Comb_Gross': 'Comb_Gross', 'OverlayHA': 'OverlayHA', 'Total_Ovl': 'Total_Ovl', 'TotalNDH': 'TotalNDH', });
lyr_ZonedParcels_11.set('fieldAliases', {'locality': 'locality', 'area_ha': 'area_ha', 'zoned_ha': 'zoned_ha', 'Address,': 'Address,', 'REMARKS': 'REMARKS', 'NDH': 'NDH', 'Lead Link': 'Lead Link', 'Zone': 'Zone', 'Pri_Vendor': 'Pri_Vendor', 'Comb_Gross': 'Comb_Gross', 'OverlayHA': 'OverlayHA', 'Total_Ovl': 'Total_Ovl', 'TotalNDH': 'TotalNDH', });
lyr_RuralResidentialInvestigation_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RuralResidential_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UrbanDeferred_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UrbanExpansion_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UrbanInvestigation_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Urban_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PlanningInvestigation_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_StackedOverlays_9.set('fieldImages', {'layer_name': 'TextEdit', });
lyr_RezoneParcels_10.set('fieldImages', {'locality': 'TextEdit', 'area_ha': 'TextEdit', 'zoned_ha': 'TextEdit', 'Address,': 'TextEdit', 'REMARKS': 'TextEdit', 'NDH': 'TextEdit', 'Lead Link': 'TextEdit', 'Zone': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Comb_Gross': 'TextEdit', 'OverlayHA': 'TextEdit', 'Total_Ovl': 'TextEdit', 'TotalNDH': 'TextEdit', });
lyr_ZonedParcels_11.set('fieldImages', {'locality': 'TextEdit', 'area_ha': 'TextEdit', 'zoned_ha': 'TextEdit', 'Address,': 'TextEdit', 'REMARKS': 'TextEdit', 'NDH': 'TextEdit', 'Lead Link': 'TextEdit', 'Zone': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Comb_Gross': 'TextEdit', 'OverlayHA': 'TextEdit', 'Total_Ovl': 'TextEdit', 'TotalNDH': 'TextEdit', });
lyr_RuralResidentialInvestigation_2.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'inline label - visible with data', 'STAGINGSCH': 'inline label - visible with data', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RuralResidential_3.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'no label', 'SP_TITLE': 'no label', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'no label', 'STAGINGSCH': 'no label', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UrbanDeferred_4.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'no label', 'SP_TITLE': 'no label', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'no label', 'STAGINGSCH': 'no label', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UrbanExpansion_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'inline label - visible with data', 'STAGINGSCH': 'inline label - visible with data', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_UrbanInvestigation_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'inline label - visible with data', 'STAGINGSCH': 'inline label - visible with data', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Urban_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PlanningInvestigation_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'inline label - visible with data', 'STAGINGSCH': 'inline label - visible with data', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_StackedOverlays_9.set('fieldLabels', {'layer_name': 'no label', });
lyr_RezoneParcels_10.set('fieldLabels', {'locality': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'zoned_ha': 'inline label - visible with data', 'Address,': 'inline label - visible with data', 'REMARKS': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Comb_Gross': 'inline label - visible with data', 'OverlayHA': 'inline label - visible with data', 'Total_Ovl': 'inline label - visible with data', 'TotalNDH': 'inline label - visible with data', });
lyr_ZonedParcels_11.set('fieldLabels', {'locality': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'zoned_ha': 'inline label - visible with data', 'Address,': 'inline label - visible with data', 'REMARKS': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Comb_Gross': 'inline label - visible with data', 'OverlayHA': 'inline label - visible with data', 'Total_Ovl': 'inline label - visible with data', 'TotalNDH': 'inline label - visible with data', });
lyr_ZonedParcels_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});