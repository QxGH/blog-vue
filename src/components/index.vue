<template>
	<div id="index">
		<el-row>
			<el-card v-for="item in listData" :key="item" class="blog-list-card" @click.native='sendParam(item.id)'>
				<h3 class="blog-list-tit">{{item.title}}</h3>
				<ul class="blog-list-info clearfix">
					<li>
						<i class="fa fa-calendar-o" aria-hidden="true"></i>
						<span>{{item.date.match(/(\S*)T/)[1]}}</span>
					</li>
					<li>
						<i class="fa fa-folder-o" aria-hidden="true"></i>
						<span>{{item.type}}</span>
					</li>
					<li>
						<i class="fa fa-tag" aria-hidden="true"></i>
						<span>{{item.tag}}</span>
					</li>
				</ul>
			</el-card>
		</el-row>
		<!-- 分页 -->
		<el-pagination
			class="text-right"
			@current-change = currentChange
			background
			layout="prev, pager, next"
			:pager-count="5"
			:total= pageData.total>
		</el-pagination>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data () {
		return {
			listData: [],
			pageData: {
				current: 1,
				total: 20
			}
		}
	},
	mounted() {
		this.get();
	},
	methods: {
		get(){
			var self = this;  
			this.$axios({
				method:'post',
				data: self.pageData,
				url:'http://localhost:3000/blog/blogList/',
				headers:{
					"Conten-Type":"http://localhost:3000/blog/blogList/"
				}
			})
			.then(function(res){
				self.listData = res.data[0].sort(self.inverted);
				self.pageData.total = res.data[1][0].count;
			})
			.catch(function(err){
				self.$alert('发生错误！', '提示', {
					confirmButtonText: '确定'
				});
			})
		},
		inverted(x,y){
			return y.id-x.id
		},
		sendParam(id) {
			this.$router.push({
				path:"/content",
				name: 'Content',
				query:{
					data: id
				}
			});
		},
		currentChange(val){
			this.pageData.current = val;
			this.get();
		}
	}
}
</script>

<style>
.blog-list-card{
	margin-bottom: 20px;
	cursor: pointer;
}
.blog-list-tit{
	max-width: 100%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	font-size: 24px;
}
@media (max-width: 767px){
	.blog-list-tit {
		font-size: 22px;
	}
}
.blog-list-info{
	margin-top: 40px;
}
.blog-list-info li{
	float: left;
	margin-right: 40px;
	color: #999;
}
@media screen and (max-width: 800px){
	.blog-list-info li{
		margin-right: 20px;
	}
	.blog-list-info li:nth-child(3){
		display: none;
	}
}
</style>
