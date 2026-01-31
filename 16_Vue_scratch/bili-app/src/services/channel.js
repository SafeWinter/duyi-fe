const randomCount = (start = 5, end = 1000) => 
  Math.floor(Math.random() * (end - start) + start);

// demo K-V pair within data:
// K: channel_list.ai
// V: "{\"channelId\":25,\"tid\":1011,\"route\":\"ai\",\"name\":\"人工智能\",\"tkey\":\"CommonChannel:ai\",\"url\":\"//www.bilibili.com/c/ai/\",\"icon\":\"homeicon/ai/1\",\"sub\":[{\"subChannelId\":250001,\"tid\":2096,\"route\":\"tutorial\",\"name\":\"AI学习\",\"tkey\":\"CommonChannel:aiTutorial\",\"url\":\"\"},{\"subChannelId\":250002,\"tid\":2097,\"route\":\"information\",\"name\":\"AI资讯\",\"tkey\":\"CommonChannel:aiInfo\",\"url\":\"\"},{\"subChannelId\":250003,\"tid\":2098,\"route\":\"other\",\"name\":\"AI杂谈\",\"tkey\":\"CommonChannel:aiOther\",\"url\":\"\"}],\"config\":{\"enableSub\":0}}"
const extractData = ({data}, size = 25, rand = randomCount) => {
  const channels = Object.entries(data)
    .map(([_, val], id) => {
      if(id === 0) { // 去掉第一项【人工智能】
        return null;
      }
      const {name: cname} = JSON.parse(val);
      if(id === 0 || !cname || cname === '全部') {
        // 去掉名称为【全部】或为空的所有元素项
        return null;
      }
      return {id, cname, count: rand()};
    })
    .filter(e => e !== null);
    
  // add 1st el representing all
  channels.unshift({
    id: 1, 
    cname: '全部',
    count: channels.reduce((sum, e) => sum + e.count, 0), 
  });
  return channels.slice(0, size);
};

export default {
  async getChannels() {
    const resp = await fetch('/x/kv-frontend/namespace/data?appKey=333.1339&nscode=10');
    const { data } = await resp.json();
    return extractData(data);
  }
}