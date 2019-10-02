// pages/account_info/account_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindModify:function(e){
    console.log(e.detail.value)
    wx.showModal({
      content: '修改用户名或密码需要重新登陆，是否确认修改',
      confirmText: '确认',
      cancelText:'取消',
      success:function(res){
        wx.request({
          url: '',
          data: {
            uname:e.detail.value.uname,
            pwd:e.detail.value.pwd
          },
          success:function(res){
            wx.redirectTo({
              url: '../login/login',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})