// import Vue from 'vue'
// import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/about'
import Content from '@/components/content'
import Type from '@/components/type'
import Tag from '@/components/tag'

// Vue.use(Router)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/content',
			name: 'Content',
			component: Content
		},
		{
			path: '/type',
			name: 'Type',
			component: Type
		},
		{
			path: '/tag',
			name: 'Tag',
			component: Tag
		}
  ]
})


