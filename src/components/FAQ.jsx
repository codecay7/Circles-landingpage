import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "How do you handle security and privacy?",
    answer: "We ensure secure data storage, encryption, and follow strict privacy policies.",
  },
  {
    question: "Is there a limit?",
    answer: "No, you can send unlimited messages with our platform.",
  },
  {
    question: "Can I send attachments?",
    answer: "Yes, you can attach files and media securely on our platform.",
  },
  {
    question: "How does your pricing work?",
    answer: "Our pricing is flexible and based on the features you choose.",
  },
  {
    question: "Can I use my own domain?",
    answer: "Absolutely! You can integrate your custom domain seamlessly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fdf7e3] py-16 px-4">
      <div className="max-w-4xl mx-auto border-2 border-dotted border-black rounded-3xl p-8 bg-[#d1e9d1]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 border-dotted border-black py-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-lg sm:text-xl font-semibold"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {openIndex === index && (
              <div className="mt-3 text-base sm:text-lg font-medium text-black">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
