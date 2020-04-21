"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  'use strict';

  var cryptoObj = window.crypto || window.msCrypto;
  var storage = window.localStorage;
  var storageName = 'hexo-blog-encrypt:#' + window.location.pathname;
  var keySalt = textToArray('hexo-blog-encrypt的作者们都是大帅比!');
  var ivSalt = textToArray('hexo-blog-encrypt是地表最强Hexo加密插件!');
  var mainElement = document.getElementById('hexo-blog-encrypt');
  var wrongPassMessage = mainElement.dataset['wpm'];
  var wrongHashMessage = mainElement.dataset['whm'];
  var dataElement = mainElement.getElementsByTagName('script')['hbeData'];
  var encryptedData = dataElement.innerText;
  var HmacDigist = dataElement.dataset['hmacdigest'];

  function hexToArray(s) {
    return new Uint8Array(s.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16);
    }));
  }

  function textToArray(s) {
    var i = s.length;
    var n = 0;
    var ba = new Array();

    for (var j = 0; j < i;) {
      var c = s.codePointAt(j);

      if (c < 128) {
        ba[n++] = c;
        j++;
      } else if (c > 127 && c < 2048) {
        ba[n++] = c >> 6 | 192;
        ba[n++] = c & 63 | 128;
        j++;
      } else if (c > 2047 && c < 65536) {
        ba[n++] = c >> 12 | 224;
        ba[n++] = c >> 6 & 63 | 128;
        ba[n++] = c & 63 | 128;
        j++;
      } else {
        ba[n++] = c >> 18 | 240;
        ba[n++] = c >> 12 & 63 | 128;
        ba[n++] = c >> 6 & 63 | 128;
        ba[n++] = c & 63 | 128;
        j += 2;
      }
    }

    return new Uint8Array(ba);
  }

  function arrayBufferToHex(arrayBuffer) {
    if (_typeof(arrayBuffer) !== 'object' || arrayBuffer === null || typeof arrayBuffer.byteLength !== 'number') {
      throw new TypeError('Expected input to be an ArrayBuffer');
    }

    var view = new Uint8Array(arrayBuffer);
    var result = '';
    var value;

    for (var i = 0; i < view.length; i++) {
      value = view[i].toString(16);
      result += value.length === 1 ? '0' + value : value;
    }

    return result;
  }

  function getExecutableScript(_x) {
    return _getExecutableScript.apply(this, arguments);
  }

  function _getExecutableScript() {
    _getExecutableScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(oldElem) {
      var out, attList;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              out = document.createElement('script');
              attList = ['type', 'text', 'src', 'crossorigin', 'defer', 'referrerpolicy'];
              attList.forEach(function (att) {
                if (oldElem[att]) out[att] = oldElem[att];
              });
              return _context2.abrupt("return", out);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getExecutableScript.apply(this, arguments);
  }

  function convertHTMLToElement(_x2) {
    return _convertHTMLToElement.apply(this, arguments);
  }

  function _convertHTMLToElement() {
    _convertHTMLToElement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(content) {
      var out;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              out = document.createElement('div');
              out.innerHTML = content;
              out.querySelectorAll('script').forEach( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(elem) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.t0 = elem;
                          _context3.next = 3;
                          return getExecutableScript(elem);

                        case 3:
                          _context3.t1 = _context3.sent;

                          _context3.t0.replaceWith.call(_context3.t0, _context3.t1);

                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x9) {
                  return _ref2.apply(this, arguments);
                };
              }());
              return _context4.abrupt("return", out);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _convertHTMLToElement.apply(this, arguments);
  }

  function getKeyMaterial(password) {
    var encoder = new TextEncoder();
    return cryptoObj.subtle.importKey('raw', encoder.encode(password), {
      'name': 'PBKDF2'
    }, false, ['deriveKey', 'deriveBits']);
  }

  function getHmacKey(keyMaterial) {
    return cryptoObj.subtle.deriveKey({
      'name': 'PBKDF2',
      'hash': 'SHA-256',
      'salt': keySalt.buffer,
      'iterations': 1024
    }, keyMaterial, {
      'name': 'HMAC',
      'hash': 'SHA-256',
      'length': 256
    }, true, ['verify']);
  }

  function getDecryptKey(keyMaterial) {
    return cryptoObj.subtle.deriveKey({
      'name': 'PBKDF2',
      'hash': 'SHA-256',
      'salt': keySalt.buffer,
      'iterations': 1024
    }, keyMaterial, {
      'name': 'AES-CBC',
      'length': 256
    }, true, ['decrypt']);
  }

  function getIv(keyMaterial) {
    return cryptoObj.subtle.deriveBits({
      'name': 'PBKDF2',
      'hash': 'SHA-256',
      'salt': ivSalt.buffer,
      'iterations': 512
    }, keyMaterial, 16 * 8);
  }

  function verifyContent(_x3, _x4) {
    return _verifyContent.apply(this, arguments);
  }

  function _verifyContent() {
    _verifyContent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(key, content) {
      var encoder, encoded, signature, result;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              encoder = new TextEncoder();
              encoded = encoder.encode(content);
              signature = hexToArray(HmacDigist);
              _context5.next = 5;
              return cryptoObj.subtle.verify({
                'name': 'HMAC',
                'hash': 'SHA-256'
              }, key, signature, encoded);

            case 5:
              result = _context5.sent;
              console.log("Verification result: ".concat(result));

              if (!result) {
                alert(wrongHashMessage);
                console.log("".concat(wrongHashMessage, ", got "), signature, " but proved wrong.");
              }

              return _context5.abrupt("return", result);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _verifyContent.apply(this, arguments);
  }

  function decrypt(_x5, _x6, _x7) {
    return _decrypt.apply(this, arguments);
  }

  function _decrypt() {
    _decrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(decryptKey, iv, hmacKey) {
      var typedArray, result;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              typedArray = hexToArray(encryptedData);
              _context7.next = 3;
              return cryptoObj.subtle.decrypt({
                'name': 'AES-CBC',
                'iv': iv
              }, decryptKey, typedArray.buffer).then( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(result) {
                  var decoder, decoded, hideButton, tocDiv, tocDivs, idx;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          decoder = new TextDecoder();
                          decoded = decoder.decode(result);
                          hideButton = document.createElement('button');
                          hideButton.textContent = 'Encrypt again';
                          hideButton.type = 'button';
                          hideButton.classList.add("hbe-button");
                          hideButton.addEventListener('click', function () {
                            window.localStorage.removeItem(storageName);
                            window.location.reload();
                          });
                          document.getElementById('hexo-blog-encrypt').style.display = 'inline';
                          document.getElementById('hexo-blog-encrypt').innerHTML = '';
                          _context6.t0 = document.getElementById('hexo-blog-encrypt');
                          _context6.next = 12;
                          return convertHTMLToElement(decoded);

                        case 12:
                          _context6.t1 = _context6.sent;

                          _context6.t0.appendChild.call(_context6.t0, _context6.t1);

                          document.getElementById('hexo-blog-encrypt').appendChild(hideButton); // support html5 lazyload functionality.

                          document.querySelectorAll('img').forEach(function (elem) {
                            if (elem.getAttribute("data-src") && !elem.src) {
                              elem.src = elem.getAttribute('data-src');
                            }
                          }); // TOC part

                          tocDiv = document.getElementById("toc-div");

                          if (tocDiv) {
                            tocDiv.style.display = 'inline';
                          }

                          tocDivs = document.getElementsByClassName('toc-div-class');

                          if (tocDivs && tocDivs.length > 0) {
                            for (idx = 0; idx < tocDivs.length; idx++) {
                              tocDivs[idx].style.display = 'inline';
                            }
                          }

                          _context6.next = 22;
                          return verifyContent(hmacKey, decoded);

                        case 22:
                          return _context6.abrupt("return", _context6.sent);

                        case 23:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x10) {
                  return _ref3.apply(this, arguments);
                };
              }())["catch"](function (e) {
                alert(wrongPassMessage);
                console.log(e);
                return false;
              });

            case 3:
              result = _context7.sent;
              return _context7.abrupt("return", result);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _decrypt.apply(this, arguments);
  }

  function hbeLoader() {
    var oldStorageData = JSON.parse(storage.getItem(storageName));

    if (oldStorageData) {
      console.log("Password got from localStorage(".concat(storageName, "): "), oldStorageData);
      var sIv = hexToArray(oldStorageData.iv).buffer;
      var sDk = oldStorageData.dk;
      var sHmk = oldStorageData.hmk;
      cryptoObj.subtle.importKey('jwk', sDk, {
        'name': 'AES-CBC',
        'length': 256
      }, true, ['decrypt']).then(function (dkCK) {
        cryptoObj.subtle.importKey('jwk', sHmk, {
          'name': 'HMAC',
          'hash': 'SHA-256',
          'length': 256
        }, true, ['verify']).then(function (hmkCK) {
          decrypt(dkCK, sIv, hmkCK).then(function (result) {
            if (!result) {
              storage.removeItem(storageName);
            }
          });
        });
      });
    }

    mainElement.addEventListener('keydown', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var password, keyMaterial, hmacKey, decryptKey, iv;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(event.isComposing || event.keyCode === 13)) {
                  _context.next = 15;
                  break;
                }

                password = document.getElementById('hbePass').value;
                _context.next = 4;
                return getKeyMaterial(password);

              case 4:
                keyMaterial = _context.sent;
                _context.next = 7;
                return getHmacKey(keyMaterial);

              case 7:
                hmacKey = _context.sent;
                _context.next = 10;
                return getDecryptKey(keyMaterial);

              case 10:
                decryptKey = _context.sent;
                _context.next = 13;
                return getIv(keyMaterial);

              case 13:
                iv = _context.sent;
                decrypt(decryptKey, iv, hmacKey).then(function (result) {
                  console.log("Decrypt result: ".concat(result));

                  if (result) {
                    cryptoObj.subtle.exportKey('jwk', decryptKey).then(function (dk) {
                      cryptoObj.subtle.exportKey('jwk', hmacKey).then(function (hmk) {
                        var newStorageData = {
                          'dk': dk,
                          'iv': arrayBufferToHex(iv),
                          'hmk': hmk
                        };
                        storage.setItem(storageName, JSON.stringify(newStorageData));
                      });
                    });
                  }
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x8) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  hbeLoader();
})();