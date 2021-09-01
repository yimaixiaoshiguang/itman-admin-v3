import fetch from '@/axios/fetch'

export function invitation(data) {//邀请新增
	return fetch({
	    url:'/shop/invitation',
		method: 'post',
		data
	});
}

export function getWxCode() {//获取邀请微信二维码
	return fetch({
	    url:'/shop/wxCode',
        method: 'get',
	});
}

export function shopList(params) {//店铺列表
	return fetch({
	    url:'/shop',
		method: 'get',
		params
	});
}

export function shopInfo(id) {//店铺详情
	return fetch({
	    url:'/shop/'+id,
        method: 'get',
	});
}

export function shopEnabled(id) {//店铺启停
	return fetch({
	    url:'/shop/enabled/'+id,
        method: 'put',
	});
}

export function shopEdit(data) {//店铺修改
	return fetch({
	    url:'/shop',
		method: 'put',
		data
	});
}