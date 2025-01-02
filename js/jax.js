MathJax.Hub.Config({
    menuSettings: {
        zoom: "None"
    },
    showMathMenu: false,
    jax: ["input/TeX", "output/CommonHTML"],
    extensions: ["tex2jax.js"],
    TeX: {
        extensions: ["AMSmath.js", "AMSsymbols.js"],
        equationNumbers: {
            autoNumber: "AMS"
        }
    },
    tex2jax: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]]
    }
});
