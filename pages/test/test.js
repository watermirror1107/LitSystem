// pages/test/test.js
var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'Json',
    toView: 'red',
    scrollTop: 100,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('1');
    console.log(this.route);
    console.log(getCurrentPages());
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('2')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('close')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('123')
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
  
  },
  onTabItemTap:function(item){
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
  ,componentTest:function(){
  
    //根据ID选择组件并调用组件的函数
    var x =this.selectComponent("#aa");//这个方法可以获取实例组件的所有数据除了生命周期函数
    x.fun("value");
   

  },
  onMyEvent: function (e) {
    console.log(e);
    console.log(e.detail);// 自定义组件触发事件时提供的detail对象
    
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})