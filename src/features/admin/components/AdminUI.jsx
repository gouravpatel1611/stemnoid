import { useState } from 'react';
import { Check, ChevronDown, Search, X } from 'lucide-react';

export function PageHeader({ eyebrow, title, description, action }) {
  return <div className="sa-page-header"><div><div className="sa-eyebrow">{eyebrow}</div><h1>{title}</h1>{description && <p>{description}</p>}</div>{action && <div className="sa-page-action">{action}</div>}</div>;
}

export function StatCard({ icon: Icon, label, value, note, tone = 'blue' }) {
  return <article className="sa-stat-card"><div className={`sa-stat-icon sa-tone-${tone}`}><Icon size={19} /></div><div className="sa-stat-label">{label}</div><div className="sa-stat-value">{value}</div><div className="sa-stat-note">{note}</div></article>;
}

export function Panel({ title, subtitle, action, children, className = '' }) {
  return <section className={`sa-panel ${className}`}><div className="sa-panel-head"><div>{title && <h2>{title}</h2>}{subtitle && <p>{subtitle}</p>}</div>{action}</div>{children}</section>;
}

export function EmptyState({ icon: Icon, title, description, action }) {
  return <div className="sa-empty">{Icon && <div className="sa-empty-icon"><Icon size={24} /></div>}<h3>{title}</h3><p>{description}</p>{action}</div>;
}

export function SearchBox({ value, onChange, placeholder = 'Search...' }) {
  return <label className="sa-search"><Search size={17} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-label={placeholder} />{value && <button type="button" onClick={() => onChange('')} aria-label="Clear search"><X size={15} /></button>}</label>;
}

export function Modal({ title, description, onClose, children, wide = false }) {
  return <div className="sa-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className={`sa-modal ${wide ? 'sa-modal-wide' : ''}`} role="dialog" aria-modal="true" aria-label={title}><div className="sa-modal-head"><div><h2>{title}</h2>{description && <p>{description}</p>}</div><button className="sa-icon-button" onClick={onClose} aria-label="Close dialog"><X size={18} /></button></div>{children}</section></div>;
}

export function Field({ label, hint, children, className = '' }) {
  return <label className={`sa-field ${className}`}><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>;
}

export function SelectField({ value, onChange, options, placeholder }) {
  return <span className="sa-select-wrap"><select value={value} onChange={(event) => onChange(event.target.value)}>{placeholder && <option value="">{placeholder}</option>}{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select><ChevronDown size={15} /></span>;
}

export function Toast({ message, onClose }) {
  if (!message) return null;
  return <div className="sa-toast"><Check size={17} /><span>{message}</span><button onClick={onClose} aria-label="Dismiss notification"><X size={15} /></button></div>;
}

export function useToast() {
  const [toast, setToast] = useState('');
  return { toast, notify: (message) => setToast(message), clearToast: () => setToast('') };
}
