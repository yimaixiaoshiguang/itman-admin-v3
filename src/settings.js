export const defaultSettings = {

	title: '美物纪新零售平台',

	logo: import.meta.globEager('./assets/icon_Logo@2x.png'),

	/**
	 * 布局
	 * value:['default','header','threeColumn','dock']
	 * default:默认（左侧所有菜单）
	 * header:通栏（头部一级菜单，左侧二级菜单）
	 * threeColumn：三栏（分3栏，1栏一级菜单，2栏二级菜单，3栏内容）
	 * dock：功能坞（头部右侧一级菜单，鼠标进入二级菜单）
	 */
	layout: 'default',

	/**
	 * 设置左侧栏的主题
	 * 默认值：dark
	 * value：[dark | light]
	 */
	siderTheme: 'dark',


	/**
	 * 顶部导航栏主题
	 * 默认值为：light
	 * value：[ dark | light]
	 */
	headerTheme: 'light',


	/**
	 * 顶部导航栏是否置顶
	 * 默认值为：true
	 * value：[false | true]
	 * 前提：layout = default 才可以启动这个属性
	 */
	headerStick: false,

	/**
	 * @type {boolean} true | false
	 * @description Whether show the logo in sidebar
	 */
	sidebarLogo: true,

	/**
	   * @type {boolean} true | false
	   * @description Whether need tagsView
	   */
	tagsView: true,

	/**
	 * @position {string} sidebar | navbar
	 * @配置hamburger放在哪个位置
	 */
	hamburgerPosition: 'navbar'
}
