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
  await apiUsingNow.post('password', data)
}

const passwordRecovery = async (
  data: iRecoveryPasswordRequest,
  id: string,
  token: string,
): Promise<void> => {
  await apiUsingNow.patch('password', { ...data, id, token })
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
