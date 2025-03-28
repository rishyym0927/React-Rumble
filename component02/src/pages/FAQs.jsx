import { useNavigate } from "react-router-dom";
import "../styles/Page.css";


const faqs = [
  { question: "What is this website?", answer: "A demo for theme persistence!" },
  { question: "How does the theme toggle work?", answer: "It saves your preference in localStorage." },
];

function FAQs() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>FAQs</h1>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <details>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default FAQs;
