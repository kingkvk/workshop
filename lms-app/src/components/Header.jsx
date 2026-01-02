import { Link } from "react-router-dom";

const navLinks = [
  { name: 'Courses', href: '#courses' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="bg-slate-900 text-white flex items-center justify-between px-6 py-3">
      <div className="text-xl font-bold">MyLMS</div>
      <nav className="flex items-center space-x-4 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-slate-200 hover:text-white"
          >
            {link.name}
          </a>
        ))}
        <Link
          to="/auth"
          className="ml-2 border border-blue-500 text-blue-300 hover:text-white hover:bg-blue-500 rounded px-3 py-1"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;