import SiteNavigation from './SiteNavigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNavigation />
      <main>{children}</main>
    </>
  );
}
