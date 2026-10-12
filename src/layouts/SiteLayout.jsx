import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function SiteLayout({ children }) {
  return <><Header /><main className="site-main">{children}</main><Footer /></>;
}