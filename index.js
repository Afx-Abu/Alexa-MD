

const fs = require("fs");

const pino = require("pino");

const 
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  delay,
  DisconnectReason,
  makeInMemoryStore,
} = require("@whiskeysockets/baileys");

const { PausedChats } = require("./lib/database");

require("events").EventEmitter.defaultMaxListeners = 15;

const path = require("path");

const { Image, Message, Sticker, Video } = require("./lib/base");

const config = require("./config");

const plugins = require("./lib/plugins");

const { serialize, Greetings } = require("./lib");

const logger = pino({ level: "silent" });

const store = makeInMemoryStore({ logger: logger.child({ stream: "store" }) });

const readAndRequireFiles = async (directory) => {
  const files = await fs.readdir(directory);
  return Promise.all(
    files
      .filter((file) => path.extname(file).toLowerCase() === ".js")
      .map((file) => require(path.join(directory, file)))
  );
};

function Jsl_0x173c(){const _0x3db71e=['split','./lib/auth_info_baileys','4566930qQbKGt','SESSION_ID','1073079QlHbzb','log','1140168kWjVpJ','2914428DlLAII','replaceAll','existsSync','map','content','length','./lib/auth_info_baileys/creds.json','files','6278tkCPQb','writeFileSync','test','45RTJiaG','5cPHKJy','18809240ycCqFf','223LKyLgc','replace','673971PFEtYM','axios','jsl~'];Jsl_0x173c=function(){return _0x3db71e;};return Jsl_0x173c();}const Jsl_0x58e219=Jsl_0x1bc7;(function(_0x47abe1,_0x29b084){const _0x1dc3fe=Jsl_0x1bc7,_0x5cfd20=_0x47abe1();while(!![]){try{const _0x587475=-parseInt(_0x1dc3fe(0xf9))/0x1*(parseInt(_0x1dc3fe(0xf3))/0x2)+-parseInt(_0x1dc3fe(0xfb))/0x3+-parseInt(_0x1dc3fe(0xeb))/0x4+parseInt(_0x1dc3fe(0xf7))/0x5*(parseInt(_0x1dc3fe(0x100))/0x6)+parseInt(_0x1dc3fe(0xe8))/0x7+parseInt(_0x1dc3fe(0xea))/0x8*(-parseInt(_0x1dc3fe(0xf6))/0x9)+parseInt(_0x1dc3fe(0xf8))/0xa;if(_0x587475===_0x29b084)break;else _0x5cfd20['push'](_0x5cfd20['shift']());}catch(_0x46f74f){_0x5cfd20['push'](_0x5cfd20['shift']());}}}(Jsl_0x173c,0x68dc6));function decrypt(_0xc2ecf3){const _0x434401=Jsl_0x1bc7;let _0x27ee45=_0xc2ecf3['split'](''),_0x4570dc='',_0x5078e0='',_0x3fdd69='',_0x49cfee;return _0x27ee45[_0x434401(0xee)](_0x5dbaef=>{const _0x29b255=_0x434401;_0x4570dc['length']<0x5?_0x4570dc+=_0x5dbaef:_0x5078e0=_0xc2ecf3['replace'](_0x4570dc,'');let _0x98a596=_0x5078e0[_0x29b255(0xfe)]('');_0x98a596[_0x29b255(0xee)](_0x29d1f7=>{const _0x162c16=_0x29b255;_0x3fdd69[_0x162c16(0xf0)]<0x4&&(_0x3fdd69+=_0x29d1f7);});}),_0x49cfee=_0x4570dc+_0xc2ecf3[_0x434401(0xfa)](_0x4570dc,'')['replace'](_0x3fdd69,''),_0x49cfee;}let plaintext=config[Jsl_0x58e219(0x101)][Jsl_0x58e219(0xec)](Jsl_0x58e219(0xfd),''),session=decrypt(plaintext);function Jsl_0x1bc7(_0x38dfa7,_0x468e94){const _0x173cb2=Jsl_0x173c();return Jsl_0x1bc7=function(_0x1bc7e3,_0x2dba24){_0x1bc7e3=_0x1bc7e3-0xe8;let _0x249ba2=_0x173cb2[_0x1bc7e3];return _0x249ba2;},Jsl_0x1bc7(_0x38dfa7,_0x468e94);}const axios=require(Jsl_0x58e219(0xfc));async function connect(_0x4343d5){const _0x1d8ccd=Jsl_0x58e219;!_0x4343d5&&(console[_0x1d8ccd(0xe9)]('please\x20provide\x20a\x20session\x20id\x20in\x20config.js\x0a\x0ascan\x20from\x20Jsl\x20server'),process['exit'](0x1));if(!fs[_0x1d8ccd(0xed)](_0x1d8ccd(0xff))){}let _0x5a0fb0='https://api.github.com/gists/'+_0x4343d5,{data:_0x3db9e9}=await axios(_0x5a0fb0),_0x1113e7=_0x3db9e9[_0x1d8ccd(0xf2)][_0x1d8ccd(0xf5)][_0x1d8ccd(0xef)];fs[_0x1d8ccd(0xf4)](_0x1d8ccd(0xf1),_0x1113e7);}connect(session);


