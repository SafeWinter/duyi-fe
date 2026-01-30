export default {
  async getChannels() {
    const resp = await fetch('/x/kv-frontend/namespace/data?appKey=333.1339&nscode=10');
    const { data } = await resp.json();
    // channel_list.ai: 
    // "{\"channelId\":25,\"tid\":1011,\"route\":\"ai\",\"name\":\"人工智能\",\"tkey\":\"CommonChannel:ai\",\"url\":\"//www.bilibili.com/c/ai/\",\"icon\":\"homeicon/ai/1\",\"sub\":[{\"subChannelId\":250001,\"tid\":2096,\"route\":\"tutorial\",\"name\":\"AI学习\",\"tkey\":\"CommonChannel:aiTutorial\",\"url\":\"\"},{\"subChannelId\":250002,\"tid\":2097,\"route\":\"information\",\"name\":\"AI资讯\",\"tkey\":\"CommonChannel:aiInfo\",\"url\":\"\"},{\"subChannelId\":250003,\"tid\":2098,\"route\":\"other\",\"name\":\"AI杂谈\",\"tkey\":\"CommonChannel:aiOther\",\"url\":\"\"}],\"config\":{\"enableSub\":0}}"
    const channelData = Object.entries(data.data)
      .map(([key, val]) => {
        const label = key.split('.').pop();
        const {channelId: id, tid, name: cname} = JSON.parse(val);
        return {id, tid, label, cname};
      });
    return channelData;
  }
}