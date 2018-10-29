<template>
	<div class="block">
		<span class="demonstration">Rate 评分</span>
		<el-rate v-model="valueRate"></el-rate>
    <!-- 来必力City版安装代码 -->
    <div id="lv-container" data-id="city" data-uid="MTAyMC8zNDY5MS8xMTIyOA=="></div>
    <!-- City版安装代码已完成 -->
	</div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
        valueRate: null
    }
  },
  mounted() {
		this.lbl(document, 'script');
	},
	methods: {
		lbl(d, s){
      var j, e = d.getElementsByTagName(s)[0];
      if (typeof LivereTower === 'function') { return; }
      j = d.createElement(s);
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      j.async = true;
      e.parentNode.insertBefore(j, e);
		}
  }
}
</script>