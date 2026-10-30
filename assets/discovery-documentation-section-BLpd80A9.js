import{a as e,n as t,t as n}from"./jsx-runtime-B-hcVAMW.js";import{c as r,f as i,t as a}from"./button-C1EQPDQm.js";import{_ as o,a as s,d as c,f as l,g as u,h as d,n as f,o as p,p as m,r as h,s as g,t as _,y as v}from"./dialog-BzjE80Cq.js";import{t as y}from"./arrow-right-CzLTEdKl.js";import{i as b,r as x,t as S}from"./use-support-DWhsSkUN.js";import{H as C,j as w,t as T,z as E}from"./use-translation-Bqs7DI6I.js";import{t as D}from"./data-table-CkjLC6Jq.js";import{s as O,t as k}from"./card-DGhD_sSg.js";import{t as A}from"./lock-BKpe9LQt.js";import{n as j}from"./discovery-integrations-CwNS1pI5.js";var M=i(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),N=i(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),P=i(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),F=e(t(),1),I={env:`I6_BASE_URL=https://decsuite.exemplo.infinity6.ai
I6_DATASET=minhaloja-prod
I6_INGEST_TOKEN=cole-aqui-o-token-de-ingestao`,node:`import express from "express";
import { gzipSync } from "node:zlib";

const app = express();

app.post("/i6-collect", express.text({ type: "*/*", limit: "16kb" }), async (req, res) => {
  const query = typeof req.body === "string" ? req.body : "";
  if (!query) return res.sendStatus(400);
  const s = gzipSync(query).toString("base64url");
  if (s.length > 1900) return res.sendStatus(413);
  const url = \`\${process.env.I6_BASE_URL}/api/sink/api/ingest/dataset/\${encodeURIComponent(
    process.env.I6_DATASET,
  )}/event/relevance-fashion-event/text.txt?s=\${s}\`;
  try {
    const r = await fetch(url, {
      headers: { Authorization: \`Dataset \${process.env.I6_INGEST_TOKEN}\` },
      signal: AbortSignal.timeout(5000),
    });
    res.sendStatus(r.status);
  } catch {
    res.sendStatus(502);
  }
});`,next:`import { gzipSync } from "node:zlib";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const query = await req.text();
  if (!query || query.length > 16000) return new Response(null, { status: 400 });
  const s = gzipSync(query).toString("base64url");
  if (s.length > 1900) return new Response(null, { status: 413 });
  const url = \`\${process.env.I6_BASE_URL}/api/sink/api/ingest/dataset/\${encodeURIComponent(
    process.env.I6_DATASET!,
  )}/event/relevance-fashion-event/text.txt?s=\${s}\`;
  try {
    const r = await fetch(url, {
      headers: { Authorization: \`Dataset \${process.env.I6_INGEST_TOKEN}\` },
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    return new Response(null, { status: r.status });
  } catch {
    return new Response(null, { status: 502 });
  }
}`,php:`<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$query = file_get_contents('php://input');
if (!$query || strlen($query) > 16000) { http_response_code(400); exit; }
$s = rtrim(strtr(base64_encode(gzencode($query)), '+/', '-_'), '=');
if (strlen($s) > 1900) { http_response_code(413); exit; }
$url = getenv('I6_BASE_URL') . '/api/sink/api/ingest/dataset/'
  . rawurlencode(getenv('I6_DATASET'))
  . '/event/relevance-fashion-event/text.txt?s=' . $s;
$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_HTTPHEADER => ['Authorization: Dataset ' . getenv('I6_INGEST_TOKEN')],
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 5,
]);
curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
curl_close($ch);
http_response_code($code);`,script:`<script src="/js/i6-events.js"><\/script>
<script>
  i6.init({ storeId: "minhaloja" });
<\/script>`,identity:`i6.identify("12345"); // após o login: ID interno do cliente
i6.identify(null);    // após o logout`,markup:`<!-- Link de produto (em qualquer lugar do site) -->
<a href="/produto/vestido-verde" data-i6-sku="64" data-i6-price="189.90">Vestido verde</a>

<!-- Vitrine de recomendação da i6 -->
<section data-i6-display="9b7b4e27-0f28-4e74-9cf6-838d21bd3202">
  <h2>Compre junto</h2>
  <a href="/produto/bolsa-couro" data-i6-sku="18" data-i6-price="249.90">Bolsa de couro</a>
  <a href="/produto/sandalia" data-i6-sku="19" data-i6-price="149.90">Sandália</a>
</section>`,actions:`i6.addToCart("64", 189.90);       // cliente adicionou o produto ao carrinho
i6.removeFromCart("64", 189.90);  // cliente removeu o produto do carrinho
i6.search("vestido verde");       // cliente enviou uma busca
i6.purchase("PEDIDO-1234", [      // pedido confirmado
  { sku: "64", price: 189.90, quantity: 1 },
  { sku: "18", price: 249.90, quantity: 2 },
]);`,debug:`i6.init({ storeId: "minhaloja", debug: true });
localStorage.getItem("i6_queue"); // deve devolver []`,annex:`/*! i6-events.js — eventos de e-commerce para a i6 Relevance.
    Não contém credenciais: envia cada evento para a rota /i6-collect do seu servidor. */
(function () {
  "use strict";

  var cfg = { storeId: null, endpoint: "/i6-collect", attributionDays: 7, debug: false, userId: null };
  var QUEUE_KEY = "i6_queue", ATTR_KEY = "i6_attr", SESSION_KEY = "i6_session";
  var MAX_QUEUE = 200, MAX_AGE_MS = 7 * 864e5, SESSION_MS = 30 * 60e3, PURCHASE_CHUNK = 20;
  var inFlight = {}, failures = 0, retryTimer = null, lastClick = { sku: null, t: 0 };

  function read(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 3) | 8).toString(16);
    });
  }
  function log() {
    if (cfg.debug && window.console) console.log.apply(console, ["[i6]"].concat([].slice.call(arguments)));
  }

  // Sessão: um novo ID depois de 30 minutos sem atividade.
  function sessionId() {
    var s = read(SESSION_KEY, null), now = Date.now();
    if (!s || !s.id || now - s.t > SESSION_MS) s = { id: uuid(), t: now };
    s.t = now;
    write(SESSION_KEY, s);
    return s.id;
  }

  // Atribuição: produto clicado numa vitrine fica ligado ao código dela por N dias.
  function attributions() {
    var all = read(ATTR_KEY, {}), now = Date.now(), valid = {};
    for (var sku in all) if (all[sku] && all[sku].exp > now) valid[sku] = all[sku];
    write(ATTR_KEY, valid);
    return valid;
  }
  function attribute(sku, displayId) {
    var all = attributions();
    all[sku] = { display: displayId, exp: Date.now() + cfg.attributionDays * 864e5 };
    write(ATTR_KEY, all);
  }
  function displayFor(sku) {
    var a = attributions()[sku];
    return a ? a.display : null;
  }

  function buildEvent(action, data, displayId) {
    var ev = { id: uuid(), store_id: cfg.storeId, session_id: sessionId(), created_at: new Date().toISOString() };
    if (cfg.userId) ev.user_id = cfg.userId;
    if (displayId) ev.display_id = displayId;
    ev[action] = data;
    return ev;
  }

  // Mesmo formato do SDK oficial da i6: campos vazios omitidos, objetos em JSON.
  function toQuery(ev) {
    var q = new URLSearchParams();
    Object.keys(ev).forEach(function (k) {
      var v = ev[k];
      if (v === null || v === undefined) return;
      q.append(k, typeof v === "object" ? JSON.stringify(v) : String(v));
    });
    return q.toString();
  }

  // Fila: guarda só o que ainda não foi entregue (até 200 eventos, por até 7 dias).
  function loadQueue() {
    var q = read(QUEUE_KEY, []), now = Date.now();
    if (!Array.isArray(q)) return [];
    return q.filter(function (e) { return e && e.id && now - Date.parse(e.created_at) < MAX_AGE_MS; });
  }
  function removeFromQueue(id) {
    write(QUEUE_KEY, loadQueue().filter(function (e) { return e.id !== id; }));
  }
  function enqueue(ev) {
    if (!cfg.storeId) { console.warn("[i6] chame i6.init({ storeId }) antes de registrar eventos"); return; }
    var q = loadQueue().filter(function (e) { return e.id !== ev.id; });
    q.push(ev);
    if (q.length > MAX_QUEUE) q = q.slice(q.length - MAX_QUEUE);
    write(QUEUE_KEY, q);
    log("evento", ev);
    send(ev);
  }

  function send(ev) {
    if (inFlight[ev.id]) return;
    inFlight[ev.id] = true;
    fetch(cfg.endpoint, { method: "POST", headers: { "Content-Type": "text/plain" }, body: toQuery(ev), keepalive: true })
      .then(function (res) {
        // 2xx: entregue. 400, 413 e 422: evento inválido, reenviar não adianta.
        if (res.ok || res.status === 400 || res.status === 413 || res.status === 422) {
          removeFromQueue(ev.id);
          failures = 0;
          log("entregue", ev.id, res.status);
          if (!retryTimer) setTimeout(flush, 0);
        } else {
          log("vai reenviar", ev.id, res.status);
          scheduleRetry();
        }
      })
      .catch(function () {
        log("sem conexão, vai reenviar", ev.id);
        scheduleRetry();
      })
      .then(function () { delete inFlight[ev.id]; });
  }

  // Reenvio com espera crescente: 2 s, 4 s, 8 s... até 60 s.
  function scheduleRetry() {
    failures++;
    if (retryTimer) return;
    var wait = Math.min(60000, 2000 * Math.pow(2, Math.min(failures - 1, 5)));
    retryTimer = setTimeout(function () { retryTimer = null; flush(); }, wait);
  }
  function flush() {
    loadQueue().filter(function (e) { return !inFlight[e.id]; }).slice(0, 10).forEach(send);
  }

  // Cliques em links de produto (data-i6-sku), com o código da vitrine quando houver.
  document.addEventListener("click", function (e) {
    var link = e.target && e.target.closest ? e.target.closest("[data-i6-sku]") : null;
    if (!link) return;
    var sku = String(link.getAttribute("data-i6-sku"));
    var now = Date.now();
    if (lastClick.sku === sku && now - lastClick.t < 1000) return; // ignora duplo clique
    lastClick = { sku: sku, t: now };
    var price = parseFloat(link.getAttribute("data-i6-price")) || 0;
    var shelf = link.closest("[data-i6-display]");
    var displayId = shelf ? shelf.getAttribute("data-i6-display") : null;
    if (displayId) attribute(sku, displayId);
    enqueue(buildEvent("click", { sku_id: sku, price: price }, displayId));
  }, true);
  window.addEventListener("online", flush);

  window.i6 = {
    init: function (options) {
      options = options || {};
      for (var k in options) if (Object.prototype.hasOwnProperty.call(options, k)) cfg[k] = options[k];
      if (!cfg.storeId) console.warn('[i6] informe o storeId em i6.init({ storeId: "..." })');
      flush(); // reenvia o que ficou pendente de visitas anteriores
    },
    identify: function (userId) {
      cfg.userId = userId ? String(userId) : null;
    },
    addToCart: function (sku, price) {
      sku = String(sku);
      enqueue(buildEvent("add_to_cart", { sku_id: sku, price: Number(price) || 0 }, displayFor(sku)));
    },
    removeFromCart: function (sku, price) {
      sku = String(sku);
      enqueue(buildEvent("remove_from_cart", { sku_id: sku, price: Number(price) || 0 }, displayFor(sku)));
    },
    search: function (text) {
      text = String(text || "").trim().slice(0, 100);
      if (text) enqueue(buildEvent("search", { text: text }, null));
    },
    purchase: function (orderId, items) {
      if (!orderId || !items || !items.length) return;
      orderId = String(orderId);
      // Agrupa os itens pela vitrine de origem (ou orgânico) e soma quantidades do mesmo produto.
      var groups = {};
      items.forEach(function (item) {
        var sku = String(item.sku), key = displayFor(sku) || "";
        var group = groups[key] || (groups[key] = {});
        var line = group[sku] || (group[sku] = { sku_id: sku, unit_price: Number(item.price) || 0, qtty: 0 });
        line.qtty += Number(item.quantity) || 1;
      });
      Object.keys(groups).forEach(function (key) {
        var lines = Object.keys(groups[key]).map(function (sku) { return groups[key][sku]; });
        for (var i = 0; i < lines.length; i += PURCHASE_CHUNK) {
          var ev = buildEvent("purchase", { order_id: orderId, skus: lines.slice(i, i + PURCHASE_CHUNK) }, key || null);
          // ID fixo por pedido: recarregar a página de confirmação não duplica a compra.
          ev.id = "purchase-" + orderId + "-" + (key || "organico") + "-" + i / PURCHASE_CHUNK;
          enqueue(ev);
        }
      });
    },
  };
})();`},L=n(),R=[0,8,7,1,2,3,4,5,6];function z(){let{t:e}=T(),[t,n]=F.useState(0),[r,i]=F.useState(`node`),o=t=>e(`discovery.documentation.${t}`),s=Math.max(0,R.indexOf(t)),u=e=>o(e>=1&&e<=5?`step${e}`:e===0?`before`:e===6?`problems`:e===7?`security`:`annex`),d=(t,n=`javascript`)=>(0,L.jsx)(c,{code:t,language:n,copyLabel:e(`discovery.integrations.quickstart.copy`),copiedLabel:e(`discovery.integrations.quickstart.copied`)}),f=r===`php`?I.php:r===`next`?I.next:I.node;return(0,L.jsxs)(`div`,{className:`min-w-0 space-y-4`,children:[(0,L.jsx)(`nav`,{"aria-label":o(`steps`),className:`overflow-x-auto px-1 pt-2 pb-2`,children:(0,L.jsx)(`ol`,{className:`flex min-w-[48rem] items-start`,children:R.map((e,t)=>{let r=t<s,i=t===s;return(0,L.jsxs)(`li`,{className:`relative flex flex-1 flex-col items-center`,children:[t>0?(0,L.jsx)(`span`,{"aria-hidden":`true`,className:`absolute right-1/2 top-[13px] z-0 h-0.5 w-full ${t<=s?`bg-product-accent`:`bg-muted`}`}):null,(0,L.jsxs)(a,{variant:`ghost`,onClick:()=>n(e),"aria-current":i?`step`:void 0,className:`relative z-10 flex h-auto w-full min-w-0 flex-col items-center justify-start gap-2 whitespace-normal rounded-xl px-1 py-0 text-center hover:bg-transparent sm:h-auto`,children:[(0,L.jsx)(`span`,{"aria-hidden":`true`,className:`flex size-7 min-h-7 min-w-7 shrink-0 items-center justify-center rounded-full border-2 border-card text-xs font-semibold ${i?`bg-product-accent text-product-accent-foreground ring-4 ring-product-accent/20`:r?`bg-product-accent/15 text-product-accent`:`bg-muted text-muted-foreground`}`,children:r?(0,L.jsx)(C,{className:`size-3.5`}):t+1}),(0,L.jsx)(`span`,{className:`block w-full text-balance text-xs leading-tight ${i?`font-semibold text-foreground`:`text-muted-foreground`}`,children:u(e)})]})]},e)})})}),(0,L.jsxs)(`article`,{className:`min-w-0 space-y-4`,"aria-live":`polite`,children:[(0,L.jsx)(`p`,{className:`text-xs uppercase tracking-wide text-muted-foreground`,children:e(`discovery.documentation.stepOf`,{current:s+1,total:R.length})}),(0,L.jsx)(`h3`,{className:`text-base font-semibold`,children:u(t)}),t>=1&&t<=5?(0,L.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:o(`body${t}`)}):null,t===0?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:o(`beforeBody`)}),(0,L.jsx)(D,{label:o(`before`),density:`compact`,columns:[{id:`item`,header:o(`item`),accessor:e=>e.id},{id:`where`,header:o(`where`),accessor:e=>e.where},{id:`use`,header:o(`use`),accessor:e=>e.use},{id:`secret`,header:o(`secret`),accessor:e=>e.secret}],rows:[`I6_BASE_URL`,`I6_DATASET`,`storeId`,`display_id`,`I6_INGEST_TOKEN`].map((t,n)=>({id:t,where:e(n===4?`navigation.sections.trainingTokens`:`navigation.sections.ecommerce`),use:o(n<2||n===4?`server`:`site`),secret:o(n===4?`yes`:`no`)})),getRowId:e=>e.id})]}):null,t===1?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(l,{variant:`warning`,children:[(0,L.jsx)(A,{"aria-hidden":`true`}),(0,L.jsx)(m,{children:o(`tokenWarning`)})]}),d(I.env,`env`),(0,L.jsx)(g,{options:[{value:`node`,label:`Node.js`},{value:`next`,label:`Next.js`},{value:`php`,label:`PHP`}],value:r,onValueChange:i,ariaLabel:e(`discovery.integrations.setup.method`),size:`sm`}),d(f,r===`php`?`php`:`javascript`)]}):null,t===2?(0,L.jsxs)(L.Fragment,{children:[d(I.script,`html`),d(I.identity)]}):null,t===3?d(I.markup,`html`):null,t===4?d(I.actions):null,t===5?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{variant:`warning`,children:(0,L.jsx)(m,{children:o(`sensitive`)})}),d(I.debug)]}):null,t===6?(0,L.jsx)(D,{label:o(`problems`),density:`compact`,columns:[{id:`issue`,header:o(`issue`),accessor:e=>e.issue},{id:`cause`,header:o(`cause`),accessor:e=>e.cause},{id:`fix`,header:o(`fix`),accessor:e=>e.fix}],rows:Array.from({length:9},(e,t)=>({id:String(t),issue:o(`problem${t}.issue`),cause:o(`problem${t}.cause`),fix:o(`problem${t}.fix`)})),getRowId:e=>e.id}):null,t===7?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:o(`securityBody`)}),(0,L.jsx)(l,{variant:`warning`,children:(0,L.jsx)(m,{children:o(`sensitive`)})})]}):null,t===8?d(I.annex):null]}),(0,L.jsxs)(`div`,{className:`flex justify-between gap-3`,children:[(0,L.jsxs)(a,{variant:`outline`,size:`sm`,disabled:s===0,onClick:()=>n(R[Math.max(0,s-1)]??0),children:[(0,L.jsx)(v,{"aria-hidden":`true`}),s>0?u(R[s-1]??0):o(`previous`)]}),(0,L.jsxs)(a,{size:`sm`,disabled:s===R.length-1,onClick:()=>n(R[Math.min(R.length-1,s+1)]??0),children:[s<R.length-1?e(`discovery.documentation.nextStep`,{step:u(R[s+1]??0)}):o(`next`),(0,L.jsx)(y,{"aria-hidden":`true`})]})]})]})}function B({references:e,t,formatDate:n,previewOnly:r=!1}){let[i,o]=F.useState(null),c=F.useMemo(()=>{if(r||!i?.mediaUrl)return null;let e=j.safeParse(i.mediaUrl);return e.success?e.data:null},[i,r]),l=F.useMemo(()=>[{id:`kind`,header:t(`discovery.integrations.docs.columns.type`),accessor:e=>e.kind,width:`9rem`,sortable:!0,render:e=>(0,L.jsx)(E,{variant:`outline`,size:`sm`,children:t(`discovery.integrations.docs.kind.${e.kind}`)})},{id:`label`,header:t(`discovery.integrations.docs.columns.name`),accessor:e=>e.label,sortable:!0,render:e=>(0,L.jsx)(`span`,{className:`text-sm text-foreground`,children:e.label})},{id:`description`,header:t(`discovery.integrations.docs.columns.description`),accessor:e=>e.description??``,hideBelow:`lg`,render:e=>(0,L.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e.description??``})},{id:`updatedAt`,header:t(`discovery.integrations.docs.columns.updated`),accessor:e=>e.updatedAt??``,width:`11rem`,sortable:!0,hideBelow:`md`,render:e=>(0,L.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e.updatedAt?n(e.updatedAt):t(`discovery.integrations.docs.noDate`)})},{id:`access`,header:t(`discovery.integrations.docs.columns.link`),accessor:e=>e.id,align:`end`,width:`10rem`,render:e=>e.kind===`video`?(0,L.jsxs)(a,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>o(e),"aria-label":`${t(`discovery.integrations.docs.watch`)}: ${e.label}`,children:[(0,L.jsx)(N,{"aria-hidden":`true`}),t(`discovery.integrations.docs.watch`)]}):e.url?(0,L.jsx)(a,{asChild:!0,variant:`ghost`,size:`sm`,children:(0,L.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,"aria-label":`${t(`discovery.integrations.docs.open`)}: ${e.label}`,children:[(0,L.jsx)(M,{"aria-hidden":`true`}),t(`discovery.integrations.docs.open`)]})}):null}],[t,n]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(D,{label:t(`discovery.integrations.docs.title`),columns:l,rows:e,getRowId:e=>e.id,density:`compact`}),(0,L.jsx)(_,{open:i!==null,onOpenChange:e=>{e||o(null)},children:(0,L.jsxs)(f,{className:`max-w-3xl`,children:[(0,L.jsxs)(s,{children:[(0,L.jsx)(p,{children:i?.label??``}),i?.description?(0,L.jsx)(h,{children:i.description}):null]}),c?(0,L.jsx)(`video`,{src:c,controls:!0,preload:`metadata`,playsInline:!0,controlsList:`nodownload`,className:`w-full rounded-xl bg-muted`,children:t(`discovery.integrations.docs.videoUnsupported`)},c):(0,L.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:t(r?`discovery.documentation.videoPending`:`discovery.integrations.docs.videoUnsupported`)}),r&&i?.url?(0,L.jsx)(a,{asChild:!0,variant:`link`,size:`sm`,children:(0,L.jsxs)(`a`,{href:i.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,L.jsx)(M,{"aria-hidden":`true`}),t(`discovery.documentation.portal`)]})}):null]})})]})}var V=[{id:`events`,icon:P},{id:`recommendations`,icon:x},{id:`references`,icon:b}];function H(){let{t:e,format:t}=T(),n=S(),[i,s]=F.useState(`events`),c=t=>e(`discovery.documentation.${t}`),l=F.useMemo(()=>o(e),[e]);return(0,L.jsxs)(`section`,{className:`flex min-w-0 flex-col gap-4`,children:[(0,L.jsxs)(`header`,{className:`flex flex-wrap items-baseline gap-x-3 gap-y-1`,children:[(0,L.jsx)(`h2`,{className:`text-xl font-semibold`,children:c(`title`)}),(0,L.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:c(`subtitle`)})]}),(0,L.jsxs)(`div`,{className:`min-w-0`,children:[(0,L.jsx)(`div`,{"aria-label":c(`themes`),className:`relative z-10 mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3`,children:V.map(({id:e,icon:t})=>{let n=i===e;return(0,L.jsxs)(a,{variant:`ghost`,disabled:e===`recommendations`,"aria-pressed":n,"aria-controls":`documentation-detail`,onClick:()=>s(e),className:r(`relative h-auto min-h-40 min-w-0 flex-col items-start justify-start gap-2 whitespace-normal rounded-2xl border border-border/60 bg-background p-4 text-left shadow-ds-sm active:scale-100 motion-reduce:transition-none disabled:opacity-100`,n&&`border-product-accent/30 bg-card hover:bg-card sm:rounded-b-none sm:border-b-0 sm:after:absolute sm:after:inset-x-[-1px] sm:after:top-full sm:after:h-[calc(1rem+1px)] sm:after:border-x sm:after:border-product-accent/30 sm:after:bg-card sm:after:content-['']`),children:[(0,L.jsx)(t,{"aria-hidden":`true`}),(0,L.jsx)(`span`,{className:`text-sm font-semibold`,children:c(e)}),(0,L.jsx)(`span`,{className:`text-xs leading-relaxed text-muted-foreground`,children:c(`${e}Body`)}),(0,L.jsxs)(`span`,{className:`mt-auto flex w-full flex-wrap items-center justify-between gap-2`,children:[(0,L.jsx)(E,{variant:e===`events`?`success`:`muted`,size:`sm`,children:c(e===`events`?`available`:e===`recommendations`?`soon`:`preparing`)}),e===`recommendations`?null:(0,L.jsx)(`span`,{className:r(`text-xs`,n?`text-product-accent`:`text-muted-foreground`),children:c(n?`selected`:`select`)})]})]},e)})}),(0,L.jsxs)(k,{id:`documentation-detail`,className:r(`min-w-0 border-product-accent/30 p-4 sm:p-5`,i===`events`?`sm:rounded-tl-none`:`sm:rounded-tr-none`),children:[(0,L.jsxs)(`p`,{className:`mb-4 text-xs text-muted-foreground`,children:[c(`title`),` › `,(0,L.jsx)(`span`,{className:`font-medium text-foreground`,children:c(i)})]}),i===`events`?(0,L.jsx)(z,{}):i===`references`?(0,L.jsxs)(`div`,{className:`min-w-0 space-y-4`,children:[(0,L.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,L.jsx)(`h3`,{className:`text-base font-semibold`,children:c(`refsTitle`)}),(0,L.jsx)(E,{variant:`muted`,size:`sm`,children:c(`portalPending`)})]}),(0,L.jsx)(B,{references:l,t:e,formatDate:e=>t.date(new Date(e)),previewOnly:!0}),(0,L.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,L.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`builders.infinity6.ai`}),(0,L.jsx)(a,{asChild:!0,variant:`link`,size:`sm`,children:(0,L.jsxs)(`a`,{href:d,target:`_blank`,rel:`noopener noreferrer`,children:[c(`portal`),(0,L.jsx)(M,{"aria-hidden":`true`})]})})]})]}):(0,L.jsx)(w,{title:c(`soon`),description:c(`recommendationsPending`)})]})]}),(0,L.jsxs)(`footer`,{className:`flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-surface-soft px-4 py-3`,children:[(0,L.jsx)(O,{"aria-hidden":`true`,className:`size-4 text-muted-foreground`}),(0,L.jsxs)(`p`,{className:`min-w-0 flex-1 text-sm`,children:[(0,L.jsx)(`span`,{className:`font-medium`,children:c(`help`)}),` `,(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:c(`general`)})]}),(0,L.jsxs)(a,{variant:`outline`,size:`sm`,disabled:!n,onClick:()=>n?.openSupport({context:u}),children:[(0,L.jsx)(O,{"aria-hidden":`true`}),c(`support`)]})]})]})}export{H as DiscoveryDocumentationSection};