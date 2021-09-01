import fetch from '@/axios/fetch'

export function addGrade(data) {//新增等级
	return fetch({
	    url:'/member/level',
		method: 'post',
		data
	});
}

export function editGrade(data) {//修改等级
	return fetch({
	    url:'/member/level',
		method: 'put',
		data
	});
}

export function levelList(params) {//等级列表
	return fetch({
	    url:'/member/level',
		method: 'get',
		params
	});
}

export function deleteGrade(id) {//删除等级
	return fetch({
	    url:'/member/level/'+id,
		method: 'delete',
	});
}

export function gradeDisplay(id) {//修改等级显否
	return fetch({
	    url:'/member/level/display/'+id,
		method: 'put',
	});
}