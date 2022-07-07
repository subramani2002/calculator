function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = FormattedNum(num);
    }
}
function FormattedNum(num){
        if(num=="-"){
            return "";
        }
        else{
        let n = Number(num);
        let value = n.toLocaleString("en");
        return value;
        }
}
let reverseFormattedNum = (num)=>{
    let value = num.toString();
    return Number(value.replace(/,/g,''));
}
let operator = document.getElementsByClassName("operator");
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            let output = reverseFormattedNum(getOutput()).toString();
            if(output){
                output = output.substring(0,output.length - 1);
                printOutput(output);
            }
        }
        else{
            let output = getOutput();
            let history = getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length - 1])){
                    history = history.toString();
                    history = history.substring(0,history.length - 1);
                }
            }
            if(output!="" || history!=""){
                output = output=="" ?output:reverseFormattedNum(output);
                history = history + output;
                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
let number = document.getElementsByClassName("number");
for(let i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        let value = reverseFormattedNum(getOutput());
        if(value!=NaN){
            value = value + this.id;
            printOutput(value);
        }
    });
}