export default function Settings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl text-white font-semibold">Settings</h1>
        <p className="text-gray-400">Manage your preferences</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-white text-xl mb-6">General Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-lg">Email Notifications</h3>
                <p className="text-gray-400 text-sm">Receive email updates about your account</p>
              </div>
              <div className="w-14 h-8 bg-green-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-lg">Two-Factor Authentication</h3>
                <p className="text-gray-400 text-sm">Add an extra layer of security</p>
              </div>
              <div className="w-14 h-8 bg-gray-600 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-lg">Public Profile</h3>
                <p className="text-gray-400 text-sm">Make your profile visible to everyone</p>
              </div>
              <div className="w-14 h-8 bg-green-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-white text-xl mb-6">Privacy Settings</h2>
          <div className="space-y-4">
            {[
              'Activity Status',
              'Show Online Status',
              'Share Usage Data',
              'Allow Marketing Emails',
            ].map((item) => (
              <div key={item} className="flex items-center justify-between text-gray-400 py-2 border-b border-gray-700">
                <span>{item}</span>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                  Configure
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}