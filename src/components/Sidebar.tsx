'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Analytics', path: '/analytics' },
    { title: 'Settings', path: '/settings' },
    { title: 'User Profile', path: '/profile' },
  ];

  return (
    <div className="w-64  bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block py-3 px-4 mb-2 rounded-lg ${
              pathname === item.path
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-800'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 