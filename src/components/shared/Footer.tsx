export const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-800 text-center text-sm space-y-3.5">
      <p>&copy; 2025 Short-Flix Inc. All rights reserved.</p>

      <div className="flex justify-center gap-5">
        <p className="hover:underline underline-offset-4 text-white/90">
          Privacy
        </p>

        <p className="hover:underline underline-offset-4 text-white/90">
          Terms
        </p>

        <p className="hover:underline underline-offset-4 text-white/90">
          Help Center
        </p>
      </div>
    </footer>
  );
};
