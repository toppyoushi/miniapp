// pages/login/login.js
var common = require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  userLogin: function (e) {
    wx.switchTab({
      url: '../index/index',
    })
    wx.request({
      url: 'login',
      data: {
        uname: e.detail.value.uname,
        pwd: e.detail.value.uname,
        checkcode: e.detail.value.checkcode,
        approach: this.approach
      },
      success: function (res) {
        var status = res.status
        if (status == '0') {
          var session = res.session
          wx.setStorage({
            key: 'session',
            data: session
          })
          wx.switchTab({
            url: '../index/index'
          })
        } else if (status == '1') {
          this.setData({
            info: '用户名或密码错误',
          })
        } else if (status == '2') {
          this.setData({
            info: '验证码错误'
          })
        }
      }
    })
  },
  naviToRegister: function () {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (common.myCheckSession()) {
      wx.switchTab({
        url: '../index/index'
      })
    }
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