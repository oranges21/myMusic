<template>
  <div class="aside">
    <div class="second">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @select="handleSelect"
        @close="handleClose"
        router="true"
        :default-active="active"
        style="background-color: #f0f3f6"
      >
        <el-menu-item
          index="recommend"
          style="
            border-bottom: 2px solid #e4e8ec;
            padding-bottom: 25px;
            padding-top: 25px;
          "
        >
          <el-icon><House /></el-icon>
          <template #title>我的推荐</template>
        </el-menu-item>
        <el-menu-item index="myMusic">
          <el-icon><Avatar /></el-icon>
          <template #title>我喜欢的音乐</template>
        </el-menu-item>
        <el-menu-item index="Lately">
          <el-icon><Clock /></el-icon>
          <template #title>最近播放</template>
        </el-menu-item>
        <el-menu-item index="Podcast">
          <el-icon><Service /></el-icon>
          <template #title>我的播客</template>
        </el-menu-item>
        <el-menu-item index="Collection">
          <el-icon><Star /></el-icon>
          <template #title>我的收藏</template>
        </el-menu-item>
        <el-menu-item index="Download">
          <el-icon><Download /></el-icon>
          <template #title>下载管理</template>
        </el-menu-item>
        <el-menu-item index="localMusic">
          <el-icon><Mic /></el-icon>
          <template #title>本地音乐</template>
        </el-menu-item>
        <el-menu-item index="cloudDrive">
          <el-icon><UploadFilled /></el-icon>
          <template #title>我的音乐云盘</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Star,
  Download,
  Service,
  Clock,
  UploadFilled,
  Mic,
  Avatar,
  House,
} from "@element-plus/icons-vue";

const active = ref("/");
const isCollapse = ref(false);
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.aside {
  height: 100%;
  background-color: #f0f3f6;
}
.aside > .first {
  border-bottom: 2px solid #e4e8ec;
  padding-bottom: 18px;
  padding-top: 8px;
}
</style>
