import { IPWARoutes } from "faster-router";
import { FC } from "react";

export interface PopoverProps {
  routes: IPWARoutes;
}

export interface SubMenuProps {
  routes: any;
  onItemClick: () => void;
  onClose: () => void;
  parentTitle?: string;
  level?: number;
}

export interface PopoverItemProps {
  handleClick: () => void;
  icon: FC<any>;
  routes?: IPWARoutes;
  title?: string;
}
