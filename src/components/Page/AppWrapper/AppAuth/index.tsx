import { FC, ReactNode, Fragment, useState, useCallback, useEffect } from "react";
import { logout, refresh } from "@/services/auth/api";
import { useNavigate } from "react-router";
import { linkPaths } from "@/common/constant/url";
import RedirectModal from "./RedirectModal";
import useAuthStore from "@/store/AuthStore";

const { AUTH } = linkPaths;

interface AppAuthProps {
  children?: ReactNode;
}

const AppAuth: FC<AppAuthProps> = ({ children }) => {
  const [auth, resetAuth] = useAuthStore((state) => [state.auth, state.resetAuth]);

  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const [reLogin, setReLogin] = useState<boolean>(false);

  const { isAuth, info, expired } = auth;

  const onRefresh = useCallback(async () => {
    setOpen(false);
    const response = await refresh({ customerId: info.id });
    if (!response.success) setOpen(true);
  }, [isAuth]);

  const onLogout = useCallback(async () => {
    if (!isAuth) return;
    await logout({ customerId: info.id });
    resetAuth();
  }, [isAuth]);

  const handleReLogin = async () => {
    setOpen(false);
    setReLogin(true);
    await onLogout();
    navigate(AUTH);
  };

  // Redirect to login page if user haven't login
  useEffect(() => {
    if (!isAuth) return navigate(AUTH);
  }, []);

  // Refresh token when first access page
  useEffect(() => {
    if (isAuth) onRefresh();
  }, []);

  // Refresh token interval
  useEffect(() => {
    if (!isAuth) return;

    const expiredTime = expired ?? 0;
    if (expiredTime < Date.now()) return;

    let interval: any;
    const time = expiredTime - Date.now() - 500;
    interval = setInterval(() => {
      if (!reLogin) onRefresh();
    }, time);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      {children}
      <RedirectModal open={open} onOk={handleReLogin} />
    </Fragment>
  );
};

export default AppAuth;