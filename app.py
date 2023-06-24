import requests
from flask import Flask, jsonify, render_template



app = Flask(__name__)

@app.route("/")
def index(): 
    return render_template("index.html")

@app.route("/data/5min")
def fivemin(): 

    FIVEMINurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo' 

    response = requests.get(FIVEMINurl)

    if response.status_code == 200: 

        data = response.json()
        
        return jsonify(data)
    
    else:

        return jsonify({
            "error" : "failed to get data!"
        })
    
    
@app.route('/data/5minvolume')
def fiveminvolum(): 

    FIVEMINVOLurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
    response = requests.get(FIVEMINVOLurl)

    if response.status_code == 200: 

        data = response.json()
        
        return jsonify(data)
    
    else:

        return jsonify({
            "error" : "failed to get data!"
        })
    
       
    

@app.route('/data/daily')
def daily(): 
    DAILYurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo'
    response = requests.get(DAILYurl)

    if response.status_code == 200: 

        data = response.json()
        
        return jsonify(data)
    
    else:

        return jsonify({
            "error" : "failed to get data!"
        })
    

@app.route('/data/dailyvolume')
def dailyvolume(): 

    DAILYVOLurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo'

    response = requests.get(DAILYVOLurl)

    if response.status_code == 200: 

        data = response.json()
        
        return jsonify(data)
    
    else:

        return jsonify({
            "error" : "failed to get data!"
        })
    


if __name__ == "__main__":
    app.run()