import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";

// import { ADMIN_PANEL_URL } from '@/config/url.config'

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";

import { protectedRoutes } from "./protected-routes.data";
import { REFRESH_TOKEN } from "@/constants/token.constants";
import Auth from "@/components/screens/auth/Auth";
import NotFoundPage from "@/app/not-found/page";
import { getAccessToken } from "@/services/auth/auth.helper";
import LayoutBoard from "@/components/ui/layout-board/LayoutBoard";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();

  const pathname = usePathname();
  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get(REFRESH_TOKEN);
    if (!refreshToken && user) logout();
  }, [pathname]);

  const router = useRouter();

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname?.startsWith(route),
  );

  if (!isProtectedRoute) return <>{children}</>;

  if (user?.isAdmin) return <>{children}</>;
  if (user && isProtectedRoute) return <>{children}</>;

  if (pathname !== "/auth")
    return (
      <LayoutBoard>
        <Auth />;
      </LayoutBoard>
    );
  // if (pathname !== "/auth") router.push("/auth");
  return null;
};

export default AuthProvider;
