var size = 0;
var placement = 'point';
function categories_StructurePlanBoundaries_37(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'District structure plan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,223,1.0)', lineDash: [53.199999999999996,10.639999999999999,21.279999999999998,10.639999999999999,21.279999999999998,10.639999999999999], lineCap: 'butt', lineJoin: 'miter', width: 10.639999999999999}),fill: new ol.style.Fill({color: 'rgba(157,223,95,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Structure plan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,0,1.0)', lineDash: [53.199999999999996,10.639999999999999,21.279999999999998,10.639999999999999,21.279999999999998,10.639999999999999], lineCap: 'butt', lineJoin: 'miter', width: 10.639999999999999}),fill: new ol.style.Fill({color: 'rgba(204,47,123,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_StructurePlanBoundaries_37 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("type");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_StructurePlanBoundaries_37(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
