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
namespace Html
{

    /**
     * [Html description]
     * @type {[type]}
     */
    export class HtmlElement {

        /**
         * Jquery element
         */
        public element;

        /**
         *
         */
        public id;

        /**
         *
         */
        private deny = ["Table", "Td", "Div", "Thead", "Tbody", "Tfoot", "Tr", "Td", "Th", "Label", "Span", "I", "A"];

        /**
         * [url description]
         * @type {String}
         */
        private url = "";

        /**
         * [className description]
         * @type {[type]}
         */
        private className;

        /**
         *
         * @param  {string} name [description]
         * @return {[type]}      [description]
         */
        public constructor(name: string = "", newClone = false)
        {
            this.id = name;
            if (newClone) {
                this.element = $(newClone);
            } else {
                this.element = this.init(this.getClassName(), name);
            }
            return this;
        }

        /**
         *
         */
        public create(tag: string)
        {
            this.element = this.init(tag, this.id);
            return this;
        }

        /**
         * Create html component like jquery object
         *
         * @param  {string} element [description]
         * @param  {string} name    [description]
         * @return HTMLElement
         */
        public init(element: string, name: string) {

            this.className = element;
            let elementJquery = $(document.createElement(element));

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
        }

        /**
         *
         * @return
         */
        public getType() {
            return this.className;
        }

        /**
         * [class description]
         * @param  {string} class [description]
         * @return {[type]}       [description]
         */
        public class(attrClass: string) {
            this.element.attr("class", attrClass);
            return this;
        }

        /**
         *
         * @return {[type]} [description]
         */
        public addChild(element) {
            this.element.append(element);
            return this;
        }

        /**
         * [click description]
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        public click(fn) {
            $(this.element).click(fn);
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public change(fn) {
            $(this.element).change(fn);
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keypress(fn) {
            $(this.element).keypress(fn);
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keydown(fn) {
            $(this.element).keydown(fn);
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keyup(fn) {
            $(this.element).keyup(fn);
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public blur(fn) {
            $(this.element).blur(fn);
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public focus(fn) {
            $(this.element).focus(fn);
            return this;
        }

        /**
         * [setEvent description]
         * @param  {string} event [description]
         * @param  {[type]}       [description]
         * @return {[type]}       [description]
         */
        public setEvent(event: string, fn: Function, evenType: string = "click") {

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
        }

        /**
         * [get description]
         * @return {[type]} [description]
         */
        public getElement()
        {
            return this.element;
        }

        public getJqueryElement(element)
        {
            if (element instanceof Html.HtmlElement) {
                return element.getElement();
            } else {
                return element;
            }
        }

        /**
         * Append elements
         * @param value append
         * @return this
         */
        public append(append)
        {

            if (Array.isArray(append)) {
                for (let key in append) {
                    this.element.append(
                        this.getJqueryElement(append[key])
                    );
                }
            } else {
                if (typeof append != "object") {
                    this.element.append(
                        this.getJqueryElement(append)
                    );
                } else {
                    this.element.append(
                        this.getJqueryElement(append)
                    );
                }
            }

            return this;
        }

        /**
         * [html description]
         * @param  {[type]} html [description]
         * @return {[type]}      [description]
         */
        public html(html: any = null) {
            if (html) {
                this.element.html(html);
                return this;
            } else {
                return this.element.html();
            }
        }

        public getHtml()
        {
            return this.element.html();
        }

        /**
         * 
         * @param attr
         * @return
         */
        public attr(attr, value = false)
        {
            if (Array.isArray(attr)) {
                for (let key in attr) {
                    this.element.attr(key, attr[key]);
                }
            } else if (typeof attr == "string" && value != false) {
                this.element.attr(attr, value);
            }
            return this;
        }

        /**
         *
         */
        public getAttr(attr)
        {
            return this.element.attr(attr);
        }

        /**
         * [css description]
         * @param  {[type]} css [description]
         * @return {[type]}     [description]
         */
        public css(css, value = false) {
            if (Array.isArray(css)) {
                for (let key in css) {
                    this.element.css(key, css[key]);
                }
            } else if (typeof css == "string" && value != false) {
                this.element.attr(css, value);
            }
            return this;
        }

        /**
         *
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        public unbind(event) {
            this.element.unbind(event);
            return this;
        }

        /**
         * [getRandom description]
         * @param  {[type]} init [description]
         * @param  {[type]} last [description]
         * @return {[type]}      [description]
         */
        public getRandom(init, last) {
            return Math.floor((Math.random() * last) + init);
        }

