ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4283").setExtent([115.806722, -32.420792, 116.231144, -32.198462]);
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
var format_4_GA_SHP_2 = new ol.format.GeoJSON();
var features_4_GA_SHP_2 = format_4_GA_SHP_2.readFeatures(json_4_GA_SHP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_4_GA_SHP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_GA_SHP_2.addFeatures(features_4_GA_SHP_2);
var lyr_4_GA_SHP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_GA_SHP_2, 
                style: style_4_GA_SHP_2,
                popuplayertitle: "4_GA_SHP",
                interactive: true,
                title: '<img src="styles/legend/4_GA_SHP_2.png" /> 4_GA_SHP'
            });
var format_RuralResidentialInvestigation_3 = new ol.format.GeoJSON();
var features_RuralResidentialInvestigation_3 = format_RuralResidentialInvestigation_3.readFeatures(json_RuralResidentialInvestigation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_RuralResidentialInvestigation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidentialInvestigation_3.addFeatures(features_RuralResidentialInvestigation_3);
var lyr_RuralResidentialInvestigation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidentialInvestigation_3, 
                style: style_RuralResidentialInvestigation_3,
                popuplayertitle: "Rural Residential Investigation",
                interactive: false,
                title: '<img src="styles/legend/RuralResidentialInvestigation_3.png" /> Rural Residential Investigation'
            });
var format_RuralResidential_4 = new ol.format.GeoJSON();
var features_RuralResidential_4 = format_RuralResidential_4.readFeatures(json_RuralResidential_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_RuralResidential_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidential_4.addFeatures(features_RuralResidential_4);
var lyr_RuralResidential_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidential_4, 
                style: style_RuralResidential_4,
                popuplayertitle: "Rural Residential",
                interactive: false,
                title: '<img src="styles/legend/RuralResidential_4.png" /> Rural Residential'
            });
var format_UrbanDeferred_5 = new ol.format.GeoJSON();
var features_UrbanDeferred_5 = format_UrbanDeferred_5.readFeatures(json_UrbanDeferred_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_UrbanDeferred_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanDeferred_5.addFeatures(features_UrbanDeferred_5);
var lyr_UrbanDeferred_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanDeferred_5, 
                style: style_UrbanDeferred_5,
                popuplayertitle: "Urban Deferred",
                interactive: false,
                title: '<img src="styles/legend/UrbanDeferred_5.png" /> Urban Deferred'
            });
var format_UrbanExpansion_6 = new ol.format.GeoJSON();
var features_UrbanExpansion_6 = format_UrbanExpansion_6.readFeatures(json_UrbanExpansion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_UrbanExpansion_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanExpansion_6.addFeatures(features_UrbanExpansion_6);
var lyr_UrbanExpansion_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanExpansion_6, 
                style: style_UrbanExpansion_6,
                popuplayertitle: "Urban Expansion",
                interactive: true,
                title: '<img src="styles/legend/UrbanExpansion_6.png" /> Urban Expansion'
            });
var format_UrbanInvestigation_7 = new ol.format.GeoJSON();
var features_UrbanInvestigation_7 = format_UrbanInvestigation_7.readFeatures(json_UrbanInvestigation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_UrbanInvestigation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanInvestigation_7.addFeatures(features_UrbanInvestigation_7);
var lyr_UrbanInvestigation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanInvestigation_7, 
                style: style_UrbanInvestigation_7,
                popuplayertitle: "Urban Investigation",
                interactive: true,
                title: '<img src="styles/legend/UrbanInvestigation_7.png" /> Urban Investigation'
            });
var format_Urban_8 = new ol.format.GeoJSON();
var features_Urban_8 = format_Urban_8.readFeatures(json_Urban_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_Urban_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_8.addFeatures(features_Urban_8);
var lyr_Urban_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_8, 
                style: style_Urban_8,
                popuplayertitle: "Urban",
                interactive: false,
                title: '<img src="styles/legend/Urban_8.png" /> Urban'
            });
var format_PlanningInvestigation_9 = new ol.format.GeoJSON();
var features_PlanningInvestigation_9 = format_PlanningInvestigation_9.readFeatures(json_PlanningInvestigation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_PlanningInvestigation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningInvestigation_9.addFeatures(features_PlanningInvestigation_9);
var lyr_PlanningInvestigation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningInvestigation_9, 
                style: style_PlanningInvestigation_9,
                popuplayertitle: "Planning Investigation",
                interactive: true,
                title: '<img src="styles/legend/PlanningInvestigation_9.png" /> Planning Investigation'
            });
var format_StackedOverlays_10 = new ol.format.GeoJSON();
var features_StackedOverlays_10 = format_StackedOverlays_10.readFeatures(json_StackedOverlays_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_StackedOverlays_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StackedOverlays_10.addFeatures(features_StackedOverlays_10);
var lyr_StackedOverlays_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StackedOverlays_10, 
                style: style_StackedOverlays_10,
                popuplayertitle: "Stacked Overlays",
                interactive: false,
                title: '<img src="styles/legend/StackedOverlays_10.png" /> Stacked Overlays'
            });
