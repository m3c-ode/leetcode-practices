export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function logList(list: ListNode | null) {
    let arr: number[] = [];
    let arrHead = list;
    while (arrHead) {
        arr.push(arrHead.val);
        arrHead = arrHead.next;
        console.log('array', arr);
    }
    console.log("🚀 ~ file: reverse.ts:5 ~ reverseList ~ arr:", arr);
}

export function createListNode(val: number[]) {
    if (!val.length) return null;
    let head = new ListNode(val[0]);
    if (val.length > 1) {
        for (let i = 1; i < val.length; i++) {
            // const element = val[i];
            // val.forEach(val)
            // let curr = new ListNode(val[i], new ListNode(val[i+1]))
            head = new ListNode(val[i], new ListNode(val[i - 1]));
        }
    }
    return head;
}