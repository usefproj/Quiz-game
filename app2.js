const inputQ = document.querySelector("#setQ")
const set1 = document.querySelector("#set1")
const set2 = document.querySelector("#set2")
const set3 = document.querySelector("#set3")
const set4 = document.querySelector("#set4")
const true1 = document.querySelector("#true1")
const true2 = document.querySelector("#true2")
const true3 = document.querySelector("#true3")
const true4 = document.querySelector("#true4")
var questionSet =[]
function setQuestion() {
        if (inputQ.value != "") {
          questionObj={
            Q1 : inputQ.value,
            a1: [set1.value, true1.checked],
            a2 : [set2.value, true2.checked],
            a3 : [set3.value, true3.checked],
            a4 : [set4.value, true4.checked]
        }
        questionSet.push(questionObj)
        
        }
        console.log(questionSet);
        saveQuiz()
    }
function andMore() {
    inputQ.value="";
    set1.value="";
    set2.value="";
    set3.value="";
    set4.value="";
    setQuestion()
}
function saveQuiz(){
    localStorage.setItem("set",JSON.stringify(questionSet))
    console.log(localStorage);
    get = JSON.parse(localStorage.getItem("set"));
    console.log(get);
}