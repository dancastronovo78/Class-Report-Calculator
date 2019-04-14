/**************************************************************************/
//New Tasks
//March 30, 2019
    //1. add id's to DOMstrings library and clean up getElementById('') through out  code
    //2. move code from event listeners to separate ctlr functions
    //3. add button to allow edits to all 5's
/****************************************************************************/

//DATA MODULE
var calculatorController = (function(){
    
    //store all eval responses
    var data = {
        allResponses: {
            overall: [],
            section1: [],
            section2: [],
            section3: [],
            section4: [],
            section4a: [],
            section5: []
        },
        
        averages: {
            overall: 0,
            section1: 0,
            section2: 0,
            section3: 0,
            section4: 0,
            section4a: 0,
            section5: 0
        }
    };
    
    return {
        
        //calculate averages calcAverages
        calcAverages: function(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec5Arr){
            
            //add response to data stucture
            data.allResponses.overall.push(responseArray);
            data.allResponses.section1.push(sec1Arr);
            data.allResponses.section2.push(sec2Arr);
            data.allResponses.section3.push(sec3Arr);
            data.allResponses.section4.push(sec4Arr);
            data.allResponses.section5.push(sec5Arr);
            
            //calculate averages
            function sumArr(total, num){
                return total + num;
            }
            
            function myFunction(item){
                //overall avg
                totals = responseArray.reduce(sumArr);
                average = totals/(responseArray.length);
                data.averages.overall = Math.round(parseFloat(average) * 100)/100;
                
                //section 1 avg
                totals1 = sec1Arr.reduce(sumArr);
                sec1Avg = totals1/(sec1Arr.length);
                data.averages.section1 = Math.round(parseFloat(sec1Avg) * 100)/100;
                
                //section 2 avg
                totals2 = sec2Arr.reduce(sumArr);
                sec2Avg = totals2/(sec2Arr.length);
                data.averages.section2 = Math.round(parseFloat(sec2Avg) * 100)/100;
                
                //section 3 avg
                totals3 = sec3Arr.reduce(sumArr);
                sec3Avg = totals3/(sec3Arr.length);
                data.averages.section3 = Math.round(parseFloat(sec3Avg) * 100)/100;
                
                //section 4 avg
                totals4 = sec4Arr.reduce(sumArr);
                sec4Avg = totals4/(sec4Arr.length);
                data.averages.section4 = Math.round(parseFloat(sec4Avg) * 100)/100;
                
                //section 5 avg
                totals5 = sec5Arr.reduce(sumArr);
                sec5Avg = totals5/(sec5Arr.length);
                data.averages.section5 = Math.round(parseFloat(sec5Avg) * 100)/100;
                
            }
            
            //reset data all responses overall array with current values
            if(data.allResponses.overall == [] || data.allResponses.section1 == [] || data.allResponses.section2 == [] || data.allResponses.section3 == [] || data.allResponses.section4 == [] || data.allResponses.section5 == [] ){
                myFunction();
            }else{
                data.allResponses.overall = [];
                data.allResponses.overall.push(responseArray);
                
                //sec 1
                data.allResponses.section1 = [];
                data.allResponses.section1.push(sec1Arr);
                
                //sec 2
                data.allResponses.section2 = [];
                data.allResponses.section2.push(sec2Arr);
                
                //sec 3
                data.allResponses.section3 = [];
                data.allResponses.section3.push(sec3Arr);
                
                //sec 4
                data.allResponses.section4 = [];
                data.allResponses.section4.push(sec4Arr);
                
                //sec 5
                data.allResponses.section5 = [];
                data.allResponses.section5.push(sec5Arr);
                
                myFunction();
                
            }
        
        },
        
         //calculate averages calcAverages
        calcAverages2: function(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec4aArr, sec5Arr){
            
            //add response to data stucture
            data.allResponses.overall.push(responseArray);
            data.allResponses.section1.push(sec1Arr);
            data.allResponses.section2.push(sec2Arr);
            data.allResponses.section3.push(sec3Arr);
            data.allResponses.section4.push(sec4Arr);
            data.allResponses.section4a.push(sec4aArr);
            data.allResponses.section5.push(sec5Arr);
            
            //calculate averages
            function sumArr1(total, num){
                return total + num;
            }
            
            function myFunction1(item){
                //overall avg
                totals = responseArray.reduce(sumArr1);
                average = totals/(responseArray.length);
                data.averages.overall = Math.round(parseFloat(average) * 100)/100;
                
                //section 1 avg
                totals1 = sec1Arr.reduce(sumArr1);
                sec1Avg = totals1/(sec1Arr.length);
                data.averages.section1 = Math.round(parseFloat(sec1Avg) * 100)/100;
                
                //section 2 avg
                totals2 = sec2Arr.reduce(sumArr1);
                sec2Avg = totals2/(sec2Arr.length);
                data.averages.section2 = Math.round(parseFloat(sec2Avg) * 100)/100;
                
                //section 3 avg
                totals3 = sec3Arr.reduce(sumArr1);
                sec3Avg = totals3/(sec3Arr.length);
                data.averages.section3 = Math.round(parseFloat(sec3Avg) * 100)/100;
                
                //section 4 trainer 1 avg
                totals4 = sec4Arr.reduce(sumArr1);
                sec4Avg = totals4/(sec4Arr.length);
                data.averages.section4 = Math.round(parseFloat(sec4Avg) * 100)/100;
                
                //section 4 trainer 2 avg
                totals4a = sec4aArr.reduce(sumArr1);
                sec4aAvg = totals4a/(sec4aArr.length);
                data.averages.section4a = Math.round(parseFloat(sec4aAvg) * 100)/100;
                
                //section 5 avg
                totals5 = sec5Arr.reduce(sumArr1);
                sec5Avg = totals5/(sec5Arr.length);
                data.averages.section5 = Math.round(parseFloat(sec5Avg) * 100)/100;
                
            }
            
            //reset data all responses overall array with current values
            if(data.allResponses.overall == [] || data.allResponses.section1 == [] || data.allResponses.section2 == [] || data.allResponses.section3 == [] || data.allResponses.section4 == [] || data.allResponses.section4a == [] || data.allResponses.section5 == [] ){
                myFunction1();
            }else{
                data.allResponses.overall = [];
                data.allResponses.overall.push(responseArray);
                
                //sec 1
                data.allResponses.section1 = [];
                data.allResponses.section1.push(sec1Arr);
                
                //sec 2
                data.allResponses.section2 = [];
                data.allResponses.section2.push(sec2Arr);
                
                //sec 3
                data.allResponses.section3 = [];
                data.allResponses.section3.push(sec3Arr);
                
                //sec 4
                data.allResponses.section4 = [];
                data.allResponses.section4.push(sec4Arr);
                
                //sec 4
                data.allResponses.section4a = [];
                data.allResponses.section4a.push(sec4aArr);
                
                //sec 5
                data.allResponses.section5 = [];
                data.allResponses.section5.push(sec5Arr);
                
                myFunction1();
                
            }
        
        },
       
        
        //delete form
        deleteForm: function(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec5Arr){
            
            x = document.getElementById('newTxtBx').childElementCount;
            a = (x -1) * 14;
            b = (x -1) * 3;
            c = (x -1) * 2;
            
            responseArray.length = a;
            sec1Arr.length = b;
            sec2Arr.length = b;
            sec3Arr.length = b;
            sec4Arr.length = c;
            sec5Arr.length = b;

            console.log('this is a ' + a);
            console.log(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec5Arr);

            data.allResponses.overall = [];
            data.allResponses.section1 = [];
            data.allResponses.section2 = [];
            data.allResponses.section3 = [];
            data.allResponses.section4 = [];
            data.allResponses.section5 = [];

            data.allResponses.overall.push(responseArray);
            data.allResponses.section1.push(sec1Arr);
            data.allResponses.section2.push(sec2Arr);
            data.allResponses.section3.push(sec3Arr);
            data.allResponses.section4.push(sec4Arr);
            data.allResponses.section5.push(sec5Arr);

            document.getElementById('btnAddNewForm').style.display = 'none';
            document.getElementById('btnAddNewForm2').style.display = 'block';

        },
       
         //delete form
        deleteForm2: function(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec4aArr, sec5Arr){
            
            x = document.getElementById('newTxtBx').childElementCount;
            a = (x -1) * 14;
            b = (x -1) * 3;
            c = (x -1) * 2;
            
            responseArray.length = a;
            sec1Arr.length = b;
            sec2Arr.length = b;
            sec3Arr.length = b;
            sec4Arr.length = c;
            sec4aArr.length = c;
            sec5Arr.length = b;

            console.log('this is a ' + a);
            console.log(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec5Arr);

            data.allResponses.overall = [];
            data.allResponses.section1 = [];
            data.allResponses.section2 = [];
            data.allResponses.section3 = [];
            data.allResponses.section4 = [];
            data.allResponses.section4a = [];
            data.allResponses.section5 = [];

            data.allResponses.overall.push(responseArray);
            data.allResponses.section1.push(sec1Arr);
            data.allResponses.section2.push(sec2Arr);
            data.allResponses.section3.push(sec3Arr);
            data.allResponses.section4.push(sec4Arr);
            data.allResponses.section4a.push(sec4Arr);
            data.allResponses.section5.push(sec5Arr);
         
            document.getElementById('btnAddNewForm').style.display = 'none';
            document.getElementById('btnAddNewForm2').style.display = 'block';

        },
       
        //make averages public to display in UI
        avg: function(){
            
            return {
                avgAll: data.averages.overall,
                avgSec1: data.averages.section1, 
                avgSec2: data.averages.section2, 
                avgSec3: data.averages.section3, 
                avgSec4: data.averages.section4, 
                avgSec5: data.averages.section5
            }
        },
        
        avg2: function(){
            
            return {
                avgAll: data.averages.overall,
                avgSec1: data.averages.section1, 
                avgSec2: data.averages.section2, 
                avgSec3: data.averages.section3, 
                avgSec4: data.averages.section4,
                avgSec4a: data.averages.section4a, 
                avgSec5: data.averages.section5
            }
        },
        
        //for testing only comment out before promoting to production
        testing: function(){
             console.log(data);
         },

    };
       
})();//end data module/calculatorController IIFE

