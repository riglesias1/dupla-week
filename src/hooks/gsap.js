import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        delay: delay,
        ease: Expo.easeInOut,
      }
    );
  }, [arr, delay]);
};

export const useGsapUpward = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: Expo.easeInOut,
      }
    );
  }, [item, delay]);
};

export const useGsapAppear = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, delay, trig]);
}

export const useGsapShutterUnveil = (item, delay = 0, trig = null) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "144%",
        marginLeft: "-2.12%",
      },
      {
        height: 0,
        duration: 2,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig?.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, delay, trig]);
};

export const useGsapLeftWalking = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
      },
      {
        x: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [item]);
};

export const useGsapContactLeftShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapContactRightShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.2,
        delay: 0.2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapWorkImg = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: 0,
        x: 0,
      },
      {
        width: "100%",
        x: "30%",
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item]);
};

export const useGsapWorkTitle = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "30%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapWorkCategory = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapFooterHeadline = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "-150%",
      },
      {
        y: -20,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapNotFoundHeadline = (item, vw = "-100vw") => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: vw,
      },
      {
        x: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
      }
    );
  }, [item, vw]);
};

export const useGsapNotFoundImg = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        scale: 0,
        borderRadius: "50%",
      },
      {
        scale: 1,
        borderRadius: 0,
        duration: 4,
        delay: 1,
        ease: "elastic",
      }
    );
  }, [item]);
};

export const useGsapPhotoScroller = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        delay: 2.2,
        duration: 2,
        stagger: 0.2,
        ease: Expo.easeInOut,
      }
    );
  }, [arr]);
};

export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-30%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [arr, trig]);
};
