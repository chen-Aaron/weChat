App({
  onLaunch: function () {
    var user_location={
      type:true,
      success:function( res ){
        var store=require('module/store.js');
        var common=require('module/common.js');
        store.latitude=res.latitude;
        store.longitude=res.longitude;
        common.getlocation();
      }
    };
    wx.getLocation( user_location );
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})
