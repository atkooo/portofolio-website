import { ref, onMounted } from "vue";

const isModalOpen = ref(false);
const visitorName = ref("");

export function useVisitor() {
  const initVisitor = () => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      isModalOpen.value = true;
    }
  };

  const submitVisitor = () => {
    const name = visitorName.value.trim() || "Anonymous";
    const hasVisitedBefore = !!localStorage.getItem("hasVisited");

    localStorage.setItem("visitorName", name);
    localStorage.setItem("hasVisited", "true");

    if (window.LogRocket) {
      const userId = `visitor_${Date.now()}`;
      window.LogRocket.identify(userId, {
        name: name,
        isReturningVisitor: hasVisitedBefore,
        visitedAt: new Date().toISOString(),
      });
    }

    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    visitorName,
    initVisitor,
    submitVisitor,
  };
}
