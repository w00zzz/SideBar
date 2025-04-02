import { IPWARoutes } from "faster-router";

export interface PathRouteProps {
    path: string;
    title: string;
    subPath?: Record<string, PathRouteProps>;
    icon?: React.ComponentType;
  }
  
  export interface PathRouteCustomProps {
    [key: string]: any;
  }
  
  export interface NavItemProps {
    item: PathRouteProps & PathRouteCustomProps;
    parent?: string;
    hasParent?: boolean;
    last?: boolean;
    level?: number;
  }
  
  export interface TreeViewProps {
    routes: IPWARoutes;
    parent?: string;
    level?: number;
  }
  