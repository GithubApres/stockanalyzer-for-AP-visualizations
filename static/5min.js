

anychart.onDocumentReady(function () {
  //anychart.data.loadCsvFile(
   // 'https://gist.githubusercontent.com/shacheeswadia/cd509e0b0c03964ca86ae7d894137043/raw/5f336c644ad61728dbac93026f3268b86b8d0680/teslaDailyData.csv',
    //'Tesla1.csv',
    //function (data) {
      // create data table on loaded data
      anychart.data.loadJsonFile("/data/5min",  
     
    function (data) {

      let myStockData = data['Time Series (5min)'];
      console.log(myStockData);
      let datesRaw = Object.keys(myStockData)
      let dates = []
      let open = []
      let close = []
      let low = []
      let high = []
      let volume = []

      
      
      let dataString = ''

      for (let i = 0; i < datesRaw.length; i++) { 
        dates.push(datesRaw[i])//.split(' ')[1])
        open.push(myStockData[datesRaw[i]]['1. open'])
        high.push(myStockData[datesRaw[i]]['2. high'])
        low.push(myStockData[datesRaw[i]]['3. low'])
        close.push(myStockData[datesRaw[i]]['4. close'])
        volume.push(myStockData[datesRaw[i]]['5. volume'])

        let stockString = `${dates[i]},${open[i]},${high[i]},${low[i]},${close[i]},${volume[i]}\n`
        dataString += stockString
        
                 
      };

      
      var dataTable = anychart.data.table();
      dataTable.addData(dataString);

      var mapping = dataTable.mapAs({
        open: 1,
        high: 2,
        low: 3,
        close: 4,
        volume: 5
      });

      // create stock chart
      var chart = anychart.stock();

      // create first plot on the chart
      var plot = chart.plot(0);

      // set grid settings
      plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

      var series = plot.candlestick(mapping)
        .name('IBM');

      series.legendItem().iconType('rising-falling');

      
      // create scroller series with mapped data
      chart.scroller().candlestick(mapping);

      
      // create range picker
      var rangePicker = anychart.ui.rangePicker();
      rangePicker.format('dd-MM-yyyy HH:mm:ss')

      // init range picker
      rangePicker.render(chart);

      
      // sets the title of the chart
      chart.title('IBM Stock Chart - 5min intervals');
      
      
      // set container id for the chart
      chart.container('container');

      

      // initiate chart drawing
      chart.draw();
    })

  })

