import Mock from "mockjs";
import * as qrCode from '@/assets/qrcode.png';

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "获取全局设置成功",
  data: {
    avatar: "http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c", // 个人空间的头像
    siteTitle: "我的个人空间", // 个人空间的标题
    github: "https://github.com/DuYi-Edu", // 空间主人的 GitHub 地址
    qq: "3263023350", // 空间主人的 QQ 号
    qqQrCode: qrCode, // "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png", // 空间主人的 QQ 二维码
    weixin: "yh777bao", // 空间主人的微信
    weixinQrCode: qrCode, // "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png", // 空间主人的微信二维码
    mail: "duyi@gmail.com", // 空间主人的邮箱
    icp: "黑ICP备17001719号", // 空间主人的备案号
    githubName: "SafeWinter", // 空间主人的 GitHub 名称
    favicon: "https://duyiedu.com/favicon.ico", // 网站的 favicon 地址
  },
});
