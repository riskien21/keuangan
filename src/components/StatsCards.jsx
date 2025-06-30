import React from 'react'
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  AlertTriangle 
} from 'lucide-react'

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Saldo',
      value: 'Rp 150.500.000',
      change: '+12.5%',
      changeType: 'positive',
      icon: Wallet,
      iconColor: 'text-emerald-500',
      bgColor: 'from-emerald-500/20 to-emerald-600/20'
    },
    {
      id: 2,
      title: 'Total Pemasukan',
      value: 'Rp 85.750.000',
      change: '+8.2%',
      changeType: 'positive',
      icon: TrendingUp,
      iconColor: 'text-blue-500',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      id: 3,
      title: 'Total Pengeluaran',
      value: 'Rp 35.250.000',
      change: '-3.1%',
      changeType: 'negative',
      icon: TrendingDown,
      iconColor: 'text-red-500',
      bgColor: 'from-red-500/20 to-red-600/20'
    },
    {
      id: 4,
      title: 'Total Santri',
      value: '324',
      change: '+5 santri',
      changeType: 'positive',
      icon: Users,
      iconColor: 'text-orange-500',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    },
    {
      id: 5,
      title: 'Total Tunggakan',
      value: 'Rp 12.500.000',
      change: '45 santri',
      changeType: 'warning',
      icon: AlertTriangle,
      iconColor: 'text-yellow-500',
      bgColor: 'from-yellow-500/20 to-yellow-600/20'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        
        return (
          <div
            key={stat.id}
            className={`
              glassmorphism glassmorphism-dark p-6
              hover:scale-105 transition-all duration-300 ease-in-out
              cursor-pointer group
              animate-slide-in
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div className={`
                text-xs px-2 py-1 rounded-full font-medium
                ${stat.changeType === 'positive' 
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' 
                  : stat.changeType === 'negative'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                }
              `}>
                {stat.change}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                {stat.value}
              </p>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards