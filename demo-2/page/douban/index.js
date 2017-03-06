var common=require('../../module/common.js');
Page({
    data:{
        myweb:'myweb',
        onlineMovie:null,
        showloading:true,
    },
  onShow: function () {
    common.getOnlineMovie( this );
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  },
  GotoMovie:function( event ){
    common.GotoMovie(event);
  },
})