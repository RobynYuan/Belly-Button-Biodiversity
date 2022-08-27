# Plot.ly Homework - Belly Button Biodiversity

![bacteria.jpg](Images/bacteria.jpg)
 Build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

  ![bargraph.png](Images/bargraph.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![bubble.png](Images/bubble.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![dropdown_menu.png](dropdown_menu.png)

6. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

![dashboard.png](Images/dashboard.png)

*Creat gauge code to account for values ranging from 0 through 9.

![gauge.png] (Images/gauge.png)

* Update the chart whenever a new sample is selected.

![dropdown_menu_2.png](Images/dropdown_menu_2.png)


