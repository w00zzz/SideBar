import Box from "@mui/material/Box";

const SidebarHeader = ({ isExpanded }: { isExpanded: boolean }) => (
    <Box // Box contenedor del logo de la aplicacion
          sx={{
            width: "100%",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: isExpanded ? "space-between" : "center",
            padding: isExpanded ? "0 24px" : "0",
            backgroundColor: "rgb(255, 255, 255)",
            borderBottom: "1px solid rgba(145, 158, 171, 0.2)",
            transition: "all 0.4s ease-in-out",
          }}
        >
          <Box // Box reservado exclusivamente para la imagen
            component="img"
            src="src/assets/logo.png"
            sx={{
              height: "60px",
              display: isExpanded ? "block" : "none",
            }}
          ></Box>
        </Box>
);

export default SidebarHeader;