        /**
         * [sanitizeString description]
         * @param  {string} str [description]
         * @return {[type]}     [description]
         */
        public sanitizeString(str: string) {
            let idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
            idTr = idTr.toString().replace(/\s/g, "");
            return idTr;
        }

        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        public getClassName() {
            let funcNameRegex = /function (.{1,})\(/;
            let results  = (funcNameRegex).exec(this["constructor"].toString());
            return (results && results.length > 1) ? results[1] : "";
        }

        /**
         * [validateAndSet description]
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        public validateAndSet(config) {

            try {
                if (typeof config.name === "undefined") {
                    throw "The identify is required";
                } else if (typeof config.element === "undefined") {
                    throw "The type element is required";
                } else if (typeof config.event !== "undefined") {

                }
            } catch (e) {
                console.log(e);
            }
        }

        /**
         * [capitalize description]
         * @param  {[type]} str [description]
         * @return {[type]}     [description]
         */
        public capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        /**
         * [clone description]
         * @return {[type]} [description]
         */
        public clone(newIdentify = "") {
            let newElement = this.element.clone();
            return new HtmlElement(newIdentify, newElement[0]);
        }

        /**
         * [ajax description]
         * @return {[type]} [description]
         */
        public ajax(config) {
            $.ajax({
                "url" : config.url,
                "type" : config.type,
                "beforeSend" : config.beforeSend,
                "dataType" : config.dataType,
                "data" : config.data
            }).done(config.success);

            return this;
        }

        /**
         * zzzz
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        public val(val: any = null)
        {
            if (val) {
                this.element.val(val);
                return this;
            } else {
                return this.element.val();
            }
        }

        /**
         * zzzz
         * @param  {any = null}        text [description]
         * @return {[type]}   [description]
         */
        public text(text: any = null) {
            if (text) {
                this.element.text(text);
                return this;
            } else {
                return this.element.text();
            }
        }
    }

    /**
     *
     */
    export class A extends HtmlElement {

        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        public favIcon(favIcon) {
            let icon = new Html.I("favIcon" + this.id)
            .class(favIcon);
            this.getElement()
                .append(icon.getElement());
            return this;
        }

        /**
         * [href description]
         * @param  {[type]} href [description]
         * @return {[type]}      [description]
         */
        public href(href) {
            this.getElement().attr("href", href);
            return this;
        }
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Abbr extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Address extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Area extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Article extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Aside extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Audio extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class B extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Base extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Bdi extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Bdo extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Blockquote extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Body extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Br extends HtmlElement
    {
    }

    /**
     *
     */
    export class Button extends HtmlElement {

        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        public type(type) {
            this.getElement().attr("type", type);
            return this;
        }

        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        public favIcon(favIcon)
        {
            let icon = new Html.I("favIcon" + this.id)
            .class(favIcon);
            this.getElement()
                .append(icon.getElement());
            return this;
        }

        /**
         * [succes description]
         * @return {[type]} [description]
         */
        public success()
        {
            this.element.addClass("btn btn-success");
            return this;
        }

        /**
         * [notice description]
         * @return {[type]} [description]
         */
        public notice()
        {
            this.element.addClass("btn btn-notice");
            return this;
        }

        /**
         * [warning description]
         * @return {[type]} [description]
         */
        public warning()
        {
            this.element.addClass("btn btn-warning");
            return this;
        }

