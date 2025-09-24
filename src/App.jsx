import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest new income",
  "Send some funds home",
];

function App() {
  const [isOpen, setOpen] = useState(true);
  const [step, setStep] = useState(1);

  const handlerPrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    } else if (step == 1) setStep(messages.length);
  };

  const handlerNext = () => {
    if (step < messages.length) {
      setStep((step) => step + 1);
    } else if (step == messages.length) setStep(1);
  };

  return (
    <>
      <button className="close" onClick={() => setOpen((isOpen) => !isOpen)}>
        x
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((p, i) => {
              return (
                <div
                  key={i}
                  className={step == i + 1 ? "active" : ""}
                  onClick={() => setStep(i + 1)}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: " #7950f2", color: " #fff" }}
              onClick={() => handlerPrevious()}
            >
              Previous
            </button>

            <button
              style={{ background: " #7950f2", color: " #fff" }}
              onClick={() => handlerNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
