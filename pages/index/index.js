//index.js
//获取应用实例
const app = getApp()
var common=require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info_url:"",
    uid:"",
    list_info:[
      {
        list_id:0,
        list_type:0,
        uname:"",
        submit_time:"",
        msg_num:0
      }
    ],
    assert:true,
    list_name:["产犊记录","配种记录","妊娠诊断记录","产奶记录","生长发育记录","DHI取样记录","谱系档案"]
  },
  bindButtonTap:function(){
    wx.switchTab({
      url: '../sheet/sheet',
    })
  },
  naviToInfo:function(e){
    var list_id = e.currentTarget.dataset['id']
    var list_type = e.currentTarget.dataset['type']
    console.log('../list_info/list_info?list_id=' + list_id + '&list_type=' + list_type)
    wx.navigateTo({
      url: '../list_info/list_info?list_id='+list_id+'&list_type='+list_type,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      uid:app.globalData.session
    })
    // this.setData({
    //   list_info:[
    //     {
    //       list_id:0,
    //       list_type:0,
    //       uname:'老王',
    //       submit_time:"12:00",
    //       msg_num:2,
    //     },
    //     {
    //       list_id: 1,
    //       list_type: 2,
    //       uname: '老张',
    //       submit_time: "12:12",
    //       msg_num: 1,
    //     },
    //   ]
    // })
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
    console.log(this.data.list_info)
    wx.request({
      url: 'getlist_info',
      data:{
        uid:this.data.uid
      },
      success:function(res){
        console.log(res)
        if(res.status=='0'){
          this.setData({
            list_info:res.list_info
          })
        }else{
          this.setData({
            assert:false
          })
        }
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