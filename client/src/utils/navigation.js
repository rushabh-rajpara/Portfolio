const scrollToHashTarget = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const navigateWithinApp = (pathWithHash) => {
  const url = new URL(pathWithHash, window.location.origin);
  const nextPath = `${url.pathname}${url.search}${url.hash}`;

  window.history.pushState({}, "", nextPath);
  window.dispatchEvent(new PopStateEvent("popstate"));

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      scrollToHashTarget(url.hash);
    });
  });
};

