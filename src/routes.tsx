import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Dashboard } from "./pages/Home/Dashboard";
import { User } from "./pages/Admin/UserPage";
import { Panel } from "./pages/Admin/Panel";
import { Reports } from "./pages/Reports/Reports";
export const AppRoutes = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/panel" element={<Panel />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
