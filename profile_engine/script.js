const form = document.getElementById('assessment-form');
const questionContainer = document.getElementById('question-container');
const errorMsg = document.getElementById('error-msg');
const progressBar = document.getElementById('progress-bar');
const dashboard = document.getElementById('results-dashboard');
const finalScoresContainer = document.getElementById('final-scores');
const loadingSpinner = document.getElementById('loading-spinner');
const restartBtn = document.getElementById('restart-btn');


const questions = [
    {
        question: "How do you handle high-pressure situations?",
        options: [
            { text: "I act quickly and decisively.", category: "typeA" },
            { text: "I analyze the data before moving.", category: "typeB" },
            { text: "I ensure my team is calm and supported.", category: "typeC" }
        ]
    },
    {
        question: "What is your preferred working environment?",
        options: [
            { text: "Fast-paced and competitive.", category: "typeA" },
            { text: "Quiet, structured, and organized.", category: "typeB" },
            { text: "Collaborative and social.", category: "typeC" }
        ]
    },
    {
        question: "How do you usually make important decisions?",
        options: [
            { text: "Trust my instincts and move forward.", category: "typeA" },
            { text: "Evaluate facts and logical outcomes.", category: "typeB" },
            { text: "Consider how it affects everyone involved.", category: "typeC" }
        ]
    },
    {
        question: "What motivates you the most at work?",
        options: [
            { text: "Achieving ambitious goals.", category: "typeA" },
            { text: "Solving complex problems.", category: "typeB" },
            { text: "Helping people grow and succeed.", category: "typeC" }
        ]
    },
    {
        question: "How do you approach new challenges?",
        options: [
            { text: "Jump in and figure things out along the way.", category: "typeA" },
            { text: "Research and plan before starting.", category: "typeB" },
            { text: "Discuss ideas and gather opinions first.", category: "typeC" }
        ]
    },
    {
        question: "What role do you naturally take in a team?",
        options: [
            { text: "Leader who drives action.", category: "typeA" },
            { text: "Strategist who plans and organizes.", category: "typeB" },
            { text: "Mediator who keeps everyone aligned.", category: "typeC" }
        ]
    },
    {
        question: "How do you prefer to solve problems?",
        options: [
            { text: "Take immediate action and iterate.", category: "typeA" },
            { text: "Break the problem into logical steps.", category: "typeB" },
            { text: "Collaborate and brainstorm solutions.", category: "typeC" }
        ]
    },
    {
        question: "What describes your communication style best?",
        options: [
            { text: "Direct and to the point.", category: "typeA" },
            { text: "Clear, detailed, and structured.", category: "typeB" },
            { text: "Empathetic and relationship-focused.", category: "typeC" }
        ]
    }
];


const AssesmentState = (()=>{
    let currentIndex = 0;
    

    let scores = { typeA: 0, typeB: 0, typeC: 0 };

    return {
        getQuestion: () => questions[currentIndex],
        getIndex: () => currentIndex,
        getTotal: () => questions.length,
        
        
        recordAnswer: (selectedCategory) => {
            scores[selectedCategory] += 1; 
            currentIndex += 1; 
        },
        
        getFinalScores: () => scores,
        
        reset: () => {
            currentIndex = 0;
            scores = { typeA: 0, typeB: 0, typeC: 0 };
        }
    };
})();

const renderQuestion = () => {
    const currentQ = AssesmentState.getQuestion();
    
    // If no more questions, trigger the completion logic
    if (!currentQ) {
        return handleCompletion(); 
    }

    progressBar.innerText = `Step ${AssesmentState.getIndex() + 1} of ${AssesmentState.getTotal()}`;
    
    // Using map() and join() to create the HTML string cleanly without a loop
    const optionsHTML = currentQ.options.map((opt, i) => `
        <label class="option-label">
            <input type="radio" name="answer" value="${opt.category}">
            ${opt.text}
        </label>
    `).join('');

    questionContainer.innerHTML = `
        <div class="question-title">${currentQ.question}</div>
        <div class="options">${optionsHTML}</div>
    `;
};

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        errorMsg.classList.remove('hidden'); 
        return; 
    }

    errorMsg.classList.add('hidden');
    AssesmentState.recordAnswer(selectedOption.value);
    renderQuestion();
});


const analyzeDataWithAI = async (scores) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Analysis Complete"); 
        }, 2000);
    });
};

const handleCompletion = async () => {
    form.classList.add('hidden'); 
    dashboard.classList.remove('hidden'); 
    finalScoresContainer.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');

    const scores = AssesmentState.getFinalScores();

    await analyzeDataWithAI(scores); 

    loadingSpinner.classList.add('hidden');
    finalScoresContainer.classList.remove('hidden');

    finalScoresContainer.innerHTML = `
    <div class="score-card"><span>(Aggressive):</span> <span>${scores.typeA}</span></div>
    <div class="score-card"><span>(Analytical):</span> <span>${scores.typeB}</span></div>
        <div class="score-card"><span>(Supportive):</span> <span>${scores.typeC}</span></div>
    `;
};


restartBtn.addEventListener('click', () => {
    AssesmentState.reset();
    dashboard.classList.add('hidden');
    form.classList.remove('hidden');
    renderQuestion();
});

renderQuestion();