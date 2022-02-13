d3.json("/static/js/samples.json").then(function(data){
    const belleyData=data;
    let ids =belleyData.names;
    console.log(ids);
    const selectBox=d3.select("#selDataset");
    for(let i =0; i< ids.length; i++){
        selectBox.append("option").text(ids[i]);}
});

function updateChart(ids){
    // const sample_values= belleyData.samples[ids].sample_values;
    // const otu_ids =  belleyData.samples[ids].otu_ids;
    const otu_labels=belleyData.samples[ids].otu_ids.slice(0,10).reverse()
    const top10Ids= belleyData.samples[ids].otu_ids.slice(0,10).reverse()
    const top10Sample_values=belleyData.samples[ids].sample_values.slice(0,10).reverse();

    let barChart = {
        x: top10Sample_values,
        y: top10Ids,
        type: 'bar',
        orientation: "h",
        text: otu_labels
      };

    let layout = {
        width: 350,
        height: 550
    };
      
      let barChartdata = [barChart];
      
      Plotly.newPlot("bar", barChartdata,layout);
      
}
let ids=1;
updateChart(ids)

let keys = Object.keys(data.metadata[id]);
        let values = Object.values(data.metadata[id]) 
        let sample_metadata = d3.select("#sample-metadata");

        sample_metadata.html("");

        for(let i =0; i< keys.length; i++){
            sample_metadata.append("p").text(keys[i] + ": " + values[i]);
        }  
    }

