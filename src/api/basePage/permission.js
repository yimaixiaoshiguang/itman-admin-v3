import fetch from '@/axios/fetch'

export function permissionList() {//数据权限列表
	return fetch({
	    url:'/sysFilters',
	    method: 'get',
	});
}

export function permissionTableList() {//可配置表列表
	return fetch({
	    url:'/sysFilters/show_table',
	    method: 'get',
	});
}

export function permissionColumnList(params) {//可配置表列表对应的属性列表
	return fetch({
	    url:'/sysFilters/show_column',
		method: 'get',
		params
	});
}

export function addPermission(data) {//
	return fetch({
	    url:'/sysFilters',
		method: 'post',
		data
	});
}

export function editPermission(data) {//
	return fetch({
	    url:'/sysFilters',
		method: 'put',
		data
	});
}

export function deletePermission(id) {//
	return fetch({
	    url:'/sysFilters/'+id,
		method: 'delete',
	});
}

export function permissionDetail(id) {//
	return fetch({
	    url:'/sysFilters/'+id,
		method: 'get',
	});
}

