import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant1 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  const iconVariant2 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(72, 163, 198)",
      stroke: "rgb(72, 163, 198)",
      scale: 0,
      strokeWidth: 3,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 1 920.55 921.26"
        style={{ width: "30vw", height: "30vw" }}
      >
        {/* First SVG path */}
        <motion.path
          d="M 0 0 L 0 568.75 L 75 568.75 L 75 336.719 L 185.156 336.719 A 285.939 285.939 0 0 0 240.641 331.672 Q 292.841 321.338 326.172 289.844 Q 375.781 242.969 375.781 167.188 A 187.835 187.835 0 0 0 368.211 112.573 A 147.51 147.51 0 0 0 326.172 45.703 Q 282.765 5.714 207.36 0.715 A 335.703 335.703 0 0 0 185.156 0 L 0 0 Z M 185.156 275.781 L 75 275.781 L 75 60.938 L 185.156 60.938 A 215.957 215.957 0 0 1 216.715 63.072 Q 256.72 69.001 275.391 91.406 Q 300.781 121.875 300.781 167.188 A 134.339 134.339 0 0 1 295.202 206.664 A 111.419 111.419 0 0 1 275.391 244.141 A 73.579 73.579 0 0 1 245.622 265.77 Q 232.971 271.049 216.847 273.545 A 207.858 207.858 0 0 1 185.156 275.781 Z M 183.594 306.25 L 322.656 568.75 L 406.25 568.75 L 257.813 294.922 L 183.594 306.25 Z"
          variants={iconVariant2}
          initial="hidden"
          animate="visible"
        />

        {/* Second SVG path */}
        <motion.path
          d="M 488.281 0 L 488.281 568.75 L 563.281 568.75 L 563.281 346.094 L 676.563 346.094 A 294.17 294.17 0 0 0 733.107 341.003 Q 765.795 334.594 791.172 320.118 A 152.235 152.235 0 0 0 820.703 298.242 Q 871.094 250.391 871.094 172.266 Q 871.094 94.141 820.703 47.071 Q 770.313 0 676.563 0 L 488.281 0 Z Z M 676.563 284.375 L 563.281 284.375 L 563.281 61.719 L 676.563 61.719 A 217.439 217.439 0 0 1 709.03 63.965 Q 725.684 66.488 738.792 71.845 A 77.097 77.097 0 0 1 769.531 93.555 A 113.605 113.605 0 0 1 794.998 153.843 A 150.693 150.693 0 0 1 796.094 172.266 A 137.282 137.282 0 0 1 790.257 213.078 A 114.228 114.228 0 0 1 769.531 251.758 A 77.523 77.523 0 0 1 737.973 274.34 Q 724.917 279.671 708.401 282.17 A 213.418 213.418 0 0 1 676.563 284.375 Z Z Z"
          variants={iconVariant1}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
