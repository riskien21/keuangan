import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  FileText, 
  Settings, 
  LogOut,
  Building
} from 'lucide-react'

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'santri', label: 'Data Santri', icon: Users },
    { id: 'pemasukan', label: 'Pemasukan', icon: TrendingUp },
    { id: 'pengeluaran', label: 'Pengeluaran', icon: TrendingDown },
    { id: 'laporan', label: 'Laporan', icon: FileText },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-indigo-600 to-violet-500 shadow-2xl z-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-center p-6 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold tracking-wide">PPTQ</h1>
              <p className="text-xs text-indigo-100 opacity-90">Al-Asy'ariyyah</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeMenu === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl
                  text-left font-medium tracking-wide
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:bg-white/20 hover:shadow-lg
                  ${isActive 
                    ? 'bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/30' 
                    : 'text-indigo-100 hover:text-white'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-indigo-200'}`} />
                <span className="text-sm">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-white/20">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left font-medium tracking-wide text-indigo-100 hover:text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <LogOut className="h-5 w-5 text-indigo-200" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar