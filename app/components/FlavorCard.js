'use client'
import { useState } from 'react'

export default function FlavorCard({ name, category, description }) {
  const [isFavorite, setIsFavorite] = useState(false)
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-purple-600">
          {name}
        </h3>
        <button 
          onClick={toggleFavorite}
          className="text-3xl"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mb-3">
        カテゴリ: {category}
      </p>
      <p className="text-gray-700">
        {description}
      </p>
      
      {isFavorite && (
        <p className="text-sm text-pink-500 mt-3 font-semibold">
          ⭐ お気に入り登録済み
        </p>
      )}
    </div>
  )
}