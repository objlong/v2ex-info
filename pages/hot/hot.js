var app = getApp();
Page({
    data: {
        articleList: []
    },
    onLoad: function () {
        var _this = this;
        wx.request({
            url: 'https://www.v2ex.com/api/topics/hot.json',
            data: {},
            method: 'GET',
            success: function (res) {
                console.log(res)
                _this.setData({
                    articleList: res.data
                });
            },
            fail: function () {
                alert('网络连接失败');
            }
        })
    }
});
