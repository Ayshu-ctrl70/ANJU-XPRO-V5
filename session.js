//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUt4TXZEcFZnT0R0UlZ3dmtUOTBhc0h0NEoveUl0VkZkU0EvOGJ4MVJGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREVvOUNUQVpPUlg3emFGQS8xOGNCRk4zWm9aUndYWDJpVXBHZmNQTUMycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQ2VsMTZrNDNVcm5zWVdPUlB4MmYrTVNlWmt6blFKTS8yTzVyMUptc25FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrbEdua3NEa2xaZjVkTnVyVEQrak90cnpPbUhRNGtXWXdpM2tHZjE3RVZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGYlNxaUovOEt3elI0UWhwclQzUTljUm9JODZCWnZoeXVUVXRmTXFXVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhDMmRYa2NPMWJobHZKQlRHYTlzSDVqQ2d6M3BQQ2kySXBLTjVaMEVzV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JjOVdhS1BGeUZzdHA3TkZjOExsczRRME1NYmFvZ3AvOW5CN0hhdHVVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm1EUjBnWVdHRlB6RHlNOThyTC9xVTFPdi9Wb3VPY2Q1bmthOERpQlF4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZSTHZWY3NibTM4YWFWWmNVVFp4SlBKN3YrMDZxMDZlVDdHWkpLZjd1dENsYWVqOUlBRUhHaE9hazBxdWhOSFNudDVpT1lGMkhQblZxTzNzZG1yaUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6InhCSHRJZzhHVlZZMGVyS2tQWlMrejQ3am9LSEZvT0wwNGJyZ1RuZDYxcUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRjNDFLc0ltUlR1NTUxWUZaN0UyVWciLCJwaG9uZUlkIjoiYWRhOGZiZjQtMjgyOC00NmJiLTlkYTEtOTgzNzRhMmE2NWEzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMVytwM3hzaWlQc3FremlnajlOamQ3YXhMMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5MEhINnE5QUJZUGdZQnhvVis2dlFjamQ4RWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSk00RVpKUDYiLCJtZSI6eyJpZCI6Ijk0NzczNTE1ODc1OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjE1MTI4NDkxNzQ2MTk6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05TUHdab0JFTWprcGNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVveHQ0ZjJxNm9vbjRQbW8vNS9Tb3dxSXNyRlNGY0Y4bmo2Q0phWmswSG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IldHNVZ3TUFoQmQ2UHNnWUdLMWFySlByRkFhZ1pKU3ZmTEtEKzNnY3VOZHorTzJTd0FzNjk5VVZsVDVha0hFR0lMa2RXa3ZEa3BGT3BVSVdDLzVtRUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrTDBLd3l3M3lPYTNuMnZ6ZEZwSVp6RjF2VWlpelcza0lnTjltV3pmb0s3Qjh4WkdCTkNwbU9KOGdBbStRNjRIcFV1R2EzakxSbUVpN2VoY1gvRk9Cdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzczNTE1ODc1OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUktNYmVIOXF1cUtKK0Q1cVArZjBxTUtpTEt4VWhYQmZKNCtnaVdtWk5CNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NjQzODYyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
