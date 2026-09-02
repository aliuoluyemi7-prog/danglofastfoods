// ===========================================================
// DanGlo Fast Foods & Drinks — Core interaction script
// Progressive enhancement only. All menu content and all
// Call/WhatsApp/Directions links exist as real, working <a>
// tags directly in the HTML. This script never generates
// content that wouldn't otherwise be crawlable or functional
// without JavaScript -- it only adds the live open/closed
// indicator and the accordion expand/collapse behavior.
// ===========================================================

(function () {
  "use strict";

  // ---- Open/closed status ----
  // Monday-Saturday, 8:00 AM-9:00 PM. Closed all day Sunday
  // (confirmed). The static hours text in the HTML is always
  // present regardless of whether this script runs.
  function renderOpenStatus(el) {
    if (!el) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday ... 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const minutesNow = hour * 60 + minute;
    const openMinutes = 8 * 60;   // 8:00 AM
    const closeMinutes = 21 * 60; // 9:00 PM

    if (day === 0) {
      el.innerHTML = '<span class="status-dot status-dot--closed"></span>Closed today (Sunday) &middot; Opens Monday 8:00 AM';
      return;
    }

    const isOpen = minutesNow >= openMinutes && minutesNow < closeMinutes;
    if (isOpen) {
      el.innerHTML = '<span class="status-dot status-dot--open"></span>Open now &middot; Closes 9:00 PM';
    } else {
      el.innerHTML = '<span class="status-dot status-dot--closed"></span>Closed now &middot; Opens 8:00 AM';
    }
  }

  // ---- Accordion (menu item detail expand/collapse, if used) ----
  function wireAccordions() {
    document.querySelectorAll("[data-accordion-trigger]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const targetId = trigger.getAttribute("aria-controls");
        const content = document.getElementById(targetId);
        if (!content) return;
        const isOpen = content.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const statusEl = document.getElementById("open-status");
    if (statusEl) {
      renderOpenStatus(statusEl);
    }
    wireAccordions();
  });
})();
