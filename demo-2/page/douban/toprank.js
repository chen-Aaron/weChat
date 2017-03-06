var common=require('../../module/common.js');
Page({
    data:{
        start:-20,
        count:20,
        TopMoive:[],
        showloading:true,
        moreloading:false
    },
  onShow: function () {
    //   console.log(this.data.start);
    common.getTopMovie( this );
  },
  getMore:function(){
    this.setData({
      moreloading:true
    });
          common.getTopMovie( this );
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