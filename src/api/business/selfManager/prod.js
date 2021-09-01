import fetch from '@/axios/fetch'

export function prodList(data) {//规格列表
	return fetch({
	    url:'/product/prod',
	    method: 'get',
		params:data
	});
}

export function addProd(data) {//新增
	return fetch({
	    url:'/product/prod',
	    method: 'post',
		data
	});
}

export function editProd(data) {//修改
	return fetch({
	    url:'/product/prod',
	    method: 'put',
		data
	});
}

export function deleteProd(id) {//删除
	return fetch({
	    url:'/product/prod/'+ id,
	    method: 'delete',
	});
}