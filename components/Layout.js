import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();

  return (
    <div className="min-h-screen grid place-items-center gap-12 ">
      <header className="self-end">
        {path === "/tr" ? (
          <div className="text-xl space-y-4 font-semibold text-center max-w-screen-lg">
            <h2>Kelime Kovanı Oyununa hoş geldiniz!</h2>{" "}
            <p>
              Arı kovanındaki 7 harfle mümkün olduğunca fazla tahmin yapmaya
              çalışın. Tahminleriniz en az 3 harften oluşmalıdır. Her doğru
              tahmin, 15 saniye kazandırır. Zamanlayıcı ilk tahmininizden sonra
              başlayacak.
            </p>
            <p>Bol şans :-)</p>
          </div>
        ) : (
          <div className="text-xl font-semibold text-center space-y-4 max-w-screen-lg">
            <h2>Welcome to Spelling Bee Game!</h2>
            <p>
              Try to make as many guesses as possible using 7 letters from the
              beehive. Your guess must contain at least 3 letters. Each correct
              guess saves you 15 seconds. Timer starts after your first guess.
            </p>
            <p>Good luck :-)</p>
          </div>
        )}
      </header>
      <main className="container mx-auto max-w-screen-lg p-4 bg-gradient-to-br from-slate-500/40 via-slate-400/90 to-slate-300/60 shadow-2xl rounded-xl self-start">
        {children}
      </main>
    </div>
  );
};
export default Layout;
