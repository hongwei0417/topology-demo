"use strict";(self.webpackChunktopology_web=self.webpackChunktopology_web||[]).push([[680],{9680:(W,x,a)=>{a.r(x),a.d(x,{AUTH_PAGE_ROUTES:()=>K});var k=a(9284),e=a(4291),u=a(2308),I=a(8823),g=a(5973),s=a(3198),P=a(7083),d=a(4007),_=a(3999),b=a(6569);const T=["input"],O=["label"],R=["*"],L=new e.nKC("mat-checkbox-default-options",{providedIn:"root",factory:f});function f(){return{color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1}}var r=function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o}(r||{});const E={provide:d.kq,useExisting:(0,e.Rfq)(()=>y),multi:!0};class F{}let w=0;const v=f();let y=(()=>{class o{focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(c){const n=new F;return n.source=this,n.checked=c,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(c,n,t,i,l,h){this._elementRef=c,this._changeDetectorRef=n,this._ngZone=t,this._animationMode=l,this._options=h,this._animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"},this.ariaLabel="",this.ariaLabelledby=null,this.labelPosition="after",this.name=null,this.change=new e.bkB,this.indeterminateChange=new e.bkB,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=r.Init,this._controlValueAccessorChangeFn=()=>{},this._validatorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||v,this.color=this._options.color||v.color,this.tabIndex=parseInt(i)||0,this.id=this._uniqueId="mat-mdc-checkbox-"+ ++w,this.disabledInteractive=h?.disabledInteractive??!1}ngOnChanges(c){c.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(c){c!=this.checked&&(this._checked=c,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(c){c!==this.disabled&&(this._disabled=c,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(c){const n=c!=this._indeterminate;this._indeterminate=c,n&&(this._transitionCheckState(this._indeterminate?r.Indeterminate:this.checked?r.Checked:r.Unchecked),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(c){this.checked=!!c}registerOnChange(c){this._controlValueAccessorChangeFn=c}registerOnTouched(c){this._onTouched=c}setDisabledState(c){this.disabled=c}validate(c){return this.required&&!0!==c.value?{required:!0}:null}registerOnValidatorChange(c){this._validatorChangeFn=c}_transitionCheckState(c){let n=this._currentCheckState,t=this._getAnimationTargetElement();if(n!==c&&t&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,c),this._currentCheckState=c,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);const i=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(i)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){const c=this._options?.clickAction;this.disabled||"noop"===c?(this.disabled&&this.disabledInteractive||!this.disabled&&"noop"===c)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==c&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?r.Checked:r.Unchecked),this._emitChangeEvent())}_onInteractionEvent(c){c.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(c,n){if("NoopAnimations"===this._animationMode)return"";switch(c){case r.Init:if(n===r.Checked)return this._animationClasses.uncheckedToChecked;if(n==r.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case r.Unchecked:return n===r.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case r.Checked:return n===r.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case r.Indeterminate:return n===r.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(c){const n=this._inputElement;n&&(n.nativeElement.indeterminate=c)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(c){c.target&&this._labelElement.nativeElement.contains(c.target)&&c.stopPropagation()}static#e=this.\u0275fac=function(n){return new(n||o)(e.rXU(e.aKT),e.rXU(e.gRc),e.rXU(e.SKi),e.kS0("tabindex"),e.rXU(e.bc$,8),e.rXU(L,8))};static#c=this.\u0275cmp=e.VBU({type:o,selectors:[["mat-checkbox"]],viewQuery:function(n,t){if(1&n&&(e.GBs(T,5),e.GBs(O,5),e.GBs(b.r6,5)),2&n){let i;e.mGM(i=e.lsd())&&(t._inputElement=i.first),e.mGM(i=e.lsd())&&(t._labelElement=i.first),e.mGM(i=e.lsd())&&(t.ripple=i.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,t){2&n&&(e.Mr5("id",t.id),e.BMQ("tabindex",null)("aria-label",null)("aria-labelledby",null),e.HbH(t.color?"mat-"+t.color:"mat-accent"),e.AVh("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mdc-checkbox--disabled",t.disabled)("mat-mdc-checkbox-disabled",t.disabled)("mat-mdc-checkbox-checked",t.checked)("mat-mdc-checkbox-disabled-interactive",t.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],id:"id",required:[2,"required","required",e.L39],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",e.L39],tabIndex:[2,"tabIndex","tabIndex",c=>null==c?void 0:(0,e.Udg)(c)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",e.L39],checked:[2,"checked","checked",e.L39],disabled:[2,"disabled","disabled",e.L39],indeterminate:[2,"indeterminate","indeterminate",e.L39]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],standalone:!0,features:[e.Jv_([E,{provide:d.cz,useExisting:o,multi:!0}]),e.GFd,e.OA$,e.aNF],ngContentSelectors:R,decls:15,vars:20,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],[1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],[1,"mdc-checkbox__ripple"],[1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","",1,"mat-mdc-checkbox-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,t){if(1&n){const i=e.RV6();e.NAR(),e.j41(0,"div",3),e.bIt("click",function(h){return e.eBV(i),e.Njj(t._preventBubblingFromLabel(h))}),e.j41(1,"div",4,0)(3,"div",5),e.bIt("click",function(){return e.eBV(i),e.Njj(t._onTouchTargetClick())}),e.k0s(),e.j41(4,"input",6,1),e.bIt("blur",function(){return e.eBV(i),e.Njj(t._onBlur())})("click",function(){return e.eBV(i),e.Njj(t._onInputClick())})("change",function(h){return e.eBV(i),e.Njj(t._onInteractionEvent(h))}),e.k0s(),e.nrm(6,"div",7),e.j41(7,"div",8),e.qSk(),e.j41(8,"svg",9),e.nrm(9,"path",10),e.k0s(),e.joV(),e.nrm(10,"div",11),e.k0s(),e.nrm(11,"div",12),e.k0s(),e.j41(12,"label",13,2),e.SdG(14),e.k0s()()}if(2&n){const i=e.sdS(2);e.Y8G("labelPosition",t.labelPosition),e.R7$(4),e.AVh("mdc-checkbox--selected",t.checked),e.Y8G("checked",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled&&!t.disabledInteractive)("id",t.inputId)("required",t.required)("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex),e.BMQ("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-checked",t.indeterminate?"mixed":null)("aria-disabled",!(!t.disabled||!t.disabledInteractive)||null)("name",t.name)("value",t.value),e.R7$(7),e.Y8G("matRippleTrigger",i)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),e.R7$(),e.Y8G("for",t.inputId)}},dependencies:[b.r6,b.tO],styles:['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0})}return o})(),j=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#c=this.\u0275mod=e.$C({type:o});static#t=this.\u0275inj=e.G2t({imports:[y,b.yE,b.yE]})}return o})();var p=a(5696),C=a(4288),M=a(1706),B=a(9434),U=a(1996),$=a(3815),D=a(8752);const G=o=>({modelInfo:o}),V=o=>({year:o});function X(o,m){if(1&o&&(e.j41(0,"mx-infotip",17),e.EFF(1),e.k0s()),2&o){const c=e.XpG().$implicit;e.R7$(),e.SpI(" ",c("login-failed-msg")," ")}}function N(o,m){if(1&o&&(e.j41(0,"mx-infotip",18),e.EFF(1),e.k0s()),2&o){const c=e.XpG().$implicit;e.R7$(),e.SpI(" ",c("user-logout-msg")," ")}}function S(o,m){1&o&&e.nrm(0,"mat-icon",19)}function q(o,m){1&o&&e.nrm(0,"mat-icon",20)}function Y(o,m){if(1&o){const c=e.RV6();e.qex(0),e.j41(1,"div",2)(2,"div",3),e.nrm(3,"img",4),e.nI1(4,"async"),e.nI1(5,"logoImg"),e.nrm(6,"p",5),e.DNE(7,X,2,1,"mx-infotip",6)(8,N,2,1,"mx-infotip",7),e.j41(9,"form",8),e.bIt("keypress",function(t){e.eBV(c);const i=e.XpG();return e.Njj(i.onTypeEnter(t))}),e.j41(10,"mat-form-field",9)(11,"mat-label"),e.EFF(12),e.k0s(),e.nrm(13,"input",10),e.k0s(),e.j41(14,"mat-form-field",9)(15,"mat-label"),e.EFF(16),e.k0s(),e.nrm(17,"input",11),e.j41(18,"button",12),e.bIt("click",function(){e.eBV(c);const t=e.XpG();return e.Njj(t.togglePwd())}),e.DNE(19,S,1,0,"mat-icon",13),e.k0s(),e.DNE(20,q,1,0,"ng-template",null,0,e.C5r),e.k0s()(),e.j41(22,"div",14)(23,"button",15),e.bIt("click",function(){e.eBV(c);const t=e.XpG();return e.Njj(t.onSubmit())}),e.EFF(24),e.k0s()()(),e.j41(25,"div",16),e.EFF(26),e.k0s()(),e.bVm()}if(2&o){const c=m.$implicit,n=e.sdS(21),t=e.XpG();e.R7$(3),e.Y8G("src",e.bMT(5,18,e.bMT(4,16,t.isDarkTheme$)),e.B4B),e.R7$(3),e.Y8G("innerHTML",c("sign-in-msg",e.eq3(20,G,t.modelInfo)),e.npT),e.R7$(),e.Y8G("ngIf",t.isLoginFail),e.R7$(),e.Y8G("ngIf",t.isUserLogout),e.R7$(),e.Y8G("formGroup",t.form),e.R7$(),e.Y8G("hideRequiredMarker",!0),e.R7$(2),e.JRh(c("account")),e.R7$(2),e.Y8G("hideRequiredMarker",!0),e.R7$(2),e.JRh(c("pwd")),e.R7$(),e.Y8G("type",t.isTogglePwd?"password":"text"),e.R7$(2),e.Y8G("ngIf",t.isTogglePwd)("ngIfElse",n),e.R7$(4),e.Y8G("mxButtonIsLoading",t.loading)("disabled",t.form.invalid||t.loading),e.R7$(),e.SpI(" ",c("sign-in")," "),e.R7$(2),e.JRh(c("copy-right-msg",e.eq3(22,V,t.year)))}}let H=(()=>{class o{modelInfo="";isLoginFail=!1;loginFailMessage="";isIdleTimeout=!1;isUserLogout=!1;welcomeMessage="";#e=(0,e.WQX)(d.ze);#c=(0,e.WQX)(g.il);#t=(0,e.WQX)(D.Fs);#n=(0,e.WQX)($.CH);#o=(0,e.WQX)(e.abz);year="";form;isDarkTheme$=this.#t.isDarkTheme$;isTogglePwd=!0;loading=!1;ngOnInit(){this.form=this.#e.group({username:["",[d.k0.required]],password:["",[d.k0.required]]}),this.#c.pipe((0,g.Lt)(s.m5),(0,P.pQ)(this.#o)).subscribe(c=>{this.loading=c}),this.#c.dispatch(s.gi.loginingReset()),this.year=(new Date).getFullYear().toString()}togglePwd(){this.isTogglePwd=!this.isTogglePwd}onTypeEnter(c){c.stopPropagation(),"enter"===c.key.toLowerCase()&&this.onSubmit()}onSubmit(){if(this.form.valid){const{username:c,password:n}=this.form.value;this.#c.dispatch(s.gi.login({payload:{username:c,password:n}}))}}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=e.VBU({type:o,selectors:[["one-ui-login-box"]],inputs:{modelInfo:"modelInfo",isLoginFail:"isLoginFail",loginFailMessage:"loginFailMessage",isIdleTimeout:"isIdleTimeout",isUserLogout:"isUserLogout",welcomeMessage:"welcomeMessage"},standalone:!0,features:[e.aNF],decls:1,vars:1,consts:[["showPwd",""],[4,"transloco","translocoRead"],[1,"auth-area"],[1,"login-form-block"],["title","login",1,"login-logo",3,"src"],[1,"gl-headline-sm","login-title",3,"innerHTML"],["class","info-tip","mx-error-tip","",4,"ngIf"],["class","info-tip","mx-info-tip","",4,"ngIf"],["novalidate","",3,"keypress","formGroup"],["floatLabel","always",1,"input-form-field",3,"hideRequiredMarker"],["title","username","matInput","","type","text","formControlName","username","required",""],["title","password","matInput","","formControlName","password","required","",3,"type"],["title","button","type","button","mat-icon-button","","matSuffix","",1,"visibility-pwd-btn",3,"click"],["class","visibility-pwd","svgIcon","icon:visibility_off",4,"ngIf","ngIfElse"],[1,"gl-text-right","login-save-btn"],["type","submit","mat-flat-button","","color","primary",3,"click","mxButtonIsLoading","disabled"],[1,"copyright"],["mx-error-tip","",1,"info-tip"],["mx-info-tip","",1,"info-tip"],["svgIcon","icon:visibility_off",1,"visibility-pwd"],["svgIcon","icon:visibility",1,"visibility-pwd"]],template:function(n,t){1&n&&e.DNE(0,Y,27,24,"ng-container",1),2&n&&e.Y8G("translocoRead","authPage.login-box")},dependencies:[k.MD,k.bT,k.Jj,u.Q8,u.bA,U.u,p.RG,p.rl,p.nJ,p.yw,M.fS,M.fg,_.Hl,_.$z,_.iY,C.m_,C.An,j,d.X1,d.qT,d.me,d.BC,d.cb,d.YS,d.j4,d.JD,B.h,s.N],styles:[".one-dark-theme[_nghost-%COMP%]   .auth-area[_ngcontent-%COMP%]{background-image:url(/assets/bg-dark-theme.svg)}.one-dark-theme[_nghost-%COMP%]   .auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]{background-color:#101414}.one-dark-theme[_nghost-%COMP%]   .auth-area[_ngcontent-%COMP%]   .login-welcome-text[_ngcontent-%COMP%]{color:#bec9c8}.one-dark-theme[_nghost-%COMP%]   .auth-area[_ngcontent-%COMP%]   .forget-psw[_ngcontent-%COMP%]{color:#4cdada}.one-dark-theme[_nghost-%COMP%]   .auth-area[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]{background-image:url(/assets/bg-light-theme.svg)}[_nghost-%COMP%]   .login-form-block[_ngcontent-%COMP%]{background-color:#f7faf9}[_nghost-%COMP%]   .login-welcome-text[_ngcontent-%COMP%]{color:#3f4948}[_nghost-%COMP%]   .forget-psw[_ngcontent-%COMP%]{color:#006a6a}[_nghost-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]{display:block;width:100%;height:100%;background-repeat:no-repeat;background-size:cover}.mat-body-2[_ngcontent-%COMP%]{letter-spacing:.25px;line-height:1.43}.auth-area[_ngcontent-%COMP%]{position:relative;display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center;background-repeat:no-repeat;background-size:cover}.auth-area[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}.auth-area[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{position:absolute;bottom:26px;text-align:center}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;width:450px;padding:40px;border-radius:4px}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]{height:20px;margin-bottom:40px}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]{padding:0;margin:0 0 48px}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .login-welcome-text[_ngcontent-%COMP%]{min-height:16px;margin-bottom:16px}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .info-tip[_ngcontent-%COMP%]{display:block;margin-bottom:16px}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .forget-psw[_ngcontent-%COMP%]{letter-spacing:.1px;text-decoration:none;transition:.2s cubic-bezier(.075,.82,.165,1)}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .forget-psw[_ngcontent-%COMP%]:hover{text-decoration:underline}.auth-area[_ngcontent-%COMP%]   .login-form-block[_ngcontent-%COMP%]   .login-save-btn[_ngcontent-%COMP%]{margin-top:32px}.auth-area[_ngcontent-%COMP%]   .policy-agreement[_ngcontent-%COMP%]{display:flex;padding-bottom:16px;margin-top:8px}.auth-area[_ngcontent-%COMP%]   .policy-agreement-content[_ngcontent-%COMP%]{margin-left:8px;cursor:pointer;line-height:20px}"],changeDetection:0})}return o})();const Q=(o,m,c,n)=>({modelInfo:o,isLoginFail:m,isIdleTimeout:c,isUserLogout:n});function J(o,m){if(1&o&&(e.qex(0),e.nrm(1,"one-ui-login-box",1),e.bVm()),2&o){const c=m.ngrxLet;e.R7$(),e.Y8G("modelInfo",c.modelInfo)("isLoginFail",c.isLoginFail)("isIdleTimeout",c.isIdleTimeout)("isUserLogout",c.isUserLogout)}}const K=[{path:"",component:(()=>{class o{#e=(0,e.WQX)(g.il);modelInfo$=this.#e.select(s.Pu);isLoginFail$=this.#e.select(s.AU);isIdleTimeout$=this.#e.select(s.d0);isUserLogout$=this.#e.select(s.dO);ngOnInit(){this.#e.dispatch(s.j4.loadInitState())}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=e.VBU({type:o,selectors:[["one-ui-auth-page"]],standalone:!0,features:[e.Jv_([{provide:u.Lt,useValue:{scope:"auth-page",alias:"authPage"}}]),e.aNF],decls:1,vars:6,consts:[[4,"ngrxLet"],["oneUiTheme","",3,"modelInfo","isLoginFail","isIdleTimeout","isUserLogout"]],template:function(n,t){1&n&&e.DNE(0,J,2,4,"ng-container",0),2&n&&e.Y8G("ngrxLet",e.ziG(1,Q,t.modelInfo$,t.isLoginFail$,t.isIdleTimeout$,t.isUserLogout$))},dependencies:[k.MD,H,I.Nj,s.rE],styles:["[_nghost-%COMP%]{width:100%;height:100%}"],changeDetection:0})}return o})()}]}}]);