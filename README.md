# Project Name

React Redux Feedback App

## Description

Duration: 10 Hours

This project is an app built utilizing HTML, CSS, Javascript, Node.js, Express, Postgres, Postico, React, and Redux. The purpose of this web app is a mock up of a feedback form. In response to a question on the page, the user is asked to enter a number in the input field based on their opinion. Once the user has entered in ratings for the three questions, they are allowed to leave a comment which will bring them to another page where they can review the information they've entered. Upon hitting submit, the information is added to a database, and they will be greeted with a 'Thank You' page, where they can click a button to add more feedback, or they can then close out the app.

## Prerequisites
<ul>
    <li>React</li>
    <li>Redux</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>Postgres</li>
    <li>Postico</li>
</ul>

## Installation
<ol>
    <li>Go to: https://github.com/FCLee12/weekend-react-gallery</li>
    <li>Look at the top right of the webpage for the 'fork' button</li>
    <li>Create a fork under your own GitHub account ***** Verify you are in your own fork of the project ***** -At the top left of the webpage, you should see the path to the repo -Your GitHub account name should appear before the first '/'</li>
    <li>Open your terminal</li>
    <li>Navigate to the desired location you want to place the project files using the terminal</li>
    <li>On the webpage of your forked copy, look for the 'code' button</li>
    <li>Assuming you've set up your SSH, click on the SSH tab and copy the file path</li>
    <li>Back on your terminal, enter the following into your terminal: git clone PASTE-COPIED-FILE-PATH-HERE</li>
    <li>Hit enter, the repo will be downloaded into your current working directory</li>
    <li>The repo should now exist in your local machine</li>
    <li>cd into the repo</li>
    <li>
        <ol>Run the following commands in your terminal, waiting each time for installation to complete before running the next command:
            <li>npm install</li>
        </ol>
    </li>
    <li>Make sure Postgres is running, and open up Postico</li>
    <li>Create a new database with the name: prime_feedback</li>
    <li>Search for the data.sql file, within the file you will find the code to generate the table required to run the web app</li>
    <li>Upon executing the provided code in Postico, hit refresh and you should now see the feedback table, indicating the database is now ready</li>
    <li>Upon completion of those installs, you have to start the server with the following command: npm run server</li>
    <li>Next you have to start the client server with the following command: npm run client, which will result in the web app being opened in your default browser, ready for use</li>
</ol>

## Usage
<ol>
    <li>Upon loading, you should be greeted by the first feedback prompt and an input field for you to enter in your rating</li>
    <li>Once you've entered your rating, you can click the 'Next' button bringing you to the next page</li>
    <li>Continue to enter your ratings into the input fields based on the prompts on the consecutive pages</li>
    <li>If you would like to return to a previous page, take note of the 'Previous' button which will return you to the previous page</li>
    <li>Once you have reached the Review page, where all your ratings and your comments are displayed, by clicking the Submit button, your feedback information will be stored in the database</li>
    <li>Congratualations, your feedback has been recorded, if you would like to record more, click on the 'Leave New Feedback' button which will return you to the start of the questions</li>
</ol>

## Built With
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Redux</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>Postgres</li>
    <li>Postico</li>
</ul>

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [fueclee.12@gmail.com]