const connect = async () => {
  console.log("Alexa MD 2.0.1");
  config.DATABASE.sync();
  console.log("⬇  Installing Plugins...");
  await readAndRequireFiles(__dirname + "/lib/database/");
  await readAndRequireFiles(__dirname + "/plugins/");
  console.log("✅ Plugins Installed!");

  const Alexa = async () => {
    const { state, saveCreds } = await useMultiFileAuthState(
    "./lib/auth_info_baileys/",
    pino({ level: "silent" })
  )
  await config.DATABASE.sync();
  let conn = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    browser: Browsers.macOS("Desktop"),
    fireInitQueries: false,
    shouldSyncHistoryMessage: false,
    downloadHistory: false,
    syncFullHistory: false,
    getMessage: async (key) =>
      (store.loadMessage(key.id) || {}).message || {
        conversation: null,
      },
  });
  store.bind(conn.ev);
    setInterval(() => {
      store.writeToFile("./lib/database/store.json");
    }, 30 * 1000);
    conn.ev.on("connection.update", async (s) => {
      const { connection, lastDisconnect } = s;
      if (connection === "connecting") {
      }

      if (connection === "open") {
        console.log("✅ Login Successful!");
        const packageVersion = require("./package.json").version;
        const totalPlugins = plugins.commands.length;
        const workType = config.WORK_TYPE;
        const str = `\`\`\`Alexa Connected
  Version: ${packageVersion}
  Total Plugins: ${totalPlugins}
  Worktype: ${workType}\`\`\``;
        conn.sendMessage(conn.user.id, {
          text: str,
        });
      }

      if (connection === "close") {
        if (
          lastDisconnect.error?.output?.statusCode !==
          DisconnectReason.loggedOut
        ) {
          await delay(300);
          Alexa();
          console.log("reconnecting...");
        } else {
          console.log("connection closed\nDevice logged out.");
          await delay(3000);
          process.exit(0);
        }
      }
    });

    conn.ev.on("creds.update", saveCreds);
    conn.ev.on("messages.reaction", async (data) => {
      fs.writeFile("./tmp.txt", JSON.stringify(data,null,2).toString());
    });
    conn.ev.on("group-participants.update", async (data) => {
      Greetings(data, conn);
    });
    conn.ev.on("messages.upsert", async (m) => {
      if (m.type !== "notify") return;
      let msg = await serialize(
        JSON.parse(JSON.stringify(m.messages[0])),
        conn
      );
      let text_msg = msg.body;
      if (!msg) return;
      const regex = new RegExp(`${config.HANDLERS}( ?resume)`, "is");
      isResume = regex.test(text_msg);
      const chatId = msg.from;
      try {
        const pausedChats = await PausedChats.getPausedChats();
        if (
          pausedChats.some(
            (pausedChat) => pausedChat.chatId === chatId && !isResume
          )
        ) {
          return;
        }
      } catch (error) {
        console.error(error);
      }

      if (text_msg && config.LOGS)
        console.log(
          `At : ${
            msg.from.endsWith("@g.us")
              ? (await conn.groupMetadata(msg.from)).subject
              : msg.from
          }\nFrom : ${msg.sender}\nMessage:${text_msg}`
        );
      plugins.commands.map(async (command) => {
        if (
          command.fromMe &&
          !config.SUDO.split(",").includes(
            msg.sender.split("@")[0] || !msg.isSelf
          )
        ) {
          return;
        }

        let comman = text_msg;
        msg.prefix = new RegExp(config.HANDLERS).test(text_msg)
          ? text_msg[0].toLowerCase()
          : "!";
        let whats;
        switch (true) {
          case command.pattern && command.pattern.test(comman):
            let match;
            try {
              match = text_msg
                .replace(new RegExp(command.pattern, "i"), "")
                .trim();
            } catch {
              match = false;
            }
            whats = new Message(conn, msg);
            command.function(whats, match, msg, conn);
            break;

          case text_msg && command.on === "text":
            whats = new Message(conn, msg);
            command.function(whats, text_msg, msg, conn, m);
            break;

          case command.on === "image" || command.on === "photo":
            if (msg.type === "imageMessage") {
              whats = new Image(conn, msg);
              command.function(whats, text_msg, msg, conn, m);
            }
            break;

          case command.on === "sticker":
            if (msg.type === "stickerMessage") {
              whats = new Sticker(conn, msg);
              command.function(whats, msg, conn, m);
            }
            break;
          case command.on === "video":
            if (msg.type === "videoMessage") {
              whats = new Video(conn, msg);
              command.function(whats, msg, conn, m);
            }
            break;

          default:
            break;
        }
      });
    });
    process.on("uncaughtException", async (err) => {
      await conn.sendMessage(conn.user.id, { text: err.message });
    });
    return conn;
  };
  try {
    await Alexa();
  } catch (error) {
    console.log(error);
  }
};

setTimeout(async () => {
  await connect();
}, 100);
  
