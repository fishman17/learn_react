Scheme 设计  电商网站  goods
goods
orders  cate user
goods 文档NOSQL便利
数据类型 json array
amaze 卖农机产品

{
  _id: ObjectId(),
  name: 'Extra Large'
  Wheelbarrow,
  description: 'Heavy duty wheelbarrow...',
  text: '',
  details: {
    weight: 47,
    weight_units: 'lbs',
    modle_num:4032983402,
    manufacture: 'Acme',
    color:'Green'
  },
  pricing:{
    sale: 489700,
    retail: 589700
  },
  price_history: [
    {
      retail: 529700,
      sale: 429700,
      start: new Date(2018,5,1),
      end: new Date(2018,5,2)
    }
  ],
  total_reviews: 4,
  average_review: 4.5
  created_at:,
  updataed_at:,
  tags:['tools','gardening','soil'],
  primary_category:
  category_ids:[
    
  ]

}