var group_OverlaysDeduct = new ol.layer.Group({
                                layers: [lyr_StackedOverlays_10,],
                                fold: "open",
                                title: "Overlays Deduct"});
var group_PerthandPeelLandUse = new ol.layer.Group({
                                layers: [lyr_RuralResidentialInvestigation_3,lyr_RuralResidential_4,lyr_UrbanDeferred_5,lyr_UrbanExpansion_6,lyr_UrbanInvestigation_7,lyr_Urban_8,lyr_PlanningInvestigation_9,],
                                fold: "open",
                                title: "Perth and Peel Land Use"});
var group_Parcel = new ol.layer.Group({
                                layers: [lyr_4_GA_SHP_2,],
                                fold: "open",
                                title: "Parcel"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layers"});

lyr_GoogleMaps_0.setVisible(true);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_4_GA_SHP_2.setVisible(true);lyr_RuralResidentialInvestigation_3.setVisible(true);lyr_RuralResidential_4.setVisible(true);lyr_UrbanDeferred_5.setVisible(true);lyr_UrbanExpansion_6.setVisible(true);lyr_UrbanInvestigation_7.setVisible(true);lyr_Urban_8.setVisible(true);lyr_PlanningInvestigation_9.setVisible(true);lyr_StackedOverlays_10.setVisible(true);
var layersList = [group_BaseLayers,group_Parcel,group_PerthandPeelLandUse,group_OverlaysDeduct];
lyr_4_GA_SHP_2.set('fieldAliases', {'locality': 'locality', 'area_ha': 'area_ha', 'zoned_ha': 'zoned_ha', 'Address,': 'Address,', 'REMARKS': 'REMARKS', 'NDH': 'NDH', 'Lead Link': 'Lead Link', 'Zone': 'Zone', 'Pri_Vendor': 'Pri_Vendor', 'Comb_Gross': 'Comb_Gross', 'OverlayHA': 'OverlayHA', 'Total_Ovl': 'Total_Ovl', 'TotalNDH': 'TotalNDH', });
lyr_RuralResidentialInvestigation_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RuralResidential_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UrbanDeferred_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UrbanExpansion_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UrbanInvestigation_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Urban_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PlanningInvestigation_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'NAME': 'NAME', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_StackedOverlays_10.set('fieldAliases', {'layer_name': 'layer_name', });
lyr_4_GA_SHP_2.set('fieldImages', {'locality': 'TextEdit', 'area_ha': 'TextEdit', 'zoned_ha': 'TextEdit', 'Address,': 'TextEdit', 'REMARKS': 'TextEdit', 'NDH': 'TextEdit', 'Lead Link': 'TextEdit', 'Zone': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Comb_Gross': 'TextEdit', 'OverlayHA': 'TextEdit', 'Total_Ovl': 'TextEdit', 'TotalNDH': 'TextEdit', });
lyr_RuralResidentialInvestigation_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RuralResidential_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UrbanDeferred_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UrbanExpansion_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UrbanInvestigation_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Urban_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PlanningInvestigation_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_StackedOverlays_10.set('fieldImages', {'layer_name': 'TextEdit', });
lyr_4_GA_SHP_2.set('fieldLabels', {'locality': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'zoned_ha': 'inline label - visible with data', 'Address,': 'inline label - visible with data', 'REMARKS': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Pri_Vendor': 'inline label - visible with data', 'Comb_Gross': 'inline label - visible with data', 'OverlayHA': 'inline label - visible with data', 'Total_Ovl': 'inline label - visible with data', 'TotalNDH': 'inline label - visible with data', });
lyr_RuralResidentialInvestigation_3.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'no label', 'SP_TITLE': 'no label', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'no label', 'STAGINGSCH': 'no label', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RuralResidential_4.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'no label', 'SP_TITLE': 'no label', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'no label', 'STAGINGSCH': 'no label', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UrbanDeferred_5.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'no label', 'SP_TITLE': 'no label', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'no label', 'STAGINGSCH': 'no label', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UrbanExpansion_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_UrbanInvestigation_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Urban_8.set('fieldLabels', {'OBJECTID': 'no label', 'LUGROUP': 'no label', 'LUTYPE': 'no label', 'LUSUBTYPE': 'no label', 'SP_TITLE': 'no label', 'SUBREGION': 'no label', 'LABEL': 'no label', 'STAGING': 'no label', 'STAGINGSCH': 'no label', 'CHANGETOFR': 'no label', 'FRAMEWORKL': 'no label', 'DESCRIPTIO': 'no label', 'COMMENT_': 'no label', 'ADDITIONAL': 'no label', 'SOURCE': 'no label', 'REF_NO': 'no label', 'TYPOLOGY': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CLASSOFACT': 'no label', 'COACOMMENT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PlanningInvestigation_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'inline label - visible with data', 'SP_TITLE': 'inline label - visible with data', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'inline label - visible with data', 'STAGINGSCH': 'inline label - visible with data', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'NAME': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_StackedOverlays_10.set('fieldLabels', {'layer_name': 'no label', });
lyr_StackedOverlays_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});