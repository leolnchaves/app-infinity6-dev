import{a as e,n as t,t as n}from"./jsx-runtime-B-hcVAMW.js";import{a as r,c as i,d as a,i as o,n as s,s as c,t as l}from"./types-DH__YGRD.js";import{s as ee}from"./hash-route-WvrCH1Zn.js";import{t as u}from"./use-translation-DuhuwngX.js";import{t as d}from"./use-support-BTe1uLp_.js";import{i as f,t as p,u as m}from"./button-DvJh2Xqs.js";import{J as h,m as te,q as g}from"./dist-C1K5peip.js";import{t as _}from"./arrow-down-9OZaxou0.js";import{t as v}from"./arrow-left-qh-uzAoE.js";import{t as y}from"./arrow-right-B-Dob2K2.js";import{n as ne,t as re}from"./textarea-Bdmi74hK.js";import{_ as ie,a as ae,b as oe,c as se,f as ce,g as le,h as ue,m as de,n as fe,o as pe,p as me,r as he,s as ge,t as _e,y as ve}from"./dialog-CzlUGjM9.js";import{n as ye,r as b}from"./missing-value-fKaWidmo.js";import{n as be}from"./discovery-integrations-C5_knJFg.js";import{t as x}from"./data-table-Bpa_snLl.js";import{t as xe}from"./card-Dwlvbi2y.js";import{n as S,r as C,t as w}from"./alert-CKts1nt8.js";var Se=f(`circle-dashed`,[[`path`,{d:`M10.1 2.182a10 10 0 0 1 3.8 0`,key:`5ilxe3`}],[`path`,{d:`M13.9 21.818a10 10 0 0 1-3.8 0`,key:`11zvb9`}],[`path`,{d:`M17.609 3.721a10 10 0 0 1 2.69 2.7`,key:`1iw5b2`}],[`path`,{d:`M2.182 13.9a10 10 0 0 1 0-3.8`,key:`c0bmvh`}],[`path`,{d:`M20.279 17.609a10 10 0 0 1-2.7 2.69`,key:`1ruxm7`}],[`path`,{d:`M21.818 10.1a10 10 0 0 1 0 3.8`,key:`qkgqxc`}],[`path`,{d:`M3.721 6.391a10 10 0 0 1 2.7-2.69`,key:`1mcia2`}],[`path`,{d:`M6.391 20.279a10 10 0 0 1-2.69-2.7`,key:`1fvljs`}]]),T=f(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),E=f(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),D=f(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),O=e(t(),1),k=n();function A({text:e,className:t}){let n=e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);return(0,k.jsx)(`span`,{className:m(`min-w-0`,t),children:n.map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>2?(0,k.jsx)(`code`,{className:`rounded-md bg-muted px-1 py-0.5 font-mono text-[0.85em] wrap-anywhere`,children:e.slice(1,-1)},t):e.startsWith(`**`)&&e.endsWith(`**`)&&e.length>4?(0,k.jsx)(`strong`,{className:`font-semibold text-foreground`,children:e.slice(2,-2)},t):(0,k.jsx)(O.Fragment,{children:e},t))})}var j=3e3,Ce=/^i6chk1\.[A-Za-z0-9_-]+$/,we=7,M=/^[A-Za-z0-9_-]{1,64}$/,N=c().int().min(0).max(1e5),P=c().int().min(0).max(599).nullable(),F=c().int().min(0).max(6e5),I=[`exibida`,`tempo`,`indisponivel`,`sem-produtos`],Te=[...I,`nenhuma`],Ee=i({v:r(2),script:a().regex(/^[0-9.]{1,10}$/),loja:a().regex(M),dataset:a().regex(M),site:a().max(253).regex(/^[a-z0-9.-]*$/),em:a().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z$/).refine(e=>!Number.isNaN(Date.parse(e.replace(`Z`,`:00Z`)))),caminho:o([`A`,`B`,`C`]),conexao:i({tickets:P,rota:P}).strict(),config:i({debug:s(),timeoutMs:F,sdkUrl:s(),initCedo:s()}).strict(),pagina:i({links:N,linksVitrine:N,vitrines:N,sdk:o([`pronto`,`carregando`,`ausente`,`sem-vitrine`]),csp:N}).strict(),vitrine:i({resultado:o(Te),ms:F.nullable(),registro:P}).strict(),jornada:i({clique:s(),carrinho:s(),busca:s(),compra:s(),cliqueVitrine:s(),compraAtribuida:s(),fila:N,entregas:i({ticket:N,rota:N}).strict()}).strict(),recomendacoes:l(i({ms:F,r:o(I)}).strict()).max(10)}).strict();function De(e){if(typeof e!=`string`||e.length>4096)return null;let t=e.trim();if(!Ce.test(t))return null;let n;try{let e=t.slice(we).replace(/-/g,`+`).replace(/_/g,`/`),r=atob(e.padEnd(e.length+(4-e.length%4)%4,`=`)),i=Uint8Array.from(r,e=>e.charCodeAt(0));n=new TextDecoder(`utf-8`,{fatal:!0}).decode(i)}catch{return null}let r;try{r=JSON.parse(n)}catch{return null}let i=Ee.safeParse(r);return i.success?i.data:null}function Oe(e,t){return e.dataset===t.dataset&&e.loja===t.store}var L=[`version`,`connection`,`debug`,`timeout`,`head`,`csp`,`showcasePage`,`showcaseLinks`,`sdk`,`shown`,`registered`,`queue`],ke=Object.fromEntries(L.map((e,t)=>[e,t]));L.length;var Ae=new Set([`showcaseLinks`,`sdk`,`shown`,`registered`]),R=e=>e!==null&&e>=200&&e<300;function je(e){let{conexao:t,config:n,pagina:r,vitrine:i,jornada:a}=e,o=e.caminho===`A`?R(t.tickets)&&R(t.rota):e.caminho===`B`?R(t.tickets):R(t.rota),s=r.vitrines>0,c={version:e.script===`2.4`,connection:o,debug:!n.debug,timeout:n.timeoutMs===j,head:n.initCedo,csp:r.csp===0,showcasePage:s,showcaseLinks:r.linksVitrine>0,sdk:r.sdk===`pronto`,shown:i.resultado===`exibida`,registered:R(i.registro),queue:a.fila===0};return L.map(e=>{let t=ke[e];return c[e]?{id:e,status:`passed`,practice:t}:!s&&Ae.has(e)?{id:e,status:`dependent`,practice:t,on:`showcasePage`}:e===`registered`&&!c.shown?{id:e,status:`dependent`,practice:t,on:`shown`}:e===`shown`&&i.resultado!==`exibida`?{id:e,status:`failed`,practice:t,reason:i.resultado}:{id:e,status:`failed`,practice:t}})}var Me=[`clique`,`carrinho`,`busca`,`compra`,`cliqueVitrine`,`compraAtribuida`];function Ne(e){return Me.map(t=>({id:t,seen:e.jornada[t]}))}function Pe(e){return new Date(e.em.replace(`Z`,`:00Z`))}var z=(...e)=>e.join(`
`),Fe={env:z(`I6_DATASET=minhaloja-prod`,`I6_TOKEN_ID=cole-aqui-o-id-do-token`,`I6_PRIVATE_KEY=cole-aqui-a-chave-privada`),signedText:z(`POST`,`/api/userz/refresh-dataset`,`(query: vazia)`,`(hash do corpo: vazio)`,`(hash do token: vazio)`,`{validade em segundos, decimal}`,`{nonce em hex minúsculo}`),script:z(`<script src="/js/i6-events.js"><\/script>`,`<script>`,`  i6.init({`,`    storeId: "minhaloja",`,`    dataset: "minhaloja-prod",`,`    baseUrl: "https://decsuite.app.rs.infinity6.ai",`,`    sdkUrl: "/js/i6sdk-web.js", // obrigatório: a sua cópia do SDK`,`  });`,`<\/script>`),identity:z(`i6.identify("12345"); // após o login: ID interno do cliente`,`i6.identify(null);    // após o logout`),productLink:z(`<a href="/produto/vestido-verde" data-i6-sku="64" data-i6-price="189.90">`,`  <img src="vestido-verde.jpg" alt="Vestido verde">`,`  Vestido verde — R$ 189,90`,`</a>`),showcaseMarkup:z(`<section data-i6-display="9b7b4e27-0f28-4e74-9cf6-838d21bd3202">`,`  <h2>Compre junto</h2>`,`  <a href="/produto/bolsa-couro" data-i6-sku="18" data-i6-price="249.90">Bolsa de couro</a>`,`  <a href="/produto/sandalia" data-i6-sku="19" data-i6-price="149.90">Sandália</a>`,`</section>`),actions:z(`i6.addToCart("64", 189.90);      // cliente adicionou o produto ao carrinho`,`i6.removeFromCart("64", 189.90); // cliente removeu o produto do carrinho`,`i6.search("vestido verde");      // cliente enviou uma busca`,`i6.purchase("PEDIDO-1234", [     // pedido confirmado`,`  { sku: "64", price: 189.90, quantity: 1 },`,`  { sku: "18", price: 249.90, quantity: 2 },`,`]);`),sdkTags:z(`<script src="/js/i6sdk-web.js"><\/script>`,`<script src="/js/i6-events.js"><\/script>`),showcaseContainer:z(`<section id="compre-junto" data-i6-display="9b7b4e27-0f28-4e74-9cf6-838d21bd3202">`,`  <!-- esqueleto: blocos cinza do tamanho dos cards -->`,`</section>`),recommend:z(`i6.recommend({`,`  slot: "carrinho",                       // nome livre que identifica esta vitrine`,`  skus: ["64", "18"],                     // entrada: itens do carrinho, ou o produto da página`,`  limit: 8,                               // quantos produtos mostrar, no máximo`,`  isAvailable: (sku) => estoque[sku] > 0, // opcional: pula produtos indisponíveis`,`  render: (skus) => desenharCards(skus),  // desenha AGORA exatamente estes produtos`,`  fallback: () => desenharListaPropria(), // se o i6 Decision Suite não responder a tempo`,`});`),context:`const contexto = i6.context(); // { sessionId, userId, displays: { sku: código da vitrine } }`,serverPurchase:z(`await enviarCompraI6({`,`  baseUrl: "https://decsuite.app.rs.infinity6.ai",`,`  storeId: "minhaloja",`,`  pedido: "PEDIDO-1234",`,`  itens: [{ sku: "64", price: 189.90, quantity: 1 }],`,`  contexto, // o que veio do checkout`,`});`),origin:z(`const ORIGENS = ["https://www.minhaloja.com.br"];`,`if (!ORIGENS.includes(req.get("origin"))) return res.sendStatus(403);`),fallbackTest:z(`i6.recommend({`,`  slot: "teste-fallback",`,`  skus: ["64"],`,`  timeoutMs: 1,`,`  render: () => console.log("❌ não deveria desenhar a recomendação"),`,`  fallback: () => console.log("✅ lista própria desenhada"),`,`});`),checkReport:`copy(await i6.check({ relatorio: true }))`},Ie=`import express from "express";
import { chamarI6, emitirTickets } from "./i6-acesso.mjs";

const app = express();

// Tickets para o navegador falar direto com a i6 (caminhos A e B).
app.post("/i6-tickets", express.json({ limit: "1kb" }), async (req, res) => {
  const r = await emitirTickets(req.body?.eventos, req.body?.vitrine);
  res.set("Cache-Control", "no-store").status(r.status);
  if (r.corpo) res.json(r.corpo);
  else res.end();
});

// Rota de repasse (caminho C, e reserva do caminho A).
app.post("/i6-proxy", express.json({ limit: "64kb" }), async (req, res) => {
  const r = await chamarI6(req.body?.url, req.body?.body);
  res.status(r.status);
  if (r.corpo) res.type(r.tipo).send(r.corpo);
  else res.end();
});
`,Le=`// i6-acesso.mjs — obtém e renova o acesso temporário da i6 com o token do .env.
// Usado pelas rotas /i6-tickets e /i6-proxy. Não altere: só os três valores do .env mudam de loja para loja.
import { createHash, createPrivateKey, sign, randomBytes } from "node:crypto";

const AUTH_URL = "https://userz.app.rs.infinity6.ai/api/userz/refresh-dataset"; // sandbox: userz.sandbox.rs.infinity6.ai
const ACESSO_S = 3600;      // cada acesso pedido vale 1 hora
const PEDIDO_S = 300;       // cada pedido de renovação vale 5 minutos
const TICKET_S = 600;       // cada ticket vale 10 minutos
const MARGEM_MS = (TICKET_S + 60) * 1000; // renova 11 minutos antes de vencer: todo ticket cabe no acesso
const MAX_EVENTOS = 50, MAX_VITRINE = 5;  // tickets por pedido

// As três operações da i6 que a integração usa. Qualquer outra é recusada.
const PERMITIDOS = [
  /^\\/api\\/ingest\\/dataset\\/[^/]+\\/event\\/relevance-fashion-event\\/text[.]txt$/, // eventos
  /^\\/api\\/model\\/dataset\\/[^/]+\\/signed-get\\/[^/]+$/,                           // arquivos do modelo
  /^\\/api\\/model\\/dataset\\/[^/]+\\/[^/]+\\/[^/]+\\/predict$/,                       // recomendação
];

let credencial = null, acesso = null, renovando = null;

function lerEnv() {
  if (credencial) return credencial;
  const dataset = process.env.I6_DATASET || "";
  const chave = Buffer.from(process.env.I6_PRIVATE_KEY || "", "base64url");
  const jti = Buffer.from(process.env.I6_TOKEN_ID || "", "base64url");
  if (!dataset || chave.length !== 64 || jti.length !== 32 || !chave.subarray(32).equals(jti)) {
    throw new Error("i6: confira I6_DATASET, I6_TOKEN_ID e I6_PRIVATE_KEY no .env");
  }
  const pkcs8 = Buffer.concat([Buffer.from("302e020100300506032b657004220420", "hex"), chave.subarray(0, 32)]);
  credencial = { dataset, jti, chave: createPrivateKey({ key: pkcs8, format: "der", type: "pkcs8" }) };
  return credencial;
}

// Cabeçalho X-I6-Signature: tipo 0x83, validade, nonce, ID do token e assinatura (121 bytes).
// A assinatura cobre o texto de 7 linhas das requisições da i6: método, caminho,
// query, hash do corpo, hash do token, validade e nonce. 0x83 = corpo não
// assinado, e não há token: as linhas 3, 4 e 5 ficam vazias.
function pedidoAssinado({ jti, chave }, exp = Math.floor(Date.now() / 1000) + PEDIDO_S, nonce = randomBytes(16)) {
  const cab = Buffer.alloc(57);
  cab[0] = 0x83;
  cab.writeBigUInt64BE(BigInt(exp), 1);
  nonce.copy(cab, 9);
  jti.copy(cab, 25);
  const texto = ["POST", new URL(AUTH_URL).pathname, "", "", "", String(exp), nonce.toString("hex")].join("\\n");
  return Buffer.concat([cab, sign(null, Buffer.from(texto, "utf8"), chave)]).toString("base64url");
}

async function renovar() {
  const c = lerEnv();
  const r = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-I6-Signature": pedidoAssinado(c) },
    body: JSON.stringify({ dataset: c.dataset, exp_seconds: ACESSO_S }),
    signal: AbortSignal.timeout(5000),
  });
  if (!r.ok) throw new Error(\`i6: renovação recusada (\${r.status})\`);
  const j = await r.json();
  if (typeof j.access_token !== "string" || typeof j.expires_at !== "number" || j.dataset !== c.dataset) {
    throw new Error("i6: resposta de renovação inesperada");
  }
  acesso = { token: j.access_token, expira: j.expires_at };
  return acesso.token;
}

export function acessoI6() {
  if (acesso && acesso.expira - MARGEM_MS > Date.now()) return Promise.resolve(acesso.token);
  if (!renovando) renovando = renovar().finally(() => { renovando = null; });
  return renovando;
}

// Assinatura de cada chamada (o acesso da renovação só vale assinado, nunca no Bearer):
// envelope de 89 bytes (tipo 0x02, validade, nonce, assinatura) + "." + acesso.
// O texto assinado tem as mesmas 7 linhas, agora com o hash do corpo e do acesso.
function assinarChamada(token, caminho, corpo, exp = Math.floor(Date.now() / 1000) + PEDIDO_S, nonce = randomBytes(16)) {
  const sha = (texto) => createHash("sha256").update(texto, "utf8").digest("hex");
  const texto = ["POST", caminho, "", sha(corpo), sha(token), String(exp), nonce.toString("hex")].join("\\n");
  const env = Buffer.alloc(89);
  env[0] = 0x02;
  env.writeBigUInt64BE(BigInt(exp), 1);
  nonce.copy(env, 9);
  sign(null, Buffer.from(texto, "utf8"), lerEnv().chave).copy(env, 25);
  return \`\${env.toString("base64url")}.\${token}\`;
}

// Ticket: assinatura de UMA chamada direta do navegador à i6, com o corpo não assinado (0x82).
// O nonce é de uso único; o caminho entra na assinatura, então o ticket só vale para aquela operação.
function ticket(token, caminho, exp) {
  const nonce = randomBytes(16);
  const sha = (texto) => createHash("sha256").update(texto, "utf8").digest("hex");
  const texto = ["POST", caminho, "", "", sha(token), String(exp), nonce.toString("hex")].join("\\n");
  const env = Buffer.alloc(89);
  env[0] = 0x82;
  env.writeBigUInt64BE(BigInt(exp), 1);
  nonce.copy(env, 9);
  sign(null, Buffer.from(texto, "utf8"), lerEnv().chave).copy(env, 25);
  return \`\${env.toString("base64url")}.\${token}\`;
}

// Lote de tickets para o navegador: eventos e, se pedido, a vitrine (arquivo do modelo + recomendação).
export async function emitirTickets(eventos, vitrine) {
  let token;
  try { token = await acessoI6(); } catch (e) { console.error(e.message); return { status: 503 }; }
  const qtd = (v, max) => Math.max(0, Math.min(max, Math.floor(Number(v)) || 0));
  const exp = Math.min(Math.floor(Date.now() / 1000) + TICKET_S, Math.floor(acesso.expira / 1000));
  const ds = encodeURIComponent(lerEnv().dataset);
  const lote = (caminho, n) => Array.from({ length: n }, () => ticket(token, caminho, exp));
  const nv = qtd(vitrine, MAX_VITRINE);
  return {
    status: 200,
    corpo: {
      expira: exp * 1000,
      eventos: lote(\`/api/ingest/dataset/\${ds}/event/relevance-fashion-event/text.txt\`, qtd(eventos, MAX_EVENTOS)),
      modelo: lote(\`/api/model/dataset/\${ds}/signed-get/relevance-fashion-fbt\`, nv),
      recomendacao: lote(\`/api/model/dataset/\${ds}/relevance-fashion-fbt/v1/predict\`, nv),
    },
  };
}

function destino(url) {
  let d;
  try { d = new URL(String(url)); } catch { return null; }
  let dataset = "";
  try { dataset = decodeURIComponent(d.pathname.split("/")[4] || ""); } catch { return null; }
  const ok = d.protocol === "https:" && !d.port && !d.username && !d.password
    && d.hostname.endsWith(".infinity6.ai") && PERMITIDOS.some((r) => r.test(d.pathname))
    && dataset === process.env.I6_DATASET;
  return ok ? d : null;
}

// Repassa uma chamada do navegador à i6 com o acesso do servidor. Devolve { status, tipo, corpo }.
export async function chamarI6(url, corpo) {
  const d = destino(url);
  if (!d) return { status: 403 };
  let token;
  try { token = await acessoI6(); } catch (e) { console.error(e.message); return { status: 503 }; }
  const body = typeof corpo === "string" ? corpo : "{}";
  try {
    const r = await fetch(d.origin + d.pathname, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-I6-Signature": assinarChamada(token, d.pathname, body) },
      body,
      signal: AbortSignal.timeout(5000),
    });
    if (r.status === 401) acesso = null; // acesso recusado: o próximo pedido renova
    const dados = r.status === 204 ? null : Buffer.from(await r.arrayBuffer());
    return { status: r.status, tipo: r.headers.get("content-type") || "application/json", corpo: dados };
  } catch {
    return { status: 502 };
  }
}
`,Re=`<?php
// i6-acesso.php — funções comuns às rotas /i6-tickets e /i6-proxy. Lê o token do .env (variáveis de ambiente).
// Guarde fora da pasta pública do site; as rotas o incluem com require.

const I6_AUTH_URL = 'https://userz.app.rs.infinity6.ai/api/userz/refresh-dataset'; // sandbox: userz.sandbox.rs.infinity6.ai

const I6_TICKET_S = 600; // cada ticket vale 10 minutos

// As três operações da i6 que a integração usa. Qualquer outra é recusada.
const I6_PERMITIDOS = [
    '#^/api/ingest/dataset/[^/]+/event/relevance-fashion-event/text[.]txt$#',
    '#^/api/model/dataset/[^/]+/signed-get/[^/]+$#',
    '#^/api/model/dataset/[^/]+/[^/]+/[^/]+/predict$#',
];

function i6_b64url_dec(string $s): string {
    $b = base64_decode(strtr($s, '-_', '+/') . str_repeat('=', (4 - strlen($s) % 4) % 4), true);
    return $b === false ? '' : $b;
}
function i6_b64url_enc(string $b): string {
    return rtrim(strtr(base64_encode($b), '+/', '-_'), '=');
}

// Texto assinado: as 7 linhas das requisições da i6 (método, caminho, query, hash do corpo,
// hash do token, validade, nonce). 0x83 = corpo não assinado e sem token: linhas 3 a 5 vazias.
function i6_texto_assinado(int $exp, string $nonce): string {
    return implode("\\n", ['POST', parse_url(I6_AUTH_URL, PHP_URL_PATH), '', '', '', (string) $exp, bin2hex($nonce)]);
}

// Assinatura de cada chamada (o acesso da renovação só vale assinado, nunca no Bearer):
// envelope de 89 bytes (tipo 0x02, validade, nonce, assinatura) + "." + acesso.
function i6_assinar_chamada(string $token, string $caminho, string $corpo, string $chave): string {
    $exp = time() + 300;
    $nonce = random_bytes(16);
    $texto = implode("\\n", ['POST', $caminho, '', hash('sha256', $corpo), hash('sha256', $token), (string) $exp, bin2hex($nonce)]);
    return i6_b64url_enc("\\x02" . pack('J', $exp) . $nonce . sodium_crypto_sign_detached($texto, $chave)) . '.' . $token;
}

function i6_cache(string $jti): string {
    return sys_get_temp_dir() . '/i6-acesso-' . hash('sha256', $jti) . '.json';
}

// Devolve [acesso, expira em ms], renovado 11 minutos antes de vencer (todo ticket cabe no acesso).
function i6_acesso(): array {
    $dataset = getenv('I6_DATASET') ?: '';
    $chave = i6_b64url_dec(getenv('I6_PRIVATE_KEY') ?: '');
    $jti = i6_b64url_dec(getenv('I6_TOKEN_ID') ?: '');
    if ($dataset === '' || strlen($chave) !== 64 || strlen($jti) !== 32 || substr($chave, 32) !== $jti) {
        throw new RuntimeException('i6: confira I6_DATASET, I6_TOKEN_ID e I6_PRIVATE_KEY no .env');
    }
    $c = json_decode((string) @file_get_contents(i6_cache($jti)), true);
    if (is_array($c) && is_string($c['token'] ?? null) && ($c['expira'] ?? 0) - (I6_TICKET_S + 60) * 1000 > microtime(true) * 1000) {
        return [$c['token'], (int) $c['expira']];
    }
    // Cabeçalho X-I6-Signature: tipo 0x83, validade, nonce, ID do token e assinatura (121 bytes).
    $exp = time() + 300;
    $nonce = random_bytes(16);
    $cab = "\\x83" . pack('J', $exp) . $nonce . $jti;
    $pedido = $cab . sodium_crypto_sign_detached(i6_texto_assinado($exp, $nonce), $chave);
    $ch = curl_init(I6_AUTH_URL);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode(['dataset' => $dataset, 'exp_seconds' => 3600]),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'X-I6-Signature: ' . i6_b64url_enc($pedido)],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 5,
    ]);
    $resposta = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $j = json_decode((string) $resposta, true);
    if ($status < 200 || $status > 299 || !is_string($j['access_token'] ?? null)
        || !is_numeric($j['expires_at'] ?? null) || ($j['dataset'] ?? '') !== $dataset) {
        throw new RuntimeException("i6: renovação recusada ($status)");
    }
    $mascara = umask(0077);
    file_put_contents(i6_cache($jti), json_encode(['token' => $j['access_token'], 'expira' => $j['expires_at']]), LOCK_EX);
    umask($mascara);
    return [$j['access_token'], (int) $j['expires_at']];
}

// Ticket: assinatura de UMA chamada direta do navegador à i6, com o corpo não assinado (0x82).
function i6_ticket(string $token, string $caminho, int $exp, string $chave): string {
    $nonce = random_bytes(16);
    $texto = implode("\\n", ['POST', $caminho, '', '', hash('sha256', $token), (string) $exp, bin2hex($nonce)]);
    return i6_b64url_enc("\\x82" . pack('J', $exp) . $nonce . sodium_crypto_sign_detached($texto, $chave)) . '.' . $token;
}
`,ze=`// i6-compra.mjs — envia a compra à i6 pelo servidor, na confirmação do pedido.
import { chamarI6 } from "./i6-acesso.mjs";

// contexto = o que i6.context() devolveu no navegador, enviado junto com o pedido.
export async function enviarCompraI6({ baseUrl, storeId, pedido, itens, contexto }) {
  if (!contexto?.sessionId) throw new Error("i6: falta o contexto do navegador (i6.context())");
  const grupos = {};
  for (const item of itens) {
    const sku = String(item.sku), vitrine = contexto.displays?.[sku] || "";
    const grupo = (grupos[vitrine] ||= {});
    const linha = (grupo[sku] ||= { sku_id: sku, unit_price: Number(item.price) || 0, qtty: 0 });
    linha.qtty += Number(item.quantity) || 1;
  }
  const url = \`\${baseUrl.replace(/\\/$/, "")}/api/ingest/dataset/\${encodeURIComponent(process.env.I6_DATASET)}\` +
    "/event/relevance-fashion-event/text.txt";
  for (const [vitrine, grupo] of Object.entries(grupos)) {
    const ev = {
      id: \`purchase-\${pedido}-\${vitrine || "organico"}\`, // mesmo ID do script: a i6 conta uma vez só
      store_id: storeId,
      session_id: contexto.sessionId,
      created_at: new Date().toISOString(),
      purchase: { order_id: String(pedido), skus: Object.values(grupo) },
    };
    if (contexto.userId) ev.user_id = contexto.userId;
    if (vitrine) ev.display_id = vitrine;
    const r = await chamarI6(url, JSON.stringify(ev));
    // 400, 413 e 422: evento inválido, reenviar não adianta. Outros erros: tente de novo mais tarde.
    if (r.status >= 300 && ![400, 413, 422].includes(r.status)) throw new Error(\`i6: compra não entregue (\${r.status})\`);
  }
}
`,Be=`/*! i6-events.js — eventos e vitrines de recomendação do Relevance (i6 Decision Suite).
    Não contém credenciais: o seu servidor entrega tickets de uso único (/i6-tickets)
    ou repassa as chamadas (/i6-proxy). Versão 2.4. */
(function () {
  "use strict";

  var cfg = {
    storeId: null, dataset: null, baseUrl: null, tickets: "/i6-tickets", proxy: "/i6-proxy", sdkUrl: null,
    attributionDays: 7, recommendTimeoutMs: 3000, debug: false, userId: null, vitrine: false,
  };
  var QUEUE_KEY = "i6_queue", ATTR_KEY = "i6_attr", SESSION_KEY = "i6_session", ANON_KEY = "i6_anon";
  var MODEL_URLS_KEY = "i6_model_urls", JOURNAL_KEY = "i6_journal";
  var MAX_QUEUE = 200, MAX_AGE_MS = 7 * 864e5, SESSION_MS = 30 * 60e3, MODEL_URLS_TTL_MS = 50 * 60e3;
  var ACTIONS = ["click", "add_to_cart", "remove_from_cart", "search", "purchase", "recraw", "recshow"];
  var inFlight = {}, failures = 0, retryTimer = null, lastClick = { sku: null, t: 0 };
  var slots = {}, sdkInstance = null, sdkLoading = null, inferChain = Promise.resolve();
  var pool = { eventos: [], modelo: [], recomendacao: [], exp: 0 }, refilling = null, wantShelf = false;
  var MODEL_NAME = "relevance-fashion-fbt";
  var VERSION = "2.4", initEarly = false, cspBlocks = 0, lastConn = null, PAGE_T0 = Date.now();

  function read(key, fallback, session) {
    try {
      var v = JSON.parse((session ? sessionStorage : localStorage).getItem(key));
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }
  function write(key, value, session) {
    try { (session ? sessionStorage : localStorage).setItem(key, JSON.stringify(value)); } catch (e) {}
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
  function ready() {
    if (cfg.storeId && cfg.dataset && cfg.baseUrl && (cfg.tickets || cfg.proxy)) return true;
    console.warn("[i6] chame i6.init({ storeId, dataset, baseUrl }) antes de usar (e mantenha tickets ou proxy)");
    return false;
  }
  function whenDomReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  function whenIdle(fn) {
    if (window.requestIdleCallback) window.requestIdleCallback(fn, { timeout: 2000 });
    else setTimeout(fn, 0);
  }
  // Pré-carregamento: adianta os tickets, o SDK e o arquivo do modelo (warmupDataset), para a
  // recomendação sair rápido. O SDK guarda o arquivo no navegador e só confere se mudou a cada 5 min.
  function warm() {
    wantShelf = true;
    if (cfg.tickets && !(Date.now() < pool.exp - 30e3 && pool.modelo.length)) refill().catch(function () {});
    if (!cfg.sdkUrl && !window.I6Sdk) return;
    sdk().then(function (client) {
      if (typeof client.warmupDataset !== "function") {
        log("a sua cópia do SDK não tem warmupDataset: atualize o SDK para a vitrine sair mais rápido");
        return;
      }
      return client.warmupDataset({
        dataset: cfg.dataset,
        models: [{ modelName: MODEL_NAME, partitions: modelPartitions() }],
        serviceOptions: serviceOptions,
      });
    }).catch(function (e) { log("pré-carregamento do modelo indisponível", e && e.message); });
  }

  // Diário desta aba (sessionStorage), lido pelo i6.check(). Não é enviado a lugar nenhum.
  function note(entry) {
    var journal = read(JOURNAL_KEY, [], true);
    entry.hora = new Date().toLocaleTimeString();
    entry.t = Date.now();
    journal.push(entry);
    write(JOURNAL_KEY, journal.slice(-300), true);
  }
  function describe(ev) {
    ev = ev || {};
    var acao = ACTIONS.filter(function (k) { return ev[k] != null; })[0] || "?";
    var a = ev[acao] || {}, skus = [];
    if (a.sku_id) skus = [a.sku_id];
    else if (a.skus) skus = a.skus.map(function (s) { return s.sku_id; });
    else if (a.text) skus = ['"' + a.text + '"'];
    else if (a.payload) {
      try { skus = (JSON.parse(a.payload).skus || []).map(function (s) { return s.sku_id; }); } catch (e) {}
    }
    return { id: ev.id, acao: acao, skus: skus.join(", "), vitrine: ev.display_id ? "sim" : "", sessao: ev.session_id };
  }

  // Sessão: um novo ID depois de 30 minutos sem atividade.
  function sessionId() {
    var s = read(SESSION_KEY, null), now = Date.now();
    if (!s || !s.id || now - s.t > SESSION_MS) s = { id: uuid(), t: now };
    s.t = now;
    write(SESSION_KEY, s);
    return s.id;
  }
  // Identificador anônimo do visitante, usado pelas recomendações quando não há login.
  function anonId() {
    var a = read(ANON_KEY, null);
    if (!a) { a = "anon-" + uuid(); write(ANON_KEY, a); }
    return a;
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

  // Tickets: o servidor assina, o navegador chama o i6 Decision Suite direto. Cada ticket vale para UMA
  // chamada de uma operação (eventos, arquivo do modelo ou recomendação), por até 10 minutos.
  function refill() {
    if (!refilling) {
      refilling = fetch(cfg.tickets, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventos: 20, vitrine: wantShelf ? 2 : 0 }),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("tickets: " + res.status);
          return res.json();
        })
        .then(function (j) {
          pool = { eventos: j.eventos || [], modelo: j.modelo || [], recomendacao: j.recomendacao || [], exp: Number(j.expira) || 0 };
        })
        .then(function () { refilling = null; }, function (e) { refilling = null; throw e; });
    }
    return refilling;
  }
  function takeTicket(kind) {
    var valid = Date.now() < pool.exp - 30e3;
    if (valid && pool[kind].length) {
      var t = pool[kind].shift();
      if (pool.eventos.length < 5) refill().catch(function () {});
      return Promise.resolve(t);
    }
    if (kind !== "eventos") wantShelf = true;
    return refill().then(function () {
      var next = pool[kind].shift();
      if (!next) throw new Error("sem ticket para " + kind);
      return next;
    });
  }
  function kindOf(url) {
    if (/[/]event[/]relevance-fashion-event[/]/.test(url)) return "eventos";
    return /[/]signed-get[/]/.test(url) ? "modelo" : "recomendacao";
  }
  // Chamada ao i6 Decision Suite pelo caminho configurado: ticket direto e, se o navegador não
  // conseguir chamar direto (bloqueador, rede) ou faltar ticket, a rota do servidor como reserva.
  function callI6(url, body, keepalive) {
    body = typeof body === "string" ? body : JSON.stringify(body || {});
    if (!cfg.tickets) return viaProxy(url, body, keepalive);
    return takeTicket(kindOf(url))
      .then(function (t) {
        return fetch(url + (url.indexOf("?") < 0 ? "?" : "&") + "i6sig=" + encodeURIComponent(t), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
          keepalive: !!keepalive,
        });
      })
      .then(function (res) {
        if (res.status === 401) pool.exp = 0; // ticket recusado: a próxima chamada busca outro lote
        res.i6via = "ticket";
        return res;
      }, function (e) {
        if (!cfg.proxy) throw e;
        log("chamada direta indisponível, usando a rota do servidor", e && e.message);
        return viaProxy(url, body, keepalive);
      });
  }

  // Rota de repasse do seu servidor, que assina a chamada com o acesso dele.
  function viaProxy(url, body, keepalive) {
    return fetch(cfg.proxy, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url, body: typeof body === "string" ? body : JSON.stringify(body || {}) }),
      keepalive: !!keepalive, // só os eventos precisam chegar mesmo se a página fechar
    }).then(function (res) { res.i6via = "rota"; return res; });
  }
  function ingestUrl() {
    return cfg.baseUrl.replace(/[/]$/, "") + "/api/ingest/dataset/" + encodeURIComponent(cfg.dataset) +
      "/event/relevance-fashion-event/text.txt";
  }

  function buildEvent(action, data, displayId) {
    var ev = { id: uuid(), store_id: cfg.storeId, session_id: sessionId(), created_at: new Date().toISOString() };
    if (cfg.userId) ev.user_id = cfg.userId;
    if (displayId) ev.display_id = displayId;
    ev[action] = data;
    return ev;
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
    var q = loadQueue().filter(function (e) { return e.id !== ev.id; });
    q.push(ev);
    if (q.length > MAX_QUEUE) q = q.slice(q.length - MAX_QUEUE);
    write(QUEUE_KEY, q);
    log("evento", ev);
    send(ev);
  }
  function track(action, data, displayId) {
    if (ready()) enqueue(buildEvent(action, data, displayId));
  }

  function send(ev) {
    if (inFlight[ev.id]) return;
    inFlight[ev.id] = true;
    var info = describe(ev);
    info.origem = "script";
    callI6(ingestUrl(), ev, true)
      .then(function (res) {
        info.status = res.status;
        info.via = res.i6via || "";
        note(info);
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
        info.status = "sem conexão";
        note(info);
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
    if (!cfg.baseUrl || !cfg.dataset) return;
    loadQueue().filter(function (e) { return !inFlight[e.id]; }).slice(0, 10).forEach(send);
  }

  // Chamadas do SDK pelo caminho configurado (tickets ou rota). As URLs dos arquivos do modelo valem 60 min:
  // guardadas por 50 min, evitam uma chamada a cada vitrine.
  function sdkFetch(url, opts) {
    var body = opts && opts.body, t0 = Date.now();
    var isEvent = /[/]event[/]relevance-fashion-event[/]/.test(url), isAssets = /[/]signed-get[/]/.test(url);
    function record(status, cached) {
      if (isEvent) {
        var ev = {};
        try { ev = JSON.parse(body); } catch (e) {}
        var info = describe(ev);
        info.origem = "SDK";
        info.status = status;
        note(info);
      } else {
        note({ etapa: isAssets ? "arquivos do modelo" + (cached ? " (cache)" : "") : "recomendação (predict)", status: status, ms: Date.now() - t0 });
      }
    }
    function call() {
      return callI6(url, body, false).then(
        function (res) { record(res.status, false); return res; },
        function (e) { record("sem conexão", false); throw e; }
      );
    }
    if (!isAssets) return call();
    var key = url + "|" + (typeof body === "string" ? body : ""), cache = read(MODEL_URLS_KEY, {}, true);
    var hit = cache[key];
    if (hit && hit.exp > Date.now()) {
      record(200, true);
      return Promise.resolve(new Response(hit.text, { status: 200, headers: { "Content-Type": "application/json" } }));
    }
    return call().then(function (res) {
      if (!res.ok) return res;
      return res.text().then(function (text) {
        cache[key] = { text: text, exp: Date.now() + MODEL_URLS_TTL_MS };
        write(MODEL_URLS_KEY, cache, true);
        return new Response(text, { status: res.status, headers: { "Content-Type": "application/json" } });
      });
    });
  }
  // bearerToken: marcador para o SDK não procurar uma sessão do i6 Decision Suite no navegador do comprador.
  // Ele nunca sai daqui: o sdkFetch ignora os cabeçalhos; a assinatura vem do ticket ou da rota.
  var serviceOptions = { fetcher: sdkFetch, bearerToken: "via-proxy" };
  // Mesmas partições no pré-carregamento e na recomendação: o SDK guarda o arquivo por modelo + partições.
  function modelPartitions() { return { version: "v1", store_id: String(cfg.storeId) }; }

  // SDK do i6 Decision Suite: já incluído na página (controle total) ou carregado sob demanda a partir de sdkUrl.
  function loadSdk() {
    if (window.I6Sdk) return Promise.resolve();
    if (!cfg.sdkUrl) return Promise.reject(new Error("SDK do i6 Decision Suite ausente: informe sdkUrl no i6.init"));
    if (!sdkLoading) {
      sdkLoading = new Promise(function (resolve, reject) {
        var s = document.createElement("script");
        s.src = cfg.sdkUrl;
        s.async = true;
        s.onload = function () {
          if (window.I6Sdk) return resolve();
          sdkLoading = null;
          reject(new Error("o arquivo em sdkUrl não é o SDK do i6 Decision Suite"));
        };
        s.onerror = function () { sdkLoading = null; reject(new Error("falha ao carregar o SDK")); };
        document.head.appendChild(s);
      });
    }
    return sdkLoading;
  }
  function sdk() {
    return loadSdk().then(function () {
      if (!sdkInstance) sdkInstance = new window.I6Sdk({ baseUrl: cfg.baseUrl });
      return sdkInstance;
    });
  }

  function recommend(o) {
    o = o || {};
    if (!ready() || typeof o.render !== "function") return;
    var slot = o.slot || "vitrine";
    var my = (slots[slot] = (slots[slot] || 0) + 1);
    var limit = o.limit || 12;
    var input = (o.skus || []).map(String);
    var decided = false, t0 = Date.now();
    function current() { return slots[slot] === my; }
    function useFallback(reason) {
      if (decided || !current()) return;
      decided = true;
      note({ etapa: "vitrine " + slot + ": lista própria (" + reason + ")", ms: Date.now() - t0 });
      log("vitrine " + slot + ": lista própria (" + reason + ")");
      if (typeof o.fallback === "function") o.fallback();
    }
    var timer = setTimeout(function () { useFallback("tempo esgotado"); }, o.timeoutMs || cfg.recommendTimeoutMs);
    if (!input.length) { clearTimeout(timer); useFallback("sem produtos de entrada"); return; }
    wantShelf = true;

    var job = function () {
      if (decided || !current()) return null;
      return sdk().then(function (client) {
        if (decided || !current()) return null;
        return client.funcs().productRelevanceFashionFbtV1({
          input: {
            dataset: cfg.dataset,
            skus: input.map(function (s) { return { sku_id: s }; }),
            session_id: sessionId(),
            user_id: cfg.userId || anonId(),
          },
          partitions: modelPartitions(),
        }, function (req, results) {
          // O SDK chama esta função antes de registrar a exibição: só desenhamos se ainda for a hora.
          if (decided || !current()) throw new Error("resultado chegou tarde");
          var taken = {}, chosen = [];
          input.forEach(function (s) { taken[s] = true; });
          ((results && results.results) || []).forEach(function (group) {
            if (chosen.length >= limit) return;
            var ids = (group.skus || [group]).map(function (s) { return String(s.sku_id); });
            for (var i = 0; i < ids.length; i++) {
              if (taken[ids[i]] || (o.isAvailable && !o.isAvailable(ids[i]))) continue;
              taken[ids[i]] = true;
              chosen.push({ sku_id: ids[i], rating: group.rating });
              break; // um produto por grupo
            }
          });
          if (!chosen.length) throw new Error("sem recomendações válidas");
          decided = true;
          clearTimeout(timer);
          o.render(chosen.map(function (c) { return c.sku_id; })); // desenha agora
          note({ etapa: "vitrine " + slot + ": recomendação exibida (" + chosen.length + " itens)", ms: Date.now() - t0 });
          log("vitrine " + slot + ": recomendação exibida", chosen);
          return { results: chosen }; // o SDK registra a exibição com exatamente esta lista
        }, serviceOptions);
      });
    };
    // Uma recomendação por vez: o SDK compartilha recursos entre as chamadas.
    var run = inferChain.then(job, job);
    inferChain = run.catch(function () {});
    run.catch(function (e) {
      log("vitrine " + slot + ": recomendação indisponível", e && e.message);
      try { sessionStorage.removeItem(MODEL_URLS_KEY); } catch (x) {} // as URLs do modelo podem ter vencido
      clearTimeout(timer);
      useFallback("indisponível");
    });
  }

  // Diagnóstico para os testes (passo 7 do guia). Só lê o diário desta aba; o teste de conexão
  // faz uma leitura de teste no i6 Decision Suite (arquivo do modelo) por cada caminho configurado.
  function connectionTest() {
    var url = cfg.baseUrl.replace(/[/]$/, "") + "/api/model/dataset/" + encodeURIComponent(cfg.dataset) +
      "/signed-get/relevance-fashion-fbt";
    var body = JSON.stringify({ model_version: "v1", model_partitions: { version: "v1", store_id: cfg.storeId } });
    var result = { tickets: null, rota: null };
    var report = function (label, res) {
      var msg = res.ok ? "✅ funcionando"
        : res.status === 503 ? "❌ o servidor não conseguiu acesso ao i6 Decision Suite: veja o log do servidor"
        : "❌ veja Problemas comuns no guia";
      console.log("[i6] " + label + ":", res.status, msg);
    };
    var fail = function (label, key) {
      return function (e) {
        result[key] = 0;
        console.log("[i6] " + label + ": ❌ " + (e && e.message ? e.message : "não respondeu"));
      };
    };
    var tests = [];
    if (cfg.tickets) {
      var lt = "Tickets (" + cfg.tickets + ") e chamada direta ao i6 Decision Suite";
      wantShelf = true;
      pool.exp = 0;
      tests.push(takeTicket("modelo").then(function (t) {
        return fetch(url + "?i6sig=" + encodeURIComponent(t), { method: "POST", headers: { "Content-Type": "application/json" }, body: body });
      }).then(function (res) { result.tickets = res.status; report(lt, res); }, fail(lt, "tickets")));
    }
    if (cfg.proxy) {
      var lr = "Rota " + cfg.proxy;
      tests.push(viaProxy(url, body, false).then(function (res) { result.rota = res.status; report(lr, res); }, fail(lr, "rota")));
    }
    return Promise.all(tests).then(function () { lastConn = result; return result; });
  }

  // Resultado da vitrine NESTA página: o último desfecho anotado desde que a página abriu.
  function shelfOutcome(journal) {
    var out = { resultado: "nenhuma", ms: null, registro: null };
    journal.forEach(function (j) {
      if (!(j.t >= PAGE_T0)) return;
      if (j.etapa) {
        var m = /^vitrine (.*): (recomendação exibida|lista própria \\((tempo esgotado|indisponível|sem produtos de entrada)\\))/.exec(j.etapa);
        if (!m || m[1] === "teste-fallback") return;
        out.resultado = m[2] === "recomendação exibida" ? "exibida"
          : m[3] === "tempo esgotado" ? "tempo" : m[3] === "indisponível" ? "indisponivel" : "sem-produtos";
        out.ms = Math.max(0, Math.min(600000, Math.round(Number(j.ms) || 0)));
      } else if (j.acao === "recshow") {
        out.registro = typeof j.status === "number" ? j.status : 0;
      }
    });
    return out;
  }

  // Fatos do teste, sem segredos nem dados de cliente: é o conteúdo do código de verificação.
  function facts() {
    var journal = read(JOURNAL_KEY, [], true);
    var events = journal.filter(function (j) { return j.acao; });
    var steps = journal.filter(function (j) { return j.etapa; });
    var delivered = {}, via = { ticket: 0, rota: 0 };
    events.forEach(function (e) {
      if (e.status >= 200 && e.status < 300) {
        delivered[e.id] = e;
        if (e.via === "ticket" || e.via === "rota") via[e.via]++;
      }
    });
    var ok = Object.keys(delivered).map(function (k) { return delivered[k]; });
    function seen(fn) { return ok.some(fn); }
    var q = function (sel) { return document.querySelectorAll ? document.querySelectorAll(sel).length : 0; };
    var shelves = q("[data-i6-display]");
    var recs = [];
    steps.forEach(function (s) {
      var m = /^vitrine (.*): (recomendação exibida|lista própria \\((tempo esgotado|indisponível|sem produtos de entrada)\\))/.exec(s.etapa);
      if (!m || m[1] === "teste-fallback") return;
      var r = m[2] === "recomendação exibida" ? "exibida"
        : m[3] === "tempo esgotado" ? "tempo" : m[3] === "indisponível" ? "indisponivel" : "sem-produtos";
      recs.push({ ms: Math.max(0, Math.min(600000, Math.round(Number(s.ms) || 0))), r: r });
    });
    return {
      v: 2,
      script: VERSION,
      loja: String(cfg.storeId),
      dataset: String(cfg.dataset),
      site: String(location.hostname || "").toLowerCase(),
      em: new Date().toISOString().slice(0, 16) + "Z",
      caminho: cfg.tickets && cfg.proxy ? "A" : cfg.tickets ? "B" : "C",
      conexao: lastConn ? { tickets: lastConn.tickets, rota: lastConn.rota } : { tickets: null, rota: null },
      config: {
        debug: !!cfg.debug,
        timeoutMs: Number(cfg.recommendTimeoutMs) || 0,
        sdkUrl: !!cfg.sdkUrl,
        initCedo: initEarly,
      },
      pagina: {
        links: q("[data-i6-sku]"),
        linksVitrine: q("[data-i6-display] [data-i6-sku]"),
        vitrines: shelves,
        sdk: !shelves ? "sem-vitrine" : window.I6Sdk ? "pronto" : sdkLoading ? "carregando" : "ausente",
        csp: cspBlocks,
      },
      vitrine: shelfOutcome(journal),
      jornada: {
        clique: seen(function (e) { return e.acao === "click" && !e.vitrine; }),
        carrinho: seen(function (e) { return e.acao === "add_to_cart"; }),
        busca: seen(function (e) { return e.acao === "search"; }),
        compra: seen(function (e) { return e.acao === "purchase"; }),
        cliqueVitrine: seen(function (e) { return e.acao === "click" && e.vitrine; }),
        compraAtribuida: seen(function (e) { return e.acao === "purchase" && e.vitrine; }),
        fila: loadQueue().length,
        entregas: via,
      },
      recomendacoes: recs.slice(-10),
    };
  }

  // Boas práticas obrigatórias (as mesmas da aba Verificação do app). Cada uma traz o que fazer se falhar.
  // A verificação é por amostragem: numa página com vitrine ativa, o registro da exibição prova o
  // caminho até o i6 Decision Suite, o mesmo de todos os outros eventos.
  function rules(f) {
    var two = function (s) { return typeof s === "number" && s >= 200 && s < 300; };
    var conn = f.caminho === "A" ? two(f.conexao.tickets) && two(f.conexao.rota)
      : f.caminho === "B" ? two(f.conexao.tickets) : two(f.conexao.rota);
    var bad = [f.conexao.tickets, f.conexao.rota].filter(function (s) { return s !== null && !two(s); })[0];
    var connFix = bad === 0 ? "a rota não respondeu: confira se /i6-tickets e /i6-proxy estão publicadas no servidor (passo 2)"
      : bad === 404 ? "a rota não existe nesse endereço: publique as rotas do passo 2 ou ajuste tickets/proxy no i6.init"
      : bad === 503 ? "o servidor não conseguiu acesso ao i6 Decision Suite: veja o log do servidor e o .env"
      : bad === 401 || bad === 403 ? "o token precisa das permissões de Escrita e Leitura: crie outro token e troque o .env"
      : "status " + bad + ": veja Problemas comuns no guia";
    var page = f.pagina.vitrines > 0, v = f.vitrine;
    var recFix = v.resultado === "tempo" ? "a recomendação passou de 3 s (normal na primeira visita): recarregue a página e rode de novo"
      : v.resultado === "sem-produtos" ? "a vitrine não tinha produtos de entrada: adicione um produto ao carrinho ou abra uma página de produto, e rode de novo"
      : v.resultado === "indisponivel" ? "a recomendação falhou: ligue debug: true para ver o motivo no console e confira o sdkUrl e a permissão de Leitura do token"
      : "a vitrine não pediu recomendação nesta página: confira se a página chama i6.recommend (passo 6)";
    return [
      ["Script na versão atual (" + VERSION + ")", f.script === VERSION, "troque o i6-events.js pelo arquivo do Anexo do guia, sem editar"],
      ["Conexão com o i6 Decision Suite (caminho " + f.caminho + ")", conn, connFix],
      ["Modo de teste desligado", !f.config.debug, "tire debug: true do i6.init e publique"],
      ["Tempo limite padrão (3000 ms)", f.config.timeoutMs === 3000, "não informe recommendTimeoutMs no i6.init"],
      ["Script no <head>, iniciado antes de a página terminar de carregar", f.config.initCedo, "inclua o script e o i6.init no <head>, antes do resto"],
      ["Nenhum bloqueio de CSP", f.pagina.csp === 0, "libere os endereços do i6 Decision Suite na CSP (Opções avançadas do guia)"],
      ["Página com vitrine ativa (data-i6-display)", page, "abra uma página com vitrine ativa e rode a verificação de novo"],
      ["Links da vitrine com data-i6-sku", f.pagina.linksVitrine > 0, "os cards da vitrine precisam de links com data-i6-sku e data-i6-price (passo 4)", page],
      ["SDK pré-carregado", f.pagina.sdk === "pronto", f.pagina.sdk === "carregando" ? "o SDK ainda estava carregando: espere a página terminar e rode de novo" : "informe sdkUrl no i6.init com o endereço da sua cópia do SDK", page],
      ["Recomendação exibida nesta página", v.resultado === "exibida", recFix, page],
      ["Exibição registrada no i6 Decision Suite", two(v.registro), v.registro === null ? "o registro da exibição ainda não saiu: espere alguns segundos e rode de novo" : "o registro da exibição voltou com status " + v.registro + ": veja Problemas comuns no guia", page && v.resultado === "exibida"],
      ["Nenhum evento esperando envio", f.jornada.fila === 0, "há " + f.jornada.fila + " evento(s) na fila: confira a conexão e rode de novo em alguns segundos"],
    ];
  }

  // O que já foi visto nesta aba (opcional): os outros eventos usam o mesmo envio já comprovado acima.
  function seenList(f) {
    var j = f.jornada;
    return [
      ["Clique em produto fora da vitrine", j.clique],
      ["Carrinho (i6.addToCart)", j.carrinho],
      ["Busca (i6.search)", j.busca],
      ["Compra (i6.purchase)", j.compra],
      ["Clique num produto da vitrine", j.cliqueVitrine],
      ["Compra atribuída à vitrine", j.compraAtribuida],
    ];
  }

  // Espera a vitrine desta página decidir (e registrar a exibição), por até 10 segundos.
  function waitShelf() {
    var q = document.querySelectorAll ? document.querySelectorAll("[data-i6-display]").length : 0;
    if (!q) return Promise.resolve();
    var done = function () {
      var o = shelfOutcome(read(JOURNAL_KEY, [], true));
      return o.resultado !== "nenhuma" && (o.resultado !== "exibida" || o.registro !== null);
    };
    if (done()) return Promise.resolve();
    console.log("[i6] Aguardando a vitrine desta página (até 10 s)...");
    return new Promise(function (resolve) {
      var t0 = Date.now();
      var timer = setInterval(function () {
        if (done() || Date.now() - t0 > 10000) { clearInterval(timer); resolve(); }
      }, 250);
    });
  }

  function encode(f) {
    var bytes = new TextEncoder().encode(JSON.stringify(f)), bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return "i6chk1." + btoa(bin).replace(/\\+/g, "-").replace(/\\//g, "_").replace(/=+$/, "");
  }

  function check(options) {
    options = options || {};
    if (options.reset) {
      try { sessionStorage.removeItem(JOURNAL_KEY); } catch (e) {}
      return console.log("[i6] Diário de testes limpo. Faça a jornada e rode i6.check().");
    }
    if (options.conexao || options.proxy) return connectionTest();
    if (options.relatorio) {
      return connectionTest().then(waitShelf).then(function () {
        var f = facts(), list = rules(f), all = list.every(function (r) { return r[1]; });
        console.group("[i6] Verificação final da integração");
        console.table(list.map(function (r) { return { "boa prática (obrigatória)": r[0], resultado: r[1] ? "✅" : "❌" }; }));
        console.table(seenList(f).map(function (r) { return { "visto nesta aba (opcional)": r[0], resultado: r[1] ? "✅" : "⬜ não testado" }; }));
        list.forEach(function (r) {
          if (!r[1] && r[3] !== false) console.warn("[i6] ⚠ " + r[0] + ": " + r[2] + ".");
        });
        if (sdkInstance && typeof sdkInstance.warmupDataset !== "function") {
          console.warn("[i6] ⚠ A sua cópia do SDK é antiga (sem warmupDataset): baixe a versão atual para a vitrine sair mais rápido.");
        }
        if (f.recomendacoes.length) {
          console.log("Recomendações nesta aba (ms):", f.recomendacoes.map(function (r) { return r.ms + " " + r.r; }).join(" · "));
        }
        var code = encode(f);
        console.log("Código de verificação:\\n" + code);
        console.log(all
          ? "✅ Tudo certo. Copie o código de verificação acima (com copy(...) ele já está na área de transferência) e cole na aba Verificação do Relevance, no i6 Decision Suite."
          : "❌ Corrija os itens com ⚠ e rode de novo. Se precisar de ajuda, envie o código de verificação acima ao suporte do i6 Decision Suite.");
        console.groupEnd();
        return code;
      });
    }
    var f0 = facts(), journal = read(JOURNAL_KEY, [], true);
    var events = journal.filter(function (j) { return j.acao; });
    var steps = journal.filter(function (j) { return j.etapa; });
    var items = [
      ["Configuração no i6.init (storeId, dataset, baseUrl)", !!(cfg.storeId && cfg.dataset && cfg.baseUrl)],
      ["Clique em produto entregue", f0.jornada.clique || f0.jornada.cliqueVitrine],
      ["Carrinho entregue", f0.jornada.carrinho],
      ["Compra entregue", f0.jornada.compra],
      ["Nenhum evento pendente na fila", f0.jornada.fila === 0],
      ["Recomendação exibida e registrada", events.some(function (e) { return e.acao === "recshow" && e.status >= 200 && e.status < 300; })],
      ["Clique num produto da vitrine, com o código da vitrine", f0.jornada.cliqueVitrine],
      ["Compra atribuída à vitrine", f0.jornada.compraAtribuida],
    ];
    var all = items.every(function (i) { return i[1]; });
    var sid = (read(SESSION_KEY, {}) || {}).id;
    console.group("[i6] Diagnóstico da integração");
    console.table(items.map(function (i) { return { "verificação": i[0], resultado: i[1] ? "✅" : "⬜ ainda não visto" }; }));
    console.log("Eventos enviados (cada tentativa):");
    console.table(events);
    if (steps.length) { console.log("Vitrines e modelo:"); console.table(steps); }
    console.log("Sessão atual: " + sid + " · eventos pendentes na fila: " + f0.jornada.fila);
    console.log(all
      ? "✅ Jornada completa neste navegador. Agora rode a verificação final numa página com vitrine: copy(await i6.check({ relatorio: true }))"
      : "⬜ Ainda faltam itens: faça as ações sem ✅ (na mesma aba) e rode i6.check() de novo.");
    console.groupEnd();
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
    track("click", { sku_id: sku, price: price }, displayId);
  }, true);
  window.addEventListener("online", flush);
  // Bloqueios de CSP que afetam o i6 Decision Suite (contados só para o diagnóstico).
  document.addEventListener("securitypolicyviolation", function (e) {
    var u = String((e && e.blockedURI) || "");
    if (/infinity6|jsdelivr|storage[.]googleapis/.test(u) || (cfg.sdkUrl && u.indexOf(cfg.sdkUrl) >= 0)) cspBlocks++;
  });

  var api = {
    init: function (options) {
      options = options || {};
      for (var k in options) if (Object.prototype.hasOwnProperty.call(options, k)) cfg[k] = options[k];
      initEarly = document.readyState === "loading";
      if (!ready()) return;
      flush(); // reenvia o que ficou pendente de visitas anteriores
      // Páginas com vitrine: tickets, SDK e arquivo do modelo saem já no init. Com vitrine: true
      // (vitrine desenhada depois por JavaScript), sai na hora; senão, ao achar o data-i6-display.
      if (cfg.vitrine) warm();
      else whenDomReady(function () {
        if (document.querySelector("[data-i6-display]")) warm();
      });
    },
    identify: function (userId) {
      cfg.userId = userId ? String(userId) : null;
    },
    addToCart: function (sku, price) {
      sku = String(sku);
      track("add_to_cart", { sku_id: sku, price: Number(price) || 0 }, displayFor(sku));
      // Intenção de compra: adianta a vitrine do carrinho em segundo plano.
      if (ready()) whenIdle(warm);
    },
    removeFromCart: function (sku, price) {
      sku = String(sku);
      track("remove_from_cart", { sku_id: sku, price: Number(price) || 0 }, displayFor(sku));
    },
    search: function (text) {
      text = String(text || "").trim().slice(0, 100);
      if (text) track("search", { text: text }, null);
    },
    purchase: function (orderId, items) {
      if (!ready() || !orderId || !items || !items.length) return;
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
        var skus = Object.keys(groups[key]).map(function (sku) { return groups[key][sku]; });
        var ev = buildEvent("purchase", { order_id: orderId, skus: skus }, key || null);
        // ID fixo por pedido: recarregar a página de confirmação não duplica a compra.
        ev.id = "purchase-" + orderId + "-" + (key || "organico");
        enqueue(ev);
      });
    },
    // Para enviar a compra pelo servidor (opções avançadas): sessão, cliente e vitrine de cada produto.
    context: function () {
      var displays = {}, all = attributions();
      for (var sku in all) displays[sku] = all[sku].display;
      return { sessionId: sessionId(), userId: cfg.userId, displays: displays };
    },
    recommend: recommend,
    check: check,
    version: VERSION,
  };
  window.i6 = api;
})();
`,Ve=`<?php
// i6-proxy.php — publicado no endereço /i6-proxy (caminho C, e reserva do caminho A).
require __DIR__ . '/../i6-acesso.php'; // ajuste o caminho até o i6-acesso.php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$entrada = file_get_contents('php://input');
if (strlen($entrada) > 65536) { http_response_code(413); exit; }
$pedido = json_decode($entrada, true);
$partes = parse_url(is_array($pedido) ? (string) ($pedido['url'] ?? '') : '');
$host = $partes['host'] ?? '';
$caminho = $partes['path'] ?? '';
$segmentos = explode('/', $caminho);
$ok = ($partes['scheme'] ?? '') === 'https' && !isset($partes['port']) && !isset($partes['user'])
    && !isset($partes['pass']) && str_ends_with($host, '.infinity6.ai')
    && count(array_filter(I6_PERMITIDOS, fn($r) => preg_match($r, $caminho))) > 0
    && rawurldecode($segmentos[4] ?? '') === getenv('I6_DATASET');
if (!$ok) { http_response_code(403); exit; }

try {
    [$token] = i6_acesso();
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(503);
    exit;
}

$corpo = is_string($pedido['body'] ?? null) ? $pedido['body'] : '{}';
$assinatura = i6_assinar_chamada($token, $caminho, $corpo, i6_b64url_dec(getenv('I6_PRIVATE_KEY') ?: ''));
$ch = curl_init('https://' . $host . $caminho);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $corpo,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'X-I6-Signature: ' . $assinatura],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 5,
]);
$resposta = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
curl_close($ch);
if ($status === 401) @unlink(i6_cache(i6_b64url_dec(getenv('I6_TOKEN_ID') ?: '')));
http_response_code($resposta === false ? 502 : $status);
header('Content-Type: application/json');
echo $resposta === false ? '' : $resposta;
`,He=`<?php
// i6-tickets.php — publicado no endereço /i6-tickets (caminhos A e B).
require __DIR__ . '/../i6-acesso.php'; // ajuste o caminho até o i6-acesso.php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$entrada = file_get_contents('php://input');
if (strlen($entrada) > 1024) { http_response_code(413); exit; }
$pedido = json_decode($entrada ?: '{}', true);
$qtd = fn($v, $max) => max(0, min($max, (int) $v));
$eventos = $qtd(is_array($pedido) ? ($pedido['eventos'] ?? 0) : 0, 50);
$vitrine = $qtd(is_array($pedido) ? ($pedido['vitrine'] ?? 0) : 0, 5);

try {
    [$token, $expira] = i6_acesso();
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(503);
    exit;
}
$chave = i6_b64url_dec(getenv('I6_PRIVATE_KEY') ?: '');
$exp = min(time() + I6_TICKET_S, intdiv($expira, 1000));
$ds = rawurlencode(getenv('I6_DATASET'));
$lote = function (string $caminho, int $n) use ($token, $exp, $chave) {
    $saida = [];
    for ($i = 0; $i < $n; $i++) $saida[] = i6_ticket($token, $caminho, $exp, $chave);
    return $saida;
};
header('Content-Type: application/json');
header('Cache-Control: no-store');
echo json_encode([
    'expira' => $exp * 1000,
    'eventos' => $lote("/api/ingest/dataset/$ds/event/relevance-fashion-event/text.txt", $eventos),
    'modelo' => $lote("/api/model/dataset/$ds/signed-get/relevance-fashion-fbt", $vitrine),
    'recomendacao' => $lote("/api/model/dataset/$ds/relevance-fashion-fbt/v1/predict", $vitrine),
]);
`,Ue=`import { emitirTickets } from "@/lib/i6-acesso.mjs";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const texto = await req.text();
  if (texto.length > 1024) return new Response(null, { status: 413 });
  let pedido: { eventos?: unknown; vitrine?: unknown } = {};
  try { pedido = texto ? JSON.parse(texto) : {}; } catch { return new Response(null, { status: 400 }); }
  const r = await emitirTickets(pedido.eventos, pedido.vitrine);
  return r.corpo
    ? Response.json(r.corpo, { headers: { "Cache-Control": "no-store" } })
    : new Response(null, { status: r.status });
}
`,We=`import { chamarI6 } from "@/lib/i6-acesso.mjs";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const texto = await req.text();
  if (texto.length > 65536) return new Response(null, { status: 413 });
  let pedido: { url?: unknown; body?: unknown };
  try { pedido = JSON.parse(texto); } catch { return new Response(null, { status: 400 }); }
  const r = await chamarI6(pedido.url, pedido.body);
  return new Response(r.corpo ?? null, { status: r.status, headers: r.corpo ? { "Content-Type": r.tipo } : {} });
}
`;function B(e){return e.endsWith(`
`)?e.slice(0,-1):e}var Ge={"express.mjs":B(Ie),"i6-acesso.mjs":B(Le),"i6-acesso.php":B(Re),"i6-compra.mjs":B(ze),"i6-events.js":B(Be),"i6-proxy.php":B(Ve),"i6-tickets.php":B(He),"route-tickets.ts":B(Ue),"route.ts":B(We)};function Ke(e){return`file`in e?Ge[e.file]:Fe[e.snippet]}var V=e=>({kind:`p`,key:e}),H=e=>({kind:`h`,key:e}),U=(...e)=>({kind:`list`,items:e.map(e=>({key:e}))}),W=(e,...t)=>({kind:`list`,ordered:!0,start:e,items:t.map(e=>typeof e==`string`?{key:e}:e)}),G=(e,t)=>({kind:`code`,source:{snippet:e},language:t}),K=(e,t)=>({kind:`code`,source:{file:e},language:t,caption:e}),q=(e,t,n)=>({kind:`table`,key:e,columns:t,rows:n}),qe=[`/api/ingest/dataset/{dataset}/event/relevance-fashion-event/text.txt`,`/api/model/dataset/{dataset}/signed-get/relevance-fashion-fbt`,`/api/model/dataset/{dataset}/relevance-fashion-fbt/v1/predict`],Je=[`/api/ingest/dataset/{dataset}/event/relevance-fashion-event/text.txt`,`/api/model/dataset/{dataset}/signed-get/{modelo}`,`/api/model/dataset/{dataset}/{modelo}/{versão}/predict`],J=`step7.practicesTable`,Y=[{id:`overview`,blocks:[V(`overview.p1`),V(`overview.p2`),U(`overview.part1`,`overview.part2`),V(`overview.how`),U(`overview.how1`,`overview.how2`,`overview.how3`,`overview.how4`),V(`overview.steps`),W(1,`overview.step1`,`overview.step2`,`overview.step3`,`overview.step4`,`overview.step5`,`overview.step6`,`overview.step7`)]},{id:`path`,blocks:[V(`path.p1`),q(`path.table`,4,3),V(`path.p2`)]},{id:`before`,blocks:[V(`before.p1`),V(`before.p2`),q(`before.table`,4,5),V(`before.baseUrl`),V(`before.dataset`),V(`before.store`),V(`before.display`),H(`before.tokenTitle`),V(`before.token`),V(`before.permissions`),q(`before.permTable`,3,2),V(`before.both`),V(`before.envFile`),G(`env`,`.env`),V(`before.five`),U(`before.five1`,`before.five2`,`before.five3`,`before.five4`,`before.five5`),H(`before.alsoTitle`),U(`before.also1`,`before.also2`)]},{id:`step2`,blocks:[V(`step2.p1`),q(`step2.routes`,5,2),V(`step2.p2`),V(`step2.p3`),V(`step2.p4`),{kind:`methods`,options:[{id:`node`,labelKey:`step2.node`,blocks:[V(`step2.nodeIntro`),K(`i6-acesso.mjs`,`javascript`),V(`step2.express`),K(`express.mjs`,`javascript`),V(`step2.nextTickets`),K(`route-tickets.ts`,`typescript`),V(`step2.nextProxy`),K(`route.ts`,`typescript`)]},{id:`php`,labelKey:`step2.php`,blocks:[V(`step2.phpIntro`),K(`i6-acesso.php`,`php`),V(`step2.phpTickets`),K(`i6-tickets.php`,`php`),V(`step2.phpProxy`),K(`i6-proxy.php`,`php`)]}]},V(`step2.sandbox`),H(`step2.insideTitle`),V(`step2.inside`),{kind:`diagram`},V(`step2.tickets`),V(`step2.pool`),V(`step2.signed`),H(`step2.otherTitle`),V(`step2.other1`),{kind:`codes`,values:qe},V(`step2.other2`),W(1,`step2.proxy1`,{key:`step2.proxy2`,codes:Je},`step2.proxy3`,`step2.proxy4`,`step2.proxy5`),V(`step2.access`),V(`step2.header`),q(`step2.bytes`,2,5),V(`step2.signedText`),G(`signedText`,`text`),V(`step2.encoding`)]},{id:`step3`,blocks:[V(`step3.p1`),W(1,`step3.l1`,`step3.l2`),G(`script`,`html`),V(`step3.options`),q(`step3.optionsTable`,4,10),V(`step3.pathA`),V(`step3.login`),G(`identity`,`javascript`),V(`step3.loginNote`)]},{id:`step4`,blocks:[V(`step4.p1`),V(`step4.links`),G(`productLink`,`html`),U(`step4.sku`,`step4.price`),V(`step4.where`),V(`step4.showcases`),G(`showcaseMarkup`,`html`),V(`step4.attribution`),V(`step4.keep`)]},{id:`step5`,blocks:[V(`step5.p1`),G(`actions`,`javascript`),q(`step5.calls`,3,4),V(`step5.p2`)]},{id:`step6`,blocks:[V(`step6.p1`),V(`step6.sdk`),U(`step6.auto`,`step6.manual`),G(`sdkTags`,`html`),V(`step6.container`),G(`showcaseContainer`,`html`),V(`step6.ask`),G(`recommend`,`javascript`),q(`step6.rules`,2,4),V(`step6.model`),V(`step6.download`)]},{id:`advanced`,blocks:[V(`advanced.p1`),H(`advanced.purchaseTitle`),V(`advanced.purchase`),W(1,`advanced.purchase1`),G(`context`,`javascript`),W(2,`advanced.purchase2`),K(`i6-compra.mjs`,`javascript`),G(`serverPurchase`,`javascript`),V(`advanced.purchaseRetry`),H(`advanced.domainTitle`),V(`advanced.domain`),H(`advanced.originTitle`),V(`advanced.origin1`),G(`origin`,`javascript`),V(`advanced.origin2`),H(`advanced.cspTitle`),V(`advanced.csp1`),q(`advanced.csp`,3,2),V(`advanced.csp2`),H(`advanced.sdkTitle`),V(`advanced.sdk`)]},{id:`step7`,blocks:[V(`step7.p1`),V(`step7.auto`),U(`step7.auto1`,`step7.auto2`,`step7.auto3`,`step7.auto4`),V(`step7.noEdit`),H(`step7.part1`),V(`step7.sampling`),W(1,`step7.c1`,`step7.c2`,`step7.c3`),G(`checkReport`,`javascript`),V(`step7.c3expected`),W(4,`step7.c4`),V(`step7.practices`),q(J,2,12),V(`step7.timing`),V(`step7.optional`),G(`fallbackTest`,`javascript`),H(`step7.part2`),W(1,`step7.v1`,`step7.v2`,`step7.v3`),V(`step7.privacy`),V(`step7.panel`),{kind:`verify`}]},{id:`problems`,blocks:[V(`problems.p1`),q(`problems.table`,3,19)]},{id:`security`,blocks:[V(`security.p1`),V(`security.ready`),U(`security.s1`,`security.s2`,`security.s3`,`security.s4`,`security.s5`),V(`security.team`)]},{id:`annex`,blocks:[V(`annex.p1`),K(`i6-events.js`,`javascript`),V(`annex.p2`)]}],Ye={before:1,step2:2,step3:3,step4:4,step5:5,step6:6,step7:7},Xe={head:`<head>`,version:`2.4`};function Ze({onOpenVerification:e}){let{t}=u(),[n,r]=O.useState(0),i=e=>t(`discovery.documentation.guide.${e}`,Xe),a=e=>t(`discovery.documentation.${e}`),o=Y[n]??Y[0],s=Y.length,c=e=>i(`${Y[e]?.id}.nav`),l=e=>r(Math.min(s-1,Math.max(0,e)));return(0,k.jsxs)(`div`,{className:`min-w-0 space-y-4`,children:[(0,k.jsx)(`nav`,{"aria-label":a(`steps`),className:`overflow-x-auto px-1 pt-2 pb-2`,children:(0,k.jsx)(`ol`,{className:`flex min-w-[78rem] items-start`,children:Y.map((e,t)=>{let r=t<n,i=t===n,a=Ye[e.id];return(0,k.jsxs)(`li`,{className:`relative flex flex-1 flex-col items-center`,children:[t>0?(0,k.jsx)(`span`,{"aria-hidden":`true`,className:m(`absolute right-1/2 top-[13px] z-0 h-0.5 w-full`,t<=n?`bg-product-accent`:`bg-muted`)}):null,(0,k.jsxs)(p,{variant:`ghost`,onClick:()=>l(t),"aria-current":i?`step`:void 0,className:`relative z-10 flex h-auto w-full min-w-0 flex-col items-center justify-start gap-2 whitespace-normal rounded-xl px-1 py-0 text-center hover:bg-transparent sm:h-auto`,children:[(0,k.jsx)(`span`,{"aria-hidden":`true`,className:m(`flex size-7 min-h-7 min-w-7 shrink-0 items-center justify-center rounded-full border-2 border-card text-xs font-semibold`,i?`bg-product-accent text-product-accent-foreground ring-4 ring-product-accent/20`:r?`bg-product-accent/15 text-product-accent`:`bg-muted text-muted-foreground`),children:r?(0,k.jsx)(g,{className:`size-3.5`}):a??`·`}),(0,k.jsx)(`span`,{className:m(`block w-full text-balance text-xs leading-tight`,i?`font-semibold text-foreground`:`text-muted-foreground`),children:c(t)})]})]},e.id)})})}),(0,k.jsxs)(`article`,{className:`min-w-0 space-y-4`,"aria-live":`polite`,children:[(0,k.jsx)(`p`,{className:`text-xs uppercase tracking-wide text-muted-foreground`,children:t(`discovery.documentation.stepOf`,{current:n+1,total:s})}),(0,k.jsx)(`h3`,{className:`text-base font-semibold`,children:i(`${o.id}.title`)}),(0,k.jsx)(X,{blocks:o.blocks,text:i,...e?{onOpenVerification:e}:{}})]}),(0,k.jsxs)(`div`,{className:`flex justify-between gap-3`,children:[(0,k.jsxs)(p,{variant:`outline`,size:`sm`,disabled:n===0,onClick:()=>l(n-1),children:[(0,k.jsx)(v,{"aria-hidden":`true`}),n>0?c(n-1):a(`previous`)]}),(0,k.jsxs)(p,{size:`sm`,disabled:n===s-1,onClick:()=>l(n+1),children:[n<s-1?t(`discovery.documentation.nextStep`,{step:c(n+1)}):a(`next`),(0,k.jsx)(y,{"aria-hidden":`true`})]})]})]})}function X({blocks:e,text:t,onOpenVerification:n}){let{t:r}=u(),[i,a]=O.useState(null);return(0,k.jsx)(k.Fragment,{children:e.map((e,o)=>{switch(e.kind){case`p`:return(0,k.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:(0,k.jsx)(A,{text:t(e.key)})},o);case`h`:return(0,k.jsx)(`h4`,{className:`pt-2 text-sm font-semibold text-foreground`,children:t(e.key)},o);case`list`:return(0,k.jsx)(Qe,{block:e,text:t},o);case`codes`:return(0,k.jsx)(Z,{values:e.values},o);case`code`:return(0,k.jsx)(ce,{code:Ke(e.source),language:e.language,...e.caption?{label:e.caption}:{},copyLabel:r(`discovery.integrations.quickstart.copy`),copiedLabel:r(`discovery.integrations.quickstart.copied`)},o);case`table`:return(0,k.jsx)(Q,{block:e,text:t},o);case`diagram`:return(0,k.jsx)($e,{text:t},o);case`verify`:return n?(0,k.jsx)(`div`,{children:(0,k.jsxs)(p,{size:`sm`,variant:`outline`,onClick:n,children:[(0,k.jsx)(T,{"aria-hidden":`true`}),t(`step7.openVerification`)]})},o):null;case`methods`:{let n=e.options.find(e=>e.id===i)??e.options[0];return(0,k.jsxs)(`div`,{className:`min-w-0 space-y-4`,children:[(0,k.jsx)(se,{options:e.options.map(e=>({value:e.id,label:t(e.labelKey)})),value:n.id,onValueChange:a,ariaLabel:r(`discovery.integrations.setup.method`),size:`sm`}),(0,k.jsx)(X,{blocks:n.blocks,text:t})]},o)}}})})}function Z({values:e}){return(0,k.jsx)(`ul`,{className:`min-w-0 space-y-1 rounded-2xl border border-border/60 bg-muted/40 p-3`,children:e.map(e=>(0,k.jsx)(`li`,{className:`font-mono text-xs wrap-anywhere text-foreground`,children:e},e))})}function Qe({block:e,text:t}){let n=e.items.map(e=>(0,k.jsxs)(`li`,{className:`space-y-2 pl-1`,children:[(0,k.jsx)(A,{text:t(e.key)}),e.items?(0,k.jsx)(`ol`,{className:`mt-1 list-[lower-alpha] space-y-1 pl-5`,children:e.items.map(e=>(0,k.jsx)(`li`,{className:`pl-1`,children:(0,k.jsx)(A,{text:t(e)})},e))}):null,e.codes?(0,k.jsx)(Z,{values:e.codes}):null]},e.key)),r=`min-w-0 space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground`;return e.ordered?(0,k.jsx)(`ol`,{start:e.start,className:m(`list-decimal`,r),children:n}):(0,k.jsx)(`ul`,{className:m(`list-disc`,r),children:n})}function Q({block:e,text:t}){let n=Array.from({length:e.rows},(n,r)=>({id:String(r),cells:Array.from({length:e.columns},(n,i)=>t(`${e.key}.r${r}.c${i}`))}));return(0,k.jsx)(x,{label:t(`${e.key}.label`),density:`compact`,columns:Array.from({length:e.columns},(n,r)=>({id:`c${r}`,header:t(`${e.key}.h${r}`),accessor:e=>e.cells[r],render:e=>(0,k.jsx)(A,{text:e.cells[r]??``})})),rows:n,getRowId:e=>e.id})}function $e({text:e}){let t=(t,n=!1,r=!1)=>(0,k.jsxs)(`div`,{className:m(`min-w-0 rounded-xl border bg-card px-3 py-2 text-center`,n?`border-dashed border-border`:`border-border/70`,r&&`border-product-accent/40 bg-product-accent/5`),children:[(0,k.jsx)(`p`,{className:`text-xs font-semibold text-foreground`,children:e(`step2.diagram.${t}`)}),(0,k.jsx)(`p`,{className:`text-2xs text-muted-foreground`,children:e(`step2.diagram.${t}Detail`)})]}),n=t=>(0,k.jsxs)(`p`,{className:`flex items-center gap-1 text-2xs text-muted-foreground`,children:[(0,k.jsx)(y,{"aria-hidden":`true`,className:`hidden size-3 shrink-0 sm:block`}),(0,k.jsx)(_,{"aria-hidden":`true`,className:`size-3 shrink-0 sm:hidden`}),e(`step2.diagram.${t}`)]});return(0,k.jsxs)(`figure`,{className:`min-w-0 space-y-3 rounded-2xl border border-border/60 bg-surface-soft p-4`,children:[(0,k.jsx)(`p`,{className:`text-sm font-semibold text-foreground`,children:e(`step2.diagram.title`)}),(0,k.jsxs)(`div`,{className:`grid min-w-0 gap-4 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:items-center`,children:[t(`browser`),(0,k.jsxs)(`div`,{className:`min-w-0 space-y-3`,children:[(0,k.jsxs)(`div`,{className:`grid min-w-0 gap-2 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)_minmax(0,1fr)] sm:items-center`,children:[n(`askTickets`),t(`ticketsRoute`,!1,!0),t(`renewal`)]}),(0,k.jsxs)(`div`,{className:`grid min-w-0 gap-2 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] sm:items-start`,children:[n(`directCalls`),(0,k.jsxs)(`div`,{className:`grid min-w-0 gap-2 sm:grid-cols-3`,children:[t(`events`),t(`recommendation`),t(`modelFile`)]})]}),(0,k.jsxs)(`div`,{className:`grid min-w-0 gap-2 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] sm:items-center`,children:[n(`ifDirectFails`),t(`proxy`,!0)]})]})]}),(0,k.jsx)(`figcaption`,{className:`text-xs text-muted-foreground`,children:e(`step2.diagram.caption`)})]})}var $={head:`<head>`,version:`2.4`};function et(){let{t:e,format:t}=u(),{params:n}=te(),r=ee(n),[i,a]=O.useState(``),[o,s]=O.useState(null),c=t=>e(`discovery.documentation.check.${t}`,$),l=t=>e(`discovery.documentation.guide.${t}`,$),d=()=>{if(!r)return;let e=De(i);e?Oe(e,r)?s({kind:`ok`,report:e,rules:je(e)}):s({kind:`other-store`}):s({kind:`invalid`})},f=o?.kind===`ok`?o.rules.filter(e=>e.status===`failed`).length:0,m=o?.kind===`ok`&&o.rules.every(e=>e.status===`passed`);return(0,k.jsxs)(`div`,{className:`min-w-0 space-y-4`,children:[(0,k.jsxs)(`div`,{className:`space-y-1`,children:[(0,k.jsx)(`h3`,{className:`text-base font-semibold`,children:c(`title`)}),(0,k.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:(0,k.jsx)(A,{text:c(`intro`)})}),r?(0,k.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[c(`context`),` `,(0,k.jsx)(`span`,{className:`font-medium text-foreground wrap-anywhere`,children:r.store}),` ·`,` `,c(`dataset`),` `,(0,k.jsx)(`span`,{className:`font-medium text-foreground wrap-anywhere`,children:r.dataset})]}):null]}),r?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ge,{label:c(`field`),hint:c(`privacy`),children:e=>(0,k.jsx)(re,{...e,value:i,onChange:e=>{a(e.target.value),s(null)},rows:4,autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`off`,spellCheck:!1,placeholder:`i6chk1.…`,className:`font-mono text-xs`})}),(0,k.jsxs)(p,{size:`sm`,onClick:d,disabled:i.trim()===``,children:[(0,k.jsx)(le,{"aria-hidden":`true`}),c(`verify`)]})]}):(0,k.jsx)(w,{variant:`info`,children:(0,k.jsx)(S,{children:c(`noContext`)})}),o?.kind===`invalid`?(0,k.jsxs)(w,{variant:`destructive`,children:[(0,k.jsx)(C,{children:c(`invalid`)}),(0,k.jsx)(S,{children:(0,k.jsx)(A,{text:l(`problems.table.r14.c2`)})})]}):null,o?.kind===`other-store`?(0,k.jsxs)(w,{variant:`warning`,children:[(0,k.jsx)(C,{children:c(`otherStore`)}),(0,k.jsx)(S,{children:(0,k.jsx)(A,{text:l(`problems.table.r15.c2`)})})]}):null,o?.kind===`ok`?(0,k.jsxs)(`section`,{"aria-label":c(`result`),className:`min-w-0 space-y-4`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-border/60 bg-surface-soft p-4`,children:[(0,k.jsxs)(`dl`,{className:`grid min-w-0 gap-x-6 gap-y-1 text-sm sm:grid-cols-3`,children:[(0,k.jsxs)(`div`,{className:`min-w-0`,children:[(0,k.jsx)(`dt`,{className:`text-xs text-muted-foreground`,children:c(`site`)}),(0,k.jsx)(`dd`,{className:`font-medium wrap-anywhere`,children:o.report.site?o.report.site:(0,k.jsx)(ye,{label:e(`discovery.analytics.metric.missing`)})})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{className:`text-xs text-muted-foreground`,children:c(`testedAt`)}),(0,k.jsx)(`dd`,{className:`font-medium`,children:t.dateTime(Pe(o.report))})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{className:`text-xs text-muted-foreground`,children:c(`path`)}),(0,k.jsx)(`dd`,{className:`font-medium`,children:c(`path${o.report.caminho}`)})]})]}),(0,k.jsx)(h,{variant:m?`success`:`warning`,children:m?c(`verified`):e(`discovery.documentation.check.toFix`,{count:f})})]}),(0,k.jsx)(`ul`,{className:`divide-y divide-border/60 rounded-2xl border border-border/60`,children:o.rules.map(t=>(0,k.jsxs)(`li`,{className:`flex min-w-0 gap-3 px-4 py-3`,children:[t.status===`passed`?(0,k.jsx)(oe,{"aria-hidden":`true`,className:`mt-0.5 size-4 shrink-0 text-success`}):t.status===`failed`?(0,k.jsx)(ve,{"aria-hidden":`true`,className:`mt-0.5 size-4 shrink-0 text-destructive`}):(0,k.jsx)(Se,{"aria-hidden":`true`,className:`mt-0.5 size-4 shrink-0 text-muted-foreground`}),(0,k.jsxs)(`div`,{className:`min-w-0 space-y-1 text-sm`,children:[(0,k.jsxs)(`p`,{className:`text-foreground`,children:[(0,k.jsxs)(`span`,{className:`sr-only`,children:[c(t.status===`passed`?`passed`:t.status===`failed`?`failed`:`dependentStatus`),`:`,` `]}),(0,k.jsx)(A,{text:e(`discovery.documentation.check.rule.${t.id}`,{...$,path:o.report.caminho})})]}),t.status===`failed`?(0,k.jsxs)(`p`,{className:`text-xs leading-relaxed text-muted-foreground`,children:[(0,k.jsx)(`span`,{className:`font-medium text-foreground`,children:c(`howToPass`)}),` `,(0,k.jsx)(A,{text:t.reason?c(`shownFix.${t.reason}`):l(`${J}.r${t.practice}.c1`)})]}):null,t.status===`dependent`?(0,k.jsx)(`p`,{className:`text-xs leading-relaxed text-muted-foreground`,children:c(t.on===`shown`?`dependentOnShown`:`dependent`)}):null]})]},t.id))}),(0,k.jsxs)(`div`,{className:`rounded-2xl border border-border/60 p-4`,children:[(0,k.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:c(`seenTitle`)}),(0,k.jsx)(`ul`,{"aria-label":c(`seenTitle`),className:`mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2`,children:Ne(o.report).map(e=>(0,k.jsxs)(`li`,{className:`flex min-w-0 items-baseline justify-between gap-3 text-xs`,children:[(0,k.jsx)(`span`,{className:`min-w-0 text-muted-foreground`,children:(0,k.jsx)(A,{text:c(`seen.${e.id}`)})}),(0,k.jsx)(`span`,{className:`shrink-0 font-medium text-foreground`,children:c(e.seen?`seenYes`:`seenNo`)})]},e.id))})]}),(0,k.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:[(0,k.jsxs)(`div`,{className:`rounded-2xl border border-border/60 p-4`,children:[(0,k.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:c(`timings`)}),o.report.recomendacoes.length?(0,k.jsx)(`ul`,{className:`mt-2 space-y-1 text-xs text-muted-foreground`,children:o.report.recomendacoes.map((n,r)=>(0,k.jsx)(`li`,{children:e(`discovery.documentation.check.timing`,{ms:t.number(n.ms),result:c(`reason.${n.r}`)})},r))}):(0,k.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:c(`noTimings`)})]}),(0,k.jsxs)(`div`,{className:`rounded-2xl border border-border/60 p-4`,children:[(0,k.jsx)(`p`,{className:`text-xs font-medium text-foreground`,children:c(`deliveries`)}),(0,k.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:e(`discovery.documentation.check.deliveriesValue`,{ticket:t.number(o.report.jornada.entregas.ticket),rota:t.number(o.report.jornada.entregas.rota)})})]})]})]}):null]})}function tt({references:e,t,formatDate:n,previewOnly:r=!1}){let[i,a]=O.useState(null),o=O.useMemo(()=>{if(r||!i?.mediaUrl)return null;let e=be.safeParse(i.mediaUrl);return e.success?e.data:null},[i,r]),s=O.useMemo(()=>[{id:`kind`,header:t(`discovery.integrations.docs.columns.type`),accessor:e=>e.kind,width:`9rem`,sortable:!0,render:e=>(0,k.jsx)(h,{variant:`outline`,size:`sm`,children:t(`discovery.integrations.docs.kind.${e.kind}`)})},{id:`label`,header:t(`discovery.integrations.docs.columns.name`),accessor:e=>e.label,sortable:!0,render:e=>(0,k.jsx)(`span`,{className:`text-sm text-foreground`,children:e.label})},{id:`description`,header:t(`discovery.integrations.docs.columns.description`),accessor:e=>e.description??``,hideBelow:`lg`,render:e=>(0,k.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e.description??``})},{id:`updatedAt`,header:t(`discovery.integrations.docs.columns.updated`),accessor:e=>e.updatedAt??``,width:`11rem`,sortable:!0,hideBelow:`md`,render:e=>(0,k.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e.updatedAt?n(e.updatedAt):t(`discovery.integrations.docs.noDate`)})},{id:`access`,header:t(`discovery.integrations.docs.columns.link`),accessor:e=>e.id,align:`end`,width:`10rem`,render:e=>e.kind===`video`?(0,k.jsxs)(p,{type:`button`,variant:`outline`,size:`sm`,onClick:()=>a(e),"aria-label":`${t(`discovery.integrations.docs.watch`)}: ${e.label}`,children:[(0,k.jsx)(ie,{"aria-hidden":`true`}),t(`discovery.integrations.docs.watch`)]}):e.url?(0,k.jsx)(p,{asChild:!0,variant:`ghost`,size:`sm`,children:(0,k.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,"aria-label":`${t(`discovery.integrations.docs.open`)}: ${e.label}`,children:[(0,k.jsx)(E,{"aria-hidden":`true`}),t(`discovery.integrations.docs.open`)]})}):null}],[t,n]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x,{label:t(`discovery.integrations.docs.title`),columns:s,rows:e,getRowId:e=>e.id,density:`compact`}),(0,k.jsx)(_e,{open:i!==null,onOpenChange:e=>{e||a(null)},children:(0,k.jsxs)(fe,{className:`max-w-3xl`,children:[(0,k.jsxs)(ae,{children:[(0,k.jsx)(pe,{children:i?.label??``}),i?.description?(0,k.jsx)(he,{children:i.description}):null]}),o?(0,k.jsx)(`video`,{src:o,controls:!0,preload:`metadata`,playsInline:!0,controlsList:`nodownload`,className:`w-full rounded-xl bg-muted`,children:t(`discovery.integrations.docs.videoUnsupported`)},o):(0,k.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:t(r?`discovery.documentation.videoPending`:`discovery.integrations.docs.videoUnsupported`)}),r&&i?.url?(0,k.jsx)(p,{asChild:!0,variant:`link`,size:`sm`,children:(0,k.jsxs)(`a`,{href:i.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,k.jsx)(E,{"aria-hidden":`true`}),t(`discovery.documentation.portal`)]})}):null]})})]})}var nt=[{id:`events`,icon:D},{id:`verification`,icon:T},{id:`references`,icon:ne}];function rt(){let{t:e,format:t}=u(),n=d(),[r,i]=O.useState(`events`),a=t=>e(`discovery.documentation.${t}`),o=O.useMemo(()=>ue(e),[e]),s=O.useCallback(()=>{i(`verification`),requestAnimationFrame(()=>document.getElementById(`documentation-detail`)?.scrollIntoView({block:`start`}))},[]);return(0,k.jsxs)(`section`,{className:`flex min-w-0 flex-col gap-4`,children:[(0,k.jsxs)(`header`,{className:`flex flex-wrap items-baseline gap-x-3 gap-y-1`,children:[(0,k.jsx)(`h2`,{className:`text-xl font-semibold`,children:a(`title`)}),(0,k.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:a(`subtitle`)})]}),(0,k.jsxs)(`div`,{className:`min-w-0`,children:[(0,k.jsx)(`div`,{"aria-label":a(`themes`),className:`relative z-10 mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3`,children:nt.map(({id:e,icon:t})=>{let n=r===e;return(0,k.jsxs)(p,{variant:`ghost`,"aria-pressed":n,"aria-controls":`documentation-detail`,onClick:()=>i(e),className:m(`relative h-auto min-h-40 min-w-0 flex-col items-start justify-start gap-2 whitespace-normal rounded-2xl border border-border/60 bg-background p-4 text-left shadow-ds-sm active:scale-100 motion-reduce:transition-none disabled:opacity-100`,n&&`border-product-accent/30 bg-card hover:bg-card sm:rounded-b-none sm:border-b-0 sm:after:absolute sm:after:inset-x-[-1px] sm:after:top-full sm:after:h-[calc(1rem+1px)] sm:after:border-x sm:after:border-product-accent/30 sm:after:bg-card sm:after:content-['']`),children:[(0,k.jsx)(t,{"aria-hidden":`true`}),(0,k.jsx)(`span`,{className:`text-sm font-semibold`,children:a(e)}),(0,k.jsx)(`span`,{className:`text-xs leading-relaxed text-muted-foreground`,children:a(`${e}Body`)}),(0,k.jsxs)(`span`,{className:`mt-auto flex w-full flex-wrap items-center justify-between gap-2`,children:[(0,k.jsx)(h,{variant:e===`references`?`muted`:`success`,size:`sm`,children:a(e===`references`?`preparing`:`available`)}),(0,k.jsx)(`span`,{className:m(`text-xs`,n?`text-product-accent`:`text-muted-foreground`),children:a(n?`selected`:`select`)})]})]},e)})}),(0,k.jsxs)(xe,{id:`documentation-detail`,className:m(`min-w-0 border-product-accent/30 p-4 sm:p-5`,r===`events`&&`sm:rounded-tl-none`,r===`references`&&`sm:rounded-tr-none`),children:[(0,k.jsxs)(`p`,{className:`mb-4 text-xs text-muted-foreground`,children:[a(`title`),` › `,(0,k.jsx)(`span`,{className:`font-medium text-foreground`,children:a(r)})]}),r===`events`?(0,k.jsx)(Ze,{onOpenVerification:s}):r===`verification`?(0,k.jsx)(et,{}):(0,k.jsxs)(`div`,{className:`min-w-0 space-y-4`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,k.jsx)(`h3`,{className:`text-base font-semibold`,children:a(`refsTitle`)}),(0,k.jsx)(h,{variant:`muted`,size:`sm`,children:a(`portalPending`)})]}),(0,k.jsx)(tt,{references:o,t:e,formatDate:e=>t.date(new Date(e)),previewOnly:!0}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,k.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`builders.infinity6.ai`}),(0,k.jsx)(p,{asChild:!0,variant:`link`,size:`sm`,children:(0,k.jsxs)(`a`,{href:me,target:`_blank`,rel:`noopener noreferrer`,children:[a(`portal`),(0,k.jsx)(E,{"aria-hidden":`true`})]})})]})]})]})]}),(0,k.jsxs)(`footer`,{className:`flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-surface-soft px-4 py-3`,children:[(0,k.jsx)(b,{"aria-hidden":`true`,className:`size-4 text-muted-foreground`}),(0,k.jsxs)(`p`,{className:`min-w-0 flex-1 text-sm`,children:[(0,k.jsx)(`span`,{className:`font-medium`,children:a(`help`)}),` `,(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:a(`general`)})]}),(0,k.jsxs)(p,{variant:`outline`,size:`sm`,disabled:!n,onClick:()=>n?.openSupport({context:de}),children:[(0,k.jsx)(b,{"aria-hidden":`true`}),a(`support`)]})]})]})}export{rt as DiscoveryDocumentationSection};