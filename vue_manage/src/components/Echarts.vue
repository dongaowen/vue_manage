<template>
  <div ref="echart"></div>
</template>

<script>
import * as ecahrt from 'echarts'
export default {
  props: {
    isAxisChart: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series
        }
      }
    }
  },
  data(){
    return {
      echart: null
    }
  },
  computed: {
    options() {
      return this.isAxisChart ?  1: 2
    }
  },
  watch: {
    chartData: {
      handler: function() {
        this.initChart()
      },
      immediate: true
    }
  },
  methods: {
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.ecahrt = ecahrt.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    }
  }
}
</script>

<style>

</style>