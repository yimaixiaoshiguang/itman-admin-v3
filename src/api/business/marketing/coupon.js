import fetch from '@/axios/fetch'

export function couponList(data) {//优惠券列表
	return fetch({
	    url:'/coupons',
		method: 'get',
		params:data
	});
}

export function couponDelete(id) {//优惠券删除
	return fetch({
	    url:'/coupons/'+id,
		method: 'delete',
	});
}

export function couponAdd(data) {//优惠券添加
	return fetch({
	    url:'/coupons/',
		method: 'post',
		data
	});
}

export function changeStatus(data) {//修改状态
	return fetch({
	    url:'/coupons/update_status',
		method: 'put',
		data
	});
}

export function couponInfo(id) {//优惠券详情
	return fetch({
	    url:'/coupons/info/'+id,
		method: 'get',
	});
}

export function singleRecordList(params,id) {//单个优惠券领取记录
	return fetch({
	    url:'/coupons/'+id,
		method: 'get',
		params
	});
}

export function userRecords(params) {//会员优惠券领取记录
	return fetch({
	    url:'/userRecords',
		method: 'get',
		params
	});
}