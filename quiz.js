
let questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyperlinks and Text Markup Language",
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "Choose the correct HTML tag for the largest heading?",
      answer: "&#60;H1&#62;",
      options: [
        "&#60;H1&#62;",
        "&#60;H6&#62;",
        "&#60;H10&#62;",
        "&#60;HEAD&#62;"
      ]
    },
    {
      id: 3,
      question: "What does CSS stand for",
      answer: "Cascading Style Sheets",
      options: [
        "Colorful Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Cascading Style Sheets"
      ]
    },


    {
      id: 4,
      question: "What is the correct HTML element for inserting a line break?",
      answer: "&#60;br&#62;",
      options: [
        "&#60;lb&#62;",
        "&#60;br&#62;",
        "&#60;break&#62;",
        "None of these"
      ]
    },


    {
      id: 5,
      question: "Which of the following tag represents an independent piece of content of a document in HTML5?",
      answer: "article",
      options: [
        "section",
        "article",
        "aside",
        "header"
      ]
    },


    {
      id: 6,
      question: "Which of the following tag can be used to mark up a conversation in HTML5?",
      answer: "dialog",
      options: [
        "footer",
        "nav",
        "dialog",
        "figure"
      ]
    },


    {
      id: 7,
      question: " Name an element which doesn't have a closing tag.",
      answer: "&#60;img&#62;",
      options: [
        "&#60;img&#62;",
        "&#60;body&#62;",
        "&#60;head&#62;",
        "&#60;p&#62;"
      ]
    },


    {
      id: 8,
      question: "The following tag will show a bulleted list",
      answer: "&#60;li&#62;",
      options: [
        "&#60;ul&#62;",
        "&#60;li&#62;",
        "&#60;ol&#62;",
        "&#60;List&#62;"
      ]
    },


    {
      id: 9,
      question: "HTML Language uses",
      answer: "Tags",
      options: [
        "Tabs",
        "Punctuation",
        "Tags",
        "Quotations"
      ]
    },


    {
      id: 10,
      question: "Which of these has correct syntax?",
      answer: "&#60;!DOCTYPE html&#62;",
      options: [
        "&#60;!DOCTYPE html&#62;",
        "!&#60;DOCTYPE html&#62;",
        "&#60;DOCTYPE! html&#62;",
        "&#60;DOCTYPE html !&#62;"
       
      ]
    }

  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  