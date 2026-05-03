import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"API 总览","description":"","frontmatter":{},"headers":[],"relativePath":"api/index.md","filePath":"api/index.md","lastUpdated":1777781533000}');
const _sfc_main = { name: "api/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="api-总览" tabindex="-1">API 总览 <a class="header-anchor" href="#api-总览" aria-label="Permalink to “API 总览”">​</a></h1><p>NodeMail 提供 Web 前端使用的 HTTP API。</p><p>默认前缀：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/api/v1</span></span></code></pre></div><h2 id="认证方式" tabindex="-1">认证方式 <a class="header-anchor" href="#认证方式" aria-label="Permalink to “认证方式”">​</a></h2><p>浏览器端使用 HttpOnly Cookie 保存登录态。</p><p>开发者 API 可使用 API Key，具体权限以后台配置为准。</p><h2 id="常见资源" tabindex="-1">常见资源 <a class="header-anchor" href="#常见资源" aria-label="Permalink to “常见资源”">​</a></h2><ul><li>Auth</li><li>Mailboxes</li><li>Mails</li><li>Attachments</li><li>Contacts</li><li>Rules</li><li>Tickets</li><li>Admin</li></ul><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>本文档只描述公开使用方式，不包含生产密钥、内部部署脚本或私有源码。</p></div>', 10)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
