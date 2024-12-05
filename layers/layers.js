var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PerthandPeelLandUse_2 = new ol.format.GeoJSON();
var features_PerthandPeelLandUse_2 = format_PerthandPeelLandUse_2.readFeatures(json_PerthandPeelLandUse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerthandPeelLandUse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerthandPeelLandUse_2.addFeatures(features_PerthandPeelLandUse_2);
var lyr_PerthandPeelLandUse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerthandPeelLandUse_2, 
                style: style_PerthandPeelLandUse_2,
                popuplayertitle: "Perth and Peel Land Use",
                interactive: false,
    title: 'Perth and Peel Land Use<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_0.png" /> Planning Investigation<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_1.png" /> Rural Residential<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_2.png" /> Rural Residential Investigation<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_3.png" /> Urban<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_4.png" /> Urban Deferred<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_5.png" /> Urban Expansion<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_6.png" /> Urban Investigation<br />\
    <img src="styles/legend/PerthandPeelLandUse_2_7.png" /> <br />'
        });
var format_AboriginalCulturalHeritageSurveyAreasDPLH080_3 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageSurveyAreasDPLH080_3 = format_AboriginalCulturalHeritageSurveyAreasDPLH080_3.readFeatures(json_AboriginalCulturalHeritageSurveyAreasDPLH080_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageSurveyAreasDPLH080_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageSurveyAreasDPLH080_3.addFeatures(features_AboriginalCulturalHeritageSurveyAreasDPLH080_3);
var lyr_AboriginalCulturalHeritageSurveyAreasDPLH080_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageSurveyAreasDPLH080_3, 
                style: style_AboriginalCulturalHeritageSurveyAreasDPLH080_3,
                popuplayertitle: "Aboriginal Cultural Heritage Survey Areas (DPLH-080)",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageSurveyAreasDPLH080_3.png" /> Aboriginal Cultural Heritage Survey Areas (DPLH-080)'
            });
var format_AcidSulfateSoilRiskMap50KDWER049_4 = new ol.format.GeoJSON();
var features_AcidSulfateSoilRiskMap50KDWER049_4 = format_AcidSulfateSoilRiskMap50KDWER049_4.readFeatures(json_AcidSulfateSoilRiskMap50KDWER049_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcidSulfateSoilRiskMap50KDWER049_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcidSulfateSoilRiskMap50KDWER049_4.addFeatures(features_AcidSulfateSoilRiskMap50KDWER049_4);
var lyr_AcidSulfateSoilRiskMap50KDWER049_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcidSulfateSoilRiskMap50KDWER049_4, 
                style: style_AcidSulfateSoilRiskMap50KDWER049_4,
                popuplayertitle: "Acid Sulfate Soil Risk Map 50K (DWER-049)",
                interactive: false,
    title: 'Acid Sulfate Soil Risk Map 50K (DWER-049)<br />\
    <img src="styles/legend/AcidSulfateSoilRiskMap50KDWER049_4_0.png" /> High to moderate risk<br />\
    <img src="styles/legend/AcidSulfateSoilRiskMap50KDWER049_4_1.png" /> Moderate to low risk<br />'
        });
var format_BushFireProneAreas2021OBRM019_5 = new ol.format.GeoJSON();
var features_BushFireProneAreas2021OBRM019_5 = format_BushFireProneAreas2021OBRM019_5.readFeatures(json_BushFireProneAreas2021OBRM019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BushFireProneAreas2021OBRM019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushFireProneAreas2021OBRM019_5.addFeatures(features_BushFireProneAreas2021OBRM019_5);
var lyr_BushFireProneAreas2021OBRM019_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushFireProneAreas2021OBRM019_5, 
                style: style_BushFireProneAreas2021OBRM019_5,
                popuplayertitle: "Bush Fire Prone Areas 2021 (OBRM-019)",
                interactive: false,
                title: '<img src="styles/legend/BushFireProneAreas2021OBRM019_5.png" /> Bush Fire Prone Areas 2021 (OBRM-019)'
            });
var format_Floodfringe_6 = new ol.format.GeoJSON();
var features_Floodfringe_6 = format_Floodfringe_6.readFeatures(json_Floodfringe_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodfringe_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Floodfringe_6.addFeatures(features_Floodfringe_6);
var lyr_Floodfringe_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Floodfringe_6, 
                style: style_Floodfringe_6,
                popuplayertitle: "Flood fringe",
                interactive: false,
                title: '<img src="styles/legend/Floodfringe_6.png" /> Flood fringe'
            });
var format_AboriginalCulturalHeritageRegisterDPLH099_7 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageRegisterDPLH099_7 = format_AboriginalCulturalHeritageRegisterDPLH099_7.readFeatures(json_AboriginalCulturalHeritageRegisterDPLH099_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageRegisterDPLH099_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageRegisterDPLH099_7.addFeatures(features_AboriginalCulturalHeritageRegisterDPLH099_7);
var lyr_AboriginalCulturalHeritageRegisterDPLH099_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageRegisterDPLH099_7, 
                style: style_AboriginalCulturalHeritageRegisterDPLH099_7,
                popuplayertitle: "Aboriginal Cultural Heritage - Register (DPLH-099)",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageRegisterDPLH099_7.png" /> Aboriginal Cultural Heritage - Register (DPLH-099)'
            });
var format_AboriginalCulturalHeritageHistoricDPLH098_8 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageHistoricDPLH098_8 = format_AboriginalCulturalHeritageHistoricDPLH098_8.readFeatures(json_AboriginalCulturalHeritageHistoricDPLH098_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageHistoricDPLH098_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageHistoricDPLH098_8.addFeatures(features_AboriginalCulturalHeritageHistoricDPLH098_8);
var lyr_AboriginalCulturalHeritageHistoricDPLH098_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageHistoricDPLH098_8, 
                style: style_AboriginalCulturalHeritageHistoricDPLH098_8,
                popuplayertitle: "Aboriginal Cultural Heritage - Historic (DPLH-098)",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageHistoricDPLH098_8.png" /> Aboriginal Cultural Heritage - Historic (DPLH-098)'
            });
