export const resultTypes = {
  fruity_adventurous: {
    id: 'fruity_adventurous',
    title: 'フルーティ冒険家',
    emoji: '🍎✨',
    description: 'あなたはフルーツの甘さと新しい挑戦が大好きなタイプ！定番から珍しいフレーバーまで、フルーツ系なら何でも楽しめます。',
    characteristics: [
      '新しいフレーバーへの挑戦を楽しむ',
      'フルーツの甘さと香りが好き',
      '話題のフレーバーに敏感'
    ],
    recommendedCategories: ['フルーツ系', 'フルーツ×ミント']
  },
  fruity_safe: {
    id: 'fruity_safe',
    title: 'フルーツ定番派',
    emoji: '🍇🌟',
    description: '甘くて吸いやすいフルーツ系が大好き。定番のフレーバーで安心してリラックスしたいあなたにぴったり。',
    characteristics: [
      '定番の美味しさを大切にする',
      '甘くて優しい香りが好き',
      '失敗したくない慎重派'
    ],
    recommendedCategories: ['フルーツ系']
  },
  refreshing_adventurous: {
    id: 'refreshing_adventurous',
    title: '爽快チャレンジャー',
    emoji: '🌿⚡',
    description: 'スッキリ爽やかなミント系が大好きで、新しい組み合わせにも積極的。気分転換に最高のタイプ！',
    characteristics: [
      'ミントの清涼感が大好き',
      '新しい組み合わせを試したい',
      'リフレッシュ目的でシーシャを楽しむ'
    ],
    recommendedCategories: ['フルーツ×ミント', 'ミント系']
  },
  refreshing_safe: {
    id: 'refreshing_safe',
    title: 'クール&シンプル',
    emoji: '❄️💙',
    description: 'シンプルで爽やかなミント系が一番。複雑な味より、スッキリした定番が好きなタイプ。',
    characteristics: [
      'シンプルな美味しさが好き',
      '爽快感重視',
      '定番のミント系が安心'
    ],
    recommendedCategories: ['ミント系', 'フルーツ×ミント']
  },
  rich_sweet: {
    id: 'rich_sweet',
    title: 'デザート愛好家',
    emoji: '🍰🎂',
    description: '濃厚で甘いデザート系が大好き！バニラやチョコなど、スイーツのような味わいで至福の時間を。',
    characteristics: [
      '濃厚な甘さが好き',
      'デザート系の香りに癒される',
      'ゆったりリラックスしたい'
    ],
    recommendedCategories: ['デザート系', 'フルーツ系']
  },
  light_calm: {
    id: 'light_calm',
    title: 'ライト&リラックス',
    emoji: '🍵🌸',
    description: '優しくて軽めのフレーバーが好き。お茶やスパイス系など、穏やかな香りでリラックスするタイプ。',
    characteristics: [
      '優しい香りが好き',
      '軽めでリラックスできる',
      'お茶やハーブ系に興味'
    ],
    recommendedCategories: ['お茶・スパイス系', 'フルーツ系']
  }
}

// スコアから結果タイプを判定する関数
export function calculateResultType(scores) {
  const { fruity, refreshing, rich, light, sweet, adventurous, safe } = scores
  
  // 最も高いスコアの傾向を判定
  const isFruity = fruity >= refreshing && fruity >= rich && fruity >= light
  const isRefreshing = refreshing > fruity && refreshing >= rich && refreshing >= light
  const isRich = rich > fruity && rich > refreshing && rich >= light
  const isLight = light > fruity && light > refreshing && light > rich
  
  const isAdventurous = adventurous > safe
  const isSweet = sweet >= 5
  
  // 組み合わせで判定
  if (isFruity && isAdventurous) {
    return resultTypes.fruity_adventurous
  } else if (isFruity && !isAdventurous) {
    return resultTypes.fruity_safe
  } else if (isRefreshing && isAdventurous) {
    return resultTypes.refreshing_adventurous
  } else if (isRefreshing && !isAdventurous) {
    return resultTypes.refreshing_safe
  } else if ((isRich || isSweet) && sweet >= 4) {
    return resultTypes.rich_sweet
  } else if (isLight) {
    return resultTypes.light_calm
  } else {
    // デフォルト
    return resultTypes.fruity_safe
  }
}