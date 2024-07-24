<template>
  <div class="recommed">
    <div class="recommed-top">
      <div class="recommed-top-left">
        <img src="../../assets/img/1.png" alt="" />
      </div>
      <div class="recommed-top-mid">
        <div class="recommed-top-mid-title">
          <span class="goodafter">下午好，</span>
          <span class="gusslike">猜你最近喜欢听</span>
        </div>
        <div class="recommed-top-mid-contain">
          <div
            class="contain-item"
            v-for="(item, index) in 4"
            :key="index"
          ></div>
        </div>
      </div>
      <div class="recommed-top-right">333</div>
    </div>
    <div class="select-recommend">
      <span class="select-recommend-title">精选推荐</span>
      <div class="select-recommend-contain">
        <div class="contain-item" v-for="(item, index) in 6" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="recommend-music-list">
      <span class="recommend-music-list-title">推荐歌单</span>
      <div class="recommend-music-list-contain">
        <div class="contain-item" v-for="(item, index) in 6" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.recommed {
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  &-top {
    height: 182px;
    width: 100%;
    // background-color: #ff0000;
    display: flex;
    align-items: center;

    &-left {
      width: 500px;
      background-color: yellow;
      // float: left;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
      }
    }

    &-mid {
      width: 400px;
      background-color: bisque;
      height: 182px;
      margin-bottom: 26px;
      // float: left;
      // position: relative;
      // top: -26px;
      display: flex;
      flex-direction: column;
      margin: 0 10px;

      &-title {
        height: 54px;
        width: 100%;
        border-radius: 0%;
        background-color: aqua;
        .goodafter {
          position: relative;
          top: 16px;
          font-weight: bold;
          font-size: 18px;
        }
        .gusslike {
          position: relative;
          top: 16px;
          font-weight: bold;
        }
      }
      &-contain {
        height: 128px;
        width: 100%;
        border-radius: 0%;
        background-color: black;
        display: flex;
        justify-content: space-around;
        .contain-item {
          width: 82px;
          height: 100%;
          background-color: blueviolet;
        }
      }
    }

    &-right {
      flex: 1;
    }
  }
}
.select-recommend {
  height: 190px;
  width: 100%;
  // background-color: blue;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  &-title {
    // position: relative;
    // left: -801px;
    // top: 26px;
    font-size: 18px;
    font-weight: bold;
  }
  &-contain {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 180px;
    padding: 20px 0;
    .contain-item {
      height: 160px;
      width: 140px;
      background-color: aqua;
    }
  }
}
.recommend-music-list {
  height: 190px;
  width: 100%;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  &-title {
    font-size: 18px;
    font-weight: bold;
    .list-contain {
      height: 160px;
      width: 140px;
      background-color: aqua;
    }
  }
  &-contain {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 180px;
    padding: 20px 0;
    .contain-item {
      height: 160px;
      width: 140px;
      background-color: aqua;
    }
  }
}

// .span1 {
//   position: relative;
//   left: -801px;
//   top: 26px;
//   font-size: 18px;
//   font-weight: bold;
// }
// .span2 {
//   position: relative;
//   left: -5px;
//   top: 23px;
//   font-size: 18px;
//   font-weight: bold;
// }
// .first {
//   height: 182px;
//   width: 1000px;
//   background-color: #ff0000;
//   /* display: flex; */
// }
// .first > .first {
//   width: 400px;
//   background-color: yellow;
//   float: left;
// }
// .first > .second {
//   width: 400px;
//   background-color: bisque;
//   height: 182px;
//   margin-bottom: 26px;
//   float: left;
//   position: relative;
//   top: -26px;
//   display: flex;
//   flex-direction: column;
// }
// .first > .second > .top {
//   height: 54px;
//   width: 100%;
//   border-radius: 0%;
//   background-color: aqua;
// }
// .first > .second > .bottom {
//   height: 128px;
//   width: 100%;
//   border-radius: 0%;
//   background-color: black;
//   display: flex;
//   justify-content: space-around;
// }
// .first > .second > .bottom > div {
//   width: 82px;
//   height: 100%;
//   background-color: blueviolet;
// }
// .second {
//   height: 190px;
//   width: 1000px;
//   background-color: blue;
//   margin-top: 26px;
//   display: flex;
//   justify-content: space-between;
// }
// .second > div {
//   width: 137px;
//   height: 100%;
//   background-color: red;
//   border-radius: 5%;
// }
</style>
