// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:size.attributes.parse.zero
// Description:Parsing of non-negative integers
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Parsing of non-negative integers");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

_assertSame(offscreenCanvas.width, 0, "offscreenCanvas.width", "0");
_assertSame(offscreenCanvas.height, 0, "offscreenCanvas.height", "0");

t.done();

});
done();
