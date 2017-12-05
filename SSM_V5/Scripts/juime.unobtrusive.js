/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="juime.unobtrusive.d.ts" />
var Juime;
(function (Juime) {
    function Accordion(id) {
        return new Juime.Controls.Accordion(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Accordion = Accordion;

    function AutoComplete(id) {
        return new Juime.Controls.AutoComplete(undefined, $('#' + id).data('control-instance'));
    }
    Juime.AutoComplete = AutoComplete;

    function Button(id) {
        return new Juime.Controls.Button(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Button = Button;

    function DatePicker(id) {
        return new Juime.Controls.DatePicker(undefined, $('#' + id).data('control-instance'));
    }
    Juime.DatePicker = DatePicker;

    function Dialog(id) {
        return new Juime.Controls.Dialog(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Dialog = Dialog;

    function Menu(id) {
        return new Juime.Controls.Menu(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Menu = Menu;

    function ProgressBar(id) {
        return new Juime.Controls.ProgressBar(undefined, $('#' + id).data('control-instance'));
    }
    Juime.ProgressBar = ProgressBar;

    function RadioButton(id) {
        return new Juime.Controls.Button(undefined, $('#' + id).data('control-instance'));
    }
    Juime.RadioButton = RadioButton;

    function Slider(id) {
        return new Juime.Controls.Slider(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Slider = Slider;

    function Spinner(id) {
        return new Juime.Controls.Spinner(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Spinner = Spinner;

    function SwitchButton(id) {
        return new Juime.Controls.Button(undefined, $('#' + id).data('control-instance'));
    }
    Juime.SwitchButton = SwitchButton;

    function Tab(id) {
        return new Juime.Controls.Tab(undefined, $('#' + id).data('control-instance'));
    }
    Juime.Tab = Tab;

    function GridView(id) {
        return new Juime.Controls.GridView(undefined, $('#' + id).data('control-instance'));
    }
    Juime.GridView = GridView;

    function Intializer() {
        Juime.Controls.Accordion.init();
        Juime.Controls.AutoComplete.init();
        Juime.Controls.Button.init();
        Juime.Controls.DatePicker.init();
        Juime.Controls.Dialog.init();
        Juime.Controls.Menu.init();
        Juime.Controls.ProgressBar.init();
        Juime.Controls.Slider.init();
        Juime.Controls.Spinner.init();
        Juime.Controls.Tab.init();
        Juime.Controls.GridView.init();

        //creates buttonset control
        $("div[data-control-type='buttonset']").each(function () {
            //gets the attributes
            var attributes = $(this).data('control-options');

            //creates button
            $(this).buttonset(attributes);
        });
    }
    Juime.Intializer = Intializer;
})(Juime || (Juime = {}));

var Juime;
(function (Juime) {
    (function (Enum) {
        (function (Collision) {
            Collision[Collision["flip"] = 0] = "flip";
            Collision[Collision["fit"] = 1] = "fit";
            Collision[Collision["flipfit"] = 2] = "flipfit";
            Collision[Collision["none"] = 3] = "none";
        })(Enum.Collision || (Enum.Collision = {}));
        var Collision = Enum.Collision;

        (function (HeightStyle) {
            HeightStyle[HeightStyle["auto"] = 0] = "auto";
            HeightStyle[HeightStyle["fill"] = 1] = "fill";
            HeightStyle[HeightStyle["content"] = 2] = "content";
        })(Enum.HeightStyle || (Enum.HeightStyle = {}));
        var HeightStyle = Enum.HeightStyle;
        ;

        (function (Easing) {
            Easing[Easing["linear"] = 0] = "linear";
            Easing[Easing["swing"] = 1] = "swing";
            Easing[Easing["easeInQuad"] = 2] = "easeInQuad";
            Easing[Easing["easeOutQuad"] = 3] = "easeOutQuad";
            Easing[Easing["easeInOutQuad"] = 4] = "easeInOutQuad";
            Easing[Easing["easeInCubic"] = 5] = "easeInCubic";
            Easing[Easing["easeOutCubic"] = 6] = "easeOutCubic";
            Easing[Easing["easeInOutCubic"] = 7] = "easeInOutCubic";
            Easing[Easing["easeInQuart"] = 8] = "easeInQuart";
            Easing[Easing["easeOutQuart"] = 9] = "easeOutQuart";
            Easing[Easing["easeInOutQuart"] = 10] = "easeInOutQuart";
            Easing[Easing["easeInQuint"] = 11] = "easeInQuint";
            Easing[Easing["easeOutQuint"] = 12] = "easeOutQuint";
            Easing[Easing["easeInOutQuint"] = 13] = "easeInOutQuint";
            Easing[Easing["easeInExpo"] = 14] = "easeInExpo";
            Easing[Easing["easeOutExpo"] = 15] = "easeOutExpo";
            Easing[Easing["easeInOutExpo"] = 16] = "easeInOutExpo";
            Easing[Easing["easeInSine"] = 17] = "easeInSine";
            Easing[Easing["easeOutSine"] = 18] = "easeOutSine";
            Easing[Easing["easeInOutSine"] = 19] = "easeInOutSine";
            Easing[Easing["easeInCirc"] = 20] = "easeInCirc";
            Easing[Easing["easeOutCirc"] = 21] = "easeOutCirc";
            Easing[Easing["easeInOutCirc"] = 22] = "easeInOutCirc";
            Easing[Easing["easeInElastic"] = 23] = "easeInElastic";
            Easing[Easing["easeOutElastic"] = 24] = "easeOutElastic";
            Easing[Easing["easeInOutElastic"] = 25] = "easeInOutElastic";
            Easing[Easing["easeInBack"] = 26] = "easeInBack";
            Easing[Easing["easeOutBack"] = 27] = "easeOutBack";
            Easing[Easing["easeInOutBack"] = 28] = "easeInOutBack";
            Easing[Easing["easeInBounce"] = 29] = "easeInBounce";
            Easing[Easing["easeOutBounce"] = 30] = "easeOutBounce";
            Easing[Easing["easeInOutBounce"] = 31] = "easeInOutBounce";
        })(Enum.Easing || (Enum.Easing = {}));
        var Easing = Enum.Easing;
        ;

        (function (Effect) {
            Effect[Effect["blind"] = 0] = "blind";
            Effect[Effect["bounce"] = 1] = "bounce";
            Effect[Effect["clip"] = 2] = "clip";
            Effect[Effect["drop"] = 3] = "drop";
            Effect[Effect["explode"] = 4] = "explode";
            Effect[Effect["fade"] = 5] = "fade";
            Effect[Effect["fold"] = 6] = "fold";
            Effect[Effect["highlight"] = 7] = "highlight";
            Effect[Effect["puff"] = 8] = "puff";
            Effect[Effect["pulsate"] = 9] = "pulsate";
            Effect[Effect["scale"] = 10] = "scale";
            Effect[Effect["shake"] = 11] = "shake";
            Effect[Effect["size"] = 12] = "size";
            Effect[Effect["slider"] = 13] = "slider";
            Effect[Effect["transfer"] = 14] = "transfer";
        })(Enum.Effect || (Enum.Effect = {}));
        var Effect = Enum.Effect;

        (function (EventType) {
            EventType[EventType["click"] = 1 << 0] = "click";
            EventType[EventType["mouseover"] = 1 << 1] = "mouseover";
            EventType[EventType["mouseout"] = 1 << 2] = "mouseout";
            EventType[EventType["dblclick"] = 1 << 3] = "dblclick";
            EventType[EventType["focus"] = 1 << 4] = "focus";
            EventType[EventType["keydown"] = 1 << 5] = "keydown";
            EventType[EventType["keypress"] = 1 << 6] = "keypress";
            EventType[EventType["keyup"] = 1 << 7] = "keyup";
            EventType[EventType["mousedown"] = 1 << 8] = "mousedown";
            EventType[EventType["mouseleave"] = 1 << 9] = "mouseleave";
            EventType[EventType["mouseup"] = 1 << 10] = "mouseup";
            EventType[EventType["mouseenter"] = 1 << 11] = "mouseenter";
            EventType[EventType["mousemove"] = 1 << 12] = "mousemove";
            EventType[EventType["focusout"] = 1 << 13] = "focusout";
            EventType[EventType["focusin"] = 1 << 14] = "focusin";
        })(Enum.EventType || (Enum.EventType = {}));
        var EventType = Enum.EventType;
        ;

        (function (Orientation) {
            Orientation[Orientation["horizontal"] = 0] = "horizontal";
            Orientation[Orientation["vertical"] = 1] = "vertical";
        })(Enum.Orientation || (Enum.Orientation = {}));
        var Orientation = Enum.Orientation;

        (function (Role) {
            Role[Role["menuitem"] = 0] = "menuitem";
            Role[Role["listbox"] = 1] = "listbox";
        })(Enum.Role || (Enum.Role = {}));
        var Role = Enum.Role;

        (function (DatePickerShowOn) {
            DatePickerShowOn[DatePickerShowOn["focus"] = 0] = "focus";
            DatePickerShowOn[DatePickerShowOn["button"] = 1] = "button";
            DatePickerShowOn[DatePickerShowOn["both"] = 2] = "both";
        })(Enum.DatePickerShowOn || (Enum.DatePickerShowOn = {}));
        var DatePickerShowOn = Enum.DatePickerShowOn;
    })(Juime.Enum || (Juime.Enum = {}));
    var Enum = Juime.Enum;
})(Juime || (Juime = {}));

var Juime;
(function (Juime) {
    (function (Common) {
        var AccordionAnimate = (function () {
            function AccordionAnimate(enable, easing, duration) {
                if (enable != undefined)
                    this["_enable"] = enable;
                if (easing != undefined)
                    this["_easing"] = easing;
                if (duration != undefined)
                    this["_duration"] = duration;
            }
            Object.defineProperty(AccordionAnimate.prototype, "enable", {
                get: function () {
                    return this["_enable"];
                },
                set: function (value) {
                    this["_enable"] = value;
                    AccordionAnimate.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionAnimate.prototype, "duration", {
                get: function () {
                    return this["_duration"];
                },
                set: function (value) {
                    this["_duration"] = value;
                    AccordionAnimate.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionAnimate.prototype, "easing", {
                get: function () {
                    var val = Juime.Enum.Easing[this["_easing"]];
                    return val;
                },
                set: function (value) {
                    this["_easing"] = value;
                    AccordionAnimate.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            AccordionAnimate.setter = function (value) {
                if (value["_enable"] != undefined && !value["_enable"])
                    value.element.accordion("option", "animate", value["_enable"]);
else {
                    var op = {};
                    if (value["_duration"] || value["_easing"]) {
                        if (value["_duration"])
                            op["duration"] = value["_duration"];
                        if (value["_easing"] != undefined)
                            op["easing"] = Juime.Enum.Easing[value["_easing"]];
                        value.element.accordion("option", "animate", op);
                    } else if (value["_enable"] != undefined)
                        value.element.accordion("option", "animate", value["_enable"]);
                }
            };
            AccordionAnimate.getter = function (element) {
                var op = element.accordion("option", "animate");
                var animateObj;
                if (typeof op === "boolean") {
                    animateObj = new Juime.Common.AccordionAnimate(op, undefined, undefined);
                } else if (typeof op === "object") {
                    animateObj = new Juime.Common.AccordionAnimate(true, parseInt(Juime.Enum.Easing[op["easing"]]), op["duration"]);
                }
                animateObj.element = element;
                return animateObj;
            };
            return AccordionAnimate;
        })();
        Common.AccordionAnimate = AccordionAnimate;

        var AccordionIcon = (function () {
            function AccordionIcon(header, activeHeader) {
                this["_header"] = header;
                this["_activeHeader"] = activeHeader;
            }
            Object.defineProperty(AccordionIcon.prototype, "header", {
                get: function () {
                    return this["_header"];
                },
                set: function (value) {
                    this["_header"] = value;
                    AccordionIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionIcon.prototype, "activeHeader", {
                get: function () {
                    return this["_activeHeader"];
                },
                set: function (value) {
                    this["_activeHeader"] = value;
                    AccordionIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            AccordionIcon.setter = function (value) {
                var op = {};
                if (value["_activeHeader"] || value["_header"]) {
                    if (value["_activeHeader"])
                        op["activeHeader"] = value["_activeHeader"];
                    if (value["_header"] != undefined)
                        op["header"] = value["_header"];
                    value.element.accordion("option", "icons", op);
                }
            };
            AccordionIcon.getter = function (element) {
                var op = element.accordion("option", "icons");
                var iconObj;
                iconObj = new Juime.Common.AccordionIcon(op["header"], op["activeHeader"]);
                iconObj.element = element;
                return iconObj;
            };
            return AccordionIcon;
        })();
        Common.AccordionIcon = AccordionIcon;

        var ButtonIcon = (function () {
            function ButtonIcon(primary, secondary) {
                this["_primary"] = primary;
                this["_secondary"] = secondary;
            }
            Object.defineProperty(ButtonIcon.prototype, "primary", {
                get: function () {
                    return this["_primary"];
                },
                set: function (value) {
                    this["_primary"] = value;
                    ButtonIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ButtonIcon.prototype, "secondary", {
                get: function () {
                    return this["_secondary"];
                },
                set: function (value) {
                    this["_secondary"] = value;
                    ButtonIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            ButtonIcon.setter = function (value) {
                var op = {};
                if (value["_primary"] || value["_secondary"]) {
                    if (value["_primary"])
                        op["primary"] = value["_primary"];
                    if (value["_secondary"] != undefined)
                        op["secondary"] = value["_secondary"];
                    value.element.button("option", "icons", op);
                }
            };
            ButtonIcon.getter = function (element) {
                var op = element.button("option", "icons");
                var iconObj;
                iconObj = new Juime.Common.ButtonIcon(op["primary"], op["secondary"]);
                iconObj.element = element;
                return iconObj;
            };
            return ButtonIcon;
        })();
        Common.ButtonIcon = ButtonIcon;

        var MenuIcon = (function () {
            function MenuIcon(submenu) {
                this["_submenu"] = submenu;
            }
            Object.defineProperty(MenuIcon.prototype, "submenu", {
                get: function () {
                    return this["_submenu"];
                },
                set: function (value) {
                    this["_submenu"] = value;
                    MenuIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            MenuIcon.setter = function (value) {
                var op = {};
                if (value["_submenu"]) {
                    op["submenu"] = value["_submenu"];
                    value.element.juimeMenu("option", "icons", op);
                }
            };
            MenuIcon.getter = function (element) {
                var op = element.juimeMenu("option", "icons");
                var iconObj;
                iconObj = new Juime.Common.MenuIcon(op["submenu"]);
                iconObj.element = element;
                return iconObj;
            };
            return MenuIcon;
        })();
        Common.MenuIcon = MenuIcon;

        var SpinnerIcon = (function () {
            function SpinnerIcon(up, down) {
                this["_up"] = up;
                this["_down"] = down;
            }
            Object.defineProperty(SpinnerIcon.prototype, "up", {
                get: function () {
                    return this["_up"];
                },
                set: function (value) {
                    this["_up"] = value;
                    SpinnerIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerIcon.prototype, "down", {
                get: function () {
                    return this["_down"];
                },
                set: function (value) {
                    this["_down"] = value;
                    SpinnerIcon.setter(this);
                },
                enumerable: true,
                configurable: true
            });
            SpinnerIcon.setter = function (value) {
                var op = {};
                if (value["_up"] || value["_down"]) {
                    if (value["_up"])
                        op["up"] = value["_up"];
                    if (value["_down"] != undefined)
                        op["down"] = value["_down"];
                    value.element.spinner("option", "icons", op);
                }
            };
            SpinnerIcon.getter = function (element) {
                var op = element.spinner("option", "icons");
                var iconObj;
                iconObj = new Juime.Common.SpinnerIcon(op["up"], op["down"]);
                iconObj.element = element;
                return iconObj;
            };
            return SpinnerIcon;
        })();
        Common.SpinnerIcon = SpinnerIcon;
    })(Juime.Common || (Juime.Common = {}));
    var Common = Juime.Common;
})(Juime || (Juime = {}));

var Juime;
(function (Juime) {
    (function (Controls) {
        //#region Accordion Classes
        var AccordionOption = (function () {
            function AccordionOption(element) {
                this.element = element;
            }
            Object.defineProperty(AccordionOption.prototype, "active", {
                get: function () {
                    return this.element.accordion("option", "active");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.accordion("option", "active", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "animate", {
                get: function () {
                    return Juime.Common.AccordionAnimate.getter(this.element);
                },
                set: function (value) {
                    value.element = this.element;
                    Juime.Common.AccordionAnimate.setter(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "collapsible", {
                get: function () {
                    return this.element.accordion("option", "collapsible");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.accordion("option", "collapsible", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "disabled", {
                get: function () {
                    return this.element.accordion("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.accordion("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "event", {
                get: function () {
                    return this.element.accordion("option", "event");
                },
                set: function (value) {
                    if (value != undefined) {
                        var val = Helper.flagsToString(Juime.Enum.EventType, value);
                        this.element.accordion("option", "event", val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "headerTag", {
                get: function () {
                    return this.element.accordion("option", "header");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.accordion("option", "header", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "heightStyle", {
                get: function () {
                    return this.element.accordion("option", "heightStyle");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.accordion("option", "heightStyle", Juime.Enum.HeightStyle[value]);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AccordionOption.prototype, "icons", {
                get: function () {
                    return Juime.Common.AccordionIcon.getter(this.element);
                },
                set: function (value) {
                    value.element = this.element;
                    Juime.Common.AccordionIcon.setter(value);
                },
                enumerable: true,
                configurable: true
            });
            return AccordionOption;
        })();

        var AccordionItem = (function () {
            function AccordionItem() {
            }
            return AccordionItem;
        })();

        var AccordionEventArg = (function () {
            function AccordionEventArg(event) {
                this.event = event;
                this.item = new AccordionItem();
            }
            return AccordionEventArg;
        })();

        var AccordionEvent = (function () {
            function AccordionEvent() {
                this.activate = undefined;
                this.deactivate = undefined;
                this.beforeActivate = undefined;
                this.beforeDeactivate = undefined;
                this.create = undefined;
            }
            return AccordionEvent;
        })();

        var Accordion = (function () {
            function Accordion(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new AccordionOption(this.element);
                    this.events = new AccordionEvent();
                }
            }
            Accordion.prototype.destroy = function () {
                this.element.accordion("destroy");
            };
            Accordion.prototype.disable = function () {
                this.element.accordion("disable");
            };
            Accordion.prototype.enable = function () {
                this.element.accordion("enable");
            };
            Accordion.prototype.refresh = function () {
                this.element.accordion("refresh");
            };

            Accordion.init = function () {
                $("div[data-control-type='accordion']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Accordion(controlId, undefined);
                    var jsonEvents = control.data('control-events');
                    for (var jsonEvent in jsonEvents) {
                        controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    }
                    control.data('control-instance', controlInstance);
                    var attributes = control.data('control-options');
                    control.accordion(attributes);
                    Juime.Controls.Accordion.registerEvent(control);
                });
            };
            Accordion.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("accordionbeforeactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var beforeActivateHandler = sender.events.beforeActivate;
                    var beforeDeactivateHandler = sender.events.beforeDeactivate;
                    if (beforeActivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        beforeActivateHandler(sender, eventArgs);
                    }
                    if (beforeDeactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        beforeDeactivateHandler(sender, eventArgs);
                    }
                });
                control.on("accordioncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Accordion;
        })();
        Controls.Accordion = Accordion;

        //#endregion
        //#region AutoComplete Classes
        var AutoCompleteOption = (function () {
            function AutoCompleteOption(element) {
                this.element = element;
            }
            Object.defineProperty(AutoCompleteOption.prototype, "appendTo", {
                get: function () {
                    return this.element.autocomplete("option", "appendTo");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.autocomplete("option", "appendTo", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoCompleteOption.prototype, "autoFocus", {
                get: function () {
                    return this.element.autocomplete("option", "autoFocus");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.autocomplete("option", "autoFocus", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoCompleteOption.prototype, "delay", {
                get: function () {
                    return this.element.autocomplete("option", "delay");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.autocomplete("option", "delay", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoCompleteOption.prototype, "disabled", {
                get: function () {
                    return this.element.autocomplete("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.autocomplete("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoCompleteOption.prototype, "minLength", {
                get: function () {
                    return this.element.autocomplete("option", "minLength");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.autocomplete("option", "minLength", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return AutoCompleteOption;
        })();

        var AutoCompleteItem = (function () {
            function AutoCompleteItem() {
            }
            return AutoCompleteItem;
        })();

        var AutoCompleteEventArg = (function () {
            function AutoCompleteEventArg(event) {
                this.event = event;
                this.item = new AutoCompleteItem();
            }
            return AutoCompleteEventArg;
        })();

        var AutoCompleteEvent = (function () {
            function AutoCompleteEvent() {
            }
            return AutoCompleteEvent;
        })();

        var AutoComplete = (function () {
            //events: IAutoCompleteEvent;
            function AutoComplete(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new AutoCompleteOption(this.element);
                    //this.events = new AutoCompleteEvent();
                }
            }
            AutoComplete.prototype.close = function () {
                this.element.autocomplete("close");
            };
            AutoComplete.prototype.destroy = function () {
                this.element.autocomplete("destroy");
            };
            AutoComplete.prototype.disable = function () {
                this.element.autocomplete("disable");
            };
            AutoComplete.prototype.enable = function () {
                this.element.autocomplete("enable");
            };

            AutoComplete.init = function () {
                $("input[data-control-type='autocomplete']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new AutoComplete(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var optionAttributes = control.data('control-options');
                    var bindAttributes = control.data('control-bind-source');
                    var attributes = $.extend(optionAttributes, bindAttributes);
                    control.autocomplete(attributes);
                    //Juime.Controls.AutoComplete.registerEvent(control);
                });
            };
            AutoComplete.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("accordionbeforeactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var beforeActivateHandler = sender.events.beforeActivate;
                    var beforeDeactivateHandler = sender.events.beforeDeactivate;
                    if (beforeActivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        beforeActivateHandler(sender, eventArgs);
                    }
                    if (beforeDeactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        beforeDeactivateHandler(sender, eventArgs);
                    }
                });
                control.on("accordioncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return AutoComplete;
        })();
        Controls.AutoComplete = AutoComplete;

        //#endregion
        //#region Button Classes
        var ButtonOption = (function () {
            function ButtonOption(element) {
                this.element = element;
            }
            Object.defineProperty(ButtonOption.prototype, "disabled", {
                get: function () {
                    return this.element.button("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ButtonOption.prototype, "icons", {
                get: function () {
                    return Juime.Common.ButtonIcon.getter(this.element);
                },
                set: function (value) {
                    value.element = this.element;
                    Juime.Common.ButtonIcon.setter(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ButtonOption.prototype, "label", {
                get: function () {
                    return this.element.button("option", "label");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "label", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ButtonOption.prototype, "text", {
                get: function () {
                    return this.element.button("option", "text");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "text", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ButtonOption;
        })();

        var ButtonItem = (function () {
            function ButtonItem() {
            }
            return ButtonItem;
        })();

        var ButtonEventArg = (function () {
            function ButtonEventArg(event) {
                this.event = event;
                this.item = new ButtonItem();
            }
            return ButtonEventArg;
        })();

        var ButtonEvent = (function () {
            function ButtonEvent() {
            }
            return ButtonEvent;
        })();

        var Button = (function () {
            //events: IButtonEvent;
            function Button(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new ButtonOption(this.element);
                    //this.events = new ButtonEvent();
                }
            }
            Button.prototype.destroy = function () {
                this.element.button("destroy");
            };
            Button.prototype.disable = function () {
                this.element.button("disable");
            };
            Button.prototype.enable = function () {
                this.element.button("enable");
            };
            Button.prototype.refresh = function () {
                this.element.button("refresh");
            };

            Button.init = function () {
                $("input[data-control-type='button'], input[data-control-type='switch'], input[data-control-type='radio'], button[data-control-type='button']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Button(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var attributes = control.data('control-options');
                    control.button(attributes);
                    //Juime.Controls.Button.registerEvent(control);
                });
            };
            Button.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Button;
        })();
        Controls.Button = Button;

        //#endregion
        //#region DatePicker Classes
        var DatePickerOption = (function () {
            function DatePickerOption(element) {
                this.element = element;
            }
            Object.defineProperty(DatePickerOption.prototype, "altField", {
                get: function () {
                    return this.element.datepicker("option", "altField");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "altField", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "altFormat", {
                get: function () {
                    var format = this["_altFormat"];
                    if (format)
                        return this["_altFormat"];
else
                        return this.dateFormat;
                },
                set: function (value) {
                    if (value != undefined) {
                        this["_altFormat"] = value;
                        var convertedFormat = Helper.dateFormatConversion(value);
                        this.element.datepicker("option", "altFormat", convertedFormat);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "appendText", {
                get: function () {
                    return this.element.datepicker("option", "appendText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "appendText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "autoSize", {
                get: function () {
                    return this.element.datepicker("option", "autoSize");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "autoSize", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "buttonImage", {
                get: function () {
                    return this.element.datepicker("option", "buttonImage");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "buttonImage", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "buttonImageOnly", {
                get: function () {
                    return this.element.datepicker("option", "buttonImageOnly");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "buttonImageOnly", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "buttonText", {
                get: function () {
                    return this.element.datepicker("option", "buttonText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "buttonText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "changeMonth", {
                get: function () {
                    return this.element.datepicker("option", "changeMonth");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "changeMonth", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "changeYear", {
                get: function () {
                    return this.element.datepicker("option", "changeYear");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "changeYear", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "closeText", {
                get: function () {
                    return this.element.datepicker("option", "closeText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "closeText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "constrainInput", {
                get: function () {
                    return this.element.datepicker("option", "constrainInput");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "constrainInput", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "currentText", {
                get: function () {
                    return this.element.datepicker("option", "currentText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "currentText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "dateFormat", {
                get: function () {
                    var format = this["_dateFormat"];
                    if (format)
                        return this["_dateFormat"];
else
                        return "MM/dd/yyyy";
                },
                set: function (value) {
                    if (value != undefined) {
                        this["_dateFormat"] = value;
                        var convertedFormat = Helper.dateFormatConversion(value);
                        this.element.datepicker("option", "dateFormat", convertedFormat);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "dayNames", {
                get: function () {
                    return this.element.datepicker("option", "dayNames");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "dayNames", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "dayNamesMin", {
                get: function () {
                    return this.element.datepicker("option", "dayNamesMin");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "dayNamesMin", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "dayNamesShort", {
                get: function () {
                    return this.element.datepicker("option", "dayNamesShort");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "dayNamesShort", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "defaultDate", {
                get: function () {
                    var selectedDate = this.element.datepicker("option", "defaultDate");
                    if (selectedDate != null) {
                        var todaysDate = new Date();
                        todaysDate.setHours(0, 0, 0, 0);
                        var dateDiff = todaysDate.getTime() + (selectedDate * (1000 * 60 * 60 * 24));
                        return new Date(dateDiff);
                    }
                    return null;
                },
                set: function (value) {
                    if (value != undefined) {
                        var selectedDate = value;
                        selectedDate.setHours(0, 0, 0, 0);
                        var todaysDate = new Date();
                        todaysDate.setHours(0, 0, 0, 0);
                        var dateDiff = selectedDate.getTime() - todaysDate.getTime();
                        dateDiff = dateDiff / (1000 * 60 * 60 * 24);
                        this.element.datepicker("option", "defaultDate", dateDiff);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "duration", {
                get: function () {
                    return this.element.datepicker("option", "duration");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "duration", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "firstDay", {
                get: function () {
                    return this.element.datepicker("option", "firstDay");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "firstDay", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "gotoCurrent", {
                get: function () {
                    return this.element.datepicker("option", "gotoCurrent");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "gotoCurrent", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "hideIfNoPrevNext", {
                get: function () {
                    return this.element.datepicker("option", "hideIfNoPrevNext");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "hideIfNoPrevNext", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "isRTL", {
                get: function () {
                    return this.element.datepicker("option", "isRTL");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "isRTL", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "maxDate", {
                get: function () {
                    var selectedDate = this.element.datepicker("option", "maxDate");
                    if (selectedDate != null) {
                        var todaysDate = new Date();
                        todaysDate.setHours(0, 0, 0, 0);
                        var dateDiff = todaysDate.getTime() + (selectedDate * (1000 * 60 * 60 * 24));
                        return new Date(dateDiff);
                    }
                    return null;
                },
                set: function (value) {
                    if (value != undefined) {
                        var selectedDate = value;
                        selectedDate.setHours(0, 0, 0, 0);
                        var todaysDate = new Date();
                        todaysDate.setHours(0, 0, 0, 0);
                        var dateDiff = selectedDate.getTime() - todaysDate.getTime();
                        dateDiff = dateDiff / (1000 * 60 * 60 * 24);
                        this.element.datepicker("option", "maxDate", dateDiff);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "minDate", {
                get: function () {
                    var selectedDate = this.element.datepicker("option", "minDate");
                    if (selectedDate != null) {
                        var todaysDate = new Date();
                        todaysDate.setHours(0, 0, 0, 0);
                        var dateDiff = todaysDate.getTime() + (selectedDate * (1000 * 60 * 60 * 24));
                        return new Date(dateDiff);
                    }
                    return null;
                },
                set: function (value) {
                    if (value != undefined) {
                        var selectedDate = value;
                        selectedDate.setHours(0, 0, 0, 0);
                        var todaysDate = new Date();
                        todaysDate.setHours(0, 0, 0, 0);
                        var dateDiff = selectedDate.getTime() - todaysDate.getTime();
                        dateDiff = dateDiff / (1000 * 60 * 60 * 24);
                        this.element.datepicker("option", "minDate", dateDiff);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "monthNames", {
                get: function () {
                    return this.element.datepicker("option", "monthNames");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "monthNames", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "monthNamesShort", {
                get: function () {
                    return this.element.datepicker("option", "monthNamesShort");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "monthNamesShort", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "nextText", {
                get: function () {
                    return this.element.datepicker("option", "nextText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "nextText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "numberOfMonths", {
                get: function () {
                    return this.element.datepicker("option", "numberOfMonths");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "numberOfMonths", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "prevText", {
                get: function () {
                    return this.element.datepicker("option", "prevText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "prevText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "selectOtherMonths", {
                get: function () {
                    return this.element.datepicker("option", "selectOtherMonths");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "selectOtherMonths", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "showButtonPanel", {
                get: function () {
                    return this.element.datepicker("option", "showButtonPanel");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "showButtonPanel", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "showCurrentAtPos", {
                get: function () {
                    return this.element.datepicker("option", "showCurrentAtPos");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "showCurrentAtPos", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "showMonthAfterYear", {
                get: function () {
                    return this.element.datepicker("option", "showMonthAfterYear");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "showMonthAfterYear", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "showOn", {
                get: function () {
                    return this.element.datepicker("option", "showOn");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "showOn", Juime.Enum.DatePickerShowOn[value]);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "showOtherMonths", {
                get: function () {
                    return this.element.datepicker("option", "showOtherMonths");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "showOtherMonths", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "showWeek", {
                get: function () {
                    return this.element.datepicker("option", "showWeek");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "showWeek", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "stepMonths", {
                get: function () {
                    return this.element.datepicker("option", "stepMonths");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "stepMonths", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "weekHeader", {
                get: function () {
                    return this.element.datepicker("option", "weekHeader");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "weekHeader", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DatePickerOption.prototype, "yearSuffix", {
                get: function () {
                    return this.element.datepicker("option", "yearSuffix");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.datepicker("option", "yearSuffix", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return DatePickerOption;
        })();

        var DatePickerItem = (function () {
            function DatePickerItem() {
            }
            return DatePickerItem;
        })();

        var DatePickerEventArg = (function () {
            function DatePickerEventArg(event) {
                this.event = event;
                this.item = new DatePickerItem();
            }
            return DatePickerEventArg;
        })();

        var DatePickerEvent = (function () {
            function DatePickerEvent() {
            }
            return DatePickerEvent;
        })();

        var DatePicker = (function () {
            //events: IDatePickerEvent;
            function DatePicker(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new DatePickerOption(this.element);
                    //this.events = new DatePickerEvent();
                }
            }
            DatePicker.prototype.destroy = function () {
                this.element.datepicker("destroy");
            };
            DatePicker.prototype.getDate = function () {
                return this.element.datepicker("getDate");
            };
            DatePicker.prototype.hide = function () {
                this.element.datepicker("hide");
            };
            DatePicker.prototype.isDisabled = function () {
                return this.element.datepicker("isDisabled");
            };
            DatePicker.prototype.refresh = function () {
                this.element.datepicker("enable");
            };
            DatePicker.prototype.setDate = function (date) {
                this.element.datepicker("setDate", date);
            };
            DatePicker.prototype.show = function () {
                this.element.datepicker("enable");
            };

            DatePicker.init = function () {
                $("input[data-control-type='datepicker']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new DatePicker(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var optionAttributes = control.data('control-options');
                    var bindAttributes = control.data('control-bind-source');
                    var attributes = $.extend(optionAttributes, bindAttributes);
                    control.datepicker(attributes);
                    var optionBagAttributes = control.data('control-option-bag');
                    if (optionBagAttributes) {
                        controlInstance["_optionBag"] = optionBagAttributes;
                        controlInstance.options["_altFormat"] = optionBagAttributes["cshAltFormat"];
                        controlInstance.options["_dateFormat"] = optionBagAttributes["cshDateFormat"];
                    }
                    var currentValue = control.val();
                    if (currentValue && currentValue != "") {
                        control.datepicker("setDate", new Date(currentValue));
                    }
                    //Juime.Controls.DatePicker.registerEvent(control);
                });
            };
            DatePicker.registerEvent = function (control) {
                //control.on("accordioncreate", function (event: JQueryEventObject, ui: IAccordionCreateParam) {
                //    var sender: IAccordion = control.data('control-instance');
                //    var createHandler = sender.events.create;
                //    if (createHandler) {
                //        var eventArgs = new AccordionEventArg(event);
                //        var idArray = (<HTMLElement>ui.header.context).id.split("-");
                //        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                //        eventArgs.item.header = ui.header;
                //        eventArgs.item.panel = ui.panel;
                //        createHandler(sender, eventArgs);
                //    }
                //});
            };
            return DatePicker;
        })();
        Controls.DatePicker = DatePicker;

        //#endregion
        //#region Dialog Classes
        var DialogOption = (function () {
            function DialogOption(element) {
                this.element = element;
            }
            Object.defineProperty(DialogOption.prototype, "appendTo", {
                get: function () {
                    return this.element.button("option", "appendTo");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "appendTo", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "autoOpen", {
                get: function () {
                    return this.element.button("option", "autoOpen");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "autoOpen", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "closeOnEscape", {
                get: function () {
                    return this.element.button("option", "closeOnEscape");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "closeOnEscape", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "closeText", {
                get: function () {
                    return this.element.button("option", "closeText");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "closeText", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "dialogClass", {
                get: function () {
                    return this.element.button("option", "dialogClass");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "dialogClass", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "draggable", {
                get: function () {
                    return this.element.button("option", "draggable");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "draggable", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "height", {
                get: function () {
                    return this.element.button("option", "height");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "height", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "maxHeight", {
                get: function () {
                    return this.element.button("option", "maxHeight");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "maxHeight", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "maxWidth", {
                get: function () {
                    return this.element.button("option", "maxWidth");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "maxWidth", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "minHeight", {
                get: function () {
                    return this.element.button("option", "minHeight");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "minHeight", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "minWidth", {
                get: function () {
                    return this.element.button("option", "minWidth");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "minWidth", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "modal", {
                get: function () {
                    return this.element.button("option", "modal");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "modal", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "resizable", {
                get: function () {
                    return this.element.button("option", "resizable");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "resizable", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "title", {
                get: function () {
                    return this.element.button("option", "title");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "title", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DialogOption.prototype, "width", {
                get: function () {
                    return this.element.button("option", "width");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.button("option", "width", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return DialogOption;
        })();

        var DialogItem = (function () {
            function DialogItem() {
            }
            return DialogItem;
        })();

        var DialogEventArg = (function () {
            function DialogEventArg(event) {
                this.event = event;
                this.item = new DialogItem();
            }
            return DialogEventArg;
        })();

        var DialogEvent = (function () {
            function DialogEvent() {
            }
            return DialogEvent;
        })();

        var Dialog = (function () {
            //events: IDialogEvent;
            function Dialog(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new DialogOption(this.element);
                    //this.events = new DialogEvent();
                }
            }
            Dialog.prototype.close = function () {
                this.element.dialog("close");
            };
            Dialog.prototype.destroy = function () {
                this.element.dialog("destroy");
            };
            Dialog.prototype.isOpen = function () {
                return this.element.dialog("isOpen");
            };
            Dialog.prototype.moveToTop = function () {
                this.element.dialog("moveToTop");
            };
            Dialog.prototype.open = function () {
                this.element.dialog("open");
            };

            Dialog.init = function () {
                $("div[data-control-type='dialog']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Button(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var attributes = control.data('control-options');
                    control.dialog(attributes);
                    //Juime.Controls.Dialog.registerEvent(control);
                });
            };
            Dialog.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Dialog;
        })();
        Controls.Dialog = Dialog;

        //#endregion
        //#region Menu Classes
        var MenuOption = (function () {
            function MenuOption(element) {
                this.element = element;
            }
            Object.defineProperty(MenuOption.prototype, "disabled", {
                get: function () {
                    return this.element.juimeMenu("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.juimeMenu("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuOption.prototype, "icons", {
                get: function () {
                    return Juime.Common.MenuIcon.getter(this.element);
                },
                set: function (value) {
                    value.element = this.element;
                    Juime.Common.MenuIcon.setter(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuOption.prototype, "role", {
                get: function () {
                    return this.element.juimeMenu("option", "role");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.juimeMenu("option", "role", Juime.Enum.Role[value]);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return MenuOption;
        })();

        var MenuItem = (function () {
            function MenuItem() {
            }
            return MenuItem;
        })();

        var MenuEventArg = (function () {
            function MenuEventArg(event) {
                this.event = event;
                this.item = new MenuItem();
            }
            return MenuEventArg;
        })();

        var MenuEvent = (function () {
            function MenuEvent() {
            }
            return MenuEvent;
        })();

        var Menu = (function () {
            //events: IMenuEvent;
            function Menu(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new MenuOption(this.element);
                    //this.events = new MenuEvent();
                }
            }
            Menu.prototype.destroy = function () {
                this.element.juimeMenu("destroy");
            };
            Menu.prototype.disable = function () {
                this.element.juimeMenu("disable");
            };
            Menu.prototype.enable = function () {
                this.element.juimeMenu("enable");
            };
            Menu.prototype.isFirstItem = function () {
                return this.element.juimeMenu("isFirstItem");
            };
            Menu.prototype.isLastItem = function () {
                return this.element.juimeMenu("isLastItem");
            };
            Menu.prototype.refresh = function () {
                this.element.juimeMenu("refresh");
            };

            Menu.init = function () {
                $("ul[data-control-type='menu']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Menu(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var attributes = control.data('control-options');
                    var optionBagAttributes = control.data('control-option-bag');
                    if (optionBagAttributes) {
                        controlInstance["_optionBag"] = optionBagAttributes;
                    }
                    control.juimeMenu(attributes);
                    var width = (optionBagAttributes && optionBagAttributes["width"]) ? optionBagAttributes["width"] : 150;
                    var dirHtl = (optionBagAttributes && optionBagAttributes["direction"]) ? optionBagAttributes["direction"] : "bottom";
                    var dirVtl = (optionBagAttributes && optionBagAttributes["direction"]) ? optionBagAttributes["direction"] : "right";
                    var pos = (attributes && attributes["position"]) ? attributes["position"] : {};

                    if (optionBagAttributes && optionBagAttributes["orientation"] && optionBagAttributes["orientation"] === "vertical") {
                        $(".ui-menu").css("width", width + "px");
                        controlInstance.options["_direction"] = dirVtl;
                        if (dirVtl === "left") {
                            $("#" + controlId + " .ui-menu-icon").css("float", "left");
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-w");
                            if (!pos.at)
                                pos.at = "left-" + $("#" + controlId + " .ui-menu").outerWidth() + " top";
                            if (!pos.my)
                                pos.my = "left top";
                            control.juimeMenu("option", "position", pos);
                        } else if (dirHtl === "right")
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-e");
else if (dirHtl === "top")
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-n");
else if (dirHtl === "bottom")
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-s");
                    } else {
                        control.addClass("ui-menu-htl");
                        $("#" + controlId + " .ui-menu-item").css("display", "block");
                        $("#" + controlId + " .ui-menu-item").css("width", "auto");
                        $("#" + controlId + ">li").css("display", "inline-block");
                        $("#" + controlId + " .ui-menu").css("width", width + "px");
                        controlInstance.options["_direction"] = dirHtl;
                        if (dirHtl === "left") {
                            $("#" + controlId + " .ui-menu-icon").css("float", "left");
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-w");
                            if (!pos.at)
                                pos.at = "left-" + $("#" + controlId + " .ui-menu").outerWidth() + " top";
                            if (!pos.my)
                                pos.my = "left top";
                            control.juimeMenu("option", "position", pos);
                        } else if (dirHtl === "right")
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-e");
else if (dirHtl === "top")
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-n");
else if (dirHtl === "bottom")
                            $("#" + controlId + ">li>a>span").removeAttr("class").addClass("ui-menu-icon ui-icon ui-icon-carat-1-s");
                    }
                    //Juime.Controls.Menu.registerEvent(control);
                });
            };
            Menu.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Menu;
        })();
        Controls.Menu = Menu;

        //#endregion
        //#region ProgressBar Classes
        var ProgressBarOption = (function () {
            function ProgressBarOption(element) {
                this.element = element;
            }
            Object.defineProperty(ProgressBarOption.prototype, "disabled", {
                get: function () {
                    return this.element.progressbar("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.progressbar("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ProgressBarOption.prototype, "max", {
                get: function () {
                    return this.element.progressbar("option", "max");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.progressbar("option", "max", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ProgressBarOption;
        })();

        var ProgressBarItem = (function () {
            function ProgressBarItem() {
            }
            return ProgressBarItem;
        })();

        var ProgressBarEventArg = (function () {
            function ProgressBarEventArg(event) {
                this.event = event;
                this.item = new ProgressBarItem();
            }
            return ProgressBarEventArg;
        })();

        var ProgressBarEvent = (function () {
            function ProgressBarEvent() {
            }
            return ProgressBarEvent;
        })();

        var ProgressBar = (function () {
            //events: IProgressBarEvent;
            function ProgressBar(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new ProgressBarOption(this.element);
                    //this.events = new ProgressBarEvent();
                }
            }
            ProgressBar.prototype.destroy = function () {
                this.element.progressbar("destroy");
            };
            ProgressBar.prototype.disable = function () {
                this.element.progressbar("disable");
            };
            ProgressBar.prototype.enable = function () {
                this.element.progressbar("enable");
            };
            ProgressBar.prototype.value = function (value) {
                if (value != undefined)
                    this.element.progressbar("value", value);
else
                    return this.element.progressbar("value");
            };

            ProgressBar.init = function () {
                $("div[data-control-type='progressbar']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new ProgressBar(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var optionAttributes = control.data('control-options');
                    var bindAttributes = control.data('control-bind-source');
                    var attributes = $.extend(optionAttributes, bindAttributes);
                    control.progressbar(attributes);
                    //Juime.Controls.ProgressBar.registerEvent(control);
                });
            };
            ProgressBar.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return ProgressBar;
        })();
        Controls.ProgressBar = ProgressBar;

        //#endregion
        //#region Slider Classes
        var SliderOption = (function () {
            function SliderOption(element) {
                this.element = element;
            }
            Object.defineProperty(SliderOption.prototype, "animate", {
                get: function () {
                    return this.element.slider("option", "animate");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "animate", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SliderOption.prototype, "disabled", {
                get: function () {
                    return this.element.slider("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SliderOption.prototype, "max", {
                get: function () {
                    return this.element.slider("option", "max");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "max", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SliderOption.prototype, "min", {
                get: function () {
                    return this.element.slider("option", "min");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "min", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SliderOption.prototype, "orientation", {
                get: function () {
                    return this.element.slider("option", "orientation");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "orientation", Juime.Enum.Orientation[value]);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SliderOption.prototype, "range", {
                get: function () {
                    return this.element.slider("option", "range");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "range", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SliderOption.prototype, "step", {
                get: function () {
                    return this.element.slider("option", "step");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.slider("option", "step", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return SliderOption;
        })();

        var SliderItem = (function () {
            function SliderItem() {
            }
            return SliderItem;
        })();

        var SliderEventArg = (function () {
            function SliderEventArg(event) {
                this.event = event;
                this.item = new SliderItem();
            }
            return SliderEventArg;
        })();

        var SliderEvent = (function () {
            function SliderEvent() {
            }
            return SliderEvent;
        })();

        var Slider = (function () {
            //events: ISliderEvent;
            function Slider(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new SliderOption(this.element);
                    //this.events = new SliderEvent();
                }
            }
            Slider.prototype.destroy = function () {
                this.element.slider("destroy");
            };
            Slider.prototype.disable = function () {
                this.element.slider("disable");
            };
            Slider.prototype.enable = function () {
                this.element.slider("enable");
            };
            Slider.prototype.value = function (value) {
                if (value != undefined)
                    this.element.slider("value", value);
else
                    return this.element.slider("value");
            };
            Slider.prototype.values = function (startValue, endValue) {
                if (startValue != undefined || endValue != undefined) {
                    if (startValue != undefined)
                        this.element.slider("values", 0, startValue);
                    if (endValue != undefined)
                        this.element.slider("values", 1, endValue);
                } else
                    return this.element.slider("values");
            };

            Slider.init = function () {
                $("div[data-control-type='slider']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Slider(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var optionAttributes = control.data('control-options');
                    var bindAttributes = control.data('control-bind-source');
                    var attributes = $.extend(optionAttributes, bindAttributes);
                    control.slider(attributes);
                    //Juime.Controls.Slider.registerEvent(control);
                });
            };
            Slider.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Slider;
        })();
        Controls.Slider = Slider;

        //#endregion
        //#region Spinner Classes
        var SpinnerOption = (function () {
            function SpinnerOption(element) {
                this.element = element;
            }
            Object.defineProperty(SpinnerOption.prototype, "disabled", {
                get: function () {
                    return this.element.spinner("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.spinner("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerOption.prototype, "icons", {
                get: function () {
                    return Juime.Common.SpinnerIcon.getter(this.element);
                },
                set: function (value) {
                    value.element = this.element;
                    Juime.Common.SpinnerIcon.setter(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerOption.prototype, "incremental", {
                get: function () {
                    return this.element.spinner("option", "incremental");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.spinner("option", "incremental", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerOption.prototype, "max", {
                get: function () {
                    return this.element.spinner("option", "max");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.spinner("option", "max", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerOption.prototype, "min", {
                get: function () {
                    return this.element.spinner("option", "min");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.spinner("option", "min", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerOption.prototype, "page", {
                get: function () {
                    return this.element.spinner("option", "page");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.spinner("option", "page", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SpinnerOption.prototype, "step", {
                get: function () {
                    return this.element.spinner("option", "step");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.spinner("option", "step", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return SpinnerOption;
        })();

        var SpinnerItem = (function () {
            function SpinnerItem() {
            }
            return SpinnerItem;
        })();

        var SpinnerEventArg = (function () {
            function SpinnerEventArg(event) {
                this.event = event;
                this.item = new SpinnerItem();
            }
            return SpinnerEventArg;
        })();

        var SpinnerEvent = (function () {
            function SpinnerEvent() {
            }
            return SpinnerEvent;
        })();

        var Spinner = (function () {
            //events: ISpinnerEvent;
            function Spinner(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new SpinnerOption(this.element);
                    //this.events = new SpinnerEvent();
                }
            }
            Spinner.prototype.destroy = function () {
                this.element.spinner("destroy");
            };
            Spinner.prototype.disable = function () {
                this.element.spinner("disable");
            };
            Spinner.prototype.enable = function () {
                this.element.spinner("enable");
            };
            Spinner.prototype.pageDown = function (pages) {
                if (pages != undefined)
                    this.element.spinner("pageDown", pages);
else
                    this.element.spinner("pageDown");
            };
            Spinner.prototype.pageUp = function (pages) {
                if (pages != undefined)
                    this.element.spinner("pageUp", pages);
else
                    this.element.spinner("pageUp");
            };
            Spinner.prototype.stepDown = function (steps) {
                if (steps != undefined)
                    this.element.spinner("stepDown", steps);
else
                    this.element.spinner("stepDown");
            };
            Spinner.prototype.stepUp = function (steps) {
                if (steps != undefined)
                    this.element.spinner("stepUp", steps);
else
                    this.element.spinner("stepUp");
            };
            Spinner.prototype.value = function (value) {
                if (value != undefined)
                    this.element.spinner("value", value);
else
                    return this.element.spinner("value");
            };

            Spinner.init = function () {
                $("input[data-control-type='spinner']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Spinner(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var attributes = control.data('control-options');
                    control.spinner(attributes);
                    //Juime.Controls.Spinner.registerEvent(control);
                });
            };
            Spinner.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Spinner;
        })();
        Controls.Spinner = Spinner;

        //#endregion
        //#region Tab Classes
        var TabOption = (function () {
            function TabOption(element) {
                this.element = element;
            }
            Object.defineProperty(TabOption.prototype, "active", {
                get: function () {
                    return this.element.tabs("option", "active");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.tabs("option", "active", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TabOption.prototype, "collapsible", {
                get: function () {
                    return this.element.tabs("option", "collapsible");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.tabs("option", "collapsible", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TabOption.prototype, "disabled", {
                get: function () {
                    return this.element.tabs("option", "disabled");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.tabs("option", "disabled", value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TabOption.prototype, "event", {
                get: function () {
                    return this.element.tabs("option", "event");
                },
                set: function (value) {
                    if (value != undefined) {
                        var val = Helper.flagsToString(Juime.Enum.EventType, value);
                        this.element.tabs("option", "event", val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TabOption.prototype, "heightStyle", {
                get: function () {
                    return this.element.tabs("option", "heightStyle");
                },
                set: function (value) {
                    if (value != undefined) {
                        this.element.tabs("option", "heightStyle", Juime.Enum.HeightStyle[value]);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return TabOption;
        })();

        var TabItem = (function () {
            function TabItem() {
            }
            return TabItem;
        })();

        var TabEventArg = (function () {
            function TabEventArg(event) {
                this.event = event;
                this.item = new TabItem();
            }
            return TabEventArg;
        })();

        var TabEvent = (function () {
            function TabEvent() {
            }
            return TabEvent;
        })();

        var Tab = (function () {
            //events: ITabEvent;
            function Tab(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new TabOption(this.element);
                    //this.events = new TabEvent();
                }
            }
            Tab.prototype.destroy = function () {
                this.element.tabs("destroy");
            };
            Tab.prototype.disable = function (index) {
                if (index != undefined)
                    this.element.tabs("disable", index);
else
                    return this.element.tabs("disable");
            };
            Tab.prototype.enable = function (index) {
                if (index != undefined)
                    this.element.tabs("enable", index);
else
                    return this.element.tabs("enable");
            };
            Tab.prototype.load = function (index) {
                this.element.tabs("load", index);
            };
            Tab.prototype.refresh = function () {
                this.element.tabs("refresh");
            };

            Tab.init = function () {
                $("div[data-control-type='tab']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new Tab(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var attributes = control.data('control-options');
                    control.tabs(attributes);
                    //Juime.Controls.Tab.registerEvent(control);
                });
            };
            Tab.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return Tab;
        })();
        Controls.Tab = Tab;

        //#endregion
        //#region GridView Classes
        var GridViewOption = (function () {
            function GridViewOption(element) {
                this.element = element;
            }
            return GridViewOption;
        })();

        var GridViewItem = (function () {
            function GridViewItem() {
            }
            return GridViewItem;
        })();

        var GridViewEventArg = (function () {
            function GridViewEventArg(event) {
                this.event = event;
                this.item = new GridViewItem();
            }
            return GridViewEventArg;
        })();

        var GridViewEvent = (function () {
            function GridViewEvent() {
            }
            return GridViewEvent;
        })();

        var GridView = (function () {
            //events: IGridViewEvent;
            function GridView(id, instance) {
                if (instance) {
                    this.element = instance.element;
                    this.options = instance.options;
                    //this.events = instance.events;
                } else {
                    this.element = $("#" + id);
                    this.options = new GridViewOption(this.element);
                    //this.events = new SliderEvent();
                }
            }
            GridView.init = function () {
                $("table[data-control-type='gridview']").each(function () {
                    var control = $(this);
                    var controlId = (control.context).id;
                    var controlInstance = new GridView(controlId, undefined);

                    //var jsonEvents = control.data('control-events');
                    //for (var jsonEvent in jsonEvents) {
                    //    controlInstance.events[jsonEvent] = Helper.findEventHandler(jsonEvents[jsonEvent]);
                    //}
                    control.data('control-instance', controlInstance);
                    var optionAttributes = control.data('control-options');
                    var bindAttributes = control.data('control-bind-source');
                    var attributes = $.extend(optionAttributes, bindAttributes);
                    control.dataTable(attributes);
                    //control.dataTable({ "bJQueryUI": true });
                    //Juime.Controls.GridView.registerEvent(control);
                });
            };
            GridView.registerEvent = function (control) {
                control.on("accordionactivate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var activateHandler = sender.events.activate;
                    var deactivateHandler = sender.events.deactivate;
                    if (activateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.newHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.newHeader;
                        eventArgs.item.panel = ui.newPanel;
                        activateHandler(sender, eventArgs);
                    }
                    if (deactivateHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.oldHeader.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.oldHeader;
                        eventArgs.item.panel = ui.oldPanel;
                        deactivateHandler(sender, eventArgs);
                    }
                });
                control.on("buttoncreate", function (event, ui) {
                    var sender = control.data('control-instance');
                    var createHandler = sender.events.create;
                    if (createHandler) {
                        var eventArgs = new AccordionEventArg(event);
                        var idArray = (ui.header.context).id.split("-");
                        eventArgs.item.index = parseInt(idArray[idArray.length - 1]);
                        eventArgs.item.header = ui.header;
                        eventArgs.item.panel = ui.panel;
                        createHandler(sender, eventArgs);
                    }
                });
            };
            return GridView;
        })();
        Controls.GridView = GridView;

        //#endregion
        var Helper = (function () {
            function Helper() {
            }
            Helper.findEventHandler = function (eventVal) {
                var eventName = eventVal;
                var eventObject = window;
                var eventArray = eventName.split('.').forEach(function (n) {
                    eventObject = eventObject[n];
                });
                if (typeof eventObject === "function")
                    return eventObject;
            };
            Helper.flagsToString = function (e, flags) {
                var builder = "";
                for (var i = 1; i <= flags; i = i << 1) {
                    if ((flags & i) != 0) {
                        if (e[i]) {
                            if (builder.length > 0) {
                                builder += " ";
                            }
                            builder += e[i];
                        }
                    }
                }
                return builder;
            };
            Helper.dateFormatConversion = function (inputFormat) {
                var outputFormat = null;
                if (inputFormat != null) {
                    if (inputFormat.length == 1) {
                        switch (inputFormat) {
                            case "d":
                                outputFormat = "mm/dd/yy";
                                break;
                            case "D":
                                outputFormat = "DD, dd MM yy";
                                break;
                            case "f":
                                outputFormat = "DD, dd MM yy";
                                break;
                            case "F":
                                outputFormat = "DD, dd MM yy";
                                break;
                            case "g":
                                outputFormat = "mm/dd/yy";
                                break;
                            case "G":
                                outputFormat = "mm/dd/yy";
                                break;
                            case "m":
                                outputFormat = "M-d";
                                break;
                            case "M":
                                outputFormat = "M-d";
                                break;
                            case "o":
                                outputFormat = "yy-mm-dd";
                                break;
                            case "O":
                                outputFormat = "yy-mm-dd";
                                break;
                            case "r":
                                outputFormat = "D, dd M yy";
                                break;
                            case "R":
                                outputFormat = "D, dd M yy";
                                break;
                            case "s":
                                outputFormat = "yy-mm-dd";
                                break;
                            case "u":
                                outputFormat = "yy-mm-dd";
                                break;
                            case "U":
                                outputFormat = "DD, dd MM yy";
                                break;
                            case "y":
                                outputFormat = "yy MM";
                                break;
                            case "Y":
                                outputFormat = "yy MM";
                                break;
                            default:
                                outputFormat = "mm/dd/yy";
                                break;
                        }
                    } else {
                        var replacementList = [
                            ["dddd", "DD"],
                            ["ddd", "D"],
                            ["MMMM", "MM"],
                            ["MMM", "M"],
                            ["MM", "mm"],
                            ["M", "m"],
                            ["yyyy", "yy"],
                            ["yyy", "yy"],
                            ["yy", "y"],
                            ["g", ""],
                            ["t", ""],
                            ["s", ""],
                            ["f", ""],
                            ["h", ""],
                            ["m", ""],
                            ["z", ""],
                            ["F", ""],
                            ["H", ""],
                            ["K", ""]
                        ];
                        outputFormat = Helper.formatConvert(inputFormat, 0, replacementList);
                    }
                }
                return outputFormat;
            };
            Helper.formatConvert = function (repStr, rep, dict) {
                if (dict.length > (rep)) {
                    var repKey = dict[rep][0];
                    var repVal = dict[rep][1];
                    if (repStr.length > 0) {
                        var repArr = repStr.split(repKey);
                        var val = "";
                        for (var item = 0; item < repArr.length - 1; item++) {
                            if (dict.length > (rep)) {
                                val = val + Helper.formatConvert(repArr[item], rep + 1, dict);
                            }
                            val = val + repVal;
                        }
                        return val + Helper.formatConvert(repArr[repArr.length - 1], rep + 1, dict);
                    } else {
                        return "";
                    }
                } else {
                    var val = repStr;
                    return val;
                }
            };
            return Helper;
        })();
        Controls.Helper = Helper;
    })(Juime.Controls || (Juime.Controls = {}));
    var Controls = Juime.Controls;
})(Juime || (Juime = {}));

$.widget("custom.juimeMenu", $.ui.menu, {
    _open: function (submenu) {
        var optionBagDirection = this.element.data('control-instance').options["_direction"];
        var position = $.extend({
            of: this.active
        }, this.options.position);

        clearTimeout(this.timer);
        this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true");
        if (submenu.parent().parent() && submenu.parent().parent()[0] === this.element[0]) {
            position.my = "left top";
            switch (optionBagDirection) {
                case "left":
                    position.at = "left-" + submenu.outerWidth() + " top";
                    break;
                case "top":
                    position.at = "left top-" + submenu.outerHeight();
                    break;
                case "right":
                    position.at = "right top";
                    break;
                case "bottom":
                    position.at = "left bottom";
                    break;
            }
        }
        submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position);
    }
});

$(function () {
    Juime.Intializer();
});
//# sourceMappingURL=juime.unobtrusive.js.map
