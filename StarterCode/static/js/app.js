d3.json("/static/js/samples.json").then(function(data){
    const belleyData=data;
    let ids =belleyData.names;
    let samples=belleyData.samples;
    console.log(ids);
    console.log(samples);
    const selectBox=d3.select("#selDataset");
    for(let i =0; i< ids.length; i++){
        selectBox.append("option").text(ids[i]);}
});
let i=0;
function makechart(i){
    // const sample_values= samples.sample_values;
    // const otu_ids =  samples.otu_ids;
    const otu_labels=samples[i].otu_labels.slice(0,10).reverse()
    const top10Ids= samples[i].otu_ids.slice(0,10).reverse()
    const top10Sample_values=samples[i].sample_values.slice(0,10).reverse();

    let barChart = {
        x: top10Sample_values,
        y: top10Ids,
        type: 'bar',
        orientation: "h",
        text: otu_labels
      };

 
      
    let barChartdata = [barChart];
      
    Plotly.newPlot("bar", barChartdata);
      
}
makechart(i)

// function updateData(){
//     let dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     let nameID= dropdownMenu.property("value");
//     console.log(nameID);

//     for(let i =0; i< idSamples.length; i++){
//         if(nameID===ids[i]){makeChart(i);}
//     }
// }
    

// d3.selectAll("#selDataset").on("change", updateData);


// // let keys = Object.keys(belleyData.metadata[i]);
// // let values = Object.values(belleyData.metadata[i]) 
// // let sample_metadata = d3.select("#sample-metadata");
// // sample_metadata.html("");

// // for(let i =0; i< keys.length; i++){
// //     ample_metadata.append("p").text(keys[i] + ": " + values[i]);}