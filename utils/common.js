function myCheckSession(){
  try{
    return false
    var session = wx.getStorageSync("session")
    wx.request({
      url: 'checksession',
      data: session,
      success:function(res){
        console.log(res)
        if(res.code=='success')
        {
          console.code('session not expired')
          return true
        }
          return false
      }
    })
  }catch(e){
    console.log('get storage error')
    console.log(e)
  }
}
module.exports.myCheckSession = myCheckSession