var app = getApp();
Page({
  data:{
    text:"花费",
    marks:"备注",
    toast_isshow:true,
    toast_text:""
  },
  onLoad:function(){
      
  },
  toast_hidden:function(){
    this.setData({
      toast_isshow:true
    })
  },
  formSubmit:function(){
    var pay = $("#pay").val();
    console.log(pay);
    this.setData({
      toast_isshow:false,
      toast_text:"提交成功"
    })
  }
})