<template>
  <div class="isHome">
    <div id="waper">
      <canvas id="d3"></canvas>
      <canvas id="d4"></canvas>
      <div class="toText" id="toText">
        <div class="isSpan2">{{ showNumber }}</div>
        <p class="point"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      w: null,
      h: null,
      showNumber: "",
      jindu: 0,
      progress: 100, // 设置最大值
      yuanxin: 15,
      lineWidth: 10,
    };
  },
  methods: {
    toInit() {
      let banjing = this.w / 2 - 40; // 设置圆弧半径
      this.makeBase(banjing);

      let isWaper = document.getElementById("toText"); // 设置进度字体的半径
      isWaper.style.top = this.h - this.yuanxin + "px";
      isWaper.style.left = this.w / 2 + "px";
      isWaper.style.width = this.w / 2 + "px";

      let canvas3 = document.getElementById("d3");
      canvas3.setAttribute("width", this.w + "px");
      canvas3.setAttribute("height", this.h + "px");
      let ctx3 = canvas3.getContext("2d");
      ctx3.lineWidth = this.lineWidth;
      ctx3.lineCap = "round";

      let inter = setInterval(() => {
        if (this.jindu >= this.progress) {
          clearInterval(inter);
          this.jindu = this.progress;
          return;
        }
        this.jindu += 1;
        this.useline(ctx3, banjing);
        this.jingxiang(ctx3, banjing);
        this.showNumber = this.jindu + " %";
        isWaper.style.transform = "rotate(" + (1.8 * this.jindu + 180) + "deg)";
        isWaper.style.display = "block";
      }, 50);
    },
    useline(ctx, banjing) {
      // 沿着线渐变
      ctx.beginPath();
      var endAngle = (this.jindu / 100 + 1) * Math.PI;
      var startAngle = endAngle - 0.08;
      ctx.arc(this.w / 2, this.h - this.yuanxin, banjing, startAngle, endAngle);
      ctx.strokeStyle =
        "rgb(255," +
        (200 - this.jindu) +
        "," +
        (110 - this.jindu * 2.55).toFixed(0) +
        ")";
      ctx.stroke();
    },
    jingxiang(ctx, banjing) {
      // 横向渐变
      ctx.beginPath();
      var endAngle = (this.jindu / 100 + 1) * Math.PI;
      var startAngle = endAngle - 0.1;

      ctx.arc(
        this.w / 2,
        this.h - this.yuanxin,
        banjing - 20,
        startAngle,
        endAngle
      );
      let lg = ctx.createLinearGradient(0, 0, this.w, 0);
      lg.addColorStop(0, "rgba(255, 255, 255,0.1)");
      lg.addColorStop(1, "rgba(240, 91, 22,1)");
      ctx.strokeStyle = lg;
      ctx.stroke();
    },
    makeBase(banjing) {
      // 画底色半圆
      let canvas = document.getElementById("d4");
      canvas.setAttribute("width", this.w + "px");
      canvas.setAttribute("height", this.h + "px");
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = this.lineWidth;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgb(235, 230, 230)";
      ctx.arc(
        this.w / 2,
        this.h - this.yuanxin,
        banjing,
        Math.PI,
        Math.PI * 2,
        false
      );
      ctx.stroke();
    },
  },
  mounted() {
    // 查询canvas标签尺寸设置进度条尺寸
    let waper = document.getElementById("waper");
    let waperWidth = waper.offsetWidth;
    let waperHeight = waperWidth / 2;
    waper.setAttribute("width", waperWidth + "px");
    waper.setAttribute("height", waperHeight + "px");

    this.w = waperWidth;
    this.h = waperHeight;
    this.toInit();
  },
};
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  background: none;
}

#d3 {
  z-index: 2;
  background: none;
}

#d4 {
  z-index: 1;
}

#waper {
  position: relative;
}

.toText {
  position: absolute;
  z-index: 4;
  height: 0px;
  transform-origin: left center;
  text-align: right;
  display: none;
}
.isSpan2 {
  position: absolute;
  transform: rotate(90deg);
  transform-origin: center center;
  color: rgb(230, 59, 59);
  font-size: 12px;
  text-align: left;
  width: 50px;
  right: 0px;
}

.point {
  position: absolute;
  background: rgb(95, 21, 233);
  width: 6px;
  height: 6px;
  border-radius: 50%;

  bottom: -11px;
  right: 35.5px;
}
</style>
