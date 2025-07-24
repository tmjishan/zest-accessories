import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  content: ReactNode;
  ID: string;
}

export default function SectionTitle({
  title,
  content,
  ID,
}: SectionTitleProps) {
  return (
    <section id={ID} className="w-full md:max-w-7xl mx-auto px-4 pt-8 md:pt-15">
      <div className="text-center font-bold tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800">
        {title}
      </div>
      <div className="py-8 px-6 md:px-10">{content}</div>
    </section>
  );
}
