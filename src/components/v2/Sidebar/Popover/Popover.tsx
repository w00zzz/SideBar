import PopoverItem from "./PopoverItem";
import { IPWARoutes } from "faster-router";

interface PopoverProps {
  routes: IPWARoutes
}

// Componente Popover que muestra un único botón de Home estilizado
const Popover = ({routes}: PopoverProps) => {
  return (
    <>
      {Object.entries(routes)
        .filter((entry): entry is [string, any] => {
          const [, route] = entry;
          return Boolean(route.title && route.icon);
        })
        .map(([key, route]) => {
          if (route.subPath) {
            <PopoverItem
              key={key}
              handleClick={() => console.log(`click en ${route.title}`)}
              icon={route.icon}
              routes={routes}
            />
          }
          return (
            <PopoverItem
              key={key}
              handleClick={() => console.log(`click en ${route.title}`)}
              icon={route.icon}
            />
          );
        })
      }
    </>
  );
};

export default Popover;
