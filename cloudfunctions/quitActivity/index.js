// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const database = cloud.database({
    env: 'nkshare-3ufbs'
  })
  return await database.collection('take_activity').where({
    _openid: event.userID,
    act_id: event.act_id,
    type: event.type
  }).remove()
}
