import fetch from '@/axios/fetch'

export function clerkList(params) {//店员列表
	return fetch({
	    url:'/clerkShop',
	    method: 'get',
		params
	});
}

export function addClerk(data) {//
	return fetch({
	    url:'/clerkShop',
	    method: 'post',
		data
	});
}

export function editClerk(data) {
	return fetch({
	    url:'/clerkShop',
	    method: 'put',
		data
	});
}

export function deleteClerk(id) {
	return fetch({
	    url:'/clerkShop/'+id,
	    method: 'delete',
	});
}

export function getDetailShop(id,params) {
	return fetch({
	    url:'/clerkShop/user/detail/'+id,
		method: 'get',
		params
	});
}
