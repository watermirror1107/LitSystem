// pages/component/component2.js
var myBehavior = require('./../../utils/behavior.js')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [myBehavior],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  ready:function(){
    setTimeout(()=>{
      console.log(this.data.myBehaviorData);
    },2000)
  },
  methods: {

  }
})
