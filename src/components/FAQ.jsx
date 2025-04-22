import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        question: "How do you handle security and privacy?",
        answer: "We ensure secure data storage, encryption, and follow strict privacy policies."
    },
    {
        question: "Is there a limit to the number of messages I can send?",
        answer: "No, you can send unlimited messages with our platform."
    },
    {
        question: "Can I send attachments?",
        answer: "Yes, you can attach files and media securely on our platform."
    },
    {
        question: "How does your pricing work?",
        answer: "Our pricing is flexible and based on the features you choose."
    },
    {
        question: "Can I use my own domain?",
        answer: "Absolutely! You can integrate your custom domain seamlessly."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-center text-2xl font-semibold mb-4">
                    Frequently Asked <span className="text-blue-600">Questions</span>
                </h2>

                {faqs.map((faq, index) => (
                    <div key={index} className=" border-gray-400 border-dashed border-b-2">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between w-full py-3 text-left text-lg font-medium hover:text-blue-600 focus:outline-none"
                        >
                            {faq.question}
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {openIndex === index && (
                            <div className="text-gray-600 p-3">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
