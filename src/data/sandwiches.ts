import { Sandwich } from '@/types/sandwich';

export const sandwiches: Sandwich[] = [
  // 漢堡系列
  {
    id: 1,
    name: '經典火腿蛋三明治',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜', '番茄片'],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['火腿', '蛋'],
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '確保所有食材都在室溫下準備',
      '檢查食材的新鮮度'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備吐司2片、火腿1片、雞蛋1顆、生菜1片、番茄半顆',
        tips: ['確保所有食材都在室溫下準備', '檢查食材的新鮮度']
      },
      {
        id: 2,
        title: '煎蛋',
        description: '將平底鍋預熱，加入少許油，打入雞蛋，煎至蛋白凝固，蛋黃半熟',
        tips: ['使用中小火煎蛋', '可以根據顧客喜好調整蛋的熟度']
      },
      {
        id: 3,
        title: '烤吐司',
        description: '將吐司放入烤麵包機中烤至金黃色',
        tips: ['注意觀察顏色變化', '不要烤太久以免燒焦']
      },
      {
        id: 4,
        title: '組裝三明治',
        description: '在底層吐司上放上生菜，然後依序放上火腿、煎蛋、番茄片，最後蓋上另一片吐司',
        tips: ['注意擺放順序以確保口感', '可以稍微壓實三明治']
      }
    ]
  },
  {
    id: 2,
    name: '蔬菜起司堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['玉米粒', '番茄片', '生菜'],
        sauce: '美乃滋',
        seasoning: '胡椒粒'
      },
      middle: {
        ingredients: ['蛋', '起司'],
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '生菜保持乾燥，避免口感變差',
      '千島醬均勻分佈，增添風味'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、番茄片、玉米粒、蛋、起司等食材',
        tips: ['生菜要瀝乾水分', '蛋要煎至半熟']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 3,
    name: '鮪魚帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: ['鮪魚醬']
      },
      middle: {
        ingredients: ['起司片', '蛋', '生菜'],
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '美乃滋'
      }
    },
    notes: [
      '確保胡椒粉撒放均勻，避免味道集中',
      '生菜在組裝時可以保持乾燥，避免帕尼尼變濕軟'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、鮪魚醬、生菜、蛋、起司片等食材',
        tips: ['鮪魚醬要瀝乾多餘油分', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '煎蛋',
        description: '將蛋煎至半熟',
        tips: ['使用中小火煎蛋', '注意蛋的熟度']
      },
      {
        id: 3,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      },
      {
        id: 4,
        title: '烤製',
        description: '將帕尼尼放入烤盤中烤至金黃色',
        tips: ['注意烤製時間', '避免烤焦']
      }
    ]
  },
  {
    id: 4,
    name: '起司蛋團聚堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜'],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['起司蛋', '起司片'],
        sauce: '番茄醬',
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '起司蛋可適度加熱，提升風味',
      '番茄醬不宜過多，以免掩蓋其他味道'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、起司蛋、起司片等食材',
        tips: ['起司蛋要趁熱使用', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 5,
    name: '燻雞堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['燻雞', '生菜'],
        sauce: '美乃滋',
        seasoning: '黑胡椒粒'
      },
      middle: {
        ingredients: [],
        sauce: '番茄醬',
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '注意美乃滋分量，避免過於油膩'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、燻雞、生菜等食材',
        tips: ['燻雞要加熱', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 6,
    name: '懷舊堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜', '肉'],
        sauce: '美乃滋',
        seasoning: '胡椒粉'
      },
      middle: {
        ingredients: [],
        sauce: '番茄醬',
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '番茄醬與胡椒粉的搭配比例應平衡，避免過酸或過辣'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、肉等食材',
        tips: ['肉要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 7,
    name: '泡菜辣豬堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜', '豬肉片'],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['泡菜'],
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '泡菜應充分瀝乾，避免影響麵包質地',
      '胡椒粉撒勻，增添辛辣層次感'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、豬肉片、泡菜等食材',
        tips: ['豬肉片要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 8,
    name: '脆皮嫩滋雞腿堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜'],
        sauce: '美乃滋',
        seasoning: '胡椒粒'
      },
      middle: {
        ingredients: ['炸雞'],
        sauce: '番茄醬及黃芥末醬',
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '炸雞保持酥脆，建議最後放入',
      '黃芥末醬適量使用，避免過酸'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、炸雞等食材',
        tips: ['炸雞要趁熱使用', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 9,
    name: '蔥爆起司豬柳堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['豬柳', '生菜'],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: [],
        sauce: '番茄醬',
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '番茄醬分布均勻，避免味道集中'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、豬柳、生菜等食材',
        tips: ['豬柳要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 10,
    name: '黑豬肉堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜', '豬肉'],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: [],
        sauce: '番茄醬'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '番茄醬與生菜搭配，提升清爽口感'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、豬肉等食材',
        tips: ['豬肉要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 11,
    name: '厚牛堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜', '牛肉', '起司片'],
        sauce: '花生醬',
        seasoning: '黑胡椒粒'
      },
      middle: {
        ingredients: ['酸黃瓜片'],
        sauce: '番茄醬',
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '美乃滋'
      }
    },
    notes: [
      '酸黃瓜片保持清脆，平衡整體風味'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、牛肉、起司片等食材',
        tips: ['牛肉要煎至適當熟度', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 12,
    name: '嫩煎雞腿堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜'],
        sauce: '美乃滋',
        seasoning: '胡椒粒'
      },
      middle: {
        ingredients: ['肉'],
        sauce: '番茄醬',
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '美乃滋和番茄醬的比例調和，避免過甜或過酸'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、雞腿肉等食材',
        tips: ['雞腿肉要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 13,
    name: '海陸總匯堡',
    type: 'burger',
    layers: {
      bottom: {
        ingredients: ['生菜'],
        sauce: '美乃滋',
        seasoning: '胡椒粉'
      },
      middle: {
        ingredients: ['火腿片', '起司片', '豬肉片', '炸花枝排'],
        sauce: '番茄醬及黃芥末醬'
      },
      top: {
        ingredients: [],
        sauce: '千島醬'
      }
    },
    notes: [
      '花枝排保持酥脆，建議最後放入',
      '番茄醬與黃芥末醬混合，增添層次感'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備漢堡麵包、生菜、火腿片、起司片、豬肉片、炸花枝排等食材',
        tips: ['炸花枝排要趁熱使用', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝漢堡',
        description: '按照底層、中層、上層的順序組裝漢堡',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },

  // 帕尼尼系列
  {
    id: 14,
    name: '起司火腿薯餅帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: ['生菜'],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['火腿片', '起司片', '薯餅'],
        sauce: '番茄醬',
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '美乃滋'
      }
    },
    notes: [
      '薯餅應在最後組裝時放置，確保酥脆口感',
      '火腿片和起司片可以提前加熱提升風味'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、生菜、火腿片、起司片、薯餅等食材',
        tips: ['薯餅要炸至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      },
      {
        id: 3,
        title: '烤製',
        description: '將帕尼尼放入烤盤中烤至金黃色',
        tips: ['注意烤製時間', '避免烤焦']
      }
    ]
  },
  {
    id: 15,
    name: '肉鬆帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['肉鬆', '生菜'],
        sauce: '美乃滋',
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '美乃滋',
        seasoning: '胡椒粉'
      }
    },
    notes: [
      '調整肉鬆與美乃滋比例，達到口感平衡',
      '番茄醬和胡椒粉撒放順序可視需求微調'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、肉鬆、生菜等食材',
        tips: ['肉鬆要均勻分布', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      },
      {
        id: 3,
        title: '烤製',
        description: '將帕尼尼放入烤盤中烤至金黃色',
        tips: ['注意烤製時間', '避免烤焦']
      }
    ]
  },
  {
    id: 16,
    name: '花醬肉鬆帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '花生醬'
      },
      middle: {
        ingredients: ['肉鬆', '起司片', '蛋'],
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '花生醬'
      }
    },
    notes: [
      '蛋與起司片可提前稍微加熱，增強香氣',
      '花生醬均勻塗抹，確保每一口都有濃郁風味'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、肉鬆、起司片、蛋等食材',
        tips: ['蛋和起司片可提前加熱', '花生醬要均勻塗抹']
      },
      {
        id: 2,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      },
      {
        id: 3,
        title: '烤製',
        description: '將帕尼尼放入烤盤中烤至金黃色',
        tips: ['注意烤製時間', '避免烤焦']
      }
    ]
  },
  {
    id: 17,
    name: '芋泥肉鬆起司蛋帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '芋泥醬'
      },
      middle: {
        ingredients: ['肉鬆', '起司蛋'],
        seasoning: '胡椒粉'
      },
      top: {
        ingredients: [],
        sauce: '奶油'
      }
    },
    notes: [
      '芋泥醬抹均勻，避免因分布不勻影響整體風味',
      '起司蛋可適當加熱，提升滑順口感'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、肉鬆、起司蛋等食材',
        tips: ['起司蛋要加熱至適當溫度', '芋泥醬要均勻塗抹']
      },
      {
        id: 2,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      },
      {
        id: 3,
        title: '烤製',
        description: '將帕尼尼放入烤盤中烤至金黃色',
        tips: ['注意烤製時間', '避免烤焦']
      }
    ]
  },
  {
    id: 18,
    name: '蔥鹽蔬菜豬肉蛋帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['生菜', '豬肉片', '蛋'],
        sauce: '蔥鹽醬',
        seasoning: '胡椒鹽'
      },
      top: {
        ingredients: [],
        sauce: '美乃滋'
      }
    },
    notes: [
      '生菜保持新鮮，組裝時建議最後放入避免受熱萎縮'
    ],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、生菜、豬肉片、蛋等食材',
        tips: ['豬肉片要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      },
      {
        id: 3,
        title: '烤製',
        description: '將帕尼尼放入烤盤中烤至金黃色',
        tips: ['注意烤製時間', '避免烤焦']
      }
    ]
  },
  {
    id: 19,
    name: '猛男套餐中總匯帕尼尼',
    type: 'panini',
    layers: {
      bottom: {
        ingredients: ['火腿', '起司', '生菜', '肉片'],
        sauce: '番茄醬',
        seasoning: '胡椒粉'
      },
      middle: {
        ingredients: [],
        sauce: '吐司邊'
      },
      top: {
        ingredients: ['蛋', '炸花枝片'],
        sauce: '番茄醬及黃芥末',
        seasoning: '胡椒粒'
      }
    },
    notes: ['沒有吐司邊用一般吐司'],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備帕尼尼麵包、火腿、起司、生菜、肉片、蛋、炸花枝片等食材',
        tips: ['炸花枝片要趁熱使用', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝帕尼尼',
        description: '按照底層、中層、上層的順序組裝帕尼尼',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },

  // 厚片焗烤系列
  {
    id: 21,
    name: '鮪魚焗烤',
    type: 'grilled',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '鮪魚醬'
      },
      middle: {
        ingredients: ['玉米粒'],
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '起司'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備厚片吐司、鮪魚醬、玉米粒、起司等食材',
        tips: ['玉米粒要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝焗烤',
        description: '按照底層、中層、上層的順序組裝焗烤',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 22,
    name: '德腸焗烤',
    type: 'grilled',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '酸黃瓜醬'
      },
      middle: {
        ingredients: ['德腸'],
        sauce: '番茄醬及黃芥末醬',
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '起司'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備厚片吐司、酸黃瓜醬、德腸、起司等食材',
        tips: ['德腸要切片']
      },
      {
        id: 2,
        title: '組裝焗烤',
        description: '按照底層、中層、上層的順序組裝焗烤',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 23,
    name: '燻雞焗烤',
    type: 'grilled',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '美乃滋'
      },
      middle: {
        ingredients: ['燻雞'],
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '起司'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備厚片吐司、美乃滋、燻雞、起司等食材',
        tips: ['燻雞要加熱']
      },
      {
        id: 2,
        title: '組裝焗烤',
        description: '按照底層、中層、上層的順序組裝焗烤',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },

  // 飯卷系列
  {
    id: 24,
    name: '鮪魚飯卷',
    type: 'riceRoll',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '飯'
      },
      middle: {
        ingredients: ['玉米粒', '鮪魚'],
        seasoning: '黑胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: '無'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備飯、玉米粒、鮪魚等食材',
        tips: ['玉米粒要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝飯卷',
        description: '按照底層、中層、上層的順序組裝飯卷',
        tips: ['注意食材的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 25,
    name: '肉鬆飯卷',
    type: 'riceRoll',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '飯加香鬆'
      },
      middle: {
        ingredients: ['肉鬆'],
        sauce: '美乃滋'
      },
      top: {
        ingredients: [],
        sauce: '無'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備飯、香鬆、肉鬆、美乃滋等食材',
        tips: ['肉鬆要均勻分布']
      },
      {
        id: 2,
        title: '組裝飯卷',
        description: '按照底層、中層、上層的順序組裝飯卷',
        tips: ['注意食材的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 26,
    name: '豬柳飯卷',
    type: 'riceRoll',
    layers: {
      bottom: {
        ingredients: [],
        sauce: '飯'
      },
      middle: {
        ingredients: ['生菜', '豬柳']
      },
      top: {
        ingredients: [],
        sauce: '無'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備飯、生菜、豬柳等食材',
        tips: ['豬柳要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝飯卷',
        description: '按照底層、中層、上層的順序組裝飯卷',
        tips: ['注意食材的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },

  // 捲餅系列
  {
    id: 27,
    name: '豬柳捲餅',
    type: 'wrap',
    layers: {
      bottom: {
        ingredients: ['生菜']
      },
      middle: {
        ingredients: ['豬柳']
      },
      top: {
        ingredients: [],
        sauce: 'NA'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備捲餅皮、生菜、豬柳等食材',
        tips: ['豬柳要煎至金黃色', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝捲餅',
        description: '按照底層、中層、上層的順序組裝捲餅',
        tips: ['注意食材的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  },
  {
    id: 28,
    name: '炸雞捲餅',
    type: 'wrap',
    layers: {
      bottom: {
        ingredients: ['生菜']
      },
      middle: {
        ingredients: ['炸雞', '起司片'],
        sauce: '番茄醬及美乃滋及塔塔醬',
        seasoning: '胡椒粒'
      },
      top: {
        ingredients: [],
        sauce: 'NA'
      }
    },
    notes: [],
    steps: [
      {
        id: 1,
        title: '準備食材',
        description: '準備捲餅皮、生菜、炸雞、起司片等食材',
        tips: ['炸雞要趁熱使用', '生菜要瀝乾水分']
      },
      {
        id: 2,
        title: '組裝捲餅',
        description: '按照底層、中層、上層的順序組裝捲餅',
        tips: ['注意醬料的均勻分布', '確保每層食材擺放整齊']
      }
    ]
  }
]; 