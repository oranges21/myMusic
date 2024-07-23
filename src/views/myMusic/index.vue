<template>
  <div class="mymusic">
    <div class="mymusic_img">
      <img
        class="img1"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        alt=""
      />
      <el-icon class="icon"><Mic /></el-icon>
      <span class="mylike">我喜欢的音乐</span>
      <img
        class="img2"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        alt=""
      />
      <span class="myname">栀一一一</span>
      <span class="mytime">2018-07-18创建</span>
    </div>
    <div class="list">
      <div class="span" style="font-size: 20px">歌曲列表</div>
      <el-table
        :data="tableData"
        height="250"
        :border="false"
        style="width: 880px"
      >
        >
        <el-table-column prop="ID" label="ID" width="100"> </el-table-column>
        <el-table-column prop="title" label="歌曲标题" width="250">
        </el-table-column>
        <el-table-column prop="time" label="时长"> </el-table-column>
        <el-table-column prop="singer" label="歌手"> </el-table-column>
        <el-table-column prop="album" label="专辑"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { Mic } from "@element-plus/icons-vue";
const tableData = [
  {
    ID: 1,
    title: "城市日记",
    time: "3:30",
    singer: "周笔畅",
    album: "我的世界",
  },
  {
    ID: 2,
    title: "不潮不用花钱",
    time: "4:30",
    singer: "林俊杰",
    album: "他是JJ",
  },
];
</script>

<style scoped>
.icon {
  position: relative;
  bottom: 170px;
  left: 63px;
}
.mymusic_img {
  color: red;
  /* background-color: blue; */
  width: 660px;
  height: 200px;
  margin: 0px 40px;
  position: relative;
}
.mymusic_img > .myname {
  color: black;
  position: absolute;
  top: 47px;
  left: 312px;
}
.mymusic_img > .mytime {
  color: black;
  font-size: 12px;
  /* margin: 0px 0px 0px 15px; */
  position: absolute;
  top: 50px;
  left: 390px;
}
.img1 {
  width: 200px;
  height: 200px;
}
.img2 {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 42px;
  left: 264px;
}
.mymusic_img > .mylike {
  position: relative;
  bottom: 170px;
  left: 70px;
  font-size: 20px;
  color: black;
}
.list {
  margin-top: 45px;
  /* padding-top: 100px; */
}
</style>
