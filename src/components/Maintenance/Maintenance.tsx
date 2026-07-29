// MaintenancePage.jsx
import './Maintenance.css';
const maintenanceMessage =
  'The external data source previously used has changed. Updates are currently in progress.';

export function MaintenanceBanner() {
  return (
    <div className="maintenance-banner" role="status">
      {maintenanceMessage}
    </div>
  );
}

export function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-message" role="status">
        {maintenanceMessage}
      </div>
    </main>
  );
}