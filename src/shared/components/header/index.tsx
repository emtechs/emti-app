import { MouseEvent, useState } from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { AccountCircle, Settings } from '@mui/icons-material'
import {
  MenuLayout,
  adaptName,
  useAppThemeContext,
  useAuthContext,
} from '../../../shared'

export const Header = () => {
  const { theme, smDown } = useAppThemeContext()
  const { userProfile } = useAuthContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openPerfil, setOpenPerfil] = useState(false)
  const [openConfig, setOpenConfig] = useState(false)

  const handleClickPerfil = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenPerfil(true)
  }

  const handleClosePerfil = () => {
    setAnchorEl(null)
    setOpenPerfil(false)
  }

  const handleClickConfig = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenConfig(true)
  }

  const handleCloseConfig = () => {
    setAnchorEl(null)
    setOpenConfig(false)
  }

  const user = {
    name: smDown ? adaptName(userProfile?.name) : userProfile?.name,
    src: userProfile?.profile?.url,
  }

  return (
    <Box pt={1} pl={1} pr={2} display="flex" justifyContent="space-between">
      <Box display="flex">
        <MenuLayout
          anchorEl={anchorEl}
          onClick={handleClickPerfil}
          onClose={handleClosePerfil}
          open={openPerfil}
          title="Perfil"
          icon={<AccountCircle fontSize="small" />}
          options={[
            { to: '/profile/edit', value: 'Editar Perfil' },
            { to: '/profile/edit/password', value: 'Editar Senha' },
          ]}
        />
        {userProfile?.is_super && (
          <MenuLayout
            anchorEl={anchorEl}
            onClick={handleClickConfig}
            onClose={handleCloseConfig}
            open={openConfig}
            title="Configurações"
            icon={<Settings fontSize="small" />}
            options={[
              { to: '/module', value: 'Módulos' },
              { to: '/county', value: 'Municípios' },
            ]}
          />
        )}
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography>{user.name}</Typography>
        <Avatar
          src={user.src}
          sx={{
            bgcolor: theme.palette.primary.main,
            width: 30,
            height: 30,
          }}
        />
      </Box>
    </Box>
  )
}
