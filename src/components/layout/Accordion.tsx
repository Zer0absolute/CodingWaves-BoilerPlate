import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        question: "Nulla facilisi cursus ultricies et?",
        answer: "Nulla facilisi. Praesent cursus ultricies mi, nec varius libero.",
      },
      {
        question: "Mauris non urna ut eros fringilla ornare?",
        answer: "Mauris non urna ut eros fringilla ornare vel non libero.",
      },
      {
        question: "Fusce vel augue bibendum?",
        answer: "Fusce vel augue bibendum, aliquet nisl at, sodales nulla.",
      },
      {
        question: "Vivamus tincidunt vehicula purus?",
        answer: "Vivamus tincidunt vehicula purus, vel pulvinar metus interdum a.",
      },
      {
        question: "Suspendisse potenti aliquam?",
        answer: "Suspendisse potenti. Etiam aliquam, sapien ac elementum dapibus.",
      },
      {
        question: "Etiam vitae sapien luctus?",
        answer: "Etiam vitae sapien luctus, cursus lectus in, egestas dolor.",
      },
      {
        question: "Duis eget risus posuere?",
        answer: "Duis eget risus posuere, convallis nunc a, elementum massa.",
      },
    ],
  },
  {
    category: "Upgrades",
    questions: [
      {
        question: "Curabitur ac lorem eget sapien?",
        answer: "Curabitur ac lorem eget sapien placerat dictum sit amet ut nisl.",
      },
      {
        question: "Quisque at purus sit amet?",
        answer: "Quisque at purus sit amet neque fermentum eleifend.",
      },
    ],
  },
  {
    category: "Canceling",
    questions: [
      {
        question: "Curabitur ac lorem eget sapien?",
        answer: "Curabitur ac lorem eget sapien placerat dictum sit amet ut nisl.",
      },
    ]
  }
]

export default function AccordionDemo() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently asked questions</h1>
      {faqData.map((category, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <Accordion type="single" collapsible className="w-full">
            {category.questions.map((item, itemIndex) => (
              <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}