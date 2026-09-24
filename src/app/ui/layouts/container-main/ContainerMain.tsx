import "./ContainerMain.css";

import { useRoutes } from "react-router";
import { appConfigurationRouters } from "../../../share/routers/ConfigurationsRouters";

export function ContainerMain(): React.JSX.Element {
  const elementsRouters = useRoutes(appConfigurationRouters);
  return <main className="container-main">{elementsRouters}</main>;
}
