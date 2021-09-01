import fetch from '@/axios/fetch'

export function getBannerList(data) {//获取banner列表
	return fetch({
	    url:'/banners',
	    method: 'get',
	    params:data
	});
}

export function addBanner(data) {//新增banner
	return fetch({
	    url:'/banners',
	    method: 'post',
	    data
	});
}

export function editBanner(data) {//修改banner
	return fetch({
	    url:'/banners',
	    method: 'put',
	    data
	});
}

export function deleteBanner(id) {//删除banner
	return fetch({
	    url:'/banners/'+id,
	    method: 'delete',
	});
}
