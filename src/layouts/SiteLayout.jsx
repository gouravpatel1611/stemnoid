import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function SiteLayout({ children }) {
  const { pathname } = useLocation();
  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/');
  if (isAdminRoute) return <main className="admin-site-main">{children}</main>;
  return <><Header /><main className="site-main">{children}</main><Footer /></>;
}
