# text-analyzer
This is a small web application for analyzing if the given text in the textarea is positive or negative.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Overall prototype of how the application works
Markup :
*  Step-1 : Take the desired input from textarea using jQuery
*  Step-2 : Validate if the given input if empty or not
*  Step-3 : Make an AJAX request with the given text passed as a parameter
*  Step-4 : Grab the AJAX request in the POST route and perform NLP 
    * To perfrom NLP we used a micro framework called flask in python
*  Step-5 : Send JSON as a response with the 'polarity' and the 'subjectivity' of the text
*  Step-6 : Display the sweet alert box with the given JSON result :blush:

### prerequisites

* NodeJS installed.
* Python installed.(Since we perform NLP with python only.)
* Make you have the following imports in the python.
    *  `pip install flask`
    *  `pip install -U textblob`

### Installing
Install all the npm packages using the following command

```
npm install
```

You need this command to install npm packages which is requried for the application to run.

Next you can go ahead and run the website by giving the following command.


```
npm start
```
OR
```
nodemon
```

Finally you need to run the python server `flask` which run on `http://localhost:5000/`. To do this you need the below command.

```
python textAnalysis.py
```

NOTE: The application will not work if the above command is not executed.
