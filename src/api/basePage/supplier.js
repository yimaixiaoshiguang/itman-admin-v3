import fetch from '@/axios/fetch'

export function supplierList(data) {//供应商列表
	return fetch({
	    url:'/supplier',
	    method: 'get',
		params:data
	});
}

export function deleteSupplier(id) {//供应商删除
	return fetch({
	    url:'/supplier/'+id,
	    method: 'delete',
	});
}

export function addSupplier(data) {//新增供应商
	return fetch({
	    url:'/supplier',
	    method: 'post',
		data
	});
}

export function editSupplier(data) {//修改供应商
	return fetch({
	    url:'/supplier',
	    method: 'put',
		data
	});
}

export function supplierDetail(id) {//修改供应商
	return fetch({
	    url:'/supplier/'+id,
	    method: 'get',
	});
}
