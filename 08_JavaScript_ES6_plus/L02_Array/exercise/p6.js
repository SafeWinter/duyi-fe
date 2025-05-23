const students = [
  {
    id: 988985,
    name: '梁平',
    sex: '女',
    age: 15,
    address: '安徽省 淮南市',
    tel: '12957961008',
  },
  {
    id: 299422,
    name: '邱杰',
    sex: '男',
    age: 25,
    address: '辽宁省 本溪市',
    tel: '12685726676',
  },
  {
    id: 723972,
    name: '王超',
    sex: '女',
    age: 14,
    address: '新疆维吾尔自治区 阿克苏地区',
    tel: '15277794541',
  },
  {
    id: 723768,
    name: '冯秀兰',
    sex: '女',
    age: 29,
    address: '辽宁省 丹东市',
    tel: '13014888148',
  },
  {
    id: 536273,
    name: '赖军',
    sex: '男',
    age: 19,
    address: '重庆 重庆市',
    tel: '15152658611',
  },
  {
    id: 940136,
    name: '顾强',
    sex: '男',
    age: 20,
    address: '吉林省 松原市',
    tel: '18562759588',
  },
  {
    id: 489462,
    name: '戴敏',
    sex: '男',
    age: 25,
    address: '湖南省 长沙市',
    tel: '11513562318',
  },
  {
    id: 863594,
    name: '吕涛',
    sex: '女',
    age: 16,
    address: '湖北省 襄阳市',
    tel: '16246419558',
  },
  {
    id: 718313,
    name: '冯静',
    sex: '女',
    age: 28,
    address: '黑龙江省 牡丹江市',
    tel: '18243767800',
  },
  {
    id: 262068,
    name: '蔡明',
    sex: '男',
    age: 20,
    address: '黑龙江省 七台河市',
    tel: '14185862227',
  },
  {
    id: 900366,
    name: '廖磊',
    sex: '女',
    age: 23,
    address: '青海省 海南藏族自治州',
    tel: '19469661693',
  },
  {
    id: 316019,
    name: '冯洋',
    sex: '男',
    age: 16,
    address: '江西省 新余市',
    tel: '18842832768',
  },
  {
    id: 773536,
    name: '韩杰',
    sex: '男',
    age: 23,
    address: '云南省 丽江市',
    tel: '18560747335',
  },
  {
    id: 494398,
    name: '江涛',
    sex: '男',
    age: 24,
    address: '山西省 大同市',
    tel: '12774658592',
  },
  {
    id: 177459,
    name: '文艳',
    sex: '男',
    age: 27,
    address: '山东省 青岛市',
    tel: '16233511417',
  },
  {
    id: 979439,
    name: '杜秀英',
    sex: '男',
    age: 22,
    address: '甘肃省 张掖市',
    tel: '14723781356',
  },
  {
    id: 142762,
    name: '丁艳',
    sex: '男',
    age: 28,
    address: '澳门特别行政区 澳门半岛',
    tel: '13157638539',
  },
  {
    id: 157141,
    name: '邓静',
    sex: '女',
    age: 19,
    address: '海南省 三亚市',
    tel: '17658672240',
  },
  {
    id: 243063,
    name: '江刚',
    sex: '女',
    age: 15,
    address: '安徽省 六安市',
    tel: '18205383748',
  },
  {
    id: 351709,
    name: '乔刚',
    sex: '女',
    age: 12,
    address: '安徽省 蚌埠市',
    tel: '14143838021',
  },
  {
    id: 236140,
    name: '史平',
    sex: '男',
    age: 24,
    address: '广西壮族自治区 百色市',
    tel: '11895866733',
  },
  {
    id: 254260,
    name: '康娜',
    sex: '男',
    age: 29,
    address: '辽宁省 铁岭市',
    tel: '18783219853',
  },
  {
    id: 387769,
    name: '袁磊',
    sex: '男',
    age: 28,
    address: '重庆 重庆市',
    tel: '15243676922',
  },
  {
    id: 692436,
    name: '龙秀英',
    sex: '男',
    age: 18,
    address: '吉林省 延边朝鲜族自治州',
    tel: '18667285569',
  },
  {
    id: 304202,
    name: '姚静',
    sex: '男',
    age: 21,
    address: '吉林省 松原市',
    tel: '17962179634',
  },
  {
    id: 533032,
    name: '潘娜',
    sex: '男',
    age: 13,
    address: '湖北省 孝感市',
    tel: '14132684173',
  },
  {
    id: 773792,
    name: '萧磊',
    sex: '男',
    age: 29,
    address: '河南省 焦作市',
    tel: '13865617456',
  },
  {
    id: 171440,
    name: '邵勇',
    sex: '男',
    age: 16,
    address: '宁夏回族自治区 固原市',
    tel: '19454444332',
  },
  {
    id: 428587,
    name: '李芳',
    sex: '男',
    age: 29,
    address: '四川省 宜宾市',
    tel: '14751601674',
  },
  {
    id: 926156,
    name: '谭芳',
    sex: '女',
    age: 27,
    address: '湖南省 长沙市',
    tel: '18683429563',
  },
  {
    id: 171494,
    name: '夏秀英',
    sex: '男',
    age: 14,
    address: '陕西省 安康市',
    tel: '17732967642',
  },
  {
    id: 549517,
    name: '程娜',
    sex: '女',
    age: 24,
    address: '内蒙古自治区 锡林郭勒盟',
    tel: '18927839708',
  },
  {
    id: 999121,
    name: '武杰',
    sex: '女',
    age: 21,
    address: '新疆维吾尔自治区 博尔塔拉蒙古自治州',
    tel: '15349698338',
  },
  {
    id: 440785,
    name: '崔军',
    sex: '男',
    age: 26,
    address: '山西省 临汾市',
    tel: '14863312346',
  },
  {
    id: 113636,
    name: '廖勇',
    sex: '女',
    age: 19,
    address: '重庆 重庆市',
    tel: '18152536541',
  },
  {
    id: 109280,
    name: '崔强',
    sex: '女',
    age: 25,
    address: '河南省 安阳市',
    tel: '12838860122',
  },
  {
    id: 988885,
    name: '康秀英',
    sex: '女',
    age: 29,
    address: '广东省 佛山市',
    tel: '12637161150',
  },
  {
    id: 751542,
    name: '余磊',
    sex: '女',
    age: 15,
    address: '香港特别行政区 九龙',
    tel: '16716667565',
  },
  {
    id: 821693,
    name: '邵勇',
    sex: '女',
    age: 27,
    address: '内蒙古自治区 鄂尔多斯市',
    tel: '11869733772',
  },
  {
    id: 595152,
    name: '贺涛',
    sex: '女',
    age: 12,
    address: '吉林省 通化市',
    tel: '18172684836',
  },
  {
    id: 209059,
    name: '万勇',
    sex: '男',
    age: 27,
    address: '江苏省 淮安市',
    tel: '13523350881',
  },
  {
    id: 331199,
    name: '江艳',
    sex: '男',
    age: 29,
    address: '内蒙古自治区 包头市',
    tel: '14357786637',
  },
  {
    id: 597029,
    name: '廖磊',
    sex: '女',
    age: 22,
    address: '新疆维吾尔自治区 伊犁哈萨克自治州',
    tel: '14343812715',
  },
  {
    id: 243965,
    name: '马芳',
    sex: '女',
    age: 29,
    address: '湖南省 长沙市',
    tel: '12226278003',
  },
  {
    id: 796997,
    name: '郝霞',
    sex: '女',
    age: 29,
    address: '辽宁省 锦州市',
    tel: '15734778439',
  },
  {
    id: 735045,
    name: '吴娜',
    sex: '男',
    age: 18,
    address: '江西省 鹰潭市',
    tel: '12550200851',
  },
  {
    id: 858934,
    name: '石秀英',
    sex: '男',
    age: 21,
    address: '福建省 南平市',
    tel: '14296454005',
  },
  {
    id: 646003,
    name: '苏静',
    sex: '女',
    age: 17,
    address: '澳门特别行政区 澳门半岛',
    tel: '11456865751',
  },
  {
    id: 607537,
    name: '于磊',
    sex: '女',
    age: 25,
    address: '海南省 海口市',
    tel: '14742847575',
  },
  {
    id: 817410,
    name: '胡超',
    sex: '女',
    age: 19,
    address: '海外 海外',
    tel: '16875962137',
  },
  {
    id: 985064,
    name: '任杰',
    sex: '男',
    age: 17,
    address: '云南省 迪庆藏族自治州',
    tel: '17548787335',
  },
  {
    id: 644060,
    name: '汪秀英',
    sex: '男',
    age: 19,
    address: '香港特别行政区 九龙',
    tel: '10278533538',
  },
  {
    id: 755803,
    name: '徐磊',
    sex: '女',
    age: 26,
    address: '江苏省 徐州市',
    tel: '18721465794',
  },
  {
    id: 538130,
    name: '熊洋',
    sex: '男',
    age: 13,
    address: '吉林省 白城市',
    tel: '13491345641',
  },
  {
    id: 977696,
    name: '孟磊',
    sex: '男',
    age: 24,
    address: '香港特别行政区 香港岛',
    tel: '10541964547',
  },
  {
    id: 683438,
    name: '赵霞',
    sex: '男',
    age: 28,
    address: '重庆 重庆市',
    tel: '13085741830',
  },
  {
    id: 342123,
    name: '曾芳',
    sex: '女',
    age: 15,
    address: '湖南省 邵阳市',
    tel: '11645124878',
  },
  {
    id: 261733,
    name: '马芳',
    sex: '女',
    age: 22,
    address: '台湾 新北市',
    tel: '10255722846',
  },
  {
    id: 303578,
    name: '姜杰',
    sex: '女',
    age: 17,
    address: '黑龙江省 齐齐哈尔市',
    tel: '12581543256',
  },
  {
    id: 907392,
    name: '熊杰',
    sex: '男',
    age: 16,
    address: '广西壮族自治区 北海市',
    tel: '18941398494',
  },
];