var format_AboriginalCulturalHeritageLodgedDPLH100_9 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageLodgedDPLH100_9 = format_AboriginalCulturalHeritageLodgedDPLH100_9.readFeatures(json_AboriginalCulturalHeritageLodgedDPLH100_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageLodgedDPLH100_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageLodgedDPLH100_9.addFeatures(features_AboriginalCulturalHeritageLodgedDPLH100_9);
var lyr_AboriginalCulturalHeritageLodgedDPLH100_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageLodgedDPLH100_9, 
                style: style_AboriginalCulturalHeritageLodgedDPLH100_9,
                popuplayertitle: "Aboriginal Cultural Heritage - Lodged (DPLH-100)",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageLodgedDPLH100_9.png" /> Aboriginal Cultural Heritage - Lodged (DPLH-100)'
            });
var format_State_Planning_Policy_Transport_Noise_Corridor_10 = new ol.format.GeoJSON();
var features_State_Planning_Policy_Transport_Noise_Corridor_10 = format_State_Planning_Policy_Transport_Noise_Corridor_10.readFeatures(json_State_Planning_Policy_Transport_Noise_Corridor_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_Planning_Policy_Transport_Noise_Corridor_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_Planning_Policy_Transport_Noise_Corridor_10.addFeatures(features_State_Planning_Policy_Transport_Noise_Corridor_10);
var lyr_State_Planning_Policy_Transport_Noise_Corridor_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_Planning_Policy_Transport_Noise_Corridor_10, 
                style: style_State_Planning_Policy_Transport_Noise_Corridor_10,
                popuplayertitle: "State_Planning_Policy_Transport_Noise_Corridor ",
                interactive: false,
                title: '<img src="styles/legend/State_Planning_Policy_Transport_Noise_Corridor_10.png" /> State_Planning_Policy_Transport_Noise_Corridor '
            });
var format_State_Planning_Policy_Perth_Airport_11 = new ol.format.GeoJSON();
var features_State_Planning_Policy_Perth_Airport_11 = format_State_Planning_Policy_Perth_Airport_11.readFeatures(json_State_Planning_Policy_Perth_Airport_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_Planning_Policy_Perth_Airport_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_Planning_Policy_Perth_Airport_11.addFeatures(features_State_Planning_Policy_Perth_Airport_11);
var lyr_State_Planning_Policy_Perth_Airport_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_Planning_Policy_Perth_Airport_11, 
                style: style_State_Planning_Policy_Perth_Airport_11,
                popuplayertitle: "State_Planning_Policy_Perth_Airport",
                interactive: false,
                title: '<img src="styles/legend/State_Planning_Policy_Perth_Airport_11.png" /> State_Planning_Policy_Perth_Airport'
            });
var format_State_Planning_Policy_Jandakot_Airport_12 = new ol.format.GeoJSON();
var features_State_Planning_Policy_Jandakot_Airport_12 = format_State_Planning_Policy_Jandakot_Airport_12.readFeatures(json_State_Planning_Policy_Jandakot_Airport_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_Planning_Policy_Jandakot_Airport_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_Planning_Policy_Jandakot_Airport_12.addFeatures(features_State_Planning_Policy_Jandakot_Airport_12);
var lyr_State_Planning_Policy_Jandakot_Airport_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_Planning_Policy_Jandakot_Airport_12, 
                style: style_State_Planning_Policy_Jandakot_Airport_12,
                popuplayertitle: "State_Planning_Policy_Jandakot_Airport",
                interactive: false,
                title: '<img src="styles/legend/State_Planning_Policy_Jandakot_Airport_12.png" /> State_Planning_Policy_Jandakot_Airport'
            });
var format_MiningTenementsDMIRS003_13 = new ol.format.GeoJSON();
var features_MiningTenementsDMIRS003_13 = format_MiningTenementsDMIRS003_13.readFeatures(json_MiningTenementsDMIRS003_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningTenementsDMIRS003_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningTenementsDMIRS003_13.addFeatures(features_MiningTenementsDMIRS003_13);
var lyr_MiningTenementsDMIRS003_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningTenementsDMIRS003_13, 
                style: style_MiningTenementsDMIRS003_13,
                popuplayertitle: "Mining Tenements (DMIRS-003)",
                interactive: false,
                title: '<img src="styles/legend/MiningTenementsDMIRS003_13.png" /> Mining Tenements (DMIRS-003)'
            });
var format_10metrecontoursDPIRD073_14 = new ol.format.GeoJSON();
var features_10metrecontoursDPIRD073_14 = format_10metrecontoursDPIRD073_14.readFeatures(json_10metrecontoursDPIRD073_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10metrecontoursDPIRD073_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10metrecontoursDPIRD073_14.addFeatures(features_10metrecontoursDPIRD073_14);
var lyr_10metrecontoursDPIRD073_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10metrecontoursDPIRD073_14, 
                style: style_10metrecontoursDPIRD073_14,
                popuplayertitle: "10 metre contours (DPIRD-073)",
                interactive: false,
                title: '<img src="styles/legend/10metrecontoursDPIRD073_14.png" /> 10 metre contours (DPIRD-073)'
            });
var format_2metrecontoursDPIRD072_15 = new ol.format.GeoJSON();
var features_2metrecontoursDPIRD072_15 = format_2metrecontoursDPIRD072_15.readFeatures(json_2metrecontoursDPIRD072_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2metrecontoursDPIRD072_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2metrecontoursDPIRD072_15.addFeatures(features_2metrecontoursDPIRD072_15);
var lyr_2metrecontoursDPIRD072_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2metrecontoursDPIRD072_15, 
                style: style_2metrecontoursDPIRD072_15,
                popuplayertitle: "2 metre contours (DPIRD-072)",
                interactive: false,
                title: '<img src="styles/legend/2metrecontoursDPIRD072_15.png" /> 2 metre contours (DPIRD-072)'
            });
var format_HeritageCouncilWAProtectionOrderDPLH004_16 = new ol.format.GeoJSON();
var features_HeritageCouncilWAProtectionOrderDPLH004_16 = format_HeritageCouncilWAProtectionOrderDPLH004_16.readFeatures(json_HeritageCouncilWAProtectionOrderDPLH004_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageCouncilWAProtectionOrderDPLH004_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageCouncilWAProtectionOrderDPLH004_16.addFeatures(features_HeritageCouncilWAProtectionOrderDPLH004_16);
var lyr_HeritageCouncilWAProtectionOrderDPLH004_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageCouncilWAProtectionOrderDPLH004_16, 
                style: style_HeritageCouncilWAProtectionOrderDPLH004_16,
                popuplayertitle: "Heritage Council WA - Protection Order (DPLH-004)",
                interactive: false,
                title: '<img src="styles/legend/HeritageCouncilWAProtectionOrderDPLH004_16.png" /> Heritage Council WA - Protection Order (DPLH-004)'
            });
