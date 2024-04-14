
let ques =[
// Array of questions with placeholders for user answers
    {
        id:1,
        question: "What is your full name?",
        answer:""
    }
    ,
    {
        id:2,
        question: "What is your email address?",
        answer:""
    }
    ,

    {
        id:3,
        question: "How old are you?",
        answer:""
    }
    ,
    {
        id:4,
        question: "What is your gender?",
        answer:""
    }
    ,
    {
        id:5,
        question: "Are you aware of the importance of clean water?",
        answer:""
    }
    ,
    {
        id:6,
        question: "Participated in clean water activities?",
        answer:""
    }
    ,

    {
        id:7,
        question: "What are the challenges of getting clean water?",
        answer:""
    }
    ,
    {
        id:8,
        question: "Interested in sustainable water practices?",
        answer:""
    }
    ,
    {
        id:9,
        question: "Know details of local sanitation facilities?",
        answer:""
    }
    ,
    {
        id:10,
        question: "Faced with hygiene challenges?",
        answer:""
    }
    ,

    {
        id:11,
        question: "What sanitary improvements are expected?",
        answer:""
    }
    ,
    {
        id:12,
        question: "Interested in participating in sanitation projects?",
        answer:""
    }

];
let questag = [
    // Array of question tags for displaying question step and number
    "step 1 personal details| question 1/4",
    "step 1 personal details| question 2/4",
    "step 1 personal details| question 3/4",
    "step 1 personal details| question 4/4",
    "step 2 Clean Water Awareness| question 1/4",
    "step 2 Clean Water Awareness| question 2/4",
    "step 2 Clean Water Awareness| question 3/4",
    "step 2 Clean Water Awareness| question 4/4",
    "step 3 Sanitation Practices| question 1/4",
    "step 3 Sanitation Practices| question 2/4",
    "step 3 Sanitation Practices| question 3/4",
    "step 3 Sanitation Practices| question 4/4",

];
let popCard = document.getElementById("popup-1");

let index = 0;

// Function to generate questions for the user
let genQuestions =()=>{

    // Check if all questions have been answered
    if (index === ques.length) {
        index = 0;
    }
    // Filter out unanswered questions
    let unansweredQuestions = ques.filter(e => e.answer === "");
    // If there are unanswered questions, generate a card for the next question
    if (unansweredQuestions.length > 0){

        if (ques[index].answer === ""){
            genCard(ques[index])
        }else {
            index++
            setTimeout(genQuestions,1000)
        }
    }
};

// Function to generate a card for a question
let genCard = (e)=>{
    // Show the question card
    document.getElementById("popup-1").classList.toggle("active");

    // Populate the question card with the question text
    popCard.innerHTML= ``;
    popCard.innerHTML=`
        <!-- HTML content for the question card-->
             <div class="popup" id="popup-1">
                 <div class="overlay"></div>
                 <div class="content">
                    <h3>${questag[index]}</h3>
                    <div class="content1">
                        <label for="answer" class="question">${e.question}</label><br>
                        <input type="text" name="answer" id="answer" placeholder="Enter your answer here">
                    </div>
                    <div class="buttons">
                         <button class="skip" onclick= 'skipQuestion("")'>Skip</button>
                         <button class="next" onclick="nextQuestion()">Next</button>    
                    </div>
                </div>
             </div>
        `;

};

// Function to skip a question
let skipQuestion=()=>{
    // Hide the question card
    document.getElementById("popup-1").classList.remove("active");
    // Move to the next question
    index++;
    // Print the updated list of answered questions
    printList();
    // Update the progress bar
    progBar();
    // Generate the next question
    setTimeout(genQuestions,1000);
};

// Function to answer a question
let nextQuestion = ()=>{
    // Set the answer to the current question
    ques[index].answer = document.getElementById("answer").value;
    // Clear the answer input field
    document.getElementById("answer").value ="";
    // Hide the question card
    document.getElementById("popup-1").classList.remove("active");
    // Move to the next question
    index++;
    // Print the updated list of answered questions
    printList();
    // Update the progress bar
    progBar();
    // Generate the next question
    setTimeout(genQuestions,1000);
};

// Function to print the list of answered questions
let printList=()=>{
    // Get the list elements
    let listItem1 = document.getElementById("list1");
    let listItem2 = document.getElementById("list2");
    let listItem3 = document.getElementById("list3");
    // Clear the list elements
    listItem1.innerHTML = "";
    listItem2.innerHTML = "";
    listItem3.innerHTML = "";

    // Iterate over the questions and display the answered ones in the appropriate list
    ques.forEach(e=>{

        if(e.answer !==""){
            let newElement = document.createElement('li');
            newElement.innerHTML = `${e.id} . ${e.question} ${e.answer}`;

            if (e.id <= 4) {
                listItem1.appendChild(newElement);
            } else if (e.id <= 8) {
                listItem2.appendChild(newElement);
            } else {
                listItem3.appendChild(newElement);
            }
        }
    });
};

// Function to update the progress bar
let progBar = ()=>{

    // Get the progress bar element and progress value element
    let prog = document.getElementById("file");
    let progressValue = document.getElementById("progressValue");
    // Calculate the completion percentage
    let completed = ques.filter(e => e.answer !== "").length;
    let total = ques.length;
    let percentage = Math.round((completed / total) * 100);
    // Update the progress bar attributes and value
    prog.setAttribute("max", String(ques.length));
    prog.setAttribute("value", String( ques.filter(e=> e.answer!== "").length));
    progressValue.innerHTML = `Profile ${percentage}% Completed`;

};
// Initialize the progress bar
progBar();
