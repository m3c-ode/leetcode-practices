/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


/**
 Do not return anything, modify it in-place instead.
 */

import { ListNode } from "./type";

function deleteNode(node: ListNode | null): void {
    if (!node || !node.next) return;
    node.val = node.next?.val;
    node.next = node.next?.next;
};

const head = [4, 5, 1, 9], node = 5;