/**
 * Send visitor identification data to LogRocket analytics if present
 */
export const handleVisitorDataForLogRocket = (visitorName, visitedBefore) => {
  if (!window.LogRocket) return;
  const userId = `visitor_${Date.now()}`;
  window.LogRocket.identify(userId, {
    name: visitorName,
    isReturningVisitor: visitedBefore,
    visitedAt: new Date().toISOString(),
  });
};

/**
 * Handle visitor data submit from modal
 */
export const handleVisitorData = () => {
  const visitorNameInput = document.querySelector("#visitorName");
  const welcomeModal = document.querySelector("#welcomeModal");
  const hasVisited = localStorage.getItem("hasVisited");

  const visitorName = visitorNameInput ? visitorNameInput.value.trim() || "Anonymous" : "Anonymous";
  localStorage.setItem("visitorName", visitorName);
  localStorage.setItem("hasVisited", "true");

  handleVisitorDataForLogRocket(visitorName, !!hasVisited);

  if (welcomeModal) {
    welcomeModal.classList.add("hidden");
  }
};

/**
 * Initialize welcome modal popup for first-time visitors
 */
export const initWelcomeModal = () => {
  const welcomeModal = document.querySelector("#welcomeModal");
  const visitorNameInput = document.querySelector("#visitorName");
  const continueBtn = document.querySelector("#continueBtn");
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited && welcomeModal) {
    welcomeModal.classList.remove("hidden");
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", handleVisitorData);
  }

  if (visitorNameInput) {
    visitorNameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleVisitorData();
    });
  }
};
