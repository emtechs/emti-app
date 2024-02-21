import { z } from 'zod'
import {
  userFirstSchema,
  userPasswordSchema,
  userUpdateSchema,
} from '../../shared'

export interface iUser {
  id: string
  name: string
  login: string
  cpf: string
  email: string
  is_super: boolean
  is_first_access: boolean
  profile: {
    url: string
  }
}

export type iUserFirstRequest = z.infer<typeof userFirstSchema>

export type iUserUpdateRequest = z.infer<typeof userUpdateSchema>

export type iUserPasswordRequest = z.infer<typeof userPasswordSchema>
