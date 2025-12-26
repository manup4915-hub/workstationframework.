/* =========================================================
   TechNova Inc. — Website interactions
   - Mobile nav
   - Scroll progress
   - Accordion
   - Print to PDF button
   ========================================================= */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Footer year + "Last updated"
  const year = new Date().getFullYear();
  const lastUpdated = new Date(document.lastModified);

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(year);

  const updatedEl = $("#lastUpdated");
  if (updatedEl) {
    updatedEl.textContent = lastUpdated.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }

  // Scroll progress bar
  const bar = $("#progressBar");
  const onScroll = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (bar) bar.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");

  const setNavExpanded = (open) => {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navMenu.classList.toggle("is-open", open);
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("is-open");
      setNavExpanded(!isOpen);
    });

    // close on nav click (mobile)
    $$("#navMenu a").forEach((a) => {
      a.addEventListener("click", () => setNavExpanded(false));
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      if (!navMenu.classList.contains("is-open")) return;
      const target = e.target;
      const clickedInside = navMenu.contains(target) || navToggle.contains(target);
      if (!clickedInside) setNavExpanded(false);
    });
  }

  // Accordion behavior
  const accButtons = $$(".acc");
  accButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-acc");
      const panel = id ? document.getElementById(id) : null;
      const expanded = btn.getAttribute("aria-expanded") === "true";

      // collapse all
      accButtons.forEach((b) => b.setAttribute("aria-expanded", "false"));
      $$(".acc__panel").forEach((p) => (p.style.display = "none"));
      $$(".acc__icon").forEach((i) => (i.textContent = "+"));

      // toggle current
      if (!expanded && panel) {
        btn.setAttribute("aria-expanded", "true");
        panel.style.display = "block";
        const icon = btn.querySelector(".acc__icon");
        if (icon) icon.textContent = "−";
      }
    });
  });

  // Print button
  const printBtn = $("#printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
})();
