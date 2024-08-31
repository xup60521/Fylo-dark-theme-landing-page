/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_intro_email_bg: "hsl(217, 28%, 15%)",
                c_main_bg: "hsl(218, 28%, 13%)",
                c_footer_bg: "hsl(216, 53%, 9%)",
                c_testimonials_bg: "hsl(219, 30%, 18%)",
                c_btn_bg_g_1: "hsl(176, 68%, 64%)",
                c_btn_bg_g_2: "hsl(198, 60%, 50%)",
                c_error_red: "hsl(0, 100%, 63%)"
            },
            fontFamily: {
                paragraph_sans: ["Open Sans", "sans-serif"],
                heading_btn_nav: ["Raleway", "system-ui"]
            }
        },
    },
    plugins: [],
}

