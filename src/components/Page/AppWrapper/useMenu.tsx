import { HiChartBar, HiInbox, HiListBullet, HiShoppingCart, HiTruck, HiUser } from "react-icons/hi2";
import { useLang } from "@/hooks";
import { linkPaths } from "@/common/constant/url";
import type { MenuItems } from "@/components/UI/Layout/Menu/type";
import useLayout from "@/components/UI/Layout/useLayout";

const { DASHBOARD, PRODUCTS, CUSTOMERS, ORDERS, SHIPMENTS, CATEGORY } = linkPaths;

const ICON_SIZE = 18;

const useMenu = () => {
  const { lang } = useLang();

  const { layoutApi } = useLayout();

  const handleHideSide = () => layoutApi.onHideSide();

  const items: MenuItems = [
    {
      id: "dashboard",
      label: <div onClick={handleHideSide}>{lang.common.menu.dashboard}</div>,
      icon: <HiChartBar size={ICON_SIZE} />,
      path: DASHBOARD,
      isRoot: true,
    },
    {
      id: "customer",
      label: <div onClick={handleHideSide}>{lang.common.menu.customer}</div>,
      icon: <HiUser size={ICON_SIZE} />,
      path: CUSTOMERS,
      isRoot: true,
    },
    {
      id: "category",
      label: <div onClick={handleHideSide}>{lang.common.menu.category}</div>,
      icon: <HiListBullet size={ICON_SIZE} />,
      path: CATEGORY,
      isRoot: true,
    },
    {
      id: "product",
      label: <div onClick={handleHideSide}>{lang.common.menu.product}</div>,
      icon: <HiInbox size={ICON_SIZE} />,
      path: PRODUCTS,
      isRoot: true,
    },
    {
      id: "order",
      label: <div onClick={handleHideSide}>{lang.common.menu.order}</div>,
      icon: <HiShoppingCart size={ICON_SIZE} />,
      path: ORDERS,
      isRoot: true,
    },
    {
      id: "shipment",
      label: <div onClick={handleHideSide}>{lang.common.menu.shipment}</div>,
      icon: <HiTruck size={ICON_SIZE} />,
      path: SHIPMENTS,
      isRoot: true,
    },
  ];

  return items;
};

export default useMenu;
