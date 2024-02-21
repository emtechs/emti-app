import { useState, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {
  Box,
  Breadcrumbs,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import { Home, ViewModule } from '@mui/icons-material'
import {
  ButtonDest,
  Footer,
  LayoutDrawer,
  apiCounty,
  iCounty,
  useAppThemeContext,
} from '../../shared'

export const HomePage = () => {
  const { county_id } = useParams()
  const { theme, setLoading } = useAppThemeContext()
  const [countiesData, setCountiesData] = useState<iCounty[]>([])

  useEffect(() => {
    setLoading(true)
    apiCounty
      .list('')
      .then((res) => setCountiesData(res.result))
      .finally(() => setLoading(false))
  }, [])

  if (county_id) return <Outlet />

  return (
    <LayoutDrawer
      title={
        <Breadcrumbs aria-label="breadcrumb">
          <Chip
            color="primary"
            variant="filled"
            label="Página Inicial"
            icon={<Home sx={{ mr: 0.5 }} fontSize="inherit" />}
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
            Municípios
          </Typography>
        </Box>
        <Divider />
        <Box p={1}>
          <Grid container spacing={2}>
            {countiesData.map((el) => (
              <Grid key={el.id} item xs={12} sm={6} md={4}>
                <ButtonDest title={el.name} to={`/${el.id}`} fullWidth />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </LayoutDrawer>
  )
}
