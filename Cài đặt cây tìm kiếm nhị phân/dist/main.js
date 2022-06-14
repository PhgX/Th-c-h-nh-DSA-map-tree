"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("./BinaryTree");
let tree = new BinaryTree_1.BinaryTree();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
console.log(`The numbers of nodes ${tree.totalNode}`);
tree.inorder(tree.root);
//# sourceMappingURL=main.js.map