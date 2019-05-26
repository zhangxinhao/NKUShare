// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
let list = []
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const database = cloud.database({
    env: 'nkushare-kynis'
  })
  await database.collection('lost_found').get({
    success(res) {
      list = res.data
      comsole.log(list)
    }
  })
  return {
    list
  }
}
