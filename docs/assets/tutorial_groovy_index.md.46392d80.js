import{_ as a,c as s,o as n,b as e}from"./app.f6dd217e.js";const g=JSON.parse('{"title":"Rhapsody\u306EPlug-in\u306EGroovy\u306B\u3088\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB","description":"","frontmatter":{"title":"Rhapsody\u306EPlug-in\u306EGroovy\u306B\u3088\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB"},"headers":[{"level":2,"title":"Groovy\u306E\u8A2D\u5B9A","slug":"groovy\u306E\u8A2D\u5B9A"},{"level":2,"title":"\u30B5\u30F3\u30D7\u30EB","slug":"\u30B5\u30F3\u30D7\u30EB"},{"level":3,"title":"\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A","slug":"\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A"}],"relativePath":"tutorial/groovy/index.md"}'),l={name:"tutorial/groovy/index.md"},o=e(`<p>IBM\xAE Engineering Systems Design Rhapsody\xAE(\u4EE5\u4E0B\u3001Rhapsody)\u306EPlug-in(\u30DE\u30AF\u30ED)\u3092Apache Groovy(\u4EE5\u4E0B\u3001Groovy)\u3067\u4F5C\u6210\u3059\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u3059\u3002</p><h2 id="groovy\u306E\u8A2D\u5B9A" tabindex="-1">Groovy\u306E\u8A2D\u5B9A <a class="header-anchor" href="#groovy\u306E\u8A2D\u5B9A" aria-hidden="true">#</a></h2><p>\u4E0B\u8A18\u304C\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u60C5\u5831\u3067\u3059\u3002</p><ul><li><a href="https://qiita.com/daikan_murata/items/c5dc416c3912e36dae84" target="_blank" rel="noreferrer">IBM Rhapsody\u8A55\u4FA1\u7248\uFF08\u7121\u511F\uFF09\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</a></li><li><a href="https://groovy.apache.org/download.html" target="_blank" rel="noreferrer">Apache Groovy/Download</a></li></ul><p>\u3053\u306E\u30B5\u30F3\u30D7\u30EB\u3067\u306F\u3001\u4E0B\u8A18\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">IBM Engineering Systems Design Rhapsody 9.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">  (\u3069\u306EEdtion\u3067\u3082Plug-in\u306F\u52D5\u4F5C\u3057\u307E\u3059)</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u30C7\u30D5\u30A9\u30EB\u30C8\u901A\u308A\u3001C:/Program Files/IBM/Rhapsody/9.0.1/\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u3044\u307E\u3059\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Apache Groovy 3.0.9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Groovy\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u6642\u306B\u3001\u4E0B\u8A18\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002</p><ul><li>CLASSPATH\u306B\u3066&quot;(Rhapsody\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D5\u30A9\u30EB\u30C0)/JavaAPI/rhapsody.jar&quot;</li><li>\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u3066java.library.path=&quot;(Rhapsody\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D5\u30A9\u30EB\u30C0)/Share/JavaAPI&quot;</li></ul><p>\u30B3\u30F3\u30D1\u30A4\u30EB\u3001\u5B9F\u884C\u306F\u6B21\u306B\u306A\u308A\u307E\u3059\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">groovy.bat -cp &quot;/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar&quot; -Djava.library.path=&quot;/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI&quot; AppName.groovy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u30B5\u30F3\u30D7\u30EB" tabindex="-1">\u30B5\u30F3\u30D7\u30EB <a class="header-anchor" href="#\u30B5\u30F3\u30D7\u30EB" aria-hidden="true">#</a></h2><h3 id="\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A" tabindex="-1">\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A <a class="header-anchor" href="#\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A" aria-hidden="true">#</a></h3><p><a href="ShowNameOfSelectedElement.groovy">ShowNameOfSelectedElement.groovy</a></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import com.telelogic.rhapsody.core.*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ShowNameOfSelectedElement {</span></span>
<span class="line"><span style="color:#A6ACCD;">	static main(args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		def app = RhapsodyAppServer.getActiveRhapsodyApplication();</span></span>
<span class="line"><span style="color:#A6ACCD;">		def se = app.getSelectedElement();</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (null != se) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.println(se.getName());</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),p=[o];function t(r,c,i,d,y,h){return n(),s("div",null,p)}var C=a(l,[["render",t]]);export{g as __pageData,C as default};