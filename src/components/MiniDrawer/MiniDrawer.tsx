import TreeView3 from "@/components/TreeView3"; // Importa tu TreeView
import routes from "@/data/routes"; // Asegúrate de tener las rutas definidas

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* ✅ Aquí integramos TreeView3 */}
        <TreeView3
          routes={routes}
          parent=""
          level={0}
          sx={{
            "& .MuiListItemText-root": { opacity: open ? 1 : 0 },
            "& .MuiListItemButton-root": {
              justifyContent: open ? "initial" : "center",
            },
            "& .MuiListItemIcon-root": {
              justifyContent: "center",
              mr: open ? 2 : "auto",
            },
          }}
        />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>Contenido principal aquí...</Typography>
      </Box>
    </Box>
  );
}
