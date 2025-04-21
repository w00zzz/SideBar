import { IPWARoutes } from "faster-router";
import SidebarCollapsedMenu from "./SidebarCollapsedMenu/SidebarCollapsedMenu";
import SidebarExpandedMenu from "./SidebarExpandedMenu/SidebarExpandedMenu";
import TreeView from "@/components/TreeView/TreeView";
import { Box, Typography } from "@mui/material";

interface SidebarMenuProps {
  routes: IPWARoutes;
  isExpanded: boolean;
  title?: string
}

const SidebarMenu = ({ isExpanded, routes,title }: SidebarMenuProps) => {
  return isExpanded ? (
    <Box display={"flex"} flexDirection={"column"}>
      {title && <Typography variant="h5" style={{ textAlign: "center", marginTop:10 ,marginLeft:2,marginBottom:3, color: "gray" }}>{title}</Typography>}
      <TreeView routes={routes} />
      <SidebarExpandedMenu />
    </Box>
  ) : (
    <>
      <SidebarCollapsedMenu routes={routes} />
    </>
  );
};

export default SidebarMenu;
