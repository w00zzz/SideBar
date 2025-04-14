import PopoverItem from "./PopoverItem";
import { IPWARoutes } from "faster-router";
import { FC } from "react";

interface PopoverProps {
  routes: IPWARoutes
}

// Componente Popover que muestra un único botón de Home estilizado
const Popover = ({routes}: PopoverProps) => {
  return (
    <>
      {Object.entries(routes)
        .filter((entry): entry is [string, { title: string; icon: FC<any> }] => {
          const [, { title, icon }] = entry;
          return Boolean(title && icon);
        })
        .map(([key, { title, icon: Icon }]) => (
          <PopoverItem
            key={key}
            handleClick={() => console.log(`click en ${title}`)}
            icon={Icon}
          />
        ))}
    </>
  );
};

export default Popover;
