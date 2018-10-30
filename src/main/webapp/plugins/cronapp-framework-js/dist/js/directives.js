function maskDirectiveAsDate(e,t){return maskDirective(e,t,"as-date")}function maskDirectiveMask(e,t){return maskDirective(e,t,"mask")}function maskDirective(e,t,i){return{restrict:"A",require:"?ngModel",link:function(e,n,r,a){if("as-date"!=i||void 0===r.mask){var o=$(n),l=o.attr("type");if("checkbox"!=l&&"password"!=l){o.data("type",l),o.attr("type","text"),a&&(a.$formatters=[],a.$parsers=[]),void 0!==r.asDate&&"text"==l&&(l="date");var s=!1,c=r.mask||r.format;c=c?parseMaskType(c,t):parseMaskType(l,t),c.endsWith(";0")&&(s=!0);var d=c.replace(";1","").replace(";0","").trim();if(void 0!=d&&0!=d.length)if("date"==l||"datetime"==l||"datetime-local"==l||"month"==l||"time"==l||"time-local"==l||"week"==l){var u={format:d,locale:t.use(),showTodayButton:!0,useStrict:!0,tooltips:{today:t.instant("DatePicker.today"),clear:t.instant("DatePicker.clear"),close:t.instant("DatePicker.close"),selectMonth:t.instant("DatePicker.selectMonth"),prevMonth:t.instant("DatePicker.prevMonth"),nextMonth:t.instant("DatePicker.nextMonth"),selectYear:t.instant("DatePicker.selectYear"),prevYear:t.instant("DatePicker.prevYear"),nextYear:t.instant("DatePicker.nextYear"),selectDecade:t.instant("DatePicker.selectDecade"),prevDecade:t.instant("DatePicker.prevDecade"),nextDecade:t.instant("DatePicker.nextDecade"),prevCentury:t.instant("DatePicker.prevCentury"),nextCentury:t.instant("DatePicker.nextCentury")}};"DD/MM/YYYY"!=d&&"MM/DD/YYYY"!=d&&(u.sideBySide=!0),o.wrap('<div style="position:relative"></div>'),o.datetimepicker(u);var p="date"==l||"datetime"==l||"time"==l;o.on("dp.change",function(){$(this).is(":visible")&&($(this).trigger("change"),e.$apply(function(){var e=o.val(),t=null;t=p?moment.utc(e,d):moment(e,d),t.isValid()&&a&&a.$setViewValue(t.toDate())}))}),a&&(a.$formatters.push(function(e){if(e){var t=null;return t=p?moment.utc(e):moment(e),t.format(d)}return null}),a.$parsers.push(function(e){if(e){var t=null;return t=p?moment.utc(e,d):moment(e,d),t.toDate()}return null}))}else if("number"==l||"money"==l||"integer"==l){s=!0,!1;var g=d.trim().replace(/\./g,"").replace(/\,/g,"").replace(/#/g,"").replace(/0/g,"").replace(/9/g,""),m="",f="",v="",h=",",M=0;d.startsWith(g)?m=g:d.endsWith(g)&&(f=g);var y=d.trim().replace(m,"").replace(f,"").trim();y.startsWith("#.")?v=".":y.startsWith("#,")&&(v=",");var b=null;if(-1!=y.indexOf(",0")?(h=",",b=",0"):-1!=y.indexOf(".0")&&(h=".",b=".0"),null!=b){var k=y.substring(y.indexOf(b)+1);M=k.length}var D="numeric";0==M&&(D="integer");var w={rightAlign:"money"==l,unmaskAsNumber:!0,allowMinus:!0,prefix:m,suffix:f,radixPoint:h,digits:M};v&&(w.autoGroup=!0,w.groupSeparator=v),$(n).inputmask(D,w),a&&(a.$formatters.push(function(e){return void 0!=e&&null!=e&&""!=e?format(d,e):null}),a.$parsers.push(function(e){if(void 0!=e&&null!=e&&""!=e){var t=o.inputmask("unmaskedvalue");if(""!=t)return t}return null}))}else if("text"==l||"tel"==l){var u={};r.maskPlaceholder&&(u.placeholder=r.maskPlaceholder),o.mask(d,u),s&&a&&(a.$formatters.push(function(e){return e?o.masked(e):null}),a.$parsers.push(function(e){return e?o.cleanVal():null}))}}}}}}function parseMaskType(e,t){return"datetime"==e||"datetime-local"==e?"Format.DateTime"==(e=t.instant("Format.DateTime"))&&(e="DD/MM/YYYY HH:mm:ss"):"date"==e?"Format.Date"==(e=t.instant("Format.Date"))&&(e="DD/MM/YYYY"):"time"==e||"time-local"==e?"Format.Hour"==(e=t.instant("Format.Hour"))&&(e="HH:mm:ss"):"month"==e?e="MMMM":"number"==e?"Format.Decimal"==(e=t.instant("Format.Decimal"))&&(e="0,00"):"money"==e?"Format.Money"==(e=t.instant("Format.Money"))&&(e="#.#00,00"):"integer"==e?e="0":"week"==e?e="dddd":"tel"==e?e="(00) 00000-0000;0":"text"==e&&(e=""),e}maskDirectiveAsDate.$inject=["$compile","$translate"],maskDirectiveMask.$inject=["$compile","$translate"],function($app){var isoDate=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,patternFormat=function(e){return e?$(e).attr("format")||"DD/MM/YYYY":"DD/MM/YYYY"},parsePermission=function(e){var t={visible:{public:!0},enabled:{public:!0}};if(app.common={generateId:function(){var e=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return"0123456789".indexOf(e.substr(0,1))>-1?this.generateId():e}},e)for(var i=e.toLowerCase().trim().split(","),n=0;n<i.length;n++){var r=i[n].trim();if(r){var a=r.split(":");if(2==a.length){var o=a[0].trim(),l=a[1].trim();if(l){for(var s=l.split(";"),c={},d=0;d<s.length;d++){var u=s[d].trim();u&&(c[u]=!0)}t[o]=c}}}}return t};app.directive("asDate",maskDirectiveAsDate).directive("ngDestroy",function(){return{restrict:"A",link:function(scope,element,attrs,ctrl){element.on("$destroy",function(){attrs.ngDestroy&&attrs.ngDestroy.length>0&&(attrs.ngDestroy.indexOf("app.")>-1||attrs.ngDestroy.indexOf("blockly.")>-1?scope.$eval(attrs.ngDestroy):eval(attrs.ngDestroy))})}}}).directive("dynamicImage",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@",width:"@",height:"@",style:"@",class:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel=""),e.width||(e.width="128"),e.height||(e.height="128"),e.style||(e.style=""),e.class||(e.class=""),this.containsLetter(e.width)||(e.width+="px"),this.containsLetter(e.height)||(e.height+="px")},containsLetter:function(e){for(var t,i=0;i<e.length;i++){t=!0;for(var n=0;n<10;n++)parseInt(e[i])==n&&(t=!1);if(t)break}return t},link:function(t,i,n){this.init(t);var r=t,a=n.ngRequired&&"true"==n.ngRequired?"required":"";i.append('<div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectImg.svg" class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" accept="image/*;capture=camera">                                  <div class="remove btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                                    <span class="glyphicon glyphicon-remove"></span>                                  </div>                                  <div class="btn btn-info btn-xs start-camera-button" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                                    <span class="glyphicon glyphicon-facetime-video"></span>                                  </div>                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important; margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                </div>'.split("$height$").join(r.height).split("$width$").join(r.width).split("$ngModel$").join(r.ngModel).split("$style$").join(r.style).split("$class$").join(r.class).split("$required$").join(a)),e(i)(i.scope())}}}]).directive("dynamicImage",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,i,n){var r=n.ngRequired&&"true"==n.ngRequired?"required":"",a=i.html(),o='<div ngf-drop="" ngf-drag-over-class="dragover">                   <img style="width: 100%;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                   <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important; margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                   <div class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" ngf-pattern="\'image/*\'" ngf-max-size="$maxFileSize$">                     $userHtml$                   </div>                   <div class="remove-image-button btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                     <span class="glyphicon glyphicon-remove"></span>                   </div>                   <div class="btn btn-info btn-xs start-camera-button-attribute" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                     <span class="glyphicon glyphicon-facetime-video"></span>                   </div>                 </div>',l="";n.maxFileSize&&(l=n.maxFileSize),o=$(o.split("$ngModel$").join(n.ngModel).split("$required$").join(r).split("$userHtml$").join(a).split("$maxFileSize$").join(l)),i.html(o),e(o)(i.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,i,n){var r=n.ngRequired&&"true"==n.ngRequired?"required":"",a=n.ngModel.split("."),o=a[0],l=a[a.length-1],s=Math.floor(1e3*Math.random()+20),c=i.html(),d="";n.maxFileSize&&(d=n.maxFileSize);var u='                                <div ng-show="!$ngModel$" ngf-drop="" ngf-drag-over-class="dragover">                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important;margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                  <div class="btn" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" ngf-max-size="$maxFileSize$">                                    $userHtml$                                  </div>                                  <div class="progress" data-type="bootstrapProgress" id="uploadprogress$number$" style="display:none">                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">                                      <span class="sr-only"></span>                                    </div>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="upload-image-component-attribute">                                   <div class="btn btn-danger btn-xs ng-scope" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="glyphicon glyphicon-remove"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntity($datasource$,\'$field$\')">download</a>                                   </div>                                 </div>                                 ';u=$(u.split("$ngModel$").join(n.ngModel).split("$datasource$").join(o).split("$field$").join(l).split("$number$").join(s).split("$required$").join(r).split("$userHtml$").join(c).split("$maxFileSize$").join(d)),i.html(u),e(u)(i.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel="")},link:function(t,i,n){this.init(t);var r=t,a=n.ngRequired&&"true"==n.ngRequired?"required":"",o=r.ngModel.split("."),l=o[0],s=o[o.length-1],c=Math.floor(1e3*Math.random()+20);i.append('                                <div ng-show="!$ngModel$">                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important;margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                  <div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                     <img class="ng-scope" style="height: 128px; width: 128px;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectFile.png" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" accept="*">                                    <progress id="uploadprogress$number$" max="100" value="0" style="position: absolute; width: 128px; margin-top: -134px;">0</progress>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="form-group upload-image-component">                                   <div class="btn btn-danger btn-xs ng-scope" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="glyphicon glyphicon-remove"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntity($datasource$,\'$field$\')">download</a>                                   </div>                                 </div>                                 '.split("$ngModel$").join(r.ngModel).split("$datasource$").join(l).split("$field$").join(s).split("$number$").join(c).split("$required$").join(a)),e(i)(i.scope())}}}]).directive("pwCheck",[function(){"use strict";return{require:"ngModel",link:function(e,t,i,n){var r="#"+i.pwCheck;t.add(r).on("keyup",function(){e.$apply(function(){var e=t.val()===$(r).val();n.$setValidity("pwmatch",e)})})}}}]).directive("ngClick",[function(){"use strict";return{link:function(scope,elem,attrs,ctrl){if(scope.rowData){var crnDatasource=elem.closest("[crn-datasource]");crnDatasource.length>0&&elem.on("click",function(){scope.$apply(function(){var datasource=eval(crnDatasource.attr("crn-datasource"));datasource.active=scope.rowData})})}}}}]).directive("valid",function(){return{require:"^ngModel",restrict:"A",link:function(e,t,i,n){var r={cpf:CPF,cnpj:CNPJ};n.$validators[i.valid]=function(e,n){var a=e||n,o=r[i.valid].isValid(a);return o?t[0].setCustomValidity(""):t.scope().$applyAsync(function(){t[0].setCustomValidity(t[0].dataset.errorMessage)}),o||!a}}}}).directive("cronappSecurity",function(){return{restrict:"A",link:function(e,t,i){var n=[];e.session&&e.session.roles&&(n=e.session.roles.toLowerCase().split(","));for(var r=parsePermission(i.cronappSecurity),a=!1,o=!1,l=0;l<n.length;l++){var s=n[l].trim();s&&(r.visible[s]&&(a=!0),r.enabled[s]&&(o=!0))}a||$(t).hide(),o||$(t).find("*").addBack().attr("disabled",!0)}}}).directive("qr",["$window",function(e){return{restrict:"A",require:"^ngModel",template:'<canvas ng-hide="image"></canvas><img ng-if="image" ng-src="{{canvasImage}}"/>',link:function(t,i,n,r){void 0===t.size&&n.size&&(t.text=n.size);var a=function(){return r.$modelValue||""},o=function(e){return/^[0-9]*$/.test(e)},l=function(e){return/^[0-9A-Z $%*+\-.\/:]*$/.test(e)},s=function(e){for(var t=0;t<e.length;t++){if(e.charCodeAt(t)>255)return!1}return!0},c=function(e,t){if("NUMBER"===e&&!o(t))throw new Error("The `NUMBER` input mode is invalid for text.");if("ALPHA_NUM"===e&&!l(t))throw new Error("The `ALPHA_NUM` input mode is invalid for text.");if("8bit"===e&&!s(t))throw new Error("The `8bit` input mode is invalid for text.");if(!s(t))throw new Error("Input mode is invalid for text.");return!0},d=function(e){var i=t.inputMode;return i=i||(o(e)?"NUMBER":void 0),i=i||(l(e)?"ALPHA_NUM":void 0),i=i||(s(e)?"8bit":""),c(i,e)?i:""},u=i.find("canvas")[0],p=!!e.CanvasRenderingContext2D;t.TYPE_NUMBER=function(){return t.typeNumber||0}(),t.TEXT=a(),t.CORRECTION=function(){return{L:1,M:0,Q:3,H:2}[t.correctionLevel||0]||0}(),t.SIZE=function(){return t.size||$(i).outerWidth()}(),t.INPUT_MODE=d(t.TEXT),t.canvasImage="";var g=function(e,t,i,n){for(var r=0;r<i;r++)for(var a=0;a<i;a++){var o=Math.ceil((a+1)*n)-Math.floor(a*n),l=Math.ceil((r+1)*n)-Math.floor(r*n);e.fillStyle=t.isDark(r,a)?"#000":"#fff",e.fillRect(Math.round(a*n),Math.round(r*n),o,l)}},m=function(e,i,n,r,a,o){var l=/^\s+|\s+$/g,s=i.replace(l,""),c=new QRCode(n,r,o);c.addData(s),c.make();var d=e.getContext("2d"),u=c.getModuleCount(),m=a/u;e.width=e.height=a,p&&(g(d,c,u,m),t.canvasImage=e.toDataURL()||"")};t.$watch(function(){return r.$modelValue},function(e,i){e!==i&&(t.text=r.$modelValue,t.TEXT=a(),t.INPUT_MODE=d(t.TEXT),m(u,t.TEXT,t.TYPE_NUMBER,t.CORRECTION,t.SIZE,t.INPUT_MODE))}),m(u,t.TEXT,t.TYPE_NUMBER,t.CORRECTION,t.SIZE,t.INPUT_MODE)}}}]).directive("uiSelect",["$compile",function(e){return{restrict:"E",require:"ngModel",link:function(t,i,n,r){if(void 0!=n.required||"true"===n.ngRequired){$(i).append('<input autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="left: 50%!important; top: 100%!important;" type=text ng-model="'+n.ngModel+'" required>');var a=$(i).find("input.uiSelectRequired");e(a)(i.scope())}}}}]).filter("mask",["$translate",function(e){return function(t,i){if(!(i=parseMaskType(i,e)))return t;if(i=i.replace(";1","").replace(";0","").trim(),"string"==typeof t&&t.match(isoDate))return moment.utc(t).format(i);if(t instanceof Date)return moment.utc(t).format(i);if("number"==typeof t)return format(i,t);if(void 0!=t&&null!=t&&""!=t){var n=$('<input type="text">');return n.mask(i),n.masked(t)}return t}}]).directive("mask",maskDirectiveMask).directive("cronappFilter",function(){return{restrict:"A",require:"?ngModel",setFilterInButton:function(e,t,i){var n=e.closest("fieldset");if(n){var r=n.find("button[cronapp-filter]");if(r){var a=r.data("filters");a||(a=[]);var o=-1,l=e.attr("ng-model");if($(a).each(function(e){this.ngModel==l&&(o=e)}),o>-1&&a.splice(o,1),t.length>0){var s={ngModel:l,bindedFilter:t};a.push(s)}r.data("filters",a)}}},makeAutoPostSearch:function(e,t,i,n){var r=e.closest("fieldset");if(r&&r.length>0){var a=r.find("button[cronapp-filter]");if(a&&a.length>0){var o=a.data("filters");o&&o.length>0&&(t="",$(o).each(function(){t+=this.bindedFilter+";"}))}}i.search(t,"true"==n.cronappFilterCaseinsensitive)},inputBehavior:function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){var filterTemplate="",filtersSplited=attrs.cronappFilter.split(";");$(filtersSplited).each(function(){this.length>0&&(filterTemplate+="text"==typeElement?this+"@"+operator+"%{value}%;":this+operator+"{value};")}),filterTemplate=filterTemplate.length>0?filterTemplate.substr(0,filterTemplate.length-1):"%{value}%";var selfDirective=this;ngModelCtrl?scope.$watch(attrs.ngModel,function(newVal,oldVal){if(!angular.equals(newVal,oldVal)){var eType=$element.data("type")||$element.attr("type"),value=ngModelCtrl.$modelValue,datasource=eval(attrs.crnDatasource);value instanceof Date?(value=value.toISOString(),value+="date"==eType?"@@date":"time"==eType||"time-local"==eType?"@@time":"@@datetime"):"number"==typeof value?value+="@@number":"boolean"==typeof value&&(value+="@@boolean");var bindedFilter=filterTemplate.split("{value}").join(value);0==ngModelCtrl.$viewValue.length&&(bindedFilter=""),selfDirective.setFilterInButton($element,bindedFilter,operator),autopost&&selfDirective.makeAutoPostSearch($element,bindedFilter,datasource,attrs)}}):"text"==typeElement?$element.on("keyup",function(){var datasource=eval(attrs.crnDatasource),value=void 0;value=ngModelCtrl&&void 0!=ngModelCtrl?ngModelCtrl.$viewValue:this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==this.value.length&&(bindedFilter=""),selfDirective.setFilterInButton($element,bindedFilter,operator),autopost&&selfDirective.makeAutoPostSearch($element,bindedFilter,datasource,attrs)}):$element.on("change",function(){var datasource=eval(attrs.crnDatasource),value=void 0,typeElement=$(this).attr("type");if(void 0!=attrs.asDate&&(typeElement="date"),ngModelCtrl&&void 0!=ngModelCtrl)value=ngModelCtrl.$viewValue;else if("checkbox"==typeElement)value=$(this).is(":checked");else if("date"==typeElement){if(value=this.value,this.value.length>0){var momentDate=moment(this.value,patternFormat(this));value=momentDate.toDate().toISOString()}}else value=this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==value.toString().length&&(bindedFilter=""),selfDirective.setFilterInButton($element,bindedFilter,operator),autopost&&selfDirective.makeAutoPostSearch($element,bindedFilter,datasource,attrs)})},buttonBehavior:function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){$element.on("click",function(){var $this=$(this),datasourceName="";datasourceName=attrs.crnDatasource?attrs.crnDatasource:$element.parent().attr("crn-datasource");var filters=$this.data("filters");if(datasourceName&&datasourceName.length>0&&filters){var bindedFilter="";$(filters).each(function(){bindedFilter+=this.bindedFilter+";"});var datasourceToFilter=eval(datasourceName);datasourceToFilter.search(bindedFilter,"true"==attrs.cronappFilterCaseinsensitive)}})},link:function(e,t,i,n){var r=$(t),a=r.data("type")||r.attr("type");void 0!=i.asDate&&(a="date");var o="=";i.cronappFilterOperator&&i.cronappFilterOperator.length>0&&(o=i.cronappFilterOperator);var l=!0;i.cronappFilterAutopost&&"false"==i.cronappFilterAutopost&&(l=!1),"INPUT"==r[0].tagName?this.inputBehavior(e,t,i,n,r,a,o,l):this.buttonBehavior(e,t,i,n,r,a,o,l)}}}).directive("cronRichEditor",["$compile",function(e){return{restrict:"E",replace:!0,require:"ngModel",parseToTinyMCEOptions:function(e){var t={};t.allowFullScreen="fullscreen |",t.allowPage="fullpage newdocument code pagebreak |",t.allowPrint="preview print |",t.allowTransferArea="cut copy paste |",t.allowDoUndo="undo redo |",t.allowSymbol="charmap |",t.allowEmbeddedImage="bdesk_photo |",t.allowFont="formatselect fontselect fontsizeselect strikethrough bold italic underline removeformat |",t.allowLinks="link unlink anchor |",t.allowParagraph="alignleft aligncenter alignright alignjustify numlist bullist outdent indent blockquote hr |",t.allowFormulas="tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry tiny_mce_wiris_CAS |";var i={menubar:!1,statusbar:!1,plugins:"bdesk_photo advlist anchor autolink autoresize autosave charmap code colorpicker contextmenu directionality emoticons fullpage fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus table template toc visualblocks visualchars wordcount tiny_mce_wiris",toolbar:"",content_style:""};for(var n in e)n.startsWith("allow")&&e[n]&&(i.toolbar+=" "+t[n]);return i.menubar=e.showMenuBar,i.statusbar=e.showStatusBar,i.content_style=e.contentStyle,JSON.stringify(i)},link:function(t,i,n,r){var a=JSON.parse(n.options),o=this.parseToTinyMCEOptions(a),l='                  <textarea                     ui-tinymce="$options$"                     ng-model="$ngModel$"                     id="$id$">                   </textarea>                 ';l=$(l.split("$ngModel$").join(n.ngModel).split("$id$").join(n.id||app.common.generateId()).split("$options$").join(escape(o)));var s=angular.element(l);i.html(""),i.append(s),i.attr("id",null),e(s)(t)}}}])}(app);