$(document).ready(function(){
    var btn = $("#theme-toggle-button");
    var body = $("body");
    // 顶栏logo
    var logo_light = $("#logo-light");
    var logo_dark = $("#logo-dark");
    // 代码高亮
    var hl_light = $("#highlight-css-light");
    var hl_dark = $("#highlight-css-dark");

    // 主题样式切换函数
    function updateThemeStyles(theme) {
        var links = $(".theme-link");
        var buttons = $(".theme-button");
        // 设置 html class
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        // 设置 body 属性
        body.attr('data-bs-theme', theme);
        if (theme === 'light') {
            btn.html('<i class="bi bi-sun"></i>');
            logo_dark.addClass('d-none');
            logo_light.removeClass('d-none');
            hl_light.prop('disabled', false);
            hl_dark.prop('disabled', true);
            links.addClass('link-dark').removeClass('link-light');
            buttons.addClass('btn-outline-dark').removeClass('btn-outline-light');
        } else {
            btn.html('<i class="bi bi-moon"></i>');
            logo_light.addClass('d-none');
            logo_dark.removeClass('d-none');
            hl_light.prop('disabled', true);
            hl_dark.prop('disabled', false);
            links.addClass('link-light').removeClass('link-dark');
            buttons.addClass('btn-outline-light').removeClass('btn-outline-dark');
        }
    }

    // 初始化：读取localStorage
    var savedTheme = localStorage.getItem('bs-theme');
    var theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
        theme = savedTheme;
    } else {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    updateThemeStyles(theme);

    btn.click(function(){
        var currentTheme = body.attr('data-bs-theme');
        var newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('bs-theme', newTheme);
        updateThemeStyles(newTheme);
    });

    // 供外部调用：动态添加元素后手动刷新主题样式
    window.updateThemeStyles = updateThemeStyles;
});