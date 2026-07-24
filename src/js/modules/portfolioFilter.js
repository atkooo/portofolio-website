/**
 * Initialize category filtering logic for projects grid
 */
export const initPortfolioFilter = () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll("#portfolio-grid > div");

  if (!filterBtns.length || !portfolioItems.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all filter buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
          item.style.display = "block";
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
};
