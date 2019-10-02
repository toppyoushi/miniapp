// pages/user_info/user_info.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:"",
    fname:"",
    tel:""
  },
  bindFnameChange(e){
    this.setData({
      fname:e.detail.value
    })
  },
  bindTelChange(e){
    this.setData({
      tel:e.detail.value
    })
  },
  onSubmit:function(e){
    console.log(e.detail.value);
    wx.request({
      url:'',
      data:{
        uid:e.detail.value.uid,
        fname:e.detail.value.fname,
        tel:e.detail.value.tel
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
    this.setData({
      uid: app.globalData.session
    })
    wx.request({
      url: 'user_info',
      data:{
        uid:this.data.uid
      },
      success:function(res){
        console.log(res)
        this.setData({
          fname:res.fname,
          tel:res.tel
        })
      }
    })
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