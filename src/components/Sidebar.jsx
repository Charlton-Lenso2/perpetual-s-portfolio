import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight, ChevronRight, Moon, Sun } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function ThemeButton({ theme, onToggle, compact = false }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent ${compact ? "size-10" : "w-full px-3 py-2.5 text-sm"}`}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      {!compact && (
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      )}
    </button>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col justify-between border-r border-line bg-paper p-8 md:flex">
        <div>
          <Link to="/" className="text-2xl font-black tracking-tight">
            Perpetual<span className="text-accent">.</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="mt-16 flex flex-col gap-2"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-lg px-4 py-3.5 text-sm transition-colors ${
                    isActive
                      ? "bg-canvas font-medium text-accent"
                      : "text-muted hover:bg-canvas hover:text-ink"
                  }`
                }
              >
                <span>{l.label}</span>
                <ChevronRight
                  size={15}
                  className="opacity-0 transition-opacity group-hover:opacity-60 group-[.active]:opacity-100"
                />
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <ThemeButton theme={theme} onToggle={toggleTheme} />
          <Link
            to="/contact"
            className="group flex items-center justify-between rounded-lg border border-line px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Start a project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line bg-paper px-5 py-4 md:hidden">
        <Link to="/" className="text-xl font-black tracking-tight">
          Perpetual<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeButton theme={theme} onToggle={toggleTheme} compact />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[4.5rem] z-40 flex flex-col gap-2 border-b border-line bg-paper p-4 md:hidden"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-lg px-4 py-3.5 text-base ${
                    isActive ? "bg-canvas font-medium text-accent" : "text-ink"
                  }`
                }
              >
                {l.label}
                <ChevronRight
                  size={16}
                  className="opacity-0 group-[.active]:opacity-100"
                />
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
