"use strict";(self["webpackChunkvue3_project"]=self["webpackChunkvue3_project"]||[]).push([[126],{7114:function(e,l,a){a.r(l),a.d(l,{default:function(){return S}});var t=a(3396);const o={class:"user"};function n(e,l,a,n,i,d){const r=(0,t.up)("page-search"),p=(0,t.up)("page-content"),s=(0,t.up)("page-modal");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t.Wm)(r,{searchFormConfig:e.searchFormConfig,onResetBtnClick:e.handleResetClick,onQueryBtnClick:e.handleQueryClick},null,8,["searchFormConfig","onResetBtnClick","onQueryBtnClick"]),(0,t.Wm)(p,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageName:e.pageName,onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentTableConfig","pageName","onNewBtnClick","onEditBtnClick"]),(0,t.Wm)(s,{defaultInfo:e.defaultInfo,ref:"pageModalRef",pageName:"users",modalConfig:e.modalConfigRef},null,8,["defaultInfo","modalConfig"])])}var i=a(8810),d=a(9651);const r={class:"page-modal"},p={class:"dialog-footer"},s=(0,t.Uk)("取 消"),c=(0,t.Uk)(" 确 定 ");function u(e,l,a,o,n,i){const d=(0,t.up)("hy-form"),u=(0,t.up)("el-button"),f=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(f,{title:"新建用户",modelValue:e.dialogVisible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.dialogVisible=l),width:"30%",center:"","destroy-on-close":""},{footer:(0,t.w5)((()=>[(0,t._)("span",p,[(0,t.Wm)(u,{onClick:l[1]||(l[1]=l=>e.dialogVisible=!1)},{default:(0,t.w5)((()=>[s])),_:1}),(0,t.Wm)(u,{type:"primary",onClick:e.handleConfirmClick},{default:(0,t.w5)((()=>[c])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[(0,t.Wm)(d,(0,t.dG)(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":l[0]||(l[0]=l=>e.formData=l)}),null,16,["modelValue"])])),_:1},8,["modelValue"])])}var f=a(4870),m=a(4913),g=a(5317),h=(0,t.aZ)({components:{HyForm:m.Z},props:{modalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:()=>({})},pageName:{type:String,require:!0}},setup(e){const l=(0,f.iH)(!1),a=(0,f.iH)({});(0,t.YP)((()=>e.defaultInfo),(l=>{for(const t of e.modalConfig.formItems)a.value[`${t.field}`]=l[`${t.field}`]}));const o=(0,g.m)(),n=()=>{l.value=!1,Object.keys(e.defaultInfo).length?(console.log("编辑用户"),o.editPageDataAction({pageName:e.pageName,editData:{...a.value},id:e.defaultInfo.id})):(console.log("新建用户"),o.createPageDataAction({pageName:e.pageName,newData:{...a.value}}))};return{dialogVisible:l,formData:a,handleConfirmClick:n}}}),C=a(89);const b=(0,C.Z)(h,[["render",u]]);var y=b,v=y;const k={labelWidth:"120px",itemStyle:{padding:"10px 40px"},formItems:[{field:"id",type:"input",label:"id",placeholder:"请输入id"},{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"cellphone",type:"input",label:"电话号码",placeholder:"请输入电话号码"},{field:"enable",type:"select",label:"用户状态",placeholder:"请选择用户状态",options:[{title:"启用",value:1},{title:"禁用",value:0}]},{field:"createAt",type:"datepicker",label:"创建时间",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}]},w={title:"用户列表",propList:[{prop:"name",label:"用户名",minWidth:"100"},{prop:"realname",label:"真实姓名",minWidth:"100"},{prop:"cellphone",label:"手机号码",minWidth:"100"},{prop:"enable",label:"状态",minWidth:"100",slotName:"status"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0};function I(){const e=(0,f.iH)(),l=()=>{e.value?.getPageData()},a=l=>{e.value?.getPageData(l)};return[l,a,e]}function N(e,l){const a=(0,f.iH)(),t=(0,f.iH)({}),o=()=>{t.value={},a.value&&(a.value.dialogVisible=!0),e&&e()},n=e=>{t.value={...e},a.value&&(a.value.dialogVisible=!0),l&&l()};return[a,t,o,n]}const D={formItems:[{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"password",type:"password",label:"用户密码",placeholder:"请输入密码",isHidden:!1},{field:"cellphone",type:"input",label:"电话号码",placeholder:"请输入电话号码"},{field:"departmentId",type:"select",label:"选择部门",placeholder:"请选择部门",options:[]},{field:"roleId",type:"select",label:"选择角色",placeholder:"请选择角色",options:[]}],colLayout:{span:24},itemStyle:{}};var W;(function(e){e["ROLE"]="role",e["GOODS"]="goods",e["USERS"]="users",e["MENU"]="menu"})(W||(W={}));var R=a(7627),V=(0,t.aZ)({name:"users",components:{PageSearch:i.Z,PageContent:d.Z,PageModal:v},setup(){const[e,l,a]=I(),o=()=>{const e=D.formItems.find((e=>"password"===e.field));e.isHidden=!1},n=()=>{const e=D.formItems.find((e=>"password"===e.field));e.isHidden=!0},i=(0,R.o)(),d=(0,t.Fl)((()=>{const e=D.formItems.find((e=>"departmentId"===e.field));e.options=i.entireDepartment.map((e=>({title:e.name,value:e.id})));const l=D.formItems.find((e=>"roleId"===e.field));return l.options=i.entireRole.map((e=>({title:e.name,value:e.id}))),D})),[r,p,s,c]=N(o,n);return{searchFormConfig:k,contentTableConfig:w,handleResetClick:e,handleQueryClick:l,pageContentRef:a,pageName:W.USERS,pageModalRef:r,defaultInfo:p,modalConfigRef:d,handleNewData:s,handleEditData:c}}});const P=(0,C.Z)(V,[["render",n]]);var S=P}}]);
//# sourceMappingURL=126.73c4a7f6.js.map