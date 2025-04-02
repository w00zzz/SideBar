import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";

// import useTheme from "@/_pwa-framework/store/theme";
// import { shadows } from "@/_pwa-framework/theme/shadows";
// import { overrides } from "@/_pwa-framework/theme/overrides";
// import { typography } from "@/_pwa-framework/theme/typography";
// import { customShadows } from "@/_pwa-framework/theme/custom-shadows";
// import themes from "./themes";
import type { CustomThemeProviderProps } from "./types";

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  // const [theme] = useTheme();
  const memoizedValue = useMemo<ThemeOptions>(
    () => ({
      // typography,
      // shadows: shadows(),
      // customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );
  const baseTheme = createTheme({
    ...memoizedValue,
    // palette: themes[theme].palette,
  });
  // baseTheme.components = overrides(baseTheme);
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
