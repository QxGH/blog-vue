<template>
	<el-aside width="300px" class="left-aside text-center">
		<div class="aside-normal">
			<div class="aside-header ridius-50">
				<span class="ridius-50">
					<img class="ridius-50" src="http://qny.qxtodo.com/header.jpg">
				</span>
			</div>
			<div class="aside-name">
				墨雨流旗
			</div>
			<div class="aside-introduce">
				to do something
			</div>
			<div class="aside-nav">
				<span class="nav_index" index="/index" @click="indexRoute">首&nbsp;&nbsp;&nbsp;&nbsp;页</span>
				<span class="nav_type" index="/type" @click="typeRoute">分&nbsp;&nbsp;&nbsp;&nbsp;类</span>
				<span class="nav_tag" index="/tag" @click="tagRoute">标&nbsp;&nbsp;&nbsp;&nbsp;签</span>
				<span class="nav_about" index="/about" @click="aboutRoute">关&nbsp;&nbsp;&nbsp;&nbsp;于</span>
			</div>
			<div class="aside-social">
				<a href="mailto:qinxu404@163.com" target="_blank">
					<i class="fa fa-envelope-o" aria-hidden="true"></i>
				</a>
				<a href="https://weibo.com/5586987236" target="_blank">
					<i class="fa fa-weibo" aria-hidden="true"></i>
				</a>
				<a href="http://qny.qxtodo.com/weixin-qecode.jpg" target="_blank">
					<i class="fa fa-weixin" aria-hidden="true"></i>
				</a>
				<a href="https://github.com/QxGH" target="_blank">
					<i class="fa fa-github" aria-hidden="true"></i>
				</a>
				<a href="tencent://message/?uin=691564030" target="_blank">
					<i class="fa fa-qq" aria-hidden="true"></i>
				</a>
			</div>
		</div>
		<!--  响应  -->
		<div class="aside-media">
			<div class="aside-media-simple">
				<p>QxTodo</p>
				<span>to do something</span>
				<button class="aside-media-btn"  @click="toggle = !toggle">
					<i class="fa fa-bars" aria-hidden="true"></i>
				</button>
			</div>
			<el-collapse-transition>
				<ul class="aside-media-toggle" v-show="toggle">
					<li class="nav_index" index="/index" @click="indexRoute">
						<i class="fa fa-fw fa-home"></i>
						<span>首 页</span>
						<i class="dot"></i>
					</li>
					<li class="nav_type" index="/type" @click="typeRoute">
						<i class="fa fa-fw fa-th"></i>
						<span>分 类</span>
						<i class="dot"></i>
					</li>
					<li class="nav_tag" index="/tag" @click="tagRoute">
						<i class="fa fa-fw fa-tags"></i>
						<span>标 签</span>
						<i class="dot"></i>
					</li>
					<li class="nav_about" index="/about" @click="aboutRoute">
						<i class="fa fa-fw fa-user"></i>
						<span>关 于</span>
						<i class="dot"></i>
					</li>
				</ul>
			</el-collapse-transition>
		</div>
	</el-aside>
</template>

<script>
	
/** jq **/
$(function(){
	$(".aside-media-toggle li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	$(".aside-nav span").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
});

/** vue **/
export default {
	name: 'AppNav',
	data() {
		return {
			toggle: false
		}
    },
	mounted(){
		 this.handleScroll();
		 this.nav();
	},
	methods: {
		indexRoute() {
			this.closeToggle();
			this.$router.push({path: '/'});
		},
		typeRoute() {
			this.closeToggle();
			this.$router.push({path: '/type'});
		},
		tagRoute() {
			this.closeToggle();
			this.$router.push({path: '/tag'});
		},
		aboutRoute() {
			this.closeToggle();
			this.$router.push({path: '/about'});
		},
		closeToggle(){
			this.toggle = false;
		},
		nav(){
			var _self = this;
			if(_self.$route.path == "/"){
				$(".nav_index").addClass("active");
			} else if(_self.$route.path == "/type"){
				$(".nav_type").addClass("active");
			}else if(_self.$route.path == "/tag"){
				$(".nav_tag").addClass("active");
			} else {
				$(".nav_about").addClass("active");
			}
		},
		handleScroll(){
			var _self = this;
			// 滚动条
			var Scrollbar = window.Scrollbar;
			var options = {
				damping: 0.1,
				thumbMinSize: 20,
				alwaysShowTracks: true
			};
			Scrollbar.init(document.querySelector('.scrollBar'), options);
			// 滚动事件
			var scrollbar = Scrollbar.get(document.querySelector('.scrollBar'));
			scrollbar.addListener(function(){
				_self.toggle = false;
			});
		}
    },
	watch:{
		$route( to , from ){
			this.toggle = false;
		}
	}
}
</script>
<style>

</style>