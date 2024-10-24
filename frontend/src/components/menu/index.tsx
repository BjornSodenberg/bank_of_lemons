import { MENU_ITEMS } from "../../constants/menu-items";
import { MenuItemProps } from "../../models/menu-item-props";

export const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        borderRadius: 999,
        padding: 8,
        boxShadow: "0px 6px 13px 0px rgba(0, 0, 0, 0.12)",
      }}
    >
      {MENU_ITEMS.map((item, index) => (
        <MenuItem
          key={item.path}
          name={item.name}
          path={item.path}
          isActive={index === 0 && true}
        />
      ))}
    </div>
  );
};

export const MenuItem = ({ name, path, isActive }: MenuItemProps) => {
  return (
    <a
      href={path}
      style={{
        backgroundColor: isActive ? "#FFE000" : "#FFFFFF",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 999,
        textDecoration: "none",
      }}
    >
      <span style={{ color: "#000000", fontWeight: "500", fontSize: 16 }}>
        {name}
      </span>
    </a>
  );
};
