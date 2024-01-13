import { ListNode, createListNode, logList } from "./lib";

function reverseListInc(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    let newHead: ListNode | null = null;
    while (head !== null) {
        let next: ListNode = head.next!;
        head!.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;

};
function reverseListInc2(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    let newList: ListNode | null = null;
    while (head !== null) {
        newList = new ListNode(head.val, newList);
        head = head.next;
    }
    return newList;

};

function reverseListRec(head: ListNode | null): ListNode | null {
    // if (!head) return null;
    if (!head || !head.next) return head;
    reverseListRec(head.next);
    // head = head.next;
    head.next.next = head;
    head.next = null;
    return head;
}

function reverseListRecVal(head: ListNode | null): ListNode | null {
    // Exit conditions
    if (!head) return null;
    if (!head.next) return head;
    // Last node becomes new Head
    let reversedListHead = reverseListRec(head.next);
    // reverse pointers going up the stack
    head.next.next = head;
    head.next = null;
    // Return new head
    return reversedListHead;
}

function reverseListES6(head: ListNode | null): ListNode | null {
    // prev will beb
    let [prev, curr]: [ListNode | null, ListNode | null] = [null, head];
    while (head) {
        [curr!.next, prev, curr] = [prev, curr, curr!.next];
    }
    return prev;

}


// const head = new ListNode();

const head = [1, 2, 3, 4, 5];
const newHead = createListNode(head);
reverseListRecVal(newHead);
logList(newHead);