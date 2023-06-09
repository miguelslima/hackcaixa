import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user?.name ? <AppRoutes /> : <AuthRoutes />}
      {/* <AppRoutes /> */}
    </NavigationContainer>
  );
}