        /**
         * [danger description]
         * @return {[type]} [description]
         */
        public danger()
        {
            this.element.addClass("btn btn-danger");
            return this;
        }
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Canvas extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Caption extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Cite extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Code extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Col extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class ColGroup extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Datalist extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Dd extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Del extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Details extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Dfn extends HtmlElement
    {
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Dialog extends HtmlElement
    {
    }

    /**
     *
     */
    export class Div extends HtmlElement
    {
    }

    /**
     *
     */
    export class Dl extends HtmlElement
    {
    }

    /**
     *
     */
    export class Dt extends HtmlElement
    {
    }

    /**
     *
     */
    export class Em extends HtmlElement
    {
    }

    /**
     *
     */
    export class Embed extends HtmlElement
    {
    }

    /**
     *
     */
    export class Fieldset extends HtmlElement
    {
    }

    /**
     *
     */
    export class Figcaption extends HtmlElement
    {
    }

    /**
     *
     */
    export class Figure extends HtmlElement
    {
    }

    /**
     *
     */
    export class Footer extends HtmlElement
    {
    }

    /**
     *
     */
    export class Form extends HtmlElement
    {
    }

    /**
     *
     */
    export class H1 extends HtmlElement
    {
    }

    /**
     *
     */
    export class H2 extends HtmlElement
    {
    }

    /**
     *
     */
    export class H3 extends HtmlElement
    {
    }

    /**
     *
     */
    export class H4 extends HtmlElement
    {
    }

    /**
     *
     */
    export class H5 extends HtmlElement
    {
    }

    /**
     *
     */
    export class H6 extends HtmlElement
    {
    }

    /**
     *
     */
    export class Head extends HtmlElement
    {
    }

    /**
     *
     */
    export class Header extends HtmlElement
    {
    }

    /**
     *Ttpt
    export class Html extends HtmlElement
    {
    }
    */

    /**
     *
     */
    export class I extends HtmlElement
    {
    }

    /**
     *
     */
    export class Iframe extends HtmlElement
    {
    }

    export class Img extends HtmlElement 
    {
        public src(src)
        {
            this.getElement().attr("src", src);
            return this;
        }
    }

    /**
     * [Input description]
     * @type {[type]}
     */
    export class Input extends HtmlElement
    {

        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        public type(type)
        {
            this.getElement().attr("type", type);
            return this;
        }

        /**
         * [value description]
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        public val(value: any = null)
        {
            if (value === null) {
                return this.getElement().val();
            }
            this.getElement().val(value);
            return this;
        }
    }

    /**
     *
     */
    export class Ins extends HtmlElement
    {
    }

    /**
     *
     */
    export class Kbd extends HtmlElement
    {
    }

    /**
     *
     */
    export class Keygen extends HtmlElement
    {
    }

    /**
     *
     */
    export class Label extends HtmlElement
    {
    }

    /**
     *
     */
    export class Leyend extends HtmlElement
    {
    }

    /**
     *
     */
    export class Li extends HtmlElement
    {
    }

    /**
     *
     */
    export class Link extends HtmlElement
    {
    }

    /**
     *
     */
    export class Main extends HtmlElement
    {
    }

    /**
     *
     */
    export class Map extends HtmlElement
    {
    }

    /**
     *
     */
    export class Menu extends HtmlElement
    {
    }

    /**
     *
     */
    export class MenuItem extends HtmlElement
    {
    }

    /**
     *
     */
    export class Meta extends HtmlElement
    {
    }

    /**
     *
     */
    export class Meter extends HtmlElement
    {
    }

    /**
     *
     */
    export class Nav extends HtmlElement
    {
    }

    /**
     *
     */
    export class Noscrip extends HtmlElement
    {
    }

    /**
     *
     */
    export class Object extends HtmlElement
    {
    }

    /**
     *
     */
    export class Ol extends HtmlElement
    {
    }

    /**
     *
     */
    export class Optgroup extends HtmlElement
    {
    }

    /**
     *
     */
    export class Option extends HtmlElement
    {
    }

    /**
     *
     */
    export class Output extends HtmlElement
    {
    }

    /**
     *
     */
    export class P extends HtmlElement
    {
    }

    /**
     *
     */
    export class Param extends HtmlElement
    {
    }

    /**
     *
     */
    export class Pre extends HtmlElement
    {
    }

    /**
     *
     */
    export class Progress extends HtmlElement
    {
    }

    /**
     *
     */
    export class Q extends HtmlElement
    {
    }

    /**
     *
     */
    export class Rp extends HtmlElement
    {
    }

    /**
     *
     */
    export class Rt extends HtmlElement
    {
    }

    /**
     *
     */
    export class Ruby extends HtmlElement
    {
    }

    /**
     *
     */
    export class S extends HtmlElement
    {
    }

    /**
     *
     */
    export class Samp extends HtmlElement
    {
    }

    /**
     *
     */
    export class Script extends HtmlElement
    {
    }

    /**
     *
     */
    export class Section extends HtmlElement
    {
    }

    export class Select extends HtmlElement
    {

        private select;

        /**
         * [build description]
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        public build(content)
        {

            this.getElement().empty();

            for (let key in content) {
                let option = new Html.Option();
                option.attr({
                    "value" : content[key],
                });
                option.getElement().text(content[key]);
                this.append([
                    option.getElement()
                ]);
            }

            return this;
        }

        public selectOption(value)
        {
            this.getElement().children().each(function () {
                if ($(this).val() === value) {
                    $(this).prop("selected", true);
                }
            });
        }

        /**
         * [chosen description]
         * @return {[type]} [description]
         */
        public chosen()
        {
            this.getElement().chosen();
            return this;
        }
    }

    /**
     *
     */
    export class Small extends HtmlElement
    {
    }

    /**
     *
     */
    export class Source extends HtmlElement
    {
    }

    /**
     *
     */
    export class Span extends HtmlElement
    {
    }

    /**
     *
     */
    export class Strong extends HtmlElement
    {
    }

    /**
     *
     */
    export class Style extends HtmlElement
    {
    }

    /**
     *
     */
    export class Sub extends HtmlElement
    {
    }

    /**
     *
     */
    export class Summary extends HtmlElement
    {
    }

    /**
     *
     */
    export class Sup extends HtmlElement
    {
    }

    /**
     * [Table description]
     * @type {[type]}
     */
    export class Table extends HtmlElement
    {

        private tblElements;
        private thead;
        private tbody;
        private tr;
        private th;
        private td;
        private system;
        private header = false;
        private fnCHeader;
        private fnCContent;

        /**
         *
         *
         */
        public setHeader(columns)
        {

            this.header = true;
            this.thead = new Html.Thead("thead" + this.id);
            this.tr = new Html.Tr("tr" + this.id);

            let i = 0;
            for (let key in columns) {

                let th = new Html.Th("TheadTh" + key + this.id);
                th.getElement().append(
                    this.capitalize(columns[key])
                );

                this.thead.getElement().append(
                    th.getElement()
                );

                if (typeof this.fnCHeader === "function") {
                    this.fnCHeader(th, i, columns[key], key);
                }

                i++;
            }

            this.getElement().append(
                this.thead.getElement()
            );

            return this;
        }

        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        public setHeaderCustomize(fn)
        {
            this.fnCHeader = fn;
            return this;
        }

        /**
         *
         * @param  {[type]} rows
         * @return {[type]}
         */
        public build(content)
        {

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
                        } else if(contentRow instanceof jQuery) {
                            finalContent = contentRow;
                        } else if(typeof contentRow == "object") {

                            if (contentRow.hasOwnProperty("content")) {
                                finalContent = contentRow.content
                            }

                            if (contentRow.hasOwnProperty("class")) {
                                td.attr(
                                    contentRow.class
                                )
                            }

                            if (contentRow.hasOwnProperty("attr")) {
                                td.attr(
                                    contentRow.attr
                                )
                            }

                            if (contentRow.hasOwnProperty("css")) {
                                td.attr(
                                    contentRow.css
                                )
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

                        } else {
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
        }

        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        public setContentCustomize(fn)
        {
            this.fnCContent = fn;
            return this;
        }

        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        private validateSystemKeys(row)
        {
            if ($.inArray(row, this.system) === -1) {
                return true;
            }
            return false;
        }

        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        private paginate(row: any = 10)
        {
            this.getElement().DataTable({
                searching: false,
                lengthChange: false,
                pageLength: row,
                aoColumns : [
                    null,
                    null
                ]
            });
            return this;
        }
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Thead extends HtmlElement
    {

    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Tbody extends HtmlElement
    {

    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Tr extends HtmlElement
    {

    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Td extends HtmlElement
    {

        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        public colspan(cols)
        {
            this.attr({
                "colspan" : cols
            });
        }

        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        public rowspan(rows)
        {
            this.attr({
                "rowspan" : rows
            });
        }
    }

    /**
     * [HtmlElement description]
     * @type {[type]}
     */
    export class Th extends HtmlElement
    {

        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        public colspan(cols) {
            this.attr({
                "colspan" : cols
            });
        }

        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        public rowspan(rows) {
            this.attr({
                "rowspan" : rows
            });
        }
    }

    /**
     *
     */
    export class Tfoot extends HtmlElement 
    {

    }

    /**
     *
     */
    export class Time extends HtmlElement
    {

    }

    /**
     *
     */
    export class Textarea extends HtmlElement
    {

    }

    /**
     *
     */
    export class Title extends HtmlElement
    {

    }

    /**
     *
     */
    export class Track extends HtmlElement
    {

    }

    /**
     *
     */
    export class U extends HtmlElement
    {

    }

    /**
     *
     * @type {[type]}
     */
    export class Ul extends HtmlElement
    {

        /**
         *
         * @param
         * @param
         * @return
         */
        public create(config)
        {

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
        }
    }

    /**
     *
     */
    export class Var extends HtmlElement
    {

    }

    /**
     *
     */
    export class Video extends HtmlElement
    {

    }

    /**
     *
     */
    export class Wbr extends HtmlElement
    {

    }
}
