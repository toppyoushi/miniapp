// pages/preg_record/preg_record.js
var util = require("../../utils/util.js")
var common = require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    date12: "",
    time12: "",
    date13: "",
    time13: "",
    firstdate: "",
    firsttime: "",
    firstid: "",
    seconddate: "",
    secondtime: "",
    secondid: "",
    thirddate: "",
    thirdtime: "",
    thirdid: "",
    fourthdate: "",
    fourthtime: "",
    fourthid: "",
    lastdate: "",
    lasttime: "",
    lastid: "",
    interval: 0,
    check2: false,
    check3: false,
    check4: false
  },
  bindFirstIdChange: function(e) {
    this.setData({
      firstid: e.detail.value
    })
    console.log(this.data.check2)
    console.log(this.data.check3)
    console.log(this.data.check4)
    this.setLast()
  },
  bindSecondIdChange: function(e) {
    console.log(this.data.check2)
    console.log(this.data.check3)
    console.log(this.data.check4)
    if (!this.data.check2) {
      this.setData({
        secondid: ""
      })
    } else {
      this.setData({
        secondid: e.detail.value
      })
    }
    this.setLast()
  },
  bindThirdIdChange: function(e) {
    console.log(this.data.check2)
    console.log(this.data.check3)
    console.log(this.data.check4)
    if (!this.data.check3) {
      this.setData({
        thirdid: ""
      })
    } else {
      this.setData({
        thirdid: e.detail.value
      })
    }
    this.setLast()
  },
  bindFourthIdChange: function(e) {
    console.log(this.data.check2)
    console.log(this.data.check3)
    console.log(this.data.check4)
    if (!this.data.check4) {
      this.setData({
        fourthid: ""
      })
    } else {
      this.setData({
        fourthid: e.detail.value
      })
    }
    this.setLast()
  },
  setLast: function() {
    var check2 = this.data.check2
    var check3 = this.data.check3
    var check4 = this.data.check4
    if (check4) {
      this.setData({
        lastdate: this.data.fourthdate,
        lasttime: this.data.fourthtime,
        lastid: this.data.fourthid,
      })
    } else if (check3) {
      this.setData({
        lastdate: this.data.thirddate,
        lasttime: this.data.thirdtime,
        lastid: this.data.thirdid,
      })
    } else if (check2) {
      this.setData({
        lastdate: this.data.seconddate,
        lasttime: this.data.secondtime,
        lastid: this.data.secondid,
      })
    } else {
      this.setData({
        lastdate: this.data.firstdate,
        lasttime: this.data.firsttime,
        lastid: this.data.firstid,
      })
    }
    var interval = common.calculateInterval(this.data.date, this.data.lastdate)
    this.setData({
      interval: interval
    })
  },
  bindCheck2Change: function(e) {
    console.log(e.detail)
    console.log(this.data.check2)
    var that = this
    if (!e.detail.value) {
      console.log(that.data.check2)
      this.setData({
        check2: false,
        check3: false,
        check4: false,
        seconddate: "",
        secondtime: "",
        secondid: "",
        thirddate: "",
        thirdtime: "",
        thirdid: "",
        fourthdate: "",
        fourthtime: "",
        fourthid: "",
      })
    } else {
      var newDateTime = util.formatTime(new Date())
      this.setData({
        check2: true,
        seconddate: newDateTime.date,
        secondtime: newDateTime.time,
      })
    }
    this.setLast()
  },
  bindCheck3Change: function(e) {
    console.log(e.detail)
    if (!e.detail.value) {
      this.setData({
        check3: false,
        check4: false,
        thirddate: "",
        thirdtime: "",
        thirdid: "",
        fourthdate: "",
        fourthtime: "",
        fourthid: "",
      })
    } else {
      var newDateTime = util.formatTime(new Date())
      this.setData({
        check2: true,
        check3: true,
        seconddate: newDateTime.date,
        secondtime: newDateTime.time,
        thirddate: newDateTime.date,
        thirdtime: newDateTime.time,
      })
    }
    this.setLast()
  },
  bindCheck4Change: function(e) {
    console.log(e.detail)
    if (!e.detail.value) {
      this.setData({
        check4: false,
        fourthdate: "",
        fourthtime: "",
        fourthid: ""
      })
    } else {
      var newDateTime = util.formatTime(new Date())
      this.setData({
        check2: true,
        check3: true,
        check4: true,
        seconddate: newDateTime.date,
        secondtime: newDateTime.time,
        thirddate: newDateTime.date,
        thirdtime: newDateTime.time,
        fourthdate: newDateTime.date,
        fourthtime: newDateTime.time
      })
    }
    this.setLast()
  },
  onSubmit: function(e) {
    console.log(e.detail.value)
    console.log(this.data)
    wx.request({
      url: 'pre_record',
      data: {
        date: e.detail.value.date,
        time12: e.detail.value.time12,
        time13: e.detail.value.time13,
        firstdate: e.detail.value.firstdate,
        firsttime: e.detail.value.firsttime,
        firstid: e.detail.value.firstid,
        seconddate: e.detail.value.seconddate,
        secondtime: e.detail.value.secondtime,
        secondid: e.detail.value.secondid,
        thirddate: e.detail.value.thirddate,
        thirdtime: e.detail.value.thirdtime,
        thirdid: e.detail.value.thirdid,
        fourthdate: e.detail.value.fourthdate,
        fourthtime: e.detail.value.fourthtime,
        fourthid: e.detail.value.fourthid,
        lastdate: e.detail.value.lastdate,
        lasttime: e.detail.value.lasttime,
        lastid: e.detail.value.lastid,
        interval: this.data.interval,
      },
      success: function(e) {
        wx.showModal({
          title: '提交成功',
          content: '',
          showCancel: false,
          confirmText: "确认",
          success: function(res) {
            if (res.confirm) {
              wx.navigateBack({
                delta: 2,
              })
            }
          }
        })

      }
    })
  },
  bindPidChange: function(e) {
    wx.request({
      url: 'getdate',
      data: {
        pid: e.detail.value
      },
      success: function(res) {
        this.setData({
          date: res.date
        })
      }
    })
  },
  bindTime12Change: function(e) {
    this.setData({
      time12: e.detail.value
    })
  },
  bindTime13Change: function(e) {
    this.setData({
      time13: e.detail.value
    })
  },
  bindFirstDateChange: function(e) {
    console.log("日期切换" + e.detail.value)
    this.setData({
      firstdate: e.detail.value
    })
    this.setLast()
  },
  bindFirstTimeChange: function(e) {
    this.setData({
      firsttime: e.detail.value,
    })
  },
  bindSecondDateChange: function(e) {
    console.log("日期切换" + e.detail.value)
    this.setData({
      seconddate: e.detail.value
    })
    this.setLast()
  },
  bindSecondTimeChange: function(e) {
    this.setData({
      secondtime: e.detail.value,
    })
    this.setLast()
  },
  bindThirdDateChange: function(e) {
    console.log("日期切换" + e.detail.value)
    this.setData({
      thirddate: e.detail.value
    })
    this.setLast()
  },
  bindThirdTimeChange: function(e) {
    this.setData({
      thirdtime: e.detail.value,
    })
    this.setLast()
  },
  bindFourthDateChange: function(e) {
    console.log("日期切换" + e.detail.value)
    this.setData({
      fourthdate: e.detail.value
    })
    this.setLast()
  },
  bindFourthTimeChange: function(e) {
    this.setData({
      fourthtime: e.detail.value,
    })
    this.setLast()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var newDateTime = util.formatTime(new Date())
    console.log(newDateTime)
    this.setData({
      firstdate: newDateTime.date,
      firsttime: newDateTime.time,
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