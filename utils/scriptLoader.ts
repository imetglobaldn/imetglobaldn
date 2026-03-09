// Utility to load scripts efficiently
export const loadScript = (src: string, async = true, defer = true): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.src = src;
      script.async = async;
      script.defer = defer;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      
      document.body.appendChild(script);
    } catch (error) {
      reject(error);
    }
  });
};

// Load multiple scripts in parallel
export const loadScripts = async (scripts: string[]): Promise<void> => {
  await Promise.all(scripts.map(src => loadScript(src)));
};

// Load scripts with priority
export const loadScriptsPrioritized = async (
  criticalScripts: string[],
  nonCriticalScripts: string[]
): Promise<void> => {
  // Load critical scripts first
  await loadScripts(criticalScripts);
  
  // Load non-critical scripts after a delay
  setTimeout(() => {
    loadScripts(nonCriticalScripts);
  }, 2000);
};
