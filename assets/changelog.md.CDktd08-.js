import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"changelog.md","filePath":"changelog.md","lastUpdated":1777816303000}');
const _sfc_main = { name: "changelog.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to “更新日志”">​</a></h1><h2 id="_2026-05" tabindex="-1">2026-05 <a class="header-anchor" href="#_2026-05" aria-label="Permalink to “2026-05”">​</a></h2><ul><li>修复个人设置“邮件”页切换后可能卡死的问题。</li><li>补充邮件设置页说明：标签管理、白名单管理、签名管理、图床设置、自动回复和邮箱级覆盖。</li><li>自动回复支持回复范围、开始时间、结束时间，以及邮箱级覆盖清空。</li><li>补充发件方 SPF / DKIM / DMARC 认证提示说明。</li><li>补充新增域名和客户端 TLS 证书使用说明。</li><li>更新仓库 README，明确服务入口、在线文档和适用用户。</li><li>添加 GitHub Pages 发布。</li></ul>', 3)
  ])]);
}
const changelog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  changelog as default
};
