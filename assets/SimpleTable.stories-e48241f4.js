import{j as t}from"./jsx-runtime-ffb262ed.js";import{c as l}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const r=({rows:s})=>t.jsx("div",{className:"flex w-full flex-col",children:s.map((e,m)=>t.jsxs("div",{className:l("flex w-full flex-row p-2 hover:bg-primary/10",{"bg-gray-100":m%2===0}),children:[t.jsx("span",{className:l("font-sans text-sm text-gray-500",{"font-bold":e.bold}),children:e.title}),t.jsx("span",{className:l("ml-auto font-sans text-sm text-gray-500",{"font-bold":e.bold}),children:e.value})]},e.key))});try{r.displayName="SimpleTable",r.__docgenInfo={description:"",displayName:"SimpleTable",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Row[]"}}}}}catch{}const b={title:"Components/Simple Table",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{rows:[{key:"1",title:"Net income",value:"$1.4b",bold:!0},{key:"2",title:"GAV",value:"$4.4b"},{key:"3",title:"EBITDA",value:"$4.0b",bold:!0}]}};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    rows: [{
      key: "1",
      title: "Net income",
      value: "$1.4b",
      bold: true
    }, {
      key: "2",
      title: "GAV",
      value: "$4.4b"
    }, {
      key: "3",
      title: "EBITDA",
      value: "$4.0b",
      bold: true
    }]
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const y=["Primary"];export{a as Primary,y as __namedExportsOrder,b as default};
//# sourceMappingURL=SimpleTable.stories-e48241f4.js.map
