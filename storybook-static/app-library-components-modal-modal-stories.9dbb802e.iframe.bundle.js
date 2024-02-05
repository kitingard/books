"use strict";(self.webpackChunkbooks=self.webpackChunkbooks||[]).push([[640],{"./src/app/library/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let StateService=class StateService{constructor(){this.currentUserSig=(0,core.signal)(void 0),this.modalSig=(0,core.signal)(null),this.pollingSig=(0,core.signal)(null)}};StateService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],StateService);let ModalComponent=class ModalComponent{constructor(){this.stateService=(0,core.inject)(StateService)}closeModal(){this.stateService.modalSig.set(null)}};ModalComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lib-modal",standalone:!0,template:'<div\n  class="fixed top-0 left-0 w-full h-full bg-semitransparent z-10 flex items-center justify-center"\n>\n  <div\n    class="relative w-[300px] h-fit p-6 pt-7 bg-white border border-gray-100 rounded-md"\n  >\n    <button\n      class="absolute top-1 right-2 text-2xl leading-6"\n      (click)="closeModal()"\n    >\n      ✕\n    </button>\n    <ng-content></ng-content>\n  </div>\n</div>\n'})],ModalComponent);const modal_stories={title:"Modal",component:ModalComponent,tags:["autodocs"],render:args=>({props:{...args},template:"<lib-modal><p>This is a template test.</p></lib-modal>"})},Modal={};Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:"{}",...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Modal"]}}]);