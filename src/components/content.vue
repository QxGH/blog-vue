<template>
	<div id="content">
		<div class="goback clearfix">
			<el-button type="primary" class="pull-left" plain @click="$router.back(-1)">返回</el-button>
		</div>
		<h1>{{blogContent.title}}</h1>
		<div class="blog-content-info">
			<span>发表于：<i>{{date}}</i></span>
			<span>分类于：<i>{{blogContent.type}}</i></span>
			<span>标签：<i>{{blogContent.tag}}</i></span>
		</div>
		<div class="blog-content-main" v-html="blogContent.content"></div>	
	</div>
</template>

<script>
export default {
	name: 'Index',
	data () {
		return {
			blogContent: {},
			date: ""
		}
	},
	mounted() {
		this.getParams();
	},
	methods: {
		getParams() {
			// 传参 
			let routerParam = this.$route.query.data;
			this.id = routerParam;
			
			// axiox
			var self = this;  
			this.$axios({
				method:'post',
				data: {id: self.id},
				url:'/blog/getBlog/',
				headers:{
					"Conten-Type":"/blog/getBlog/"
				}
			})
			.then(function(res){
				self.blogContent = res.data.data[0];
				self.date = self.blogContent.date.match(/(\S*)T/)[1];
			})
			.catch(function(err){
				self.$alert('发生错误！', '提示', {
					confirmButtonText: '确定'
				});
			})
		}
		
	}

}
</script>

<style>
.blog-content-info{
	margin: 20px 0;
	color: #999;
	font-size: 13px;
}
.blog-content-info span{
	white-space: nowrap;
}
.blog-content-info i{
	margin-right: 20px;
}
.goback {
	line-height: 28px;
	color: #999;
	cursor: pointer;
	border-bottom: 1px solid #eee;
	padding-bottom: 5px;
	margin-bottom: 10px;
}
.goback button{
	padding: 6px 12px;
}
.blog-content-main h1,
.blog-content-main h2,
.blog-content-main h3,
.blog-content-main h4,
.blog-content-main h5,
.blog-content-main h6{
	margin-bottom: 16px;
}
</style>
