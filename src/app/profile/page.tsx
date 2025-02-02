export default function Profile() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl text-white font-semibold">User Profile</h1>
        <p className="text-gray-400">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-600 rounded-full mb-4"></div>
              <h2 className="text-white text-xl mb-2">Sam Hooda</h2>
              <p className="text-gray-400 mb-4">Software Engineer</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-white text-xl mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Full Name', value: 'Sam Hooda' },
                { label: 'Email', value: 'sam@gamil.com' },
                { label: 'Phone', value: '+91 8253697589' },
                { label: 'Location', value: 'Kolkata, India' },
                { label: 'Joined', value: 'March 2024' },
                { label: 'Role', value: 'Software Engineer' },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">{item.label}</label>
                  <div className="text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: 'Updated profile picture', time: '2 hours ago' },
                { action: 'Changed password', time: '1 day ago' },
                { action: 'Completed project milestone', time: '3 days ago' },
                { action: 'Added new team member', time: '1 week ago' },
              ].map((item) => (
                <div key={item.action} className="flex items-center justify-between text-gray-400 py-2 border-b border-gray-700">
                  <span>{item.action}</span>
                  <span className="text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}