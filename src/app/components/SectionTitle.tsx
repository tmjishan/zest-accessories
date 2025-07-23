interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <section className="w-full md:max-w-7xl mx-auto px-4 py-8 text-center font-bold t tracking-widest text-2xl">
      <div>{title}</div>
    </section>
  );
}
