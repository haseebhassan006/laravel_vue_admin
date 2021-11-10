"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_service_ServicesComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['active_name', 'previous'],
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.prevRoute = from;
    });
  },
  computed: {
    prevRoutePath: function prevRoutePath() {
      return this.prevRoute ? this.prevRoute.path : '/';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_breadcrumbComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/breadcrumbComponent */ "./resources/js/components/backend/components/breadcrumbComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    breadcrumb: _components_breadcrumbComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      services: []
    };
  }
});

/***/ }),

/***/ "./resources/js/components/backend/components/breadcrumbComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/backend/components/breadcrumbComponent.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _breadcrumbComponent_vue_vue_type_template_id_1c485aa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbComponent.vue?vue&type=template&id=1c485aa7& */ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7&");
/* harmony import */ var _breadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _breadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _breadcrumbComponent_vue_vue_type_template_id_1c485aa7___WEBPACK_IMPORTED_MODULE_0__.render,
  _breadcrumbComponent_vue_vue_type_template_id_1c485aa7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/breadcrumbComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/service/ServicesComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/backend/pages/service/ServicesComponent.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServicesComponent_vue_vue_type_template_id_d1712d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true& */ "./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true&");
/* harmony import */ var _ServicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServicesComponent_vue_vue_type_template_id_d1712d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ServicesComponent_vue_vue_type_template_id_d1712d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d1712d78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/service/ServicesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./breadcrumbComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServicesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbComponent_vue_vue_type_template_id_1c485aa7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbComponent_vue_vue_type_template_id_1c485aa7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbComponent_vue_vue_type_template_id_1c485aa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./breadcrumbComponent.vue?vue&type=template&id=1c485aa7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7&");


/***/ }),

/***/ "./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesComponent_vue_vue_type_template_id_d1712d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesComponent_vue_vue_type_template_id_d1712d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesComponent_vue_vue_type_template_id_d1712d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          {
            staticClass:
              "page-title-box d-sm-flex align-items-center justify-content-between"
          },
          [
            _c("h4", { staticClass: "mb-sm-0 font-size-18" }, [
              _vm._v(_vm._s(_vm.active_name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "page-title-right" }, [
              _c(
                "ol",
                { staticClass: "breadcrumb m-0" },
                [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _vm._v("Dashboard")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.previous, function(item) {
                    return _c(
                      "li",
                      { key: item.id, staticClass: "breadcrumb-item" },
                      [
                        _c("router-link", { attrs: { to: item.link } }, [
                          _vm._v(_vm._s(item.name))
                        ])
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("li", { staticClass: "breadcrumb-item active" }, [
                    _vm._v(_vm._s(_vm.active_name))
                  ])
                ],
                2
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/service/ServicesComponent.vue?vue&type=template&id=d1712d78&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("breadcrumb", { attrs: { active_name: "Services" } }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "mb-3" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Services List "),
                      _c("span", { staticClass: "text-muted fw-normal ms-2" }, [
                        _vm._v("(" + _vm._s(_vm.services.length) + ")")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3"
        },
        [
          _c("div", [
            _c("a", { staticClass: "btn btn-light", attrs: { href: "#" } }, [
              _c("i", { staticClass: "bx bx-plus me-1" }),
              _vm._v(" Add Service")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown" }, [
            _c(
              "a",
              {
                staticClass:
                  "btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle",
                attrs: {
                  href: "#",
                  role: "button",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false"
                }
              },
              [_c("i", { staticClass: "bx bx-dots-horizontal-rounded" })]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive mb-4" }, [
      _c(
        "table",
        {
          staticClass:
            "table align-middle datatable dt-responsive table-check nowrap",
          staticStyle: {
            "border-collapse": "collapse",
            "border-spacing": "0 8px",
            width: "100%"
          }
        },
        [
          _c("thead", [
            _c("tr", [
              _c(
                "th",
                { staticStyle: { width: "50px" }, attrs: { scope: "col" } },
                [
                  _c("div", { staticClass: "form-check font-size-16" }, [
                    _c("input", {
                      staticClass: "form-check-input",
                      attrs: { type: "checkbox", id: "checkAll" }
                    }),
                    _vm._v(" "),
                    _c("label", {
                      staticClass: "form-check-label",
                      attrs: { for: "checkAll" }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "80px", "min-width": "80px" } },
                [_vm._v("Action")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [
                _c("div", { staticClass: "form-check font-size-16" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", id: "contacusercheck1" }
                  }),
                  _vm._v(" "),
                  _c("label", {
                    staticClass: "form-check-label",
                    attrs: { for: "contacusercheck1" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("td", [_c("span")])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);