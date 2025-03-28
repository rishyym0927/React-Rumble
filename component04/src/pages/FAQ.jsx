import Accordion from '../components/Accordion';

const FAQ = () => {
  const faqItems = [
    {
      title: 'How do I get started?',
      content: 'Getting started is easy! Simply sign up for an account and follow our onboarding process.'
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We accept all major credit cards and PayPal.'
    },
    {
      title: 'Can I cancel my subscription?',
      content: 'Yes, you can cancel anytime through your account settings.'
    }
  ];

  return (
    <div className="page">
      <h1>Frequently Asked Questions</h1>
      <Accordion items={faqItems} allowMultiple={false} />
    </div>
  );
};

export default FAQ;