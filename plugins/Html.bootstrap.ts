/// <reference path="../definitions/jquery.d.ts"/>
/// <reference path="../Html.ts"/>

namespace Bootstrap
{

    /**
     * [Tabs description]
     * @type {[type]}
     */
    export class Tabs {

        /**
         *
         * @type 
         */
        private id;
        private ul;
        private divContainer;
        private divContent;
        private random;

        /**
         * 
         * @return 
         */
        public constructor() {
            this.random = new Html.HtmlElement().getRandom(1, 100);
            return this;
        }

        /**
         *
         * @param  
         * @return 
         */
        public setId(id) {
            this.id = id;
        }

        /**
         *
         * @return 
         */
        public setTabs(columns) {
            this.divContainer = new Html.Div("tabContainer" + this.id);
            this.divContainer.class("tabs-container");

            this.divContent = new Html.Div("tabContent" + this.id);
            this.divContent.class("tab-content");

            this.ul = new Html.Ul("ul" + this.id);
            this.ul.class("nav nav-tabs");
            this.ul.create({
                "name" : "li" + this.id,
                "content" : columns,
                "customize" : function (li, i, content) {

                    if (i === 0) {
                        li.class("active");
                    }

                    let a = new Html.A("a" + this.id);

                    a.attr({
                        "data-toggle": "tab",
                        "href" : "#content" + this.random + i
                    });

                    a.html(content);

                    li.append([
                        a.getElement()
                    ]);

                }.bind(this)
            });
            return this;
        }

        /**
         * Set Content
         * @return
         */
        public setContent(content) {
            let i = 0;

            for (let key in content) {

                let div = new Html.Div("content" + this.random + i);

                div.class("tab-pane");
                if (i === 0) {
                    div.class("tab-pane active");
                }

                div.getElement().html(content[key]);
                this.divContent.getElement().append(div.getElement());
                i++;

            }
        }

        /**
         * getRandom
         * @return {[type]} [description]
         */
        public getRandom() {
            return this.random;
        }

        /**
         *
         */
        public clean() {
            if (typeof this.divContainer !== "undefined") {
                this.divContainer.getElement().html("");
                return this;
            }
        }

        /**
         * getElement
         * @return 
         */
        public getElement() {
            this.divContainer.getElement().append(this.ul.getElement());
            this.divContainer.getElement().append(this.divContent.getElement());
            return this.divContainer.getElement();
        }
    }

    /**
     * 
     * @type 
     */
    export class Modal {

        private container;
        private dialog;
        private content;
        private header;
        private body;
        private foot;

        /**
         *
         * @return 
         */
        public constructor(name) {

            this.container = new Html.Div(name);
            this.container.attr({
                "class" : "modal fade",
                "tabindex" : "-1",
                "role" : "dialog",
                "aria-labelledby" : "myModalLabel"
            });

            this.dialog = new Html.Div();
            this.dialog.attr({
                "class" : "modal-dialog",
                "role" : "document"
            });

            this.content = new Html.Div();
            this.content.attr({
                "class" : "modal-content"
            });

            this.header = new Html.Div();
            this.header.class("modal-header");

            this.body = new Html.Div();
            this.body.class("modal-body");

            this.foot = new Html.Div();
            this.foot.class("modal-footer");
            return this;
        }

        /**
         * [large description]
         * @return {[type]} [description]
         */
        public large() {
            this.dialog.getElement().addClass("modal-lg");
            return this;
        }

        /**
         * [small description]
         * @return {[type]} [description]
         */
        public small() {
            this.dialog.getElement().addClass("modal-sm");
            return this;
        }

        /**
         * [normal description]
         * @return {[type]} [description]
         */
        public normal() {
            this.dialog.getElement().removeClass("modal-lg");
            this.dialog.getElement().removeClass("modal-sm");
            return this;
        }

        /**
         *
         * @param  {boolean = true}        status [description]
         * @param  {any     = ""}          title  [description]
         * @return {[type]}       [description]
         */
        public setCloseButton(status: boolean = true, title: any = "") {
            if (status) {
                let buttonClose = new Html.Button();
                buttonClose.attr({
                    "type" : "button",
                    "class" : "close",
                    "data-dismiss" : "modal",
                    "aria-label" : title === "" ? "Close" : title
                });
                let span = new Html.Span();
                span.attr({
                    "aria-hidden" : "true"
                });
                span.html("&times;");
                buttonClose.html(span.getElement());
                this.header.append([
                    buttonClose.getElement()
                ]);
            }
            return this;
        }

        /**
         *
         * @param  {[type]} title [description]
         * @return {[type]}       [description]
         */
        public modalHeader(title: string) {
            this.header.append([
                title
            ]);
            return this.header;
        }

        /**
         *
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        public modalBody(content: string) {
            this.body.append([
                content
            ]);
            return this.body;
        }

        /**
         *
         * @param  {[type]} content [description]
         * @return {[type]}         [description]
         */
        public modalFoot(content: any = "") {
            this.foot.append([
                content
            ]);
            return this.foot;
        }

        public launch()
        {
            this.container.getElement()
                .modal('show');
            return this;
        }

        public build() {
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
        }
    }
}