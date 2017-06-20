var collectedList = require("../../../data/post-data.js");

Page({
  data: {
    company: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var companyInfo = collectedList.collectedList[options.id];
    this.setData({
      company: companyInfo
    });
  }
})