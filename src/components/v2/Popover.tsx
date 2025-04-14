import {  ListItemButton, ListItemIcon, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Popover = () => {
  const handleClick = () => console.log("click en un elemento popover");
  return (
    <>
       <ListItemButton
      onClick={handleClick}
      sx={{
        borderRadius: "12px", // Bordes redondeados
        display: "flex", // Asegura que el contenedor sea un flexbox
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
      }}
    >
      {/* Icono */}
      <ListItemIcon
        sx={{
        //   minWidth: "0.5px", // Elimina el ancho mínimo predeterminado
          display: "flex", // Asegura que el contenedor del ícono sea un flexbox
          alignItems: "center", // Centra verticalmente
          justifyContent: "center", // Centra horizontalmente
        }}
      >
        <HomeIcon
          sx={{
            display: "block", // Asegura que el SVG sea tratado como un bloque
            margin: "auto", // Centra el SVG dentro de su contenedor
            fontSize: "24px", // Tamaño del ícono (opcional)
          }}
        />
      </ListItemIcon>




    </ListItemButton>
      {/* Botón de lista */}
      <ListItemButton
        sx={{
          width: "fit-content", // Ajusta el ancho al contenido
          padding: "8px 16px", // Espaciado interno
          borderRadius: "8px", // Bordes redondeados
          backgroundColor: "#f0f4f8", // Color de fondo
          "&:hover": {
            backgroundColor: "#e3eaf2", // Cambio de color al pasar el mouse
          },
        }}
      >
        <Typography variant="body1">Opción 1</Typography>
      </ListItemButton>

      {/* Otro botón de lista */}
      <ListItemButton
        sx={{
          width: "fit-content",
          padding: "8px 16px",
          borderRadius: "8px",
          backgroundColor: "#f0f4f8",
          "&:hover": {
            backgroundColor: "#e3eaf2",
          },
        }}
      >
        <Typography variant="body1">Opción 2</Typography>
      </ListItemButton>
    </>
  );
};

export default Popover;
