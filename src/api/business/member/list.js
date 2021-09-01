import fetch from '@/axios/fetch'

export function memberList(params) {//会员列表
	return fetch({
	    url:'/member',
		method: 'get',
		params
	});
}

export function memberEdit(data) {//编辑
	return fetch({
	    url:'/member',
        method: 'put',
        data
	});
}

export function memberUpload(data) {//上传内购会员
	return fetch({
	    url:'/member/upload',
        method: 'put',
        data
	});
}

export function memberDetail(id) {//会员详情
	return fetch({
	    url:'/member/'+id,
        method: 'get',
	});
}
