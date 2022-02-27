// 获取设备电池状态，只有 chrome 支持
// BatteryManager.charging 只读，一个布尔值，说明当前电池是否正在充电。
// BatteryManager.chargingTime 只读，一个数字，代表距离充电完毕还需多少秒，如果为0则充电完毕。
// BatteryManager.dischargingTime 只读,一个数字，代表距离电池耗电至空且挂起需要多少秒。
// BatteryManager.level 只读，一个数字，代表电量的放大等级，这个值在 0.0 至 1.0 之间。

function dianchi() {
    navigator.getBattery().then(battery => {
        console.log("电池是否正在充电：" + (battery.charging ? "是" : "否"));
        console.log("电量: " + battery.level * 100 + "%");
        console.log("代表距离充电完毕还需多少秒: " + battery.chargingTime + " s");
        console.log("代表距离电池耗电至空: " + battery.dischargingTime + " s");

        // 电池充电状态更新事件。
        battery.addEventListener("chargingchange", () => {
            console.log("电池是否正在充电：" + (battery.charging ? "是" : "否"));
        });
        // 电池电量更新事件。
        battery.addEventListener("levelchange", () => {
            console.log("电量: " + battery.level * 100 + "%");
        });
        // 电池充电时间更新事件。
        battery.addEventListener("chargingtimechange", () => {
            console.log("代表距离充电完毕还需多少秒: " + battery.chargingTime + " s");
        });
        // 电池断开充电事件。
        battery.addEventListener("dischargingtimechange", () => {
            console.log("代表距离电池耗电至空: " + battery.dischargingTime + " s");
        });
    });
}

// BroadcastChannel 接口通过创建一个 BroadcastChannel 对象
// 一个客户端就加入了某个指定的频道，
// 它可用于检测同源网站环境中其他浏览器选项卡下的用户操作
// 之后无论创建多少 BroadcastChannel 对象，只要频道名称相同，就会互通
// 只要这个页面打开着，就会收到消息
// 连接到广播频道，唯一的参数是：频道名称
var bc = new BroadcastChannel('11');
// 发送数据到频道，从而使同频道内都能接受数据
function guangbo() {
    bc.postMessage('This is a test message.');
}
// 关闭频道 
function guangbo2() {
    bc.close()
}
// 广播方法二
function postmessage() {
    // 发送广播数据
    window.postMessage(99999);
}
// 使用fetch
function fetchs() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(url, {
            method: 'get'
        })
        .then(t => t.json()) // 必须加的，主要使用 json() 和 text() 
        .then(data => console.log(data)) // 这一步才真正能看到请求结果数据
}
// post 类型的fetch请求：
// 配置fetch：https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// fetch(url, {
//     method: 'POST',
//     body: {datas}   // body是存放要上传的数据，要是对象或formData
//     headers: new Headers({
//         'Content-Type': 'application/json'
//     })
// }).then(res => res.json())

// 隐藏元素，但在dom树中还是存在的
function yincang() {
    var k = document.getElementById("yincang");
    k.hidden = true
    setTimeout(() => k.hidden = false, 2000)
}

// 全屏
function quanping() {
    var k = document.getElementById("quanping");
    k.requestFullscreen(); // 使元素全屏
    setTimeout(() => {
        document.exitFullscreen(); // 退出全屏
    }, 2000) // 退出全屏
    // 监听全屏事件
    k.onfullscreenchange = function (e) {
        console.log(e)
    }
}

// 监测网络变化，可以拔掉网线看到效果
function wangluo() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    connection.addEventListener('change', connection => {
        console.log(connection);
    });
}

/************  IndexDB 学习 *********************/

// IndexedDB遵循同源策略。因此，尽管您可以访问域中存储的数据，但不能跨不同域访问数据。
// IndexedDB是一个异步 API，可以在大多数上下文中使用，包括  Web Workers
// IndexedDB 在浏览器的隐私模式下是被完全禁止的。 
// 尝试创建一个与已存在的对象仓库重名（或删除一个不存在的对象仓库）会抛出错误。

let db, dbName = "the_name";

function openDB() {
    // 新建数据库
    // 如果数据库不存在，open 操作会创建该数据库，然后 onupgradeneeded 事件被触发，
    // 你需要在该事件的处理函数中创建数据库模式。
    // 如果数据库已经存在，但你指定了一个更高的数据库版本，会直接触发 onupgradeneeded 事件，
    // 允许你在处理函数中更新数据库模式
    // 第二个参数，就是数据库的版本号，只能用正整数，而且，同名称的数据库，版本号只能越来越大
    let request = window.indexedDB.open(dbName, 1);
    // indexedDB.deleteDatabase(dbName);   // 删除某一个数据库

    // 在打开数据库时常见的可能出现的错误之一是 VER_ERR。
    // 这表明存储在磁盘上的数据库的版本高于你试图打开的版本。
    // 这是一种必须要被错误处理程序处理的一种出错情况。
    // 尝试创建一个与已存在的对象仓库重名（或删除一个不存在的对象仓库）会抛出错误。
    request.onerror = function () {
        console.log('有错误')
    };
    // 如果数据库创建成功，打开数据库请求的 onsuccess 处理函数会被触发。
    request.onsuccess = function (event) {
        db = event.target.result; // indexDB 对象仓库
        console.log('打开数据库');
    };

    return request
}

