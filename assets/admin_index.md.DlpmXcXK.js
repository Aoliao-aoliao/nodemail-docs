import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"管理员指南","description":"","frontmatter":{},"headers":[],"relativePath":"admin/index.md","filePath":"admin/index.md","lastUpdated":1777781533000}');
const _sfc_main = { name: "admin/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="管理员指南" tabindex="-1">管理员指南 <a class="header-anchor" href="#管理员指南" aria-label="Permalink to “管理员指南”">​</a></h1><p>管理员后台用于配置系统核心能力。</p><h2 id="常用模块" tabindex="-1">常用模块 <a class="header-anchor" href="#常用模块" aria-label="Permalink to “常用模块”">​</a></h2><ul><li>用户管理</li><li>邮箱管理</li><li>域名管理</li><li>DNS 健康检查</li><li>出站发信通道</li><li>临时发信申请</li><li>全局黑名单</li><li>工单管理</li><li>系统设置</li></ul><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to “推荐顺序”">​</a></h2><p>首次部署后建议按顺序检查：</p><ol><li>添加域名</li><li>生成 DKIM</li><li>设置 DNS</li><li>检查 PTR/rDNS</li><li>设置默认域名</li><li>配置发信限制</li><li>开放用户注册或第三方登录</li></ol><h2 id="管理员邮箱" tabindex="-1">管理员邮箱 <a class="header-anchor" href="#管理员邮箱" aria-label="Permalink to “管理员邮箱”">​</a></h2><p>普通用户不能创建系统保留邮箱名前缀。管理员可以创建：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>admin@example.com</span></span>\n<span class="line"><span>postmaster@example.com</span></span>\n<span class="line"><span>abuse@example.com</span></span>\n<span class="line"><span>security@example.com</span></span></code></pre></div><p>这些邮箱建议由管理员持有。</p>', 11)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
