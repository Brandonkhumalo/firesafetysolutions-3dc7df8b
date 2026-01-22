interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {subtitle && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${light ? "text-primary-foreground/80" : "text-primary"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
