var common=require('../../module/common.js');
Page({
    data:{
        Movie:'',
        showloading:true,
    },
  onShow: function () {
      common.showMovie(this);
  },
  onHide: function () {
  },
  globalData: {
    hasLogin: false
  }
})