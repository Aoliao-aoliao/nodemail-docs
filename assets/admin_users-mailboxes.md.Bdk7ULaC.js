import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"用户与邮箱","description":"","frontmatter":{},"headers":[],"relativePath":"admin/users-mailboxes.md","filePath":"admin/users-mailboxes.md","lastUpdated":1777781533000}');
const _sfc_main = { name: "admin/users-mailboxes.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="用户与邮箱" tabindex="-1">用户与邮箱 <a class="header-anchor" href="#用户与邮箱" aria-label="Permalink to “用户与邮箱”">​</a></h1><h2 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to “用户管理”">​</a></h2><p>管理员可以：</p><ul><li>启用或禁用用户</li><li>调整用户等级</li><li>设置邮箱数量上限</li><li>设置每日发信上限</li><li>重置密码或 2FA</li><li>强制用户退出登录</li></ul><h2 id="邮箱管理" tabindex="-1">邮箱管理 <a class="header-anchor" href="#邮箱管理" aria-label="Permalink to “邮箱管理”">​</a></h2><p>邮箱可配置：</p><ul><li>显示名</li><li>收信状态</li><li>协议状态</li><li>转发地址</li><li>归档状态</li></ul><h2 id="保留邮箱名前缀" tabindex="-1">保留邮箱名前缀 <a class="header-anchor" href="#保留邮箱名前缀" aria-label="Permalink to “保留邮箱名前缀”">​</a></h2><p>系统会保留常见管理邮箱名：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>admin</span></span>\n<span class="line"><span>root</span></span>\n<span class="line"><span>postmaster</span></span>\n<span class="line"><span>abuse</span></span>\n<span class="line"><span>security</span></span>\n<span class="line"><span>support</span></span>\n<span class="line"><span>webmaster</span></span></code></pre></div><p>普通用户不能注册，管理员可以创建。</p>', 11)
  ])]);
}
const usersMailboxes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  usersMailboxes as default
};
