const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid place-items-center">
      <main className="container mx-auto max-w-screen-lg grid place-items-center gap-8 p-4 bg-slate-400/90 shadow-2xl rounded-xl">
        {children}
      </main>
    </div>
  );
};
export default Layout;
