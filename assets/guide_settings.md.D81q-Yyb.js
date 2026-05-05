import { _ as _export_sfc, o as openBlock, c as createElementBlock, ak as createStaticVNode } from "./chunks/framework.D6KCzf1D.js";
const __pageData = JSON.parse('{"title":"个人设置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/settings.md","filePath":"guide/settings.md","lastUpdated":1777816303000}');
const _sfc_main = { name: "guide/settings.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="个人设置" tabindex="-1">个人设置 <a class="header-anchor" href="#个人设置" aria-label="Permalink to “个人设置”">​</a></h1><p>个人设置页面用于管理账号资料、邮箱偏好、通知方式和安全记录。手机端和电脑端入口一致，进入后按顶部标签切换。</p><h2 id="账号" tabindex="-1">账号 <a class="header-anchor" href="#账号" aria-label="Permalink to “账号”">​</a></h2><p>账号页会显示你的 NodeLoc 信息、当前等级、配额使用情况和已创建邮箱。</p><h2 id="邮件" tabindex="-1">邮件 <a class="header-anchor" href="#邮件" aria-label="Permalink to “邮件”">​</a></h2><p>邮件页集中管理和写信、收信体验相关的功能：</p><ul><li>标签管理：创建自定义标签，配合邮件列表快速整理邮件。</li><li>白名单管理：白名单内发件人的邮件会跳过垃圾邮件检测，直接进入收件箱。请只添加可信地址或域名。</li><li>签名管理：可以创建全局签名，也可以绑定到指定发件邮箱。</li><li>图床设置：配置个人图床密钥后，写信时粘贴或插入的图片会上传为外链，收件人无需登录即可查看图片。</li><li>自动回复：可以设置全局自动回复，也可以为某个邮箱设置单独覆盖。</li></ul><h2 id="自动回复" tabindex="-1">自动回复 <a class="header-anchor" href="#自动回复" aria-label="Permalink to “自动回复”">​</a></h2><p>全局自动回复会作为默认配置使用。未设置邮箱级覆盖时，所有邮箱默认使用全局配置。</p><p>邮箱级覆盖可以为某个邮箱单独设置自动回复内容、时间窗口和回复范围。回复范围支持：</p><ul><li>所有发件人</li><li>仅外部发件人</li></ul><p>系统会跳过群发列表邮件、自动邮件和疑似循环邮件，并支持同一发件人 24 小时内仅回复一次。</p><h2 id="通知与客户端" tabindex="-1">通知与客户端 <a class="header-anchor" href="#通知与客户端" aria-label="Permalink to “通知与客户端”">​</a></h2><p>你可以设置浏览器通知和第三方客户端访问。开启浏览器通知后，新邮件到达时可以收到提醒。</p><p>网页邮箱不需要手动配置客户端服务器。如果管理员开放 IMAP / POP3 / SMTP 客户端连接，默认建议统一使用：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mail.to9.us</span></span></code></pre></div><p>新增邮箱域名通常不需要单独添加客户端证书。只有管理员明确让你使用 <code>mail.你的域名</code> 作为客户端服务器地址时，才需要确认该主机名已经配置有效证书。</p><h2 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to “安全”">​</a></h2><p>安全页会显示当前登录、登录历史和临时发信申请记录。发现异常登录时，请及时联系管理员。</p>', 19)
  ])]);
}
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  settings as default
};
