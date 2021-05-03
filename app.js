
function buildPlot(sample) {
    d3.json("samples.json").then((data) => {
        console.log(data);

        var metadata = data.metadata;
        console.log(metadata);

        var filterData = metadata.filter(filtered => filtered.id == sample);
        console.log(filterData[0]);
    });
};

buildPlot(1);