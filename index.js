//创建54张扑克牌
pokerArr = [];
var Poker = require('./poker.js').Poker
var washPoker = require('./util.js').washPoker
console.log(Poker)
for(i=1;i<=4;i++){//循环花色
    for(j=1;j<=13;j++){//循环数字
        let po = new Poker(i,j);
        po=po.toString();
        pokerArr.push(po)
    }
}
//小王
pokerArr.push(new Poker(null,14).toString())
//大王
pokerArr.push(new Poker(null,15).toString())


//打乱顺序-- 洗牌
pokerArr = washPoker(pokerArr)
console.log(pokerArr)


// 发牌

const play1 = pokerArr.slice(0,17);
const play2 = pokerArr.slice(17,34);
const play3 = pokerArr.slice(34,51);
const desk = pokerArr.slice(51)
console.log(`玩家1:${play1}
玩家2 :${play2}
玩家3:${play3}
桌面:${desk}`)
// console.log(`玩家1:${play1.length}
// 玩家2 :${play2.length}
// 玩家3:${play3.length}
// `)

