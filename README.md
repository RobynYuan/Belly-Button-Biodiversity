# Plot.ly Homework - Belly Button Biodiversity

![bacteria.jpg](Images/bacteria.jpg)


Build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

![dashboard.png](Images/dashboard.png)

1. Use the D3 library to read in `samples.json`.

![readinjson.png](Images/readinjson.png)

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

![bargraph_script.png](Images/bargraph_script.png)

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

  ![bargraph.png](Images/bargraph.png)

3. Create a bubble chart that displays each sample.

![bubblescript.png](Images/bubblescript.png)

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![bubble.png](Images/bubble.png)

4. Display the sample metadata, i.e., an individual's demographic information.

![demo.png](Images/demo.png)

5. Display each key-value pair from the metadata JSON object.

![dropdown_menu.png](Images/dropdown_menu.png)




*Creat gauge code to account for values ranging from 0 through 9.
![gaugescript.png](Images/gaugescript.png)

![gauge.png](Images/gauge.png)

* Update the chart whenever a new sample is selected.

![dropdown_menu_2.png](Images/dropdown_menu_2.png)


