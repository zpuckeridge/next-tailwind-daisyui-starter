import Navigation from "@/components/navigation";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </>
  );
}
