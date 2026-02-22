import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-12 max-w-2xl"
  >
    {label && (
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{label}</p>
    )}
    <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
