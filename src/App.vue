<template>
	<div id="app">
		<el-container>
			<app-nav></app-nav>
			<el-container id="container_main">
				<div class="scrollBar">
					<el-main>
							<router-view/>
					</el-main>
				</div>
				<el-footer>
					<div class="text-center c-999 fs-16">qinxus.com</div>
					<a id="record" href="http://www.miitbeian.gov.cn">陇ICP备17002428号</a>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script>

export default {
    name: 'App',
	data() {
		return {}
    }
}
<script>

<style>

</style>
