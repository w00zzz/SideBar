import "./global.css";
import {  IPWARoutes, PwaRoutes } from "faster-router";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import HomeIcon from "@mui/icons-material/Home";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import WcIcon from "@mui/icons-material/Wc";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Sidebar from "./components/v2/Sidebar/Sidebar";

export enum Pages {
  Test,
  NotFound,
  Page2,
  DatosHogar,
  DatosMiembrosNucleo,
  DatosMiembros,
  Ocupación,
  Ingresos,
  NoVinculado,
  AutonomíaNecesidadesEspeciales,
  GradoAutonomia,
  Enfermedades,
  UsoServiciosSalud,
  AccesoProgramasDeProtección,
  SituacionNiñosAdolecentes,
  ServiciosEquipamiento,
  MaterialesPredominantes,
  AfectacionesVivienda,
  LocalesVivienda,
  ServiciosVivienda,
  MobiliarioBasico,
  Vehiculos,
  SeguridadAlimentariaEstrategias,
  Gastos,
  SeguridadAlimentaria,
  OtrosDatos,
  DatosEntrevista,
  Welcome,
  Configuracion,
  Usuario,
  Nomencladores,
  ComunidadesVulnerables,
  SubirDatos,
  ZonasVulnerables,
  Ayuda,
}

function App() {
  const myRoutes2: IPWARoutes = {
    [Pages.Welcome]: {
      component: () => <h1>componente</h1>,
      path: "/",
    },
    [Pages.Usuario]: {
      component: () => <h1>componente</h1>,
      path: "/usuario",
      icon: SettingsRoundedIcon,
    },
    [Pages.Nomencladores]: {
      component: () => <h1>componente</h1>,
      path: "/nomencladores",
      icon: SettingsRoundedIcon,
    },
    [Pages.Configuracion]: {
      component: () => <h1>componente</h1>,
      path: "/Configuración",
      title: "Configuración",
      icon: SettingsRoundedIcon,
    },
    [Pages.DatosHogar]: {
      component: () => <h1>componente</h1>,
      path: "/datos-hogar",
      title: "Información general de la vivienda",
      icon: HomeIcon,
    },
    [Pages.DatosMiembrosNucleo]: {
      component: () => <h1>componente</h1>,
      path: "/nucleo-info",
      title: "Información general de los miembros del hogar",
      icon: AutoStoriesRoundedIcon,
    },
    [Pages.Ingresos]: {
      component: () => <h1>componente</h1>,
      path: "/ingresos",
      title: "Ingresos",
      icon: AttachMoneyIcon,
    },
    [Pages.Ocupación]: {
      path: "/ocupacion",
      title: "Ocupación",
      icon: WorkOutlineIcon,
      subPath: {
        [Pages.Ocupación]: {
          component: () => <h1>componente</h1>,
          path: "/principal",
          title: "Ocupación",
          icon: WorkOutlineIcon,
          subPath: {
            [Pages.Gastos]: {
              component: () => <h1>componente</h1>,
              path: "/gastos",
              title: "Gastos mensuales del hogar",
              icon: AdminPanelSettingsIcon,
            },
            [Pages.SeguridadAlimentaria]: {
              component: () => <h1>componente</h1>,
              path: "/alimentos",
              title: "Grupos de alimentos y estrategias de afrontamiento en el hogar",
              icon: AdminPanelSettingsIcon,
            },
            [Pages.OtrosDatos]: {
              component: () => <h1>componente</h1>,
              path: "/otros",
              title:
                "Estrategias de solución de problemas, redes de apoyo y programas alimentarios. Situación social",
              icon: AdminPanelSettingsIcon,
              subPath: {
                [Pages.Gastos]: {
                  component: () => <h1>componente</h1>,
                  path: "/gastos",
                  title: "Gastos mensuales del hogar",
                  icon: AdminPanelSettingsIcon,
                },
                [Pages.SeguridadAlimentaria]: {
                  component: () => <h1>componente</h1>,
                  path: "/alimentos",
                  title: "Grupos de alimentos y estrategias de afrontamiento en el hogar",
                  icon: AdminPanelSettingsIcon,
                },
                [Pages.OtrosDatos]: {
                  component: () => <h1>componente</h1>,
                  path: "/otros",
                  title:
                    "Estrategias de solución de problemas, redes de apoyo y programas alimentarios. Situación social",
                  icon: AdminPanelSettingsIcon,
                  subPath: {
                    [Pages.Gastos]: {
                      component: () => <h1>componente</h1>,
                      path: "/gastos",
                      title: "Gastos mensuales del hogar",
                      icon: AdminPanelSettingsIcon,
                    },
                    [Pages.SeguridadAlimentaria]: {
                      component: () => <h1>componente</h1>,
                      path: "/alimentos",
                      title: "Grupos de alimentos y estrategias de afrontamiento en el hogar",
                      icon: AdminPanelSettingsIcon,
                    },
                    [Pages.OtrosDatos]: {
                      component: () => <h1>componente</h1>,
                      path: "/otros",
                      title:
                        "Estrategias de solución de problemas, redes de apoyo y programas alimentarios. Situación social",
                      icon: AdminPanelSettingsIcon,
                      subPath: {
                        [Pages.Gastos]: {
                          component: () => <h1>componente</h1>,
                          path: "/gastos",
                          title: "Gastos mensuales del hogar",
                          icon: AdminPanelSettingsIcon,
                        },
                        [Pages.SeguridadAlimentaria]: {
                          component: () => <h1>componente</h1>,
                          path: "/alimentos",
                          title: "Grupos de alimentos y estrategias de afrontamiento en el hogar",
                          icon: AdminPanelSettingsIcon,
                        },
                        [Pages.OtrosDatos]: {
                          component: () => <h1>componente</h1>,
                          path: "/otros",
                          title:
                            "Estrategias de solución de problemas, redes de apoyo y programas alimentarios. Situación social",
                          icon: AdminPanelSettingsIcon,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        [Pages.NoVinculado]: {
          component: () => <h1>componente</h1>,
          path: "/no-vinculado",
          title: "Miembros adultos no vinculados al trabajo remunerado",
          icon: WorkOutlineIcon,
        },
      },
    },
    [Pages.AutonomíaNecesidadesEspeciales]: {
      path: "/autonomia",
      title: "Autonomía y necesidades especiales",
      icon: HdrAutoIcon,
      subPath: {
        [Pages.GradoAutonomia]: {
          component: () => <h1>componente</h1>,
          path: "/discapacidad",
          title: "Grado de autonomía y situación de discapacidad",
          icon: HdrAutoIcon,
        },
        [Pages.Enfermedades]: {
          component: () => <h1>componente</h1>,
          path: "/enfermedades",
          title: "Enfermedades",
          icon: HdrAutoIcon,
        },
        [Pages.UsoServiciosSalud]: {
          component: () => <h1>componente</h1>,
          path: "/servicios",
          title: "Uso de servicios de salud",
          icon: HdrAutoIcon,
        },
      },
    },
    [Pages.AccesoProgramasDeProtección]: {
      component: () => <h1>componente</h1>,
      path: "/proteccion",
      title: "Acceso a programas de protección social y cuidados",
      icon: SafetyCheckIcon,
    },
    [Pages.SituacionNiñosAdolecentes]: {
      component: () => <h1>componente</h1>,
      path: "/adolecentes",
      title: "Situación de niños, niñas y adolescentes",
      icon: WcIcon,
    },
    [Pages.ServiciosEquipamiento]: {
      path: "/servicios-equipamientos",
      title:
        "Condiciones de la vivienda, acceso a servicios y equipamiento del hogar",
      icon: MapsHomeWorkIcon,
      subPath: {
        [Pages.MaterialesPredominantes]: {
          component: () => <h1>componente</h1>,
          path: "/materiales",
          title: "Materiales predominantes de la vivienda",
          icon: MapsHomeWorkIcon,
        },
        [Pages.AfectacionesVivienda]: {
          component: () => <h1>componente</h1>,
          path: "/afectaciones",
          title: "Afectaciones que presenta la vivienda",
          icon: MapsHomeWorkIcon,
        },
        [Pages.LocalesVivienda]: {
          component: () => <h1>componente</h1>,
          path: "/locales",
          title: "Locales de la vivienda",
          icon: MapsHomeWorkIcon,
        },
        [Pages.ServiciosVivienda]: {
          component: () => <h1>componente</h1>,
          path: "/servicios",
          title: "Servicios de la vivienda",
          icon: MapsHomeWorkIcon,
        },
        [Pages.MobiliarioBasico]: {
          component: () => <h1>componente</h1>,
          path: "/mobiliario",
          title: "Mobiliario básico y equipos funcionando",
          icon: MapsHomeWorkIcon,
        },
        [Pages.Vehiculos]: {
          component: () => <h1>componente</h1>,
          path: "/vehiculos",
          title: "Vehículos de que dispone el hogar",
          icon: MapsHomeWorkIcon,
        },
      },
    },
  
    [Pages.SeguridadAlimentariaEstrategias]: {
      path: "/estrategia",
      title: "Seguridad alimentaria y estrategias de afrontamiento en el hogar",
      icon: AdminPanelSettingsIcon,
      subPath: {
        [Pages.Gastos]: {
          component: () => <h1>componente</h1>,
          path: "/gastos",
          title: "Gastos mensuales del hogar",
          icon: AdminPanelSettingsIcon,
        },
        [Pages.SeguridadAlimentaria]: {
          component: () => <h1>componente</h1>,
          path: "/alimentos",
          title: "Grupos de alimentos y estrategias de afrontamiento en el hogar",
          icon: AdminPanelSettingsIcon,
        },
        [Pages.OtrosDatos]: {
          component: () => <h1>componente</h1>,
          path: "/otros",
          title:
            "Estrategias de solución de problemas, redes de apoyo y programas alimentarios. Situación social",
          icon: AdminPanelSettingsIcon,
        },
      },
    },
    [Pages.DatosEntrevista]: {
      component: () => <h1>componente</h1>,
      path: "/datos",
      title: "Datos de la entrevista",
      icon: AssignmentIcon,
    },
    [Pages.SubirDatos]: {
      component: ()=><h1>asd</h1>,
      path: "/subirdatos",
      icon: SettingsRoundedIcon,
    },
    [Pages.ZonasVulnerables]: {
      component: () => <h1>componente</h1>,
      path: "/zonas-vulnerables",
      icon: SettingsRoundedIcon,
    }, [Pages.Ayuda]: {
      component: () => <h1>componente</h1>,
      path: "/ayuda",
    },
  };


  return (
    <PwaRoutes
      routes={myRoutes2}
      CallBackUrlController={() => <h1>Hola mundo!</h1>}
      DashboardLayout={({ children }: any) => (
        <div style={{ display: "flex" }}>
          <h1>Template</h1>
          {/* <Drawer routes={myRoutes2}></Drawer> */}
          {/* <TreeViewPopover/> */}
          <div style={{ backgroundColor: "red" }}>{children}</div>
          <Sidebar routes={myRoutes2}/>
        </div>
      )}
      LandingPage={() => <h1>Landing!</h1>}
      NotFoundPage={() => <h1>Not found!</h1>}
      SignInPage={() => <h1>Sign in!</h1>}
      SignUpPage={() => <h1>Sign up!</h1>}
    />
  );
}

export default App;
