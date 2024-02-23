import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material'
import {
  Checklist,
  Home,
  ManageAccounts,
  Quiz,
  ViewModule,
} from '@mui/icons-material'
import {
  Footer,
  LayoutDrawer,
  LinkChip,
  apiModuleUser,
  iModuleUser,
  useAppThemeContext,
  useAuthContext,
  useDataContext,
} from '../../shared'

export const HomeCountyPage = () => {
  const { county_id } = useParams()
  const { theme, setLoading } = useAppThemeContext()
  const { accessToken, userProfile, logout } = useAuthContext()
  const { countyData, handleCountyData, loadingCounty } = useDataContext()
  const [modulesData, setModulesData] = useState<iModuleUser[]>([])

  const handleIconModule = useCallback((name: string) => {
    switch (name) {
      case 'ADMIN':
        return <ManageAccounts />

      case 'FREQUÊNCIA':
        return <Checklist />

      case 'AVALIAÇÕES':
        return <Quiz />
    }
  }, [])

  const handleHref = useCallback(
    (url: string) => {
      return `${countyData?.url}/${url}?token=${accessToken}`
    },
    [accessToken, countyData],
  )

  useEffect(() => {
    if (countyData?.id !== county_id) handleCountyData(county_id || '')
  }, [countyData, county_id])

  useEffect(() => {
    setLoading(true)
    apiModuleUser
      .list(`?county_id=${county_id}&user_id=${userProfile?.id}`)
      .then((res) => setModulesData(res.result))
      .finally(() => setLoading(false))
  }, [county_id, userProfile])

  return (
    <LayoutDrawer
      title={
        <Breadcrumbs aria-label="breadcrumb">
          <LinkChip
            icon={<Home sx={{ mr: 0.5 }} fontSize="inherit" />}
            label="Página Inicial"
          />
          <Chip
            label={loadingCounty ? <Skeleton width={100} /> : countyData?.name}
            color="primary"
            icon={<ViewModule sx={{ mr: 0.5 }} fontSize="inherit" />}
          />
        </Breadcrumbs>
      }
    >
      <Box
        my={1}
        mx={2}
        flexDirection="column"
        component={Paper}
        variant="outlined"
      >
        <Box
          height={theme.spacing(7)}
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Typography
            component="div"
            variant="h6"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <ViewModule />
            Módulos
          </Typography>
        </Box>
        <Divider />
        <Box p={1}>
          <Grid container spacing={2}>
            {modulesData.map((el) => (
              <Grid key={el.id} item xs={12} sm={6} md={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  href={handleHref(el.url)}
                  disabled={!el.is_active}
                  startIcon={handleIconModule(el.name)}
                  onClick={logout}
                >
                  {el.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </LayoutDrawer>
  )
}
