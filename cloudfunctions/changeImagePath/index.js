// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const {fileID, itemID} = event

  const database = cloud.database({
    env: 'nkshare-3ufbs'
  })
  await database.collection('lost_found').doc(itemID).update({
    data: {
      imgList: fileID
    }
  })
  return {
    event,
    fileID,
    itemID
  }
}
