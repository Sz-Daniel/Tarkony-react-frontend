import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout/Layout';
import { Items } from '../pages/Items';
import { ItemSingle } from '../pages/ItemSingle';
import { Bitcoin } from '../pages/Bitcoin';
import { MaintenancePage } from '../components/Maintenance/Maintenance';

export function AppRoutes() {
  // <BrowserRouter basename="/Tarkony-react-frontend">
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Items />} />
          <Route path="/item/:normalizeName" element={<MaintenancePage />} />
          <Route path="/bitcoin" element={<MaintenancePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
