var express = require('express');
var app = express();
var BT = require('./BinaryTree');

//  测试用例
var binaryTreeNode = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var Tree = new BT.BinaryTree();
binaryTreeNode.forEach(function (item) {
    Tree.create(item);
});
function print(value) {
    console.log(value);
}
Tree.inOrderTravel(print);
// Tree.preOrderTravel(print);
// Tree.postOrderTravel(print);
console.log('该二叉树节点的个数为：' + Tree.Size());
console.log('该二叉树的深度为：' + Tree.Height());
console.log('该二叉树的叶子节点个数为：' + Tree.Degree1());
console.log('最小的节点值：' + Tree.min());
console.log('最大的节点值：' + Tree.max());
console.log(Tree.find(7) ? '7这个节点找到啦' : "7这个节点未找到");
console.log(Tree.find(18) ? '18这个节点找到啦' : "18这个节点未找到");
// Tree.remove(3);
// Tree.inOrderTravel(print);

app.get('/', function (req, res) {
  res.send('学习二叉树');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
});