var format_HeritageCouncilWAStateRegisterDPLH006_17 = new ol.format.GeoJSON();
var features_HeritageCouncilWAStateRegisterDPLH006_17 = format_HeritageCouncilWAStateRegisterDPLH006_17.readFeatures(json_HeritageCouncilWAStateRegisterDPLH006_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageCouncilWAStateRegisterDPLH006_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageCouncilWAStateRegisterDPLH006_17.addFeatures(features_HeritageCouncilWAStateRegisterDPLH006_17);
var lyr_HeritageCouncilWAStateRegisterDPLH006_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageCouncilWAStateRegisterDPLH006_17, 
                style: style_HeritageCouncilWAStateRegisterDPLH006_17,
                popuplayertitle: "Heritage Council WA - State Register (DPLH-006)",
                interactive: false,
                title: '<img src="styles/legend/HeritageCouncilWAStateRegisterDPLH006_17.png" /> Heritage Council WA - State Register (DPLH-006)'
            });
var format_HeritageCouncilWAAssessmentProgramDPLH007_18 = new ol.format.GeoJSON();
var features_HeritageCouncilWAAssessmentProgramDPLH007_18 = format_HeritageCouncilWAAssessmentProgramDPLH007_18.readFeatures(json_HeritageCouncilWAAssessmentProgramDPLH007_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageCouncilWAAssessmentProgramDPLH007_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageCouncilWAAssessmentProgramDPLH007_18.addFeatures(features_HeritageCouncilWAAssessmentProgramDPLH007_18);
var lyr_HeritageCouncilWAAssessmentProgramDPLH007_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageCouncilWAAssessmentProgramDPLH007_18, 
                style: style_HeritageCouncilWAAssessmentProgramDPLH007_18,
                popuplayertitle: "Heritage Council WA - Assessment Program (DPLH-007)",
                interactive: false,
                title: '<img src="styles/legend/HeritageCouncilWAAssessmentProgramDPLH007_18.png" /> Heritage Council WA - Assessment Program (DPLH-007)'
            });
var format_AboriginalHeritageProtectedAreasDPLH108_19 = new ol.format.GeoJSON();
var features_AboriginalHeritageProtectedAreasDPLH108_19 = format_AboriginalHeritageProtectedAreasDPLH108_19.readFeatures(json_AboriginalHeritageProtectedAreasDPLH108_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalHeritageProtectedAreasDPLH108_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalHeritageProtectedAreasDPLH108_19.addFeatures(features_AboriginalHeritageProtectedAreasDPLH108_19);
var lyr_AboriginalHeritageProtectedAreasDPLH108_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalHeritageProtectedAreasDPLH108_19, 
                style: style_AboriginalHeritageProtectedAreasDPLH108_19,
                popuplayertitle: "Aboriginal Heritage - Protected Areas (DPLH-108)",
                interactive: false,
                title: '<img src="styles/legend/AboriginalHeritageProtectedAreasDPLH108_19.png" /> Aboriginal Heritage - Protected Areas (DPLH-108)'
            });
var format_SPP_28BushForeverProposedandExisting_20 = new ol.format.GeoJSON();
var features_SPP_28BushForeverProposedandExisting_20 = format_SPP_28BushForeverProposedandExisting_20.readFeatures(json_SPP_28BushForeverProposedandExisting_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPP_28BushForeverProposedandExisting_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPP_28BushForeverProposedandExisting_20.addFeatures(features_SPP_28BushForeverProposedandExisting_20);
var lyr_SPP_28BushForeverProposedandExisting_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPP_28BushForeverProposedandExisting_20, 
                style: style_SPP_28BushForeverProposedandExisting_20,
                popuplayertitle: "SPP_2.8 Bush Forever Proposed and Existing",
                interactive: false,
                title: '<img src="styles/legend/SPP_28BushForeverProposedandExisting_20.png" /> SPP_2.8 Bush Forever Proposed and Existing'
            });
var format_SPP_2Bushforeverexisting_21 = new ol.format.GeoJSON();
var features_SPP_2Bushforeverexisting_21 = format_SPP_2Bushforeverexisting_21.readFeatures(json_SPP_2Bushforeverexisting_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPP_2Bushforeverexisting_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPP_2Bushforeverexisting_21.addFeatures(features_SPP_2Bushforeverexisting_21);
var lyr_SPP_2Bushforeverexisting_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPP_2Bushforeverexisting_21, 
                style: style_SPP_2Bushforeverexisting_21,
                popuplayertitle: "SPP_2.Bush forever existing",
                interactive: false,
                title: '<img src="styles/legend/SPP_2Bushforeverexisting_21.png" /> SPP_2.Bush forever existing'
            });
var format_RegionSchemeSpecialAreasDPLH022_22 = new ol.format.GeoJSON();
var features_RegionSchemeSpecialAreasDPLH022_22 = format_RegionSchemeSpecialAreasDPLH022_22.readFeatures(json_RegionSchemeSpecialAreasDPLH022_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionSchemeSpecialAreasDPLH022_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionSchemeSpecialAreasDPLH022_22.addFeatures(features_RegionSchemeSpecialAreasDPLH022_22);
var lyr_RegionSchemeSpecialAreasDPLH022_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionSchemeSpecialAreasDPLH022_22, 
                style: style_RegionSchemeSpecialAreasDPLH022_22,
                popuplayertitle: "Region Scheme - Special Areas (DPLH-022)",
                interactive: false,
                title: '<img src="styles/legend/RegionSchemeSpecialAreasDPLH022_22.png" /> Region Scheme - Special Areas (DPLH-022)'
            });
var format_WAPetroleumPipeline_23 = new ol.format.GeoJSON();
var features_WAPetroleumPipeline_23 = format_WAPetroleumPipeline_23.readFeatures(json_WAPetroleumPipeline_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAPetroleumPipeline_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAPetroleumPipeline_23.addFeatures(features_WAPetroleumPipeline_23);
var lyr_WAPetroleumPipeline_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAPetroleumPipeline_23, 
                style: style_WAPetroleumPipeline_23,
                popuplayertitle: "WA Petroleum Pipeline",
                interactive: false,
                title: '<img src="styles/legend/WAPetroleumPipeline_23.png" /> WA Petroleum Pipeline'
            });
