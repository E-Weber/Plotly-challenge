
function buildPlot(id) {

    //grab json data
    d3.json("samples.json").then((data) => {
        console.log(data);

        // metadata
        var metadata = data.metadata;
        console.log(metadata);

        // var wfreq w map
        var wfreq = data.metadata.map(d => d.wfreq);
        console.log({ wfreq });

        // filter the sample data by id
        var sampleData = data.sampleData.filter(s => s.id.toString() === id[0]);
        console.log(sampleData);

        // grab top 10
        var sliceSample = sampleData.sample_values.slice(0, 10).reverse();
    })
};

buildPlot(1);