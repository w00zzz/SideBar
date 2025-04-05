import { IPWARoutes } from "faster-router";

interface TreeViewProps {
  routes: IPWARoutes;
  parent?: string;
  level?: number;
  isCollapsed?: boolean;
}

export default TreeViewProps