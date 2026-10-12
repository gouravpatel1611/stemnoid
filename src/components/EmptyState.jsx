import { SearchX } from 'lucide-react';
export function EmptyState({ title = 'Nothing here yet', description = 'Try another search or check back soon.' }) {
  return <div className="empty-state"><SearchX size={28}/><h3>{title}</h3><p>{description}</p></div>;
}