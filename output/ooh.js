var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="./definitions/jquery.d.ts"/>
/*********************************************************
  This a javascript library written in typescript language
  https://github.com/phalcondroid/html_object_oriented
  --------------------------------------------------------
  Author: Julián Molina
  
  <julian@phalconphp.com>
  <julian.molina@garlicsoft.com>
  <phalcondroid@gmail.com>
    
    Distributed under the BSD license:
    Copyright 2016 (c) Julián Molina
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

    This paragraph was taken and modify from UglifyJS2, thanks
***********************************************************************/
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
/**
 * [Html description]
 * @type {[type]}
 */
var Html;
(function (Html) {
    /**
     * [Html description]
     * @type {[type]}
     */
    var HtmlElement = (function () {
        /**
         *
         * @param  {string} name [description]
         * @return {[type]}      [description]
         */
        function HtmlElement(name, newClone) {
            if (name === void 0) { name = ""; }
            if (newClone === void 0) { newClone = false; }
            /**
             *
             */
            this.deny = ["Table", "Td", "Div", "Thead", "Tbody", "Tfoot", "Tr", "Td", "Th", "Label", "Span", "I", "A"];
            /**
             * [url description]
             * @type {String}
             */
            this.url = "";
            this.id = name;
            if (newClone) {
                this.element = $(newClone);
            }
            else {
                this.element = this.init(this.getClassName(), name);
            }
            return this;
        }
        /**
         *
         */
        HtmlElement.prototype.create = function (tag) {
            this.element = this.init(tag, this.id);
            return this;
        };
        /**
         * Create html component like jquery object
         *
         * @param  {string} element [description]
         * @param  {string} name    [description]
         * @return HTMLElement
         */
        HtmlElement.prototype.init = function (element, name) {
            this.className = element;
            var elementJquery = $(document.createElement(element));
            if (element === "Button") {
                elementJquery.attr("type", "button");
            }
            if (name !== "") {
                if ($.inArray(element, this.deny) === -1) {
                    elementJquery.attr("name", name);
                }
                elementJquery.attr("id", name);
            }
            return elementJquery;
        };
        /**
         *
         * @return
         */
        HtmlElement.prototype.getType = function () {
            return this.className;
        };
        /**
         * [class description]
         * @param  {string} class [description]
         * @return {[type]}       [description]
         */
        HtmlElement.prototype.class = function (attrClass) {
            this.element.attr("class", attrClass);
            return this;
        };
        /**
         *
         * @return {[type]} [description]
         */
        HtmlElement.prototype.addChild = function (element) {
            this.element.append(element);
            return this;
        };
        /**
         * [click description]
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        HtmlElement.prototype.click = function (fn) {
            $(this.element).click(fn);
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.change = function (fn) {
            $(this.element).change(fn);
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.keypress = function (fn) {
            $(this.element).keypress(fn);
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.keydown = function (fn) {
            $(this.element).keydown(fn);
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.keyup = function (fn) {
            $(this.element).keyup(fn);
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.blur = function (fn) {
            $(this.element).blur(fn);
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.focus = function (fn) {
            $(this.element).focus(fn);
            return this;
        };
        /**
         * [setEvent description]
         * @param  {string} event [description]
         * @param  {[type]}       [description]
         * @return {[type]}       [description]
         */
        HtmlElement.prototype.setEvent = function (event, fn, evenType) {
            if (evenType === void 0) { evenType = "click"; }
            // Delete created methods
            $(this.element).unbind(event);
            switch (event) {
                case "click":
                    $(this.element).click(fn);
                    break;
                case "change":
                    $(this.element).change(fn);
                    break;
                case "keypress":
                    $(this.element).keypress(fn);
                    break;
                case "keydown":
                    $(this.element).keydown(fn);
                    break;
                case "keyup":
                    $(this.element).keyup(fn);
                    break;
                case "blur":
                    $(this.element).blur(fn);
                    break;
                case "focus":
                    $(this.element).focus(fn);
                    break;
            }
            return this;
        };
        /**
         * [get description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.getElement = function () {
            return this.element;
        };
        HtmlElement.prototype.getJqueryElement = function (element) {
            if (element instanceof Html.HtmlElement) {
                return element.getElement();
            }
            else {
                return element;
            }
        };
        /**
         * Append elements
         * @param value append
         * @return this
         */
        HtmlElement.prototype.append = function (append) {
            if (Array.isArray(append)) {
                for (var key in append) {
                    this.element.append(this.getJqueryElement(append[key]));
                }
            }
            else {
                if (typeof append != "object") {
                    this.element.append(this.getJqueryElement(append));
                }
                else {
                    this.element.append(this.getJqueryElement(append));
                }
            }
            return this;
        };
        /**
         * [html description]
         * @param  {[type]} html [description]
         * @return {[type]}      [description]
         */
        HtmlElement.prototype.html = function (html) {
            if (html === void 0) { html = null; }
            if (html) {
                this.element.html(html);
                return this;
            }
            else {
                return this.element.html();
            }
        };
        HtmlElement.prototype.getHtml = function () {
            return this.element.html();
        };
        /**
         *
         * @param attr
         * @return
         */
        HtmlElement.prototype.attr = function (attr, value) {
            if (value === void 0) { value = false; }
            if (typeof attr == "object") {
                for (var key in attr) {
                    this.element.attr(key, attr[key]);
                }
            }
            else if (typeof attr == "string" && value != false) {
                this.element.attr(attr, value);
            }
            return this;
        };
        /**
         *
         */
        HtmlElement.prototype.getAttr = function (attr) {
            return this.element.attr(attr);
        };
        /**
         * [css description]
         * @param  {[type]} css [description]
         * @return {[type]}     [description]
         */
        HtmlElement.prototype.css = function (css, value) {
            if (value === void 0) { value = false; }
            if (typeof css == "object") {
                for (var key in css) {
                    this.element.css(key, css[key]);
                }
            }
            else if (typeof css == "string" && value != false) {
                this.element.attr(css, value);
            }
            return this;
        };
        /**
         *
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        HtmlElement.prototype.unbind = function (event) {
            this.element.unbind(event);
            return this;
        };
        /**
         * [getRandom description]
         * @param  {[type]} init [description]
         * @param  {[type]} last [description]
         * @return {[type]}      [description]
         */
        HtmlElement.prototype.getRandom = function (init, last) {
            return Math.floor((Math.random() * last) + init);
        };
        /**
         * [sanitizeString description]
         * @param  {string} str [description]
         * @return {[type]}     [description]
         */
        HtmlElement.prototype.sanitizeString = function (str) {
            var idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
            idTr = idTr.toString().replace(/\s/g, "");
            return idTr;
        };
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.getClassName = function () {
            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec(this["constructor"].toString());
            return (results && results.length > 1) ? results[1] : "";
        };
        /**
         * [validateAndSet description]
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        HtmlElement.prototype.validateAndSet = function (config) {
            try {
                if (typeof config.name === "undefined") {
                    throw "The identify is required";
                }
                else if (typeof config.element === "undefined") {
                    throw "The type element is required";
                }
                else if (typeof config.event !== "undefined") {
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        /**
         * [capitalize description]
         * @param  {[type]} str [description]
         * @return {[type]}     [description]
         */
        HtmlElement.prototype.capitalize = function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
        /**
         * [clone description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.clone = function (newIdentify) {
            if (newIdentify === void 0) { newIdentify = ""; }
            var newElement = this.element.clone();
            return new HtmlElement(newIdentify, newElement[0]);
        };
        /**
         * [ajax description]
         * @return {[type]} [description]
         */
        HtmlElement.prototype.ajax = function (config) {
            $.ajax({
                "url": config.url,
                "type": config.type,
                "beforeSend": config.beforeSend,
                "dataType": config.dataType,
                "data": config.data
            }).done(config.success);
            return this;
        };
        /**
         * zzzz
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        HtmlElement.prototype.val = function (val) {
            if (val === void 0) { val = null; }
            if (val) {
                this.element.val(val);
                return this;
            }
            else {
                return this.element.val();
            }
        };
        /**
         * zzzz
         * @param  {any = null}        text [description]
         * @return {[type]}   [description]
         */
        HtmlElement.prototype.text = function (text) {
            if (text === void 0) { text = null; }
            if (text) {
                this.element.text(text);
                return this;
            }
            else {
                return this.element.text();
            }
        };
        return HtmlElement;
    }());
    Html.HtmlElement = HtmlElement;
    /**
     *
     */
    var A = (function (_super) {
        __extends(A, _super);
        function A() {
            _super.apply(this, arguments);
        }
        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        A.prototype.favIcon = function (favIcon) {
            var icon = new Html.I("favIcon" + this.id)
                .class(favIcon);
            this.getElement()
                .append(icon.getElement());
            return this;
        };
        /**
         * [href description]
         * @param  {[type]} href [description]
         * @return {[type]}      [description]
         */
        A.prototype.href = function (href) {
            this.getElement().attr("href", href);
            return this;
        };
        return A;
    }(HtmlElement));
    Html.A = A;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Abbr = (function (_super) {
        __extends(Abbr, _super);
        function Abbr() {
            _super.apply(this, arguments);
        }
        return Abbr;
    }(HtmlElement));
    Html.Abbr = Abbr;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Address = (function (_super) {
        __extends(Address, _super);
        function Address() {
            _super.apply(this, arguments);
        }
        return Address;
    }(HtmlElement));
    Html.Address = Address;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Area = (function (_super) {
        __extends(Area, _super);
        function Area() {
            _super.apply(this, arguments);
        }
        return Area;
    }(HtmlElement));
    Html.Area = Area;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Article = (function (_super) {
        __extends(Article, _super);
        function Article() {
            _super.apply(this, arguments);
        }
        return Article;
    }(HtmlElement));
    Html.Article = Article;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Aside = (function (_super) {
        __extends(Aside, _super);
        function Aside() {
            _super.apply(this, arguments);
        }
        return Aside;
    }(HtmlElement));
    Html.Aside = Aside;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Audio = (function (_super) {
        __extends(Audio, _super);
        function Audio() {
            _super.apply(this, arguments);
        }
        return Audio;
    }(HtmlElement));
    Html.Audio = Audio;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            _super.apply(this, arguments);
        }
        return B;
    }(HtmlElement));
    Html.B = B;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Base = (function (_super) {
        __extends(Base, _super);
        function Base() {
            _super.apply(this, arguments);
        }
        return Base;
    }(HtmlElement));
    Html.Base = Base;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Bdi = (function (_super) {
        __extends(Bdi, _super);
        function Bdi() {
            _super.apply(this, arguments);
        }
        return Bdi;
    }(HtmlElement));
    Html.Bdi = Bdi;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Bdo = (function (_super) {
        __extends(Bdo, _super);
        function Bdo() {
            _super.apply(this, arguments);
        }
        return Bdo;
    }(HtmlElement));
    Html.Bdo = Bdo;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Blockquote = (function (_super) {
        __extends(Blockquote, _super);
        function Blockquote() {
            _super.apply(this, arguments);
        }
        return Blockquote;
    }(HtmlElement));
    Html.Blockquote = Blockquote;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Body = (function (_super) {
        __extends(Body, _super);
        function Body() {
            _super.apply(this, arguments);
        }
        return Body;
    }(HtmlElement));
    Html.Body = Body;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Br = (function (_super) {
        __extends(Br, _super);
        function Br() {
            _super.apply(this, arguments);
        }
        return Br;
    }(HtmlElement));
    Html.Br = Br;
    /**
     *
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        Button.prototype.type = function (type) {
            this.getElement().attr("type", type);
            return this;
        };
        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        Button.prototype.favIcon = function (favIcon) {
            var icon = new Html.I("favIcon" + this.id)
                .class(favIcon);
            this.getElement()
                .append(icon.getElement());
            return this;
        };
        /**
         * [succes description]
         * @return {[type]} [description]
         */
        Button.prototype.success = function () {
            this.element.addClass("btn btn-success");
            return this;
        };
        /**
         * [notice description]
         * @return {[type]} [description]
         */
        Button.prototype.notice = function () {
            this.element.addClass("btn btn-notice");
            return this;
        };
        /**
         * [warning description]
         * @return {[type]} [description]
         */
        Button.prototype.warning = function () {
            this.element.addClass("btn btn-warning");
            return this;
        };
        /**
         * [danger description]
         * @return {[type]} [description]
         */
        Button.prototype.danger = function () {
            this.element.addClass("btn btn-danger");
            return this;
        };
        return Button;
    }(HtmlElement));
    Html.Button = Button;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Canvas = (function (_super) {
        __extends(Canvas, _super);
        function Canvas() {
            _super.apply(this, arguments);
        }
        return Canvas;
    }(HtmlElement));
    Html.Canvas = Canvas;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Caption = (function (_super) {
        __extends(Caption, _super);
        function Caption() {
            _super.apply(this, arguments);
        }
        return Caption;
    }(HtmlElement));
    Html.Caption = Caption;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Cite = (function (_super) {
        __extends(Cite, _super);
        function Cite() {
            _super.apply(this, arguments);
        }
        return Cite;
    }(HtmlElement));
    Html.Cite = Cite;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Code = (function (_super) {
        __extends(Code, _super);
        function Code() {
            _super.apply(this, arguments);
        }
        return Code;
    }(HtmlElement));
    Html.Code = Code;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Col = (function (_super) {
        __extends(Col, _super);
        function Col() {
            _super.apply(this, arguments);
        }
        return Col;
    }(HtmlElement));
    Html.Col = Col;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var ColGroup = (function (_super) {
        __extends(ColGroup, _super);
        function ColGroup() {
            _super.apply(this, arguments);
        }
        return ColGroup;
    }(HtmlElement));
    Html.ColGroup = ColGroup;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Datalist = (function (_super) {
        __extends(Datalist, _super);
        function Datalist() {
            _super.apply(this, arguments);
        }
        return Datalist;
    }(HtmlElement));
    Html.Datalist = Datalist;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Dd = (function (_super) {
        __extends(Dd, _super);
        function Dd() {
            _super.apply(this, arguments);
        }
        return Dd;
    }(HtmlElement));
    Html.Dd = Dd;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Del = (function (_super) {
        __extends(Del, _super);
        function Del() {
            _super.apply(this, arguments);
        }
        return Del;
    }(HtmlElement));
    Html.Del = Del;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Details = (function (_super) {
        __extends(Details, _super);
        function Details() {
            _super.apply(this, arguments);
        }
        return Details;
    }(HtmlElement));
    Html.Details = Details;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Dfn = (function (_super) {
        __extends(Dfn, _super);
        function Dfn() {
            _super.apply(this, arguments);
        }
        return Dfn;
    }(HtmlElement));
    Html.Dfn = Dfn;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Dialog = (function (_super) {
        __extends(Dialog, _super);
        function Dialog() {
            _super.apply(this, arguments);
        }
        return Dialog;
    }(HtmlElement));
    Html.Dialog = Dialog;
    /**
     *
     */
    var Div = (function (_super) {
        __extends(Div, _super);
        function Div() {
            _super.apply(this, arguments);
        }
        return Div;
    }(HtmlElement));
    Html.Div = Div;
    /**
     *
     */
    var Dl = (function (_super) {
        __extends(Dl, _super);
        function Dl() {
            _super.apply(this, arguments);
        }
        return Dl;
    }(HtmlElement));
    Html.Dl = Dl;
    /**
     *
     */
    var Dt = (function (_super) {
        __extends(Dt, _super);
        function Dt() {
            _super.apply(this, arguments);
        }
        return Dt;
    }(HtmlElement));
    Html.Dt = Dt;
    /**
     *
     */
    var Em = (function (_super) {
        __extends(Em, _super);
        function Em() {
            _super.apply(this, arguments);
        }
        return Em;
    }(HtmlElement));
    Html.Em = Em;
    /**
     *
     */
    var Embed = (function (_super) {
        __extends(Embed, _super);
        function Embed() {
            _super.apply(this, arguments);
        }
        return Embed;
    }(HtmlElement));
    Html.Embed = Embed;
    /**
     *
     */
    var Fieldset = (function (_super) {
        __extends(Fieldset, _super);
        function Fieldset() {
            _super.apply(this, arguments);
        }
        return Fieldset;
    }(HtmlElement));
    Html.Fieldset = Fieldset;
    /**
     *
     */
    var Figcaption = (function (_super) {
        __extends(Figcaption, _super);
        function Figcaption() {
            _super.apply(this, arguments);
        }
        return Figcaption;
    }(HtmlElement));
    Html.Figcaption = Figcaption;
    /**
     *
     */
    var Figure = (function (_super) {
        __extends(Figure, _super);
        function Figure() {
            _super.apply(this, arguments);
        }
        return Figure;
    }(HtmlElement));
    Html.Figure = Figure;
    /**
     *
     */
    var Footer = (function (_super) {
        __extends(Footer, _super);
        function Footer() {
            _super.apply(this, arguments);
        }
        return Footer;
    }(HtmlElement));
    Html.Footer = Footer;
    /**
     *
     */
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            _super.apply(this, arguments);
        }
        return Form;
    }(HtmlElement));
    Html.Form = Form;
    /**
     *
     */
    var H1 = (function (_super) {
        __extends(H1, _super);
        function H1() {
            _super.apply(this, arguments);
        }
        return H1;
    }(HtmlElement));
    Html.H1 = H1;
    /**
     *
     */
    var H2 = (function (_super) {
        __extends(H2, _super);
        function H2() {
            _super.apply(this, arguments);
        }
        return H2;
    }(HtmlElement));
    Html.H2 = H2;
    /**
     *
     */
    var H3 = (function (_super) {
        __extends(H3, _super);
        function H3() {
            _super.apply(this, arguments);
        }
        return H3;
    }(HtmlElement));
    Html.H3 = H3;
    /**
     *
     */
    var H4 = (function (_super) {
        __extends(H4, _super);
        function H4() {
            _super.apply(this, arguments);
        }
        return H4;
    }(HtmlElement));
    Html.H4 = H4;
    /**
     *
     */
    var H5 = (function (_super) {
        __extends(H5, _super);
        function H5() {
            _super.apply(this, arguments);
        }
        return H5;
    }(HtmlElement));
    Html.H5 = H5;
    /**
     *
     */
    var H6 = (function (_super) {
        __extends(H6, _super);
        function H6() {
            _super.apply(this, arguments);
        }
        return H6;
    }(HtmlElement));
    Html.H6 = H6;
    /**
     *
     */
    var Head = (function (_super) {
        __extends(Head, _super);
        function Head() {
            _super.apply(this, arguments);
        }
        return Head;
    }(HtmlElement));
    Html.Head = Head;
    /**
     *
     */
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            _super.apply(this, arguments);
        }
        return Header;
    }(HtmlElement));
    Html.Header = Header;
    /**
     *Ttpt
    export class Html extends HtmlElement
    {
    }
    */
    /**
     *
     */
    var I = (function (_super) {
        __extends(I, _super);
        function I() {
            _super.apply(this, arguments);
        }
        return I;
    }(HtmlElement));
    Html.I = I;
    /**
     *
     */
    var Iframe = (function (_super) {
        __extends(Iframe, _super);
        function Iframe() {
            _super.apply(this, arguments);
        }
        return Iframe;
    }(HtmlElement));
    Html.Iframe = Iframe;
    var Img = (function (_super) {
        __extends(Img, _super);
        function Img() {
            _super.apply(this, arguments);
        }
        Img.prototype.src = function (src) {
            this.getElement().attr("src", src);
            return this;
        };
        return Img;
    }(HtmlElement));
    Html.Img = Img;
    /**
     * [Input description]
     * @type {[type]}
     */
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input() {
            _super.apply(this, arguments);
        }
        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        Input.prototype.type = function (type) {
            this.getElement().attr("type", type);
            return this;
        };
        /**
         * [value description]
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        Input.prototype.val = function (value) {
            if (value === void 0) { value = null; }
            if (value === null) {
                return this.getElement().val();
            }
            this.getElement().val(value);
            return this;
        };
        return Input;
    }(HtmlElement));
    Html.Input = Input;
    /**
     *
     */
    var Ins = (function (_super) {
        __extends(Ins, _super);
        function Ins() {
            _super.apply(this, arguments);
        }
        return Ins;
    }(HtmlElement));
    Html.Ins = Ins;
    /**
     *
     */
    var Kbd = (function (_super) {
        __extends(Kbd, _super);
        function Kbd() {
            _super.apply(this, arguments);
        }
        return Kbd;
    }(HtmlElement));
    Html.Kbd = Kbd;
    /**
     *
     */
    var Keygen = (function (_super) {
        __extends(Keygen, _super);
        function Keygen() {
            _super.apply(this, arguments);
        }
        return Keygen;
    }(HtmlElement));
    Html.Keygen = Keygen;
    /**
     *
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label() {
            _super.apply(this, arguments);
        }
        return Label;
    }(HtmlElement));
    Html.Label = Label;
    /**
     *
     */
    var Leyend = (function (_super) {
        __extends(Leyend, _super);
        function Leyend() {
            _super.apply(this, arguments);
        }
        return Leyend;
    }(HtmlElement));
    Html.Leyend = Leyend;
    /**
     *
     */
    var Li = (function (_super) {
        __extends(Li, _super);
        function Li() {
            _super.apply(this, arguments);
        }
        return Li;
    }(HtmlElement));
    Html.Li = Li;
    /**
     *
     */
    var Link = (function (_super) {
        __extends(Link, _super);
        function Link() {
            _super.apply(this, arguments);
        }
        return Link;
    }(HtmlElement));
    Html.Link = Link;
    /**
     *
     */
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
        }
        return Main;
    }(HtmlElement));
    Html.Main = Main;
    /**
     *
     */
    var Map = (function (_super) {
        __extends(Map, _super);
        function Map() {
            _super.apply(this, arguments);
        }
        return Map;
    }(HtmlElement));
    Html.Map = Map;
    /**
     *
     */
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        return Menu;
    }(HtmlElement));
    Html.Menu = Menu;
    /**
     *
     */
    var MenuItem = (function (_super) {
        __extends(MenuItem, _super);
        function MenuItem() {
            _super.apply(this, arguments);
        }
        return MenuItem;
    }(HtmlElement));
    Html.MenuItem = MenuItem;
    /**
     *
     */
    var Meta = (function (_super) {
        __extends(Meta, _super);
        function Meta() {
            _super.apply(this, arguments);
        }
        return Meta;
    }(HtmlElement));
    Html.Meta = Meta;
    /**
     *
     */
    var Meter = (function (_super) {
        __extends(Meter, _super);
        function Meter() {
            _super.apply(this, arguments);
        }
        return Meter;
    }(HtmlElement));
    Html.Meter = Meter;
    /**
     *
     */
    var Nav = (function (_super) {
        __extends(Nav, _super);
        function Nav() {
            _super.apply(this, arguments);
        }
        return Nav;
    }(HtmlElement));
    Html.Nav = Nav;
    /**
     *
     */
    var Noscrip = (function (_super) {
        __extends(Noscrip, _super);
        function Noscrip() {
            _super.apply(this, arguments);
        }
        return Noscrip;
    }(HtmlElement));
    Html.Noscrip = Noscrip;
    /**
     *
     */
    var Object = (function (_super) {
        __extends(Object, _super);
        function Object() {
            _super.apply(this, arguments);
        }
        return Object;
    }(HtmlElement));
    Html.Object = Object;
    /**
     *
     */
    var Ol = (function (_super) {
        __extends(Ol, _super);
        function Ol() {
            _super.apply(this, arguments);
        }
        return Ol;
    }(HtmlElement));
    Html.Ol = Ol;
    /**
     *
     */
    var Optgroup = (function (_super) {
        __extends(Optgroup, _super);
        function Optgroup() {
            _super.apply(this, arguments);
        }
        return Optgroup;
    }(HtmlElement));
    Html.Optgroup = Optgroup;
    /**
     *
     */
    var Option = (function (_super) {
        __extends(Option, _super);
        function Option() {
            _super.apply(this, arguments);
        }
        return Option;
    }(HtmlElement));
    Html.Option = Option;
    /**
     *
     */
    var Output = (function (_super) {
        __extends(Output, _super);
        function Output() {
            _super.apply(this, arguments);
        }
        return Output;
    }(HtmlElement));
    Html.Output = Output;
    /**
     *
     */
    var P = (function (_super) {
        __extends(P, _super);
        function P() {
            _super.apply(this, arguments);
        }
        return P;
    }(HtmlElement));
    Html.P = P;
    /**
     *
     */
    var Param = (function (_super) {
        __extends(Param, _super);
        function Param() {
            _super.apply(this, arguments);
        }
        return Param;
    }(HtmlElement));
    Html.Param = Param;
    /**
     *
     */
    var Pre = (function (_super) {
        __extends(Pre, _super);
        function Pre() {
            _super.apply(this, arguments);
        }
        return Pre;
    }(HtmlElement));
    Html.Pre = Pre;
    /**
     *
     */
    var Progress = (function (_super) {
        __extends(Progress, _super);
        function Progress() {
            _super.apply(this, arguments);
        }
        return Progress;
    }(HtmlElement));
    Html.Progress = Progress;
    /**
     *
     */
    var Q = (function (_super) {
        __extends(Q, _super);
        function Q() {
            _super.apply(this, arguments);
        }
        return Q;
    }(HtmlElement));
    Html.Q = Q;
    /**
     *
     */
    var Rp = (function (_super) {
        __extends(Rp, _super);
        function Rp() {
            _super.apply(this, arguments);
        }
        return Rp;
    }(HtmlElement));
    Html.Rp = Rp;
    /**
     *
     */
    var Rt = (function (_super) {
        __extends(Rt, _super);
        function Rt() {
            _super.apply(this, arguments);
        }
        return Rt;
    }(HtmlElement));
    Html.Rt = Rt;
    /**
     *
     */
    var Ruby = (function (_super) {
        __extends(Ruby, _super);
        function Ruby() {
            _super.apply(this, arguments);
        }
        return Ruby;
    }(HtmlElement));
    Html.Ruby = Ruby;
    /**
     *
     */
    var S = (function (_super) {
        __extends(S, _super);
        function S() {
            _super.apply(this, arguments);
        }
        return S;
    }(HtmlElement));
    Html.S = S;
    /**
     *
     */
    var Samp = (function (_super) {
        __extends(Samp, _super);
        function Samp() {
            _super.apply(this, arguments);
        }
        return Samp;
    }(HtmlElement));
    Html.Samp = Samp;
    /**
     *
     */
    var Script = (function (_super) {
        __extends(Script, _super);
        function Script() {
            _super.apply(this, arguments);
        }
        return Script;
    }(HtmlElement));
    Html.Script = Script;
    /**
     *
     */
    var Section = (function (_super) {
        __extends(Section, _super);
        function Section() {
            _super.apply(this, arguments);
        }
        return Section;
    }(HtmlElement));
    Html.Section = Section;
    var Select = (function (_super) {
        __extends(Select, _super);
        function Select() {
            _super.apply(this, arguments);
        }
        /**
         * [build description]
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        Select.prototype.build = function (content) {
            this.getElement().empty();
            for (var key in content) {
                var option = new Html.Option();
                option.attr({
                    "value": content[key],
                });
                option.getElement().text(content[key]);
                this.append([
                    option.getElement()
                ]);
            }
            return this;
        };
        Select.prototype.selectOption = function (value) {
            this.getElement().children().each(function () {
                if ($(this).val() === value) {
                    $(this).prop("selected", true);
                }
            });
        };
        /**
         * [chosen description]
         * @return {[type]} [description]
         */
        Select.prototype.chosen = function () {
            this.getElement().chosen();
            return this;
        };
        return Select;
    }(HtmlElement));
    Html.Select = Select;
    /**
     *
     */
    var Small = (function (_super) {
        __extends(Small, _super);
        function Small() {
            _super.apply(this, arguments);
        }
        return Small;
    }(HtmlElement));
    Html.Small = Small;
    /**
     *
     */
    var Source = (function (_super) {
        __extends(Source, _super);
        function Source() {
            _super.apply(this, arguments);
        }
        return Source;
    }(HtmlElement));
    Html.Source = Source;
    /**
     *
     */
    var Span = (function (_super) {
        __extends(Span, _super);
        function Span() {
            _super.apply(this, arguments);
        }
        return Span;
    }(HtmlElement));
    Html.Span = Span;
    /**
     *
     */
    var Strong = (function (_super) {
        __extends(Strong, _super);
        function Strong() {
            _super.apply(this, arguments);
        }
        return Strong;
    }(HtmlElement));
    Html.Strong = Strong;
    /**
     *
     */
    var Style = (function (_super) {
        __extends(Style, _super);
        function Style() {
            _super.apply(this, arguments);
        }
        return Style;
    }(HtmlElement));
    Html.Style = Style;
    /**
     *
     */
    var Sub = (function (_super) {
        __extends(Sub, _super);
        function Sub() {
            _super.apply(this, arguments);
        }
        return Sub;
    }(HtmlElement));
    Html.Sub = Sub;
    /**
     *
     */
    var Summary = (function (_super) {
        __extends(Summary, _super);
        function Summary() {
            _super.apply(this, arguments);
        }
        return Summary;
    }(HtmlElement));
    Html.Summary = Summary;
    /**
     *
     */
    var Sup = (function (_super) {
        __extends(Sup, _super);
        function Sup() {
            _super.apply(this, arguments);
        }
        return Sup;
    }(HtmlElement));
    Html.Sup = Sup;
    /**
     * [Table description]
     * @type {[type]}
     */
    var Table = (function (_super) {
        __extends(Table, _super);
        function Table() {
            _super.apply(this, arguments);
            this.header = false;
        }
        /**
         *
         *
         */
        Table.prototype.setHeader = function (columns) {
            this.header = true;
            this.thead = new Html.Thead("thead" + this.id);
            this.tr = new Html.Tr("trHeader" + this.id);
            var i = 0;
            for (var key in columns) {
                var th = new Html.Th("TheadTh" + key + this.id);
                if (typeof columns[key] == "object") {
                    th.append(columns[key]);
                }
                else {
                    th.getElement().append(this.capitalize(columns[key]));
                }
                this.tr.getElement().append(th.getElement());
                if (typeof this.fnCHeader === "function") {
                    this.fnCHeader(th, i, columns[key], key);
                }
                i++;
            }
            this.thead.getElement().append(this.tr.getElement());
            this.getElement().append(this.thead.getElement());
            return this;
        };
        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        Table.prototype.setHeaderCustomize = function (fn) {
            this.fnCHeader = fn;
            return this;
        };
        /**
         *
         * @param  {[type]} rows
         * @return {[type]}
         */
        Table.prototype.build = function (content) {
            this.system = ["click", "customize"];
            this.tbody = new Html.Tbody("tbody" + this.id);
            var html = new Html.HtmlElement();
            var i = 0;
            for (var key in content) {
                var trIdentify = html.sanitizeString(key) + this.id;
                var tr = new Html.Tr("TbodyTr" + trIdentify);
                var header = new Array();
                var j = 0;
                for (var row in content[key]) {
                    header[j] = row;
                    var trIdentify2 = html.sanitizeString(key) + html.sanitizeString(row) + this.id;
                    var td = new Html.Td("TbodyTd" + trIdentify2);
                    if (this.validateSystemKeys(row)) {
                        var contentRow = content[key][row];
                        var finalContent;
                        if (contentRow instanceof Html.HtmlElement) {
                            finalContent = contentRow.getElement();
                        }
                        else if (contentRow instanceof jQuery) {
                            finalContent = contentRow;
                        }
                        else if (typeof contentRow == "object") {
                            if (contentRow.hasOwnProperty("content")) {
                                finalContent = contentRow.content;
                            }
                            if (contentRow.hasOwnProperty("class")) {
                                td.attr(contentRow.class);
                            }
                            if (contentRow.hasOwnProperty("attr")) {
                                td.attr(contentRow.attr);
                            }
                            if (contentRow.hasOwnProperty("css")) {
                                td.attr(contentRow.css);
                            }
                            if (contentRow.hasOwnProperty("addTd")) {
                                tr.append([
                                    contentRow.addTd
                                ]);
                            }
                            if (contentRow.hasOwnProperty("event")) {
                                var functionTd = contentRow.event;
                                functionTd(td);
                            }
                        }
                        else {
                            finalContent = contentRow;
                        }
                        td.append([
                            finalContent
                        ]);
                        tr.append([
                            td.getElement()
                        ]);
                    }
                    if (typeof this.fnCContent === "function") {
                        this.fnCContent(td, j, content[key][row], row);
                        if (this.header === false) {
                            this.fnCHeader = this.fnCContent;
                        }
                    }
                    j++;
                }
                this.tbody.append([
                    tr.getElement()
                ]);
                i++;
            }
            if (this.header === false) {
                this.setHeader(header);
            }
            this.append([
                this.tbody.getElement()
            ]);
            return this;
        };
        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        Table.prototype.setContentCustomize = function (fn) {
            this.fnCContent = fn;
            return this;
        };
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        Table.prototype.validateSystemKeys = function (row) {
            if ($.inArray(row, this.system) === -1) {
                return true;
            }
            return false;
        };
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        Table.prototype.paginate = function (row) {
            if (row === void 0) { row = 10; }
            this.getElement().DataTable({
                searching: false,
                lengthChange: false,
                pageLength: row,
                aoColumns: [
                    null,
                    null
                ]
            });
            return this;
        };
        return Table;
    }(HtmlElement));
    Html.Table = Table;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Thead = (function (_super) {
        __extends(Thead, _super);
        function Thead() {
            _super.apply(this, arguments);
        }
        return Thead;
    }(HtmlElement));
    Html.Thead = Thead;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Tbody = (function (_super) {
        __extends(Tbody, _super);
        function Tbody() {
            _super.apply(this, arguments);
        }
        return Tbody;
    }(HtmlElement));
    Html.Tbody = Tbody;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Tr = (function (_super) {
        __extends(Tr, _super);
        function Tr() {
            _super.apply(this, arguments);
        }
        return Tr;
    }(HtmlElement));
    Html.Tr = Tr;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Td = (function (_super) {
        __extends(Td, _super);
        function Td() {
            _super.apply(this, arguments);
        }
        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        Td.prototype.colspan = function (cols) {
            this.attr({
                "colspan": cols
            });
        };
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        Td.prototype.rowspan = function (rows) {
            this.attr({
                "rowspan": rows
            });
        };
        return Td;
    }(HtmlElement));
    Html.Td = Td;
    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    var Th = (function (_super) {
        __extends(Th, _super);
        function Th() {
            _super.apply(this, arguments);
        }
        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        Th.prototype.colspan = function (cols) {
            this.attr({
                "colspan": cols
            });
        };
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        Th.prototype.rowspan = function (rows) {
            this.attr({
                "rowspan": rows
            });
        };
        return Th;
    }(HtmlElement));
    Html.Th = Th;
    /**
     *
     */
    var Tfoot = (function (_super) {
        __extends(Tfoot, _super);
        function Tfoot() {
            _super.apply(this, arguments);
        }
        return Tfoot;
    }(HtmlElement));
    Html.Tfoot = Tfoot;
    /**
     *
     */
    var Time = (function (_super) {
        __extends(Time, _super);
        function Time() {
            _super.apply(this, arguments);
        }
        return Time;
    }(HtmlElement));
    Html.Time = Time;
    /**
     *
     */
    var Textarea = (function (_super) {
        __extends(Textarea, _super);
        function Textarea() {
            _super.apply(this, arguments);
        }
        return Textarea;
    }(HtmlElement));
    Html.Textarea = Textarea;
    /**
     *
     */
    var Title = (function (_super) {
        __extends(Title, _super);
        function Title() {
            _super.apply(this, arguments);
        }
        return Title;
    }(HtmlElement));
    Html.Title = Title;
    /**
     *
     */
    var Track = (function (_super) {
        __extends(Track, _super);
        function Track() {
            _super.apply(this, arguments);
        }
        return Track;
    }(HtmlElement));
    Html.Track = Track;
    /**
     *
     */
    var U = (function (_super) {
        __extends(U, _super);
        function U() {
            _super.apply(this, arguments);
        }
        return U;
    }(HtmlElement));
    Html.U = U;
    /**
     *
     * @type {[type]}
     */
    var Ul = (function (_super) {
        __extends(Ul, _super);
        function Ul() {
            _super.apply(this, arguments);
        }
        /**
         *
         * @param
         * @param
         * @return
         */
        Ul.prototype.create = function (config) {
            for (var i = 0; i < config.content.length; i++) {
                var li = new Html.Li(config.name + i);
                if (typeof config.content !== "undefined") {
                }
                if (typeof config.clickChild !== "undefined") {
                    li.setEvent(config.event, config.clickChild.bind(li));
                }
                if (typeof config.customize !== "undefined") {
                    config.customize(li, i, config.content[i]);
                }
                this.getElement().append(li.getElement());
            }
            return this;
        };
        return Ul;
    }(HtmlElement));
    Html.Ul = Ul;
    /**
     *
     */
    var Var = (function (_super) {
        __extends(Var, _super);
        function Var() {
            _super.apply(this, arguments);
        }
        return Var;
    }(HtmlElement));
    Html.Var = Var;
    /**
     *
     */
    var Video = (function (_super) {
        __extends(Video, _super);
        function Video() {
            _super.apply(this, arguments);
        }
        return Video;
    }(HtmlElement));
    Html.Video = Video;
    /**
     *
     */
    var Wbr = (function (_super) {
        __extends(Wbr, _super);
        function Wbr() {
            _super.apply(this, arguments);
        }
        return Wbr;
    }(HtmlElement));
    Html.Wbr = Wbr;
})(Html || (Html = {}));
/// <reference path="../definitions/jquery.d.ts"/>
/// <reference path="../Html.ts"/>
var Bootstrap;
(function (Bootstrap) {
    /**
     * [Tabs description]
     * @type {[type]}
     */
    var Tabs = (function () {
        /**
         *
         * @return
         */
        function Tabs() {
            this.random = new Html.HtmlElement().getRandom(1, 100);
            return this;
        }
        /**
         *
         * @param
         * @return
         */
        Tabs.prototype.setId = function (id) {
            this.id = id;
        };
        /**
         *
         * @return
         */
        Tabs.prototype.setTabs = function (columns) {
            this.divContainer = new Html.Div("tabContainer" + this.id);
            this.divContainer.class("tabs-container");
            this.divContent = new Html.Div("tabContent" + this.id);
            this.divContent.class("tab-content");
            this.ul = new Html.Ul("ul" + this.id);
            this.ul.class("nav nav-tabs");
            this.ul.create({
                "name": "li" + this.id,
                "content": columns,
                "customize": function (li, i, content) {
                    if (i === 0) {
                        li.class("active");
                    }
                    var a = new Html.A("a" + this.id);
                    a.attr({
                        "data-toggle": "tab",
                        "href": "#content" + this.random + i
                    });
                    a.html(content);
                    li.append([
                        a.getElement()
                    ]);
                }.bind(this)
            });
            return this;
        };
        /**
         * Set Content
         * @return
         */
        Tabs.prototype.setContent = function (content) {
            var i = 0;
            for (var key in content) {
                var div = new Html.Div("content" + this.random + i);
                div.class("tab-pane");
                if (i === 0) {
                    div.class("tab-pane active");
                }
                div.getElement().html(content[key]);
                this.divContent.getElement().append(div.getElement());
                i++;
            }
        };
        /**
         * getRandom
         * @return {[type]} [description]
         */
        Tabs.prototype.getRandom = function () {
            return this.random;
        };
        /**
         *
         */
        Tabs.prototype.clean = function () {
            if (typeof this.divContainer !== "undefined") {
                this.divContainer.getElement().html("");
                return this;
            }
        };
        /**
         * getElement
         * @return
         */
        Tabs.prototype.getElement = function () {
            this.divContainer.getElement().append(this.ul.getElement());
            this.divContainer.getElement().append(this.divContent.getElement());
            return this.divContainer.getElement();
        };
        return Tabs;
    }());
    Bootstrap.Tabs = Tabs;
    /**
     *
     * @type
     */
    var Modal = (function () {
        /**
         *
         * @return
         */
        function Modal(name) {
            this.container = new Html.Div(name);
            this.container.attr({
                "class": "modal fade",
                "tabindex": "-1",
                "role": "dialog",
                "aria-labelledby": "myModalLabel"
            });
            this.dialog = new Html.Div();
            this.dialog.attr({
                "class": "modal-dialog",
                "role": "document"
            });
            this.content = new Html.Div();
            this.content.attr({
                "class": "modal-content"
            });
            this.header = new Html.Div();
            this.header.class("modal-header");
            this.body = new Html.Div();
            this.body.class("modal-body");
            this.foot = new Html.Div();
            this.foot.class("modal-footer");
            this.setCloseButton();
            return this;
        }
        /**
         * [large description]
         * @return {[type]} [description]
         */
        Modal.prototype.large = function () {
            this.dialog.getElement().addClass("modal-lg");
            return this;
        };
        /**
         * [small description]
         * @return {[type]} [description]
         */
        Modal.prototype.small = function () {
            this.dialog.getElement().addClass("modal-sm");
            return this;
        };
        /**
         * [normal description]
         * @return {[type]} [description]
         */
        Modal.prototype.normal = function () {
            this.dialog.getElement().removeClass("modal-lg");
            this.dialog.getElement().removeClass("modal-sm");
            return this;
        };
        /**
         *
         * @param  {boolean = true}        status [description]
         * @param  {any     = ""}          title  [description]
         * @return {[type]}       [description]
         */
        Modal.prototype.setCloseButton = function (status, title) {
            if (status === void 0) { status = true; }
            if (title === void 0) { title = ""; }
            if (status) {
                var buttonClose = new Html.Button();
                buttonClose.attr({
                    "type": "button",
                    "class": "close",
                    "data-dismiss": "modal",
                    "aria-label": title === "" ? "Close" : title
                });
                var span = new Html.Span();
                span.attr({
                    "aria-hidden": "true"
                });
                span.html("&times;");
                buttonClose.html(span.getElement());
                this.header.append([
                    buttonClose.getElement()
                ]);
            }
            return this;
        };
        /**
         *
         * @param  {[type]} title [description]
         * @return {[type]}       [description]
         */
        Modal.prototype.setHeader = function (title) {
            this.header.append([
                title
            ]);
            return this.header;
        };
        /**
         *
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        Modal.prototype.setBody = function (content) {
            this.body.append([
                content
            ]);
            return this;
        };
        /**
         *
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        Modal.prototype.setFooter = function (content) {
            if (content === void 0) { content = ""; }
            this.foot.append([
                content
            ]);
            return this;
        };
        /**
         *
         */
        Modal.prototype.launch = function () {
            this.container.getElement()
                .modal('show');
            return this;
        };
        /**
         *
         */
        Modal.prototype.build = function () {
            this.content.append([
                this.header.getElement(),
                this.body.getElement(),
                this.foot.getElement()
            ]);
            this.dialog.append([
                this.content.getElement()
            ]);
            this.container.append([
                this.dialog.getElement()
            ]);
            return this.container.getElement();
        };
        /**
         *
         */
        Modal.prototype.getElement = function () {
            return this.container.getElement();
        };
        return Modal;
    }());
    Bootstrap.Modal = Modal;
})(Bootstrap || (Bootstrap = {}));