function makeIndexDB() {
    const customerData = [{
            ssn: "100-100-100",
            name: "Bill1",
            age: 100,
            email: "100@company.com"
        },
        {
            ssn: "60-60-60",
            name: "Bill2",
            age: 60,
            email: "60@home.org"
        },
        {
            ssn: "30-30-30",
            name: "Bill3",
            age: 30,
            email: "30@home.org"
        },
        {
            ssn: "10-10-10",
            name: "Bill",
            age: 10,
            email: "10@home.org"
        }
    ];

    // 打开数据库
    openDB()
        // onupgradeneeded：尝试打开版本号高于其当前版本的数据库时触发。
        // 在这里面，我们可以创建和删除对象存储空间以及构建和删除索引。
        .onupgradeneeded = function (event) {
            db = db ? db : event.target.result; // indexDB 对象仓库
            // 建立一个对象仓库来存储数据（事务），并选择 ssn 作为默认键路径
            // 这个方法第一个参数是仓库的名称，第二个是一个参数对象
            var objectStore = db.createObjectStore("customers", {
                keyPath: "ssn"
            });

            // 建立一个索引来通过姓名来搜索客户。名字可能会重复，所以我们不能使用 unique 索引
            // 通过在创建索引时设置 unique 标记，索引可以确保不会有两个具有同样索引
            // createIndex() 提供了一个可选地 options 对象，该对象细化了我们希望创建的索引类型
            objectStore.createIndex("name", "name", {
                unique: false
            });

            // 使用邮箱建立索引，我们向确保客户的邮箱不会重复，所以我们使用 unique 索引
            objectStore.createIndex("email", "email", {
                unique: true
            });

            // oncomplete：事务成功完成时触发。确保在插入数据前对象仓库已经创建完毕
            objectStore.transaction.oncomplete = function () {

                // IDBDatabase.transaction 启动一个事务。用于访问对象存储。在单独的线程中运行。
                // 该方法接受两个参数：storeNames (作用域，一个你想访问的对象仓库的数组），事务模式 mode（readonly 或 readwrite）
                // 使用 readonly 或 readwrite 模式都可以从已存在的对象仓库里读取记录。但只有在 readwrite 事务中才能修改对象仓库。
                // 你可以同时执行多个 readnoly 事务，哪怕它们的作用域有重叠；但对于在一个对象仓库上你只能运行一个 readwrite 事务
                let store = db.transaction("customers", "readwrite").objectStore("customers"); // 打开某一个数据对象

                customerData.forEach(function (customer) {
                    // add() 方法的调用时，对象仓库中不能存在相同键的对象。
                    // 如果你想修改一个已存在的条目，或者你不关心该数据是否已存在，你可以使用 put() 方法
                    store.add(customer);
                });
            };
            db.onversionchange = function (event) {
                // db.close();
                console.log('版本变更了！')
                console.log(event)
            };
        }
}
// 删除数据
function deleteData() {
    // 打开数据库
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 操作数据
    // IDBObjectStore.clear()：创建并立即返回一个IDBRequest对象，并在单独的线程中清除此对象存储。
    // 这是用于从对象存储中删除所有当前记录。
    // IDBObjectStore.delete(key)：方法IDBObjectStore返回一个IDBRequest对象，并在一个单独的线程中删除一个或多个指定记录。
    store.delete("30-30-30").onsuccess = function () {
        //    操作成功的回调
        console.log('删除数据成功！')
    };
}

// 获取数据
function getData() {
    // 打开数据库
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 操作数据
    store.get("60-60-60").onsuccess = function (event) {
        console.log(event.target.result)
        //    操作成功的回调
        console.log('获取数据成功！')
    };
}

// 修改数据
function putData() {
    // 打开数据库
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 操作数据
    store.get("60-60-60").onsuccess = (t) => {
        let data = t.target.result;
        data.age = 65;
        store.put(data);
    }
}

// 使用游标
function useCursor() {
    // 打开目标对象
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 获取一条
    store.openCursor().onsuccess = function (event) {
        var result = event.target.result;
        if (result) {
            console.log(result.value);
            event.target.result.continue(); // 类似循环，会继续向下逐条读取所有数据
        }

    };
    // 获取全部数据
    store.getAll().onsuccess = function (event) {
        var value = event.target.result;
        console.log(value);
    };

}