var format_Floodway_24 = new ol.format.GeoJSON();
var features_Floodway_24 = format_Floodway_24.readFeatures(json_Floodway_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodway_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Floodway_24.addFeatures(features_Floodway_24);
var lyr_Floodway_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Floodway_24, 
                style: style_Floodway_24,
                popuplayertitle: "Floodway",
                interactive: false,
                title: '<img src="styles/legend/Floodway_24.png" /> Floodway'
            });
var format_HeritageAreasDPLH089_25 = new ol.format.GeoJSON();
var features_HeritageAreasDPLH089_25 = format_HeritageAreasDPLH089_25.readFeatures(json_HeritageAreasDPLH089_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageAreasDPLH089_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageAreasDPLH089_25.addFeatures(features_HeritageAreasDPLH089_25);
var lyr_HeritageAreasDPLH089_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageAreasDPLH089_25, 
                style: style_HeritageAreasDPLH089_25,
                popuplayertitle: "Heritage Areas (DPLH-089)",
                interactive: false,
                title: '<img src="styles/legend/HeritageAreasDPLH089_25.png" /> Heritage Areas (DPLH-089)'
            });
var format_HeritageListDPLH090_26 = new ol.format.GeoJSON();
var features_HeritageListDPLH090_26 = format_HeritageListDPLH090_26.readFeatures(json_HeritageListDPLH090_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageListDPLH090_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageListDPLH090_26.addFeatures(features_HeritageListDPLH090_26);
var lyr_HeritageListDPLH090_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageListDPLH090_26, 
                style: style_HeritageListDPLH090_26,
                popuplayertitle: "Heritage List (DPLH-090)",
                interactive: false,
                title: '<img src="styles/legend/HeritageListDPLH090_26.png" /> Heritage List (DPLH-090)'
            });
var format_HeritageCouncilWAHeritageAggreements_27 = new ol.format.GeoJSON();
var features_HeritageCouncilWAHeritageAggreements_27 = format_HeritageCouncilWAHeritageAggreements_27.readFeatures(json_HeritageCouncilWAHeritageAggreements_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageCouncilWAHeritageAggreements_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageCouncilWAHeritageAggreements_27.addFeatures(features_HeritageCouncilWAHeritageAggreements_27);
var lyr_HeritageCouncilWAHeritageAggreements_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageCouncilWAHeritageAggreements_27, 
                style: style_HeritageCouncilWAHeritageAggreements_27,
                popuplayertitle: "Heritage Council WA Heritage Aggreements",
                interactive: false,
                title: '<img src="styles/legend/HeritageCouncilWAHeritageAggreements_27.png" /> Heritage Council WA Heritage Aggreements'
            });
var format_LocalHeritageSurvey_28 = new ol.format.GeoJSON();
var features_LocalHeritageSurvey_28 = format_LocalHeritageSurvey_28.readFeatures(json_LocalHeritageSurvey_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalHeritageSurvey_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalHeritageSurvey_28.addFeatures(features_LocalHeritageSurvey_28);
var lyr_LocalHeritageSurvey_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalHeritageSurvey_28, 
                style: style_LocalHeritageSurvey_28,
                popuplayertitle: "Local Heritage Survey",
                interactive: false,
                title: '<img src="styles/legend/LocalHeritageSurvey_28.png" /> Local Heritage Survey'
            });
var format_RezoneParcels_29 = new ol.format.GeoJSON();
var features_RezoneParcels_29 = format_RezoneParcels_29.readFeatures(json_RezoneParcels_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RezoneParcels_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RezoneParcels_29.addFeatures(features_RezoneParcels_29);
var lyr_RezoneParcels_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RezoneParcels_29, 
                style: style_RezoneParcels_29,
                popuplayertitle: "Rezone Parcels",
                interactive: true,
                title: '<img src="styles/legend/RezoneParcels_29.png" /> Rezone Parcels'
            });
var format_ZonedParcels_30 = new ol.format.GeoJSON();
var features_ZonedParcels_30 = format_ZonedParcels_30.readFeatures(json_ZonedParcels_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonedParcels_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedParcels_30.addFeatures(features_ZonedParcels_30);
var lyr_ZonedParcels_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedParcels_30, 
                style: style_ZonedParcels_30,
                popuplayertitle: "Zoned Parcels",
                interactive: true,
                title: '<img src="styles/legend/ZonedParcels_30.png" /> Zoned Parcels'
            });
