import React, { useState } from "react";
import { Button, Popover, Typography } from "@mui/material";

const TreeViewPopover: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Controla cuando se muestra el popover
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Oculta el popover cuando el mouse sale del botón o del popover
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  // Determina si el popover está abierto
  const isOpen = Boolean(anchorEl);

  return (
    <div>
      {/* Botón que activa el popover */}
      <Button
        variant="contained"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ margin: 2 }}
      >
        Hover me
      </Button>

      {/* Popover */}
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: "center", // Alinea verticalmente con el centro del botón
          horizontal: "right", // Posiciona el popover a la derecha del botón
        }}
        transformOrigin={{
          vertical: "center", // Alinea verticalmente con el centro del botón
          horizontal: "left", // Alinea el popover para que su borde izquierdo coincida con el borde derecho del botón
        }}
        PaperProps={{
          sx: {
            marginLeft: "3px", // Agrega un margen de 3px entre el botón y el popover
          },
        }}
        sx={{
          pointerEvents: "none", // Permite que el mouse salga del popover sin cerrarlo inmediatamente
        }}
        disableEnforceFocus 
        disableAutoFocus 
        disableRestoreFocus 
      >
        <Typography sx={{ p: 2 }}>This is a popover content!</Typography>
      </Popover>
    </div>
  );
};

export default TreeViewPopover;
