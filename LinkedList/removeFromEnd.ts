import { ListNode } from "./lib";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 2 pointers with n-step delay
    if (!head) return null;
    let fast = head, slow = head;
    // Start first pointer ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next!;
    }
    // Exit condition if n is the length of the head
    if (!fast) return head.next;
    // We keep going for fast but start the slow pointer.
    while (fast.next) {
        slow = slow.next!;
        fast = fast.next!;
    }
    // we arrived at destination. Skip the next to assign next.next
    slow.next = slow.next!.next;
    return head;
};