var format_MajorLandOwner_31 = new ol.format.GeoJSON();
var features_MajorLandOwner_31 = format_MajorLandOwner_31.readFeatures(json_MajorLandOwner_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorLandOwner_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLandOwner_31.addFeatures(features_MajorLandOwner_31);
var lyr_MajorLandOwner_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLandOwner_31, 
                style: style_MajorLandOwner_31,
                popuplayertitle: "Major Land Owner",
                interactive: false,
    title: 'Major Land Owner<br />\
    <img src="styles/legend/MajorLandOwner_31_0.png" /> DAVID ROSS MCLARTY<br />\
    <img src="styles/legend/MajorLandOwner_31_1.png" /> FRANK ANTHONY MAGNABOSCO<br />\
    <img src="styles/legend/MajorLandOwner_31_2.png" /> MANDEE MICHELLE HUMICH<br />\
    <img src="styles/legend/MajorLandOwner_31_3.png" /> MANDEE MICHELLE HUMICH; KATHLEEN JESSICA HUMICH<br />\
    <img src="styles/legend/MajorLandOwner_31_4.png" /> STEPHEN GARY PALMER<br />\
    <img src="styles/legend/MajorLandOwner_31_5.png" /> TIMOTHY JONATHAN EMANUEL<br />'
        });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_RezoneParcels_29,lyr_ZonedParcels_30,lyr_MajorLandOwner_31,],
                                fold: "open",
                                title: "Administrative"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_HeritageCouncilWAProtectionOrderDPLH004_16,lyr_HeritageCouncilWAStateRegisterDPLH006_17,lyr_HeritageCouncilWAAssessmentProgramDPLH007_18,lyr_AboriginalHeritageProtectedAreasDPLH108_19,lyr_SPP_28BushForeverProposedandExisting_20,lyr_SPP_2Bushforeverexisting_21,lyr_RegionSchemeSpecialAreasDPLH022_22,lyr_WAPetroleumPipeline_23,lyr_Floodway_24,lyr_HeritageAreasDPLH089_25,lyr_HeritageListDPLH090_26,lyr_HeritageCouncilWAHeritageAggreements_27,lyr_LocalHeritageSurvey_28,],
                                fold: "open",
                                title: "NDH Deducted Overlays"});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_AboriginalCulturalHeritageSurveyAreasDPLH080_3,lyr_AcidSulfateSoilRiskMap50KDWER049_4,lyr_BushFireProneAreas2021OBRM019_5,lyr_Floodfringe_6,lyr_AboriginalCulturalHeritageRegisterDPLH099_7,lyr_AboriginalCulturalHeritageHistoricDPLH098_8,lyr_AboriginalCulturalHeritageLodgedDPLH100_9,lyr_State_Planning_Policy_Transport_Noise_Corridor_10,lyr_State_Planning_Policy_Perth_Airport_11,lyr_State_Planning_Policy_Jandakot_Airport_12,lyr_MiningTenementsDMIRS003_13,lyr_10metrecontoursDPIRD073_14,lyr_2metrecontoursDPIRD072_15,],
                                fold: "open",
                                title: "Note to Due Diligence"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layers"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_PerthandPeelLandUse_2.setVisible(false);lyr_AboriginalCulturalHeritageSurveyAreasDPLH080_3.setVisible(false);lyr_AcidSulfateSoilRiskMap50KDWER049_4.setVisible(false);lyr_BushFireProneAreas2021OBRM019_5.setVisible(false);lyr_Floodfringe_6.setVisible(false);lyr_AboriginalCulturalHeritageRegisterDPLH099_7.setVisible(false);lyr_AboriginalCulturalHeritageHistoricDPLH098_8.setVisible(false);lyr_AboriginalCulturalHeritageLodgedDPLH100_9.setVisible(false);lyr_State_Planning_Policy_Transport_Noise_Corridor_10.setVisible(false);lyr_State_Planning_Policy_Perth_Airport_11.setVisible(false);lyr_State_Planning_Policy_Jandakot_Airport_12.setVisible(false);lyr_MiningTenementsDMIRS003_13.setVisible(false);lyr_10metrecontoursDPIRD073_14.setVisible(false);lyr_2metrecontoursDPIRD072_15.setVisible(false);lyr_HeritageCouncilWAProtectionOrderDPLH004_16.setVisible(false);lyr_HeritageCouncilWAStateRegisterDPLH006_17.setVisible(false);lyr_HeritageCouncilWAAssessmentProgramDPLH007_18.setVisible(false);lyr_AboriginalHeritageProtectedAreasDPLH108_19.setVisible(false);lyr_SPP_28BushForeverProposedandExisting_20.setVisible(false);lyr_SPP_2Bushforeverexisting_21.setVisible(false);lyr_RegionSchemeSpecialAreasDPLH022_22.setVisible(false);lyr_WAPetroleumPipeline_23.setVisible(false);lyr_Floodway_24.setVisible(false);lyr_HeritageAreasDPLH089_25.setVisible(false);lyr_HeritageListDPLH090_26.setVisible(false);lyr_HeritageCouncilWAHeritageAggreements_27.setVisible(false);lyr_LocalHeritageSurvey_28.setVisible(false);lyr_RezoneParcels_29.setVisible(true);lyr_ZonedParcels_30.setVisible(true);lyr_MajorLandOwner_31.setVisible(true);
