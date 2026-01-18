import Link from 'next/link'

export default function DiagnosisResult({ resultType, recommendedFlavors }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
        {/* 結果タイプ */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{resultType.emoji}</div>
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            あなたは...
          </h1>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            {resultType.title}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {resultType.description}
          </p>
        </div>

        {/* 特徴 */}
        <div className="bg-purple-50 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">
            ✨ あなたの特徴
          </h3>
          <ul className="space-y-2">
            {resultType.characteristics.map((char, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700 text-lg">{char}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* おすすめフレーバー */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">
            🌿 おすすめのフレーバー
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedFlavors.map((flavor) => (
              <div 
                key={flavor.id}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200"
              >
                <h4 className="font-bold text-lg text-purple-700 mb-1">
                  {flavor.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {flavor.category}
                </p>
                <p className="text-sm text-gray-700">
                  {flavor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            もう一度診断する
          </button>
          <Link href="/">
            <button className="bg-white border-2 border-purple-600 text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition">
              トップページへ
            </button>
          </Link>
        </div>

        {/* シェアボタン（後で実装） */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            診断結果をシェアして友達にもおすすめしよう！
          </p>
        </div>
      </div>
    </div>
  )
}