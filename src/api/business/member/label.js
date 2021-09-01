import fetch from '@/axios/fetch'

export function addLabel(data) {//新增分组
	return fetch({
	    url:'/member/label',
		method: 'post',
		data
	});
}

export function editLabel(data) {//修改分组
	return fetch({
	    url:'/member/label',
		method: 'put',
		data
	});
}

export function labelList(params) {//分组列表
	return fetch({
	    url:'/member/label',
		method: 'get',
		params
	});
}

export function deleteLabel(id) {//删除分组
	return fetch({
	    url:'/member/label/'+id,
		method: 'delete',
	});
}