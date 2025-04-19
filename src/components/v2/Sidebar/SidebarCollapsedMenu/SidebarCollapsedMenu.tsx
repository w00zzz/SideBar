import { PopoverProps } from "@/interfaces/components/Sidebar/Sidebar.types";
import SidebarCollapsedMenuItem from "./SidebarCollapsedMenuItem";

const SidebarCollapsedMenu = ({ routes }: PopoverProps) => {
  return (
    <>
      {Object.entries(routes)
        .filter((entry): entry is [string, any] => {
          const [, route] = entry;
          return Boolean(route.title && route.icon);
        })
        .map(([key, route]) => {
          return (
            <SidebarCollapsedMenuItem
              key={key}
              handleClick={() => console.log(`click en ${route.title}`)}
              icon={route.icon}
              routes={route.subPath ? route : undefined}
              title={route.title}
            />
          );
        })}
    </>
  );
};

export default SidebarCollapsedMenu;
