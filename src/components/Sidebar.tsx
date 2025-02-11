'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
// import { AiOutlineHome, AiOutlineAreaChart, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { HomeIcon, ChartBarIcon, UserCircleIcon, BugAntIcon } from '@heroicons/react/16/solid';
import { Cog6ToothIcon } from '@heroicons/react/16/solid';

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);





  const menuItems = [
    { title: 'Home', path: '/', icon: <HomeIcon className='w-6 h-6' /> },
    { title: 'Analytics', path: '/analytics', icon: <ChartBarIcon className="w-6 h-6" /> },
    { title: 'Settings', path: '/settings', icon: <Cog6ToothIcon className="w-6 h-6" /> },
    { title: 'User Profile', path: '/profile', icon: <UserCircleIcon className='w-6 h-6' /> },
  ];

  return (
    <div 
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-900 text-white p-4 transition-all duration-300 ease-in-out relative h-screen`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-gray-800 rounded-full p-1.5 hover:bg-gray-700 focus:outline-none"
      >
        {isCollapsed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      <div className={`mb-8 ${isCollapsed ? 'text-center' : ''}`}>
        <h1 className={`text-xl font-bold truncate ${isCollapsed ? 'text-sm' : ''}`}>
          {isCollapsed ? <BugAntIcon className='w-4 h-4' /> : 'Dashboard'}
        </h1>
      </div>

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center py-3 px-4 mb-2 rounded-lg ${
              pathname === item.path
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-800'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;