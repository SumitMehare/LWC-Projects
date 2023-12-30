import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}
    correctAnswers = 0
    isSubmitted = false
    myQuestions = [
        {
        id:"Question 1:",
        question:"Which is not Salesforce cloud?",
        answers:{
            a:"Sales",
            b:"Marketing",
            c:"Experience",
            d:"Storage"
        },
        correctAnswer:"d"
    },
    {
        id:"Question 2:",
        question:"Which is not Object of Sales cloud?",
        answers:{
            a:"People",
            b:"Case",
            c:"Opportunity",
            d:"Contact"
        },
        correctAnswer:"a"
    },
    {
        id:"Question 3:",
        question:"Which is your company name?",
        answers:{
            a:"TCS",
            b:"Capgemini",
            c:"Infosys",
            d:"IBM"
        },
        correctAnswer:"b"
    }
]
    changeHandler(event){
        console.log('name:-'+event.target.name);
        console.log('value:-'+event.target.value);
        const {name, value} = event.target
        this.selected = {...this.selected, [name]:value}
    }
    get notAllSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers = correct.length
        console.log('correct answers'+ this.correctAnswers)
        this.isSubmitted = true
    }
    get scoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
    }
    resetHandler(){
        this.selected ={}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}