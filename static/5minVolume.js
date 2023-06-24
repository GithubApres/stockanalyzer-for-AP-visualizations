

anychart.onDocumentReady(function () {
    
    anychart.data.loadJsonFile("/data/5minvolume", 
    function (data) {

        let myStockData = data['Time Series (5min)'];
    
        let datesRaw = Object.keys(myStockData)
        let dates = []
        let volume = []
  
               
        let dataString = ''
  
        for (let i = 0; i < datesRaw.length; i++) { 
          dates.push(datesRaw[i])//.split(' ')[1])
          volume.push(myStockData[datesRaw[i]]['5. volume'])
  
          let stockString = `${dates[i]},${volume[i]}\n`
          dataString += stockString
          
                   
        };
  
        


    // create a data table
    var table = anychart.data.table();
    table.addData(dataString);

    // map value and fill
    var mapping = table.mapAs({value: 1, fill: 2});

    // creates a stock chart and enable individual coloring
    var chart = anychart.stock(true);
    
    // add a column series
    chart.plot(0).column(mapping).name('Volume');

    
    // draw a chart
    chart.container('container-bar_chart');

    var title = chart.title();
    chart.title("IBM Stock Trading Volume - 5min intervals");
    title.fontSize(18);
    
    title.fontFamily("Tahoma");


    chart.draw();
    })

})

