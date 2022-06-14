import { Tree } from "./ITree";
import { TreeNode } from "./TreeNode";
export declare class BinaryTree<E> implements Tree<E> {
    root: TreeNode<E> | null;
    totalNode: number;
    constructor();
    getSize(): number;
    inorder(node: TreeNode<E>): void;
    insert(data: E): TreeNode<E>;
}
