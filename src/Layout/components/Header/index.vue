<template>
  <div class="header">
    <div class="header_back">
      <el-page-header :icon="ArrowLeft"> </el-page-header>
    </div>
    <div class="header_input">
      <div class="mt-4">
        <el-input
          v-model="input3"
          style="max-width: 600px"
          placeholder="Please input"
          class="input-with-select"
          size="large"
        >
          <template #prepend>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
    </div>
    <div class="header_avater" v-if="false">
      <el-row class="demo-avatar demo-basic">
        <el-col :span="5">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="40" :src="circleUrl" @error="errorHandler">
                <img
                  src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                />
              </el-avatar>
            </div>
            <div v-for="size in sizeList" :key="size" class="block">
              <el-avatar :size="size" :src="circleUrl" />
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="dropdown">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <a href="https://www.baidu.com" class="toLogin" v-else>登录</a>
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import { ArrowDown } from "@element-plus/icons-vue";
const errorHandler = () => true;
</script>

<style scoped>
.el-header {
  height: 45px;
}
.header {
  display: flex;
  /* height: 40px; */
  /* background-color: #242424; */
}
.box {
  width: 100%;
  height: 100%;
}
.header_back {
  width: 70px;
  height: 25px;
  margin-top: 8px;
  padding-left: 0px;
}
.header_input {
  height: 56px;
  width: 250px;
}
.header_avater {
  /* margin-right: 100px; */
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 350px;
  display: flex;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.el-icon--right {
  margin-top: 12px;
  margin-left: 15px;
}
.toLogin {
  margin-left: 457px;
  margin-top: 10px;
  font-size: 11px;
}
</style>
