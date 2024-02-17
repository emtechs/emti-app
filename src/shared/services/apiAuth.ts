import {
  apiUsingNow,
  iLoginRequest,
  iLoginResponse,
  iRecoveryPasswordRequest,
  iRecoveryRequest,
} from '../../shared'

const login = async (data: iLoginRequest): Promise<iLoginResponse> => {
  const { data: response } = await apiUsingNow.post<iLoginResponse>(
    'login',
    data,
  )
  return response
}

const refresh = async (token: string): Promise<iLoginResponse> => {
  const { data: response } = await apiUsingNow.post<iLoginResponse>(
    `token/${token}`,
  )
  return response
}

const recovery = async (data: iRecoveryRequest): Promise<void> => {
  await apiUsingNow.post('password', {
    ...data,
    base_url: 'https://emtidigital.emsolucoestecnologicas.com.br',
  })
}

const passwordRecovery = async (
  data: iRecoveryPasswordRequest,
  userId: string,
  token: string,
): Promise<void> => {
  await apiUsingNow.post(`password/${userId}/${token}`, data)
}

const verifyPassword = async (
  data: iRecoveryPasswordRequest,
): Promise<void> => {
  await apiUsingNow.post('password/verify', data)
}

export const apiAuth = {
  login,
  refresh,
  recovery,
  passwordRecovery,
  verifyPassword,
}
