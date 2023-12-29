const config = require("../../config");
const {
  DataTypes
} = require("sequelize");
const DB = config.DATABASE.define("Mention", {
  'MENTION_DATA': {
    'type': DataTypes.TEXT,
    'allowNull': true
  }
});
async function setMention(_0x27b32c) {
  try {
    const _0x57df42 = await DB.findOne();
    if (!_0x57df42) {
      await DB.create({
        'MENTION_DATA': _0x27b32c
      });
    } else {
      await _0x57df42.update({
        'MENTION_DATA': _0x27b32c
      });
    }
    return true;
  } catch (_0x20bffd) {
    console.error("Error in setMention:", _0x20bffd);
    return false;
  }
}
async function getMention() {
  try {
    const _0x51653c = await DB.findOne();
    if (!_0x51653c) {
      return false;
    }
    return _0x51653c.MENTION_DATA;
  } catch (_0x3b5ceb) {
    console.error("Error in getMention:", _0x3b5ceb);
    return false;
  }
}
module.exports = {
  'setMention': setMention,
  'getMention': getMention
};
