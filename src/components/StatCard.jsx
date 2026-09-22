import './statcard.css'

export default function StatCard({ label, value, description }) {
  return (
    <div className="stat-card">
      <p className="stat-card-label">{label}</p>
      <p className="stat-card-value">{value}</p>
      {description && <p className="stat-card-desc">{description}</p>}
    </div>
  )
}
