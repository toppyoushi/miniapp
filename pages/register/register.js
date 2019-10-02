// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['员工','管理员'],
    index:0,
    tel:""
  },
  bindTelChange:function(e){
    this.setData({
      tel:e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindGetVcode: function () {
    if (this.data.tel == "") {
      wx.showModal({
        title: '获取验证码失败',
        content: '请先输入手机号',
        showCancel: false,
        confirmText: '确定',
        complete: function (res) {
        },
      })
    } else {
      wx.request({
        url: 'getvcode',
        data: {
          tel: this.data.tel
        },
        success: function () {
          wx.showToast({
            title: '验证码已发送至手机',
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
  userRegister:function(e){
    console.log(e.detail.value)
    console.log(this.data.array[this.data.index])

    // wx.request({
    //   url: 'register',
    //   data:{
    //     uname:e.detail.value.uname,
    //     pwd:e.detail.value.pwd,
    //     fname:e.detail.value.fname,
    //     degree:this.data.array[this.data.index],
    //     tel:e.detail.value.tel,
    //     vcode:e.detail.value.vcode
    //   },
    //   success:function(res){
        wx.navigateTo({
          url: './reg_success',
        })
  //     }
  //   })
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