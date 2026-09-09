import { SvgShop } from "../../utils/svg-components/SvgShop";
import "./SectionInfo.css";

export function SectionInfo(): React.JSX.Element {
  return (
    <section className="info-panel">
      <div className="info-panel__background-decor" aria-hidden="true">
        <span className="info-panel__circle info-panel__circle--lg"></span>
        <span className="info-panel__circle info-panel__circle--md"></span>
      </div>

      <header className="info-panel__header">
        <div className="info-panel__logo-wrapper">
          <SvgShop size="100%" color="var(--green-deep)" />
        </div>
        <div className="info-panel__brand">
          <span className="info-panel__title">FreshMart</span>
          <span className="info-panel__subtitle">Sistema de gestión</span>
        </div>
      </header>

      <main className="info-panel__content">
        <h2 className="info-panel__heading">
          <span>Control</span>
          <span>total de tu</span>
          <span className="info-panel__heading-highlight">supermercado</span>
        </h2>
        <p className="info-panel__description">
          Inventario, ventas, compras y contabilidad en un solo lugar. Accede con tu cuenta para continuar.
        </p>
      </main>

      <footer className="info-panel__footer">
        <div className="info-panel__stat">
          <span className="info-panel__stat-value">12.4k</span>
          <span className="info-panel__stat-label">Productos</span>
        </div>
        <div className="info-panel__stat">
          <span className="info-panel__stat-value">$8.2M</span>
          <span className="info-panel__stat-label">Ventas mes</span>
        </div>
      </footer>
    </section>
  );
}