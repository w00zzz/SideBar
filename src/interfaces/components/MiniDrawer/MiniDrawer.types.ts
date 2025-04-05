import { IPWARoutes } from "faster-router";
import { ReactNode } from "react";

export interface MiniDrawerProps {
  /** Controls whether the sidebar is expanded */
  open: boolean;
  /** Callback when sidebar should be opened */
  onOpen: () => void;
  /** Callback when sidebar should be closed */
  onClose: () => void;
  /** Array of navigation items */
  routes: IPWARoutes;
  /** Logo components */
  logo: LogoProps;
  /** Display variant of the sidebar */
  variant?: "permanent" | "temporary";
  /** Width of the expanded sidebar in pixels */
  width?: number;
  /** Width of the collapsed sidebar in pixels */
  collapsedWidth?: number;
  /** Optional CSS class name */
  className?: string;
  /** Optional style overrides */
  sx?: Record<string, unknown>;
}

export interface LogoProps {
  /** Full logo component shown when sidebar is expanded */
  full: ReactNode;
  /** Icon-only logo shown when sidebar is collapsed */
  icon: ReactNode;
  /** Optional click handler for the logo */
  onClick?: () => void;
}
