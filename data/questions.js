export const questions = [
  {
    id: 1,
    question: "普段、どんな飲み物をよく飲みますか？",
    options: [
      { text: "フルーツジュース", score: { fruity: 3 } },
      { text: "コーヒー・紅茶", score: { rich: 3 } },
      { text: "炭酸飲料", score: { refreshing: 3 } },
      { text: "お茶", score: { light: 3 } }
    ]
  },
  {
    id: 2,
    question: "甘いものは好きですか？",
    options: [
      { text: "大好き！", score: { sweet: 3 } },
      { text: "適度に好き", score: { sweet: 2 } },
      { text: "あまり好きじゃない", score: { refreshing: 2 } },
      { text: "苦手", score: { light: 3 } }
    ]
  },
  {
    id: 3,
    question: "好きな味の傾向は？",
    options: [
      { text: "さっぱり・爽やか", score: { refreshing: 3 } },
      { text: "濃厚・しっかり", score: { rich: 3 } },
      { text: "フルーティー", score: { fruity: 3 } },
      { text: "優しい・軽め", score: { light: 3 } }
    ]
  },
  {
    id: 4,
    question: "ミント系の味は好きですか？",
    options: [
      { text: "大好き", score: { refreshing: 3 } },
      { text: "組み合わせ次第で好き", score: { refreshing: 2, fruity: 1 } },
      { text: "あまり好きじゃない", score: { fruity: 2 } },
      { text: "苦手", score: { rich: 2 } }
    ]
  },
  {
    id: 5,
    question: "新しいことに挑戦するのは？",
    options: [
      { text: "大好き！冒険派", score: { adventurous: 3 } },
      { text: "時々挑戦する", score: { adventurous: 2 } },
      { text: "慎重派", score: { safe: 2 } },
      { text: "定番が一番", score: { safe: 3 } }
    ]
  },
  {
    id: 6,
    question: "デザートで選ぶなら？",
    options: [
      { text: "フルーツタルト", score: { fruity: 3 } },
      { text: "チョコレートケーキ", score: { rich: 3 } },
      { text: "アイスクリーム", score: { refreshing: 3 } },
      { text: "和菓子", score: { light: 3 } }
    ]
  },
  {
    id: 7,
    question: "シーシャに求めるものは？",
    options: [
      { text: "リラックス", score: { light: 2, safe: 2 } },
      { text: "気分転換", score: { refreshing: 3 } },
      { text: "濃厚な味わい", score: { rich: 3 } },
      { text: "新しい発見", score: { adventurous: 3 } }
    ]
  },
  {
    id: 8,
    question: "好きな季節は？",
    options: [
      { text: "春", score: { fruity: 2, light: 1 } },
      { text: "夏", score: { refreshing: 3 } },
      { text: "秋", score: { rich: 2, sweet: 1 } },
      { text: "冬", score: { rich: 2, sweet: 1 } }
    ]
  },
  {
    id: 9,
    question: "香りの強さは？",
    options: [
      { text: "強い香りが好き", score: { rich: 3 } },
      { text: "ほどほどがいい", score: { fruity: 2 } },
      { text: "優しい香りが好き", score: { light: 3 } },
      { text: "香りより煙の量重視", score: { refreshing: 2 } }
    ]
  },
  {
    id: 10,
    question: "最後に、直感で選んでください！",
    options: [
      { text: "🍎 フルーツ", score: { fruity: 3 } },
      { text: "🌿 ハーブ・ミント", score: { refreshing: 3 } },
      { text: "🍰 デザート", score: { rich: 3, sweet: 2 } },
      { text: "🍵 お茶・スパイス", score: { light: 3 } }
    ]
  }
]