'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../lib/supabase'
import FlavorCard from './components/FlavorCard'

export default function Home() {
  const [flavors, setFlavors] = useState([])
  const [loading, setLoading] = useState(true)

  // ページ読み込み時にSupabaseからデータを取得
  useEffect(() => {
    fetchFlavors()
  }, [])

  const fetchFlavors = async () => {
    try {
      const { data, error } = await supabase
        .from('flavors')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching flavors:', error)
      } else {
        setFlavors(data)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
        <div className="text-white text-3xl">読み込み中...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-600 p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        人気のフレーバー
      </h1>
      <div className="text-center mb-12">
      <Link href="/diagnosis">
        <button className="bg-white text-purple-600 font-bold text-xl px-8 py-4 rounded-lg hover:bg-purple-50 transition transform hover:scale-105 shadow-lg">
          ✨ あなたにぴったりのフレーバーを診断
        </button>
      </Link>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {flavors.map((flavor) => (
          <FlavorCard 
            key={flavor.id}
            name={flavor.name}
            category={flavor.category}
            description={flavor.description}
          />
        ))}
      </div>
    </div>
  )
}