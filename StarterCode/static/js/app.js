d3.json("/static/js/samples.json").then(function(data){
    const belleyData=data;
    let ids =belleyData.names;
    let samples=belleyData.samples;
    let metaData=belleyData.metadata;
    const selectBox=d3.select("#selDataset");
    for(let i =0; i< ids.length; i++){
        selectBox.append("option").text(ids[i]);}
    console.log(samples)
});

makecharts(0)

function makecharts(i){
    // const sample_values= samples.sample_values;
    // const otu_ids =  samples.otu_ids;
    const top10Otu_labels=samples[i].otu_labels.slice(0,10);
    const top10Ids= samples[i].otu_ids.slice(0,10);
    const top10Sample_values=samples[i].sample_values.slice(0,10);

    let barChart = {
        x: top10Sample_values,
        y: top10Ids,
        type: 'bar',
        orientation: "h",
        text: top10Otu_labels
      };

}
      
    let barChartdata = [barChart];
      
    Plotly.newPlot("bar", barChartdata);

// //     var trace1 = {
// //         x: [1, 2, 3, 4],
// //         y: [10, 11, 12, 13],
// //         mode: 'markers',
// //         marker: {
// //           color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
// //           opacity: [1, 0.8, 0.6, 0.4],
// //           size: [40, 60, 80, 100]
// //         }
// //       };
      
// //       var data = [trace1];
      
// //       var layout = {
// //         title: 'Marker Size and Color',
// //         showlegend: false,
// //         height: 600,
// //         width: 600
// //       };
      
// //       Plotly.newPlot('bubble', data, layout);

// //     var data = [
// //         {
// //           domain: { x: [0, 1], y: [0, 1] },
// //           value: 450,
// //           title: { text: "Speed" },
// //           type: "indicator",
// //           mode: "gauge+number",
// //           delta: { reference: 400 },
// //           gauge: { axis: { range: [null, 500] } }
// //         }
// //       ];
      
// //       var layout = { width: 600, height: 400 };
// //       Plotly.newPlot('gauge', data, layout);
      
// // }
function updateData(){
    // let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let nameID= d3.event.target.value;
    console.log(nameID);
    for(let i =0; i< ids.length; i++){
        if(nameID===ids[i]){makeCharts(i);}
    }
}

// function optionChanged(this) {
//     var nameID = this.value;  
//     console.log(nameID);
//   }


d3.selectAll("#selDataset").on("change",updateData);


// // // let keys = Object.keys(belleyData.metadata[i]);
// // // let values = Object.values(belleyData.metadata[i]) 
// // // let sample_metadata = d3.select("#sample-metadata");
// // // sample_metadata.html("");

// // // for(let i =0; i< keys.length; i++){
// // //     ample_metadata.append("p").text(keys[i] + ": " + values[i]);}