//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
        '/img/banner1.png',
        '/img/banner2.png',
        '/img/banner3.png'
    ] ,
    category:[
      {name:'全部', id:'quanbu'},
      {name:'夏日', id:'xiari'},
      {name:'感谢', id:'ganxie'},
      {name:'生日', id:'shengri'},
      {name:'加油', id:'jiayou'},
      {name:'挚爱', id:'zhiai'},
      {name:'萌系', id:'mengxi'},
      {name:'咖啡', id:'kafei'},
    ],
    detail:
      [
        {
          id:'quanbu',
          banner:'../../img/pcd1.png',
          desc:'人鱼控  星礼卡',
          money:'￥100',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd2.png',
          desc:'拿铁  电子礼品卷一张',
          money:'￥32',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd3.png',
          desc:'百香果桃桃茶云乌龙  电子饮品劵1张',
          money:'￥38',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd4.png',
          desc:'你是我的小淘气  星礼卡',
          money:'￥50',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd5.png',
          desc:'Highfive  星礼卡',
          money:'￥199',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd6.png',
          desc:'焦糖玛奇朵  电子饮品券1张',
          money:'￥36',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd7.png',
          desc:'火龙果番石榴茶云乌龙  电子饮品券一张',
          money:'￥38',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd8.png',
          desc:'生日快乐  星礼卡',
          money:'￥100',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd9.png',
          desc:'干杯  星礼卡',
          money:'￥288',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd10.png',
          desc:'拿铁  电子饮品券5张',
          money:'￥160',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd11.png',
          desc:'THANK YOU  星礼卡',
          money:'￥100',
          icon:'../../img/preicon.png'     
        },
        {
          id:'quanbu',
          banner:'../../img/pcd12.png',
          desc:'听你哒  星礼卡',
          money:'￥199',
          icon:'../../img/preicon.png'     
        },
      ]

























  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
