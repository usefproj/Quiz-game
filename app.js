var questionSet
function getQuiz() {
    questionSet = JSON.parse(localStorage.getItem("set"))
}

const ul = document.querySelector("ul")
const choices = document.querySelectorAll(".answers");
const Q = document.querySelector("h2")
var qNum = 0;
var score = 0;
getQuiz()
setupQuestion()
function setupQuestion() {
    if (qNum<questionSet.length) {
        Q.innerText = questionSet[qNum][`Q${qNum+1}`]
        for (let i = 0; i < choices.length; i++) {
            choices[i].innerText = questionSet[qNum][`a${i+1}`][0]
            choices[i].classList.remove("correct","wrong")
        }
        qNum += 1;
        isSelected = false
    } else {
        console.log(score);
    }
}
function getKey(obj, value) {
    const x = Object.keys(obj).find(key => obj[key][1] == value);
    return matchingElements = Array.from(choices).filter((el) => el.textContent.includes(questionSet[qNum-1][x][0]))
}
function getAnswer(element,num){
    if (!isSelected) {
        if (questionSet[qNum-1][`a${num}`][1]){
            element.classList.add("correct");
            isSelected = true
            score ++;
        } else {
            element.classList.add("wrong");
            isSelected = true
            getKey(questionSet[qNum-1],true)[0].classList.add("correct")
        }
    }
}
