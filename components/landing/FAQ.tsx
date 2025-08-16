import { Card } from "@/components/ui/card";

// FAQ data structure for easy maintenance
const faqData = [
  {
    question: "Can I submit multiple prompts?",
    answer: "No, each participant can submit only one prompt per hackathon. Make it your best shot!"
  },
  {
    question: "Can I edit my prompt after submission?",
    answer: "No, once submitted, prompts cannot be edited or updated. This ensures fairness and maintains the 'one shot' nature of the competition."
  },
  {
    question: "What LLMs will be used to run the prompts?",
    answer: "Participants can choose from Claude, Cursor, and other leading LLMs. The exact list will be published before the hackathon starts."
  },
  {
    question: "How are submissions judged?",
    answer: "Expert judges will run your prompt through the selected LLM, test the generated application, and score it based on functionality, creativity, code quality, and category-specific criteria."
  },
  {
    question: "Can I specify which frameworks or libraries to use?",
    answer: "Yes! Your prompt can specify any frameworks, libraries, or tools you want the LLM to use when generating the application."
  },
  {
    question: "When will the environment variables and MCP servers list be available?",
    answer: "The complete list will be published one week before the submission deadline, giving you time to craft the perfect prompt."
  },
  {
    question: "Is there a minimum or maximum prompt length?",
    answer: "There's no minimum length, but prompts are limited to 100,000 characters. We recommend being comprehensive but concise."
  },
  {
    question: "Can I use external APIs or services in my generated app?",
    answer: "Yes, your prompt can instruct the LLM to use external APIs. However, you'll need to use the environment variables we provide for API keys."
  },
  {
    question: "What happens if the generated code doesn't run?",
    answer: "Judges will attempt basic debugging, but if the core functionality doesn't work, the submission will receive a lower score. Test your prompts thoroughly!"
  },
  {
    question: "Can teams participate or is it individual only?",
    answer: "OneShotHack is an individual competition. Each person can submit one prompt, and collaboration on prompts is not allowed."
  },
  {
    question: "Will the prompts and generated code be made public?",
    answer: "Yes, all submissions will be open-sourced after the hackathon to help the community learn from different prompt engineering approaches."
  },
  {
    question: "What if two prompts generate very similar applications?",
    answer: "Judges will evaluate based on the timestamp of submission, code quality, and unique features. Earlier submissions get precedence in case of ties."
  }
];

// FAQ Item Component
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <div 
      className="p-6 bg-cyber-dark-800/80 border border-cyber-green-900/30 rounded-lg hover:border-cyber-orange-500/50 transition backdrop-blur-sm"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
}

// Main FAQ Component
export function FAQ() {
  return (
    <section id="faq" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyber-orange-400 to-cyber-orange-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>

          {/* Additional help text */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Still have questions?
            </p>
            <a 
              href="mailto:support@oneshothack.com" 
              className="text-cyber-green-400 hover:text-cyber-green-300 transition"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export just the data if other components need it
export { faqData };