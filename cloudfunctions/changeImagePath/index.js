// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const {fileID, itemID} = event

  const database = cloud.database({
    env: 'nkushare-kynis'
  })
  await database.collection('test').doc(itemID).update({
    data: {
      imgList: fileID
    }
  })

  
  // const lostFound = database.collection('test')
  // lostFound.where({
  //   _id: itemID
  // }).update({
  //   data: {
  //     imgList: fileID
  //   },
  //   success(res) {
  //   }
  // })
  return {
    event,
    fileID,
    itemID
  }
}
