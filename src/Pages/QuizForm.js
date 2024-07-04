import { useState } from "react";
import { useNavigate } from "react-router-dom";
function QuizForm() {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(10);
  const [subject, setSubject] = useState("");

  function handleQuizForm(e) {
    e.preventDefault();
    navigate("/quiz", {
      state: {
        difficulty: difficulty,
        numQuestions: numQuestions,
        subject: subject,
      },
    });
  }

  return (
    <form onSubmit={handleQuizForm}>
      <h2>Quiz form</h2>
      <label for={numQuestions}>Number Of Questions</label>

      <select
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
      >
        {Array.from({ length: 25 }, (_, i) => i + 1).map(
          (num) =>
            num >= 10 && (
              <option value={num} key={num}>
                {num}
              </option>
            )
        )}
      </select>

      <label for={difficulty}>Difficulty</label>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="hard">Hard</option>
        <option value="medium">Medium</option>
        <option value="easy">Easy</option>
      </select>

      <label for={difficulty}>Subject</label>
      <input
        type="text"
        placeholder="Subject..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
}

export default QuizForm;
