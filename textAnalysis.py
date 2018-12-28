from flask import Flask, request
import json
from textblob import TextBlob

app = Flask(__name__)

@app.route('/postdata', methods = ['POST'])
def postdata():
    data = request.json
    s1 = json.dumps(data)
    d2 = json.loads(s1)
    blob = TextBlob(d2["sampletext"])
    return json.dumps({"polarity": blob.sentiment[0],
                       "subjectivity": blob.sentiment[1]
                    })
    

if __name__ == '__main__':
    app.run(debug=True)