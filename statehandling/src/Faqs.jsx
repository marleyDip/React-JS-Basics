import { useState } from "react";
import { questions } from "./Data/faqQuestion";

export default function Faqs() {
  let [currentId, setCurrentId] = useState(questions[0].id);

  let items = questions.map((itemsData, i) => {
    let itemsDetails = {
      itemsData,
      currentId,
      setCurrentId,
    };
    return <FaqItems itemDetails={itemsDetails} key={i} />;
  });
  return (
    <div>
      <h1>Frequently Asked Question (FAQs)</h1>

      <div className="faqOuter">{items}</div>
    </div>
  );
}

function FaqItems({ itemDetails }) {
  let { itemsData, currentId, setCurrentId } = itemDetails;
  return (
    <div className="faqItems">
      <h2 onClick={() => setCurrentId(itemsData.id)}>{itemsData.question}</h2>

      <p className={currentId === itemsData.id ? "activeAns" : ""}>
        {itemsData.answer}
      </p>
    </div>
  );
}
