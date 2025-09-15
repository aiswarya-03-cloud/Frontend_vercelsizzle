import { AuthProvider } from "../../components/User/AuthContext";

function App() {
  return (
    <AuthProvider>
      <YourAppRoutes />
    </AuthProvider>
  );
}
