import Layout from "./layouts/Layout.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AuthCallbackPage from "./pages/AuthCallbakcPage.tsx";
import UserProfilePage from "./pages/UserProfilePage.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";
import ManageRestaurantPage from "./pages/ManageRestaurantPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import OrderStatusPage from "./pages/OrderStatusPage.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/details/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
