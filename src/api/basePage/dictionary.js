import fetch from '@/axios/fetch'

export function getSysDictionary(data) {//获取数据字典
	return fetch({
	    url:'/baseConfigs',
	    method: 'get',
	    params:data
	});
}

export function addDictType(data) {//新增数据字典大类
	return fetch({
	    url:'/baseConfigs',
	    method: 'post',
	    data
	});
}

export function editDictType(data) {//修改数据字典大类
	return fetch({
	    url:'/baseConfigs',
	    method: 'put',
	    data
	});
}

export function deleteDictType(id) {//删除数据字典大类
	return fetch({
	    url:'/baseConfigs/'+id,
	    method: 'delete',
	});
}


