<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="handleSelect"
      @close="handleClose"
      router="true"
      :default-active="active"
    >
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
</template>

<script setup>
import { ref } from "vue";
import {
  Menu as IconMenu,
  Star,
  Download,
  Service,
  Clock,
  UploadFilled,
  Mic,
  Avatar,
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

<style scoped></style>
