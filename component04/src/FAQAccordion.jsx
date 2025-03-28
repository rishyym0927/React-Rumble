import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const FAQAccordion = () => {
  const faqs = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How does state work?", answer: "State in React allows components to manage and react to changes." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React." }
  ];

  return (
    <Accordion.Root type="multiple" className="w-full">
      {faqs.map((faq, index) => (
        <Accordion.Item key={index} value={`item-${index}`} className="border-b">
          <Accordion.Header className="flex justify-between items-center p-4 cursor-pointer">
            <Accordion.Trigger className="flex justify-between w-full text-lg font-medium">
              {faq.question}
              <ChevronDown className="transition-transform duration-300" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default FAQAccordion;
