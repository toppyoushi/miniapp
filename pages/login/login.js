// pages/login/login.js
var common = require("../../utils/common.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uname: "",
    vcode: "",
    info: "",
  },
  bindUnameChange: function (e) {
    this.setData({
      uname: e.detail.value
    })
    console.log(this.data)
  },
  bindGetVcode: function () {
    if (this.data.uname == "") {
      wx.showModal({
        title: '获取验证码失败',
        content: '请先输入用户名',
        showCancel: false,
        confirmText: '确定',
        complete: function (res) {
        },
      })
    } else {
      wx.request({
        url: 'getvcode',
        data: {
          uname: this.data.uname
        },
        success: function () {
          wx.showToast({
            title: '验证码已发送至注册手机',
            icon: 'success',
            duration: 2000
          })
        },
        fail: function () {
          wx.showToast({
            title: '验证码发送失败',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }

  },
  userLogin: function (e) {
    console.log(e.detail.value)
    if (this.data.uname == "" || e.detail.value.pwd == "") {
      wx.showModal({
        title: '登陆失败',
        content: '请输入用户名和密码',
        showCancel: false,
        confirmText: '确定',
        complete: function (res) {
        },
      })
    } else if (e.detail.value.vcode == "") {
      wx.showModal({
        title: '登陆失败',
        content: '请输入验证码',
        showCancel: false,
        confirmText: '确定',
        complete: function (res) {
        },
      })
    } else {
      wx.switchTab({
        url: '../index/index',
      })
      // wx.request({
      //   url: 'login',
      //   data: {
      //     uname: e.detail.value.uname,
      //     pwd: e.detail.value.pwd,
      //     checkcode: e.detail.value.vcode,
      //   },
      //   success: function (res) {
      //     var status = res.status
      //     if (status == '0') {
      //       var session = res.session
      //       wx.setStorage({
      //         key: 'session',
      //         data: session
      //       })
      //       wx.switchTab({
      //         url: '../index/index'
      //       })
      //     } else {
      //       if (status == '1') {
      //         this.setData({
      //           info: '用户名或密码错误',
      //         })
      //       } else if (status == '2') {
      //         this.setData({
      //           info: '验证码错误'
      //         })
      //       }
      //       wx.showModal({
      //         title: '登陆失败',
      //         content: info,
      //         showCancel: false,
      //         confirmText: '确定',
      //         complete: function (res) {
      //           this.setData({
      //             info: ""
      //           })
      //         },
      //       })
      //     }
      //   }
      // })
    }

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
    if (app.globalData.session != "") {
      console.log("session未过期，直接登陆")
      wx.switchTab({
        url: '../index/index',
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