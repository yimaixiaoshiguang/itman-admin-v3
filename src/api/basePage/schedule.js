import fetch from '@/axios/fetch'

export function getScheduleList(data) {//获取定时任务列表
	return fetch({
	    url:'/sys/schedule/list',
	    method: 'get',
	    params:data
	});
}

export function AddSchedule(data) {//新增定时任务列表
	return fetch({
	    url:'/sys/schedule',
	    method: 'post',
	    data
	});
}

export function EditSchedule(data) {//修改定时任务列表
	return fetch({
	    url:'/sys/schedule',
	    method: 'put',
	    data
	});
}

export function DelectSchedule(data) {//删除定时任务列表
	return fetch({
	    url:'/sys/schedule',
	    method: 'delete',
	    data
	});
}

export function PauseSchedule(data) {//暂停定时任务
	return fetch({
	    url:'/sys/schedule/pause',
	    method: 'post',
	    data
	});
}

export function ResumeSchedule(data) {//恢复定时任务
	return fetch({
	    url:'/sys/schedule/resume',
	    method: 'post',
	    data
	});
}

export function RunSchedule(data) {//立即执行
	return fetch({
	    url:'/sys/schedule/run',
	    method: 'post',
	    data
	});
}