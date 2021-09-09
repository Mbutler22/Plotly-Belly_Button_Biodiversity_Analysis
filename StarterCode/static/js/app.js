//Belly Buttoin Biodiversity - Plotly



function optionChanged(selectedID){

    console.log(selectedID);

    //Read the json file
    d3.json("data/samples.json").then((data) => {

        console.log(data);

    d3.select("#selDataset").html("");
    })
}
data.metadata.forEach(item =>
    {
        console.log(item.id);
    d3.select("#selDataset").append('option').attr('value', item.id).text(item.id);
    });
d3.select("#selDataset").node().value = selectedID;
const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
    {
        console.log("---------------------")
        console.log(item);
        console.log(item.id);
    }
//Check the metadata for the selected ID
console.log(idMetadata);

const panelDisplay = d3.select("#sample-metadata");
panelDisplay.html("");
Object.entries(idMetadata[0]).forEach(item=>
    {
        console.log(item);
        panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
    });


function buildCharts(sample){
d3.json("samples.json").then((data) => {
    var samples= data.samples;
    var resultsarray= samples.filter(sampleobject =>
        sampleobject.id == sample);
    var result= resultarray[0]
    
    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;
})
}

//-----------------------------------------------------//
//----------------------------------------------------//
                  // BUBBLE CHART//

    var LayoutBubble = {
        margin: {t: 0},
        xaxis: {title: "OTU ID"},
        hovermode: "closest"
    };

    var DataBuble = [
    {
        x: ids,
        y: values,
        text: labels,
        mode: "markers",
        marker: {
            color: ids,
            size: values,
        }
    }
    ];

    Plotly.newPlot("bubble", DataBubble, LayoutBubble);

//-------------------------------------------------------//

              //BAR CHART//

    var bar_data =[
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          orientation: "h"
        }
    ]:

    var barLayout = {
        title: "Top 10 Bacteria Cutures Found",
        margin: {t: 30, l: 150}
    });

    Plotly.newPlot("bar", bar_data, barLayout);
});


function init() {
var selector = d3.select("#selDataset");

d3.json("samples.json").then((data) => {
    var samplesNames = data.names;
    samplesNames.forEach((sample) =>{
        selector
        .append("option")
        .text(sample)
        .property("value", sample);
    }); 

    //Build the plots

    const firstSample = sampleNames[0];
    buildCharts (firstSample);
    buildMetadata(firstSample);
    });

    init();


})
}
