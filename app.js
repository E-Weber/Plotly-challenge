
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
        // create trace
        var data = [trace1];
        // layout
        var layout = {
            title: `Top 10 OTU's`,
            xaxis: { title: "Frequency" },
            yaxis: { title: "OTU Type" }
        };

        // plot!
        Plotly.newPlot("bar", data, layout);


        // bubble trace
        // var bubbleTrace = {
        //     x: filtered.otu_ids,
        //     y: filtered.sample_values,
        //     mode: "markers",
        //     marker: {
        //         size: filtered.sample_values,
        //         color: filtered.otu_ids
        //     },
        //     text: filtered.otu_labels,
        // };

        // var bubbleData = [bubbleTrace]
        // // Plot!
        // Plotly.newPlot("bubble", bubbleTrace);
    });
};
buildPlot(1);

// new function
function buildMeta(id) {
    d3.json("samples.json").then(data => {
        var metaData = data.metadata;
        console.log(metaData);

        // filter by id
        var metaFilter = metaData.filter(meta => meta.id.toString() === id);


        var select = d3.select("#sample-metaData");
        console.log(metaData)

        // clear
        select.html("");


        Object.entries(metaFilter).forEach(([key, value]) => {
            select.append("h5").text(`${key}: ${value}`);
        });
    });
};
buildMeta(1)