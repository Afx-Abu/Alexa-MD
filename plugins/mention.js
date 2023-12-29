const config = require("../config");
const {
  Alexa,
  toAudio,
  AddMp3Meta,
  getBuffer
} = require("../lib/");
const {
  setMention,
  getMention
} = require("../lib/database/mention");
async function mention(_0x2c17c3, _0x492709) {
  try {
    const _0x307ca0 = await getMention();
    if (!_0x307ca0) {
      return;
    } else {
      if (_0x307ca0 === "off") {
        return;
      } else {
        const _0x2fd70d = '' + _0x307ca0;
        const _0x776073 = _0x1455f3 => {
          const _0x4330ca = _0x1455f3.indexOf('{');
          const _0x5f6d13 = _0x1455f3.lastIndexOf('}');
          if (_0x4330ca !== -1 && _0x5f6d13 !== -1) {
            return _0x1455f3.substring(_0x4330ca, _0x5f6d13 + 1);
          }
          if (_0x4330ca === 0 && _0x5f6d13 === _0x1455f3.length - 1) {
            return _0x1455f3;
          }
          return null;
        };
        const _0xae5d0f = _0x776073(_0x2fd70d);
        if (_0xae5d0f) {
          try {
            JSON.parse(_0xae5d0f);
            const [_0x4f2bb3, _0x467303] = _0x2fd70d.split(" type/audio ");
            const _0x17239d = JSON.parse(_0x467303);
            function _0x19b761(_0x808151) {
              const _0x3813d4 = _0x808151.match(/(https?:\/\/[^\s]+(\.mp4|\.mp3))/gi);
              return _0x3813d4 || [];
            }
            const _0x44b9ef = '' + _0x4f2bb3;
            const _0xa766c1 = _0x19b761(_0x44b9ef);
            const _0x4dcf64 = _0xa766c1[Math.floor(Math.random() * _0xa766c1.length)];
            const _0x442631 = _0x4dcf64.indexOf("type/");
            const _0x487062 = _0x442631 !== -1 ? _0x4dcf64.slice(0, _0x442631).trim() : _0x4dcf64.trim();
            const _0x17d775 = _0x17239d.contextInfo.externalAdReply.title;
            const _0x4b47ed = _0x17239d.contextInfo.externalAdReply.body;
            const _0x51a4f7 = _0x17239d.contextInfo.externalAdReply.forwardingScore;
            const _0x471483 = _0x17239d.contextInfo.externalAdReply.mediaType;
            const _0x1dd026 = _0x17239d.contextInfo.externalAdReply.sourceUrl;
            const _0x5ee773 = _0x17239d.contextInfo.externalAdReply.mediaUrl;
            const _0x2ab03f = _0x17239d.contextInfo.externalAdReply.thumbnail;
            const _0x3d5a74 = await getBuffer(_0x2ab03f);
            const _0x466cc5 = await getBuffer(_0x487062);
            const _0x56da85 = Buffer.from(_0x466cc5);
            var _0x311730 = await toAudio(_0x56da85, "mp4");
            const _0x2d2761 = config.AUDIO_DATA.split(';');
            const _0x16dbe8 = _0x2d2761[0];
            const _0x7cb875 = _0x2d2761[1];
            const _0x42236c = _0x2d2761[2];
            const _0xd34251 = await getBuffer(_0x42236c);
            const _0x5b8acb = await AddMp3Meta(_0x311730, _0xd34251, {
              'title': _0x16dbe8,
              'body': _0x7cb875
            });
            const _0x4dc079 = {
              'contextInfo': {
                'forwardingScore': _0x51a4f7,
                'isForwarded': true,
                'externalAdReply': {
                  'title': _0x17d775,
                  'body': _0x4b47ed,
                  'thumbnail': _0x3d5a74,
                  'mediaType': _0x471483,
                  'mediaUrl': _0x5ee773,
                  'sourceUrl': _0x1dd026,
                  'showAdAttribution': true
                }
              }
            };
            return await _0x2c17c3.client.sendMessage(message.jid, {
              'audio': _0x5b8acb,
              'mimetype': "audio/mpeg",
              'ptt': true,
              ..._0x4dc079
            }, {
              'quoted': _0x2c17c3
            });
          } catch (_0x338d2a) {
            await _0x2c17c3.client.sendMessage(_0x2c17c3.user.id, {
              'text': "_Your format has an error, please check the format https://github.com/Loki-Xer/Jarvis-md/wiki_"
            });
          }
        } else {
          const _0x5b0705 = _0x2fd70d.split(" ");
          const _0x8c88c2 = Math.floor(Math.random() * _0x5b0705.length);
          const _0x1d12e8 = _0x5b0705[_0x8c88c2];
          try {
            const _0x11f9f7 = _0x1d12e8.indexOf("type/");
            const _0x17da5a = _0x11f9f7 !== -1 ? _0x1d12e8.slice(0, _0x11f9f7).trim() : _0x1d12e8.trim();
            if (_0x2fd70d.includes("type/image")) {
              const _0x3548bf = await getBuffer(_0x17da5a);
              await _0x2c17c3.client.sendMessage(message.jid, {
                'image': _0x3548bf
              }, {
                'quoted': _0x2c17c3
              });
            } else {
              if (_0x2fd70d.includes("type/video")) {
                const _0x356446 = await getBuffer(_0x17da5a);
                await _0x2c17c3.client.sendMessage(message.jid, {
                  'video': _0x356446
                }, {
                  'quoted': _0x2c17c3
                });
              } else {
                if (_0x2fd70d.includes("type/text")) {
                  const _0x3440d3 = _0x307ca0.replace("&mention", " @" + _0x2c17c3.sender.split('@')[0]);
                  const _0x52856f = _0x3440d3.replace("type/text", " ");
                  return await _0x2c17c3.client.sendMessage(message.jid, {
                    'text': '' + _0x52856f
                  }, {
                    'quoted': _0x2c17c3
                  });
                } else {
                  if (_0x2fd70d.includes("type/sticker")) {
                    const _0x46bd99 = await getBuffer(_0x17da5a);
                    const _0xef3984 = config.STICKER_PACKNAME.split(';');
                    await _0x2c17c3.sendSticker(message.jid, _0x46bd99, {
                      'packname': _0xef3984[0],
                      'author': _0xef3984[1],
                      'quoted': _0x2c17c3
                    });
                  } else {
                    if (_0x2fd70d.includes("type/gif")) {
                      const _0x2a56d3 = await getBuffer(_0x17da5a);
                      await _0x2c17c3.client.sendMessage(message.jid, {
                        'video': _0x2a56d3,
                        'gifPlayback': true
                      }, {
                        'quoted': _0x2c17c3
                      });
                    } else {
                      if (_0x2fd70d.includes("type/react")) {
                        await _0x2c17c3.client.sendMessage(message.jid, {
                          'react': {
                            'text': _0x17da5a,
                            'key': _0x2c17c3.key
                          }
                        });
                      } else {
                        if (_0x2fd70d.includes("type/audio")) {
                          const _0x32dc75 = await getBuffer(_0x17da5a);
                          const _0x2fb71c = Buffer.from(_0x32dc75);
                          var _0x311730 = await toAudio(_0x2fb71c, "mp4");
                          const _0x327bec = config.AUDIO_DATA.split(';');
                          const _0x3c4e07 = _0x327bec[0];
                          const _0x3e3454 = _0x327bec[1];
                          const _0x42cf15 = _0x327bec[2];
                          const _0x3be5f2 = await getBuffer(_0x42cf15);
                          const _0x2a8b10 = await AddMp3Meta(_0x311730, _0x3be5f2, {
                            'title': _0x3c4e07,
                            'body': _0x3e3454
                          });
                          await _0x2c17c3.client.sendMessage(_0x2c17c3.jid, {
                            'audio': _0x2a8b10,
                            'mimetype': "audio/mpeg",
                            'ptt': true
                          }, {
                            'quoted': _0x2c17c3
                          });
                        } else {
                          await _0x2c17c3.client.sendMessage(message.jid, {
                            'text': '' + _0x307ca0
                          }, {
                            'quoted': _0x2c17c3
                          });
                        }
                      }
                    }
                  }
                }
              }
            }
          } catch (_0x3ae163) {
            console.error("An error occurred: " + _0x3ae163.message);
          }
        }
      }
    }
  } catch (_0x5aba57) {
    console.error("Error in message handling:", _0x5aba57);
  }
}
module.exports = mention;
Alexa({
  'pattern': "mention",
  'on': "all",
  'allowBot': true,
  'fromMe': "isPrivate",
  'dontAddCommandList': true
}, async (_0x279b15, _0x5f48e3) => {
  try {
    if (!_0x279b15.mention.isOwner) {
      return;
    }
    return await mention(_0x279b15, _0x5f48e3);
  } catch (_0x151ad8) {
    console.error("Error in Alexa setup:", _0x151ad8);
  }
});
Alexa({
  'pattern': "mention ?(.*)",
  'fromMe': true,
  'desc': "mention",
  'type': "user"
}, async (_0x2a0ab0, _0x2bab8b) => {
  const _0xfdef36 = await getMention();
  if (_0x2bab8b === "get" && _0x2a0ab0.sudo.includes(_0x2a0ab0.sender)) {
    return await _0x2a0ab0.send(_0xfdef36);
  } else {
    if (_0x2bab8b && _0x2a0ab0.sudo.includes(_0x2a0ab0.sender)) {
      await setMention(_0x2bab8b);
      return await _0x2a0ab0.send("_Mention Updated_");
    }
  }
  return await _0x2a0ab0.send("_You can check the format of mention https://github.com/Loki-Xer/Jarvis-md/wiki_");
});