//UI MODULE
var UIController = (function(){
    var evalNum = document.getElementById('numSelect').value;
    
    //DOM Strings private varible to make varible library
    var DOMstrings = {
        inputEvalNUM: 'numSelect',
        inputBtnSub: 'btnSubTest',
        inputBtnSubScoresTop:  'btnSubScoresTop',
        inputBtnRstTop: 'btnRstTop',
        inputBtnClr: 'btnClr',
        formsContainer: 'newTxtBx',
        inputAddNewForm: 'btnAddNewForm',
        inputTrnSelect: 'numTrn',
        btnDelete: 'btnDelete',
        infoContainer: 'dynTxtBx'
    };
    
    return {
        //1. Get the inputed number of eval forms & make public for controller
        getEvalNum: function() {
            return {
                evalNum: document.getElementById(DOMstrings.inputEvalNUM).value
            };
        },
        
        //add forms to UI
        addFormsUI: function(){
            
            var html,  html, newHtml, element;
            var evalNum = document.getElementById('numSelect').value;
            
            document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + (evalNum) + '!';
                
            for(i = 0; i < evalNum; i++){
                element = DOMstrings.formsContainer;
                //create html string with place holdertext
                 if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                
                    html = '<form id="respForm' + i + '" method="post"><fieldset><legend id="lgnd'  +  i  +  '">Evaluation Form ' + (i + 1) + '</legend></label><br><input class="txtBx" id="chkBx'  +  i  +  '" type="checkbox">All 5\'s for Form ' + (i + 1) + '<br><input class="txtBx" id="chkBxA'  +  i  +  '" type="checkbox">Edit with 5\'s for Form ' + (i + 1) + '<h2 id="h2'  +  i  +  '">Section 1</h2><label id="q1'  +  i  +  '" class="txtBx" for="q1Val' + i + '">question 1.</label><input type="number" id="q1Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q2'  +  i  +  '" class="txtBx">question 2.</label><input type="number" id="q2Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q3'  +  i  +  '" class="txtBx">question 3.</label><input type="number" id="q3Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 2</h2><label id="q4'  +  i  +  '" class="txtBx">question 4.</label><input type="number" id="q4Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q5'  +  i  +  '" class="txtBx">question 5.</label><input type="number" id="q5Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q6'  +  i  +  '" class="txtBx">question 6.</label><input type="number" id="q6Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 3</h2><label id="q7'  +  i  +  '" class="txtBx">question 7.</label><input type="number" id="q7Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q8'  +  i  +  '" class="txtBx">question 8.</label><input type="number" id="q8Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q9'  +  i  +  '" class="txtBx">question 9.</label><input type="number" id="q9Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 4</h2><label id="q10'  +  i  +  '" class="txtBx">question Instructor 1-10.</label><input type="number" id="q10Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q11'  +  i  +  '" class="txtBx">question Instructor 1-11.</label><input type="number" id="q11Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 5</h2><label id="q12'  +  i  +  '" class="txtBx">question 12.</label><input type="number" id="q12Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q13'  +  i  +  '" class="txtBx">question 13.</label><input type="number" id="q13Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q14'  +  i  +  '" class="txtBx">question 14.</label><input type="number" id="q14Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br></fieldset></form>'

                    //insert html 
                    document.getElementById(element).insertAdjacentHTML('beforeend', html);
                }else{
                     html = '<form id="respForm' + i + '" method="post"><fieldset><legend id="lgnd'  +  i  +  '">Evaluation Form ' + (i + 1) + '</legend></label><br><input class="txtBx" id="chkBx'  +  i  +  '" type="checkbox">All 5\'s for Form ' + (i + 1) + '<br><input class="txtBx" id="chkBxA'  +  i  +  '" type="checkbox">Edit with 5\'s for Form ' + (i + 1) + '<h2 id="h2'  +  i  +  '">Section 1</h2><label id="q1'  +  i  +  '" class="txtBx" for="q1Val' + i + '">question 1.</label><input type="number" type="number" id="q1Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q2'  +  i  +  '" class="txtBx">question 2.</label><input type="number" type="number" id="q2Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q3'  +  i  +  '" class="txtBx">question 3.</label><input type="number" type="number" id="q3Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 2</h2><label id="q4'  +  i  +  '" class="txtBx">question 4.</label><input type="number" type="number" id="q4Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q5'  +  i  +  '" class="txtBx">question 5.</label><input type="number" type="number" id="q5Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q6'  +  i  +  '" class="txtBx">question 6.</label><input type="number" type="number" id="q6Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 3</h2><label id="q7'  +  i  +  '" class="txtBx">question 7.</label><input type="number" type="number" id="q7Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q8'  +  i  +  '" class="txtBx">question 8.</label><input type="number" type="number" id="q8Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q9'  +  i  +  '" class="txtBx">question 9.</label><input type="number" type="number" id="q9Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 4</h2><label id="q10'  +  i  +  '" class="txtBx">question Instructor 1-10.</label><input type="number" type="number" id="q10Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q11'  +  i  +  '" class="txtBx">question Instructor 1-11.</label><input type="number" type="number" id="q11Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q15'  +  i  +  '" class="txtBx">question Instructor 2-10.</label><input type="number" type="number" id="q15Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q16'  +  i  +  '" class="txtBx">question Instructor 2-11.</label><input type="number" type="number" id="q16Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  i  +  '">Section 5</h2><label id="q12'  +  i  +  '" class="txtBx">question 12.</label><input type="number" type="number" id="q12Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q13'  +  i  +  '" class="txtBx">question 13.</label><input type="number" type="number" id="q13Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q14'  +  i  +  '" class="txtBx">question 14.</label><input type="number" type="number" id="q14Val'  +  i  +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br></fieldset></form>'
                     document.getElementById(element).insertAdjacentHTML('beforeend', html);
                }
            }
            
            
            
            //hide Enter # of Evaluations button/ display sub score & reset button
            document.getElementById(DOMstrings.inputBtnSub).style.display = "none";
            document.getElementById(DOMstrings.inputAddNewForm).style.display = "block";
            document.getElementById(DOMstrings.inputBtnSubScoresTop).style.display = "block";
            document.getElementById(DOMstrings.inputBtnRstTop).style.display = "block";
            document.getElementById(DOMstrings.btnDelete).style.display = "block";
            document.getElementById('newTxtBx').style.display = "block";
            document.getElementById('subScores').style.display = "block";
            document.getElementById('btnPrint').style.display = "block";
            document.getElementById(DOMstrings.infoContainer).style.display = "none";
            
        },//end forms
        
        //add single form
        addNewForm: function(){
            var html, element, numSelect, id, newCount;
            
            newCount = count;
            console.log('this is the new count ' + newCount);
            
            document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + (newCount + 1) + '!';
            
            
            
            //console.log("this is the new count: " + newCount);

            element = DOMstrings.formsContainer;
            
            //create html string with place holdertext
             if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                
                     html = '<form id="respForm' + newCount + '" method="post"><fieldset><legend id="lgnd'  +  newCount +  '">Evaluation Form ' + (newCount + 1) + '</legend></label><br><input class="txtBx" id="chkBx'  +  newCount +  '" type="checkbox">All 5\'s for Form ' + (newCount + 1) + '<br><input class="txtBx" id="chkBxA'  +  i  +  '" type="checkbox">Edit with 5\'s for Form ' + (newCount + 1) + '<h2 id="h2'  +  newCount +  '">Section 1</h2><label id="q1'  +  newCount +  '" class="txtBx" for="q1Val' + newCount + '">question 1.</label><input type="number" id="q1Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q2'  +  newCount +  '" class="txtBx">question 2.</label><input type="number" id="q2Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q3'  +  newCount +  '" class="txtBx">question 3.</label><input type="number" id="q3Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 2</h2><label id="q4'  +  newCount +  '" class="txtBx">question 4.</label><input type="number" id="q4Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q5'  +  newCount +  '" class="txtBx">question 5.</label><input type="number" id="q5Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q6'  +  newCount +  '" class="txtBx">question 6.</label><input type="number" id="q6Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 3</h2><label id="q7'  +  newCount +  '" class="txtBx">question 7.</label><input type="number" id="q7Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q8'  +  newCount +  '" class="txtBx">question 8.</label><input type="number" id="q8Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q9'  +  newCount +  '" class="txtBx">question 9.</label><input type="number" id="q9Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 4</h2><label id="q10'  +  newCount +  '" class="txtBx">question Instructor 1-10.</label><input type="number" id="q10Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q11'  +  newCount +  '" class="txtBx">question Instructor 1-11.</label><input type="number" id="q11Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 5</h2><label id="q12'  +  newCount +  '" class="txtBx">question 12.</label><input type="number" id="q12Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q13'  +  newCount +  '" class="txtBx">question 13.</label><input type="number" id="q13Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q14'  +  newCount +  '" class="txtBx">question 14.</label><input type="number" id="q14Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br></fieldset></form>'

                    //insert html 
                    document.getElementById(element).insertAdjacentHTML('beforeend', html);
                }else{
                     html = '<form id="respForm' + newCount + '" method="post"><fieldset><legend id="lgnd'  +  newCount +  '">Evaluation Form ' + (newCount + 1) + '</legend></label><br><input class="txtBx" id="chkBx'  +  newCount +  '" type="checkbox">All 5\'s for Form ' + (newCount + 1) + '<br><input class="txtBx" id="chkBxA'  +  i  +  '" type="checkbox">Edit with 5\'s for Form ' + (newCount + 1) + '<h2 id="h2'  +  newCount +  '">Section 1</h2><label id="q1'  +  newCount +  '" class="txtBx" for="q1Val' + newCount + '">question 1.</label><input type="number" id="q1Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q2'  +  newCount +  '" class="txtBx">question 2.</label><input type="number" id="q2Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q3'  +  newCount +  '" class="txtBx">question 3.</label><input type="number" id="q3Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 2</h2><label id="q4'  +  newCount +  '" class="txtBx">question 4.</label><input type="number" id="q4Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q5'  +  newCount +  '" class="txtBx">question 5.</label><input type="number" id="q5Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q6'  +  newCount +  '" class="txtBx">question 6.</label><input type="number" id="q6Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 3</h2><label id="q7'  +  newCount +  '" class="txtBx">question 7.</label><input type="number" id="q7Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q8'  +  newCount +  '" class="txtBx">question 8.</label><input type="number" id="q8Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q9'  +  newCount +  '" class="txtBx">question 9.</label><input type="number" id="q9Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 4</h2><label id="q10'  +  newCount +  '" class="txtBx">question Instructor 1-10.</label><input type="number" id="q10Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q11'  +  newCount +  '" class="txtBx">question Instructor 1-11.</label><input type="number" id="q11Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q15'  +  newCount +  '" class="txtBx">question Instructor 2-10.</label><input type="number" id="q15Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q16'  +  newCount +  '" class="txtBx">question Instructor 2-11.</label><input type="number" id="q16Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 5</h2><label id="q12'  +  newCount +  '" class="txtBx">question 12.</label><input type="number" id="q12Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q13'  +  newCount +  '" class="txtBx">question 13.</label><input type="number" id="q13Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q14'  +  newCount +  '" class="txtBx">question 14.</label><input type="number" id="q14Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br></fieldset></form>'
                    
                     document.getElementById(element).insertAdjacentHTML('beforeend', html);
                }
            document.getElementById('chkBx' + newCount).focus();
            
        },
        //add single form after deleteing a form
        addNewForm2: function(){
            var html, element, numSelect, id, newCount;
            x = document.getElementById('newTxtBx').childElementCount;
            newCount = parseInt(x) ;
            
            document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + (newCount + 1) + '!';
            
            //console.log("this is the new count: " + newCount);

            element = DOMstrings.formsContainer;
            
           
            //create html string with place holdertext
             if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                
                    html = '<form id="respForm' + newCount + '" method="post"><fieldset><legend id="lgnd'  +  newCount +  '">Evaluation Form ' + (newCount + 1) + '</legend></label><br><input class="txtBx" id="chkBx'  +  newCount +  '" type="checkbox">All 5\'s for Form ' + (newCount + 1) + '<br><input class="txtBx" id="chkBxA'  +  newCount  +  '" type="checkbox">Edit with 5\'s for Form ' + (newCount + 1) + '<h2 id="h2'  +  newCount +  '">Section 1</h2><label id="q1'  +  newCount +  '" class="txtBx" for="q1Val' + newCount + '">question 1.</label><input type="number" id="q1Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q2'  +  newCount +  '" class="txtBx">question 2.</label><input type="number" id="q2Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q3'  +  newCount +  '" class="txtBx">question 3.</label><input type="number" id="q3Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 2</h2><label id="q4'  +  newCount +  '" class="txtBx">question 4.</label><input type="number" id="q4Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q5'  +  newCount +  '" class="txtBx">question 5.</label><input type="number" id="q5Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q6'  +  newCount +  '" class="txtBx">question 6.</label><input type="number" id="q6Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 3</h2><label id="q7'  +  newCount +  '" class="txtBx">question 7.</label><input type="number" id="q7Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q8'  +  newCount +  '" class="txtBx">question 8.</label><input type="number" id="q8Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q9'  +  newCount +  '" class="txtBx">question 9.</label><input type="number" id="q9Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 4</h2><label id="q10'  +  newCount +  '" class="txtBx">question Instructor 1-10.</label><input type="number" id="q10Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q11'  +  newCount +  '" class="txtBx">question Instructor 1-11.</label><input type="number" id="q11Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 5</h2><label id="q12'  +  newCount +  '" class="txtBx">question 12.</label><input type="number" id="q12Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q13'  +  newCount +  '" class="txtBx">question 13.</label><input type="number" id="q13Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q14'  +  newCount +  '" class="txtBx">question 14.</label><input type="number" id="q14Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br></fieldset></form>'

                    //insert html 
                    document.getElementById(element).insertAdjacentHTML('beforeend', html);
                }else{
                      html = '<form id="respForm' + newCount + '" method="post"><fieldset><legend id="lgnd'  +  newCount +  '">Evaluation Form ' + (newCount + 1) + '</legend></label><br><input class="txtBx" id="chkBx'  +  newCount +  '" type="checkbox">All 5\'s for Form ' + (newCount + 1) + '<br><input class="txtBx" id="chkBxA'  +  newCount  +  '" type="checkbox">Edit with 5\'s for Form ' + (newCount + 1) + '<h2 id="h2'  +  newCount +  '">Section 1</h2><label id="q1'  +  newCount +  '" class="txtBx" for="q1Val' + newCount + '">question 1.</label><input type="number" id="q1Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q2'  +  newCount +  '" class="txtBx">question 2.</label><input type="number" id="q2Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q3'  +  newCount +  '" class="txtBx">question 3.</label><input type="number" id="q3Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 2</h2><label id="q4'  +  newCount +  '" class="txtBx">question 4.</label><input type="number" id="q4Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q5'  +  newCount +  '" class="txtBx">question 5.</label><input type="number" id="q5Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q6'  +  newCount +  '" class="txtBx">question 6.</label><input type="number" id="q6Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 3</h2><label id="q7'  +  newCount +  '" class="txtBx">question 7.</label><input type="number" id="q7Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q8'  +  newCount +  '" class="txtBx">question 8.</label><input type="number" id="q8Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q9'  +  newCount +  '" class="txtBx">question 9.</label><input type="number" id="q9Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 4</h2><label id="q10'  +  newCount +  '" class="txtBx">question Instructor 1-10.</label><input type="number" id="q10Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q11'  +  newCount +  '" class="txtBx">question Instructor 1-11.</label><input type="number" id="q11Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q15'  +  newCount +  '" class="txtBx">question Instructor 2-10.</label><input type="number" id="q15Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q16'  +  newCount +  '" class="txtBx">question Instructor 2-11.</label><input type="number" id="q16Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><h2 id="h2'  +  newCount +  '">Section 5</h2><label id="q12'  +  newCount +  '" class="txtBx">question 12.</label><input type="number" id="q12Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q13'  +  newCount +  '" class="txtBx">question 13.</label><input type="number" id="q13Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br><label id="q14'  +  newCount +  '" class="txtBx">question 14.</label><input type="number" id="q14Val'  +  newCount +  '" class="txtBx" min="1" max="5" onchange="handleChange(this);" required><br></fieldset></form>'
                    
                     document.getElementById(element).insertAdjacentHTML('beforeend', html);
                }
            
//           document.getElementById('q14Val'  +  (newCount-1)).focus();
           //document.getElementById('newForm'  + newCount).focus();
            document.getElementById('chkBx' + newCount).focus();
            
        },
       
        //make DOMstrings public for controller access
        getDOMstrings: function() {
            return DOMstrings;
        },
        
        //push check box label IDs into an array
        getChkArray: function(){
            
            console.log('this is the getChkArray function');
            
            var CHECKBOX = [];
            var x = document.getElementById('newTxtBx').childElementCount;
            var evalNum = parseInt(x);
            
            for(i = 0; i < evalNum; i++){
                   CHECKBOX.push('chkBx' + i);
              }
            
             return {
                chkX: CHECKBOX
            };  
        },
        
        getChkArrayA: function(){
            
            console.log('this is the getChkArrayA function');
            
            var CHECKBOXa = [];
            var x = document.getElementById('newTxtBx').childElementCount;
            var evalNum = parseInt(x);
            
            for(i = 0; i < evalNum; i++){
                   CHECKBOXa.push('chkBxA' + i);
              }
            
             return {
                chkXa: CHECKBOXa
            };  
        },
        
        // isChecked group form 
        isChecked: function(){
            var x = document.getElementById('newTxtBx').childElementCount;
            var evalNum = parseInt(x);
            selectArray = [];
            
            console.log('this is the eval numer ' + evalNum);
            
            if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
               for(i = 0; i < evalNum; i++){
                   selectArray.push(['chkBx' + i, 'q1Val' + i, 'q2Val' + i, 'q3Val' + i, 'q4Val' + i, 'q5Val' + i, 'q6Val' + i, 'q7Val' + i, 'q8Val' + i, 'q9Val' + i, 'q10Val' + i, 'q11Val' + i, 'q12Val' + i, 'q13Val' + i, 'q14Val' + i]);
               }
            }else{
               for(i = 0; i < evalNum; i++){
                   selectArray.push(['chkBx' + i, 'q1Val' + i, 'q2Val' + i, 'q3Val' + i, 'q4Val' + i, 'q5Val' + i, 'q6Val' + i, 'q7Val' + i, 'q8Val' + i, 'q9Val' + i, 'q10Val' + i, 'q11Val' + i, 'q15Val' + i, 'q16Val' + i, 'q12Val' + i, 'q13Val' + i, 'q14Val' + i]);
               }
            }
            
            chkBxsArray.forEach(output);//from ctrlCheckBox in CONTROLLER MODULE
            function output(item, index, array){
                var checkBox = (item);
                var newCheckBox = document.getElementById(checkBox);
                
                newCheckBox.addEventListener('click', function(){
                    if(newCheckBox.checked){
                        var str = item;
                        
                        var Qstr = str.substr(5);
                            
                        selectArray.forEach(outputSelect);
                            
                        function outputSelect(item, index, array){
                        var x = item.indexOf(newCheckBox.id);
                        if(x >= 0){
                            var y = item;
                        }else{
                            return;
                        }
                            //q values = 5 when checked
                            y.forEach(output1);
                            function output1(item2, index2, array2){
                                if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                                }else{
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,15,16,12,13,14];
                                }
                                qValArr.forEach(outputQval);
                                function outputQval(itemQval){
                                    var z = item2.indexOf('q' + itemQval + 'Val' + Qstr);
                                    if(z >= 0){
                                        var Q = item2;
                                    }else{
                                        return;
                                    }
                                    
                                    function multiChkBx1(){
                                        var Q1 = document.getElementById(Q);
                                        var edit5Chk = document.getElementById('chkBxA' + Qstr);
                                        if(edit5Chk.checked){
                                            //alert('edit5checked');
                                            edit5Chk.checked = false;
                                             Q1.disabled = true;
                                        }else{
                                            Q1.value = 5;
                                            Q1.disabled = true;
                                        }
                                    }
                                    multiChkBx1();
                                } 
                            }//end q values = 5 when checked
                        }//end function output selecetion add 5 for value if check is checked
                    }else{//value is blank if check box is not checked
                        var str = item;

                        var Qstr = str.substr(5);
                            
                        selectArray.forEach(outputSelect);
                            
                        function outputSelect(item, index, array){
                            var x = item.indexOf(newCheckBox.id);
                            if(x >= 0){
                                var y = item;
                            }else{
                                return;
                            }
                            
                            //q values blank when not checked
                            y.forEach(output1);
                            function output1(item2, index2, array2){
                                if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                                }else{
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,15,16,12,13,14];
                                }
                                qValArr.forEach(outputQval);
                                function outputQval(itemQval){
                                    var z = item2.indexOf('q' + itemQval + 'Val' + Qstr);
                                    if(z >= 0){
                                        var Q = item2;
                                    }else{
                                        return;
                                    }
                                    
                                    function multiChkBx2(){
                                        var Q1 = document.getElementById(Q);
                                        var editChk = document.getElementById('chkBxA' + Qstr).checked;
                                        
                                        if(editChk){
                                            Q1.value = "5";
                                            Q1.disabled = false;
                                            editChk
                                        }else{
                                            Q1.value = "";
                                            Q1.disabled = false;
                                        }
                                    }//end multiChkBx2 function
                                    multiChkBx2();
                                } 
                            }//end blank q values
                        }// forEach function outputSelect
                    }//end value is blank if check box is not checked
                });//end checkbox click
            }//end forEach chkBxsArray       
        },// end isChecked group form 
        
        isCheckedA: function(){
            var x = document.getElementById('newTxtBx').childElementCount;
            var evalNum = parseInt(x);
            selectArrayA = [];
            
            console.log('this is the eval numer ' + evalNum  + 'A');
            
            if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
               for(i = 0; i < evalNum; i++){
                   selectArrayA.push(['chkBxA' + i, 'q1Val' + i, 'q2Val' + i, 'q3Val' + i, 'q4Val' + i, 'q5Val' + i, 'q6Val' + i, 'q7Val' + i, 'q8Val' + i, 'q9Val' + i, 'q10Val' + i, 'q11Val' + i, 'q12Val' + i, 'q13Val' + i, 'q14Val' + i]);
               }
            }else{
               for(i = 0; i < evalNum; i++){
                   selectArrayA.push(['chkBxA' + i, 'q1Val' + i, 'q2Val' + i, 'q3Val' + i, 'q4Val' + i, 'q5Val' + i, 'q6Val' + i, 'q7Val' + i, 'q8Val' + i, 'q9Val' + i, 'q10Val' + i, 'q11Val' + i, 'q15Val' + i, 'q16Val' + i, 'q12Val' + i, 'q13Val' + i, 'q14Val' + i]);
               }
            }
            
            chkBxsArrayA.forEach(output);//from ctrlCheckBox in CONTROLLER MODULE
            function output(item, index, array){
                var checkBoxA = (item);
                var newCheckBoxA = document.getElementById(checkBoxA);
                
                newCheckBoxA.addEventListener('click', function(){
                    if(newCheckBoxA.checked){
                        var str = item;
                        
                        var Qstr = str.substr(6);
                            
                        selectArrayA.forEach(outputSelect);
                            
                        function outputSelect(item, index, array){
                        var x = item.indexOf(newCheckBoxA.id);
                        if(x >= 0){
                            var y = item;
                        }else{
                            return;
                        }
                            //q values = 5 when checked
                            y.forEach(output1);
                            function output1(item2, index2, array2){
                                if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                                }else{
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,15,16,12,13,14];
                                }
                                qValArr.forEach(outputQval);
                                function outputQval(itemQval){
                                    var z = item2.indexOf('q' + itemQval + 'Val' + Qstr);
                                    if(z >= 0){
                                        var Q = item2;
                                    }else{
                                        return;
                                    }
                                    
                                    function multiChkBxA1(){
                                        var Q1 = document.getElementById(Q);
                                        var editChk = document.getElementById('chkBx' + Qstr);
                                        if(editChk.checked){
                                            //alert('edit5checked');
                                            editChk.checked = false;
                                            Q1.disabled = false;
                                        }else{
                                            Q1.value = 5;
                                            Q1.disabled = false;
                                        }
                                    }
                                    multiChkBxA1();
                                } 
                            }//end q values = 5 when checked
                        }//end function output selecetion add 5 for value if check is checked
                    }else{//value is blank if check box is not checked
                        var str = item;

                        var Qstr = str.substr(6);
                            
                        selectArrayA.forEach(outputSelect);
                            
                        function outputSelect(item, index, array){
                            var x = item.indexOf(newCheckBoxA.id);
                            if(x >= 0){
                                var y = item;
                            }else{
                                return;
                            }
                            
                            //q values blank when not checked
                            y.forEach(output1);
                            function output1(item2, index2, array2){
                                if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                                }else{
                                   var qValArr = [1,2,3,4,5,6,7,8,9,10,11,15,16,12,13,14];
                                }
                                qValArr.forEach(outputQval);
                                function outputQval(itemQval){
                                    var z = item2.indexOf('q' + itemQval + 'Val' + Qstr);
                                    if(z >= 0){
                                        var Q = item2;
                                    }else{
                                        return;
                                    }
                                    var Q1 = document.getElementById(Q);
                                    
                                    var fiveChk = document.getElementById('chkBx' + Qstr).checked;
                                    
                                    function multiChkBxA2(){
                                        if(fiveChk){
                                            Q1.value = "5";
                                            Q1.disabled = true;
                                        }else{
                                            Q1.value = "";
                                            Q1.disabled = false;
                                        }
                                    }
                                    multiChkBxA2();
                                } 
                            }//end blank q values
                        }// forEach function outputSelect
                    }//end value is blank if check box is not checked
                });//end checkbox click
            }//end forEach chkBxsArray       
        },// end isChecked group form 
        
        //get eval responses
        getDynamicInputs: function(){
            
            var x = document.getElementById('newTxtBx').childElementCount;
            var evalNum = parseInt(x);
            var newArray = [];
            var section1Array = [];
            var section2Array = [];
            var section3Array = [];
            var section4Array = [];
            var section4aArray = [];
            var section5Array = [];
            
            newCount = evalNum - 1;
            
            var pushVals = function (){
                
                for(j = 0; j <= newCount; j++){
                    
                    if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                        
                        //all responses
                        newArray.push(parseInt(document.getElementById('q1Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q2Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q3Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q4Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q5Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q6Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q7Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q8Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q9Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q10Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q11Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q12Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q13Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q14Val' +  j).value));

                        //section 1 responses
                        section1Array.push(parseInt(document.getElementById('q1Val' +  j).value));
                        section1Array.push(parseInt(document.getElementById('q2Val' +  j).value));
                        section1Array.push(parseInt(document.getElementById('q3Val' +  j).value));

                        //section 2 responses
                        section2Array.push(parseInt(document.getElementById('q4Val' +  j).value));
                        section2Array.push(parseInt(document.getElementById('q5Val' +  j).value));
                        section2Array.push(parseInt(document.getElementById('q6Val' +  j).value));

                        //section 3 responses
                        section3Array.push(parseInt(document.getElementById('q7Val' +  j).value));
                        section3Array.push(parseInt(document.getElementById('q8Val' +  j).value));
                        section3Array.push(parseInt(document.getElementById('q9Val' +  j).value));

                        //section 4 responses
                        section4Array.push(parseInt(document.getElementById('q10Val' +  j).value));
                        section4Array.push(parseInt(document.getElementById('q11Val' +  j).value));

                        //section 5 responses
                        section5Array.push(parseInt(document.getElementById('q12Val' +  j).value));
                        section5Array.push(parseInt(document.getElementById('q13Val' +  j).value));
                        section5Array.push(parseInt(document.getElementById('q14Val' +  j).value));
                    
                    }else{
                        
                        newArray.push(parseInt(document.getElementById('q1Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q2Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q3Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q4Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q5Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q6Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q7Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q8Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q9Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q10Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q11Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q15Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q16Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q12Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q13Val' +  j).value));
                        newArray.push(parseInt(document.getElementById('q14Val' +  j).value));

                        //section 1 responses
                        section1Array.push(parseInt(document.getElementById('q1Val' +  j).value));
                        section1Array.push(parseInt(document.getElementById('q2Val' +  j).value));
                        section1Array.push(parseInt(document.getElementById('q3Val' +  j).value));

                        //section 2 responses
                        section2Array.push(parseInt(document.getElementById('q4Val' +  j).value));
                        section2Array.push(parseInt(document.getElementById('q5Val' +  j).value));
                        section2Array.push(parseInt(document.getElementById('q6Val' +  j).value));

                        //section 3 responses
                        section3Array.push(parseInt(document.getElementById('q7Val' +  j).value));
                        section3Array.push(parseInt(document.getElementById('q8Val' +  j).value));
                        section3Array.push(parseInt(document.getElementById('q9Val' +  j).value));

                        //section 4 responses
                        //Instructor 1
                        section4Array.push(parseInt(document.getElementById('q10Val' +  j).value));
                        section4Array.push(parseInt(document.getElementById('q11Val' +  j).value));

                        //Instructor 2
                        section4aArray.push(parseInt(document.getElementById('q15Val' +  j).value));
                        section4aArray.push(parseInt(document.getElementById('q16Val' +  j).value));

                        //section 5 responses
                        section5Array.push(parseInt(document.getElementById('q12Val' +  j).value));
                        section5Array.push(parseInt(document.getElementById('q13Val' +  j).value));
                        section5Array.push(parseInt(document.getElementById('q14Val' +  j).value));
                    }//end if
                }//end for
            }//end pushVals function
            
            pushVals();
            
            if(document.getElementById(DOMstrings.inputTrnSelect).value == 1){
                return {
                    respArray: newArray,
                    sec1Array: section1Array,
                    sec2Array: section2Array,
                    sec3Array: section3Array,
                    sec4Array: section4Array,
                    sec5Array: section5Array
                };
            }else{
                return {
                    respArray: newArray,
                    sec1Array: section1Array,
                    sec2Array: section2Array,
                    sec3Array: section3Array,
                    sec4Array: section4Array,
                    sec4aArray: section4aArray,
                    sec5Array: section5Array
                };
            }

        }//end get Dynamic Inputs
         
    };//end return for all in UI module
  
})();//end UI module/UIController IIFE

