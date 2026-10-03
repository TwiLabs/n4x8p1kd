import{d as a,S as r,p as c}from"./values.DyBaLDqN.js";const l={ab:e=>{const o=window.open();if(!o)return;window.location.replace(e);const t=o.document.createElement("iframe");o.document.body.setAttribute("style","margin: 0; height: 100vh; width: 100%;"),t.setAttribute("style","border: none; width: 100%; height: 100%; margin: 0;"),t.src=window.location.href,o.document.body.appendChild(t)},blob:e=>{const o=window.open();if(!o)return;window.location.replace(e);const t=`
        <!DOCTYPE html>
        <html>
            <head>
                <style type="text/css">
                    body, html {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                        overflow: hidden;
                    }
                </style>
            </head>
            <body>
                <iframe style="border: none; width: 100%; height: 100%;" src="${window.location.href}"></iframe>
            </body>
        </html>
    `,s=new Blob([t],{type:"text/html"}),i=URL.createObjectURL(s);o.location.href=i},cloak:e=>{const o=document.getElementById("favicon"),t=(s,i)=>{document.title=s,o.href=i};switch(e){case"google":{t("Google","/cloaks/google.png");break}case"wikipedia":{t("Wikipedia","/cloaks/wikipedia.ico");break}case"canvas":{t("Dashboard","/cloaks/canvas.ico");break}case"classroom":{t("Home","/cloaks/classroom.png");break}case"powerschool":{t("PowerSchool","/cloaks/ps.ico");break}case"reset":a.setVal(r.tab.cloak,"default"),window.location.reload();default:return}}},n={searchEngine:e=>{a.setVal(r.proxy.searchEngine,e)},wisp:e=>{a.setVal(r.proxy.wispServer,e)},transport:async e=>{a.setVal(r.proxy.transport.key,e)}};async function*d(){yield n.searchEngine(a.getVal(r.proxy.searchEngine)?a.getVal(r.proxy.searchEngine):"ddg"),yield n.wisp(c(a.getVal(r.proxy.wispServer))),yield n.transport(a.getVal(r.proxy.transport.key)?a.getVal(r.proxy.transport.key):"kxytj36")}const h={tab:l,proxy:n,initDefaults:d};export{h as S};
