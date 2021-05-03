
function buildPlot(id) {

    //grab json data
    d3.json("samples.json").then((data) => {
        console.log(data);

        // metadata
        var metadata = data.metadata;
        console.log(metadata);

        var samples = data.samples;
        console.log(samples);

        var sampleValues = samples.sample_values;
        console.log(sampleValues);

    })
};

buildPlot(1);