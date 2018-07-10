// pages/component/component1.js
var myBehavior = require('./../../utils/behavior.js')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [myBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持，开启多个槽口
  },
  properties: {          //即标签属性
    innerText: {
      type: String,
      value: '组件1'
      }
  },
    created:function(){
      console.log('created');//在组件实例进入页面节点树时执行，注意此时不能调用 setData
  },
    attached:function(){
        console.log('attached');
  },
    moved:function(){
      console.log('moved');
    },
    ready:function(){
        console.log('ready');
        this.myBehaviorMethod();//调用组件共享属性behavior里面的一个方法；
        this.data.myBehaviorData='123F';//这里对自定义组件之间的共享属性进行修改是不会影响在其他地方引用behavior的，因为这是不同的拷贝：
        console.log(this.data.innerText);//接受从调用改组件的地方传来的参数
        console.log(this.data.myBehaviorData);
    },
    detached:function(){
        console.log('delete');
    },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fun(v) {
      console.log(v)
    },
    myevent:function(){
      console.log('myEvent');
      var myEventDetail = {note:'通知'} // detail对象，提供给事件监听函数
      var myEventOption = { bubbles: false, composedF: false, capturePhase:false} // 触发事件的选项 
      //  bubbles 事件是否冒泡
      //  composed 事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
      //  capturePhase 事件是否拥有捕获阶段
      this.triggerEvent('myevent', myEventDetail, myEventOption)//需要使用 triggerEvent 方法，指定事件名、detail对象和事件选项：
    }
  }
})
