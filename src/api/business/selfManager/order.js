import fetch from '@/axios/fetch'

export function orderList(data) {//订单列表
	return fetch({
	    url:'/order/search',
        method: 'post',
        data,
	});
}

export function orderSend(data) {//订单发货
	return fetch({
	    url:'/order/ship',
        method: 'put',
        data,
	});
}

export function orderRemark(data) {//订单备注
	return fetch({
	    url:'/order/remarks',
        method: 'put',
        data,
	});
}

export function agreeOrderRefund(id) {//订单退款
	return fetch({
	    url:'/order/agree/refund/'+id,
        method: 'put',
	});
}

export function refuseOrderRefund(id, reason) {//拒绝订单退款
	return fetch({
	    url:'/order/refuse/refund/'+id,
		method: 'put',
		data:reason
	});
}
