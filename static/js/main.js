console.log('main.js loaded');

// Selecting DOM elements
const radioButtons = document.querySelectorAll('input[type="radio"]');
const bddInput = document.getElementById('bdd-input');
const bddJiraInput = document.getElementById('bdd-jira-input');
const testInput = document.getElementById('test-input');
const output = document.getElementById('output');
const bddInfoMessage = document.getElementById('bdd-info-message');
const bddJiraInfoMessage = document.getElementById('bdd-jira-info-message');
const testInfoMessage = document.getElementById('test-info-message');
const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');


let bddInputDisplayed = false;
let testInputDisplayed = false;
let bddJiraInputDisplayed = false;
let performanceInputDisplayed = false;


function showPerformanceComparatorInput() {
    const performanceInfoMessage = document.getElementById('performance-info-message');
    performanceInfoMessage.innerHTML = `<b>What Is This About :</b>
        <i>Compare performance of two JSON files containing performance metrics.</i>
        <br>
        <b>How To Use:</b>
        <ol>
            <li>Upload the "Stats" Json file from the "js" folder of the Gatling report.</li>
            <li>Click on the <button class="btn btn-danger">Compare Performance</button> button.</li>
            <li>Our engine will compare the Gatling JSON reports from Execution 1 and Execution 2, extract the key metrics, and highlight any variations.</li>
            <li>After the comparison, you can download the result as an Excel file.</li>
        </ol>
        <b>File Format:</b>
        <i>JSON Format</i>`;

    if (!performanceInputDisplayed) {
        document.getElementById('performance-input').style.display = 'block';
        bddInput.style.display = 'none';
        bddJiraInput.style.display = 'none';
        testInput.style.display = 'none';
        output.style.display = 'none';

        performanceInputDisplayed = true;
        bddInputDisplayed = false;
        testInputDisplayed = false;
        bddJiraInputDisplayed = false;
    }
}




// Function to show BDD input and update message
function showBDDInput() {
    bddInfoMessage.innerHTML = `<b>What Is This About :</b>
        <i>Transform Your user stories into BDD feature file scenarios seamlessly.</i>
        <br>
        <b>How To Use:</b>
        <ol>
            <li>Prepare your user stories in an Excel sheet, with each user story in a separate row.</li>
            <li>Upload the excel sheet and click on the <button class="btn btn-danger">Generate BDD</button> button.</li>
            <li>Our Gen AI engine will then generate BDD scenarios based on your user stories.</li>
            <li>After the scenarios are generated, click on the <button class="btn btn-dark">Download</button> button to save the BDD scenario Excel file to your device.</li>
        </ol>
        <b>File Format:</b>
        <i>Xlsx,xls Format</i>`;

    if (!bddInputDisplayed) {
        bddInput.style.display = 'block';
        bddJiraInput.style.display = 'none';
        testInput.style.display = 'none';
        output.style.display = 'none';
        // Update flag variable
        bddInputDisplayed = true;
        testInputDisplayed = false;
        bddJiraInputDisplayed = false;
    }
}

function showBDDJiraInput() {
    bddJiraInfoMessage.innerHTML = `<b>What Is This About :</b>
        <i>Transform your user stories into BDD feature file scenarios seamlessly using Jira.</i>
        <br>
        <b>How To Use:</b>
        <ol>
            <li>Enter the required Jira details.</li>
            <li>Click on the <button class="btn btn-danger">Generate BDD From Jira</button> button to generate BDD scenarios.</li>
            <li>Our Gen AI engine will then generate BDD scenarios based on your user stories.</li>
            <li>After the scenarios are generated, click on the <button class="btn btn-dark">Download</button> button to save the BDD scenario Excel file to your device.</li>
        </ol>
        `;

    if (!bddJiraInputDisplayed) {
        bddJiraInput.style.display = 'block';
        bddInput.style.display = 'none';
        testInput.style.display = 'none';
        output.style.display = 'none';

        bddJiraInputDisplayed = true;
        bddInputDisplayed = false;
        testInputDisplayed = false;
    }
}


// Function to show test data input and update message
function showTestDataInput() {
    testInfoMessage.innerHTML = `<b>What Is This About :</b>
            <i>Generate Test Data for a LOB.</i>
            <br>
            <b>How To Use:</b>
            <ol>
                <li>Select LOB of your Choice</li>
                <li>Select state of your Choice</li>
                <li>Enter number of test cases you want to generate</li>
                <li>Click on the <button class="btn btn-danger">Generate Test Data</button> button.</li>
                <li>Our Gen AI engine will then generate test cases based on your input.</li>
                <li>After the test cases are generated, click on the <button class="btn btn-dark">Download</button> button to save the Test Case Excel file to your device.</li>
            </ol>
            `;

    if (!testInputDisplayed) {
        testInput.style.display = 'block';
        bddInput.style.display = 'none';
        bddJiraInput.style.display = 'none';
        output.style.display = 'none';
        // Update flag variable
        bddInputDisplayed = false;
        testInputDisplayed = true;
        bddJiraInputDisplayed = false;
    }
}

// Event listeners for menu links
document.querySelectorAll('.menu a')[0].addEventListener('click', (event) => {
    event.preventDefault();
    showBDDInput();
});

document.querySelectorAll('.menu a')[1].addEventListener('click', (event) => {
    event.preventDefault();
    showBDDJiraInput();
});

document.querySelectorAll('.menu a')[2].addEventListener('click', (event) => {
    event.preventDefault();
    showTestDataInput();
});


document.querySelectorAll('.menu a')[3].addEventListener('click', (event) => {
    event.preventDefault();
    showPerformanceComparatorInput();
});

