import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"邮箱管理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mailboxes.md","filePath":"guide/mailboxes.md","lastUpdated":0}');
const _sfc_main = { name: "guide/mailboxes.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="邮箱管理" tabindex="-1">邮箱管理 <a class="header-anchor" href="#邮箱管理" aria-label="Permalink to “邮箱管理”">​</a></h1><p>邮箱管理页面用于创建和维护自己的邮箱地址。</p><h2 id="创建邮箱" tabindex="-1">创建邮箱 <a class="header-anchor" href="#创建邮箱" aria-label="Permalink to “创建邮箱”">​</a></h2><p>进入“邮箱管理”，输入邮箱名前缀并选择域名，然后点击创建。</p><p>普通用户不能创建系统保留前缀，例如：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>admin</span></span>\n<span class="line"><span>root</span></span>\n<span class="line"><span>postmaster</span></span>\n<span class="line"><span>security</span></span>\n<span class="line"><span>abuse</span></span></code></pre></div><p>如果创建成功，邮箱会出现在列表中，可以立即用于收信。</p><h2 id="显示名称" tabindex="-1">显示名称 <a class="header-anchor" href="#显示名称" aria-label="Permalink to “显示名称”">​</a></h2><p>你可以为邮箱设置显示名称。发信时，收件人会更容易识别这封邮件来自谁。</p><h2 id="转发设置" tabindex="-1">转发设置 <a class="header-anchor" href="#转发设置" aria-label="Permalink to “转发设置”">​</a></h2><p>邮箱可以设置转发地址。开启后，新邮件可以转发到你指定的外部邮箱。</p><h2 id="自动回复" tabindex="-1">自动回复 <a class="header-anchor" href="#自动回复" aria-label="Permalink to “自动回复”">​</a></h2><p>你可以为邮箱单独设置自动回复内容。适合临时离线、假期或需要统一回复的场景。</p><h2 id="邮箱共享" tabindex="-1">邮箱共享 <a class="header-anchor" href="#邮箱共享" aria-label="Permalink to “邮箱共享”">​</a></h2><p>如果需要让其他用户协助查看某个邮箱，可以使用“邮箱共享”功能。共享时请只授权给可信用户。</p><h2 id="邮箱转让" tabindex="-1">邮箱转让 <a class="header-anchor" href="#邮箱转让" aria-label="Permalink to “邮箱转让”">​</a></h2><p>邮箱转让用于把邮箱移交给其他用户。转让前请确认收件人身份，避免误操作。</p>', 17)
  ])]);
}
const mailboxes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  mailboxes as default
};
