const randomCount = (start = 5, end = 1000) => 
  Math.floor(Math.random() * (end - start) + start);

export default {
  async getChannels() {
    const resp = await fetch('/x/kv-frontend/namespace/data?appKey=333.1339&nscode=10');
    const { data } = await resp.json();
    // channel_list.ai: 
    // "{\"channelId\":25,\"tid\":1011,\"route\":\"ai\",\"name\":\"人工智能\",\"tkey\":\"CommonChannel:ai\",\"url\":\"//www.bilibili.com/c/ai/\",\"icon\":\"homeicon/ai/1\",\"sub\":[{\"subChannelId\":250001,\"tid\":2096,\"route\":\"tutorial\",\"name\":\"AI学习\",\"tkey\":\"CommonChannel:aiTutorial\",\"url\":\"\"},{\"subChannelId\":250002,\"tid\":2097,\"route\":\"information\",\"name\":\"AI资讯\",\"tkey\":\"CommonChannel:aiInfo\",\"url\":\"\"},{\"subChannelId\":250003,\"tid\":2098,\"route\":\"other\",\"name\":\"AI杂谈\",\"tkey\":\"CommonChannel:aiOther\",\"url\":\"\"}],\"config\":{\"enableSub\":0}}"
    const channelData = Object.entries(data.data)
      .map(([key, val], id) => {
        const label = key.split('.').pop();
        const {name: cname} = JSON.parse(val);
        if(id === 0 || !cname || cname.length === 0 || cname === '全部') {
          // 去掉第一项【人工智能】、名称为【全部】或为空的所有元素项
          return null;
        }
        return {id, label, cname, count: randomCount()};
      })
      .filter(e => e !== null);
    const count = channelData.reduce((acc, {count}) => acc + count, 0);
    channelData.unshift({
      id: 1, 
      cname: '全部', 
      count
    })
    return channelData;
  }
}