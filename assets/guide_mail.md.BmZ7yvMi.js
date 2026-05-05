import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"收发邮件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mail.md","filePath":"guide/mail.md","lastUpdated":1777816303000}');
const _sfc_main = { name: "guide/mail.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="收发邮件" tabindex="-1">收发邮件 <a class="header-anchor" href="#收发邮件" aria-label="Permalink to “收发邮件”">​</a></h1><p>NodeMail 的主界面就是邮箱列表和邮件阅读区。登录后默认进入收件箱。</p><h2 id="邮件文件夹" tabindex="-1">邮件文件夹 <a class="header-anchor" href="#邮件文件夹" aria-label="Permalink to “邮件文件夹”">​</a></h2><p>左侧可以切换常用文件夹：</p><ul><li>收件箱</li><li>星标邮件</li><li>草稿箱</li><li>已发送</li><li>已归档</li><li>稍后提醒</li><li>已删除</li><li>垃圾邮件</li></ul><p>你也可以创建自定义文件夹和标签，用来整理邮件。</p><h2 id="阅读邮件" tabindex="-1">阅读邮件 <a class="header-anchor" href="#阅读邮件" aria-label="Permalink to “阅读邮件”">​</a></h2><p>点击邮件列表里的邮件即可查看正文、发件人、收件人、时间和附件。工具栏支持常用操作，例如归档、删除、标星、标记垃圾邮件、移动到文件夹等。</p><h2 id="发件方认证提示" tabindex="-1">发件方认证提示 <a class="header-anchor" href="#发件方认证提示" aria-label="Permalink to “发件方认证提示”">​</a></h2><p>邮件详情页会显示发件方认证状态，用来辅助判断来信是否可信：</p><ul><li>SPF 通过：发件方服务器在域名允许范围内</li><li>DKIM 通过：邮件签名验证通过</li><li>DMARC 通过：发件方域名认证策略通过</li></ul><p>如果看到“发件方 DKIM 未通过”或类似提示，通常表示这封来信的发件方认证不完整，不一定是你的邮箱地址配置错误。遇到可疑邮件时，不要轻易打开陌生链接或下载附件。</p><h2 id="写邮件" tabindex="-1">写邮件 <a class="header-anchor" href="#写邮件" aria-label="Permalink to “写邮件”">​</a></h2><p>点击“写邮件”后可以填写：</p><ul><li>发件人</li><li>收件人</li><li>抄送、密送</li><li>主题</li><li>正文</li><li>附件</li></ul><p>编辑器支持富文本和 Markdown 模式，可以插入链接、图片、列表、引用、代码块和分隔线。</p><h2 id="临时发信权限" tabindex="-1">临时发信权限 <a class="header-anchor" href="#临时发信权限" aria-label="Permalink to “临时发信权限”">​</a></h2><p>如果当前发件邮箱所在域名暂时禁止发信，写信页面会显示提示。你可以点击“申请临时发信权限”，填写申请原因并选择时长。</p><p>当前策略下，临时发信申请需要管理员审核。审核通过后，页面会显示临时权限有效期。</p><h2 id="附件和图片" tabindex="-1">附件和图片 <a class="header-anchor" href="#附件和图片" aria-label="Permalink to “附件和图片”">​</a></h2><p>写信时可以添加附件。开启图床设置后，粘贴或插入的图片可以转为外链，方便收件人直接查看。</p><h2 id="垃圾邮件" tabindex="-1">垃圾邮件 <a class="header-anchor" href="#垃圾邮件" aria-label="Permalink to “垃圾邮件”">​</a></h2><p>系统会结合发件方认证、邮件内容和风险特征给来信做安全提示。被识别为风险较高的邮件可能进入垃圾邮件文件夹。你也可以手动把邮件标记为垃圾邮件或移回收件箱。</p>', 23)
  ])]);
}
const mail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  mail as default
};
