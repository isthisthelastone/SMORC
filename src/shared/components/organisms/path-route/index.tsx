import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { homeModel } from "@pages/home";
import { useUnit } from "effector-react";
// Импортируйте другие модели здесь

interface PageRouteProps {
  element: React.ReactElement;
}

const PageRoute: React.FC<PageRouteProps> = ({ element }) => {
  const location = useLocation();
  const homeModelInit = useUnit(homeModel.init);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        homeModelInit();
        break;
      case "/airdrop":
        break;
    }
  }, [location.pathname]);

  return element;
};

export default PageRoute;
