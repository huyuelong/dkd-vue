import request from '@/utils/request'

// 查询人员列表列表
export function listEmp(query) {
  return request({
    url: '/manager/emp/list',
    method: 'get',
    params: query
  })
}

// 查询人员列表详细
export function getEmp(id) {
  return request({
    url: '/manager/emp/' + id,
    method: 'get'
  })
}

// 新增人员列表
export function addEmp(data) {
  return request({
    url: '/manager/emp',
    method: 'post',
    data: data
  })
}

// 修改人员列表
export function updateEmp(data) {
  return request({
    url: '/manager/emp',
    method: 'put',
    data: data
  })
}

// 删除人员列表
export function delEmp(id) {
  return request({
    url: '/manager/emp/' + id,
    method: 'delete'
  })
}
