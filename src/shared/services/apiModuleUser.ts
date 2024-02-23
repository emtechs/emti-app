import { apiUsingNow, iModuleUser } from '../../shared'

interface iListReturn {
  total: number
  result: iModuleUser[]
}

const list = async (query: string): Promise<iListReturn> => {
  const { data: response } = await apiUsingNow.get<iListReturn>(
    `moduleuser${query}`,
  )
  return response
}

export const apiModuleUser = {
  list,
}
