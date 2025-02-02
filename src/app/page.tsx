import StatsCard from '@/components/StatsCard';

export default function Home() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl text-white font-semibold">Welcome back, Sam</h1>
        <p className="text-gray-400">Here's what's happening today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Users" value="24,850" increment={12} />
        <StatsCard title="Revenue" value="$128,450" increment={8} />
        <StatsCard title="Active Projects" value="186" increment={24} />
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-white text-xl mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="text-gray-400 py-2 border-b border-gray-700">
            New user registration - Sam
          </div>
          <div className="text-gray-400 py-2 border-b border-gray-700">
            Project status updated - Sales Campaign
          </div>
          <div className="text-gray-400 py-2 border-b border-gray-700">
            New sales completed - $1,200
          </div>
        </div>
      </div>
    </div>
  );
} 