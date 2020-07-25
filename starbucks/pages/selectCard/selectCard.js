// pages/selectCard/selectCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Cards: [
      {
        id: 1,
        theme: '送你一夏',
        picUrls:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193'
        ]
      }, {
        id: 2,
        theme: '为你点赞',
        picUrls:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg'
        ]
      }, {
        id: 3,
        theme: '贴心好友',
        picUrls:[
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
        ]
      }, {
        id: 4,
        theme: '来杯咖啡',
        picUrls:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg'
        ]
      }, {
        id: 5,
        theme: '送你一夏',
        picUrls:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193'
        ]
      }, {
        id: 6,
        theme: '为你点赞',
        picUrls:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg'
        ]
      }, {
        id: 7,
        theme: '贴心好友',
        picUrls:[
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
        ]
      }, {
        id: 8,
        theme: '来杯咖啡',
        picUrls:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660742927&di=8e44c7ccab9fb90fca4d98828ce3ec42&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3272121264%2C159969690%26fm%3D193',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660629334&di=cb99eded0ad0547743883f2e66bf54a5&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F34%2F46%2F6IlN3nS20U.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595660663285&di=219f15c8d40523593e594425aa598154&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F4%2F218%2F667.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076980524,4222883199&fm=26&gp=0.jpg'
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})