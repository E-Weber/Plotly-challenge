
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


        //bubble trace
        var bubbleTrace = {
            x: filtered.otu_ids,
            y: filtered.sample_values,
            mode: "markers",
            marker: {
                size: filtered.sample_values,
                color: filtered.otu_ids
            },
            text: filtered.otu_labels,
        };

        var bubbleData = [bubbleTrace]

        // Plot!
        Plotly.newPlot("bubble", bubbleData);
    });
};


// new function
function buildMeta(id) {
    d3.json("samples.json").then((data) => {

        var metaData = data.metadata;
        console.log(metaData);

        // filter by id
        var metaFilter = metaData.filter(meta => meta.id.toString() == id[0]);


        var selectInfo = d3.select("#sample-metadata");
        console.log(selectInfo)

        // clear
        selectInfo.html("");


        Object.entries(metaFilter).forEach((key) => {
            selectInfo.append("h5").text(key[0]);
        });
    });
};
buildMeta(0)

// change event function
function optionChange(id) {
    buildPlot(id);
    buildMeta(id);
};

function init() {
    var dropdown = d3.selectAll("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);

        var sNames = data.names;

        sNames.forEach((name) => {
            dropdown.append("option").text(name).property("value");
        });
        buildPlot(data.names[0]);
        buildMeta(data.names[0]);
    })
}

init();