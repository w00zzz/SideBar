import { Box } from "@mui/material";
import { IPWARoutes } from "faster-router";
import SidebarMenu from "./SidebarMenu";

interface SidebarContentProps {
  isExpanded: boolean;
  routes: IPWARoutes;
  title?: string;
}

const SidebarContent = ({ isExpanded, routes, title }: SidebarContentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        overflowY: "auto",
        flex: 1,
        maxHeight: "calc(100vh - 64px)",
        "&::-webkit-scrollbar": {
          width: "1px",
        },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <SidebarMenu routes={routes} isExpanded={isExpanded} title={title}/>
    </Box>
  );
};

export default SidebarContent;
