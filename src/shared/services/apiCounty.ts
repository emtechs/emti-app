import { FieldValues } from 'react-hook-form'
import { apiUsingNow, iCounty } from '../../shared'

const create = async (data: FieldValues) => {
  await apiUsingNow.post('counties', data)
}

interface iListReturn {
  total: number
  result: iCounty[]
}

const list = async (query: string): Promise<iListReturn> => {
  const { data: response } = await apiUsingNow.get('counties' + query)
  return response
}

const retrieve = async (id: string): Promise<iCounty> => {
  const { data: response } = await apiUsingNow.get<iCounty>('counties/' + id)
  return response
}

const update = async (id: string) => {
  await apiUsingNow.patch('counties/' + id)
}

const destroy = async (id: string) => {
  await apiUsingNow.delete('counties/' + id)
}

export const apiCounty = {
  create,
  list,
  retrieve,
  update,
  destroy,
}