// 遍历输出学生的姓名
students.forEach(s => console.log(s.name));

// 得到所有女生
const girls = students.filter(s => s.sex === '女');
console.log(girls);

// 得到所有年龄在25岁以下的女生
const girlsUnder25 = students.filter(s => 
  s.sex === '女' && s.age < 25);
console.log(girlsUnder25);

// 得到所有姓陈的学生
const studentsChen = students.filter(s => s.name.startsWith('陈'));

// 得到所有电话号码以1结尾的学生
const studentsTel1 = students.filter(s => s.tel.endsWith('1'));

// 得到所有学生姓名组成的数组
const names = students.map(s => s.name);
console.log(names);

// 得到所有学生姓名组成的字符串，以逗号分割
const namesStr = students.map(s => s.name).join(',');
console.log(namesStr);

// 把所有学生姓名以p元素包起来，形成一个html片段
const namesHtml = students.map(s => `<p>${s.name}</p>`).join('');
console.log(namesHtml);

// 得到所有女生的姓名数组
const girlsNames = students.filter(s => s.sex === '女').map(s => s.name);
console.log(girlsNames); // ['梁平', '王超', '冯秀兰', ...]

// 得到所有女生的姓名和电话号码 [ {name:'monica', tel:'18122223333'} ]
const namesAndTels = students
  .filter(s => s.sex === '女')
  .map(s => ({ name: s.name, tel: s.tel }));
console.log(namesAndTels); // [{name:'monica', tel:'18122223333'}, ...]

// 得到所有学生的年龄的总和
const totalAge = students.reduce((a, b) => a.age + b.age);
console.log(totalAge); // 1000

// 得到所有学生的平均年龄
const avgAge = students.reduce((a, b) => a.age + b.age) / students.length;
console.log(avgAge); // 20.5

// 得到一个对象： {name:['张三', '李四', ...], age: [17, 25, ...]}
const obj = students.reduce((acc, b) => {
  acc.name.push(b.name);
  acc.age.push(b.age);
  return acc;
}, { name: [], age: [] });

// 找到id为796997的学生对象
const student796997 = students.find(s => s.id === 796997);
console.log(student796997); // {id: 796997, name: '郝霞', ...}

// 是否包含年龄大于28岁的男生
const hasBoysOver28 = students.some(s => s.sex === '男' && s.age > 28);
console.log(hasBoysOver28); // true

// 是否所有的女生年龄都在28岁以内
const allGirlsUnder28 = students.filter(s => s.sex === '女')
  .every(s => s.age < 28);
console.log(allGirlsUnder28); // false