import {
  get,
  post,
  del,
  put
} from '..'

const getResourcesData = () => get('https://1d940ed9-24ee-41a5-b9d1-8edf5e3ce287.mock.pstmn.io/resource')
const postResource = data => post('https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/resource', data)
const delResource = id => del(`https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/resource/${id}`)
const putResource = (id, data) => put(`https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/resource/${id}`, data)

export {
  getResourcesData,
  postResource,
  delResource,
  putResource
}
