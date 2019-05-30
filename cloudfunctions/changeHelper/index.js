// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const {helpID, userID} = event

  const database = cloud.database({
    env: 'nkshare-3ufbs'
  })
  await database.collection('help').doc(helpID).update({
    data: {
      helper: userID
    }
  })
  return {
    event
  }
}
