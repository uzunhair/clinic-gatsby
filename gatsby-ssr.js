const React = require('react');

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: 'ru' });

  setHeadComponents([<meta name="yandex-verification" key="y-verification" content="4790b7e4d15459f8" />]);

  setPostBodyComponents([
    <script
      key="gatsby-plugin-yandex-metrika"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
          ym(66513775, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });`,
      }}
    />,
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/66513775" style={{ position: 'absolute', left: '-9999px' }} alt="" />
      </div>
    </noscript>,
  ]);
};
