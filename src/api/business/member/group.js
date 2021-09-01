import fetch from '@/axios/fetch'

export function addGroup(data) {//新增分组
	return fetch({
	    url:'/member/group',
		method: 'post',
		data
	});
}

export function editGroup(data) {//修改分组
	return fetch({
	    url:'/member/group',
		method: 'put',
		data
	});
}

export function groupList(params) {//分组列表
	return fetch({
	    url:'/member/group',
		method: 'get',
		params
	});
}

export function deleteGroup(id) {//删除分组
	return fetch({
	    url:'/member/group/'+id,
		method: 'delete',
	});
}