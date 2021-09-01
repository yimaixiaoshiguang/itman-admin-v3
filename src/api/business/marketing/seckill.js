import fetch from '@/axios/fetch'

export function seckillConfigList(params) {//秒杀配置列表
	return fetch({
	    url:'/seckills',
		method: 'get',
		params
	});
}

export function seckillConfigAll() {//所有开启的秒杀配置列表
	return fetch({
	    url:'/seckills/all',
		method: 'get',
	});
}

export function configStatusChange(data) {//秒杀配置状态修改
	return fetch({
	    url:'/seckills/update_status',
		method: 'put',
		data
	});
}

export function seckillConfigEdit(data) {//秒杀配置修改
	return fetch({
	    url:'/seckills',
		method: 'put',
		data
	});
}

export function seckillConfigAdd(data) {//秒杀配置新增
	return fetch({
	    url:'/seckills',
		method: 'post',
		data
	});
}

export function seckillConfigDelect(id) {//秒杀配置删除
	return fetch({
	    url:'/seckills/'+id,
		method: 'delete',
	});
}

export function seckillProductList(params) {//秒杀商品列表
	return fetch({
	    url:'/seckillProducts',
		method: 'get',
		params
	});
}

export function seckillProductAdd(data) {//新增秒杀商品
	return fetch({
	    url:'/seckillProducts',
		method: 'post',
		data
	});
}

export function seckillProductEdit(data) {//修改秒杀商品
	return fetch({
	    url:'/seckillProducts',
		method: 'put',
		data
	});
}

export function seckillProductDelect(id) {//删除秒杀商品
	return fetch({
	    url:'/seckillProducts/'+id,
		method: 'delete',
	});
}

export function seckillProductStatusChange(data) {//秒杀商品状态修改
	return fetch({
	    url:'/seckillProducts/update_status',
		method: 'put',
		data
	});
}

export function seckillProductDetail(id) {//秒杀商品详情
	return fetch({
	    url:'/seckillProducts/'+id,
		method: 'get',
	});
}