import { FC } from 'react';
import { Box, ListItemButton } from "@mui/material";
import { IPWARoutes } from 'faster-router';

interface PopoverItemProps {
  handleClick: () => void;
  icon: FC<any>;
  routes?: IPWARoutes;
}

const PopoverItem = ({ handleClick, icon: Icon }: PopoverItemProps) => {
  return (
    // Box contenedor para centrar el botón
    <Box sx={{ padding: 0 }}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          // Dimensiones cuadradas del botón
          width: 65,
          height: 65,
          minWidth: 65,
          minHeight: 65,

          // Bordes redondeados y fondo claro
          borderRadius: "8px",
          backgroundColor: "#ffffff",

          // Centrado del contenido
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // Espaciado y padding
          padding: 0,
          margin: 0,

          // Efectos de hover y transición
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#f5f5f5",
            transform: "scale(1)",
          },

          // Sombra suave
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* Icono personalizado con tamaño y color personalizados */}
        <Icon
          sx={{
            fontSize: 23,
            color: "#637381",
          }}
        />
      </ListItemButton>
    </Box>
  );
};

export default PopoverItem;