interface StatsCardProps {
  title: string;
  value: string | number;
  increment: number;
}

const StatsCard = ({ title, value, increment }: StatsCardProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <div className="text-white text-2xl font-bold mb-2">{value}</div>
      <div className="flex items-center text-green-500 text-sm">
        <span>↑</span>
        <span className="ml-1">{increment}% this month</span>
      </div>
    </div>
  );
};

export default StatsCard; 