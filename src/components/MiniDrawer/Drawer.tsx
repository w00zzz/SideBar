import { useState } from "react";
import { Drawer as MuiDrawer, Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import TreeView from "../TreeView/TreeView";
import { 
  Apps as AppIcon,
  ShoppingCart as EcommerceIcon,
  Analytics as AnalyticsIcon,
  AccountBalance as BankingIcon,
  CalendarToday as BookingIcon,
  Description as FileIcon,
  School as CourseIcon,
  Person as UserIcon,
  Inventory as ProductIcon,
  ShoppingBasket as OrderIcon,
  Receipt as InvoiceIcon,
  Article as BlogIcon,
  Work as JobIcon,
  Tour as TourIcon,
  Folder as FileManagerIcon,
  Mail as MailIcon,
  Chat as ChatIcon
} from "@mui/icons-material";

const routes = {
  overview: {
    title: "OVERVIEW",
    path: "",
    subPath: {
      app: { title: "App", path: "/app", icon: AppIcon },
      ecommerce: { title: "Ecommerce", path: "/ecommerce", icon: EcommerceIcon },
      analytics: { title: "Analytics", path: "/analytics", icon: AnalyticsIcon },
      banking: { title: "Banking", path: "/banking", icon: BankingIcon },
      booking: { title: "Booking", path: "/booking", icon: BookingIcon },
      file: { title: "File", path: "/file", icon: FileIcon },
      course: { title: "Course", path: "/course", icon: CourseIcon },
    }
  },
  management: {
    title: "MANAGEMENT",
    path: "",
    subPath: {
      user: { title: "User", path: "/user", icon: UserIcon },
      product: { title: "Product", path: "/product", icon: ProductIcon },
      order: { title: "Order", path: "/order", icon: OrderIcon },
      invoice: { title: "Invoice", path: "/invoice", icon: InvoiceIcon },
      blog: { title: "Blog", path: "/blog", icon: BlogIcon },
      job: { title: "Job", path: "/job", icon: JobIcon },
      tour: { title: "Tour", path: "/tour", icon: TourIcon },
      fileManager: { title: "File manager", path: "/file-manager", icon: FileManagerIcon },
      mail: { title: "Mail", path: "/mail", icon: MailIcon, badge: "+32" },
      chat: { title: "Chat", path: "/chat", icon: ChatIcon }
    }
  }
};

const Drawer = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const drawerWidth = isExpanded ? 280 : 88;

  return (
    <Box sx={{ display: "flex" }}>
      <MuiDrawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            overflowX: "hidden",
            backgroundColor: "#fff",
            transition: "width 0.3s ease-in-out",
            borderRight: "1px dashed rgba(145, 158, 171, 0.2)",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: isExpanded ? "space-between" : "center",
            padding: isExpanded ? "0 24px" : "0",
            borderBottom: "1px dashed rgba(145, 158, 171, 0.2)",
          }}
        >
          <Box
            component="img"
            src="/path-to-your-logo.png"
            sx={{
              height: "32px",
              display: isExpanded ? "block" : "none"
            }}
          />
        </Box>
        <Box sx={{ overflow: "hidden", flex: 1 }}>
          <TreeView routes={routes} isCollapsed={!isExpanded} />
        </Box>
        <IconButton
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{
            position: "fixed",
            top: "20px",
            left: isExpanded ? "260px" : "68px",
            width: "24px",
            height: "24px",
            padding: 0,
            minWidth: "24px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            border: "1px solid rgba(145, 158, 171, 0.3)",
            borderRadius: "50%",
            transition: "left 0.3s ease-in-out",
            zIndex: 1300,
            "&:hover": {
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
            }
          }}
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </MuiDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h2>Main Content Area</h2>
      </Box>
    </Box>
  );
};

export default Drawer;
