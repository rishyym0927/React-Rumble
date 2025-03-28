import React from 'react';
import { Accordion } from './components/Accordian';
const faqItems = [
  {
    title: "What is your return policy?",
    content: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate the return process."
  },
  {
    title: "How long does shipping take?",
    content: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for faster delivery."
  },
  {
    title: "Do you ship internationally?",
    content: "Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days. Additional customs fees may apply."
  },
  {
    title: "What payment methods do you accept?",
    content: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment system."
  },
  {
    title: "How can I track my order?",
    content: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package's status and estimated delivery date."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-center mb-8 text-gray-600">
          Find answers to common questions about our services
        </p>
        
        <Accordion items={faqItems} allowMultiple={false} />
      </div>
    </div>
  );
}

export default App;