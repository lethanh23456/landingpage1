import { Icon, Menu, notification } from "antd";
import Link from "next/link";
import React from "react";
import Wrapper from "./index.style";
const { Item, SubMenu } = Menu;

const MenuHeaderSecond = ({
  onClose,
  isDesktop,
  className,
  menuItems,
  drawerClose,
  ...props
}) => {

  const dangPhatTrien = () => {
    notification.open({
      message: "Chức năng đang trong quá trình phát triển",
      placement: "bottomRight",
      icon: <Icon type="info-circle" style={{ color: "blue" }} />
    });
  };

  return (
    <Wrapper isDesktop={isDesktop}>
      <Menu mode={isDesktop ? "inline" : "horizontal"} onClick={onClose}>
        {menuItems.map((menu, index) => {
          console.log(menu, "menu");
          if (menu.path === '/vanbangchungchi') {
            return (
              <Item onClick={dangPhatTrien}
                style={{
                  fontSize: isDesktop ? 14 : 18,
                  fontWeight: "bold",
                  color: "rgb(52, 61, 72)"
                }}
              >
                {menu.label}
              </Item>
            );
          }
          if (menu.submenu && menu.submenu.length > 0) {
            return (
              <SubMenu
                title={
                  <span
                    style={{
                      fontSize: isDesktop ? 14 : 18,
                      fontWeight: "bold",
                      color: "rgb(52, 61, 72)"
                    }}
                  >
                    {menu.label}
                  </span>
                }
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "rgb(52, 61, 72)"
                }}
              >
                {menu.submenu.map(e => e)}
              </SubMenu>
            );
          }
          return (
            <Item>
              <Link href={menu.path}>
                <a
                  style={{
                    fontSize: isDesktop ? 14 : 18,
                    fontWeight: "bold",
                    color: "rgb(52, 61, 72)"
                  }}
                >
                  {menu.label}
                </a>
              </Link>
            </Item>
          );
        })}
      </Menu>
    </Wrapper>
  );
};

export default MenuHeaderSecond;
