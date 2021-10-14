var vg_1 = "healthy_life_expectancy.vg.json";
var vg_2 = "flowchart.vg.json";
var vg_3 = "radial_chart.vg.json";

vegaEmbed('#vis1', vg_1, {"actions": false});

vegaEmbed('#vis2', vg_2, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#vis3', vg_3, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
