<template>
  <div class="mymusic_img">
    <img
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      alt=""
    />
    <el-icon class="icon"><Mic /></el-icon>
    <span class="mylike">我喜欢的音乐</span>
  </div>
</template>

<script setup>
import { Mic } from "@element-plus/icons-vue";
</script>

<style scoped>
.icon {
  position: relative;
  bottom: 170px;
  left: 63px;
}
.mymusic_img {
  color: red;
  background-color: blue;
  width: 660px;
  height: 200px;
  margin: 0px 40px;
}
img {
  width: 200px;
  height: 200px;
}
.mylike {
  position: relative;
  bottom: 170px;
  left: 70px;
  font-size: 20px;
  color: black;
}
</style>
