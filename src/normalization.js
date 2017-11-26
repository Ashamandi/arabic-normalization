
(function (window, undefined) {
    'use strict';

    var normalizeArabicChars = function (s) {

        function filter(c) {
            switch (c) {
            // ALEF Chars
            case '\u0625':
            case '\u0623':
            case '\u0622':
            case '\u0675':
            case '\u0673':
            case '\u0672':
            case '\u0671':
            case '\u0670':
            case '\u0674':
                return '\u0627';
            // TAAA MARBOTA Chars
            case '\u06c3':
            case '\u06c2':
            case '\u06c0':
            case '\u06c1':
            case '\u0647':
                return '\u0629';
            // YAAA Chars
            case '\u0649':
            case '\u064a':
            case '\u0678':
            case '\u064a':
                return '\u0620';
            
            case '\u0626':
            	return '\u0620\u0621';

            default:
                return c;
            }
        }

        var normalized = '', i, l;
        for (i = 0, l = s.length; i < l; i = i + 1) {
            normalized = normalized + filter(s.charAt(i));
        }
        return normalized;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = normalizeArabicChars;
    }
    else {
        window.normalizeArabicChars = normalizeArabicChars;
    }
}(this));
