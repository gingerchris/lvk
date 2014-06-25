function rad(x) {
    return x * Math.PI / 180;
}

+function($) {
    "use strict";
    var Carousel = function(element, options) {
        this.$element = $(element), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = options, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        "hover" == this.options.pause && this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this));
    };
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, Carousel.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), 
        this;
    }, Carousel.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
        this.$items.index(this.$active);
    }, Carousel.prototype.to = function(pos) {
        var that = this, activeIndex = this.getActiveIndex();
        return pos > this.$items.length - 1 || 0 > pos ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        }) : activeIndex == pos ? this.pause().cycle() : this.slide(pos > activeIndex ? "next" : "prev", $(this.$items[pos]));
    }, Carousel.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, Carousel.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, Carousel.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active"), $next = next || $active[type](), isCycling = this.interval, direction = "next" == type ? "left" : "right", fallback = "next" == type ? "first" : "last", that = this;
        if (!$next.length) {
            if (!this.options.wrap) return;
            $next = this.$element.find(".item")[fallback]();
        }
        if ($next.hasClass("active")) return this.sliding = !1;
        var e = $.Event("slide.bs.carousel", {
            relatedTarget: $next[0],
            direction: direction
        });
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (this.sliding = !0, 
        isCycling && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
        this.$element.one("slid.bs.carousel", function() {
            var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()]);
            $nextIndicator && $nextIndicator.addClass("active");
        })), $.support.transition && this.$element.hasClass("slide") ? ($next.addClass(type), 
        $next[0].offsetWidth, $active.addClass(direction), $next.addClass(direction), $active.one($.support.transition.end, function() {
            $next.removeClass([ type, direction ].join(" ")).addClass("active"), $active.removeClass([ "active", direction ].join(" ")), 
            that.sliding = !1, setTimeout(function() {
                that.$element.trigger("slid.bs.carousel");
            }, 0);
        }).emulateTransitionEnd(1e3 * $active.css("transition-duration").slice(0, -1))) : ($active.removeClass("active"), 
        $next.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), 
        isCycling && this.cycle(), this);
    };
    var old = $.fn.carousel;
    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.carousel"), options = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == typeof option && option), action = "string" == typeof option ? option : options.slide;
            data || $this.data("bs.carousel", data = new Carousel(this, options)), "number" == typeof option ? data.to(option) : action ? data[action]() : options.interval && data.pause().cycle();
        });
    }, $.fn.carousel.Constructor = Carousel, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = old, this;
    }, $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var href, $this = $(this), $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")), options = $.extend({}, $target.data(), $this.data()), slideIndex = $this.attr("data-slide-to");
        slideIndex && (options.interval = !1), $target.carousel(options), (slideIndex = $this.attr("data-slide-to")) && $target.data("bs.carousel").to(slideIndex), 
        e.preventDefault();
    }), $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            $carousel.carousel($carousel.data());
        });
    });
}(jQuery), +function($) {
    "use strict";
    function transitionEnd() {
        var el = document.createElement("bootstrap"), transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) if (void 0 !== el.style[name]) return {
            end: transEndEventNames[name]
        };
        return !1;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = !1, $el = this;
        $(this).one($.support.transition.end, function() {
            called = !0;
        });
        var callback = function() {
            called || $($el).trigger($.support.transition.end);
        };
        return setTimeout(callback, duration), this;
    }, $(function() {
        $.support.transition = transitionEnd();
    });
}(jQuery), +function($) {
    "use strict";
    var Modal = function(element, options) {
        this.options = options, this.$element = $(element), this.$backdrop = this.isShown = null, 
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    Modal.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, Modal.prototype.toggle = function(_relatedTarget) {
        return this[this.isShown ? "hide" : "show"](_relatedTarget);
    }, Modal.prototype.show = function(_relatedTarget) {
        var that = this, e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), 
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            that.$element.parent().length || that.$element.appendTo(document.body), that.$element.show().scrollTop(0), 
            transition && that.$element[0].offsetWidth, that.$element.addClass("in").attr("aria-hidden", !1), 
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$element.find(".modal-dialog").one($.support.transition.end, function() {
                that.$element.focus().trigger(e);
            }).emulateTransitionEnd(300) : that.$element.focus().trigger(e);
        }));
    }, Modal.prototype.hide = function(e) {
        e && e.preventDefault(), e = $.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), $(document).off("focusin.bs.modal"), 
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), 
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus();
        }, this));
    }, Modal.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(e) {
            27 == e.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide(), this.backdrop(function() {
            that.removeBackdrop(), that.$element.trigger("hidden.bs.modal");
        });
    }, Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, Modal.prototype.backdrop = function(callback) {
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body), 
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), 
            !callback) return;
            doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()) : callback && callback();
    };
    var old = $.fn.modal;
    $.fn.modal = function(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.modal"), options = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == typeof option && option);
            data || $this.data("bs.modal", data = new Modal(this, options)), "string" == typeof option ? data[option](_relatedTarget) : options.show && data.show(_relatedTarget);
        });
    }, $.fn.modal.Constructor = Modal, $.fn.modal.noConflict = function() {
        return $.fn.modal = old, this;
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this), href = $this.attr("href"), $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")), option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        $this.is("a") && e.preventDefault(), $target.modal(option, this).one("hide", function() {
            $this.is(":visible") && $this.focus();
        });
    }), $(document).on("show.bs.modal", ".modal", function() {
        $(document.body).addClass("modal-open");
    }).on("hidden.bs.modal", ".modal", function() {
        $(document.body).removeClass("modal-open");
    });
}(jQuery), $(function() {
    $(".toggle-delete").on("click", function() {
        $(this).parent().toggleClass("delete");
    }), $("#search").length > 0 && search.init(), $("#map").length > 0 && google.maps.event.addDomListener(window, "load", map.init()), 
    $(".fb-comments").length > 0 && $(".fb-comments").attr("data-width", $(".fb-comments").parent().width());
}), function($, window) {
    "use strict";
    function getMustache() {
        return null === instance && (instance = window.Mustache, void 0 === instance && $.error("Failed to locate Mustache instance, are you sure it has been loaded?")), 
        instance;
    }
    function has(templateName) {
        return void 0 !== templateMap[templateName];
    }
    function add(templateName, templateHtml) {
        return !options.allowOverwrite && has(templateName) ? void $.error("TemplateName: " + templateName + " is already mapped.") : void (templateMap[templateName] = $.trim(templateHtml));
    }
    function addFromDom() {
        var templateElementIds;
        templateElementIds = 0 === arguments.length ? $('script[type="' + options.domTemplateType + '"]').map(function() {
            return this.id;
        }) : $.makeArray(arguments), $.each(templateElementIds, function() {
            var templateElement = document.getElementById(this);
            null === templateElement ? $.error("No such elementId: #" + this) : add(this, $(templateElement).html());
        });
    }
    function remove(templateName) {
        var result = templateMap[templateName];
        return delete templateMap[templateName], result;
    }
    function clear() {
        templateMap = {}, getMustache().clearCache();
    }
    function render(templateName, templateData) {
        return has(templateName) ? getMustache().to_html(templateMap[templateName], templateData, templateMap) : (options.warnOnMissingTemplates && $.error("No template registered for: " + templateName), 
        "");
    }
    function load(url, onComplete) {
        return $.ajax({
            url: url,
            dataType: options.externalTemplateDataType
        }).done(function(templates) {
            $(templates).filter("script").each(function(i, el) {
                add(el.id, $(el).html());
            }), $.isFunction(onComplete) && onComplete();
        });
    }
    function templates() {
        return $.map(templateMap, function(value, key) {
            return key;
        });
    }
    var templateMap = {}, instance = null, options = {
        warnOnMissingTemplates: !1,
        allowOverwrite: !0,
        domTemplateType: "text/html",
        externalTemplateDataType: "text"
    };
    $.Mustache = {
        options: options,
        load: load,
        has: has,
        add: add,
        addFromDom: addFromDom,
        remove: remove,
        clear: clear,
        render: render,
        templates: templates,
        instance: instance
    }, $.fn.mustache = function(templateName, templateData, options) {
        var settings = $.extend({
            method: "append"
        }, options), renderTemplate = function(obj, viewModel) {
            $(obj)[settings.method](render(templateName, viewModel));
        };
        return this.each(function() {
            var element = this;
            $.isArray(templateData) ? $.each(templateData, function() {
                renderTemplate(element, this);
            }) : renderTemplate(element, templateData);
        });
    };
}(window.jQuery || window.Zepto, window), function(root, factory) {
    if ("object" == typeof exports && exports) factory(exports); else {
        var mustache = {};
        factory(mustache), "function" == typeof define && define.amd ? define(mustache) : root.Mustache = mustache;
    }
}(this, function(mustache) {
    function testRegExp(re, string) {
        return RegExp_test.call(re, string);
    }
    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string);
    }
    function isFunction(object) {
        return "function" == typeof object;
    }
    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    }
    function escapeTags(tags) {
        if (!isArray(tags) || 2 !== tags.length) throw new Error("Invalid tags: " + tags);
        return [ new RegExp(escapeRegExp(tags[0]) + "\\s*"), new RegExp("\\s*" + escapeRegExp(tags[1])) ];
    }
    function parseTemplate(template, tags) {
        function stripSpace() {
            if (hasTag && !nonSpace) for (;spaces.length; ) delete tokens[spaces.pop()]; else spaces = [];
            hasTag = !1, nonSpace = !1;
        }
        tags = tags || mustache.tags, template = template || "", "string" == typeof tags && (tags = tags.split(spaceRe));
        for (var start, type, value, chr, token, openSection, tagRes = escapeTags(tags), scanner = new Scanner(template), sections = [], tokens = [], spaces = [], hasTag = !1, nonSpace = !1; !scanner.eos(); ) {
            if (start = scanner.pos, value = scanner.scanUntil(tagRes[0])) for (var i = 0, len = value.length; len > i; ++i) chr = value.charAt(i), 
            isWhitespace(chr) ? spaces.push(tokens.length) : nonSpace = !0, tokens.push([ "text", chr, start, start + 1 ]), 
            start += 1, "\n" === chr && stripSpace();
            if (!scanner.scan(tagRes[0])) break;
            if (hasTag = !0, type = scanner.scan(tagRe) || "name", scanner.scan(whiteRe), "=" === type ? (value = scanner.scanUntil(equalsRe), 
            scanner.scan(equalsRe), scanner.scanUntil(tagRes[1])) : "{" === type ? (value = scanner.scanUntil(new RegExp("\\s*" + escapeRegExp("}" + tags[1]))), 
            scanner.scan(curlyRe), scanner.scanUntil(tagRes[1]), type = "&") : value = scanner.scanUntil(tagRes[1]), 
            !scanner.scan(tagRes[1])) throw new Error("Unclosed tag at " + scanner.pos);
            if (token = [ type, value, start, scanner.pos ], tokens.push(token), "#" === type || "^" === type) sections.push(token); else if ("/" === type) {
                if (openSection = sections.pop(), !openSection) throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
            } else "name" === type || "{" === type || "&" === type ? nonSpace = !0 : "=" === type && (tagRes = escapeTags(tags = value.split(spaceRe)));
        }
        if (openSection = sections.pop()) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens));
    }
    function squashTokens(tokens) {
        for (var token, lastToken, squashedTokens = [], i = 0, len = tokens.length; len > i; ++i) token = tokens[i], 
        token && ("text" === token[0] && lastToken && "text" === lastToken[0] ? (lastToken[1] += token[1], 
        lastToken[3] = token[3]) : (squashedTokens.push(token), lastToken = token));
        return squashedTokens;
    }
    function nestTokens(tokens) {
        for (var token, section, nestedTokens = [], collector = nestedTokens, sections = [], i = 0, len = tokens.length; len > i; ++i) switch (token = tokens[i], 
        token[0]) {
          case "#":
          case "^":
            collector.push(token), sections.push(token), collector = token[4] = [];
            break;

          case "/":
            section = sections.pop(), section[5] = token[2], collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
            break;

          default:
            collector.push(token);
        }
        return nestedTokens;
    }
    function Scanner(string) {
        this.string = string, this.tail = string, this.pos = 0;
    }
    function Context(view, parentContext) {
        this.view = null == view ? {} : view, this.cache = {
            ".": this.view
        }, this.parent = parentContext;
    }
    function Writer() {
        this.cache = {};
    }
    var RegExp_test = RegExp.prototype.test, nonSpaceRe = /\S/, Object_toString = Object.prototype.toString, isArray = Array.isArray || function(object) {
        return "[object Array]" === Object_toString.call(object);
    }, entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    }, whiteRe = /\s*/, spaceRe = /\s+/, equalsRe = /\s*=/, curlyRe = /\s*\}/, tagRe = /#|\^|\/|>|\{|&|=|!/;
    Scanner.prototype.eos = function() {
        return "" === this.tail;
    }, Scanner.prototype.scan = function(re) {
        var match = this.tail.match(re);
        if (match && 0 === match.index) {
            var string = match[0];
            return this.tail = this.tail.substring(string.length), this.pos += string.length, 
            string;
        }
        return "";
    }, Scanner.prototype.scanUntil = function(re) {
        var match, index = this.tail.search(re);
        switch (index) {
          case -1:
            match = this.tail, this.tail = "";
            break;

          case 0:
            match = "";
            break;

          default:
            match = this.tail.substring(0, index), this.tail = this.tail.substring(index);
        }
        return this.pos += match.length, match;
    }, Context.prototype.push = function(view) {
        return new Context(view, this);
    }, Context.prototype.lookup = function(name) {
        var value;
        if (name in this.cache) value = this.cache[name]; else {
            for (var context = this; context; ) {
                if (name.indexOf(".") > 0) {
                    value = context.view;
                    for (var names = name.split("."), i = 0; null != value && i < names.length; ) value = value[names[i++]];
                } else value = context.view[name];
                if (null != value) break;
                context = context.parent;
            }
            this.cache[name] = value;
        }
        return isFunction(value) && (value = value.call(this.view)), value;
    }, Writer.prototype.clearCache = function() {
        this.cache = {};
    }, Writer.prototype.parse = function(template, tags) {
        var cache = this.cache, tokens = cache[template];
        return null == tokens && (tokens = cache[template] = parseTemplate(template, tags)), 
        tokens;
    }, Writer.prototype.render = function(template, view, partials) {
        var tokens = this.parse(template), context = view instanceof Context ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template);
    }, Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate) {
        function subRender(template) {
            return self.render(template, context, partials);
        }
        for (var token, value, buffer = "", self = this, i = 0, len = tokens.length; len > i; ++i) switch (token = tokens[i], 
        token[0]) {
          case "#":
            if (value = context.lookup(token[1]), !value) continue;
            if (isArray(value)) for (var j = 0, jlen = value.length; jlen > j; ++j) buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate); else if ("object" == typeof value || "string" == typeof value) buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate); else if (isFunction(value)) {
                if ("string" != typeof originalTemplate) throw new Error("Cannot use higher-order sections without the original template");
                value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender), 
                null != value && (buffer += value);
            } else buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            break;

          case "^":
            value = context.lookup(token[1]), (!value || isArray(value) && 0 === value.length) && (buffer += this.renderTokens(token[4], context, partials, originalTemplate));
            break;

          case ">":
            if (!partials) continue;
            value = isFunction(partials) ? partials(token[1]) : partials[token[1]], null != value && (buffer += this.renderTokens(this.parse(value), context, partials, value));
            break;

          case "&":
            value = context.lookup(token[1]), null != value && (buffer += value);
            break;

          case "name":
            value = context.lookup(token[1]), null != value && (buffer += mustache.escape(value));
            break;

          case "text":
            buffer += token[1];
        }
        return buffer;
    }, mustache.name = "mustache.js", mustache.version = "0.8.1", mustache.tags = [ "{{", "}}" ];
    var defaultWriter = new Writer();
    mustache.clearCache = function() {
        return defaultWriter.clearCache();
    }, mustache.parse = function(template, tags) {
        return defaultWriter.parse(template, tags);
    }, mustache.render = function(template, view, partials) {
        return defaultWriter.render(template, view, partials);
    }, mustache.to_html = function(template, view, partials, send) {
        var result = mustache.render(template, view, partials);
        return isFunction(send) ? void send(result) : result;
    }, mustache.escape = escapeHtml, mustache.Scanner = Scanner, mustache.Context = Context, 
    mustache.Writer = Writer;
});

