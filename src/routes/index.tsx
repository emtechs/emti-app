import { Navigate, Route, Routes } from 'react-router-dom'
import {
  EditPasswordPage,
  EditProfilePage,
  HomeCountyPage,
  HomePage,
  LoginPage,
  PasswordPage,
  RecoveryPage,
  TokenPage,
} from '../pages'
import { ProtectedAuth } from '../shared'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/password/:userId/:token" element={<PasswordPage />} />
      <Route path="/token/:token" element={<TokenPage />} />
      <Route element={<ProtectedAuth />}>
        <Route path="/" element={<HomePage />}>
          <Route path=":county_id" element={<HomeCountyPage />} />
        </Route>
        <Route path="/profile/edit" element={<EditProfilePage />}>
          <Route path=":view" element={<EditPasswordPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
