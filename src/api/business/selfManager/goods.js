import fetch from '@/axios/fetch'

export function prodList(params) {//商品列表
	return fetch({
	    url:'/product/status',
        method: 'get',
        params:params,
	});
}

export function wareProdList(params) {//仓库中的商品列表
	return fetch({
	    url:'/product/warehouse/search',
        method: 'get',
        params:params,
	});
}

export function saleProdList(params) {//出售中的商品列表
	return fetch({
	    url:'/product/sale/search',
        method: 'get',
        params:params,
	});
}


export function createProd(data) {//新增商品
	return fetch({
	    url:'/product',
	    method: 'post',
		data
	});
}

export function editProd(data) {//修改商品
	return fetch({
	    url:'/product',
	    method: 'put',
		data
	});
}

export function deleteProd(id) {//删除商品
	return fetch({
	    url:'/product/'+id,
	    method: 'delete',
	});
}

export function prodDetail(id,params) {//商品详情
	return fetch({
	    url:'/product/'+id,
		method: 'get',
		params
	});
}

export function changeProdStatus(id) {//修改商品状态
	return fetch({
	    url:'/product/status/'+id,
	    method: 'put',
	});
}

export function shelfProd(data) {//商品上架
	return fetch({
	    url:'/product/shelf',
		method: 'post',
		data
	});
}

export function shelfProdInfo(id) {//获取商品上架的详情
	return fetch({
	    url:'/product/shelf/'+id,
		method: 'get',
	});
}

export function delProd(data) {//商品下架
	return fetch({
	    url:'/product/del/shelf',
		method: 'put',
		data
	});
}

