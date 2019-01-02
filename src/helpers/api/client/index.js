
import {
  get,
  post,
  del,
  put
} from '..'

const getClientsData = () => get('https://9f6d5a02-b08c-40b9-aea5-bdeaaf2c5d62.mock.pstmn.io/client')
const postClient = data => post('https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/client', data)
const delClient = id => del(`https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/client/${id}`)
const putClient = (id, data) => put(`https://e3c02e0f-7ee1-4bb6-b351-2154d6248660.mock.pstmn.io/client/${id}`, data)

export {
  getClientsData,
  postClient,
  delClient,
  putClient
}
