import fetch from '@/axios/fetch'

export function getAccountList(params) {//户号管理列表
	return fetch({
	    url:'/living/page_account',
	    method: 'get',
		params
	});
}

export function accountDetail(params) {//户号明细
	return fetch({
	    url:'/living/order_info',
	    method: 'get',
		params
	});
}

export function getOrderList(params) {//缴费明细列表
	return fetch({
	    url:'/living',
	    method: 'get',
		params
	});
}

export function exportDetail(params) {//导出缴费明细
	return fetch({
	    url:'/living/export',
		method: 'get',
		responseType:'blob',
		params,
	});
}
