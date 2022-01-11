import sysBaseRouter from './modules/basePage.js'  //后台管理系统的基本页面：用户管理，角色管理，菜单管理
// import selfManagerRouter from './modules/selfManager.js'  //自营管理

export const constantRoutes = [
	{
		path: '/',
		name: 'login',
		component: () => import('views/login.vue'),
	},
	{
		path: '/dashboard',
		redirect: '/dashboard/index',
		component: () => import('views/layout/index.vue'),
		meta: {
			title: '首页',
			icon: 'shouye'
		},
		children: [
			{
				path: '/dashboard/index',
				name: 'dashboardIndex',
				meta: {
					title: '首页',
					icon: 'shouye',
					affix: true
				},
				component: () => import('views/dashboard/index.vue'),
			}
		]
	},
	{
		path: '/404',
		component: () => import('views/layout/index.vue'),
		hidden: true,
		children: [
			{
				path: '/error404',
				name: '404',
				meta: {
					title: '404',
				},
				component: () => import('views/error/404.vue'),
				hidden: true
			}
		]
	},
	// {
	// 	path: '/personal',
	// 	component: () => import('views/layout/index'),
	// 	meta: {
	// 		show:false
	// 	},
	// 	children: [
	// 		{
	// 			path: '/personal/info',
	// 			name: 'personalInfo',
	// 			meta: {
	// 				title: '个人信息',
	// 			},
	// 			component: () => import('views/personal'),
	// 		}
	// 	]
	// },

	{
		path: '/setting',
		name: 'setting',
		meta: {
			title: '系统设置',
			icon: 'yonghu'
		},
		redirect: '/setting/index',
		component: () => import('views/layout/index.vue'),
		children: [
			{
				path: '/setting/index',
				name: 'settingIndex',
				meta: {
					title: '设置',
				},
				component: () => import('views/setting/index.vue'),
			}
		]
	},

	sysBaseRouter,
]


export const asyncRoutes = [

	// selfManagerRouter
]
