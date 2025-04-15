import request from '@/utils/request'

// 查询设备管理列表
export function listVm(query) {
  return request({
    url: '/manager/vm/list',
    method: 'get',
    params: query
  })
}

// 查询设备管理详细
export function getVm(id) {
  return request({
    url: '/manager/vm/' + id,
    method: 'get'
  })
}

// 新增设备管理
export function addVm(data) {
  return request({
    url: '/manager/vm',
    method: 'post',
    data: data
  })
}

// 修改设备管理
export function updateVm(data) {
  return request({
    url: '/manager/vm',
    method: 'put',
    data: data
  })
}

// 删除设备管理
export function delVm(id) {
  return request({
    url: '/manager/vm/' + id,
    method: 'delete'
  })
}
