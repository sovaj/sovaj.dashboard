dashboard.animation('.slide', [function () {
        return {
            addClass: function (element, className, doneFn) {
                jQuery(element).slideUp(250, doneFn);
            },
            removeClass: function (element, className, doneFn) {
                jQuery(element).slideDown(250, doneFn);
            }
        };
    }])
        ;