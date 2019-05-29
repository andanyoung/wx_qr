//index.js
//获取应用实例
const app = getApp()

var QR = require("../../utils/QRCode.js");

Page({
  data: {
    qrvalue: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad(){
   
  },
  createQr(){
    console.log(this.data.qrvalue);
    QR.api.draw(this.data.qrvalue, 'canvas',300,300);
  }
})
