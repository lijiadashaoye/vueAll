<template>
  <div>
    <h2>css 学习</h2>
    <div class="content">
      <div class="self-data">
        <h4>伪类、为元素</h4>
        <span data-descr="css 获取自定义data-*数据">鼠标放这</span>
        <ol>
          <li>
            ::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。
          </li>
          <li>::after用来创建一个伪元素，作为已选中元素的最后一个子元素</li>
          <li>他们常通过 content 属性来为一个元素添加修饰性的内容</li>
          <li>由::before 和::after 生成的伪元素 包含在元素格式框内</li>
          <li>
            ::after ::before
            伪类元素与其他盒模型元素是可以相互影响的，就像他们是真正的元素一样，不过是被插入到相关元素中罢了
          </li>
          <li>:checked 伪类选择器,表示任何处于选中状态的表单元素</li>
          <li>:disabled 伪类表示任何被禁用的元素，为禁用元素设置样式</li>
          <li>:focus 表示获得焦点的元素（如表单输入）</li>
          <li class="nots">:not() 用来匹配不符合一组选择器的元素</li>
          <p style="font-size: 12px">
            :not() 伪类不能被嵌套，这意味着 :not(:not(...)) 是无效的。
            <br />由于伪元素不是简单的选择器，他们不能被当作 :not()
            中的参数，形如 :not(p::before) 这样的选择器将不会工作。
          </p>
        </ol>
      </div>

      <div class="backgrounds">
        <h4>文字轮廓剪切背景图</h4>
        <p>文字轮廓剪切背景图</p>
        <div>
          <div class="animation">
            <h4>@keyframes 动画</h4>
            <p>动画元素</p>
          </div>
          <div>
            <h4>transition 动画</h4>
            <div class="transitions">鼠标滑入</div>
          </div>
        </div>

        <div class="background2">
          <h4>背景图缩写方法</h4>
          <ol>
            <li>background 缩写里每个属性值无所谓出现的顺序</li>
            <li>background 属性被指定多个背景层时，使用逗号分隔每个背景层。</li>
            <li>
              background-size 只能紧接着 background-position
              出现，以"/"分割，即： background-position / background-size
              ，如：center/80% 、10% 20% / 100px 50px
            </li>
          </ol>
        </div>
      </div>

      <div class="lvjing">
        <h4>滤镜</h4>
        <p>多重滤镜效果可以写到一个filter()里</p>

        <div class="blurs">
          <p>
            <span style="color: red">blur(num)：模糊</span>
            <br />将高斯模糊应用于输出图片 num>=0
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="brightness">
          <p>
            <span style="color: red">brightness(num)：亮度</span>
            <br />将线性乘数应用于输入图像，使其看起来更亮或更暗，num>=0，默认是1。
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="contrast">
          <p>
            <span style="color: red">contrast(num)：对比度</span>
            <br />调整输入图像的对比度 num>=0，默认是1。
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="dropShadow">
          <p>
            <span style="color: red">drop-shadow(x y r color)：阴影</span>
            <br />阴影效果，偏离-x 偏移-y 模糊半径-r 颜色-color
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="saturate">
          <p>
            <span style="color: red">saturate(num)：饱和度</span>
            <br />值100%过低会使图像去饱和，而值过高则会使图像100%饱和
          </p>
          <img src="../assets/2.png" />
        </div>
      </div>

      <div class="lvjing">
        <div class="grayscale">
          <p>
            <span style="color: red">grayscale(num)：灰度</span>
            <br />将图像转换为灰度图像。值定义转换的比例。
            值为100%则完全转为灰度图像，值为0%图像无变化。
            值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="invert">
          <p>
            <span style="color: red">invert(num)：反转</span>
            <br />反转输入图像。值定义转换的比例，num
            值在0%和100%之间，值默认是0。
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="opacity">
          <p>
            <span style="color: red">opacity(num)：透明度</span>
            <br />转化图像的透明程度。值定义转换的比例，num
            值在0%和100%之间，值默认是1。
          </p>
          <img src="../assets/2.png" />
        </div>

        <div class="sepia">
          <p>
            <span style="color: red">sepia(num)：转换为深褐色</span>
            <br />将图像转换为深褐色。值定义转换的比例，num
            值在0%和100%之间，值默认是0。
          </p>
          <img src="../assets/2.png" />
        </div>
      </div>

      <div>
        <h4>阴影</h4>
        <p class="shadow shadow1">默认在外侧</p>
        <p class="shadow shadow2">用 inset 向内侧</p>
        <p class="shadow shadow3">多重阴影</p>
      </div>

      <div>
        <h4>边框</h4>
        <p class="border border1">四个不同颜色、形状、大小的值</p>
        <p class="border border2">两个值的</p>
      </div>

      <div style="width: 340px">
        <h4>表格</h4>
        <p style="font-size: 14px">
          当表格添加了 width 后，可以用 table-layout: fixed
          限定每个表格的宽度都一样
        </p>
        <table class="isTable">
          <caption>
            Caption 表格标题
          </caption>
          <tr>
            <td colspan="2" class="toLong">
              <p>当文子长度超过表格时，可以用 ... 形式，如：</p>
              文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
            </td>
          </tr>
          <tr>
            <td>Some data</td>
            <td>Some more data</td>
          </tr>
          <tr>
            <td colspan="2" class="inputs">
              <p>caret-color 用来定义插入光标（caret）的颜色</p>
              <p>::placeholder 用来定义 placeholder 文字的样式</p>
              <input placeholder="placeholder" />
              <input placeholder="readonly" readonly />
            </td>
          </tr>
        </table>

        <div>
          <h4>css 函数</h4>
          <ol>
            <li>
              calc() 允许在声明 CSS
              属性值时执行一些计算，运算符的两边必须要有空白字符，比如，calc(50%
              + -8px)
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h4>剪切板操作</h4>
        <p>使用 document.execCommand 复制，先选中一些内容</p>
        <button @click="copy">复制</button>&nbsp;&nbsp;
        <button @click="seeClip">查看剪切板内容</button>
        <p>使用 Clipboard API 复制</p>
        <input id="input" type="text" v-model="inp" />
        <button @click="copy1">复制</button>&nbsp;&nbsp;
        <button @click="seeClip">查看剪切板内容</button>
        <p>{{ clipContent }}</p>
      </div>

      <div style="width: 340px">
        <div class="column">
          <h4>多列布局</h4>
          <p>被多列布局的元素被多列布局被多列布局的元素被多列布局</p>
        </div>

        <div style="width: 340px">
          <h4 style="text-align: center">浮动</h4>

          <div class="floats">
            <img src="../assets/2.png" />
            <img src="../assets/2.png" />
            <p>图片是添加了 float: left/right; 从而浮动了</p>
          </div>

          <div class="floats">
            <img src="../assets/2.png" />
            <img src="../assets/2.png" />
            <p class="clearP">
              p标签添加了 clear:
              left;清除浮动要添加到不希望受其他浮动元素影响的元素上
            </p>
          </div>
        </div>
      </div>

      <div class="tanxing">
        <h4>弹性盒子的三种排布</h4>

        <p>均匀排列每个元素,元素之间平均分配空挡</p>
        <div class="gg ffff">
          <p>1</p>
          <p>justify-content: space-around</p>
          <p>1</p>
        </div>

        <p>均匀排列每个元素,每个元素之间的间隔相等</p>
        <div class="gg ffff1">
          <p>1</p>
          <p>justify-content: space-evenly</p>
          <p>1</p>
        </div>

        <p>均匀排列每个元素,首个元素放置于起点末尾元素放置于终点</p>
        <div class="gg ffff2">
          <p>1</p>
          <p>justify-content: space-between</p>
          <p>1</p>
        </div>

        <h4>书写方向</h4>
        <p style="font-size: 14px; color: red">
          direction 适用于所有，弹性盒子、网格、p标签等等
          <br />在用到网格时，网格的第一线就变成右边的第一条线了
        </p>
        <p>从左往右</p>
        <div class="modle writeModle1">
          <p>direction: ltr&nbsp;</p>
          <p>2</p>
          <p>3</p>
        </div>

        <p>从右往左</p>
        <div class="modle writeModle2">
          <p>direction: rtl&nbsp;</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>

      <div class="yuanzhui">
        <h4>圆锥渐变</h4>
        <section>属于background-image属性，只有chorme支持</section>
        <section>1 rad=180/π deg</section>
        <section>1 turn=360 deg</section>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <div>
          <p style="font-weight: bold">渐变走向不同</p>
          <p>
            <span>锥形渐变方向</span>
            <span>圆形渐变方向</span>
          </p>
        </div>
      </div>

      <div>
        <h4>渐变</h4>
        <div class="chongfu1">线型重复渐变</div>
        <div class="jingxiang">
          <div>径向重复渐变</div>
          <div>径向渐变</div>
          <div>径向渐变</div>
          <div>径向渐变</div>
        </div>
        <div class="xianxing">线性渐变</div>
      </div>

      <div>
        <h4>鼠标样式</h4>
        <div id="div">
          <p v-for="k in shubiao" :key="k" :style="{ cursor: k }">{{ k }}</p>
        </div>
        <div>
          <h4>图片填充</h4>
          <a
            target="_blank"
            href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit"
            >https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit</a
          >
        </div>
        <div>
          <h4>图片位置</h4>
          <a
            target="_blank"
            href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position"
            >https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position</a
          >
        </div>
      </div>

      <div>
        <h4>网格布局</h4>
        <p class="gridTip">只需要按行或者列控制布局（一维）用弹性盒子</p>
        <p class="gridTip">需要同时按行和列控制布局（二维）用网格</p>

        <h4>repeat() 函数网格</h4>
        <div class="grid grid1">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>
            子元素content值较大，则会把此格单独撑开，但只有英文会把宽度撑开，中文则只把高度撑开
          </div>
        </div>

        <h4>自适应宽度弹性网格</h4>
        <p class="gridTip">
          子元素宽度可以固定，也可以使用 minmax()
          设置宽度区间，但排列会随父元素宽度变化,
          如：minmax(100px,1fr)、minmax(100px,auto)、minmax(100px,200px)
        </p>
        <div class="setKuan">
          <label style="font-size: 14px" for="kuandu1">父元素宽度：</label>
          <input id="kuandu1" v-model="kuan1" />
          <span>px</span>
        </div>
        <div class="setKuan">
          <label style="font-size: 14px" for="kuandu2">子元素宽度：</label>
          <input id="kuandu2" v-model="kuan2" />
          <span>px</span>
        </div>
        <div
          class="grid grid2"
          :style="{
            width: `${kuan1}px`,
            'grid-template-columns': `repeat(auto-fill, minmax(${kuan2}px, 1fr))`,
          }"
        >
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
        </div>
      </div>

      <div style="width: 370px">
        <div>
          <h4>网格中的对齐</h4>
          <p style="font-size: 14px">单独对齐</p>
          <p style="font-size: 14px">
            用align-self justify-self 使网格内的内容相对当前网格进行位置摆放
          </p>
          <div class="duiqi">
            <div class="duiqi1">One</div>
            <div class="duiqi2">Two</div>
            <div class="duiqi3">Three</div>
            <div class="duiqi4">four</div>
          </div>
          <p style="font-size: 14px">整体对齐</p>
          <p style="font-size: 14px">
            用justify-content align-content
            使网格内的网格相对当前外框进行位置摆放
          </p>
          <div class="duiqiAll">
            <div class="duiqi11">One</div>
            <div class="duiqi21">Two</div>
            <div class="duiqi31">Three</div>
            <div class="duiqi41">four</div>
          </div>
        </div>

        <div>
          <p>网格的跨行、跨列</p>
          <div class="wrapper">
            <div class="box1">One</div>
            <div class="box2">Two</div>
            <div class="box3">Three</div>
            <div class="box4">Four</div>
          </div>
          <div class="showGrid"></div>
        </div>
      </div>

      <div>
        <div>
          <h4>命名网格</h4>
          <p style="font-size: 14px; color: rgb(255, 162, 0)">
            对网格的每一格进行命名
          </p>
          <ul class="nameGrid">
            <li>img</li>
            <li>content</li>
          </ul>
          <p style="font-size: 14px; color: rgb(255, 162, 0)">
            对网格的每一线进行命名
          </p>
          <p style="font-size: 12px; color: rgb(255, 62, 36)">
            其中，第五格定义在第二格后边，但第二格用了
            z-index:2，这样第二格就到第五格上层了
          </p>
          <div class="wrapperw">
            <div class="box1w">One</div>
            <div class="box2w">Two</div>
            <div class="box3w">Three</div>
            <div class="box4w">Four</div>
            <div class="box5w">Five</div>
          </div>
        </div>
        <h4>自动排序填充网格，尽量减少参差不齐</h4>
        <p class="titleP">适用于没有具体排版要求，只要求紧凑展示的列表</p>
        <p class="titleP">未排序</p>
        <div class="paixu">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
          <div>Seven</div>
          <div>Eight</div>
          <div>Nine</div>
          <div>Ten</div>
          <div>Eleven</div>
          <div>Twelve</div>
        </div>
        <p class="titleP">排序</p>
        <div class="paixu1">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
          <div>Seven</div>
          <div>Eight</div>
          <div>Nine</div>
          <div>Ten</div>
          <div>Eleven</div>
          <div>Twelve</div>
        </div>
      </div>

      <div class="path">
        <h4>clip-path 背景剪切</h4>
        <p>
          背景剪切，是先创建背景，然后进行剪切，所以正常可以显示的内容，也会被裁剪
        </p>

        <section>
          <div>
            inset(top right bottom left): 参数写法类似margin，可写 1~4个参数
            <p class="path1">内容被剪切</p>
          </div>
          <div>
            circle(r at x y): r 即圆形的半径， 不接受负数作为该参数的，x
            y为圆心坐标
            <p class="path2"></p>
          </div>
          <div>
            ellipse(Xr Yr at x y): Xr表示x轴方向的半径，Yr 表示Y轴方向的半径
            <p class="path3"></p>
          </div>
          <div>
            polygon(x1 y1,x2 y2,x3 y3 ...):
            每一对在列表中的参数都代表了多边形顶点的坐标，第一个点和最后一个点如果不同，会自动接合
            <p class="path4"></p>
          </div>
        </section>

        <p>
          display:flow-root
          使该元素表现为一个块元素框，该框将建立新的块格式化上下文，定义格式化根所在的位置。
        </p>
        <p>
          display:table 使该元素的行为类似于HTML
          &lt;table&gt;元素。它定义了一个块级框。
        </p>
        <p>
          display:flex
          使元素的行为类似于block元素，并根据flexbox模型布置其内容。
        </p>
        <p>display:grid 使元素的行为类似于块元素，并根据网格模型布置其内容。</p>
        <p>
          display:inline-block
          使元素会产生一个块元素盒子，并且像内联盒子一样（表现得更像一个被替换的元素），可以融入到周围内容中。
        </p>
      </div>

      <div>
        <h4>使用 clip-path 和 shape-outside</h4>
        <p style="font-size: 14px; color: red; font-size: 16px">
          结合浮动一起使用
        </p>
        <div class="use_clipPath">
          <span></span>
          当前边的元素浮动后，后边的元素就要去挤靠浮动元素，用 clip-path
          是为了剪切背景图， 用 shape-outside 才是让文字围绕一定的形状去排布
        </div>
        <div>
          <h4>文字相关</h4>
          <div class="shupaiWap">
            <p class="shupai1">将文字竖排显示</p>
            <div class="shupai2">
              <p>
                <span>2020</span>
                年
                <span>4</span>
                月
                <span>15</span>
                日
              </p>
            </div>
            <div>
              <p style="font-size: 16px; color: red">下划线样式</p>
              <p class="decoration1">文字底下直线</p>
              <p class="decoration2">文字中间直线</p>
              <p class="decoration3">虚线</p>
              <p class="decoration4">波浪线</p>
              <p class="decoration5">上下都有</p>
            </div>
            <div>
              <p style="font-size: 16px; color: red">文字阴影</p>
              <p class="textShadow">文字</p>
            </div>
          </div>
          <div class="shupaiWap">
            <div>
              <p style="font-size: 16px; color: red">单词首字母大写</p>
              <p class="big">dog</p>
            </div>
            <div>
              <p style="font-size: 16px; color: red">
                使用css 自定义 var()函数
              </p>
              <p class="vars">
                <span>局部使用变量</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="last">
        <h4>css 立体</h4>
        <div class="liti">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </div>
        <div>
          <h4>使元素可调整大小</h4>
          <div class="resizable">使用 resize 让元素可以手动调整大小</div>
        </div>
        <div>
          <h4>scale() 缩放</h4>
          <div class="scales">
            <div>二维平面缩放</div>
          </div>
        </div>

        <div class="zooms">
          <h4>zoom 缩放</h4>
          <div>zoom 缩放会将元素和模型也缩小，鼠标划入看效果</div>
        </div>

        <div>
          <h4>鼠标选中改变样式</h4>
          <div class="shubiaoSelect">
            <p>使用 ::selection 改变被选中的部分的样式</p>
          </div>
        </div>

        <div>
          <span class="testScss">testScss</span>
          <p class="pp">用 @import</p>
        </div>
      </div>

      <div class="mix">
        <h4>css 混合模式</h4>
        <div class="mixbody">
          <h1 class="mixh1">css 的混合模式</h1>
        </div>
      </div>

      <div class="zhanlian">
        <h4>滚动粘连</h4>
        <p>无粘连</p>
        <div class="slider">
          <div id="s1">
            <p class="isH">你好啊</p>
          </div>
          <div id="s2">
            <p class="isH">ConardLi</p>
          </div>
          <div id="s3">
            <p class="isH">code秘密花园</p>
          </div>
        </div>
        <p>有粘连</p>
        <div class="slider has">
          <div id="s1">
            <p class="isH">你好啊</p>
          </div>
          <div id="s2">
            <p class="isH">ConardLi</p>
          </div>
          <div id="s3">
            <p class="isH">code秘密花园</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 剪切板数据
      clipContent: "",
      inp: null,
      // 图标类型列表
      shubiao: [
        "auto",
        "default",
        "none",
        "context-menu",
        "help",
        "pointer",
        "progress",
        "wait",
        "cell",
        "crosshair",
        "text",
        "vertical-text",
        "alias",
        "copy",
        "move",
        "no-drop",
        "not-allowed",
        "e-resize",
        "n-resize",
        "ne-resize",
        "nw-resize",
        "s-resize",
        "se-resize",
        "sw-resize",
        "w-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "col-resize",
        "row-resize",
        "all-scroll",
        "zoom-in",
        "zoom-out",
        "grab",
        "grabbing",
      ],
      // 网格宽度
      kuan1: 260,
      kuan2: 80,
    };
  },
  mounted() {
    // // 监听复制事件，即监听用户的 ctrl+c 复制操作 cut:剪切 copy:复制 paste:粘贴
    // document.addEventListener("copy", function(e) {
    //   // 若添加了，就可以使用 setData 设置添加到剪切板的内容
    //   e.preventDefault();
    //   e.clipboardData.setData("text/plain", "Hello, world!");
    // });
  },
  methods: {
    // 复制选中的内容
    copy() {
      document.execCommand("copy");
      // document.execCommand("cut");
    },
    copy1() {
      // 查询浏览器权限
      navigator.permissions
        .query({ name: "clipboard-write" })
        .then((result) => {
          // console.log(result);
          // console.log(  navigator.clipboard);
          // navigator.clipboard.writeText() 和 navigator.clipboard.write()
          // 方法让你往剪贴板写入任意文本或二进制数据。
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(this.inp).then(
              function () {
                console.log("写入成功");
              },
              function () {
                console.log("写入失败");
              }
            );
          }
        });
    },
    // 查看剪切板
    seeClip() {
      // navigator.clipboard.readText() 和 navigator.clipboard.read()
      // 方法让你从剪贴板读取任意文本或二进制数据。
      navigator.clipboard.readText().then((t) => (this.clipContent = t));
    },
  },
};
</script>

<style scoped lang="scss">
@import url("./css.css");

.testScss {
  font-size: 50px;
  color: $primary;
}

.content {
  display: flex;
  flex-wrap: wrap;
}
.content > div {
  padding: 5px 10px;
  min-width: 100px;
  max-width: 360px;
  flex-shrink: 1;
  margin-bottom: 10px;
}
</style>