// Event listener for Final Grade Calculator (Midterm and Raw Final Grade)
document.getElementById('midterm-grade').addEventListener('input', calculateFinalGrade);
document.getElementById('raw-final-grade').addEventListener('input', calculateFinalGrade);

// Event listener for Raw Grade Calculator (Participation, Quiz, Exam)
document.getElementById('participation-grade').addEventListener('input', calculateRawGrade);
document.getElementById('quiz-grade').addEventListener('input', calculateRawGrade);
document.getElementById('exam-grade').addEventListener('input', calculateRawGrade);

// Event listener for Lec/Lab Grade Calculator
document.getElementById('lec-grade').addEventListener('input', calculateLecLabGrade);
document.getElementById('lab-grade').addEventListener('input', calculateLecLabGrade);

// Final Grade Calculation
function calculateFinalGrade() {
  const midtermGrade = parseFloat(document.getElementById('midterm-grade').value);
  const rawFinalGrade = parseFloat(document.getElementById('raw-final-grade').value);

  if (!isNaN(midtermGrade) && !isNaN(rawFinalGrade)) {
    const finalGrade = (midtermGrade * 1/3) + (rawFinalGrade * 2/3);
    document.getElementById('final-grade-result').textContent = `Your Final Grade is: ${finalGrade.toFixed(2)}`;
  } else {
    document.getElementById('final-grade-result').textContent = '';
  }
}

// Raw Grade Calculation
function calculateRawGrade() {
  const participationGrade = parseFloat(document.getElementById('participation-grade').value);
  const quizGrade = parseFloat(document.getElementById('quiz-grade').value);
  const examGrade = parseFloat(document.getElementById('exam-grade').value);

  if (!isNaN(participationGrade) && !isNaN(quizGrade) && !isNaN(examGrade)) {
    const rawGrade = (participationGrade + quizGrade + examGrade) / 3;
    document.getElementById('raw-grade-result').textContent = `Your Raw Grade is: ${rawGrade.toFixed(2)}`;
  } else {
    document.getElementById('raw-grade-result').textContent = '';
  }
}

// Lec/Lab Grade Calculation
function calculateLecLabGrade() {
  const lecGrade = parseFloat(document.getElementById('lec-grade').value);
  const labGrade = parseFloat(document.getElementById('lab-grade').value);

  if (!isNaN(lecGrade) && !isNaN(labGrade)) {
    const lecLabGrade = (lecGrade * 0.6) + (labGrade * 0.4);
    document.getElementById('lec-lab-result').textContent = `Your Lec/Lab Grade is: ${lecLabGrade.toFixed(2)}`;
  } else {
    document.getElementById('lec-lab-result').textContent = '';
  }
}
