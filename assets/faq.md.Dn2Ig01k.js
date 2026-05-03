import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"faq.md","filePath":"faq.md","lastUpdated":1777781533000}');
const _sfc_main = { name: "faq.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to “常见问题”">​</a></h1><h2 id="这个文档站会公开源码吗" tabindex="-1">这个文档站会公开源码吗？ <a class="header-anchor" href="#这个文档站会公开源码吗" aria-label="Permalink to “这个文档站会公开源码吗？”">​</a></h2><p>不会。文档站只公开介绍、使用指南和 API 说明，不包含 NodeMail 主程序源码。</p><h2 id="谁可以使用-nodemail" tabindex="-1">谁可以使用 NodeMail？ <a class="header-anchor" href="#谁可以使用-nodemail" aria-label="Permalink to “谁可以使用 NodeMail？”">​</a></h2><p>NodeMail 当前主要面向 NodeLoc 黄金会员及以上用户开放。实际开放范围以服务端规则和管理员审核为准。</p><h2 id="怎么登录" tabindex="-1">怎么登录？ <a class="header-anchor" href="#怎么登录" aria-label="Permalink to “怎么登录？”">​</a></h2><p>访问 <code>https://to9.us/login</code>，使用 NodeLoc 第三方登录完成授权。</p><h2 id="cloudflare-可以当发信通道吗" tabindex="-1">Cloudflare 可以当发信通道吗？ <a class="header-anchor" href="#cloudflare-可以当发信通道吗" aria-label="Permalink to “Cloudflare 可以当发信通道吗？”">​</a></h2><p>Cloudflare Email Routing 主要用于收信转发，不是标准 SMTP 发信中继。发信通道建议使用专业 SMTP 服务。</p><h2 id="为什么-gmail-会进垃圾箱" tabindex="-1">为什么 Gmail 会进垃圾箱？ <a class="header-anchor" href="#为什么-gmail-会进垃圾箱" aria-label="Permalink to “为什么 Gmail 会进垃圾箱？”">​</a></h2><p>常见原因包括 PTR 未生效、IP 信誉不足、域名过新、内容过短、SPF/DKIM/DMARC 不完整。</p><h2 id="ptr-在哪里设置" tabindex="-1">PTR 在哪里设置？ <a class="header-anchor" href="#ptr-在哪里设置" aria-label="Permalink to “PTR 在哪里设置？”">​</a></h2><p>PTR/rDNS 在服务器供应商面板设置，不在 Cloudflare DNS 里设置。</p><h2 id="管理员可以创建-admin-邮箱吗" tabindex="-1">管理员可以创建 admin 邮箱吗？ <a class="header-anchor" href="#管理员可以创建-admin-邮箱吗" aria-label="Permalink to “管理员可以创建 admin 邮箱吗？”">​</a></h2><p>可以。普通用户不能创建系统保留前缀，管理员可以创建。</p>', 15)
  ])]);
}
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  faq as default
};
