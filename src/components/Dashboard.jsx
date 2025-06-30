import React from 'react'
import { Sun, Moon } from 'lucide-react'
import Header from './Header'
import StatsCards from './StatsCards'
import ChartSection from './ChartSection'
import RecentTransactions from './RecentTransactions'

const Dashboard = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="ml-64 flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Welcome Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
              <h1 className="text-3xl font-bold tracking-wide mb-2">
                Selamat Datang, Admin PPTQ Al-Asy'ariyyah
              </h1>
              <p className="text-indigo-100 text-lg">
                Dashboard manajemen keuangan pondok pesantren
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="animate-slide-in">
            <StatsCards />
          </div>

          {/* Chart and Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="animate-bounce-in">
              <ChartSection />
            </div>
            <div className="animate-slide-in">
              <RecentTransactions />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard