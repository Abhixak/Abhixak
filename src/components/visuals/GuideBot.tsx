"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type SectionMessage = {
  id: string;
  text: string;
};

const homeMessages: SectionMessage[] = [
  {
    id: "hero",
    text: "Hi, I am Abhi's bot. I will guide you through each section.",
  },
  {
    id: "about",
    text: "Here is something about Abhishek.",
  },
  {
    id: "skills",
    text: "These are Abhishek's core tools and technologies.",
  },
  {
    id: "projects",
    text: "These project previews are live screenshots via the ScreenshotOne API.",
  },
  {
    id: "process",
    text: "This is the process Abhishek follows to build products.",
  },
  {
    id: "service-areas",
    text: "These are the services Abhishek delivers end-to-end.",
  },
  {
    id: "education",
    text: "Here is Abhishek's academic background.",
  },
  {
    id: "experience",
    text: "This is Abhishek's professional journey so far.",
  },
  {
    id: "faq",
    text: "Quick answers to common questions about Abhishek's work.",
  },
  {
    id: "contact",
    text: "Want to build something with Abhishek? This is the place to reach out.",
  },
];

const pageMessages: Record<string, string> = {
  "/services": "A focused breakdown of the services Abhishek offers.",
  "/thank-you": "Thanks for reaching out. Abhishek will reply with next steps soon.",
};

export function GuideBot() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("hero");
  const [hideBot, setHideBot] = useState(false);
  const [userHidden, setUserHidden] = useState(false);
  const [mobileScrollHidden, setMobileScrollHidden] = useState(false);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    ratiosRef.current.clear();

    const ids = homeMessages.map((message) => message.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!elements.length) {
      return;
    }

    const pickVisibleSection = () => {
      const viewportHeight = window.innerHeight || 0;
      let bestId = elements[0].id;
      let bestRatio = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const ratio = rect.height > 0 ? visible / rect.height : 0;
        const distance = Math.abs(rect.top);

        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = element.id;
          bestDistance = distance;
        } else if (ratio === bestRatio && distance < bestDistance) {
          bestId = element.id;
          bestDistance = distance;
        }
      });

      setActiveId(bestId);
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) {
        return;
      }
      raf = window.requestAnimationFrame(() => {
        pickVisibleSection();
        raf = 0;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const [nextId] =
          [...ratiosRef.current.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
        if (nextId) {
          setActiveId(nextId);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
      },
    );

    elements.forEach((element) => observer.observe(element));

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveId(hash);
      } else {
        pickVisibleSection();
      }
    };

    window.addEventListener("hashchange", syncHash);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    syncHash();

    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, [pathname]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBot(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");

    const update = () => {
      if (!mq.matches) {
        setMobileScrollHidden(false);
        return;
      }
      if (pathname !== "/") {
        setMobileScrollHidden(true);
        return;
      }
      setMobileScrollHidden(window.scrollY < 110);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mq.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
    };
  }, [pathname]);

  const message = useMemo(() => {
    if (pathname !== "/") {
      return (
        pageMessages[pathname.replace(/\/$/, "")] ?? "Exploring the craft behind this page."
      );
    }
    return homeMessages.find((entry) => entry.id === activeId)?.text ?? homeMessages[0].text;
  }, [activeId, pathname]);

  const isHidden = hideBot || userHidden || mobileScrollHidden;

  return (
    <>
      <AnimatePresence>
        {!isHidden ? (
          <motion.div
            key="guide-bot"
            className="guide-bot"
            aria-live="polite"
            role="status"
            initial={{ opacity: 0, x: 48, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 64, y: 6, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="guide-bot__bubble">
              <button
                type="button"
                className="guide-bot__close"
                aria-label="Hide guide bot"
                onClick={() => setUserHidden(true)}
              >
                ×
              </button>
              <AnimatePresence mode="wait">
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {message}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="guide-bot__unit" aria-hidden="true">
              <div className="guide-bot__head">
                <span className="guide-bot__eye" />
                <span className="guide-bot__eye" />
                <span className="guide-bot__mouth" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {userHidden && !hideBot ? (
          <motion.button
            key="guide-bot-tab"
            type="button"
            className="guide-bot__tab"
            aria-label="Show guide bot"
            onClick={() => setUserHidden(false)}
            initial={{ opacity: 0, x: 26, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 26, y: 6, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            ‹
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
