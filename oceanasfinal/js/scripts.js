@media (max-width:768px) {
  .nav-menu { /* collapsed menu base */
    display: none;
    flex-direction: column;
    gap: 15px;
    background: var(--bg);
    padding: 1.2rem;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1500;
    border: 1px solid var(--border);
  }
  .nav-menu.active { display: flex; }

  /* Dark theme mobile menu */
  [data-theme="dark"] .nav-menu {
    background: #000 !important;
    border-color: #444 !important;
  }
  [data-theme="dark"] .nav-menu a {
    color: #fff !important;
  }
  [data-theme="dark"] .nav-menu a:hover {
    color: var(--oceanas-gold) !important;
  }
}



