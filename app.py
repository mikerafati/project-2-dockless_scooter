from flask import Flask, render_template, jsonify
import json 
import  pandas as pd


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/test_json")
def data_example():

    
    return df.to_json(orient='records')



if __name__== "__main__":
    app.run(debug=True)
     