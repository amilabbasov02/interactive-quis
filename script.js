const questions = [
    {
      question: "Kimin size hediye vermesini isterdiniz?",
      options: ["Aile \u00dcyesi", "\u00c7al\u0131\u015fma Arkada\u015f\u0131", "Arkada\u015f", "Tan\u0131mad\u0131\u011f\u0131n\u0131z Biri", "Sevgili", "\u015eef"],
    },
    {
      question: "Hangi hediye sizi mutlu eder?",
      options: ["Kitap", "Teknoloji \u00dcr\u00fcn\u00fc", "Moda \u00dcr\u00fcn\u00fc", "Tak\u0131", "Deneyim (Gezi, Konser)"],
    },
    {
      question: "Yeni y\u0131l\u0131 nerede kutlamak isterdiniz?",
      options: ["Evde", "Bir Partide", "Yurtd\u0131\u015f\u0131nda", "Do\u011fada", "Arkada\u015flarla"],
    },
  ];
  
  const resultMapping = {
    positive: "Siz pozitif bir insans\u0131n\u0131z! Yeni y\u0131l sizin i\u00e7in mutluluk getirecek.",
    negative: "Baz\u0131 \u015feylere dikkat etmelisiniz! Yeni y\u0131lda daha iyimser olun.",
    neutral: "Siz dengeli bir insans\u0131n\u0131z. Yeni y\u0131l\u0131n\u0131z harika ge\u00e7ecek!",
  };
  
  let currentQuestionIndex = 0;
  const dots = document.querySelectorAll(".dot");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("result-text");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = nextQuestion;
      optionsElement.appendChild(button);
    });
  
    updateProgress();
  }
  
  function updateProgress() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentQuestionIndex);
    });
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultContainer.classList.remove("hidden");
  
    const resultType = ["positive", "neutral", "negative"][Math.floor(Math.random() * 3)];
    resultText.textContent = resultMapping[resultType];
  }
  
  loadQuestion();
  