import React from 'react'
import { Sun, Moon, Bell, Search } from 'lucide-react'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari transaksi, santri..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs 
                           rounded-full flex items-center justify-center">3</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Admin PPTQ</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
            <img
              className="h-8 w-8 rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header