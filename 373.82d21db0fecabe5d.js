"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[373],{1445:(w,x,c)=>{c.d(x,{Z:()=>t});const t=(o,m=document.body)=>{let g;return g=(o=>o.match(/^--.*/i))(o)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const o={},m=document.styleSheets;let g="";for(let h=m.length-1;h>-1;h--){const p=m[h].cssRules;for(let _=p.length-1;_>-1;_--)if(".ie-custom-properties"===p[_].selectorText){g=p[_].cssText;break}if(g)break}return g=g.substring(g.lastIndexOf("{")+1,g.lastIndexOf("}")),g.split(";").forEach(h=>{if(h){const p=h.split(": ")[0],_=h.split(": ")[1];p&&_&&(o[`--${p.trim()}`]=_.trim())}}),o})()[o]:window.getComputedStyle(m,null).getPropertyValue(o).replace(/^\s/,""),g}},6352:(w,x,c)=>{c.d(x,{d:()=>b});var n=c(520),s=c(1135),u=c(2340),Z=c(5e3);let b=(()=>{class d{constructor(o){this.http=o,this.enviromentUrl=u.H,this.test="http://localhost:8080/api",this.pacienteConsultar=new s.X({}),this.headers=(new n.WM).set("Authorization",localStorage.getItem("token")||"")}getPacientes(){return this.http.get(`${this.enviromentUrl}/pacientes/consultar`)}getPacienteById(o){return this.http.get(`${this.enviromentUrl}/pacientes/identificacion?id=${o}`,{headers:this.headers})}getPacienteByTipoId(o){return this.http.get(`${this.enviromentUrl}/pacientes/tipoId?tipo_id=${o}`,{headers:this.headers})}createPaciente(o){return this.http.post(`${this.enviromentUrl}/pacientes/crear`,o)}updatePaciente(o,m){return this.http.put(`${this.enviromentUrl}/pacientes/actualizar/${o}`,m)}deletePaciente(o){return this.http.delete(`${this.enviromentUrl}/pacientes/eliminar/${o}`)}}return d.\u0275fac=function(o){return new(o||d)(Z.LFG(n.eN))},d.\u0275prov=Z.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},4876:(w,x,c)=>{c.d(x,{I:()=>b});var n=c(520),s=c(1135),u=c(2340),Z=c(5e3);let b=(()=>{class d{constructor(o){this.http=o,this.enviromentUrl=u.H,this.test="http://localhost:8080/api",this.idPacienteTamizaje=new s.X(null),this.headers=(new n.WM).set("Authorization",localStorage.getItem("token")||"")}getAllTamizajes(){return this.http.get(`${this.enviromentUrl}/tamizajes/todos`,{headers:this.headers})}getTamizajebyUserId(o){return this.http.get(`${this.enviromentUrl}/tamizajes/identificacion?id=${o}`,{headers:this.headers})}getTamizajeByDate(o,m){return this.http.get(`${this.enviromentUrl}/tamizajes/rangoFecha?fecha_inicio=${o}&fecha_fin=${m}`,{headers:this.headers})}getTamizajeByTipoId(o){return this.http.get(`${this.enviromentUrl}/tamizajes/tipoIdentificacion?tipo_id=${o}`,{headers:this.headers})}getDetalleTamizaje(o){return this.http.get(`${this.enviromentUrl}/tamizajes/id?id_tam=${o}`,{headers:this.headers})}getUltimoIdTamizajeXIdPaciente(o){return this.http.get(`${this.enviromentUrl}/tamizajes/ultimo?id=${o}`,{headers:this.headers})}getUltimoTamizaje(o){return this.http.get(`${this.enviromentUrl}/tamizajes/id?id_tam=${o}`,{headers:this.headers})}createTamizaje(o){return this.http.post(`${this.enviromentUrl}/tamizajes/crear`,o,{headers:this.headers})}eliminarTamizajeById(o){return this.http.delete(`${this.enviromentUrl}/tamizajes/eliminarbyid?id=${o}`,{headers:this.headers})}}return d.\u0275fac=function(o){return new(o||d)(Z.LFG(n.eN))},d.\u0275prov=Z.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},8747:(w,x,c)=>{c.d(x,{O:()=>h});var n=c(5e3),s=c(6352),u=c(4876),Z=c(9808),b=c(7669),d=c(1728),t=c(5093);function o(p,_){if(1&p&&(n.O4$(),n.kcU(),n.ynx(0),n.TgZ(1,"c-chart",5,6),n._uU(3),n.qZA(),n.BQk()),2&p){const r=n.MAs(2),f=n.oxw().$implicit,v=n.oxw(2);n.xp6(1),n.Q6J("data",f.data)("options",v.chartOptions),n.xp6(2),n.hij(" ",r.id," ")}}function m(p,_){if(1&p&&(n.TgZ(0,"c-col",2)(1,"c-widget-stat-d",3),n.O4$(),n._UZ(2,"svg",4),n.YNc(3,o,4,3,"ng-container",0),n.qZA()()),2&p){const r=_.$implicit,f=n.oxw(2);let v,A;n.xp6(1),n.Akn(null!==(v=r.capBg)&&void 0!==v?v:null),n.Q6J("color",null!==(A=r.color)&&void 0!==A?A:"")("values",r.values),n.xp6(1),n.Q6J("name",r.icon),n.xp6(1),n.Q6J("ngIf",f.withCharts)}}function g(p,_){if(1&p&&(n.TgZ(0,"c-row"),n.YNc(1,m,4,6,"c-col",1),n.qZA()),2&p){const r=n.oxw();n.xp6(1),n.Q6J("ngForOf",r.brandData)}}let h=(()=>{class p{constructor(r,f,v){this.changeDetectorRef=r,this.pacienteSvc=f,this.tamizajeSvc=v,this.totalPacientes=0,this.totalTamizajes=0,this.tamizajesSinRiesgo=[],this.tamizajesBajoRiesgo=[],this.tamizajesAltoRiesgo=[],this.chartOptions={},this.labels=[],this.datasets={},this.colors={},this.brandData=[],this.obtenerTotalPacientes()}ngOnInit(){}obtenerTotalPacientes(){this.pacienteSvc.getPacientes().subscribe(r=>{r.objetoRespuesta.length&&(this.totalPacientes=r.objetoRespuesta.length,this.obtenerTotalTamizajes(this.totalPacientes))})}obtenerTotalTamizajes(r){this.tamizajeSvc.getAllTamizajes().subscribe(f=>{f.objetoRespuesta.length&&this.llenarGraficas(r,f)})}llenarGraficas(r,f){this.totalTamizajes=f.objetoRespuesta.length,this.tamizajesSinRiesgo=f.objetoRespuesta.filter(v=>1===v.tam_niv_id||18===v.tam_niv_id),this.tamizajesBajoRiesgo=f.objetoRespuesta.filter(v=>2===v.tam_niv_id),this.tamizajesAltoRiesgo=f.objetoRespuesta.filter(v=>3===v.tam_niv_id),this.chartOptions={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.labels=["January","February","March","April","May","June","July"],this.datasets={borderWidth:2,fill:!0},this.colors={backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"},this.brandData=[{icon:"cilPeople",values:[{title:"Pacientes",value:""},{title:"",value:r}],capBg:{"--cui-card-cap-bg":"#3b5998"},labels:[...this.labels],data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[65,59,84,84,51,55,40],label:"Facebook"}),this.colors)]}},{icon:"cil-puzzle",values:[{title:"Tamizajes",value:""},{title:"",value:this.totalTamizajes}],capBg:{"--cui-card-cap-bg":"#00aced"},data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[1,13,9,17,34,41,38],label:"Twitter"}),this.colors)]}},{icon:"cil-bell",values:[{title:"Sin Riesgo",value:""},{title:"",value:this.tamizajesSinRiesgo.length}],color:"success",data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[78,81,80,45,34,12,40],label:"LinkedIn"}),this.colors)]}},{icon:"cil-bell",values:[{title:"Bajo Riesgo",value:""},{title:"",value:this.tamizajesBajoRiesgo.length}],color:"warning",labels:[...this.labels],data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[60,59,84,84,51,55,40],label:"Facebook"}),this.colors)]}},{icon:"cil-bell",values:[{title:"Alto Riesgo",value:""},{title:"",value:this.tamizajesAltoRiesgo.length}],color:"danger",data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[0,23,56,22,97,23,64],label:"Events"}),this.colors)]}}]}capStyle(r){return r?{"--cui-card-cap-bg":r}:{}}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return p.\u0275fac=function(r){return new(r||p)(n.Y36(n.sBO),n.Y36(s.d),n.Y36(u.I))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-widgets-brand"]],inputs:{withCharts:"withCharts"},decls:1,vars:1,consts:[[4,"ngIf"],["sm","6","xl","3",4,"ngFor","ngForOf"],["sm","6","xl","3"],[1,"mb-4",3,"color","values"],["cIcon","","height","52",1,"my-4","text-white",3,"name"],["type","line",1,"position-absolute","w-100","h-100",3,"data","options"],["chart","cChart"]],template:function(r,f){1&r&&n.YNc(0,g,2,1,"c-row",0),2&r&&n.Q6J("ngIf",0!==f.totalPacientes)},directives:[Z.O5,b.iok,Z.sg,b.Yp0,b.efQ,d.ar,t.d],styles:[".col-xl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:20%;padding-right:5px;padding-left:5px}"]}),p})()},4373:(w,x,c)=>{c.r(x),c.d(x,{WidgetsModule:()=>Yt});var n=c(9808),s=c(7669),u=c(1728),Z=c(5093),b=c(7642),d=c(1402),t=c(5e3),o=c(2592),m=c(1445),g=c(6352),h=c(5948),p=c(4876),_=c(7341);function r(e,i){if(1&e&&(t._uU(0),t.TgZ(1,"span",8),t._uU(2,"\n                    ("),t.O4$(),t._UZ(3,"svg",9),t._uU(4,")\n                "),t.qZA(),t._uU(5,"\n            ")),2&e){const a=t.oxw();t.hij("\n                ",a.totalPacientes,"\n\n                ")}}function f(e,i){1&e&&(t.TgZ(0,"c-dropdown",10)(1,"button",11),t.O4$(),t._UZ(2,"svg",12),t.qZA(),t.kcU(),t.TgZ(3,"ul",13)(4,"li")(5,"a",14),t._uU(6,"Action"),t.qZA()(),t.TgZ(7,"li")(8,"a",14),t._uU(9,"Another action"),t.qZA()(),t.TgZ(10,"li")(11,"a",14),t._uU(12,"Something else here"),t.qZA()(),t.TgZ(13,"li"),t._UZ(14,"hr",15),t.qZA(),t.TgZ(15,"li")(16,"button",16),t._uU(17,"Separated link"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("caret",!1))}function v(e,i){if(1&e&&t._UZ(0,"c-chart",17),2&e){const a=t.oxw();t.Q6J("data",a.data[0])("options",a.options[0])}}function A(e,i){if(1&e&&(t._uU(0,"\n                "),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._uU(3,"\n                "),t.TgZ(4,"span",8),t._uU(5,"\n                    ("),t.O4$(),t._UZ(6,"svg",9),t._uU(7,")\n                "),t.qZA(),t._uU(8,"\n            ")),2&e){const a=t.oxw();t.xp6(2),t.Oqu(a.totalUsuarios)}}function y(e,i){1&e&&(t.TgZ(0,"c-dropdown",10)(1,"button",11),t.O4$(),t._UZ(2,"svg",12),t.qZA(),t.kcU(),t.TgZ(3,"ul",13)(4,"li")(5,"a",14),t._uU(6,"Action"),t.qZA()(),t.TgZ(7,"li")(8,"a",14),t._uU(9,"Another action"),t.qZA()(),t.TgZ(10,"li")(11,"a",14),t._uU(12,"Something else here"),t.qZA()(),t.TgZ(13,"li")(14,"a",18),t._uU(15,"Disabled"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("caret",!1),t.xp6(13),t.Q6J("disabled",!0))}function J(e,i){if(1&e&&t._UZ(0,"c-chart",17),2&e){const a=t.oxw();t.Q6J("data",a.data[1])("options",a.options[1])}}function D(e,i){if(1&e&&(t._uU(0,"\n                "),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._uU(3,"\n                "),t.TgZ(4,"span",8),t._uU(5,"\n                    ("),t.O4$(),t._UZ(6,"svg",9),t._uU(7,")\n                "),t.qZA(),t._uU(8,"\n            ")),2&e){const a=t.oxw();t.xp6(2),t.Oqu(a.totalTamizajes)}}function Q(e,i){1&e&&(t.TgZ(0,"c-dropdown",10)(1,"button",11),t.O4$(),t._UZ(2,"svg",12),t.qZA(),t.kcU(),t.TgZ(3,"ul",13)(4,"li")(5,"a",14),t._uU(6,"Action"),t.qZA()(),t.TgZ(7,"li")(8,"a",14),t._uU(9,"Another action"),t.qZA()(),t.TgZ(10,"li")(11,"a",14),t._uU(12,"Something else here"),t.qZA()(),t.TgZ(13,"li")(14,"a",18),t._uU(15,"Disabled"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("caret",!1),t.xp6(13),t.Q6J("disabled",!0))}function j(e,i){if(1&e&&t._UZ(0,"c-chart",19),2&e){const a=t.oxw();t.Q6J("data",a.data[2])("options",a.options[2])}}function I(e,i){if(1&e&&(t._uU(0,"\n                "),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._uU(3,"\n                "),t.TgZ(4,"span",8),t._uU(5,"\n                    ("),t.O4$(),t._UZ(6,"svg",20),t._uU(7,")\n                "),t.qZA(),t._uU(8,"\n            ")),2&e){const a=t.oxw();t.xp6(2),t.Oqu(a.totalRiesgos)}}function $(e,i){1&e&&(t.TgZ(0,"c-dropdown",10)(1,"button",11),t.O4$(),t._UZ(2,"svg",12),t.qZA(),t.kcU(),t.TgZ(3,"ul",13)(4,"li")(5,"a",14),t._uU(6,"Action"),t.qZA()(),t.TgZ(7,"li")(8,"a",14),t._uU(9,"Another action"),t.qZA()(),t.TgZ(10,"li")(11,"a",14),t._uU(12,"Something else here"),t.qZA()(),t.TgZ(13,"li")(14,"a",18),t._uU(15,"Disabled"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("caret",!1),t.xp6(13),t.Q6J("disabled",!0))}function P(e,i){if(1&e&&t._UZ(0,"c-chart",21),2&e){const a=t.oxw();t.Q6J("data",a.data[3])("options",a.options[3])}}let R=(()=>{class e{constructor(a,l,C,T,U){this.changeDetectorRef=a,this.pacienteSvc=l,this.usuarioSvc=C,this.tamizajeSvc=T,this.riesgoSvc=U,this.totalPacientes=0,this.totalUsuarios=0,this.totalTamizajes=0,this.totalRiesgos=0,this.data=[],this.options=[],this.labels=["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],this.datasets=[[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,m.Z)("--cui-primary"),pointHoverBorderColor:(0,m.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}],[{label:"My Second dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,m.Z)("--cui-info"),pointHoverBorderColor:(0,m.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}],[{label:"My Third dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,m.Z)("--cui-warning"),pointHoverBorderColor:(0,m.Z)("--cui-warning"),data:[78,81,80,45,34,12,40],fill:!0}],[{label:"My Fourth dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.7}]],this.optionsDefault={plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}ngOnInit(){this.obtenerTotalPacientes(),this.obtenerTotalUsuarios(),this.obtenerTotalTamizajes(),this.obtenerTotalRiesgos(),this.setData()}obtenerTotalPacientes(){this.pacienteSvc.getPacientes().subscribe(a=>{a.objetoRespuesta.length&&(this.totalPacientes=a.objetoRespuesta.length)})}obtenerTotalUsuarios(){this.usuarioSvc.getUsuarios().subscribe(a=>{a.objetoRespuesta.length&&(this.totalUsuarios=a.objetoRespuesta.length)})}obtenerTotalTamizajes(){this.tamizajeSvc.getAllTamizajes().subscribe(a=>{a.objetoRespuesta.length&&(this.totalTamizajes=a.objetoRespuesta.length)})}obtenerTotalRiesgos(){this.riesgoSvc.getNivelesRiesgos().subscribe(a=>{a.objetoRespuesta.length&&(this.totalRiesgos=a.objetoRespuesta.length)})}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}setData(){for(let a=0;a<4;a++)this.data[a]={labels:a<3?this.labels.slice(0,7):this.labels,datasets:this.datasets[a]};this.setOptions()}setOptions(){for(let a=0;a<4;a++){const l=JSON.parse(JSON.stringify(this.optionsDefault));switch(a){case 0:this.options.push(l);break;case 1:l.scales.y.min=-9,l.scales.y.max=39,this.options.push(l);break;case 2:l.scales.x={display:!1},l.scales.y={display:!1},l.elements.line.borderWidth=2,l.elements.point.radius=0,this.options.push(l);break;case 3:l.scales.x.grid={display:!1,drawTicks:!1},l.scales.x.grid={display:!1,drawTicks:!1,drawBorder:!1},l.scales.y.min=void 0,l.scales.y.max=void 0,l.elements={},this.options.push(l)}}}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.sBO),t.Y36(g.d),t.Y36(h.i),t.Y36(p.I),t.Y36(_.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-dropdown"]],decls:21,vars:3,consts:[["sm","6","xl","3"],["color","primary","title","Total Pacientes",1,"mb-4"],["cTemplateId","widgetValueTemplate"],["cTemplateId","widgetActionTemplate"],["cTemplateId","widgetChartTemplate"],["color","info",1,"mb-4",3,"title"],["color","warning",1,"mb-4",3,"title"],["color","danger",1,"mb-4",3,"title"],[1,"fs-6","fw-normal"],["cIcon","","name","cilArrowTop"],["alignment","end","variant","btn-group"],["cButton","","cDropdownToggle","","color","transparent",1,"p-0",3,"caret"],["cIcon","","name","cilOptions",1,"text-high-emphasis-inverse"],["cDropdownMenu",""],["routerLink","./","cDropdownItem",""],["cDropdownDivider",""],["cDropdownItem",""],["height","70","type","line",1,"mt-3","mx-3",3,"data","options"],["routerLink","./","cDropdownItem","",3,"disabled"],["height","70","type","line",1,"mt-3",3,"data","options"],["cIcon","","name","cilArrowBottom"],["height","70","type","bar",1,"mt-3","mx-3",3,"data","options"]],template:function(a,l){1&a&&(t.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-a",1),t.YNc(3,r,6,1,"ng-template",2),t.YNc(4,f,18,1,"ng-template",3),t.YNc(5,v,1,2,"ng-template",4),t.qZA()(),t.TgZ(6,"c-col",0)(7,"c-widget-stat-a",5),t.YNc(8,A,9,1,"ng-template",2),t.YNc(9,y,16,2,"ng-template",3),t.YNc(10,J,1,2,"ng-template",4),t.qZA()(),t.TgZ(11,"c-col",0)(12,"c-widget-stat-a",6),t.YNc(13,D,9,1,"ng-template",2),t.YNc(14,Q,16,2,"ng-template",3),t.YNc(15,j,1,2,"ng-template",4),t.qZA()(),t.TgZ(16,"c-col",0)(17,"c-widget-stat-a",7),t.YNc(18,I,9,1,"ng-template",2),t.YNc(19,$,16,2,"ng-template",3),t.YNc(20,P,1,2,"ng-template",4),t.qZA()()()),2&a&&(t.xp6(7),t.Q6J("title","Usuarios"),t.xp6(5),t.Q6J("title","Tamizajes"),t.xp6(5),t.Q6J("title","Niveles de Riesgo"))},directives:[s.iok,s.Yp0,s.Eqf,s.y1J,u.ar,s.JOL,s.Hq3,s.RUe,s.bQk,d.yS,s.HH4,s.GY_,Z.d],styles:[""]}),e})(),Y=(()=>{class e{constructor(a){this.changeDetectorRef=a,this.datasets=[],this.labels=[],this.data=[],this.barOptions={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.lineOptions={maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.prepareLabels(),this.prepareDatasets(),this.prepareData()}get random(){return Math.floor(61*Math.random()+40)}get randomData(){const a=[];for(let l=0;l<15;l++)a.push(this.random);return a}get baseDatasets(){return[{data:this.randomData,barThickness:"flex",borderColor:"transparent",backgroundColor:"transparent",borderWidth:1}]}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}prepareData(){for(let a=0;a<6;a++)this.data.push({labels:this.labels,datasets:this.datasets[a]})}prepareLabels(){for(let a=0;a<15;a++)this.labels.push(this.getDayName(a))}prepareDatasets(){const a=[{backgroundColor:"danger"},{backgroundColor:"primary"},{backgroundColor:"dark"},{borderColor:"danger",borderWidth:2},{borderColor:"success",borderWidth:2},{borderColor:"info",borderWidth:2}];for(let l=0;l<6;l++)this.datasets.push(this.getDataset(a[l]))}getDataset({backgroundColor:a="transparent",borderColor:l="transparent",borderWidth:C=1}){const T=this.baseDatasets;return T[0].backgroundColor="transparent"!==a?(0,m.Z)(`--cui-${a}`):a,T[0].borderColor="transparent"!==l?(0,m.Z)(`--cui-${l}`):l,T[0].borderWidth=C,T}getDayName(a=0){var l,C,T,U;const O=null!==(U=null!==(T=null!==(C=null!==(l=navigator.language)&&void 0!==l?l:navigator.userLanguage)&&void 0!==C?C:navigator.systemLanguage)&&void 0!==T?T:navigator.browserLanguage)&&void 0!==U?U:"en-US",W=new Date(Date.UTC(2e3,1,0));return W.setDate(W.getDate()+a),W.toLocaleDateString(O,{weekday:"short"})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-e"]],decls:19,vars:24,consts:[["lg","2","md","4"],[1,"mb-4",3,"title","value"],["height","40","width","80",1,"mx-auto",3,"data","options"],["height","40","type","line","width","80",1,"mx-auto",3,"data","options"]],template:function(a,l){1&a&&(t.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-e",1),t._UZ(3,"c-chart",2),t.qZA()(),t.TgZ(4,"c-col",0)(5,"c-widget-stat-e",1),t._UZ(6,"c-chart",2),t.qZA()(),t.TgZ(7,"c-col",0)(8,"c-widget-stat-e",1),t._UZ(9,"c-chart",2),t.qZA()(),t.TgZ(10,"c-col",0)(11,"c-widget-stat-e",1),t._UZ(12,"c-chart",3),t.qZA()(),t.TgZ(13,"c-col",0)(14,"c-widget-stat-e",1),t._UZ(15,"c-chart",3),t.qZA()(),t.TgZ(16,"c-col",0)(17,"c-widget-stat-e",1),t._UZ(18,"c-chart",3),t.qZA()()()),2&a&&(t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",l.data[0])("options",l.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",l.data[1])("options",l.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",l.data[2])("options",l.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",l.data[3])("options",l.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",l.data[4])("options",l.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",l.data[5])("options",l.lineOptions))},directives:[s.iok,s.Yp0,s.gDu,Z.d],styles:[""]}),e})();var N=c(8747);function q(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function M(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function E(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function B(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",61))}function S(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function z(e,i){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function L(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function k(e,i){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function F(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function K(e,i){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function V(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",61))}function H(e,i){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function X(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function G(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function tt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function et(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",61))}function at(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function it(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function st(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function nt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ot(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function lt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ct(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function rt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function pt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function gt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function dt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function mt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function _t(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function ut(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ht(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function ft(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function vt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function Zt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function bt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function Tt(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function xt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",71))}function Ct(e,i){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",72),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function Ut(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function wt(e,i){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function At(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function Ot(e,i){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function Wt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function yt(e,i){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function Jt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function Dt(e,i){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function Qt(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function jt(e,i){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function It(e,i){1&e&&(t.O4$(),t._UZ(0,"svg",71))}function $t(e,i){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}const Pt=[{path:"",component:(()=>{class e{constructor(a){this.changeDetectorRef=a}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets"]],decls:167,vars:50,consts:[[1,"mb-4"],["href","components/"],["href","components/widgets/#cwidgetstatsb"],["lg","3","md","6","xs","12"],["text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["thin","",1,"my-2"],["color","success",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["color","info",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["color","warning",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["color","primary",3,"value"],["color","success","inverse","","text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["widgetStatB1inv","cWidgetStatB"],["thin","",1,"my-2",3,"white"],[3,"value"],["color","info","inverse","","text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["widgetStatB2inv","cWidgetStatB"],["color","warning","inverse","","text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["widgetStatB3inv","cWidgetStatB"],["color","primary","inverse","","text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["widgetStatB4inv","cWidgetStatB"],["href","components/widgets/#cwidgetstatse"],["href","components/widgets/#cwidgetstatsf"],["lg","3","sm","6","xs","12"],["color","primary","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetIconTemplate"],["color","info","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetFooterTemplate"],["color","primary","value","$1,999.50",1,"mb-3",3,"title"],["color","info","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","value","$1,999.50",1,"mb-3",3,"title"],["href","components/widgets/#cwidgetstatsd"],[3,"withCharts"],["href","components/widgets/#cwidgetstatsc"],["value","87,500",3,"title"],["cTemplateId","widgetProgressTemplate"],["value","385",3,"title"],["value","1238",3,"title"],["value","28%",3,"title"],["value","5:34:11",3,"title"],["md","2","sm","6"],["value","87,500",1,"mb-4",3,"title"],["value","385",1,"mb-4",3,"title"],["value","1238",1,"mb-4",3,"title"],["value","28%",1,"mb-4",3,"title"],["value","5:34:11",1,"mb-4",3,"title"],["value","972",1,"mb-4",3,"title"],["color","info","inverse","","value","87,500",1,"mb-4",3,"title"],["color","success","inverse","","value","385",1,"mb-4",3,"title"],["color","warning","inverse","","value","1238",1,"mb-4",3,"title"],["color","primary","inverse","","value","28%",1,"mb-4",3,"title"],["color","danger","inverse","","value","5:34:11",1,"mb-4",3,"title"],["color","dark","inverse","","value","972",1,"mb-4",3,"title"],["cIcon","","name","cilSettings","size","xl","width","24"],["cIcon","","name","cilUser","size","xl","width","24"],["cIcon","","name","cilMoon","size","xl","width","24"],["cIcon","","name","cilBell","size","xl","width","24"],["href","https://coreui.io/","rel","noopener norefferer","target","_blank",1,"font-weight-bold","font-xs","text-medium-emphasis"],["cIcon","","name","cilArrowRight","width","16",1,"float-end"],["cIcon","","height","36","name","cilPeople"],["thin","",1,"mt-3","mb-0"],["cIcon","","height","36","name","cilUserFollow"],["cIcon","","height","36","name","cilBasket"],["cIcon","","height","36","name","cilChartPie"],["cIcon","","height","36","name","cilSpeedometer"],["color","danger",3,"value"],["cIcon","","height","36","name","cilSpeech"],["color","dark",3,"value"],["thin","","white","",1,"mt-3","mb-0"]],template:function(a,l){if(1&a&&(t.TgZ(0,"c-card",0)(1,"c-card-header"),t._uU(2,"Widgets"),t.qZA(),t.TgZ(3,"c-card-body")(4,"app-docs-example",1),t._UZ(5,"app-widgets-dropdown"),t.qZA(),t.TgZ(6,"app-docs-example",2)(7,"c-row")(8,"c-col",3)(9,"c-widget-stat-b",4)(10,"c-progress",5),t._UZ(11,"c-progress-bar",6),t.qZA()()(),t.TgZ(12,"c-col",3)(13,"c-widget-stat-b",7)(14,"c-progress",5),t._UZ(15,"c-progress-bar",8),t.qZA()()(),t.TgZ(16,"c-col",3)(17,"c-widget-stat-b",9)(18,"c-progress",5),t._UZ(19,"c-progress-bar",10),t.qZA()()(),t.TgZ(20,"c-col",3)(21,"c-widget-stat-b",11)(22,"c-progress",5),t._UZ(23,"c-progress-bar",12),t.qZA()()()()(),t.TgZ(24,"app-docs-example",2)(25,"c-row")(26,"c-col",3)(27,"c-widget-stat-b",13,14)(29,"c-progress",15),t._UZ(30,"c-progress-bar",16),t.qZA()()(),t.TgZ(31,"c-col",3)(32,"c-widget-stat-b",17,18)(34,"c-progress",15),t._UZ(35,"c-progress-bar",16),t.qZA()()(),t.TgZ(36,"c-col",3)(37,"c-widget-stat-b",19,20)(39,"c-progress",15),t._UZ(40,"c-progress-bar",16),t.qZA()()(),t.TgZ(41,"c-col",3)(42,"c-widget-stat-b",21,22)(44,"c-progress",15),t._UZ(45,"c-progress-bar",16),t.qZA()()()()(),t.TgZ(46,"app-docs-example",23),t._UZ(47,"app-widgets-e"),t.qZA(),t.TgZ(48,"app-docs-example",24)(49,"c-row")(50,"c-col",25)(51,"c-widget-stat-f",26),t.YNc(52,q,1,0,"ng-template",27),t.qZA()(),t.TgZ(53,"c-col",25)(54,"c-widget-stat-f",28),t.YNc(55,M,1,0,"ng-template",27),t.qZA()(),t.TgZ(56,"c-col",25)(57,"c-widget-stat-f",29),t.YNc(58,E,1,0,"ng-template",27),t.qZA()(),t.TgZ(59,"c-col",25)(60,"c-widget-stat-f",30),t.YNc(61,B,1,0,"ng-template",27),t.qZA()()()(),t.TgZ(62,"app-docs-example",24)(63,"c-row")(64,"c-col",25)(65,"c-widget-stat-f",26),t.YNc(66,S,1,0,"ng-template",27),t.YNc(67,z,3,0,"ng-template",31),t.qZA()(),t.TgZ(68,"c-col",25)(69,"c-widget-stat-f",28),t.YNc(70,L,1,0,"ng-template",27),t.YNc(71,k,3,0,"ng-template",31),t.qZA()(),t.TgZ(72,"c-col",25)(73,"c-widget-stat-f",29),t.YNc(74,F,1,0,"ng-template",27),t.YNc(75,K,3,0,"ng-template",31),t.qZA()(),t.TgZ(76,"c-col",25)(77,"c-widget-stat-f",30),t.YNc(78,V,1,0,"ng-template",27),t.YNc(79,H,3,0,"ng-template",31),t.qZA()()()(),t.TgZ(80,"app-docs-example",24)(81,"c-row")(82,"c-col",25)(83,"c-widget-stat-f",32),t.YNc(84,X,1,0,"ng-template",27),t.qZA()(),t.TgZ(85,"c-col",25)(86,"c-widget-stat-f",33),t.YNc(87,G,1,0,"ng-template",27),t.qZA()(),t.TgZ(88,"c-col",25)(89,"c-widget-stat-f",34),t.YNc(90,tt,1,0,"ng-template",27),t.qZA()(),t.TgZ(91,"c-col",25)(92,"c-widget-stat-f",35),t.YNc(93,et,1,0,"ng-template",27),t.qZA()()()(),t.TgZ(94,"app-docs-example",36),t._UZ(95,"app-widgets-brand"),t.qZA(),t.TgZ(96,"app-docs-example",36),t._UZ(97,"app-widgets-brand",37),t.qZA(),t.TgZ(98,"app-docs-example",38)(99,"c-card-group",0)(100,"c-widget-stat-c",39),t.YNc(101,at,1,0,"ng-template",27),t.YNc(102,it,2,1,"ng-template",40),t.qZA(),t.TgZ(103,"c-widget-stat-c",41),t.YNc(104,st,1,0,"ng-template",27),t.YNc(105,nt,2,1,"ng-template",40),t.qZA(),t.TgZ(106,"c-widget-stat-c",42),t.YNc(107,ot,1,0,"ng-template",27),t.YNc(108,lt,2,1,"ng-template",40),t.qZA(),t.TgZ(109,"c-widget-stat-c",43),t.YNc(110,ct,1,0,"ng-template",27),t.YNc(111,rt,2,1,"ng-template",40),t.qZA(),t.TgZ(112,"c-widget-stat-c",44),t.YNc(113,pt,1,0,"ng-template",27),t.YNc(114,gt,2,1,"ng-template",40),t.qZA()()(),t.TgZ(115,"app-docs-example",38)(116,"c-row")(117,"c-col",45)(118,"c-widget-stat-c",46),t.YNc(119,dt,1,0,"ng-template",27),t.YNc(120,mt,2,1,"ng-template",40),t.qZA()(),t.TgZ(121,"c-col",45)(122,"c-widget-stat-c",47),t.YNc(123,_t,1,0,"ng-template",27),t.YNc(124,ut,2,1,"ng-template",40),t.qZA()(),t.TgZ(125,"c-col",45)(126,"c-widget-stat-c",48),t.YNc(127,ht,1,0,"ng-template",27),t.YNc(128,ft,2,1,"ng-template",40),t.qZA()(),t.TgZ(129,"c-col",45)(130,"c-widget-stat-c",49),t.YNc(131,vt,1,0,"ng-template",27),t.YNc(132,Zt,2,1,"ng-template",40),t.qZA()(),t.TgZ(133,"c-col",45)(134,"c-widget-stat-c",50),t.YNc(135,bt,1,0,"ng-template",27),t.YNc(136,Tt,2,1,"ng-template",40),t.qZA()(),t.TgZ(137,"c-col",45)(138,"c-widget-stat-c",51),t.YNc(139,xt,1,0,"ng-template",27),t.YNc(140,Ct,2,1,"ng-template",40),t.qZA()()()(),t.TgZ(141,"app-docs-example",38)(142,"c-row")(143,"c-col",45)(144,"c-widget-stat-c",52),t.YNc(145,Ut,1,0,"ng-template",27),t.YNc(146,wt,2,1,"ng-template",40),t.qZA()(),t.TgZ(147,"c-col",45)(148,"c-widget-stat-c",53),t.YNc(149,At,1,0,"ng-template",27),t.YNc(150,Ot,2,1,"ng-template",40),t.qZA()(),t.TgZ(151,"c-col",45)(152,"c-widget-stat-c",54),t.YNc(153,Wt,1,0,"ng-template",27),t.YNc(154,yt,2,1,"ng-template",40),t.qZA()(),t.TgZ(155,"c-col",45)(156,"c-widget-stat-c",55),t.YNc(157,Jt,1,0,"ng-template",27),t.YNc(158,Dt,2,1,"ng-template",40),t.qZA()(),t.TgZ(159,"c-col",45)(160,"c-widget-stat-c",56),t.YNc(161,Qt,1,0,"ng-template",27),t.YNc(162,jt,2,1,"ng-template",40),t.qZA()(),t.TgZ(163,"c-col",45)(164,"c-widget-stat-c",57),t.YNc(165,It,1,0,"ng-template",27),t.YNc(166,$t,2,1,"ng-template",40),t.qZA()()()()()()),2&a){const C=t.MAs(28),T=t.MAs(33),U=t.MAs(38),O=t.MAs(43);t.xp6(9),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(4),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",C.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",T.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",U.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",O.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("withCharts",!0),t.xp6(3),t.Q6J("title","Visitors"),t.xp6(3),t.Q6J("title","New Clients"),t.xp6(3),t.Q6J("title","Products sold"),t.xp6(3),t.Q6J("title","Returning Visitors"),t.xp6(3),t.Q6J("title","Avg. Time"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments")}},directives:[s.AkF,s.nkx,s.yue,o.U,R,s.iok,s.Yp0,s.Pvw,s.t15,s.RIQ,Y,s.bvG,s.y1J,u.ar,N.O,s.RMw,s.S0f],styles:[""]}),e})(),data:{title:"Widgets"}}];let Rt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(Pt)],d.Bz]}),e})(),Yt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[n.ez,Rt,s.zE6,s.yF7,u.QX,s.kWm,s.m81,s.hJ1,s.dTQ,b.E,s.qek,Z.N]]}),e})()},2592:(w,x,c)=>{c.d(x,{U:()=>t});var n=c(4147),s=c(5e3),u=c(7669),Z=c(1402),b=c(1728);const d=["*"];let t=(()=>{class o{constructor(g){this.changeDetectorRef=g,this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(g){var h,p,_;const r=null===(h=null==n?void 0:n.config)||void 0===h?void 0:h.coreui_library_short_version,f=null!==(_=null===(p=null==n?void 0:n.config)||void 0===p?void 0:p.coreui_library_docs_url)&&void 0!==_?_:"https://coreui.io/angular/";this._href=`${f}${r?`${r}/${g}`:""}`}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}ngAfterViewInit(){this.changeDetectorRef.markForCheck()}}return o.\u0275fac=function(g){return new(g||o)(s.Y36(s.sBO))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-docs-example"]],inputs:{fragment:"fragment",href:"href"},ngContentSelectors:d,decls:14,vars:5,consts:[[1,"example","mb-3"],["variant","tabs"],["routerLink","./","cNavLink","",3,"active","cTabContent","fragment","tabPaneIdx"],["cIcon","","name","cilMediaPlay",1,"me-2"],["cNavLink","","target","_blank",3,"href"],["cIcon","","name","cilCode",1,"me-2"],["cRounded","bottom"],["tabContent","cTabContent"],["aria-labelledby","docs-code-preview","role","tabpanel",1,"p-3","preview"]],template:function(g,h){if(1&g&&(s.F$t(),s.TgZ(0,"div",0)(1,"c-nav",1)(2,"c-nav-item")(3,"a",2),s.O4$(),s._UZ(4,"svg",3),s._uU(5," Preview "),s.qZA()(),s.kcU(),s.TgZ(6,"c-nav-item")(7,"a",4),s.O4$(),s._UZ(8,"svg",5),s._uU(9," Code "),s.qZA()()(),s.kcU(),s.TgZ(10,"c-tab-content",6,7)(12,"c-tab-pane",8),s.Hsn(13),s.qZA()()()),2&g){const p=s.MAs(11);s.xp6(3),s.Q6J("active",!0)("cTabContent",p)("fragment",h.fragment)("tabPaneIdx",0),s.xp6(4),s.Q6J("href",h.href,s.LSH)}},directives:[u.rZi,u.HOP,Z.yS,u.Vh3,u.hL0,b.ar,u.C$2,u.IRg,u.Eug],styles:[""],changeDetection:0}),o})()}}]);