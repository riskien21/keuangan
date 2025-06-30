import React from 'react'
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock,
  MoreHorizontal 
} from 'lucide-react'

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      type: 'income',
      title: 'Pembayaran Syahriyah',
      description: 'Ahmad Fauzi - Kelas 3A',
      amount: 500000,
      time: '2 menit yang lalu',
      status: 'completed'
    },
    {
      id: 2,
      type: 'expense',
      title: 'Pembelian Beras',
      description: 'Konsumsi santri bulan ini',
      amount: 2500000,
      time: '1 jam yang lalu',
      status: 'completed'
    },
    {
      id: 3,
      type: 'income',
      title: 'Donasi Ramadhan',
      description: 'Yayasan Al-Ikhlas',
      amount: 5000000,
      time: '3 jam yang lalu',
      status: 'completed'
    },
    {
      id: 4,
      type: 'expense',
      title: 'Listrik & Air',
      description: 'Tagihan utilitas bulan ini',
      amount: 1200000,
      time: '5 jam yang lalu',
      status: 'completed'
    },
    {
      id: 5,
      type: 'income',
      title: 'Kas Santri',
      description: 'Muhammad Rizki - Kelas 2B',
      amount: 100000,
      time: '1 hari yang lalu',
      status: 'pending'
    }
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Transaksi Terbaru
          </h3>
        </div>
        
        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                         hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-100 
                     dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                     hover:ring-1 hover:ring-emerald-300 dark:hover:ring-emerald-600
                     transition-all duration-200 cursor-pointer group
                     animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-4">
              {/* Transaction Icon */}
              <div className={`
                p-2 rounded-xl
                ${transaction.type === 'income' 
                  ? 'bg-emerald-100 dark:bg-emerald-900/30' 
                  : 'bg-red-100 dark:bg-red-900/30'
                }
              `}>
                {transaction.type === 'income' ? (
                  <ArrowUpRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <ArrowDownLeft className="h-5 w-5 text-red-600 dark:text-red-400" />
                )}
              </div>

              {/* Transaction Details */}
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {transaction.title}
                  </h4>
                  <span className={`
                    px-2 py-1 text-xs rounded-full font-medium
                    ${transaction.status === 'completed'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }
                  `}>
                    {transaction.status === 'completed' ? 'Selesai' : 'Pending'}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {transaction.description}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {transaction.time}
                </p>
              </div>
            </div>

            {/* Amount */}
            <div className="text-right">
              <p className={`
                text-sm font-bold
                ${transaction.type === 'income' 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-red-600 dark:text-red-400'
                }
              `}>
                {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 
                         hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200">
          Lihat Semua Transaksi
        </button>
      </div>
    </div>
  )
}

export default RecentTransactions