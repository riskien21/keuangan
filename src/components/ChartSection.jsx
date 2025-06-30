import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { ChevronLeft, ChevronRight, PieChart } from 'lucide-react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const ChartSection = () => {
  const [currentChart, setCurrentChart] = useState(0)

  const chartConfigs = [
    {
      title: 'Pemasukan vs Pengeluaran',
      data: {
        labels: ['Pemasukan', 'Pengeluaran'],
        datasets: [{
          data: [85750000, 35250000],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ],
          borderColor: [
            'rgba(34, 197, 94, 1)',
            'rgba(239, 68, 68, 1)'
          ],
          borderWidth: 2,
          hoverBackgroundColor: [
            'rgba(34, 197, 94, 0.9)',
            'rgba(239, 68, 68, 0.9)'
          ]
        }]
      }
    },
    {
      title: 'Kategori Pemasukan',
      data: {
        labels: ['Syahriyah', 'Kas Santri', 'Donasi'],
        datasets: [{
          data: [45000000, 25750000, 15000000],
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(139, 92, 246, 0.8)'
          ],
          borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(139, 92, 246, 1)'
          ],
          borderWidth: 2,
          hoverBackgroundColor: [
            'rgba(59, 130, 246, 0.9)',
            'rgba(16, 185, 129, 0.9)',
            'rgba(139, 92, 246, 0.9)'
          ]
        }]
      }
    },
    {
      title: 'Kategori Pengeluaran',
      data: {
        labels: ['Konsumsi', 'Sarana & Prasarana', 'Operasional'],
        datasets: [{
          data: [18500000, 12250000, 4500000],
          backgroundColor: [
            'rgba(245, 158, 11, 0.8)',
            'rgba(239, 68, 68, 0.8)',
            'rgba(107, 114, 128, 0.8)'
          ],
          borderColor: [
            'rgba(245, 158, 11, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(107, 114, 128, 1)'
          ],
          borderWidth: 2,
          hoverBackgroundColor: [
            'rgba(245, 158, 11, 0.9)',
            'rgba(239, 68, 68, 0.9)',
            'rgba(107, 114, 128, 0.9)'
          ]
        }]
      }
    }
  ]

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            family: 'Inter'
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0
            }).format(context.raw)
            return `${context.label}: ${value}`
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      easing: 'easeOutBounce',
      duration: 1000
    },
    cutout: '60%'
  }

  const nextChart = () => {
    setCurrentChart((prev) => (prev + 1) % chartConfigs.length)
  }

  const prevChart = () => {
    setCurrentChart((prev) => (prev - 1 + chartConfigs.length) % chartConfigs.length)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <PieChart className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {chartConfigs[currentChart].title}
          </h3>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevChart}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="flex space-x-1">
            {chartConfigs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentChart(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentChart
                    ? 'bg-indigo-600 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextChart}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80 flex items-center justify-center">
        <div className="w-full h-full">
          <Doughnut 
            key={currentChart} 
            data={chartConfigs[currentChart].data} 
            options={options} 
          />
        </div>
      </div>

      {/* Chart Info */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4">
          {chartConfigs[currentChart].data.labels.map((label, index) => {
            const value = chartConfigs[currentChart].data.datasets[0].data[index]
            const color = chartConfigs[currentChart].data.datasets[0].backgroundColor[index]
            
            return (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {label}
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0
                  }).format(value)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ChartSection