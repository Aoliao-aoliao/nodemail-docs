import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"域名管理","description":"","frontmatter":{},"headers":[],"relativePath":"admin/domains.md","filePath":"admin/domains.md","lastUpdated":1777781533000}');
const _sfc_main = { name: "admin/domains.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="域名管理" tabindex="-1">域名管理 <a class="header-anchor" href="#域名管理" aria-label="Permalink to “域名管理”">​</a></h1><p>域名管理用于添加收信域名、生成 DKIM、检查 DNS 状态。</p><h2 id="添加域名" tabindex="-1">添加域名 <a class="header-anchor" href="#添加域名" aria-label="Permalink to “添加域名”">​</a></h2><p>添加域名后，系统会给出推荐 DNS 记录。</p><p>建议先添加：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>example.com</span></span></code></pre></div><p>然后配置：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>MX -&gt; mail.example.com</span></span>\n<span class="line"><span>SPF</span></span>\n<span class="line"><span>DKIM</span></span>\n<span class="line"><span>DMARC</span></span></code></pre></div><h2 id="dns-健康检查" tabindex="-1">DNS 健康检查 <a class="header-anchor" href="#dns-健康检查" aria-label="Permalink to “DNS 健康检查”">​</a></h2><p>DNS 健康检查会验证：</p><ul><li>MX 是否正确</li><li>SPF 是否存在</li><li>DKIM 是否匹配</li><li>DMARC 是否存在</li></ul><p>DNS 解析有缓存，修改后可能需要等待几分钟到数小时。</p><h2 id="禁止发信" tabindex="-1">禁止发信 <a class="header-anchor" href="#禁止发信" aria-label="Permalink to “禁止发信”">​</a></h2><p>当域名 PTR 未稳定、信誉未恢复或被黑名单影响时，可以临时禁止该域名发信。</p><p>用户需要申请临时发信权限，管理员审批后才可发送。</p>', 15)
  ])]);
}
const domains = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  domains as default
};
