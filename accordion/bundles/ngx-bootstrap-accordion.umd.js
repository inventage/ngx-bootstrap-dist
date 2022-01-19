(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-bootstrap/utils'), require('@angular/common'), require('@angular/core'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/accordion', ['exports', 'ngx-bootstrap/utils', '@angular/common', '@angular/core', 'ngx-bootstrap/collapse'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].accordion = {}),global.utils,global.ng.common,global.ng.core,global.collapse));
}(this, (function (exports,utils,common,core,collapse) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Configuration service, provides default values for the AccordionComponent.
     */
    var AccordionConfig = /** @class */ (function () {
        function AccordionConfig() {
            /**
             * Whether the other panels should be closed when a panel is opened
             */
            this.closeOthers = false;
            /**
             * turn on/off animation
             */
            this.isAnimated = false;
        }
        AccordionConfig.decorators = [
            { type: core.Injectable }
        ];
        return AccordionConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Displays collapsible content panels for presenting information in a limited amount of space.
     */
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent(config) {
            /**
             * turn on/off animation
             */
            this.isAnimated = false;
            this.groups = [];
            Object.assign(this, config);
        }
        /**
         * @param {?} openGroup
         * @return {?}
         */
        AccordionComponent.prototype.closeOtherPanels = /**
         * @param {?} openGroup
         * @return {?}
         */
            function (openGroup) {
                if (!this.closeOthers) {
                    return;
                }
                this.groups.forEach(function (group) {
                    if (group !== openGroup) {
                        group.isOpen = false;
                    }
                });
            };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.addGroup = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                group.isAnimated = this.isAnimated;
                this.groups.push(group);
            };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.removeGroup = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                /** @type {?} */
                var index = this.groups.indexOf(group);
                if (index !== -1) {
                    this.groups.splice(index, 1);
                }
            };
        AccordionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accordion',
                        template: "<ng-content></ng-content>",
                        host: {
                            '[attr.aria-multiselectable]': 'closeOthers',
                            role: 'tablist',
                            class: 'panel-group',
                            style: 'display: block'
                        }
                    }] }
        ];
        /** @nocollapse */
        AccordionComponent.ctorParameters = function () {
            return [
                { type: AccordionConfig }
            ];
        };
        AccordionComponent.propDecorators = {
            isAnimated: [{ type: core.Input }],
            closeOthers: [{ type: core.Input }]
        };
        return AccordionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * ### Accordion heading
     * Instead of using `heading` attribute on the `accordion-group`, you can use
     * an `accordion-heading` attribute on `any` element inside of a group that
     * will be used as group's header template.
     */
    var AccordionPanelComponent = /** @class */ (function () {
        function AccordionPanelComponent(accordion) {
            /**
             * turn on/off animation
             */
            this.isAnimated = false;
            /**
             * Emits when the opened state changes
             */
            this.isOpenChange = new core.EventEmitter();
            this._isOpen = false;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
            // Questionable, maybe .panel-open should be on child div.panel element?
            /** Is accordion group open or closed. This property supports two-way binding */
            get: 
            // Questionable, maybe .panel-open should be on child div.panel element?
            /**
             * Is accordion group open or closed. This property supports two-way binding
             * @return {?}
             */
            function () {
                return this._isOpen;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                if (value !== this.isOpen) {
                    if (value) {
                        this.accordion.closeOtherPanels(this);
                    }
                    this._isOpen = value;
                    Promise.resolve(null).then(function () {
                        _this.isOpenChange.emit(value);
                    })
                        .catch(function (error) {
                        /* tslint:disable: no-console */
                        console.log(error);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AccordionPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.panelClass = this.panelClass || 'panel-default';
                this.accordion.addGroup(this);
            };
        /**
         * @return {?}
         */
        AccordionPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.accordion.removeGroup(this);
            };
        /**
         * @return {?}
         */
        AccordionPanelComponent.prototype.toggleOpen = /**
         * @return {?}
         */
            function () {
                if (!this.isDisabled) {
                    this.isOpen = !this.isOpen;
                }
            };
        AccordionPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accordion-group, accordion-panel',
                        template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\"\n       (click)=\"toggleOpen()\">\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\"\n           [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                        host: {
                            class: 'panel',
                            style: 'display: block'
                        }
                    }] }
        ];
        /** @nocollapse */
        AccordionPanelComponent.ctorParameters = function () {
            return [
                { type: AccordionComponent, decorators: [{ type: core.Inject, args: [AccordionComponent,] }] }
            ];
        };
        AccordionPanelComponent.propDecorators = {
            heading: [{ type: core.Input }],
            panelClass: [{ type: core.Input }],
            isDisabled: [{ type: core.Input }],
            isOpenChange: [{ type: core.Output }],
            isOpen: [{ type: core.HostBinding, args: ['class.panel-open',] }, { type: core.Input }]
        };
        return AccordionPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        /**
         * @return {?}
         */
        AccordionModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: AccordionModule, providers: [AccordionConfig] };
            };
        AccordionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, collapse.CollapseModule],
                        declarations: [AccordionComponent, AccordionPanelComponent],
                        exports: [AccordionComponent, AccordionPanelComponent]
                    },] }
        ];
        return AccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AccordionPanelComponent = AccordionPanelComponent;
    exports.AccordionComponent = AccordionComponent;
    exports.AccordionModule = AccordionModule;
    exports.AccordionConfig = AccordionConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-bootstrap-accordion.umd.js.map