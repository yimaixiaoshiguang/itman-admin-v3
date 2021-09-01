import fetch from '@/axios/fetch'

export function GetIntegralLogs(params) {//获取积分领取日志
	return fetch({
	    url:'/integralLogs',
		method: 'get',
		params
	});
}

export function GetIntegral() {//获取积分配置
	return fetch({
	    url:'/integrals',
		method: 'get',
	});
}

export function EditIntegral(data) {//修改积分配置
	return fetch({
	    url:'/integrals',
		method: 'put',
		data
	});
}

export function AddIntegral(data) {//新增积分配置
	return fetch({
	    url:'/integrals',
		method: 'post',
		data
	});
}