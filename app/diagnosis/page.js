'use client'
import { useState, useEffect } from 'react'
import { questions } from '../../data/questions'
import { calculateResultType } from '../../data/resultTypes'
import { supabase } from '../../lib/supabase'
import DiagnosisResult from '../components/DiagnosisResult'
import Link from 'next/link'

export default function DiagnosisPage() {
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({
    fruity: 0,
    refreshing: 0,
    rich: 0,
    light: 0,
    sweet: 0,
    adventurous: 0,
    safe: 0
  })
  const [finished, setFinished] = useState(false)
  const [resultType, setResultType] = useState(null)
  const [recommendedFlavors, setRecommendedFlavors] = useState([])

  const handleStart = () => {
    setStarted(true)
  }

  const handleAnswer = (optionScore) => {
    // スコアを更新
    const newScores = { ...scores }
    Object.keys(optionScore).forEach(key => {
      newScores[key] += optionScore[key]
    })
    setScores(newScores)

    // 次の質問へ
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // 診断完了
      finishDiagnosis(newScores)
    }
  }

  const finishDiagnosis = async (finalScores) => {
    // 結果タイプを判定
    const result = calculateResultType(finalScores)
    setResultType(result)

    // おすすめフレーバーを取得
    await fetchRecommendedFlavors(result.recommendedCategories)

    setFinished(true)
  }

  const fetchRecommendedFlavors = async (categories) => {
    try {
      const { data, error } = await supabase
        .from('flavors')
        .select('*')
        .in('category', categories)
        .limit(4)

      if (error) {
        console.error('Error fetching flavors:', error)
      } else {
        setRecommendedFlavors(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // 結果画面
  if (finished && resultType) {
    return (
      <DiagnosisResult 
        resultType={resultType}
        recommendedFlavors={recommendedFlavors}
      />
    )
  }

  // スタート画面
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-6">
            🌿 シーシャフレーバー診断
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            10個の質問に答えて、あなたにぴったりのフレーバーを見つけよう！
          </p>
          <button 
            onClick={handleStart}
            className="bg-purple-600 text-white text-xl font-bold px-12 py-4 rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
          >
            診断スタート
          </button>
          <div className="mt-6">
            <Link href="/" className="text-purple-600 hover:underline">
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 質問画面
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* 進捗バー */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>質問 {currentQuestion + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 質問 */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {question.question}
        </h2>

        {/* 選択肢 */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 hover:border-purple-400 rounded-xl p-4 text-left text-lg font-semibold text-gray-800 transition transform hover:scale-105"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}