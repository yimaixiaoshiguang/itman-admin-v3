import fetch from '@/axios/fetch'

export function getStatistic(data) {//首页统计
	return fetch({
	    url:'/analysis/home/statistic',
	    method: 'get',
		params:data
	});
}

export function getUserStatistic(data) {//会员统计
	return fetch({
	    url:'/analysis/home/userStatistic',
	    method: 'get',
		params:data
	});
}

export function getProdStatistic(data) {//商品统计
	return fetch({
	    url:'/analysis/home/prodStatistic',
	    method: 'get',
		params:data
	});
}

export function getOrderStatistic(data) {//订单统计
	return fetch({
	    url:'/analysis/home/orderStatistic',
	    method: 'get',
		params:data
	});
}

export function getMerchantStatistic(data) {//商家统计
	return fetch({
	    url:'/analysis/home/merchantStatistic',
	    method: 'get',
		params:data
	});
}

export function getSaleTendency(data) {//销售统计
	return fetch({
	    url:'/analysis/home/saleTendency',
	    method: 'get',
		params:data
	});
}