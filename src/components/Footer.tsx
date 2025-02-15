const Footer = () => {
  return (
    <footer className="py-8 bg-[var(--color-pine-dark)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-[var(--color-text-secondary)]">
            © {new Date().getFullYear()} Gowri Rajagopal. All rights reserved.
          </p>
          <p className="text-[var(--color-text-secondary)] mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}; 