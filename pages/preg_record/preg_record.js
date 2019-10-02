// pages/preg_record/preg_record.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    time3: "",
    time4: "",
    time6: "",
    time7: "",
    organItems: [
      "头", "臀", "前肢", "后肢"
    ],
    organIndex: 0,
    intactItems: [
      "完整", "不完整"
    ],
    intactIndex: 0,
    genderItems: [
      "公", "母"
    ],
    genderIndex: 0,
    difficulty: 0,
    weight: 0,
    breastDistance: 0
  },
  onSubmit: function(e) {
    console.log(this.data.organIndex + "\n" + this.data.intactIndex + "\n" + this.data.genderIndex)
    console.log(e.detail.value)
    // wx.request({
    //   url:'pre_record',
    //   data:{
    //     pid:e.detail.value.pid,
    //     date:e.detail.value.date,
    //     time3:e.detail.value.time3,
    //     time4:e.detail.value.time4,
    //     organ:this.data.organIndex,
    //     time6:e.detail.value.time6,
    //     time7:e.detail.value.time7,
    //     difficulty:this.data.difficulty,
    //     intact:this.data.intact,
    //     gender:this.data.genderIndex,
    //     weight:e.detail.value.weight,
    //     estivalue:e.detail.estivalue
    //   },
    //   success:function(e){
    wx.showModal({
      title: '提交成功',
      content: '',
      showCancel:false,
      confirmText:"确认",
      success:function(res){
        if(res.confirm){
          wx.navigateBack({
            delta: 2,
          })
        }
      }
    })
    
    // }
    // })
  },
  bindOrganChange: function(e) {
    console.log("器官切换:" + e.detail.value)
    console.log(e.detail)
    this.setData({
      organIndex: e.detail.value
    })
  },
  bindIntactChange: function(e) {
    console.log("完整性切换:" + e.detail.value)
    this.setData({
      intactIndex: e.detail.value
    })
  },
  bindGenderChange: function(e) {
    console.log("性别切换:" + e.detail.value)
    this.setData({
      genderIndex: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log("日期切换" + e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTime3Change: function(e) {
    var startMinute = Number(e.detail.value.split(':')[1])
    var endMinute = Number(this.data.time6.split(':')[1])
    console.log(endMinute - startMinute)
    this.setData({
      time3: e.detail.value,
      difficulty: endMinute - startMinute
    })
  },
  bindTime4Change: function(e) {
    this.setData({
      time4: e.detail.value,
    })
  },
  bindTime6Change: function(e) {
    var startMinute = Number(this.data.time3.split(':')[1])
    var endMinute = Number(e.detail.value.split(':')[1])
    console.log(endMinute - startMinute)
    this.setData({
      time6: e.detail.value,
      difficulty: endMinute - startMinute
    })
  },
  bindTime7Change: function(e) {
    this.setData({
      time7: e.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var newDateTime = util.formatTime(new Date())
    console.log(newDateTime)
    this.setData({
      date: newDateTime.date,
      time3: newDateTime.time,
      time4: newDateTime.time,
      time6: newDateTime.time,
      time7: newDateTime.time
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})