var layersList = [group_BaseLayers,lyr_PerthandPeelLandUse_2,group_NotetoDueDiligence,group_NDHDeductedOverlays,group_Administrative];
lyr_PerthandPeelLandUse_2.set('fieldAliases', {'LUSUBTYPE': 'LUSUBTYPE', 'name': 'name', 'Address': 'Address', 'land_id': 'land_id', 'Area': 'Area', });
lyr_AboriginalCulturalHeritageSurveyAreasDPLH080_3.set('fieldAliases', {'objectid': 'objectid', 'survey_rep': 'survey_rep', 'survey_r_1': 'survey_r_1', 'survey_are': 'survey_are', 'survey_a_1': 'survey_a_1', 'legacy_are': 'legacy_are', 'report_tit': 'report_tit', 'report_aut': 'report_aut', 'area_descr': 'area_descr', 'survey_typ': 'survey_typ', 'spatial_ac': 'spatial_ac', 'field_surv': 'field_surv', 'desktop_su': 'desktop_su', 'boundary_l': 'boundary_l', });
lyr_AcidSulfateSoilRiskMap50KDWER049_4.set('fieldAliases', {'objectid': 'objectid', 'createdate': 'createdate', 'capture': 'capture', 'riskclass': 'riskclass', 'risk_categ': 'risk_categ', 'natcode': 'natcode', });
lyr_BushFireProneAreas2021OBRM019_5.set('fieldAliases', {'objectid': 'objectid', 'lga': 'lga', 'designatio': 'designatio', 'type': 'type', 'designat_1': 'designat_1', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_Floodfringe_6.set('fieldAliases', {'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'online': 'online', });
lyr_AboriginalCulturalHeritageRegisterDPLH099_7.set('fieldAliases', {'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageHistoricDPLH098_8.set('fieldAliases', {'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageLodgedDPLH100_9.set('fieldAliases', {'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_State_Planning_Policy_Transport_Noise_Corridor_10.set('fieldAliases', {'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_State_Planning_Policy_Perth_Airport_11.set('fieldAliases', {'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_State_Planning_Policy_Jandakot_Airport_12.set('fieldAliases', {'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_MiningTenementsDMIRS003_13.set('fieldAliases', {'oid': 'oid', 'gid': 'gid', 'tenid': 'tenid', 'type': 'type', 'survstatus': 'survstatus', 'tenstatus': 'tenstatus', 'holdercnt': 'holdercnt', 'holder1': 'holder1', 'addr1': 'addr1', 'holder2': 'holder2', 'addr2': 'addr2', 'holder3': 'holder3', 'addr3': 'addr3', 'holder4': 'holder4', 'addr4': 'addr4', 'holder5': 'holder5', 'addr5': 'addr5', 'holder6': 'holder6', 'addr6': 'addr6', 'holder7': 'holder7', 'addr7': 'addr7', 'holder8': 'holder8', 'addr8': 'addr8', 'holder9': 'holder9', 'addr9': 'addr9', 'fmt_tenid': 'fmt_tenid', 'legal_area': 'legal_area', 'unit_of_me': 'unit_of_me', 'special_in': 'special_in', 'extract_da': 'extract_da', 'grantdate': 'grantdate', 'granttime': 'granttime', 'startdate': 'startdate', 'starttime': 'starttime', 'enddate': 'enddate', 'endtime': 'endtime', 'st_area(th': 'st_area(th', 'st_perimet': 'st_perimet', });
lyr_10metrecontoursDPIRD073_14.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'elevation': 'elevation', });
lyr_2metrecontoursDPIRD072_15.set('fieldAliases', {'objectid': 'objectid', 'elevation_m': 'Elevation (m)', });
lyr_HeritageCouncilWAProtectionOrderDPLH004_16.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_HeritageCouncilWAStateRegisterDPLH006_17.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_HeritageCouncilWAAssessmentProgramDPLH007_18.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_AboriginalHeritageProtectedAreasDPLH108_19.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'protecteda': 'protecteda', 'place_name': 'place_name', 'gazette_da': 'gazette_da', 'conditions': 'conditions', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_SPP_28BushForeverProposedandExisting_20.set('fieldAliases', {'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'version': 'version', 'policy_num': 'policy_num', });
lyr_SPP_2Bushforeverexisting_21.set('fieldAliases', {'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'version': 'version', 'policy_num': 'policy_num', });
lyr_RegionSchemeSpecialAreasDPLH022_22.set('fieldAliases', {'objectid': 'objectid', 'rs_code': 'rs_code', 'descriptio': 'descriptio', 'site_no': 'site_no', 'label': 'label', 'reg_scheme': 'reg_scheme', });
lyr_WAPetroleumPipeline_23.set('fieldAliases', {'oid': 'oid', 'gid': 'gid', 'title_id': 'title_id', 'type': 'type', 'issued': 'issued', 'expiry': 'expiry', 'status': 'status', 'act_abbrev': 'act_abbrev', 'coverage': 'coverage', 'holder_1': 'holder_1', 'holder_2': 'holder_2', 'holder_3': 'holder_3', 'holder_4': 'holder_4', 'holder_5': 'holder_5', 'holder_6': 'holder_6', 'holder_7': 'holder_7', 'holder_8': 'holder_8', 'purpose': 'purpose', 'name': 'name', 'start_poin': 'start_poin', 'end_point': 'end_point', 'built': 'built', 'extract_da': 'extract_da', 'st_area(th': 'st_area(th', 'st_perimet': 'st_perimet', });
lyr_Floodway_24.set('fieldAliases', {'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'online': 'online', });
lyr_HeritageAreasDPLH089_25.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'more_info': 'more_info', 'shape_leng': 'shape_leng', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_HeritageListDPLH090_26.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'more_info': 'more_info', 'shape_leng': 'shape_leng', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_HeritageCouncilWAHeritageAggreements_27.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_LocalHeritageSurvey_28.set('fieldAliases', {'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_RezoneParcels_29.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'locality': 'locality', 'Gross HA': 'Gross HA', 'zoned_ha': 'zoned_ha', 'REMARKS': 'REMARKS', 'NDH': 'NDH', 'Zone': 'Zone', 'Comb_Gross': 'Comb_Gross', 'OverlayHA': 'OverlayHA', 'Total_Ovl': 'Total_Ovl', 'TotalNDH': 'TotalNDH', 'Directors': 'Directors', 'Lead Link': 'Lead Link', });
lyr_ZonedParcels_30.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'locality': 'locality', 'Gross HA': 'Gross HA', 'zoned_ha': 'zoned_ha', 'REMARKS': 'REMARKS', 'NDH': 'NDH', 'Zone': 'Zone', 'Comb_Gross': 'Comb_Gross', 'OverlayHA': 'OverlayHA', 'Total_Ovl': 'Total_Ovl', 'TotalNDH': 'TotalNDH', 'Directors': 'Directors', 'Lead Link': 'Lead Link', });
lyr_MajorLandOwner_31.set('fieldAliases', {'fid': 'fid', 'locality': 'locality', 'area_ha': 'area_ha', 'zoned_ha': 'zoned_ha', 'Address,': 'Address,', 'REMARKS': 'REMARKS', 'NDH': 'NDH', 'Lead Link': 'Lead Link', 'Zone': 'Zone', 'Pri_Vendor': 'Pri_Vendor', 'Comb_Gross': 'Comb_Gross', 'OverlayHA': 'OverlayHA', 'Total_Ovl': 'Total_Ovl', 'TotalNDH': 'TotalNDH', });
lyr_PerthandPeelLandUse_2.set('fieldImages', {'LUSUBTYPE': 'TextEdit', 'name': 'TextEdit', 'Address': 'TextEdit', 'land_id': 'TextEdit', 'Area': 'TextEdit', });
lyr_AboriginalCulturalHeritageSurveyAreasDPLH080_3.set('fieldImages', {'objectid': 'TextEdit', 'survey_rep': 'TextEdit', 'survey_r_1': 'TextEdit', 'survey_are': 'TextEdit', 'survey_a_1': 'TextEdit', 'legacy_are': 'TextEdit', 'report_tit': 'TextEdit', 'report_aut': 'TextEdit', 'area_descr': 'TextEdit', 'survey_typ': 'TextEdit', 'spatial_ac': 'TextEdit', 'field_surv': 'TextEdit', 'desktop_su': 'TextEdit', 'boundary_l': 'TextEdit', });
lyr_AcidSulfateSoilRiskMap50KDWER049_4.set('fieldImages', {'objectid': 'TextEdit', 'createdate': 'TextEdit', 'capture': 'TextEdit', 'riskclass': 'TextEdit', 'risk_categ': 'TextEdit', 'natcode': 'TextEdit', });
lyr_BushFireProneAreas2021OBRM019_5.set('fieldImages', {'objectid': 'TextEdit', 'lga': 'TextEdit', 'designatio': 'TextEdit', 'type': 'TextEdit', 'designat_1': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Floodfringe_6.set('fieldImages', {'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'online': 'TextEdit', });
lyr_AboriginalCulturalHeritageRegisterDPLH099_7.set('fieldImages', {'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageHistoricDPLH098_8.set('fieldImages', {'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageLodgedDPLH100_9.set('fieldImages', {'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_State_Planning_Policy_Transport_Noise_Corridor_10.set('fieldImages', {'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_State_Planning_Policy_Perth_Airport_11.set('fieldImages', {'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_State_Planning_Policy_Jandakot_Airport_12.set('fieldImages', {'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_MiningTenementsDMIRS003_13.set('fieldImages', {'oid': 'TextEdit', 'gid': 'TextEdit', 'tenid': 'TextEdit', 'type': 'TextEdit', 'survstatus': 'TextEdit', 'tenstatus': 'TextEdit', 'holdercnt': 'TextEdit', 'holder1': 'TextEdit', 'addr1': 'TextEdit', 'holder2': 'TextEdit', 'addr2': 'TextEdit', 'holder3': 'TextEdit', 'addr3': 'TextEdit', 'holder4': 'TextEdit', 'addr4': 'TextEdit', 'holder5': 'TextEdit', 'addr5': 'TextEdit', 'holder6': 'TextEdit', 'addr6': 'TextEdit', 'holder7': 'TextEdit', 'addr7': 'TextEdit', 'holder8': 'TextEdit', 'addr8': 'TextEdit', 'holder9': 'TextEdit', 'addr9': 'TextEdit', 'fmt_tenid': 'TextEdit', 'legal_area': 'TextEdit', 'unit_of_me': 'TextEdit', 'special_in': 'TextEdit', 'extract_da': 'TextEdit', 'grantdate': 'TextEdit', 'granttime': 'TextEdit', 'startdate': 'TextEdit', 'starttime': 'TextEdit', 'enddate': 'TextEdit', 'endtime': 'TextEdit', 'st_area(th': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_10metrecontoursDPIRD073_14.set('fieldImages', {'objectid': 'TextEdit', 'id': 'TextEdit', 'elevation': 'TextEdit', });
lyr_2metrecontoursDPIRD072_15.set('fieldImages', {'objectid': '', 'elevation_m': '', });
lyr_HeritageCouncilWAProtectionOrderDPLH004_16.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_HeritageCouncilWAStateRegisterDPLH006_17.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_HeritageCouncilWAAssessmentProgramDPLH007_18.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_AboriginalHeritageProtectedAreasDPLH108_19.set('fieldImages', {'objectid': 'TextEdit', 'id': 'TextEdit', 'protecteda': 'TextEdit', 'place_name': 'TextEdit', 'gazette_da': 'TextEdit', 'conditions': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_SPP_28BushForeverProposedandExisting_20.set('fieldImages', {'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'version': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_SPP_2Bushforeverexisting_21.set('fieldImages', {'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'version': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_RegionSchemeSpecialAreasDPLH022_22.set('fieldImages', {'objectid': 'TextEdit', 'rs_code': 'TextEdit', 'descriptio': 'TextEdit', 'site_no': 'TextEdit', 'label': 'TextEdit', 'reg_scheme': 'TextEdit', });
lyr_WAPetroleumPipeline_23.set('fieldImages', {'oid': 'TextEdit', 'gid': 'TextEdit', 'title_id': 'TextEdit', 'type': 'TextEdit', 'issued': 'TextEdit', 'expiry': 'TextEdit', 'status': 'TextEdit', 'act_abbrev': 'TextEdit', 'coverage': 'TextEdit', 'holder_1': 'TextEdit', 'holder_2': 'TextEdit', 'holder_3': 'TextEdit', 'holder_4': 'TextEdit', 'holder_5': 'TextEdit', 'holder_6': 'TextEdit', 'holder_7': 'TextEdit', 'holder_8': 'TextEdit', 'purpose': 'TextEdit', 'name': 'TextEdit', 'start_poin': 'TextEdit', 'end_point': 'TextEdit', 'built': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(th': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Floodway_24.set('fieldImages', {'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'online': 'TextEdit', });
lyr_HeritageAreasDPLH089_25.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'more_info': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_HeritageListDPLH090_26.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'more_info': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_HeritageCouncilWAHeritageAggreements_27.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_LocalHeritageSurvey_28.set('fieldImages', {'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_RezoneParcels_29.set('fieldImages', {'fid': '', 'Address': '', 'locality': '', 'Gross HA': '', 'zoned_ha': '', 'REMARKS': '', 'NDH': '', 'Zone': '', 'Comb_Gross': '', 'OverlayHA': '', 'Total_Ovl': '', 'TotalNDH': '', 'Directors': '', 'Lead Link': '', });
lyr_ZonedParcels_30.set('fieldImages', {'fid': '', 'Address': '', 'locality': '', 'Gross HA': '', 'zoned_ha': '', 'REMARKS': '', 'NDH': '', 'Zone': '', 'Comb_Gross': '', 'OverlayHA': '', 'Total_Ovl': '', 'TotalNDH': '', 'Directors': '', 'Lead Link': '', });
lyr_MajorLandOwner_31.set('fieldImages', {'fid': 'TextEdit', 'locality': 'TextEdit', 'area_ha': 'TextEdit', 'zoned_ha': 'TextEdit', 'Address,': 'TextEdit', 'REMARKS': 'TextEdit', 'NDH': 'TextEdit', 'Lead Link': 'TextEdit', 'Zone': 'TextEdit', 'Pri_Vendor': 'TextEdit', 'Comb_Gross': 'TextEdit', 'OverlayHA': 'TextEdit', 'Total_Ovl': 'TextEdit', 'TotalNDH': 'TextEdit', });
lyr_PerthandPeelLandUse_2.set('fieldLabels', {'LUSUBTYPE': 'hidden field', 'name': 'hidden field', 'Address': 'hidden field', 'land_id': 'hidden field', 'Area': 'hidden field', });
lyr_AboriginalCulturalHeritageSurveyAreasDPLH080_3.set('fieldLabels', {'objectid': 'hidden field', 'survey_rep': 'hidden field', 'survey_r_1': 'hidden field', 'survey_are': 'hidden field', 'survey_a_1': 'hidden field', 'legacy_are': 'hidden field', 'report_tit': 'hidden field', 'report_aut': 'hidden field', 'area_descr': 'hidden field', 'survey_typ': 'hidden field', 'spatial_ac': 'hidden field', 'field_surv': 'hidden field', 'desktop_su': 'hidden field', 'boundary_l': 'hidden field', });
lyr_AcidSulfateSoilRiskMap50KDWER049_4.set('fieldLabels', {'objectid': 'hidden field', 'createdate': 'hidden field', 'capture': 'hidden field', 'riskclass': 'hidden field', 'risk_categ': 'hidden field', 'natcode': 'hidden field', });
lyr_BushFireProneAreas2021OBRM019_5.set('fieldLabels', {'objectid': 'hidden field', 'lga': 'hidden field', 'designatio': 'hidden field', 'type': 'hidden field', 'designat_1': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_Floodfringe_6.set('fieldLabels', {'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'online': 'hidden field', });
lyr_AboriginalCulturalHeritageRegisterDPLH099_7.set('fieldLabels', {'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageHistoricDPLH098_8.set('fieldLabels', {'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageLodgedDPLH100_9.set('fieldLabels', {'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_State_Planning_Policy_Transport_Noise_Corridor_10.set('fieldLabels', {'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_State_Planning_Policy_Perth_Airport_11.set('fieldLabels', {'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_State_Planning_Policy_Jandakot_Airport_12.set('fieldLabels', {'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_MiningTenementsDMIRS003_13.set('fieldLabels', {'oid': 'hidden field', 'gid': 'hidden field', 'tenid': 'hidden field', 'type': 'hidden field', 'survstatus': 'hidden field', 'tenstatus': 'hidden field', 'holdercnt': 'hidden field', 'holder1': 'hidden field', 'addr1': 'hidden field', 'holder2': 'hidden field', 'addr2': 'hidden field', 'holder3': 'hidden field', 'addr3': 'hidden field', 'holder4': 'hidden field', 'addr4': 'hidden field', 'holder5': 'hidden field', 'addr5': 'hidden field', 'holder6': 'hidden field', 'addr6': 'hidden field', 'holder7': 'hidden field', 'addr7': 'hidden field', 'holder8': 'hidden field', 'addr8': 'hidden field', 'holder9': 'hidden field', 'addr9': 'hidden field', 'fmt_tenid': 'hidden field', 'legal_area': 'hidden field', 'unit_of_me': 'hidden field', 'special_in': 'hidden field', 'extract_da': 'hidden field', 'grantdate': 'hidden field', 'granttime': 'hidden field', 'startdate': 'hidden field', 'starttime': 'hidden field', 'enddate': 'hidden field', 'endtime': 'hidden field', 'st_area(th': 'hidden field', 'st_perimet': 'hidden field', });
lyr_10metrecontoursDPIRD073_14.set('fieldLabels', {'objectid': 'hidden field', 'id': 'hidden field', 'elevation': 'hidden field', });
lyr_2metrecontoursDPIRD072_15.set('fieldLabels', {'objectid': 'hidden field', 'elevation_m': 'hidden field', });
lyr_HeritageCouncilWAProtectionOrderDPLH004_16.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_HeritageCouncilWAStateRegisterDPLH006_17.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_HeritageCouncilWAAssessmentProgramDPLH007_18.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_AboriginalHeritageProtectedAreasDPLH108_19.set('fieldLabels', {'objectid': 'hidden field', 'id': 'hidden field', 'protecteda': 'hidden field', 'place_name': 'hidden field', 'gazette_da': 'hidden field', 'conditions': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_SPP_28BushForeverProposedandExisting_20.set('fieldLabels', {'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'version': 'hidden field', 'policy_num': 'hidden field', });
lyr_SPP_2Bushforeverexisting_21.set('fieldLabels', {'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'version': 'hidden field', 'policy_num': 'hidden field', });
lyr_RegionSchemeSpecialAreasDPLH022_22.set('fieldLabels', {'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'site_no': 'hidden field', 'label': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_WAPetroleumPipeline_23.set('fieldLabels', {'oid': 'hidden field', 'gid': 'hidden field', 'title_id': 'hidden field', 'type': 'hidden field', 'issued': 'hidden field', 'expiry': 'hidden field', 'status': 'hidden field', 'act_abbrev': 'hidden field', 'coverage': 'hidden field', 'holder_1': 'hidden field', 'holder_2': 'hidden field', 'holder_3': 'hidden field', 'holder_4': 'hidden field', 'holder_5': 'hidden field', 'holder_6': 'hidden field', 'holder_7': 'hidden field', 'holder_8': 'hidden field', 'purpose': 'hidden field', 'name': 'hidden field', 'start_poin': 'hidden field', 'end_point': 'hidden field', 'built': 'hidden field', 'extract_da': 'hidden field', 'st_area(th': 'hidden field', 'st_perimet': 'hidden field', });
lyr_Floodway_24.set('fieldLabels', {'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'online': 'hidden field', });
lyr_HeritageAreasDPLH089_25.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'more_info': 'hidden field', 'shape_leng': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_HeritageListDPLH090_26.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'more_info': 'hidden field', 'shape_leng': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_HeritageCouncilWAHeritageAggreements_27.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_LocalHeritageSurvey_28.set('fieldLabels', {'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_RezoneParcels_29.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'locality': 'hidden field', 'Gross HA': 'inline label - visible with data', 'zoned_ha': 'hidden field', 'REMARKS': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Comb_Gross': 'inline label - visible with data', 'OverlayHA': 'hidden field', 'Total_Ovl': 'hidden field', 'TotalNDH': 'inline label - visible with data', 'Directors': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_ZonedParcels_30.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'locality': 'hidden field', 'Gross HA': 'inline label - visible with data', 'zoned_ha': 'hidden field', 'REMARKS': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Comb_Gross': 'inline label - visible with data', 'OverlayHA': 'hidden field', 'Total_Ovl': 'hidden field', 'TotalNDH': 'inline label - visible with data', 'Directors': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_MajorLandOwner_31.set('fieldLabels', {'fid': 'hidden field', 'locality': 'hidden field', 'area_ha': 'hidden field', 'zoned_ha': 'hidden field', 'Address,': 'hidden field', 'REMARKS': 'hidden field', 'NDH': 'hidden field', 'Lead Link': 'hidden field', 'Zone': 'hidden field', 'Pri_Vendor': 'hidden field', 'Comb_Gross': 'hidden field', 'OverlayHA': 'hidden field', 'Total_Ovl': 'hidden field', 'TotalNDH': 'hidden field', });
lyr_MajorLandOwner_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});