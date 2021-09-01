import fetch from '@/axios/fetch'

export function getExpressList(data) {//快递节点
	return fetch({
	    url:'/emsExpress/yy/point',
	    method: 'post',
		data
	});
}

export function getExpressCompy(params) {//快递公司
	return fetch({
	    url:'/emsExpress/comList',
	    method: 'get',
		params
	});
}
