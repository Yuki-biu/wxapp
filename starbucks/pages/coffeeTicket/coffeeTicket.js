// pages/coffeeTicket/coffeeTicket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalNum: 0,
    totalPrice: 0,
    coffeeList: [
      {
        name: '阿馥奇朵™',
        picUrl: 'https://www.starbucks.com.cn/images/products/affogato.jpg',
        price: 38.00,
        num: 0
      }, {
        name: '麦芽雪冷萃™',
        picUrl: 'https://www.starbucks.com.cn/images/products/cold-brew-malt.jpg',
        price: 38.00,
        num: 0
      }, {
        name: '美式咖啡（热/冷）',
        picUrl: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg',
        price: 38.00,
        num: 0
      }, {
        name: '卡布奇诺（热/冷）',
        picUrl: 'https://www.starbucks.com.cn/images/products/cappuccino.jpg',
        price: 38.00,
        num: 0
      }, {
        name: '抹茶星冰乐',
        picUrl: 'https://www.starbucks.com.cn/images/products/green-tea-frappuccino.jpg',
        price: 38.00,
        num: 0
      }, {
        name: '摩卡星冰乐',
        picUrl: 'https://www.starbucks.com.cn/images/products/mocha-frappuccino.jpg',
        price: 38.00,
        num: 0
      }
    ]
  },

  sum: function () {
    let carts = this.data.coffeeList
    let total = 0
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].num) {
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      coffeeList: carts,
      totalPrice: total.toFixed(2)
    })
  },

  sumNum: function () {
    let carts = this.data.coffeeList
    let total = 0
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].num) {
        total += carts[i].num
      }
    }
    this.setData({
      totalNum: total
    })
  },

  // 点击 - 按钮
  downCount: function (e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.coffeeList
    let num = carts[index].num

    num = num - 1
    carts[index].num = num
    this.setData({
      coffeeList: carts
    })
    this.sum()
    this.sumNum()
  },

  // 点击 + 按钮
  addCount: function (e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.coffeeList
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setData({
      coffeeList: carts
    })
    this.sum()
    this.sumNum()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.sum()
    this.sumNum()
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