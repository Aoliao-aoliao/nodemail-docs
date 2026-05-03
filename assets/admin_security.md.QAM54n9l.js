import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"安全策略","description":"","frontmatter":{},"headers":[],"relativePath":"admin/security.md","filePath":"admin/security.md","lastUpdated":1777781533000}');
const _sfc_main = { name: "admin/security.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="安全策略" tabindex="-1">安全策略 <a class="header-anchor" href="#安全策略" aria-label="Permalink to “安全策略”">​</a></h1><h2 id="登录安全" tabindex="-1">登录安全 <a class="header-anchor" href="#登录安全" aria-label="Permalink to “登录安全”">​</a></h2><p>NodeMail 支持：</p><ul><li>HttpOnly Cookie 会话</li><li>Access Token 短期有效</li><li>Refresh Token 自动续期</li><li>登录历史</li><li>2FA 状态管理</li></ul><h2 id="邮箱名前缀保护" tabindex="-1">邮箱名前缀保护 <a class="header-anchor" href="#邮箱名前缀保护" aria-label="Permalink to “邮箱名前缀保护”">​</a></h2><p>系统保留管理类邮箱前缀，防止用户冒充系统身份。</p><h2 id="黑名单" tabindex="-1">黑名单 <a class="header-anchor" href="#黑名单" aria-label="Permalink to “黑名单”">​</a></h2><p>全局黑名单可用于限制：</p><ul><li>IP</li><li>发件域名</li><li>发件邮箱</li></ul><h2 id="发信限制" tabindex="-1">发信限制 <a class="header-anchor" href="#发信限制" aria-label="Permalink to “发信限制”">​</a></h2><p>建议开启：</p><ul><li>每日发信上限</li><li>新用户更低额度</li><li>临时发信审批</li><li>附件大小限制</li><li>异常用户禁用</li></ul><h2 id="工单管理" tabindex="-1">工单管理 <a class="header-anchor" href="#工单管理" aria-label="Permalink to “工单管理”">​</a></h2><p>管理员可以处理、回复、关闭和删除工单。</p>', 14)
  ])]);
}
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  security as default
};
