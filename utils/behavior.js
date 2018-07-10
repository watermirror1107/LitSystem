module.exports=Behavior({             //类似于commonJS中模板的引用，是对模板的一个拷贝，别的地方调用了behavior，不会对其他调用到behavior并对里面的数据进行改动，是不会影响到别的地方使用的，因为都是不同的拷贝，相互之间没有关系;
  behaviors:[],
  properties:{
    myBehaviorProperty:{
      type:String
    }
  },
  data:{
    myBehaviorData:'Lit Text'
  },
  attached:function(){},
  methods:{
    myBehaviorMethod: function () { 
      console.log(this.data.myBehaviorData);
    }
  }
})