var map = {
    infoWindow: new google.maps.InfoWindow(),
    bounds: new google.maps.LatLngBounds(),
    geocoder: new google.maps.Geocoder(),
    results: $("#mapResults"),
    init: function() {
        for (var i = 0; i < restaurants.length; i++) map.bounds.extend(new google.maps.LatLng(restaurants[i].lat, restaurants[i].lng));
        var mapOptions = {
            center: map.bounds.getCenter(),
            zoom: 8
        };
        for (map.icon = new google.maps.MarkerImage(base + "frontend/images/pin.png", new google.maps.Size(36, 42), new google.maps.Point(0, 0), new google.maps.Point(18, 42)), 
        map.map = new google.maps.Map(document.getElementById("map"), mapOptions), map.map.fitBounds(map.bounds), 
        i = 0; i < restaurants.length; i++) map.addMarker(i, restaurants[i]);
        map.places = new google.maps.places.PlacesService(map.map), $("#restaurantSearch").on("keyup", function() {
            clearTimeout(map.searchTime), map.searchTime = setTimeout(function() {
                map.search($("#restaurantSearch").val());
            }, 500);
        }), map.results.css("width", $(".col-md-4").innerWidth() - 2 * parseInt($(".col-md-4").css("padding-left")));
    },
    addMarker: function(key, info) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.lat, info.lng),
            map: map.map,
            info: info,
            icon: map.icon
        });
        restaurants[key].marker = marker, google.maps.event.addListener(marker, "click", function() {
            map.clickMarker(marker, key);
        });
    },
    clickMarker: function(marker) {
        $.Mustache.load(base + "/frontend/js/templates/map-window.mustache").done(function() {
            var content = $.Mustache.render("infowindow", marker.info);
            map.infoWindow.setContent(content);
        }), map.infoWindow.open(map.map, marker);
        var latLng = marker.getPosition();
        map.map.setCenter(latLng);
    },
    search: function(searchTerm) {
        var results = [];
        searchTerm = searchTerm.toLowerCase();
        for (var i = 0; i < restaurants.length; i++) restaurants[i].name.toLowerCase().search(searchTerm) > -1 && (restaurants[i].key = i, 
        results.push(restaurants[i]));
        map.geocoder.geocode({
            address: searchTerm + ", UK"
        }, function(res, status) {
            if (status === google.maps.GeocoderStatus.OK) for (i = 0; i < res.length; i++) results.push(res[i]);
            results.length > 0 ? map.showResults(results) : map.noResults();
        });
    },
    showResults: function(results) {
        map.results.html("");
        for (var res = [], i = 0; i < results.length; i++) {
            var data, r = results[i];
            results[i].name ? (data = {
                key: String(r.key),
                copy: r.name + ", " + r.address
            }, res.push(data)) : (data = {
                lat: r.geometry.location.d,
                lng: r.geometry.location.e,
                copy: r.formatted_address
            }, res.push(data));
        }
        $.Mustache.load(base + "/frontend/js/templates/map-window.mustache").done(function() {
            map.results.mustache("searchResult", {
                data: res
            }), map.results.children("li").on("click", function() {
                map.clickResult($(this));
            });
        });
    },
    noResults: function() {
        map.results.html('<li class="noRes">No Results</li>');
    },
    clickResult: function(elem) {
        if (elem.attr("data-r-key")) google.maps.event.trigger(restaurants[elem.attr("data-r-key")].marker, "click", {
            latLng: new google.maps.LatLng(0, 0)
        }); else {
            {
                var nearest = map.findNearest(elem.attr("data-lat"), elem.attr("data-lng"));
                new google.maps.LatLngBounds();
            }
            google.maps.event.trigger(nearest.marker, "click", {
                latLng: new google.maps.LatLng(0, 0)
            });
        }
        $("html, body").animate({
            scrollTop: $("#map").offset().top
        }, 500), map.results.html("");
    },
    findNearest: function(lat, lng) {
        for (var R = 6371, distances = [], closest = -1, i = 0; i < restaurants.length; i++) {
            var mlat = restaurants[i].lat, mlng = restaurants[i].lng, dLat = rad(mlat - lat), dLong = rad(mlng - lng), a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2), c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), d = R * c;
            distances[i] = d, console.log(d), (-1 === closest || d < distances[closest]) && (closest = i);
        }
        return restaurants[closest];
    }
}, search = {
    url: base + "/search-dummy.json",
    resultsPerPage: 2,
    results: [],
    elem: {
        resultContainer: $("#results"),
        pagContainer: $("#search-paginate ol"),
        searchBox: $("#search"),
        alt: $("#random")
    },
    init: function() {
        search.initialContent = search.elem.resultContainer.html(), search.elem.searchBox.on("focus", function() {
            $(this).addClass("active"), search.elem.alt.removeClass("active").addClass("inactive");
        }).on("keyup", function(e) {
            if (e.which <= 90 && e.which >= 48) {
                clearTimeout(search.timer);
                var val = $(this).val();
                val.length > 2 ? (search.elem.searchBox.addClass("spinner"), search.timer = setTimeout(function() {
                    search.search(val);
                }, 400)) : search.shortTerm();
            }
        }).on("blur", function() {
            0 === $(this).val().length && ($(this).removeClass("active"), $("#random").addClass("active").removeClass("inactive"), 
            search.reset());
        });
    },
    show: function() {
        $(".search-result").each(function(k, v) {
            var img = $("<img src='" + base + "frontend/dev/images/" + $(v).attr("data-image") + "' />");
            img.appendTo($(v)), setTimeout(function() {
                var h = img.height();
                $(v).animate({
                    height: h + "px"
                }, 500).addClass("display"), search.elemHeight = h + 20;
            }, 500);
        });
    },
    reset: function() {
        search.elem.resultContainer.html(search.initialContent);
    },
    noResults: function() {
        search.elem.resultContainer.html(""), search.elem.pagContainer.html(""), $.Mustache.load(base + "/frontend/js/templates/search-result.mustache").done(function() {
            search.elem.resultContainer.mustache("no-result");
        });
    },
    shortTerm: function() {
        search.elem.resultContainer.html(""), search.elem.pagContainer.html(""), $.Mustache.load(base + "/frontend/js/templates/search-result.mustache").done(function() {
            search.elem.resultContainer.mustache("no-term");
        });
    },
    search: function(term) {
        console.log(term), $.getJSON(search.url, {
            searchTerm: term
        }).done(function(data) {
            if (search.elem.searchBox.removeClass("spinner"), data.results.length > 0) {
                var totalResults = data.results.length;
                search.pages = Math.ceil(totalResults / search.resultsPerPage);
                for (var i = 0, j = totalResults; j > i; i += search.resultsPerPage) search.results.push(data.results.slice(i, i + search.resultsPerPage));
                search.append(0);
            } else search.noResults();
        });
    },
    append: function(page) {
        search.elem.resultContainer.html(""), search.elem.pagContainer.html(""), $.Mustache.load(base + "/frontend/js/templates/search-result.mustache").done(function() {
            search.elem.resultContainer.mustache("search-result", search.results[page]);
            for (var i = 0; i < search.pages; i++) {
                var data = {
                    page: i
                };
                i === page && (data.active = !0), search.elem.pagContainer.mustache("pager", data);
            }
            search.show(), search.paginate();
        });
    },
    paginate: function() {
        search.elem.pagContainer.children("li").on("click", function() {
            var page = $(this).attr("data-page");
            $(this).addClass("active").siblings().removeClass("active"), search.changePage(page);
        });
    },
    changePage: function(page) {
        search.elem.resultContainer.animate({
            height: 0
        }, 500, function() {
            search.append(Number(page)), search.show(), search.elem.resultContainer.animate({
                height: search.resultsPerPage * search.elemHeight + "px"
            }, 500), $("html, body").animate({
                scrollTop: search.elem.resultContainer.offset().top
            }, 500);
        });
    },
    timer: 0
};