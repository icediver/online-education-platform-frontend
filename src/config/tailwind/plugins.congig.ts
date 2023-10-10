import plugin from "tailwindcss/plugin";

const primary = "#e30b13";

export const plugins = [
  // require("@tailwindcss/forms"),
  // require("@tailwindcss/aspect-ratio"),
  plugin(({ addComponents, theme, addUtilities, addBase }) => {
    addComponents({
      ".btn-primary": {
        backgroundColor: primary,
        color: "#fff",
        borderRadius: "0.65rem",
        transition: "background-color .3s ease-in-out",
        "&:hover": {
          backgroundColor: "#ff0009",
        },
      },

      ".text-link": {
        textUnderlineOffset: "4",
        color: "rgba(255, 255, 255, .9)",
        transition: "text-decoration-color .3s ease-in-out",
        textDecorationLine: "underline",
        textDecorationColor: "rgba(255, 255, 255, 0.2)",
        "&:hover": {
          textDecorationColor: "rgba(255, 255, 255, 0.9)",
        },
      },

      ".air-block": {
        borderRadius: theme("borderRadius.layout"),
        backgroundColor: theme("colors.gray.950"),
        color: theme("colors.white"),
        boxShadow: theme("boxShadow.lg"),
      },
    }),
      addUtilities({
        ".text-shadow": {
          textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
        },

        ".outline-border-none": {
          outline: "none",
          border: "none",
        },

        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },

        ".image-like-bg": {
          objectPosition: "center",
          objectFit: "cover",
          pointerEvents: "none",
        },
        ".scrolbar-hidden": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
  }),
];
