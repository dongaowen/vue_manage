<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div class="card">
            <img :src="userImg" alt="" class="img">
            <div  class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
              <p>上次登录时间：<span>2021-7-19</span></p>
              <p>上次登录地点：<span>武汉</span></p>
            </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableData">
            <el-table-column
              v-for="(val, key) in tableLabel" 
              :key="key"
              :label="val"
              :prop="key"
              >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="num" style="display: flex; flex-wrap: wrap ">
          <el-card v-for="item in countData" :key="item.name" class="num-card" :body-style="{padding: 0, display: 'flex',}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
            <div>
              <p>￥{{item.value}}</p>
              <p>{{item.name}}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px; margin-top: 20px"></el-card>
        <div style="display: flex;">
          <el-card style="height: 260px; flex-grow: 1; margin-top: 20px;margin-right: 20px"></el-card>
          <el-card style="height: 260px; flex-grow: 1; margin-top: 20px"></el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      userImg: require('../assets/zhizhu.png'),
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        }
      ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy:  '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: "本月收藏订单1",
          value: 20,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: "本月收藏订单2",
          value: 20,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: "本月收藏订单3",
          value: 20,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: "本月收藏订单4",
          value: 20,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: "本月收藏订单5",
          value: 20,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: "本月收藏订单6",
          value: 20,
          icon: 'star-on',
          color: '#ffb980'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .card {
    display: flex;
  }
  .img {
    width: 60px;
    height: 80px;
    margin-right: 20px;
  }
  .num-card {
    width: 33%;
  }
</style>