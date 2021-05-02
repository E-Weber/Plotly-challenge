function buildPlot(id) {
    d3.json("data/samples.json").then(data => {
        console.log(data);
    })
}
buildPlot();