/**
 * Navbar.jsx — Shared navigation bar used across all pages.
 *
 * On desktop (>600px): displays the logo and horizontal nav links.
 * On mobile (≤600px):  hides the links and shows a hamburger button instead.
 *                      Tapping the button opens a dropdown menu.
 *
 * Props:
 *   currentPage {string} — The id of the active page (e.g. "home", "community").
 *                          Used to highlight the correct nav link.
 *   navigate    {function} — Callback to change the page. Receives a page id string.
 */

import { useState } from 'react';
import './navbar.css';

export default function Navbar({ currentPage, navigate }) {

  // Controls whether the mobile dropdown menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // The four main navigation links
  const links = [
    { id: 'home',      label: 'Home' },
    { id: 'submit',    label: 'Submit Complaint' },
    { id: 'community', label: 'Community Analysis' },
    { id: 'about',     label: 'About' },
  ];

  // Map sub-pages to their parent nav link for correct active highlighting:
  //   suggestion + confirmation → highlight "Submit Complaint"
  //   complaint-details         → highlight "Community Analysis"
  const activeId =
    ['suggestion', 'confirmation'].includes(currentPage) ? 'submit' :
    currentPage === 'complaint-details' ? 'community' :
    currentPage;

  /**
   * Navigates to the given page and closes the mobile menu.
   * Called when the user clicks any navigation link.
   */
  function handleNav(pageId) {
    if (navigate) navigate(pageId);
    setMenuOpen(false); // Always close the menu after navigation
  }

  return (
    <>
      <nav className="navbar">

        {/* VoiCee Logo — clicking goes to the home page */}
        <button
          className="navbar-logo"
          onClick={() => handleNav('home')}
          aria-label="Go to Home"
        >
          <img
            className="navbar-logo-image"
            src="/voicee-logo.png"
            alt="VoiCee"
          />
        </button>

        {/* Desktop navigation links — hidden on mobile via CSS */}
        <div className="navbar-links">
          {links.map((link) => (
            <button
              key={link.id}
              className={`navbar-link${activeId === link.id ? ' active' : ''}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
              {/* Red underline indicator for the active page */}
              {activeId === link.id && <span className="navbar-indicator" />}
            </button>
          ))}
        </div>

        {/* Hamburger button — only visible on mobile (≤600px) via CSS.
            Animates into an × when the menu is open. */}
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

      </nav>

      {/* Mobile dropdown menu — slides down when menuOpen is true.
          Rendered outside the nav to avoid overflow:hidden clipping. */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          {links.map((link) => (
            <button
              key={link.id}
              className={`navbar-mobile-link${activeId === link.id ? ' active' : ''}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop overlay — tapping outside the menu closes it */}
      {menuOpen && (
        <div
          className="navbar-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
