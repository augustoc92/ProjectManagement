import {
  get,
  post,
  del,
  put
} from '..'

const getProjectsData = () => get('https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/project')
const postProject = data => post('https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/project', data)
const delProject = id => del(`https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/project/${id}`)
const putProject = (id, data) => put(`https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/project/${id}`, data)

export {
  getProjectsData,
  postProject,
  delProject,
  putProject
}
