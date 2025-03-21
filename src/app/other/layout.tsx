import "./style.css";

export default function OhterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="header">Sample Web Application</h1>
      {children}
      <div className="footer">
        <hr />
        <p className="footer-content">copyright 2023 SYODA-Tuyano.</p>
      </div>
    </div>
  );
}
