var url = "https://robynyuan.github.io/interactive_web_visulization/static/js/samples.json ";
function init(){d3.json("url").then(function(data){
        const belleyData=data;
        let ids =belleyData.names;
        let samples=belleyData.samples;
        let metaData=belleyData.metadata;
        console.log(samples);
        console.log(metaData);
        const selectBox=d3.select("#selDataset");
        for(let i =0; i< ids.length; i++){
            selectBox.append("option").text(ids[i]);};
        var firstSample = ids[0];
        console.log(firstSample);
        // function makecharts(selectedSample){
        let selectedData=samples.filter(sampleObj => sampleObj.id == firstSample);
        let demegraphics=metaData.filter(metaDataObj => metaDataObj.id == firstSample);
        console.log(demegraphics);
        // var otu_labels=selectedData[0].otu_labels;
        // console.log(otu_labels);
       
 // fill in the demegraphics panel using loop interating through the demaData
        let demeData=demegraphics[0];
        let keys =Object.keys(demeData);
        let values = Object.values(demeData);
        let deme=d3.select("#sample-metadata");
        // deme.html("");
        for(let i=0; i<keys.length;i++) {
           deme.append("p").text(keys[i] + ": " + values[i]);
        };
// making the bar graph
        let top10Otu_labels=selectedData[0].otu_labels.slice(0,10);
        let top10Ids= selectedData[0].otu_ids.slice(0,10);
        console.log(top10Ids);
        let top10Sample_values=selectedData[0].sample_values.slice(0,10);
        let yAxis = top10Ids.map(item => 'OTU' + " " + item).reverse();
        let barChart = {
            x: top10Sample_values,
            y: yAxis,
            type: 'bar',
            orientation: "h",
            text: top10Otu_labels
          };

        let barChartdata = [barChart];
           
        let layout = {
            xaxis: {
                title: {
                  text: 'OTU_ID ',
                  font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                  }
                },
              },
                showlegend: false,
                height: 600,
                width: 600
              };
        Plotly.newPlot("bar", barChartdata,layout);
    //making the bubble chart       
        let bubbleChart= {
                x:top10Ids,
                y:top10Sample_values,
                mode: 'markers',
                marker: {
                  color: top10Ids,
                  size: top10Sample_values
                },
                text: top10Otu_labels
              };
        
        let bubbleChartdata = [bubbleChart];    
        Plotly.newPlot("bubble",bubbleChartdata);
        let wfreq=demeData.wfreq;
        console.log(wfreq);
     //making the gauge
        let gaugeTrace = [
          {   domain: { x: [0, 1], y: [0, 1] },
              value: wfreq,
              title: { text: "Belly Button Washes Per Week" },
              delta: { reference: 0, increasing: { color: "#8EAB80"} },
              type: "indicator",
              mode: "gauge+number+delta",
              gauge: {
                  axis: { range: [0, 9],
                          tickwidth: 0.5,
                          tickcolor: "black"},
                  bar: { color: "#E0B6BB" },
                  borderwidth: 5,
                  bordercolor: "transparent",
                  steps: [
                      { range: [0, 1], color: "#F5F5EF"  },
                      { range: [1, 2], color: "#EBEBE0" },
                      { range: [2, 3], color: "#D3D6BA" },
                      { range: [3, 4], color: "#E3E8BA"},
                      { range: [4, 5], color: "#CEE3AA" },
                      { range: [5, 6], color: "#ADC28D" },
                      { range: [6, 7], color: "#98C28D" },
                      { range: [7, 8], color: "#88BA8A" },
                      { range: [8, 9], color: "#7EAB80" }
                  ],
              }
          }
       ];
      let gaugeLayout =
      { width: 600, height: 450, margin: { t: 0, b: 0 } }
      Plotly.newPlot('gauge', gaugeTrace, gaugeLayout);
        })}
init();
function makecharts(selectedSample){
    d3.json("url").then(function(data){
        const belleyData=data;
        let ids =belleyData.names;
        let samples=belleyData.samples;
        let metaData=belleyData.metadata;
        var firstSample = selectedSample;
        let selectedData=samples.filter(sampleObj => sampleObj.id == firstSample);
        let demegraphics=metaData.filter(metaDataObj => metaDataObj.id == firstSample);

        let top10Otu_labels=selectedData[0].otu_labels.slice(0,10);
        let top10Ids= selectedData[0].otu_ids.slice(0,10);
        let top10Sample_values=selectedData[0].sample_values.slice(0,10);
        let barChart = {
            x: top10Sample_values,
            y: top10Ids.reverse().map(row => "OTU" + row),
            type: 'bar',
            orientation: "h",
            text: top10Otu_labels
          };
        let barChartdata = [barChart];
          
        Plotly.newPlot("bar", barChartdata); 
        //making the bubble chart       
        let bubbleChart= {
          x:top10Ids,
          y:top10Sample_values,
          mode: 'markers',
          marker: {
            color: top10Ids,
            size: top10Sample_values
          },
          text: top10Otu_labels
        };
  
        let bubbleChartdata = [bubbleChart];
        
        let layout = {
            xaxis: {
            title: {
            text: 'OTU_ID ',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
                  }
                  },
                  },
              showlegend: false,
              height: 600,
              width: 600
            };
        
        Plotly.newPlot("bubble",bubbleChartdata, layout);  
          
        let demeData=demegraphics[0];
        console.log(demeData);
        
        let keys =Object.keys(demeData);
        let values = Object.values(demeData);
        let wfreq=demeData.wfreq;
        console.log(wfreq);
        let gaugeTrace = [
          {   domain: { x: [0, 1], y: [0, 1] },
              value: wfreq,
              title: { text: "Belly Button Washes Per Week" },
              delta: { reference: 0, increasing: { color: "#8EAB80"} },
              type: "indicator",
              mode: "gauge+number+delta",
              gauge: {
                  axis: { range: [0, 9],
                          tickwidth: 0.5,
                          tickcolor: "black"},
                  bar: { color: "#E0B6BB" },
                  borderwidth: 5,
                  bordercolor: "transparent",
                  steps: [
                      { range: [0, 1], color: "#F5F5EF"  },
                      { range: [1, 2], color: "#EBEBE0" },
                      { range: [2, 3], color: "#D3D6BA" },
                      { range: [3, 4], color: "#E3E8BA"},
                      { range: [4, 5], color: "#CEE3AA" },
                      { range: [5, 6], color: "#ADC28D" },
                      { range: [6, 7], color: "#98C28D" },
                      { range: [7, 8], color: "#88BA8A" },
                      { range: [8, 9], color: "#7EAB80" }
                  ],
              }
          }
       ];
      let gaugeLayout =
      { width: 600, height: 450, margin: { t: 0, b: 0 } }
      Plotly.newPlot('gauge', gaugeTrace, gaugeLayout);
      
      let deme=d3.select("#sample-metadata");
      deme.html("");
      for(let i=0; i<keys.length;i++) {
        deme.append("p").text(keys[i] + ": " + values[i]);
         };
          })
        
          
          
    }   


function optionChanged(selectedSample) {
    makecharts(selectedSample);
  }
