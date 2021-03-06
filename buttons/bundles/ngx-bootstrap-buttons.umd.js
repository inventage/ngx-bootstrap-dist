(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/buttons', ['exports', '@angular/forms', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].buttons = {}),global.ng.forms,global.ng.core));
}(this, (function (exports,forms,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: config: activeClass - Class to apply to the checked buttons
    /** @type {?} */
    var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonCheckboxDirective; }),
        multi: true
    };
    /**
     * Add checkbox functionality to any element
     */
    var ButtonCheckboxDirective = /** @class */ (function () {
        function ButtonCheckboxDirective() {
            /**
             * Truthy value, will be set to ngModel
             */
            this.btnCheckboxTrue = true;
            /**
             * Falsy value, will be set to ngModel
             */
            this.btnCheckboxFalse = false;
            this.state = false;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        // view -> model
        // view -> model
        /**
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.onClick =
            // view -> model
            /**
             * @return {?}
             */
            function () {
                if (this.isDisabled) {
                    return;
                }
                this.toggle(!this.state);
                this.onChange(this.value);
            };
        /**
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.toggle(this.trueValue === this.value);
            };
        Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return typeof this.btnCheckboxTrue !== 'undefined'
                    ? this.btnCheckboxTrue
                    : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return typeof this.btnCheckboxFalse !== 'undefined'
                    ? this.btnCheckboxFalse
                    : false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} state
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.toggle = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
                this.value = this.state ? this.trueValue : this.falseValue;
            };
        // ControlValueAccessor
        // model -> view
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.writeValue =
            // ControlValueAccessor
            // model -> view
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.state = this.trueValue === value;
                this.value = value ? this.trueValue : this.falseValue;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.isDisabled = isDisabled;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        ButtonCheckboxDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[btnCheckbox]',
                        providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        ButtonCheckboxDirective.propDecorators = {
            btnCheckboxTrue: [{ type: core.Input }],
            btnCheckboxFalse: [{ type: core.Input }],
            state: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return ButtonCheckboxDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonRadioGroupDirective; }),
        multi: true
    };
    /**
     * A group of radio buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioGroupDirective = /** @class */ (function () {
        function ButtonRadioGroupDirective(cdr) {
            this.cdr = cdr;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioGroupDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._value = value;
                this.cdr.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioGroupDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioGroupDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        ButtonRadioGroupDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[btnRadioGroup]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioGroupDirective.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        return ButtonRadioGroupDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonRadioDirective; }),
        multi: true
    };
    /**
     * Create radio buttons or groups of buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioDirective = /** @class */ (function () {
        function ButtonRadioDirective(el, cdr, group, renderer) {
            this.el = el;
            this.cdr = cdr;
            this.group = group;
            this.renderer = renderer;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        Object.defineProperty(ButtonRadioDirective.prototype, "value", {
            /** Current value of radio component or group */
            get: /**
             * Current value of radio component or group
             * @return {?}
             */ function () {
                return this.group ? this.group.value : this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this.group) {
                    this.group.value = value;
                    return;
                }
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
            /** If `true` ??? radio button is disabled */
            get: /**
             * If `true` ??? radio button is disabled
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                this._disabled = disabled;
                this.setDisabledState(disabled);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.btnRadio === this.value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
                    return;
                }
                this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
                this._onChange(this.value);
            };
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.uncheckable = typeof this.uncheckable !== 'undefined';
            };
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this.onTouched();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioDirective.prototype._onChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.group) {
                    this.group.onTouched();
                    this.group.onChange(value);
                    return;
                }
                this.onTouched();
                this.onChange(value);
            };
        // ControlValueAccessor
        // model -> view
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioDirective.prototype.writeValue =
            // ControlValueAccessor
            // model -> view
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.value = value;
                this.cdr.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} disabled
         * @return {?}
         */
        ButtonRadioDirective.prototype.setDisabledState = /**
         * @param {?} disabled
         * @return {?}
         */
            function (disabled) {
                if (disabled) {
                    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
                    return;
                }
                this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
            };
        ButtonRadioDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[btnRadio]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: ButtonRadioGroupDirective, decorators: [{ type: core.Optional }] },
                { type: core.Renderer2 }
            ];
        };
        ButtonRadioDirective.propDecorators = {
            btnRadio: [{ type: core.Input }],
            uncheckable: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            isActive: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return ButtonRadioDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonsModule = /** @class */ (function () {
        function ButtonsModule() {
        }
        /**
         * @return {?}
         */
        ButtonsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ButtonsModule, providers: [] };
            };
        ButtonsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                        exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                    },] }
        ];
        return ButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
    exports.ButtonRadioGroupDirective = ButtonRadioGroupDirective;
    exports.ButtonRadioDirective = ButtonRadioDirective;
    exports.ButtonsModule = ButtonsModule;
    exports.??a = CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.??b = RADIO_CONTROL_VALUE_ACCESSOR;
    exports.??c = RADIO_CONTROL_VALUE_ACCESSOR$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-bootstrap-buttons.umd.js.map