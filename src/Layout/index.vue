<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <el-container>
          <el-header><Header></Header></el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import Aside from "./components/Aside/index.vue";
import Header from "./components/Header/index.vue";
</script>

<style scoped>
.app_layout {
  height: 100%;
}
</style>
