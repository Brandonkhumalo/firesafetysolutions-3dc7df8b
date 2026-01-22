interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{number}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
