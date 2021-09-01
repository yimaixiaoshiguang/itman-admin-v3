import fetch from '@/axios/fetch'

export function GetAttachCategorysTree(params) {//获取素材分类树
	return fetch({
	    url:'/sys/attachCategorys/list/tree',
        method: 'get',
        params
	});
}

export function GetCategorysDetail(id) {//通过ID查询单个素材分类表
	return fetch({
	    url:'/sys/attachCategorys/'+id,
        method: 'get',
	});
}

export function DeleteCategory(id) {//删除单个素材分类表
	return fetch({
	    url:'/sys/attachCategorys/'+id,
        method: 'delete',
	});
}

export function AddCategory(data) {//新增素材分类表
	return fetch({
	    url:'/sys/attachCategorys',
        method: 'post',
        params:data
	});
}

export function EditCategory(params) {//修改素材分类表
	return fetch({
	    url:'/sys/attachCategorys',
        method: 'put',
        params
	});
}

export function GetCategoryPicturesByPid(params) {//获取分类下的图片
	return fetch({
	    url:'/sys/attachs/getByPid',
        method: 'get',
        params
	});
}

export function GetCategoryPictures(params) {//获取全部图片
	return fetch({
	    url:'/sys/attachs/list',
        method: 'get',
        params
	});
}

export function fileImageApi(data, params) {//图片上传
    return fetch({
        url: '/sys/upload/image',
        method: 'POST',
        params,
        data
    })
}

export function picDeleteApi(id) {//图片删除
    return fetch({
        url: '/sys/attachs/'+id,
        method: 'delete',
    })
}

export function picPatchDeleteApi(data) {//图片批量删除
    return fetch({
        url: '/sys/attachs/ids',
        method: 'delete',
        data
    })
}

export function fileUploadApi(data, params) {//文件上传
    return fetch({
        url: '/sys/upload/file',
        method: 'POST',
        params,
        data
    })
}
