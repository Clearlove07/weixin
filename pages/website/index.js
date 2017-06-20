var collectedList = require("../../data/post-data.js");

Page({
  data: {
    collectedList: []
  },
  onLoad: function(){
    this.setData({
      collectedList: collectedList.collectedList
    });
  },
  ondetailTap: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: 'detail/detail?id=' + itemId
    })
  }
})