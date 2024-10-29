import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "../ui/Typography";
import { useTranslations } from "next-intl";

export default function AccordionDemo() {
  const t = useTranslations("AccordionComponent")

  const faqData = [
    {
      category: t("General.titleCategory"),
      questions: [
        {
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          question: "Nulla facilisi cursus ultricies et?",
          answer:
            "Nulla facilisi. Praesent cursus ultricies mi, nec varius libero.",
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
          answer:
            "Vivamus tincidunt vehicula purus, vel pulvinar metus interdum a.",
        },
        {
          question: "Suspendisse potenti aliquam?",
          answer:
            "Suspendisse potenti. Etiam aliquam, sapien ac elementum dapibus.",
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
      category: t("Upgrade.titleCategory"),
      questions: [
        {
          question: "Curabitur ac lorem eget sapien?",
          answer:
            "Curabitur ac lorem eget sapien placerat dictum sit amet ut nisl.",
        },
        {
          question: "Quisque at purus sit amet?",
          answer: "Quisque at purus sit amet neque fermentum eleifend.",
        },
      ],
    },
    {
      category: t("Cancel.titleCategory"),
      questions: [
        {
          question: t("Cancel.question.subscriptionQuestion"),
          answer:
            t("Cancel.response.subscriptionResponse")
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-6 pb-8 pt-12">
      <div className="rounded-xl border-2 bg-primary-foreground p-6">
        <Typography variant={"h1"} className="mb-6 text-center">
          {t("title")}
        </Typography>
        {faqData.map((category, index) => (
          <div key={index}>
            <div className="mt-6">
              <Typography variant={"h2"} className="my-4">
                {category.category}
              </Typography>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  value={`item-${index}-${itemIndex}`}
                >
                  <AccordionTrigger className="text-left">
                    <Typography variant={"p"}>{item.question}</Typography>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Typography variant={"p"}>{item.answer}</Typography>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
