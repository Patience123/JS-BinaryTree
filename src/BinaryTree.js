// 排序二叉树构造函数
function BinaryTree () {

    // 节点
    var Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // 根节点，初始值为空
    var root = null;

    // 插入节点
    var insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode; // 如果当前老节点的左子树为空，则插入
            } else {
                insertNode(node.left, newNode); // 否则接着往下一层插入
            }
        } else {
            if (!node.right) {
                node.right = newNode; // 如果当前老节点的右子树为空，则插入
            } else {
                insertNode(node.right, newNode); // 否则接着往下一层插入
            }
        }
    }

    // 创建二叉树
    this.create = function (value) {
        var newNode = new Node(value); // 生成一个值为value的节点
        if (!root) {
            root = newNode; // 如果当前根节点没有，则新生成的为根节点
        } else {
            insertNode(root, newNode); // 否则插入到左子树或右子树中
        }
    }

    // 以root为根节点遍历二叉树 中序遍历（得到的是一个升序的结果）
    var inOrderTraverseNode = function (node, callback) {
        if (node) {
            inOrderTraverseNode(node.left, callback);
            callback(node.value);
            inOrderTraverseNode(node.right, callback)
        }
    }
    this.inOrderTravel = function (callback) {
        inOrderTraverseNode(root, callback);
    }

    // 前序遍历（用来复制一棵二叉树效率最高）
    var preOrderTraverseNode = function (node, callback) {
        if (node) {
            callback(node.value);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    this.preOrderTravel = function (callback) {
        preOrderTraverseNode(root, callback);
    }

    // 后序遍历（可运用到操作系统的文件系统的遍历中）
    var postOrderTraverseNode = function (node, callback) {
        if (node) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.value);
        }
    }
    this.postOrderTravel = function (callback) {
        postOrderTraverseNode(root, callback);
    }

    // 计算以root为根节点的二叉树节点的个数
    var nodeNum = function (node) {
        if (!node) {
            return 0;
        } else {
            return 1 + nodeNum(node.left) + nodeNum(node.right);
        }
    }
    this.Size = function () {
        return nodeNum(root);
    }

    // 计算以root为根节点的二叉树的高度或深度
    var countHeight = function (node) {
        if (!node) {
            return 0;
        } else {
            var i = countHeight(node.left);
            var j = countHeight(node.right);
            return (i < j)
                ? j + 1
                : i + 1;
        }
    }
    this.Height = function () {
        return countHeight(root);
    }

    // 计算以root为根节点的二叉树中叶子节点的个数
    var countDegree1 = function (node) {
        if (!node) {
            return 0;
        }
        if (node.left == null && node.right == null) {
            return 1;
        }
        return countDegree1(node.left) + countDegree1(node.right);
    }
    this.Degree1 = function () {
        return countDegree1(root);
    }

    // 查找最小值
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.value;
        } else {
            return null;
        }
    }
    this.min = function () {
        return minNode(root);
    }

    // 查找最大值
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.value;
        }
        return null;
    }
    this.max = function () {
        return maxNode(root);
    }

    // 查找给定的数值
    var findNode = function (node, num) {
        if (node === null) { //当前节点为空，则表示没找到
            return false;
        }
        if (node.value > num) {
            findNode(node.left, num); //递归往左子树查找，此时的node为原先node的左孩子
        } else if (node.value < num) {
            findNode(node.right, num); //递归往左子树查找，此时的node为原先node的左孩子
        } else {
            return true;
        }
    }
    this.find = function (num) {
        return findNode(root, num);
    }

    // 删除节点（包括叶子节点和中间节点的情况）
    var findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }
    var removeNode = function (node, value) {
        if (node === null) {
            return null;
        }
        if (node.value > value) {
            node.left = removeNode(node.left, value);
            return node;
        } else if (node.value < value) {
            node.right = removeNode(node.right, value);
            return node;
        } else {
            if (node.left === null && node.right === null) { //叶子节点
                node = null;
                return node;
            }
            // 只有一个孩子的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // 有两个孩子的节点的情况
            var aux = findMinNode(node.right); //先找到它的右子树中的最小值
            node.value = aux.value; //把值做一个替换
            node.right = removeNode(node.right, aux.value); //再从原来的位置删除
            return node;
        }
    }
    this.remove = function (value) {
        return removeNode(root, value);
    }
}

exports.BinaryTree = BinaryTree