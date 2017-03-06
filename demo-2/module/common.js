var baidu="7VENmCeC4aaAfx3CKbSjT1K3oRucOgDK";
var location=require('store.js');
module.exports={
  // 获取当地城市
   getlocation:function(){
        // var aData={
        //   url:"http://api.map.baidu.com/geocoder/v2/?output=json&ak=7VENmCeC4aaAfx3CKbSjT1K3oRucOgDK&location="+location.latitude+","+location.longitude,
        //   success:function( aRes ){
        //     // console.log(aRes.result.addressComponent.city);
        //     location.city=aRes.data.result.addressComponent.city;
        //     location.city=location.city.replace("市",'');
        //   }
        // };
        location.city='杭州';
        // wx.request( aData ); 
   } ,
   getOnlineMovie:function(that){
     var aData={
         header: {
            'Content-Type': 'text/html'
        },
       url:"https://dev1.321zou.com/v2/movie/in_theaters?city="+location.city,
       success:function( aRes ){
         location.onlineMovie=aRes.data.subjects;
         
         that.setData(
           {
             onlineMovie:location.onlineMovie,
             showloading:false
           });
       },
       fail:function( e ){
         console.log( e );
       }
     };
    //  console.log(  aData );
     wx.request( aData ,'get');
   },
  getTopMovie:function(that){
    that.data.start=that.data.start+20;
     var aData={
         header: {
            'Content-Type': 'text/html'
        },
        data:{
          start:that.data.start,
          count:that.data.count
        },
       url:"https://dev1.321zou.com/v2/movie/top250",
       success:function( aRes ){
         location.TopMovie=location.TopMovie.concat(aRes.data.subjects);
         console.log( location.TopMovie );
         that.setData(
           {
             TopMovie:location.TopMovie,
             showloading:false,
             moreloading:false
           });
       },
       fail:function( e ){
         console.log( e );
       }
     };
     wx.request( aData ,'get');
   },
   GotoMovie:function( event ){
     location.MovieId=event.currentTarget.dataset.id;
     wx.navigateTo({
       url: 'movie',
       success: function(res){
         // success
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
   },
  showMovie:function(that){ 
     var aData={
         header: {
            'Content-Type': 'text/html'
        },
       url:"https://dev1.321zou.com/v2/movie/subject/"+location.MovieId,
       success:function( aRes ){
         that.setData(
           {
             Movie:aRes.data,
             showloading:false,
           });
       },
       fail:function( e ){
         console.log( e );
       }
     };
     wx.request( aData ,'get');
   },
};