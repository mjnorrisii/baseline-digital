import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
  >
    {label && (
      <div className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="h-px w-6" style={{ background: "rgba(0,229,255,0.3)" }} />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00e5ff]">{label}</p>
        <div className="h-px w-6" style={{ background: "rgba(0,229,255,0.3)" }} />
      </div>
    )}
    <h2 className="font-heading text-3xl font-black tracking-tight md:text-4xl lg:text-5xl text-white leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-relaxed text-white/45 max-w-2xl mx-auto md:text-lg">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
