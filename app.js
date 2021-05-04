
function buildPlot(id) {

    //grab json data
    d3.json("samples.json").then((data) => {
        console.log(data);

        // grab top 10 sample values
        var sampleValues = data.samples[0].sample_values.slice(0, 10).reverse();

        // otu IDs
        var otuID = data.samples[0].otu_ids;
        console.log(otuID)

        // grab top 10 labels
        var otuLabel = (data.samples[0].otu_labels.slice(0, 10)).reverse();


        // convert id to string
        var filtered = data.samples.filter(s => s.id.toString() === id)[0];

        // map
        var mapID = otuLabel.map(d => "OTU" + d);
        console.log(mapID)

        // trace1 array
        var trace1 = {
            type: "bar",
            x: sampleValues,
            y: mapID,
            orientation: "h"
        };
        // layout
        var layout = {
            title: `Top 10 OTU's`,
            xaxis: { title: "Frequency" },
            yaxis: { title: "OTU Type" }
        };
        // create trace
        var data = [trace1];

        // plot!
        Plotly.newPlot("bar", data, layout);


        // bubble trace
        var bubbleTrace = {
            x: otuID,
            y: sampleValues,
            mode: "markers",
            marker: {
                size: sampleValues,
                color: otuID
            },
            text: otuLabel
        };
        // Plot!
        Plotly.newPlot("bubble", bubbleTrace);
    });
};

buildPlot(2);