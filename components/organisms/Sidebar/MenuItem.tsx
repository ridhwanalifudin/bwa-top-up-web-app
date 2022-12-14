import cx from "classnames";
import Image from "next/image";

interface MenuItemProps {
   title: string,
   icon: "menu-overview" | "menu-transaction" | "menu-card" | "menu-logout" | "menu-messages" |"menu-rewards" | "menu-settings",
   active?: boolean
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {title, icon, active} = props;
  const classItem = cx({
    "item": true,
    "mb-30": true,
    active
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="overview-icon"/>
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">{title}</a>
      </p>
    </div>
  );
}
