import { IPWARoutes } from "faster-router";

interface TreeViewProps {
  routes: IPWARoutes;
  parent?: string;
  level?: number;
}

export default TreeViewProps