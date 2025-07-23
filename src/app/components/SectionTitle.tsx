import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  content: ReactNode;
}

export default function SectionTitle({ title, content }: SectionTitleProps) {
  return (
    <section className="w-full md:max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="text-center font-bold tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800">
        {title}
      </div>
      <div className="py-8">{content}</div>
    </section>
  );
}