// 使用索引
// “name” 索引不是唯一的，查找"Bill" 的记录可能不止一条。在这种情况下，你总是得到键值最小的那个。
function useIndex() {
    // 打开目标对象
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers").index("name")
        .get("Bill"); // .getAll()  可以获取所有 
    // 获取数据
    store.onsuccess = function (event) {
        console.log(event.target.result.ssn)
    };
}
// 使用范围游标
function useRoundCursor() {
    // 打开目标对象
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers").index('name'),
        // IDBKeyRange.bound(x, y,true,true)：所有按键 ≥x && ≤y，后连个参数为false时，则不包含等于条件
        round = IDBKeyRange.bound('Bill', 'Bill3', false, true);
    // 获取一条
    store.openCursor(round, "prev").onsuccess = function (event) {
        var value = event.target.result.value;
        console.log(value);
    };
}

/************  监听滚动 学习 *********************/

function gundong() {
    var options = {
        root: document.querySelector('.wa'), // 定义父元素
        rootMargin: '20px', // 用来设定交集区域向外扩展的距离
        // 用来设定交集区域起始位置值，是子元素高度的百分之几，取值 0--1
        // 如果你想要target元素在root元素的可见程度每多25%就执行一次回调
        // 那么你可以指定一个数组[0, 0.25, 0.5, 0.75, 1]
        threshold: 0
    }
    var observer = new IntersectionObserver(callback, options);

    var target = document.querySelector('#fasd');
    observer.observe(target);
    // 达到交集时执行的回调
    function callback(entries) {
        console.log(entries)
    }

}

/************  浏览器通知 学习 *********************/

function tongzhi() {
    // 确认权限
    Notification.requestPermission(function (status) {
        // default：用户还未被询问是否授权，所以通知不会被显示。
        // granted：表示之前已经询问过用户，并且用户已经授予了显示通知的权限。
        // denied：用户已经明确的拒绝了显示通知的权限。
        console.log(status); // 仅当值为 "granted" 时显示通知
        // new Notification(title, options)：title 必填，options 选填，可选参数：
        // body: 通知中额外显示的字符串
        // tag: 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除。如果tag值相同，只显示一次
        // icon: 一个图片的URL，将被用于显示通知的图标。由于通知不是建立在当前页面的，所以要用完整的图片url
        // vibrate：指定震动模式
        // silent：通知是否静音，false是默认值；true使通知保持沉默。目前还未被实现
        // requireInteraction: true,通知是否持久显示，默认false，一段时间后关闭
        // data: 'I like peas.' 传递一些数据给监听事件
        // renotify:true, 新通知替换旧通知后是否应通知用户。默认值为false，这意味着它们不会被通知。需要有tag属性
        // 显示通知
        var n = new Notification("通知", {
            vibrate: [100],
            dir: 'rtl',
            body: '通知内容',
            tag: 'one',
            data: 'I like peas.',
            renotify: true,
            image: 'https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588213972&t=38b9a73c6408f279df043817cf309453',
            icon: 'https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588213972&t=38b9a73c6408f279df043817cf309453'
        });
        n.onclick = function () {
            event.preventDefault();
            n.close();
            console.log(n.data)
            window.open('https://www.baidu.com/', '_blank')
        }
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API
    });
}

/************  canvas擦除 学习 *********************/
function makeCanvas() {
    let can = document.getElementById('canvas');
    let ctx = can.getContext('2d');
    can.width = 300;
    can.height = 200;
    can.style.border = '1px solid';
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(0, 0, 300, 200);
    ctx.fill();
    can.addEventListener('mousemove', function (e) {
        let x = e.offsetX,
            y = e.offsetY;
        ctx.save();
        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.clip();
        ctx.clearRect(0, 0, 300, 200);
        ctx.restore();
    })
}

/************  worker 学习 *********************/

function test() {

}


let arr = [{
        name: '测试',
        fn: test
    },
    {
        name: '加载canvas',
        fn: makeCanvas
    },
    {
        name: '浏览器通知',
        fn: tongzhi
    },
    {
        name: '监听元素滚动',
        fn: gundong
    },
    {
        name: '使用范围游标',
        fn: useRoundCursor
    },
    {
        name: '使用游标',
        fn: useCursor
    }, {
        name: '使用索引',
        fn: useIndex
    }, {
        name: '修改数据',
        fn: putData
    }, {
        name: '获取数据',
        fn: getData
    },
    {
        name: '删除数据',
        fn: deleteData
    }, {
        name: '打开数据',
        fn: openDB
    },
    {
        name: '创建并打开数据库',
        fn: makeIndexDB
    },
    {
        name: '查看电池',
        fn: dianchi
    },
    {
        name: '广播',
        fn: guangbo
    },
    {
        name: '关闭广播',
        fn: guangbo2
    },
    {
        name: '广播方法二',
        fn: postmessage
    },
    {
        name: '使用 fetch',
        fn: fetchs
    },
    {
        name: '隐藏DOM元素',
        fn: yincang
    },
    {
        name: '全屏',
        fn: quanping
    },
    {
        name: '监测网络',
        fn: wangluo
    }
]

export default {
    arr

}