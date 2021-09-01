import fetch from '@/axios/fetch'

export function proCategoryList(data) {//商品分类
	return fetch({
	    url:'/product/category',
	    method: 'get',
		params:data
	});
}

export function addProCategory(data) {//新增
	return fetch({
	    url:'/product/category',
	    method: 'post',
		data
	});
}

export function editProCategory(data) {//修改
	return fetch({
	    url:'/product/category',
	    method: 'put',
		data
	});
}

export function deleteProCategory(id) {//删除
	return fetch({
	    url:'/product/category/'+ id,
	    method: 'delete',
	});
}

export function changeProStatus(id) {//删除
	return fetch({
	    url:'/product/category/status/'+ id,
	    method: 'put',
	});
}