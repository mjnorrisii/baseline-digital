import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
  >
    {label && (
      <div className={`mb-4 flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="h-[1px] w-8 bg-primary/30" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{label}</p>
        <div className="h-[1px] w-8 bg-primary/30" />
      </div>
    )}
    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-heading">
      {title}
    </h2>
    {description && (
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
