import { FieldValues } from 'react-hook-form'
import { apiUsingNow } from '../../shared'

const create = async (data: FieldValues) => {
  await apiUsingNow.post('modulecounty', data)
}

const list = async () => {
  await apiUsingNow.get('modulecounty')
}

const update = async (id: string) => {
  await apiUsingNow.patch('modulecounty/' + id)
}

const destroy = async (id: string) => {
  await apiUsingNow.delete('modulecounty/' + id)
}

export const apiModuleCounty = {
  create,
  list,
  update,
  destroy,
}
