class Poker {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }
    toString() {
        // 判断花色
        // 1. 花色（1~4，♣、♥、♦、♠）
        let string = '';
        switch (this.color) {
            case 1:
                string = "♣"
                break;
            case 2:
                string = "♥"
                break;
            case 3:
                string = "♦"
                break;
            case 4:
                string = "♠"
                break;
        }
        // 判断数字
        switch (this.number) {
            case 1:
                string += ' A'
                break;
            case 11:
                string += ' J'
                break;
            case 12:
                string += ' Q'
                break;
            case 13:
                string += ' K'
                break;
            case 14:
                string += 'joker'
                break;
            case 15:
                string += 'JOKER'
                break;
            default:
                string += ' ' + this.number;
                break;
        }

        return string;
    }
}


exports.Poker = Poker
// let po = new Poker(2,11)
// console.log(po.toString())