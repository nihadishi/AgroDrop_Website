"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _react = require("react");

var _router = require("next/router");

function Home() {
  var router = (0, _router.useRouter)();
  (0, _react.useEffect)(function () {
    router.push('/home');
  }, []);
  return null;
}