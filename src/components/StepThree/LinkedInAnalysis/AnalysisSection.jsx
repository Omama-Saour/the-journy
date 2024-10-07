import React from "react";
import AnalysisCard from "./AnalysisCard";

const AnalysisSection = ({analysisData}) => {
    // Ensure analysisData is an object and has keys
    if (!analysisData || typeof analysisData !== 'object') {
      return <div>Loading...</div>; // or a suitable message
    }
  
    // Prepare analysis items based on the analysisData prop
    const analysisItems = Object.keys(analysisData).map((key) => {
      const section = analysisData[key];
      // Check if it's an overall score or a regular section
      if (key === "Overall Score") {
        return {
          title: "الدرجة العامة",
          items: [
            {
              label: "الدرجة",
              content: `الدرجة الإجمالية: ${section}`,
            },
          ],
        };
      }
      
      return {
        title: key,
        items: [
          {
            label: "النص الأصلي",
            content: section.original_section_text,
          },
          // {
          //   label: "الملاحظات",
          //   content: section.notes.join(", "), // Join notes into a single string
          // },
          {
            label: "النص المحسن",
            content: section.enhanced_section_text,
          },
          {
            label: "الدرجة",
            content: ` ${section.score}`,
          },
          ...section.advice.map((advice, index) => ({
            label: `نصيحة ${index + 1}`,
            content: advice,
          })),
        ],
      };
    });
  
  return (
    <section className="flex overflow-hidden flex-col justify-center p-8 text-base text-right bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800 w-[796px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
          {analysisItems.map((item, index) => (
          <AnalysisCard key={index} title={item.title} items={item.items} />
        ))}
      </div>
    </section>
  );
};

export default AnalysisSection;
