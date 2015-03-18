ace.define("ace/theme/khan_academy",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-khan_academy";
exports.cssText = "\
.ace-khan_academy .ace_gutter {\
background: #e8e8e8;\
color: #333\
}\
.ace-khan_academy .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-khan_academy {\
background-color: #1B232E;\
color: #FFFFFF\
}\
.ace-khan_academy .ace_cursor {\
color: #FFFFFF\
}\
.ace-khan_academy .ace_marker-layer .ace_selection {\
background: #B5D5FF\
}\
.ace-khan_academy.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
border-radius: 2px\
}\
.ace-khan_academy .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
.ace-khan_academy .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #BFBFBF\
}\
.ace-khan_academy .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.971)\
}\
.ace-khan_academy .ace_gutter-active-line {\
background-color: rgba(0, 0, 0, 0.071)\
}\
.ace-khan_academy .ace_marker-layer .ace_selected-word {\
border: 1px solid #B5D5FF\
}\
.ace-khan_academy .ace_constant.ace_language,\
.ace-khan_academy .ace_keyword,\
.ace-khan_academy .ace_meta,\
.ace-khan_academy .ace_variable.ace_language {\
color: #857B72\
}\
.ace-khan_academy .ace_invisible {\
color: #BFBFBF\
}\
.ace-khan_academy .ace_constant.ace_character,\
.ace-khan_academy .ace_constant.ace_other {\
color: #275A5E\
}\
.ace-khan_academy .ace_constant.ace_numeric {\
color: #4DB49A\
}\
.ace-khan_academy .ace_entity.ace_other.ace_attribute-name,\
.ace-khan_academy .ace_support.ace_constant,\
.ace-khan_academy .ace_support.ace_function {\
color: #E8A85C\
}\
.ace-khan_academy .ace_fold {\
background-color: #857B72;\
border-color: #000000\
}\
.ace-khan_academy .ace_entity.ace_name.ace_tag,\
.ace-khan_academy .ace_support.ace_class,\
.ace-khan_academy .ace_support.ace_type {\
color: #790EAD\
}\
.ace-khan_academy .ace_storage {\
color: #8EAA2D\
}\
.ace-khan_academy .ace_string {\
color: #63C009\
}\
.ace-khan_academy .ace_comment {\
color: #008E00\
}\
.ace-khan_academy .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