//CONTROLLER MODULE
var controller = (function(calculatorCtrl, UICtrl){
    
    //function for all eventlisteners
    var setupEventListeners = function(){
        
        var DOM = UICtrl.getDOMstrings();
        
        document.getElementById(DOM.inputBtnSub).addEventListener('click', function() {
            //1. Add forms with checkboxes to UI
        if(document.getElementById('numSelect').value > 0 && document.getElementById('numTrn').value > 0){
            ctrlAddForms();
            ctrlCheckBox();
            ctrlCheckBoxA();
            //document.getElementById('q1Val0').focus();
        }else{
            alert('Please choose at least one trainer to continue.');
        }
            
            
        }); //end submit # of eval forms btn
     
        document.getElementById(DOM.inputAddNewForm).addEventListener('click', function() {
            //1. Add forms with checkboxes to UI
            ctlAddNewForm();
            ctrlCheckBox();
            ctrlCheckBoxA();
            
        }); //end submit single eval forms btn
        
        document.getElementById('btnAddNewForm2').addEventListener('click', function(){
            ctlAddNewForm2();
            ctrlCheckBox();
            ctrlCheckBoxA();
        });//end btnAddNewForm2
    
        document.getElementById(DOM.inputBtnSubScoresTop).addEventListener('click', function(){
            
            document.getElementById('disContainer').style.display = "block";
                
            //console.log('Score btn was clicked');
            console.log('this is input one ' + document.getElementById('q1Val0'));
            
            var x = document.getElementById('newTxtBx').childElementCount;
            var numForms = parseInt(x);
             
            //1. Get the inputed eval form responses, 2. Add reponses to calculator controller, 3. Calculate total course average, avgerages for each section, and for each trainer
            ctrlAddResponses();
            

            //4. Display results on the UI
            var calcAvg = calculatorCtrl.avg();
            
            if(isNaN(calcAvg.avgAll)){
                alert('please enter a response for all questions!');
            }else{
                if(document.getElementById(DOM.inputTrnSelect).value == 1){
                var calcAvg = calculatorCtrl.avg();
                avgAll = calcAvg.avgAll;
                avgSec1 = calcAvg.avgSec1;
                avgSec2 = calcAvg.avgSec2;
                avgSec3 = calcAvg.avgSec3;
                avgSec4 = calcAvg.avgSec4;
                avgSec5 = calcAvg.avgSec5;
                console.log('this is the overall average: ' + avgAll);
                document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + numForms + '!';
                document.getElementById('displayScores').innerHTML = 'The overall course average is ' + avgAll + '!';
                document.getElementById('displayScores1').innerHTML = 'Section 1 average is ' + avgSec1 + '!';
                document.getElementById('displayScores2').innerHTML = 'Section 2 average is ' + avgSec2 + '!';
                document.getElementById('displayScores3').innerHTML = 'Section 3 average is ' + avgSec3 + '!';
                document.getElementById('displayScores4').innerHTML = 'Section 4 average is ' + avgSec4 + '!';
                document.getElementById('displayScores5').innerHTML = 'Section 5 average is ' + avgSec5 + '!';
            }else{
                var calcAvg = calculatorCtrl.avg2();
                avgAll = calcAvg.avgAll;
                avgSec1 = calcAvg.avgSec1;
                avgSec2 = calcAvg.avgSec2;
                avgSec3 = calcAvg.avgSec3;
                avgSec4 = calcAvg.avgSec4;
                avgSec4a = calcAvg.avgSec4a;
                avgSec5 = calcAvg.avgSec5;
                console.log('this is the overall average: ' + avgAll);
                document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + numForms + '!';
                document.getElementById('displayScores').innerHTML = 'The overall course average is ' + avgAll + '!';
                document.getElementById('displayScores1').innerHTML = 'Section 1 average is ' + avgSec1 + '!';
                document.getElementById('displayScores2').innerHTML = 'Section 2 average is ' + avgSec2 + '!';
                document.getElementById('displayScores3').innerHTML = 'Section 3 average is ' + avgSec3 + '!';
                document.getElementById('displayScores4').innerHTML = 'Section 4 average is ' + avgSec4 + '!';
                document.getElementById('displayScores4a').innerHTML = 'Section 4a average is ' + avgSec4a + '!';
                document.getElementById('displayScores5').innerHTML = 'Section 5 average is ' + avgSec5 + '!';
            }  
            }
        });//end submit scores btn
    
        
        document.getElementById('btnDelete').addEventListener('click', function(){
            console.log('this is the delete btn');
             var x = document.getElementById('newTxtBx').childElementCount;
            console.log('this is the new one ' + x);
            var numForms = parseInt(x);
        
            
            //1. identify last form to delete
            var x = document.getElementById('newTxtBx').lastElementChild;
            console.log('this is the last form: ' + x.id);
            
            //2. delete last form from DATA STRUCTURE
            
            var dynInputs = UICtrl.getDynamicInputs();
            
            if(document.getElementById(DOM.inputTrnSelect).value == 1){
                var responseArray = dynInputs.respArray;
                var sec1Arr = dynInputs.sec1Array;
                var sec2Arr = dynInputs.sec2Array;
                var sec3Arr = dynInputs.sec3Array;
                var sec4Arr = dynInputs.sec4Array;
                var sec5Arr = dynInputs.sec5Array;
                
                calculatorCtrl.deleteForm(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec5Arr);
            }else{
                var responseArray = dynInputs.respArray;
                var sec1Arr = dynInputs.sec1Array;
                var sec2Arr = dynInputs.sec2Array;
                var sec3Arr = dynInputs.sec3Array;
                var sec4Arr = dynInputs.sec4Array;
                var sec4aArr = dynInputs.sec4aArray;
                var sec5Arr = dynInputs.sec5Array;
                
                calculatorCtrl.deleteForm2(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec4aArr, sec5Arr);
            }
            
            if(x.id == 'respForm0'){
                //3. delete last form from UI
                location.reload();
            }else{
                
                //3. delete last form from UI
                x.parentNode.removeChild(x);

                //4. update display
                ctrlAddResponses();

                //5. Display results on the UI
                if(document.getElementById(DOM.inputTrnSelect).value == 1){
                    var calcAvg = calculatorCtrl.avg();
                    avgAll = calcAvg.avgAll;
                    avgSec1 = calcAvg.avgSec1;
                    avgSec2 = calcAvg.avgSec2;
                    avgSec3 = calcAvg.avgSec3;
                    avgSec4 = calcAvg.avgSec4;
                    avgSec5 = calcAvg.avgSec5;
                    console.log('this is the overall average: ' + avgAll);
                    document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + (numForms - 1) + '!';
                    document.getElementById('displayScores').innerHTML = 'The overall course average is ' + avgAll + '!';
                    document.getElementById('displayScores1').innerHTML = 'Section 1 average is ' + avgSec1 + '!';
                    document.getElementById('displayScores2').innerHTML = 'Section 2 average is ' + avgSec2 + '!';
                    document.getElementById('displayScores3').innerHTML = 'Section 3 average is ' + avgSec3 + '!';
                    document.getElementById('displayScores4').innerHTML = 'Section 4 average is ' + avgSec4 + '!';
                    document.getElementById('displayScores5').innerHTML = 'Section 5 average is ' + avgSec5 + '!';
                }else{
                    var calcAvg = calculatorCtrl.avg2();
                    avgAll = calcAvg.avgAll;
                    avgSec1 = calcAvg.avgSec1;
                    avgSec2 = calcAvg.avgSec2;
                    avgSec3 = calcAvg.avgSec3;
                    avgSec4 = calcAvg.avgSec4;
                    avgSec4a = calcAvg.avgSec4a;
                    avgSec5 = calcAvg.avgSec5;
                    console.log('this is the overall average: ' + avgAll);
                    document.getElementById('displayNumPages').innerHTML = 'Total number of forms ' + (numForms - 1) + '!';
                    document.getElementById('displayScores').innerHTML = 'The overall course average is ' + avgAll + '!';
                    document.getElementById('displayScores1').innerHTML = 'Section 1 average is ' + avgSec1 + '!';
                    document.getElementById('displayScores2').innerHTML = 'Section 2 average is ' + avgSec2 + '!';
                    document.getElementById('displayScores3').innerHTML = 'Section 3 average is ' + avgSec3 + '!';
                    document.getElementById('displayScores4').innerHTML = 'Section 4 average is ' + avgSec4 + '!';
                    document.getElementById('displayScores4a').innerHTML = 'Section 4a average is ' + avgSec4a + '!';
                    document.getElementById('displayScores5').innerHTML = 'Section 5 average is ' + avgSec5 + '!';
                }
            }
           
            
        });//end delete btn
        
        document.getElementById('btnPrint').addEventListener('click', function(){
            ctrlPrint();
        });
//end print button        
        document.getElementById(DOM.inputBtnRstTop).addEventListener('click', function(){
            //1. reload page and clear app
            location.reload();
        });//end reset btn
        
        
    };//end setupEventListeners
    
    var ctrlAddForms = function(){
        var input;
        
        //1. Get the inputed number of eval forms
        input = UICtrl.getEvalNum();
        //console.log(input);
        
        //2. link function to eventlistener to add forms to UI
        UICtrl.addFormsUI();
        
        //3. Geneate new ID for additional forms added
        var x = document.getElementById('newTxtBx').childElementCount;
        var num = parseInt(x);
        //console.log(num);
        
        var button = document.getElementById("btnAddNewForm");
        //count = num - 1 ;
        
        count = parseInt(x);
        
        console.log('this is the orginal count ' + count);
        
        button.onclick = function() {
            count += 1;
        };
    }
    
    var ctlAddNewForm = function(){
        
        //1. link function to eventlistener to add additonal forms to UI
        UICtrl.addNewForm();
        
    }
    
    var ctlAddNewForm2 = function(){
        
        //1. link function to eventlistener to add additonal forms to UI
        UICtrl.addNewForm2();
        
    }
 
    var ctrlAddResponses = function(){
        var input, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec4aArr, sec5Arr, responseArray, newForm;
        
        //1. get input number of eval forms
        input = UICtrl.getEvalNum();
        
        //2. get reponses entered into eval response fields
        dynInputs = UICtrl.getDynamicInputs();
        
        if(document.getElementById('numTrn').value == 1){
            responseArray = dynInputs.respArray;
            sec1Arr = dynInputs.sec1Array;
            sec2Arr = dynInputs.sec2Array;
            sec3Arr = dynInputs.sec3Array;
            sec4Arr = dynInputs.sec4Array;
            sec5Arr = dynInputs.sec5Array;
            
            //Add eval forms to the calculator controller 
            newForm = calculatorCtrl.calcAverages(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec5Arr);
            
        }else{
            responseArray = dynInputs.respArray;
            sec1Arr = dynInputs.sec1Array;
            sec2Arr = dynInputs.sec2Array;
            sec3Arr = dynInputs.sec3Array;
            sec4Arr = dynInputs.sec4Array;
            sec4aArr = dynInputs.sec4aArray;
            sec5Arr = dynInputs.sec5Array;
    
            //Add eval forms to the calculator controller 
            newForm = calculatorCtrl.calcAverages2(responseArray, sec1Arr, sec2Arr, sec3Arr, sec4Arr, sec4aArr, sec5Arr);
    
        }
    }

    var ctrlCheckBox = function(){
        
        chkArray = UICtrl.getChkArray();
        
        chkBxsArray = chkArray.chkX;
         
        UICtrl.isChecked();
         
    }//end ctrlCheckBox
    
    var ctrlCheckBoxA = function(){
        
        chkArrayA = UICtrl.getChkArrayA();
        
        chkBxsArrayA = chkArrayA.chkXa;
         
        UICtrl.isCheckedA();
         
    }//end ctrlCheckBox
    
    var ctrlPrint = function(disWrapper){
        
            var content = document.getElementById('disWrapper').innerHTML;
            var mywindow = window.open('', 'Print', 'height=600,width=800');
            
            mywindow.document.write('<html><head><title>Course Averages</title>');
            mywindow.document.write('</head><body>');
            mywindow.document.write(content);
            mywindow.document.write('</body></html>');

            mywindow.document.close();
            mywindow.focus()
            mywindow.print();
            mywindow.close();
            return true;
        
    }//end ctrlPrint
    
    return {
        init: function(){
            console.log('App has started');
            setupEventListeners();
        }
    };
    
})(calculatorController, UIController);//end controller module

controller.init();
