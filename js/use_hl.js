function removePrefix(str, prefix) {
    if (str.startsWith(prefix)) {
        return str.replace(new RegExp('^' + prefix), '');
    }
    return str;
}

$(document).ready(function () {
    hljs.highlightAll();
    $('pre > code').each(function () {
        // 查找语言（以md中指定的为主，没有则设置为hljs识别结果）
        var language = "code", curLanguage = "code";
        var classes = $(this).attr('class').split(/\s+/);
        $.each(classes, function (index, className) {
            if (className.startsWith('lang-')) {
                language = removePrefix(className, 'lang-');
            }
            if (className.startsWith('language-')) {
                curLanguage = removePrefix(className, 'language-');
            }
        });

        if (language == "code") {
            language = curLanguage;
        }

        $(this).addClass('codeSnippet rounded bg-light-subtle');
        $(this).wrap('<div class="p-1 border rounded"></div>')
        $(this).before('<div class="mb-1 d-none d-md-flex align-items-center"><small class="ms-2 font-monospace text-muted text-uppercase">' + language + '</small><div class="d-flex ms-auto"><button type="button" class="btn btn-sm btn-link copyButton"><i class="bi bi-clipboard"></i></button></div>');
    });
});

// 代码复制按钮
$(document).ready(function () {
    $('.copyButton').click(function () {
        var codeContent = $(this).parent().parent().next('.codeSnippet').text();
        navigator.clipboard.writeText(codeContent)
            .then(function () {
                var btn = (document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('copyButton'))
                    ? document.activeElement
                    : document.querySelector('.copyButton:focus') || document.querySelector('.copyButton');
                if (btn) {
                    var pop = new bootstrap.Popover(btn, { content: 'Copied!', trigger: 'manual', placement: 'top' });
                    pop.show();
                    setTimeout(function () { pop.hide(); pop.dispose(); }, 1500);
                }
            })
            .catch(function (err) {
                console.error('Copy failed: ', err);
            });
    });
});