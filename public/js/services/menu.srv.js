angular.module ('dft')
  .factory ('menuPicker', [
  'helpers'
  , function (help) {
    'use strict';
    var menus = {};

    function validateLink(link) {
      if (_.isObject (link)) {
        if (help.checkInstance (link, Link) !== true) {
          return new Link (arguments[0]);
        }
        return link;
      } else {
        console.warn (link);
        throw new TypeError ('passed a non-link to Menu constructor...');
      }
    }

    function validateList(list) {
      var arr = [];
      if (_.isArray (list) !== true) {
        return [];
      }
      _.each (list, function (val) {
        var link = validateLink (val);
        arr.push (link);
      });
      return arr;
    }

    function Link(text, id, arg) {
      var accessor = this;
      var arr = [];
      if (_.isArray (text)) {
        id = text[1];
        arg = text[2];
        text = text[0];
      }
      if (typeof text !== 'string' || typeof id !== 'string') {
        throw new TypeError ('passed non-string to Link constructor: ' + text + ' or ' + id);
      }
      this.id = id;
      this.text = text;
      this.parent = function () {
        return (typeof arg === 'string') ? arg : '/';
      } ();
      this.constructor = Link;
      (function initLink() {
        accessor.url = id;
        if (_.isArray (arg) === true) {
          _.each (arg, function (val) {
            var child = new Link (val[0], val[1], id);
            child.url = id + '.' + child.url;
            arr.push (child);
          });
        }
        accessor.children = arr;
      }) ();
    }

    function Menu(obj) {
      var accessor = this;
      if (_.isObject (obj) === false || obj === null) {
        console.warn (obj);
        throw new TypeError ('passed a non-object to Menu constructor...');
      }
      _.each (obj, function (val, key) {
        if (key !== 'list') {
          accessor[key] = val;
        }
      });

      this.list = validateList (obj.list);
      this.constructor = Menu;
    }

    menus.main = new Menu ({
      id: 'main'
    , list: [
          ['map', 'map']
        , ['data', 'data']
        , ['contribute', 'contribute', [
            ['$', 'money']
          , ['info', 'info']
          , ['code', 'code']]
        ]
        , ['contact', 'contact']
      ]
    });

    return function (menuId) {
      if (menus[menuId]) {
        return menus[menuId];
      }
      console.warn ('no menu exists with id of: ' + menuId);
    };
  }]);
