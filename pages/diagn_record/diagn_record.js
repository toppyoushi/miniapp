// pages/diagn_record/diagn_record.js
var util = require('../../utils/util.js')
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid:'',
    checkdate:"",
    matedate:"",
    estidate:"",
    items: [
      "是", "否"
    ],
    pregnantIndex:0,
    barrenIndex: 1,
    oari_diameter:0,
    foli_diameter:0,
    uterIndex:0,
    vagIndex:0,
    preg_period:0
  },
  bindPidChange:function(e){
    console.log(e)
    wx.request({
      url:'',
      data:{
        pid:e.detail.value
      },
      success:function(e){

      }
    })
  },
  bindCheckDateChange: function (e) {
    console.log("日期切换" + e.detail.value)
    this.setData({
      checkdate: e.detail.value
    })
  },
  onSubmit:function(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newDateTime = util.formatTime(new Date())
    console.log(newDateTime)
    this.setData({
      checkdate: newDateTime.date,
    })
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