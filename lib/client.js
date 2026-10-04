window.__ModuleLoader__.load({ id: "dsh-session-emoji", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(client_exports);

// src/emoji-data.ts
var EMOJI_CATEGORIES = [
  {
    "id": "smileys",
    "en": "Smileys & Emotion",
    "zh": "\u7B11\u8138\u4E0E\u60C5\u611F"
  },
  {
    "id": "people",
    "en": "People & Body",
    "zh": "\u4EBA\u7269\u4E0E\u8EAB\u4F53"
  },
  {
    "id": "animals",
    "en": "Animals & Nature",
    "zh": "\u52A8\u7269\u4E0E\u81EA\u7136"
  },
  {
    "id": "food",
    "en": "Food & Drink",
    "zh": "\u98DF\u7269\u4E0E\u996E\u54C1"
  },
  {
    "id": "travel",
    "en": "Travel & Places",
    "zh": "\u65C5\u884C\u4E0E\u5730\u70B9"
  },
  {
    "id": "activities",
    "en": "Activities",
    "zh": "\u6D3B\u52A8"
  },
  {
    "id": "objects",
    "en": "Objects",
    "zh": "\u7269\u54C1"
  },
  {
    "id": "symbols",
    "en": "Symbols",
    "zh": "\u7B26\u53F7"
  }
];
var EMOJI_ROWS = [
  ["\u{1F600}", "grinning face", "\u563F\u563F", "\u7B11\u8138|\u8138|\u9AD8\u5174|cheerful|cheery|face|grin", 0],
  ["\u{1F603}", "grinning face with big eyes", "\u54C8\u54C8", "\u592A\u68D2\u4E86|\u5F00\u53E3\u7B11|\u5F00\u53E3\u7B11\u8138|\u7B11\u8138|awesome|big|eyes|face", 0],
  ["\u{1F604}", "grinning face with smiling eyes", "\u5927\u7B11", "\u54C8\u54C8|\u5F00\u53E3\u800C\u7B11\u7684\u8138|\u5F00\u5FC3|\u7B11|eye|eyes|face|grin", 0],
  ["\u{1F601}", "beaming face with smiling eyes", "\u563B\u563B", "\u7B11\u8138|\u7B11\u989C|\u8138|\u9732\u9F7F\u800C\u7B11|beaming|eye|eyes|face", 0],
  ["\u{1F606}", "grinning squinting face", "\u659C\u773C\u7B11", "lol|\u54A7\u5634\u7B11|\u54C8\u54C8|\u5F00\u5FC3|closed|eyes|face|grinning", 0],
  ["\u{1F605}", "grinning face with sweat", "\u82E6\u7B11", "\u51B7\u6C57|\u51FA\u6C57|\u5F00\u53E3\u5192\u51B7\u6C57\u7684\u8138|\u6C57|cold|dejected|excited|face", 0],
  ["\u{1F923}", "rolling on the floor laughing", "\u7B11\u5F97\u6EE1\u5730\u6253\u6EDA", "lolol|\u4E50\u7FFB\u4E86|\u54C8\u54C8|\u5730\u677F|crying|face|floor|funny", 0],
  ["\u{1F602}", "face with tears of joy", "\u7B11\u54ED\u4E86", "lol|\u559C\u6781\u800C\u6CE3|\u5927\u7B11|\u773C\u6CEA|crying|face|feels|funny", 0],
  ["\u{1F642}", "slightly smiling face", "\u5475\u5475", "\u5F00\u5FC3|\u6D45\u7B11\u7684\u8138|\u7B11|\u8138|face|happy|slightly|smile", 0],
  ["\u{1F643}", "upside-down face", "\u5012\u8138", "\u597D\u73A9|\u597D\u7B11|\u8138|\u98A0\u5012|face|hehe|smile|upside-down", 0],
  ["\u{1FAE0}", "melting face", "\u878D\u5316", "\u51B7\u7B11|\u54C8\u54C8|\u5C34\u5C2C|\u5FAE\u7B11|disappear|dissolve|embarrassed|face", 0],
  ["\u{1FAEB}", "cracking face", "cracking face", "", 0],
  ["\u{1F609}", "winking face", "\u7728\u773C", "\u5A9A\u773C|\u64A9\u62E8|\u7728\u773C\u7684\u8138|\u7B11|face|flirt|heartbreaker|sexy", 0],
  ["\u{1F60A}", "smiling face with smiling eyes", "\u7F9E\u6DA9\u5FAE\u7B11", "\u5BB3\u7F9E|\u5FAE\u7B11|\u6EE1\u610F|\u7B11\u8138\u76F8\u8FCE|blush|eye|eyes|face", 0],
  ["\u{1F607}", "smiling face with halo", "\u5FAE\u7B11\u5929\u4F7F", "\u5149\u73AF|\u5929\u4F7F|\u5929\u771F|\u5E7B\u60F3|angel|angelic|angels|blessed", 0],
  ["\u{1F970}", "smiling face with hearts", "\u559C\u7B11\u989C\u5F00", "\u4E09\u9897\u7231\u5FC3\u7684\u7B11\u8138|\u5FC3|\u6211\u7231\u4F60|\u7231\u6155|3|adore|crush|face", 0],
  ["\u{1F60D}", "smiling face with heart-eyes", "\u82B1\u75F4", "\u6211\u7231\u4F60|\u7231|\u7EA2\u5FC3|\u8138|143|bae|eye|face", 0],
  ["\u{1F929}", "star-struck", "\u597D\u5D07\u62DC\u54E6", "\u5174\u594B|\u54A7\u5634\u7B11|\u6EE1\u5929\u661F|\u6EE1\u773C\u661F|excited|eyes|face|grinning", 0],
  ["\u{1F618}", "face blowing a kiss", "\u98DE\u543B", "\u4EB2\u4EB2|\u60F3\u4F60|\u6211\u7231\u4F60|\u7728\u773C|adorbs|bae|blowing|face", 0],
  ["\u{1F617}", "kissing face", "\u4EB2\u4EB2", "\u4EB2\u543B|\u543B|\u8138|143|date|dating|face", 0],
  ["\u263A\uFE0F", "smiling face", "\u5FAE\u7B11", "\u5475\u5475|\u5F00\u5FC3|\u653E\u677E|\u7B11|face|happy|outlined|relaxed", 0],
  ["\u{1F61A}", "kissing face with closed eyes", "\u7F9E\u6DA9\u4EB2\u4EB2", "\u4EB2\u4EB2|\u543B|\u6211\u7231\u4F60|\u7F9E\u6DA9|143|bae|blush|closed", 0],
  ["\u{1F619}", "kissing face with smiling eyes", "\u5FAE\u7B11\u4EB2\u4EB2", "\u4EB2\u4EB2|\u543B|\u5FAE\u7B11|\u7B11\u989C\u4EB2\u543B|143|closed|date|dating", 0],
  ["\u{1F972}", "smiling face with tear", "\u542B\u6CEA\u7684\u7B11\u8138", "\u559C\u60A6|\u559C\u6781\u800C\u6CE3|\u5E78\u798F|\u5FAE\u7B11|face|glad|grateful|happy", 0],
  ["\u{1F60B}", "face savoring food", "\u597D\u5403", "\u53E3\u6C34|\u54C8\u5587\u5B50|\u6D25\u6D25\u6709\u5473|\u6D41\u53E3\u6C34|delicious|eat|face|food", 0],
  ["\u{1F61B}", "face with tongue", "\u5410\u820C", "\u5410\u820C\u5934\u7684\u8138|\u592A\u597D\u4E86|\u8138|\u820C\u5934|awesome|cool|face|nice", 0],
  ["\u{1F61C}", "winking face with tongue", "\u5355\u773C\u5410\u820C", "\u5355\u773C|\u53E4\u602A|\u5410\u820C|\u5F00\u73A9\u7B11|crazy|epic|eye|face", 0],
  ["\u{1F92A}", "zany face", "\u6ED1\u7A3D", "\u5927\u5C0F\u773C|\u5927\u773C|\u5C0F\u773C|\u6ED1\u7A3D\u7684\u8138|crazy|eye|eyes|face", 0],
  ["\u{1F61D}", "squinting face with tongue", "\u772F\u773C\u5410\u820C", "\u53EF\u6015|\u5410\u820C|\u5C1D|\u772F\u773C|closed|eye|eyes|face", 0],
  ["\u{1F911}", "money-mouth face", "\u53D1\u8D22", "\u62DC\u91D1|\u8138|\u89C1\u94B1\u773C\u5F00|\u91D1\u94B1\u81F3\u4E0A|face|money|money-mouth|mouth", 0],
  ["\u{1F917}", "smiling face with open hands", "\u62B1\u62B1", "\u62B1|\u62E5\u62B1|\u7B11|\u8138|face|hands|hug|hugging", 0],
  ["\u{1F92D}", "face with hand over mouth", "\u4E0D\u8BF4", "\u4E0D\u53EF\u8BF4|\u50BB\u7B11|\u5403\u5403\u50BB\u7B11|\u54CE\u5440|face|giggle|giggling|hand", 0],
  ["\u{1FAE2}", "face with open eyes and hand over mouth", "\u7741\u773C\u6342\u5634", "\u54C7\u585E|\u54D1\u53E3\u65E0\u8A00|\u5BB3\u6015|\u5C34\u5C2C|amazement|awe|disbelief|embarrass", 0],
  ["\u{1FAE3}", "face with peeking eye", "\u5077\u770B", "\u5077\u7AA5|\u51DD\u89C6|\u5BB3\u6015|\u5BB3\u7F9E|captivated|embarrass|eye|face", 0],
  ["\u{1F92B}", "shushing face", "\u5B89\u9759\u7684\u8138", "\u5618|\u5618\u58F0\u624B\u52BF\u7684\u8138|\u5B89\u9759|face|quiet|shh|shush", 0],
  ["\u{1F914}", "thinking face", "\u60F3\u4E00\u60F3", "\u601D\u8003|\u60F3|\u60F3\u4E8B\u60C5|\u8138|chin|consider|face|hmm", 0],
  ["\u{1FAE1}", "saluting face", "\u81F4\u656C", "\u519B\u961F|\u597D|\u597D\u7684|\u6536\u5230|face|good|luck|ma\u2019am", 0],
  ["\u{1F910}", "zipper-mouth face", "\u95ED\u5634", "\u4F4F\u5634|\u5634|\u5C01\u53E3|\u79D8\u5BC6|face|keep|mouth|quiet", 0],
  ["\u{1F928}", "face with raised eyebrow", "\u6311\u7709", "\u4E0D\u4FE1\u4EFB|\u4E0D\u6562\u7F6E\u4FE1|\u4E0D\u8D5E\u540C|\u6000\u7591|disapproval|disbelief|distrust|emoji", 0],
  ["\u{1F610}", "neutral face", "\u51B7\u6F20", "\u65E0\u611F|\u8138|\u8868\u60C5\u7A7A\u6D1E|\u9762\u65E0\u8868\u60C5|awkward|blank|deadpan|expressionless", 0],
  ["\u{1F611}", "expressionless face", "\u65E0\u8BED", "\u6CA1\u6709\u53CD\u5E94|\u7EF7\u7740\u8138|\u8138|\u832B\u7136|awkward|dead|expressionless|face", 0],
  ["\u{1F636}", "face without mouth", "\u6C89\u9ED8", "\u5634|\u5B89\u9759|\u6CA1\u5634|\u79D8\u5BC6|awkward|blank|expressionless|face", 0],
  ["\u{1FAE5}", "dotted line face", "\u865A\u7EBF\u8138", "\u5185\u5411|\u65E0\u6240\u8C13|\u6CAE\u4E27|\u6D88\u5931|depressed|disappear|dotted|face", 0],
  ["\u{1F636}\u200D\u{1F32B}\uFE0F", "face in clouds", "\u8FF7\u832B", "absentminded|clouds|face|fog", 0],
  ["\u{1F60F}", "smirking face", "\u5F97\u610F", "\u5047\u7B11|\u51B7\u7B11|\u5F97\u610F\u7684\u7B11|\u8138|boss|dapper|face|flirt", 0],
  ["\u{1F612}", "unamused face", "\u4E0D\u9AD8\u5174", "\u4E0D\u5C51|\u4E0D\u670D|\u4E0D\u723D\u7684\u8138|\u8138|...|bored|face|fine", 0],
  ["\u{1F644}", "face with rolling eyes", "\u7FFB\u767D\u773C", "\u4E0D\u6562\u82DF\u540C|\u65E0\u8BED|\u767D\u773C|\u8138|eyeroll|eyes|face|rolling", 0],
  ["\u{1F62C}", "grimacing face", "\u9F87\u7259\u54A7\u5634", "\u54AC\u7259\u5207\u9F7F|\u5C34\u5C2C|\u7259\u533B|\u8138|awk|awkward|dentist|face", 0],
  ["\u{1F62E}\u200D\u{1F4A8}", "face exhaling", "\u547C\u6C14", "\u53F9\u606F|\u53F9\u6C14|\u5439\u6C14|\u547C\u6C14\u7684\u8138|blow|blowing|exhale|exhaling", 0],
  ["\u{1F925}", "lying face", "\u8BF4\u8C0E", "\u5339\u8BFA\u66F9|\u8138|\u957F\u9F3B\u5B50|\u957F\u9F3B\u5B50\u8138|face|liar|lie|lying", 0],
  ["\u{1FAE8}", "shaking face", "\u98A4\u6296", "\u54C7|\u5730\u9707|\u5929\u554A|\u60CA\u559C|crazy|daze|earthquake|face", 0],
  ["\u{1F642}\u200D\u2194\uFE0F", "head shaking horizontally", "\u5DE6\u53F3\u6447\u5934", "\u5426\u5B9A|\u6447\u5934|head|horizontally|no|shake", 0],
  ["\u{1F642}\u200D\u2195\uFE0F", "head shaking vertically", "\u4E0A\u4E0B\u70B9\u5934", "\u70B9\u5934\uFF0C\u80AF\u5B9A|head|nod|shaking|vertically", 0],
  ["\u{1F60C}", "relieved face", "\u677E\u4E86\u53E3\u6C14", "\u5982\u91CA\u91CD\u8D1F|\u677E\u53E3\u6C14|\u8138|\u8749|calm|face|peace|relief", 0],
  ["\u{1F614}", "pensive face", "\u6C89\u601D", "\u5931\u843D|\u5FC3\u4E8B\u91CD\u91CD|\u5FE7\u8651|\u8138|awful|bored|dejected|died", 0],
  ["\u{1F62A}", "sleepy face", "\u56F0", "\u54ED|\u60F3\u7761|\u6EE1\u8138\u7761\u5BB9|\u75B2\u60EB|crying|face|good|night", 0],
  ["\u{1F924}", "drooling face", "\u6D41\u53E3\u6C34", "\u53E3\u6C34|\u5782\u6D8E|\u5782\u6D8E\u4E09\u5C3A|\u6D41\u53E3\u6C34\u7684\u8138|drooling|face", 0],
  ["\u{1F634}", "sleeping face", "\u7761\u7740\u4E86", "\u547C\u565C|\u5C0F\u7761|\u60F3\u7761|\u6253\u547C|bed|bedtime|face|good", 0],
  ["\u{1FAE9}", "face with bags under eyes", "\u6709\u773C\u888B", "\u538C\u5026|\u56F0\u5026|\u665A\u7761|\u71AC\u591C|bags|bored|exhausted|eyes", 0],
  ["\u{1F637}", "face with medical mask", "\u611F\u5192", "\u533B\u751F|\u53E3\u7F69|\u6234\u53E3\u7F69|\u6234\u53E3\u7F69\u7684\u8138|cold|dentist|dermatologist|doctor", 0],
  ["\u{1F912}", "face with thermometer", "\u53D1\u70E7", "\u4F53\u6E29\u8BA1|\u54AC\u7740\u4F53\u6E29\u8BA1\u7684\u8138|\u6E29\u5EA6\u8BA1|\u751F\u75C5|face|ill|sick|thermometer", 0],
  ["\u{1F915}", "face with head-bandage", "\u53D7\u4F24", "\u5934\u7ED1\u7EF7\u5E26|\u6253\u7EF7\u5E26|\u8138|bandage|face|head-bandage|hurt", 0],
  ["\u{1F922}", "nauseated face", "\u6076\u5FC3", "\u5410|\u5455|\u6076\u5FC3\u4F5C\u5455\u7684\u8138|\u8138|face|gross|nasty|nauseated", 0],
  ["\u{1F92E}", "face vomiting", "\u5455\u5410", "\u4E0D\u8212\u670D|\u5410|\u5455\u5410\u7684\u8138|\u751F\u75C5|barf|ew|face|gross", 0],
  ["\u{1F927}", "sneezing face", "\u6253\u55B7\u568F", "\u55B7\u568F|\u6253\u55B7\u568F\u7684\u8138|\u751F\u75C5|\u8138|face|fever|flu|gesundheit", 0],
  ["\u{1F975}", "hot face", "\u8138\u53D1\u70E7", "\u4E2D\u6691|\u5192\u6C57|\u51FA\u6C57|\u53D1\u70E7|dying|face|feverish|heat", 0],
  ["\u{1F976}", "cold face", "\u51B7\u8138", "\u51B0\u67F1|\u51B7|\u51B7\u51B0\u51B0|\u51BB|blue|blue-faced|cold|face", 0],
  ["\u{1F974}", "woozy face", "\u5934\u660F\u773C\u82B1", "\u4E24\u773C\u4E0D\u5E73|\u559D\u9189|\u5634\u5507\u98A4\u6296|\u5934\u6655\u76EE\u7729|dizzy|drunk|eyes|face", 0],
  ["\u{1F635}", "face with crossed-out eyes", "\u6655\u5934\u8F6C\u5411", "\u5934\u6655|\u5934\u6655\u773C\u82B1|\u6655\u5934|\u6655\u5934\u7684\u8138|crossed-out|dead|dizzy|eyes", 0],
  ["\u{1F635}\u200D\u{1F4AB}", "face with spiral eyes", "\u6655", "\u54C7|\u54CE\u5440|\u5934\u6655|\u7B11\u8138|confused|dizzy|eyes|face", 0],
  ["\u{1F92F}", "exploding head", "\u7206\u70B8\u5934", "\u4E0D\u53EF\u80FD|\u5370\u8C61\u6DF1\u523B|\u5413\u5230\u4E86|\u60CA\u5413|blown|explode|exploding|head", 0],
  ["\u{1F920}", "cowboy hat face", "\u725B\u4ED4\u5E3D\u8138", "\u5E3D|\u725B\u4ED4|\u8138|cowboy|cowgirl|face|hat", 0],
  ["\u{1F973}", "partying face", "\u805A\u4F1A\u7B11\u8138", "\u53F7\u89D2|\u559D\u5F69|\u5E3D\u5B50|\u5E86\u795D|bday|birthday|celebrate|celebration", 0],
  ["\u{1F978}", "disguised face", "\u4F2A\u88C5\u7684\u8138", "\u4EBA\u7269|\u4F2A\u88C5|\u7709\u6BDB|\u773C\u955C|disguise|eyebrow|face|glasses", 0],
  ["\u{1F60E}", "smiling face with sunglasses", "\u58A8\u955C\u7B11\u8138", "\u592A\u9633\u955C|\u773C\u955C|\u8036|\u8138|awesome|beach|bright|bro", 0],
  ["\u{1F913}", "nerd face", "\u4E66\u5446\u5B50\u8138", "\u4E13\u5BB6|\u4E66\u5446\u5B50|\u5929\u624D|\u5947\u8469|brainy|clever|expert|face", 0],
  ["\u{1F9D0}", "face with monocle", "\u5E26\u5355\u7247\u773C\u955C\u7684\u8138", "\u5355\u773C\u955C|\u53E4\u677F|\u5962\u534E|\u5BCC\u6709|classy|face|fancy|monocle", 0],
  ["\u{1F615}", "confused face", "\u56F0\u6270", "\u4E0D\u61C2|\u4E0D\u786E\u5B9A|\u56F0\u60D1|\u7591\u60D1|befuddled|confused|confusing|dunno", 0],
  ["\u{1FAE4}", "face with diagonal mouth", "\u90C1\u95F7", "\u4E0D\u76F8\u4FE1|\u4E0D\u786E\u5B9A|\u56F0\u60D1|\u5931\u671B|confused|confusion|diagonal|disappointed", 0],
  ["\u{1F61F}", "worried face", "\u62C5\u5FC3", "\u4E0D\u9AD8\u5174|\u4F24\u5FC3|\u5FE7\u5FC3\u7684\u8138|\u610F\u5916|anxious|butterflies|face|nerves", 0],
  ["\u{1F641}", "slightly frowning face", "\u5FAE\u5FAE\u4E0D\u6EE1", "\u4E0D\u5F00\u5FC3|\u4E0D\u9AD8\u5174|\u4E0D\u9AD8\u5174\u7684\u8138|\u59D4\u5C48|face|frown|frowning|sad", 0],
  ["\u2639\uFE0F", "frowning face", "\u4E0D\u6EE1", "\u4E0D\u723D|\u4E0D\u9AD8\u5174|\u59D4\u5C48|\u76B1\u7709|face|frown|frowning|sad", 0],
  ["\u{1F62E}", "face with open mouth", "\u5403\u60CA", "\u540C\u60C5|\u554A|\u5FD8\u8BB0|\u6211\u4E0D\u4FE1|believe|face|forgot|mouth", 0],
  ["\u{1F62F}", "hushed face", "\u7F04\u9ED8", "\u5403\u60CA|\u54E6|\u6211\u7684\u5929|\u8138|epic|face|hushed|omg", 0],
  ["\u{1F632}", "astonished face", "\u9707\u60CA", "\u4E0D\u53EF\u4EE5|\u60CA|\u60CA\u8BB6|\u60CA\u8BB6\u7684\u8138|astonished|cost|face|no", 0],
  ["\u{1F633}", "flushed face", "\u8138\u7EA2", "\u56F0\u60D1|\u5929\u5440|\u5BB3\u7F9E|\u7F9E\u6DA9|amazed|awkward|crazy|dazed", 0],
  ["\u{1FAEA}", "distorted face", "\u53D8\u5F62\u7684\u8138", "\u60CA\u559C|\u60CA\u6050|\u60CA\u614C|\u7126\u8651|anxiety|bloated|panic|shocked", 0],
  ["\u{1F97A}", "pleading face", "\u6073\u6C42\u7684\u8138", "\u53EF\u601C\u516E\u516E\u7684\u773C\u795E|\u5927\u773C\u775B|\u5C0F\u72D7\u7684\u8138|\u601C\u60AF|begging|big|eyes|face", 0],
  ["\u{1F979}", "face holding back tears", "\u5FCD\u4F4F\u6CEA\u6C34", "\u54ED\u6CE3|\u559C\u6781\u800C\u6CE3|\u5C34\u5C2C|\u60B2\u4F24|admiration|aww|back|cry", 0],
  ["\u{1F626}", "frowning face with open mouth", "\u554A", "\u60CA\u8BB6|\u610F\u5916|\u76EE\u77AA\u53E3\u5446|\u8138|caught|face|frown|frowning", 0],
  ["\u{1F627}", "anguished face", "\u6781\u5EA6\u75DB\u82E6", "\u75DB|\u75DB\u554A|\u75DB\u82E6|\u8138|anguished|face|forgot|scared", 0],
  ["\u{1F628}", "fearful face", "\u5BB3\u6015", "\u4E0D\u5B89|\u6015|\u6050\u6016|\u6050\u60E7|afraid|anxious|blame|face", 0],
  ["\u{1F630}", "anxious face with sweat", "\u51B7\u6C57", "\u5F20\u5634\u5192\u51B7\u6C57\u7684\u8138|\u60CA\u8BB6|\u65E0\u8BED|\u6C57|anxious|blue|cold|eek", 0],
  ["\u{1F625}", "sad but relieved face", "\u5931\u671B\u4F46\u5982\u91CA\u91CD\u8D1F", "\u4E0B\u6B21\u5427|\u51FA\u51B7\u6C57|\u5931\u671B|\u5931\u671B\u4F46\u89E3\u8131|anxious|call|close|complicated", 0],
  ["\u{1F622}", "crying face", "\u54ED", "\u4F24\u5FC3|\u54C0\u4F24|\u54ED\u8138|\u6CEA|awful|cry|crying|face", 0],
  ["\u{1F62D}", "loudly crying face", "\u653E\u58F0\u5927\u54ED", "\u54ED|\u5927\u54ED|\u653E\u58F0\u5927\u54ED\u7684\u8138|\u6CEA|bawling|cry|crying|face", 0],
  ["\u{1F631}", "face screaming in fear", "\u5413\u6B7B\u4E86", "\u5413\u6B7B|\u5BB3\u6015|\u5C16\u53EB|\u6050\u6016|epic|face|fear|fearful", 0],
  ["\u{1F616}", "confounded face", "\u56F0\u60D1", "\u56F0\u60D1\u7684\u8138|\u7126\u5934\u70C2\u989D|\u7EA0\u7ED3|\u8138|annoyed|confounded|confused|cringe", 0],
  ["\u{1F623}", "persevering face", "\u75DB\u82E6", "\u4E13\u6CE8|\u5165\u5B9A|\u5934\u75DB|\u5FCD\u8010|concentrate|concentration|face|focus", 0],
  ["\u{1F61E}", "disappointed face", "\u5931\u671B", "\u4E0D\u9AD8\u5174|\u5931\u671B\u7684\u8138|\u8138|\u96BE\u8FC7|awful|blame|dejected|disappointed", 0],
  ["\u{1F613}", "downcast face with sweat", "\u6C57", "\u5192\u51B7\u6C57|\u5192\u6C57|\u51B7|\u5C34\u5C2C|close|cold|downcast|face", 0],
  ["\u{1F629}", "weary face", "\u7D2F\u6B7B\u4E86", "\u75B2\u5026|\u75B2\u52B3|\u75B2\u60EB|\u7D2F|crying|face|fail|feels", 0],
  ["\u{1F62B}", "tired face", "\u7D2F", "\u5026\u5BB9|\u75B2\u5026|\u75B2\u52B3|\u75B2\u60EB|cost|face|feels|nap", 0],
  ["\u{1F971}", "yawning face", "\u6253\u5475\u6B20", "\u5475\u6B20|\u54C8\u6B20|\u56F0|\u56F0\u5026|bedtime|bored|face|goodnight", 0],
  ["\u{1F624}", "face with steam from nose", "\u50B2\u6162", "\u4E0D\u723D|\u6124\u6012|\u6C14\u70B8\u4E86|\u80DC\u5229|anger|angry|face|feels", 0],
  ["\u{1F621}", "enraged face", "\u6012\u706B\u4E2D\u70E7", "\u53D1\u706B|\u53D1\u98D9|\u6012|\u751F\u6C14|anger|angry|enraged|face", 0],
  ["\u{1F620}", "angry face", "\u751F\u6C14", "\u4E0D\u723D|\u4E0D\u9AD8\u5174|\u6012|\u6124\u6012|anger|angry|blame|face", 0],
  ["\u{1F92C}", "face with symbols on mouth", "\u5634\u4E0A\u6709\u7B26\u53F7\u7684\u8138", "\u4E0D\u723D|\u53D1\u8A93|\u5492\u9A82|\u751F\u6C14|censor|cursing|cussing|face", 0],
  ["\u{1F608}", "smiling face with horns", "\u6076\u9B54\u5FAE\u7B11", "\u5E7B\u60F3|\u5FAE\u7B11|\u7284\u89D2|\u795E\u8BDD\u6545\u4E8B|demon|devil|evil|face", 0],
  ["\u{1F47F}", "angry face with horns", "\u751F\u6C14\u7684\u6076\u9B54", "\u5E26\u89D2\u7684\u6012\u5BB9|\u5E7B\u60F3|\u6076\u9B54|\u7284\u89D2|angry|demon|devil|evil", 0],
  ["\u{1F480}", "skull", "\u5934\u9AA8", "\u5996\u602A|\u602A\u517D|\u6B7B\u4EA1|\u795E\u8BDD\u6545\u4E8B|body|dead|death|face", 0],
  ["\u2620\uFE0F", "skull and crossbones", "\u9AB7\u9AC5", "\u4EA4\u53C9\u80A1\u9AA8|\u5934\u9AA8|\u5996\u602A|\u602A\u7269|bone|crossbones|dead|death", 0],
  ["\u{1F4A9}", "pile of poo", "\u5927\u4FBF", "\u597D\u81ED|\u5C4E|\u602A\u7269|\u7C91\u7C91|bs|comic|doo|dung", 0],
  ["\u{1F921}", "clown face", "\u5C0F\u4E11\u8138", "\u5C0F\u4E11|\u8138|clown|face", 0],
  ["\u{1F479}", "ogre", "\u98DF\u4EBA\u9B54", "\u5413\u4EBA|\u5996\u602A|\u5E7B\u60F3|\u65E5\u672C|creature|devil|face|fairy", 0],
  ["\u{1F47A}", "goblin", "\u5C0F\u5996\u7CBE", "\u5996\u602A|\u5E7B\u60F3|\u602A\u7269|\u65E5\u672C|angry|creature|face|fairy", 0],
  ["\u{1F47B}", "ghost", "\u9B3C", "\u4E07\u5723\u8282|\u5996\u602A|\u5E7B\u60F3|\u5E7D\u7075|boo|creature|excited|face", 0],
  ["\u{1F47D}", "alien", "\u5916\u661F\u4EBA", "ufo|\u5916\u592A\u7A7A|\u5916\u661F|\u592A\u7A7A|creature|extraterrestrial|face|fairy", 0],
  ["\u{1F47E}", "alien monster", "\u5916\u661F\u602A\u7269", "ufo|\u5916\u661F|\u5916\u661F\u4EBA|\u592A\u7A7A|alien|creature|extraterrestrial|face", 0],
  ["\u{1F916}", "robot", "\u673A\u5668\u4EBA", "\u602A\u7269|\u8138|face|monster", 0],
  ["\u{1F63A}", "grinning cat", "\u5927\u7B11\u7684\u732B", "\u54C8\u54C8|\u5927\u7B11\u7684\u732B\u8138|\u732B\u8138|\u7B11|animal|cat|face|grinning", 0],
  ["\u{1F638}", "grinning cat with smiling eyes", "\u5FAE\u7B11\u7684\u732B", "\u5475\u5475|\u5FAE\u7B11\u7684\u732B\u8138|\u732B\u8138|\u7B11|animal|cat|eye|eyes", 0],
  ["\u{1F639}", "cat with tears of joy", "\u7B11\u51FA\u773C\u6CEA\u7684\u732B", "\u559C\u6781\u800C\u6CE3|\u5FEB\u4E50|\u732B\u8138|\u773C\u6CEA|animal|cat|face|joy", 0],
  ["\u{1F63B}", "smiling cat with heart-eyes", "\u82B1\u75F4\u7684\u732B", "wc|\u559C\u6B22|\u5FC3|\u732B|animal|cat|eye|face", 0],
  ["\u{1F63C}", "cat with wry smile", "\u5978\u7B11\u7684\u732B", "\u5632\u8BBD\u7B11\u5BB9|\u5978\u7B11|\u5978\u7B11\u7684\u732B\u8138|\u732B\u8138|animal|cat|face|ironic", 0],
  ["\u{1F63D}", "kissing cat", "\u4EB2\u4EB2\u732B", "\u4EB2\u4EB2|\u543B|\u732B\u8138|\u732B\u8138\u4EB2\u4EB2|animal|cat|closed|eye", 0],
  ["\u{1F640}", "weary cat", "\u75B2\u5026\u7684\u732B", "\u60CA\u8BB6|\u732B\u8138|\u75B2\u5026|\u75B2\u5026\u7684\u732B\u8138|animal|cat|face|oh", 0],
  ["\u{1F63F}", "crying cat", "\u54ED\u6CE3\u7684\u732B", "\u54ED|\u54ED\u6CE3\u7684\u732B\u8138|\u6CEA|\u732B\u8138|animal|cat|cry|crying", 0],
  ["\u{1F63E}", "pouting cat", "\u751F\u6C14\u7684\u732B", "\u732B\u8138|\u751F\u6C14|\u751F\u6C14\u7684\u732B\u8138|\u8138|animal|cat|face|pouting", 0],
  ["\u{1F648}", "see-no-evil monkey", "\u975E\u793C\u52FF\u89C6", "\u4E0D\u8BB8\u770B|\u522B\u770B|\u5C34\u5C2C|\u7CD7|embarrassed|evil|face|forbidden", 0],
  ["\u{1F649}", "hear-no-evil monkey", "\u975E\u793C\u52FF\u542C", "\u5618|\u5835\u4E0A\u8033\u6735|\u5835\u8033|\u7334\u5B50|animal|ears|evil|face", 0],
  ["\u{1F64A}", "speak-no-evil monkey", "\u975E\u793C\u52FF\u8A00", "\u4E0D\u8BB8\u8BF4|\u6342\u4E0A\u5634\u5DF4|\u6342\u5634|\u79D8\u5BC6|animal|evil|face|forbidden", 0],
  ["\u{1F48C}", "love letter", "\u60C5\u4E66", "\u4FE1|\u5FC3|\u90AE\u4EF6|heart|letter|love|mail", 0],
  ["\u{1F498}", "heart with arrow", "\u5FC3\u4E2D\u7BAD\u4E86", "\u4E00\u7BAD\u7A7F\u5FC3|\u4E18\u6BD4\u7279|\u6211\u7231\u4F60|\u6D6A\u6F2B|143|adorbs|arrow|cupid", 0],
  ["\u{1F49D}", "heart with ribbon", "\u7CFB\u6709\u7F0E\u5E26\u7684\u5FC3", "\u6211\u7231\u4F60|\u7231\u7684\u793C\u7269|\u7ED1\u4E1D\u5E26\u7684\u5FC3|\u9001\u4F60\u4E00\u9897\u5FC3|143|anniversary|emotion|heart", 0],
  ["\u{1F496}", "sparkling heart", "\u95EA\u4EAE\u7684\u5FC3", "\u6211\u7231\u4F60|\u6FC0\u52A8|\u7EA2\u5FC3|\u95EA\u4EAE|143|emotion|excited|good", 0],
  ["\u{1F497}", "growing heart", "\u640F\u52A8\u7684\u5FC3", "\u4EB2\u4EB2|\u543B|\u6211\u7231\u4F60|\u640F\u52A8|143|emotion|excited|growing", 0],
  ["\u{1F493}", "beating heart", "\u5FC3\u8DF3", "\u5FC3\u52A8|\u6211\u7231\u4F60|\u7231|143|beating|cardio|emotion", 0],
  ["\u{1F49E}", "revolving hearts", "\u821E\u52A8\u7684\u5FC3", "\u6211\u7231\u4F60|\u65CB\u8F6C|\u6D8C\u52A8|\u8DC3\u52A8|143|adorbs|anniversary|emotion", 0],
  ["\u{1F495}", "two hearts", "\u4E24\u9897\u5FC3", "\u6211\u7231\u4F60|\u7231\u60C5|143|anniversary|date|dating", 0],
  ["\u{1F49F}", "heart decoration", "\u5FC3\u578B\u88C5\u9970", "\u5FC3|\u6211\u7231\u4F60|\u88C5\u9970|143|decoration|emotion|heart", 0],
  ["\u2763\uFE0F", "heart exclamation", "\u5FC3\u53F9\u53F7", "\u53F9\u53F7|\u5FC3\u52A8|\u6807\u70B9\u7B26\u53F7|exclamation|heart|heavy|mark", 0],
  ["\u{1F494}", "broken heart", "\u5FC3\u788E", "\u4F24\u5FC3|break|broken|crushed|emotion", 0],
  ["\u2764\uFE0F\u200D\u{1F525}", "heart on fire", "\u706B\u4E0A\u4E4B\u5FC3", "\u6E34\u671B|\u71C3\u70E7|\u7231|burn|fire|heart|love", 0],
  ["\u2764\uFE0F\u200D\u{1FA79}", "mending heart", "\u4FEE\u590D\u53D7\u4F24\u7684\u5FC3\u7075", "\u4FEE\u8865|\u6062\u590D|\u75CA\u6108|healthier|heart|improving|mending", 0],
  ["\u2764\uFE0F", "red heart", "\u7EA2\u5FC3", "\u5FC3|\u7231|emotion|heart|love|red", 0],
  ["\u{1FA77}", "pink heart", "\u7C89\u7EA2\u8272\u7684\u5FC3", "\u53EF\u7231|\u559C\u6B22|\u5FC3|\u611F\u60C5|143|adorable|cute|emotion", 0],
  ["\u{1F9E1}", "orange heart", "\u6A59\u5FC3", "\u6A58\u5FC3|\u6A58\u8272|\u6A58\u8272\u7684\u5FC3|\u6A59|143|heart|orange", 0],
  ["\u{1F49B}", "yellow heart", "\u9EC4\u5FC3", "\u6211\u7231\u4F60|\u9EC4|143|cardiac|emotion|heart", 0],
  ["\u{1F49A}", "green heart", "\u7EFF\u5FC3", "\u6211\u7231\u4F60|\u7EFF|143|emotion|green|heart", 0],
  ["\u{1F499}", "blue heart", "\u84DD\u5FC3", "\u6211\u7231\u4F60|\u84DD|143|blue|emotion|heart", 0],
  ["\u{1FA75}", "light blue heart", "\u6D45\u84DD\u8272\u7684\u5FC3", "\u53EF\u7231|\u559C\u6B22|\u5929\u84DD|\u5FC3|143|blue|cute|cyan", 0],
  ["\u{1F49C}", "purple heart", "\u7D2B\u5FC3", "\u6211\u7231\u4F60|\u7D2B|143|bestest|emotion|heart", 0],
  ["\u{1F90E}", "brown heart", "\u68D5\u5FC3", "\u5FC3|\u5FC3\u5F62|\u68D5|\u68D5\u8272|143|brown|heart", 0],
  ["\u{1F5A4}", "black heart", "\u9ED1\u5FC3", "\u5FC3|\u90AA\u6076|\u9ED1|\u9ED1\u8272|black|evil|heart|wicked", 0],
  ["\u{1FA76}", "grey heart", "\u7070\u5FC3", "\u5FC3|\u611F\u60C5|\u6211\u7231\u4F60|\u6697\u7070|143|emotion|gray|grey", 0],
  ["\u{1F90D}", "white heart", "\u767D\u5FC3", "\u5FC3|\u5FC3\u5F62|\u7231\u5FC3|\u767D|143|heart|white", 0],
  ["\u{1F48B}", "kiss mark", "\u5507\u5370", "\u4EB2\u543B|\u543B|\u5507|\u6027\u611F|dating|emotion|heart|kiss", 0],
  ["\u{1F4AF}", "hundred points", "\u4E00\u767E\u5206", "100|\u6EE1\u5206|\u767E\u5206\u767E|\u7EDD\u5BF9|100|a+|agree|clearly", 0],
  ["\u{1F4A2}", "anger symbol", "\u6012", "\u706B\u5927|\u751F\u6C14|\u9752\u7B4B|anger|angry|comic|mad", 0],
  ["\u{1FAEF}", "fight cloud", "\u6253\u6597\u4E91\u56E2", "\u4E89\u8BBA|\u5435\u67B6|\u6218\u6597|\u6253\u6597|argument|brawl|debate|disagreement", 0],
  ["\u{1F4A5}", "collision", "\u7206\u70B8", "\u649E|\u65FA|\u70B8|\u7206|bomb|boom|collide|comic", 0],
  ["\u{1F4AB}", "dizzy", "\u5934\u6655", "\u5934\u6655\u76EE\u7729|\u661F\u661F|\u6D41\u661F|comic|shining|shooting|star", 0],
  ["\u{1F4A6}", "sweat droplets", "\u6C57\u6EF4", "\u55B7\u6E85|\u5C0F\u6C34\u6EF4|\u5C0F\u6C34\u73E0|\u6C57|comic|drip|droplet|droplets", 0],
  ["\u{1F4A8}", "dashing away", "\u5C3E\u6C14", "\u626C\u5C18\u800C\u53BB|\u653E\u5C41|\u70DF|\u75BE\u9A70\u800C\u53BB|away|cloud|comic|dash", 0],
  ["\u{1F573}\uFE0F", "hole", "\u6D1E", "\u4E95\u76D6|\u5751|\u9677\u9631", 0],
  ["\u{1F4AC}", "speech balloon", "\u8BDD\u8BED\u6C14\u6CE1", "\u53D1\u8A00|\u5BF9\u8BDD\u6846|\u6C14\u6CE1|\u6C14\u6CE1\u5BF9\u8BDD\u6846|balloon|bubble|comic|dialog", 0],
  ["\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F", "eye in speech bubble", "\u773C\u775B\u5BF9\u8BDD\u6846", "\u5BF9\u8BDD\u6846|\u76EE\u64CA|\u773C\u775B|balloon|bubble|eye|speech", 0],
  ["\u{1F5E8}\uFE0F", "left speech bubble", "\u671D\u5DE6\u7684\u8BDD\u8BED\u6C14\u6CE1", "\u5BF9\u8BDD\u6846|\u8BDD\u8BED|balloon|bubble|dialog|left", 0],
  ["\u{1F5EF}\uFE0F", "right anger bubble", "\u6124\u6012\u8BDD\u8BED\u6C14\u6CE1", "\u53F3\u503E\u6124\u6012\u5BF9\u8BDD\u6846|\u5BF9\u8BDD\u6846|\u6124\u6012|anger|angry|balloon|bubble", 0],
  ["\u{1F4AD}", "thought balloon", "\u5185\u5FC3\u6D3B\u52A8\u6C14\u6CE1", "\u5BF9\u8BDD\u6846|\u601D\u60F3|\u601D\u60F3\u6D3B\u52A8|\u60F3\u6CD5|balloon|bubble|cartoon|cloud", 0],
  ["\u{1F4A4}", "ZZZ", "\u7761\u7740", "\u547C\u565C|\u56F0\u4E86|\u60F3\u7761|\u6253\u547C|comic|good|goodnight|night", 0],
  ["\u{1F44B}", "waving hand", "\u6325\u624B", "\u4F60\u597D|\u518D\u89C1|\u55E8|\u5728\u5417|bye|cya|g2g|greetings", 1],
  ["\u{1F91A}", "raised back of hand", "\u7ACB\u8D77\u7684\u624B\u80CC", "\u4E3E\u8D77|\u4E3E\u8D77\u624B\u80CC|\u624B|\u624B\u80CC|back|backhand|hand|raised", 1],
  ["\u{1F590}\uFE0F", "hand with fingers splayed", "\u624B\u638C", "\u4E3E\u8D77\u5F20\u5F00\u7684\u624B\u638C|\u51FB\u638C|\u5E03|\u624B|finger|fingers|hand|raised", 1],
  ["\u270B", "raised hand", "\u4E3E\u8D77\u624B", "\u4E3E\u624B|\u4E3E\u8D77\u7684\u624B|\u4E94\u6307|\u505C|5|five|hand|high", 1],
  ["\u{1F596}", "vulcan salute", "\u74E6\u80AF\u4E3E\u624B\u793C", "\u624B|\u656C\u793C|\u65AF\u6CE2\u514B|\u661F\u9645\u8FF7\u822A|finger|hand|hands|salute", 1],
  ["\u{1FAF1}", "rightwards hand", "\u5411\u53F3\u7684\u624B", "\u4F38\u624B|\u53F3|\u53F3\u624B|\u5411\u53F3|hand|handshake|hold|reach", 1],
  ["\u{1FAF2}", "leftwards hand", "\u5411\u5DE6\u7684\u624B", "\u4F38\u624B|\u5411\u5DE6|\u5DE6|\u5DE6\u624B|hand|handshake|hold|left", 1],
  ["\u{1FAF3}", "palm down hand", "\u638C\u5FC3\u5411\u4E0B\u7684\u624B", "\u4E0B\u6295|\u624B|\u6254\u6389|\u62FF\u8D77|dismiss|down|drop|dropped", 1],
  ["\u{1FAF4}", "palm up hand", "\u638C\u5FC3\u5411\u4E0A\u7684\u624B", "\u4E0D\u77E5\u9053|\u53EC\u5524|\u544A\u8BC9\u6211|\u624B|beckon|catch|come|hand", 1],
  ["\u{1FAF7}", "leftwards pushing hand", "\u5411\u5DE6\u63A8", "\u4E2D\u6B62|\u505C\u6B62|\u51FB\u638C|\u5411\u5DE6|block|five|halt|hand", 1],
  ["\u{1FAF8}", "rightwards pushing hand", "\u5411\u53F3\u63A8", "\u4E2D\u6B62|\u505C\u6B62|\u51FB\u638C|\u5411\u53F3|block|five|halt|hand", 1],
  ["\u{1F44C}", "OK hand", "OK", "ok \u624B\u52BF|\u53EF\u4EE5|\u540C\u610F|\u597D\u7684|awesome|bet|dope|fleek", 1],
  ["\u{1F90C}", "pinched fingers", "\u634F\u624B\u6307", "\u4E3A\u4EC0\u4E48|\u4F60\u5230\u5E95\u5728\u8BF4\u4EC0\u4E48|\u532E\u4E4F|\u5BA1\u8BAF|fingers|gesture|hand|hold", 1],
  ["\u{1F90F}", "pinching hand", "\u634F\u5408\u7684\u624B\u52BF", "\u4E00\u70B9|\u4E00\u70B9\u70B9|\u5C0F|\u5C11|amount|bit|fingers|hand", 1],
  ["\u270C\uFE0F", "victory hand", "\u80DC\u5229\u624B\u52BF", "v|\u548C\u5E73|\u6210\u529F|\u624B|hand|peace|v|victory", 1],
  ["\u{1F91E}", "crossed fingers", "\u4EA4\u53C9\u7684\u624B\u6307", "\u4EA4\u53C9|\u5E78\u8FD0|\u624B|\u624B\u6307|cross|crossed|finger|fingers", 1],
  ["\u{1FAF0}", "hand with index finger and thumb crossed", "\u98DF\u6307\u4E0E\u62C7\u6307\u4EA4\u53C9\u7684\u624B", "\u54CD\u6307|\u5FC3|\u624B|\u6602\u8D35|<3|crossed|expensive|finger", 1],
  ["\u{1F91F}", "love-you gesture", "\u7231\u4F60\u7684\u624B\u52BF", "\u4E09\u79CD|\u6211\u7231\u4F60|\u624B|\u7231\u4F60|fingers|gesture|hand|ily", 1],
  ["\u{1F918}", "sign of the horns", "\u6447\u6EDA", "\u624B|\u6447\u6EDA\u7CBE\u795E|\u71E5\u8D77\u6765|\u89D2|finger|hand|horns|rock-on", 1],
  ["\u{1F919}", "call me hand", "\u7ED9\u6211\u6253\u7535\u8BDD", "\u624B|\u6253\u7535\u8BDD\u7ED9\u6211|\u7535\u8BDD|\u7ED9\u6211\u6253\u7535\u8BDD\u7684\u624B\u52BF|call|hand|hang|loose", 1],
  ["\u{1F448}", "backhand index pointing left", "\u53CD\u624B\u98DF\u6307\u5411\u5DE6\u6307", "\u53CD\u624B|\u5411\u5DE6\u6307|\u624B|\u6307\u5DE6|backhand|finger|hand|index", 1],
  ["\u{1F449}", "backhand index pointing right", "\u53CD\u624B\u98DF\u6307\u5411\u53F3\u6307", "\u53CD\u624B|\u5411\u53F3\u6307|\u624B|\u6307\u53F3|backhand|finger|hand|index", 1],
  ["\u{1F446}", "backhand index pointing up", "\u53CD\u624B\u98DF\u6307\u5411\u4E0A\u6307", "\u53CD\u624B|\u5411\u4E0A\u6307|\u624B|\u6307\u4E0A|backhand|finger|hand|index", 1],
  ["\u{1F595}", "middle finger", "\u7AD6\u4E2D\u6307", "\u4E2D\u6307|\u53CD\u624B|\u624B|finger|hand|middle", 1],
  ["\u{1F447}", "backhand index pointing down", "\u53CD\u624B\u98DF\u6307\u5411\u4E0B\u6307", "\u53CD\u624B|\u5411\u4E0B\u6307|\u624B|\u6307\u4E0B|backhand|down|finger|hand", 1],
  ["\u261D\uFE0F", "index pointing up", "\u98DF\u6307\u5411\u4E0A\u6307", "\u5411\u4E0A\u6307|\u624B|\u6307\u4E0A|\u98DF\u6307|finger|hand|index|point", 1],
  ["\u{1FAF5}", "index pointing at the viewer", "\u6307\u5411\u89C2\u5BDF\u8005\u7684\u98DF\u6307", "\u4F38\u51FA\u624B\u6307|\u4F60|\u6233|\u624B\u6307|at|finger|hand|index", 1],
  ["\u{1F44D}", "thumbs up", "\u62C7\u6307\u5411\u4E0A", "\u540C\u610F|\u597D|\u624B|\u62C7\u6307|+1|good|hand|like", 1],
  ["\u{1F44E}", "thumbs down", "\u62C7\u6307\u5411\u4E0B", "\u4E0D\u8D5E\u6210|\u53CD\u5BF9|\u5426\u51B3|\u624B|-1|bad|dislike|down", 1],
  ["\u{1FAF9}", "leftwards thumb sign", "leftwards thumb sign", "", 1],
  ["\u{1FAFA}", "rightwards thumb sign", "rightwards thumb sign", "", 1],
  ["\u270A", "raised fist", "\u4E3E\u8D77\u62F3\u5934", "\u4E3E\u62F3|\u56E2\u7ED3|\u624B|\u62F3\u5934|clenched|fist|hand|punch", 1],
  ["\u{1F44A}", "oncoming fist", "\u51FA\u62F3", "\u5B8C\u5168\u540C\u610F|\u624B|\u6253|\u62F3|absolutely|agree|boom|bro", 1],
  ["\u{1F91B}", "left-facing fist", "\u671D\u5DE6\u7684\u62F3\u5934", "\u62F3\u5934|\u671D\u5DE6|fist|left-facing|leftwards", 1],
  ["\u{1F91C}", "right-facing fist", "\u671D\u53F3\u7684\u62F3\u5934", "\u624B|\u62F3\u5934|\u671D\u53F3|fist|right-facing|rightwards", 1],
  ["\u{1F44F}", "clapping hands", "\u9F13\u638C", "\u5E72\u5F97\u597D|\u606D\u559C|\u62CD\u624B|\u8D5E\u6210|applause|approval|awesome|clap", 1],
  ["\u{1F64C}", "raising hands", "\u4E3E\u53CC\u624B", "\u4E3E\u624B|\u51FB\u638C|\u53CC\u624B|\u5E86\u795D|celebration|gesture|hand|hands", 1],
  ["\u{1FAF6}", "heart hands", "\u505A\u6210\u5FC3\u5F62\u7684\u53CC\u624B", "\u624B|\u6BD4\u5FC3|\u7231|\u7231\u4F60|<3|hands|heart|love", 1],
  ["\u{1F450}", "open hands", "\u5F20\u5F00\u53CC\u624B", "\u5341|\u53CC\u624B|\u644A\u624B|hand|hands|hug|jazz", 1],
  ["\u{1F932}", "palms up together", "\u638C\u5FC3\u5411\u4E0A\u6258\u8D77", "\u53CC\u638C|\u53CC\u638C\u5411\u4E0A|\u5E0C\u671B|\u7948\u7977|cupped|dua|hands|palms", 1],
  ["\u{1F91D}", "handshake", "\u63E1\u624B", "\u4E00\u8A00\u4E3A\u5B9A|\u4F1A\u9762|\u534F\u8BAE|\u541B\u5B50\u534F\u5B9A|agreement|deal|hand|meeting", 1],
  ["\u{1F64F}", "folded hands", "\u53CC\u624B\u5408\u5341", "\u5408\u638C|\u611F\u6069|\u62DC\u6258|\u7948\u6C42|appreciate|ask|beg|blessed", 1],
  ["\u270D\uFE0F", "writing hand", "\u5199\u5B57", "\u5199|\u624B|\u7B14|hand|write|writing", 1],
  ["\u{1F485}", "nail polish", "\u6D82\u6307\u7532\u6CB9", "\u4FEE\u6307\u7532|\u5FD9\u5B8C\u4E86|\u62A4\u624B|\u6307\u7532\u6CB9|bored|care|cosmetics|done", 1],
  ["\u{1F933}", "selfie", "\u81EA\u62CD", "\u624B\u673A|\u76F8\u673A|camera|phone", 1],
  ["\u{1F4AA}", "flexed biceps", "\u808C\u8089", "\u4E8C\u5934\u808C|\u5065\u8EAB\u623F|\u5F3A\u58EE|arm|beast|bench|biceps", 1],
  ["\u{1F9BE}", "mechanical arm", "\u673A\u68B0\u624B\u81C2", "\u4E49\u80A2|\u624B\u81C2|\u65E0\u969C\u788D|accessibility|arm|mechanical|prosthetic", 1],
  ["\u{1F9BF}", "mechanical leg", "\u673A\u68B0\u817F", "\u4E49\u80A2|\u65E0\u969C\u788D|\u817F|accessibility|leg|mechanical|prosthetic", 1],
  ["\u{1F9B5}", "leg", "\u817F", "\u5F2F\u817F|\u80A2\u4F53|\u811A|\u8DDB\u884C|bent|foot|kick|knee", 1],
  ["\u{1F9B6}", "foot", "\u811A", "\u8DB3\u8E1D|\u8E0F|\u8E1D|\u8E22|ankle|feet|kick|stomp", 1],
  ["\u{1F442}", "ear", "\u8033\u6735", "\u4ED4\u7EC6\u542C|\u542C|\u8033|body|ears|hear|hearing", 1],
  ["\u{1F9BB}", "ear with hearing aid", "\u6234\u52A9\u542C\u5668\u7684\u8033\u6735", "\u52A9\u542C\u5668|\u542C\u529B\u969C\u788D|\u542C\u969C|\u5931\u806A|accessibility|aid|ear|hard", 1],
  ["\u{1F443}", "nose", "\u9F3B\u5B50", "\u55C5|\u6C14\u5473|\u95FB|\u9F3B|body|noses|nosey|odor", 1],
  ["\u{1F9E0}", "brain", "\u8111", "\u5927\u8111|\u5934\u8111|\u667A\u6167|\u667A\u80FD|intelligent|smart", 1],
  ["\u{1FAC0}", "anatomical heart", "\u5FC3\u810F\u5668\u5B98", "\u4E2D\u5FC3|\u5668\u5B98|\u5FC3\u7387|\u5FC3\u810F|anatomical|beat|cardiology|heart", 1],
  ["\u{1FAC1}", "lungs", "\u80BA", "\u5438\u6C14|\u547C\u5438|\u547C\u5438\u4F5C\u7528|\u547C\u6C14|breath|breathe|exhalation|inhalation", 1],
  ["\u{1F9B7}", "tooth", "\u7259\u9F7F", "\u7259\u533B|\u7259\u79D1\u533B\u751F|\u73CD\u73E0\u8272|\u767D\u8272|dentist|pearly|teeth|white", 1],
  ["\u{1F9B4}", "bone", "\u9AA8\u5934", "\u53C9\u9AA8|\u72D7|\u9AA8\u9ABC|bones|dog|skeleton|wishbone", 1],
  ["\u{1F440}", "eyes", "\u53CC\u773C", "\u770B|\u773C\u775B|\u7AA5\u89C6|\u8EAB\u4F53|body|eye|face|googly", 1],
  ["\u{1F441}\uFE0F", "eye", "\u773C\u775B", "\u5355\u773C|\u770B|\u773C|\u8EAB\u4F53|1|body|one", 1],
  ["\u{1F445}", "tongue", "\u820C\u5934", "\u5567\u5567\u5730\u559D|\u820C|\u8214|\u8EAB\u4F53|body|lick|slurp", 1],
  ["\u{1F444}", "mouth", "\u5634", "\u53E3|\u53E3\u7EA2|\u543B|\u5507|beauty|body|kiss|kissing", 1],
  ["\u{1FAE6}", "biting lip", "\u54AC\u4F4F\u5634\u5507", "\u4E0D\u8212\u670D|\u53E3\u7EA2|\u54AC\u5634\u5507|\u5634\u5507|anxious|bite|biting|fear", 1],
  ["\u{1F476}", "baby", "\u5C0F\u5B9D\u8D1D", "\u5B69\u5B50|\u5B9D\u5B9D|\u5C0F\u6BDB\u5934|babies|children|goo|infant", 1],
  ["\u{1F9D2}", "child", "\u513F\u7AE5", "\u4E2D\u6027|\u5C0F\u5B69|\u5E74\u8F7B\u4EBA|\u6027\u522B\u4E0D\u660E|bright-eyed|grandchild|kid|young", 1],
  ["\u{1F466}", "boy", "\u7537\u5B69", "\u513F\u7AE5|\u5B69\u5B50|\u5C0F\u5B69|\u7537|bright-eyed|child|grandson|kid", 1],
  ["\u{1F467}", "girl", "\u5973\u5B69", "\u513F\u7AE5|\u5927\u773C\u5973\u5B69|\u5973|\u5973\u513F|bright-eyed|child|daughter|granddaughter", 1],
  ["\u{1F9D1}", "person", "\u6210\u4EBA", "\u4E2D\u6027|\u6027\u522B\u4E2D\u7ACB|\u6027\u683C\u4E0D\u660E|adult", 1],
  ["\u{1F471}", "person: blond hair", "\u91D1\u8272\u5934\u53D1\u7684\u4EBA", "\u4EBA|\u8138|\u91D1\u53D1|blond|blond-haired|human|person", 1],
  ["\u{1F468}", "man", "\u7537\u4EBA", "\u5144\u5F1F|\u6210\u4EBA|\u7537|adult|bro", 1],
  ["\u{1F9D4}", "person: beard", "\u6709\u80E1\u5B50\u7684\u4EBA", "\u4EBA|\u5927\u80E1\u5B50|\u7537|\u7EDC\u816E\u80E1|beard|bearded|person|whiskers", 1],
  ["\u{1F9D4}\u200D\u2642\uFE0F", "man: beard", "\u6709\u7EDC\u816E\u80E1\u5B50\u7684\u7537\u4EBA", "\u7537\u4EBA|\u80E1\u5B50|beard|bearded|man|whiskers", 1],
  ["\u{1F9D4}\u200D\u2640\uFE0F", "woman: beard", "\u6709\u7EDC\u816E\u80E1\u5B50\u7684\u5973\u4EBA", "\u5973\u4EBA|\u80E1\u5B50|beard|bearded|whiskers|woman", 1],
  ["\u{1F468}\u200D\u{1F9B0}", "man: red hair", "man: red hair", "", 1],
  ["\u{1F468}\u200D\u{1F9B1}", "man: curly hair", "man: curly hair", "", 1],
  ["\u{1F468}\u200D\u{1F9B3}", "man: white hair", "man: white hair", "", 1],
  ["\u{1F468}\u200D\u{1F9B2}", "man: bald", "man: bald", "", 1],
  ["\u{1F469}", "woman", "\u5973\u4EBA", "\u5973|\u6DD1\u5973|\u91D1\u53D1|adult|lady", 1],
  ["\u{1F469}\u200D\u{1F9B0}", "woman: red hair", "woman: red hair", "", 1],
  ["\u{1F9D1}\u200D\u{1F9B0}", "person: red hair", "person: red hair", "", 1],
  ["\u{1F469}\u200D\u{1F9B1}", "woman: curly hair", "woman: curly hair", "", 1],
  ["\u{1F9D1}\u200D\u{1F9B1}", "person: curly hair", "person: curly hair", "", 1],
  ["\u{1F469}\u200D\u{1F9B3}", "woman: white hair", "woman: white hair", "", 1],
  ["\u{1F9D1}\u200D\u{1F9B3}", "person: white hair", "person: white hair", "", 1],
  ["\u{1F469}\u200D\u{1F9B2}", "woman: bald", "woman: bald", "", 1],
  ["\u{1F9D1}\u200D\u{1F9B2}", "person: bald", "person: bald", "", 1],
  ["\u{1F471}\u200D\u2640\uFE0F", "woman: blond hair", "\u91D1\u53D1\u5973", "\u5973|\u91D1\u53D1|blond|blond-haired|blonde|hair", 1],
  ["\u{1F471}\u200D\u2642\uFE0F", "man: blond hair", "\u91D1\u53D1\u7537", "\u7537|\u91D1\u53D1|blond|blond-haired|hair|man", 1],
  ["\u{1F9D3}", "older person", "\u8001\u5E74\u4EBA", "\u4E2D\u6027|\u6027\u522B\u4E0D\u660E|\u6027\u522B\u4E2D\u6027|\u6210\u4EBA|adult|elderly|grandparent|old", 1],
  ["\u{1F474}", "old man", "\u8001\u7237\u7237", "\u7956\u7236|\u79C3\u5934|\u8001\u4EBA|\u8001\u5934|adult|bald|elderly|gramps", 1],
  ["\u{1F475}", "old woman", "\u8001\u5976\u5976", "\u7956\u6BCD|\u8001\u4EBA|\u8001\u592A|adult|elderly|grandma|grandmother", 1],
  ["\u{1F64D}", "person frowning", "\u76B1\u7709", "\u4E0D\u5F00\u5FC3|\u4E0D\u6EE1|\u4E0D\u723D|\u5931\u671B|annoyed|disappointed|disgruntled|disturbed", 1],
  ["\u{1F64D}\u200D\u2642\uFE0F", "man frowning", "\u76B1\u7709\u7537", "\u4E0D\u5F00\u5FC3|\u7537|\u76B1\u7709|\u8868\u60C5|annoyed|disappointed|disgruntled|disturbed", 1],
  ["\u{1F64D}\u200D\u2640\uFE0F", "woman frowning", "\u76B1\u7709\u5973", "\u4E0D\u5F00\u5FC3|\u5973|\u76B1\u7709|annoyed|disappointed|disgruntled|disturbed", 1],
  ["\u{1F64E}", "person pouting", "\u6485\u5634", "\u4E0D\u5F00\u5FC3|\u4E0D\u9AD8\u5174|\u4F4E\u843D|\u5658\u5634|disappointed|downtrodden|frown|grimace", 1],
  ["\u{1F64E}\u200D\u2642\uFE0F", "man pouting", "\u6485\u5634\u7537", "\u4E0D\u5F00\u5FC3|\u5658\u5634|\u7537|\u8868\u60C5|disappointed|downtrodden|frown|grimace", 1],
  ["\u{1F64E}\u200D\u2640\uFE0F", "woman pouting", "\u6485\u5634\u5973", "\u4E0D\u5F00\u5FC3|\u5658\u5634|\u5973|disappointed|downtrodden|frown|grimace", 1],
  ["\u{1F645}", "person gesturing NO", "\u7981\u6B62\u624B\u52BF", "\u4E0D\u5141\u8BB8|\u4E0D\u53EF\u80FD|\u4E0D\u884C|\u4E0D\u901A\u8FC7|forbidden|gesture|hand|no", 1],
  ["\u{1F645}\u200D\u2642\uFE0F", "man gesturing NO", "\u7981\u6B62\u624B\u52BF\u7537", "\u4E0D\u884C|\u53CD\u5BF9|\u7537|\u7981\u6B62|forbidden|gesture|hand|man", 1],
  ["\u{1F645}\u200D\u2640\uFE0F", "woman gesturing NO", "\u7981\u6B62\u624B\u52BF\u5973", "\u4E0D\u884C|\u53CD\u5BF9|\u5973|\u7981\u6B62|forbidden|gesture|hand|no", 1],
  ["\u{1F646}", "person gesturing OK", "OK\u624B\u52BF", "ok|\u540C\u610F|\u5973\u5B50\u7528\u624B\u52BF\u8868\u793A\u597D|\u597D\u7684|exercise|gesture|gesturing|hand", 1],
  ["\u{1F646}\u200D\u2642\uFE0F", "man gesturing OK", "OK\u624B\u52BF\u7537", "ok|\u53EF\u4EE5|\u540C\u610F|\u597D\u7684|exercise|gesture|gesturing|hand", 1],
  ["\u{1F646}\u200D\u2640\uFE0F", "woman gesturing OK", "OK\u624B\u52BF\u5973", "ok|\u53EF\u4EE5|\u540C\u610F|\u5973|exercise|gesture|gesturing|hand", 1],
  ["\u{1F481}", "person tipping hand", "\u524D\u53F0", "\u4ECB\u7ECD|\u4F38\u624B\u7ED9\u5C0F\u8D39|\u4FE1\u606F|\u516B\u5366|fetch|flick|flip|gossip", 1],
  ["\u{1F481}\u200D\u2642\uFE0F", "man tipping hand", "\u524D\u53F0\u7537", "\u524D\u53F0|\u5632\u8BBD|\u5C0F\u8D39|\u7537|fetch|flick|flip|gossip", 1],
  ["\u{1F481}\u200D\u2640\uFE0F", "woman tipping hand", "\u524D\u53F0\u5973", "\u524D\u53F0|\u5973|fetch|flick|flip|gossip", 1],
  ["\u{1F64B}", "person raising hand", "\u4E3E\u624B", "\u4E3E\u624B\u7684\u4EBA|\u55E8|\u5F00\u5FC3|\u6211\u53C2\u52A0|gesture|hand|here|know", 1],
  ["\u{1F64B}\u200D\u2642\uFE0F", "man raising hand", "\u7537\u751F\u4E3E\u624B", "\u4E3E\u624B|\u53D1\u95EE|\u624B\u52BF|\u7537|gesture|hand|here|know", 1],
  ["\u{1F64B}\u200D\u2640\uFE0F", "woman raising hand", "\u5973\u751F\u4E3E\u624B", "\u4E3E\u624B|\u5973|gesture|hand|here|know", 1],
  ["\u{1F9CF}", "deaf person", "\u5931\u806A\u8005", "\u542C\u529B|\u542C\u529B\u969C\u788D|\u542C\u969C|\u65E0\u969C\u788D|accessibility|deaf|ear|gesture", 1],
  ["\u{1F9CF}\u200D\u2642\uFE0F", "deaf man", "\u5931\u806A\u7684\u7537\u4EBA", "\u542C\u529B\u969C\u788D|\u7537|\u8033\u6735|\u804B|accessibility|deaf|ear|gesture", 1],
  ["\u{1F9CF}\u200D\u2640\uFE0F", "deaf woman", "\u5931\u806A\u7684\u5973\u4EBA", "\u542C\u529B\u969C\u788D|\u5973|\u8033\u6735|\u804B|accessibility|deaf|ear|gesture", 1],
  ["\u{1F647}", "person bowing", "\u97A0\u8EAC", "\u4E0D\u597D\u610F\u601D|\u51A5\u60F3|\u59FF\u52BF|\u5BF9\u4E0D\u8D77|apology|ask|beg|bow", 1],
  ["\u{1F647}\u200D\u2642\uFE0F", "man bowing", "\u7537\u751F\u97A0\u8EAC", "\u4E0D\u597D\u610F\u601D|\u5BF9\u4E0D\u8D77|\u7537|\u9053\u6B49|apology|ask|beg|bow", 1],
  ["\u{1F647}\u200D\u2640\uFE0F", "woman bowing", "\u5973\u751F\u97A0\u8EAC", "\u4E0D\u597D\u610F\u601D|\u5973|\u5BF9\u4E0D\u8D77|\u9053\u6B49|apology|ask|beg|bow", 1],
  ["\u{1F926}", "person facepalming", "\u6342\u8138", "\u4EBA|\u5C34\u5C2C|\u607C\u6012|\u6211\u7684\u5929\u54EA|again|bewilder|disbelief|exasperation", 1],
  ["\u{1F926}\u200D\u2642\uFE0F", "man facepalming", "\u7537\u751F\u6342\u8138", "\u5C34\u5C2C|\u607C\u6012|\u6211\u7684\u5929\u54EA|\u6276\u989D|again|bewilder|disbelief|exasperation", 1],
  ["\u{1F926}\u200D\u2640\uFE0F", "woman facepalming", "\u5973\u751F\u6342\u8138", "\u5973|\u5973\u5B50\u6342\u8138|\u5C34\u5C2C|\u607C\u6012|again|bewilder|disbelief|exasperation", 1],
  ["\u{1F937}", "person shrugging", "\u8038\u80A9", "\u4E0D\u5173\u5FC3|\u4E0D\u77E5\u9053|\u4EBA|\u5929\u6653\u5F97|doubt|dunno|guess|idk", 1],
  ["\u{1F937}\u200D\u2642\uFE0F", "man shrugging", "\u7537\u751F\u8038\u80A9", "\u4E0D\u5173\u5FC3|\u4E0D\u77E5\u9053|\u5929\u6653\u5F97|\u6000\u7591|doubt|dunno|guess|idk", 1],
  ["\u{1F937}\u200D\u2640\uFE0F", "woman shrugging", "\u5973\u751F\u8038\u80A9", "\u4E0D\u5173\u5FC3|\u4E0D\u77E5\u9053|\u5929\u6653\u5F97|\u5973|doubt|dunno|guess|idk", 1],
  ["\u{1F9D1}\u200D\u2695\uFE0F", "health worker", "\u536B\u751F\u5DE5\u4F5C\u8005", "\u533B\u751F|\u62A4\u58EB|\u6CBB\u7597\u5E08|doctor|health|healthcare|nurse", 1],
  ["\u{1F468}\u200D\u2695\uFE0F", "man health worker", "\u7537\u533B\u751F", "\u533B\u62A4\u4EBA\u5458|\u533B\u751F|\u62A4\u58EB|\u6CBB\u7597\u5E08|doctor|health|healthcare|man", 1],
  ["\u{1F469}\u200D\u2695\uFE0F", "woman health worker", "\u5973\u533B\u751F", "\u533B\u62A4\u4EBA\u5458|\u533B\u751F|\u5973|\u5973\u4EBA|doctor|health|healthcare|nurse", 1],
  ["\u{1F9D1}\u200D\u{1F393}", "student", "\u5B66\u751F", "\u6BD5\u4E1A|\u6BD5\u4E1A\u751F|graduate", 1],
  ["\u{1F468}\u200D\u{1F393}", "man student", "\u7537\u5B66\u751F", "\u5B66\u751F|\u6BD5\u4E1A|\u7537|graduate|man|student", 1],
  ["\u{1F469}\u200D\u{1F393}", "woman student", "\u5973\u5B66\u751F", "\u5973|\u5B66\u751F|\u6BD5\u4E1A|graduate|student|woman", 1],
  ["\u{1F9D1}\u200D\u{1F3EB}", "teacher", "\u8001\u5E08", "\u6559\u5E08|\u6559\u6388|instructor|lecturer|professor", 1],
  ["\u{1F468}\u200D\u{1F3EB}", "man teacher", "\u7537\u8001\u5E08", "\u6559\u5E08|\u6559\u6388|\u7537|\u8001\u5E08|instructor|lecturer|man|professor", 1],
  ["\u{1F469}\u200D\u{1F3EB}", "woman teacher", "\u5973\u8001\u5E08", "\u5973|\u6559\u5E08|\u6559\u6388|\u8001\u5E08|instructor|lecturer|professor|teacher", 1],
  ["\u{1F9D1}\u200D\u2696\uFE0F", "judge", "\u6CD5\u5B98", "\u6CD5\u5F8B|justice|law|scales", 1],
  ["\u{1F468}\u200D\u2696\uFE0F", "man judge", "\u7537\u6CD5\u5B98", "\u6B63\u4E49|\u6CD5\u5B98|\u6CD5\u5F8B|\u7537|judge|justice|law|man", 1],
  ["\u{1F469}\u200D\u2696\uFE0F", "woman judge", "\u5973\u6CD5\u5B98", "\u5973|\u6B63\u4E49|\u6CD5\u5B98|\u6CD5\u5F8B|judge|justice|law|scales", 1],
  ["\u{1F9D1}\u200D\u{1F33E}", "farmer", "\u519C\u6C11", "\u56ED\u4E01|gardener|rancher", 1],
  ["\u{1F468}\u200D\u{1F33E}", "man farmer", "\u519C\u592B", "\u519C\u6C11|\u56ED\u4E01|\u7267\u573A\u4E3B\u4EBA|\u7267\u573A\u5DE5\u4EBA|farmer|gardener|man|rancher", 1],
  ["\u{1F469}\u200D\u{1F33E}", "woman farmer", "\u519C\u5987", "\u519C\u6C11|\u56ED\u4E01|\u5973|\u7267\u573A\u4E3B\u4EBA|farmer|gardener|rancher|woman", 1],
  ["\u{1F9D1}\u200D\u{1F373}", "cook", "\u53A8\u5E08", "\u505A\u996D|\u5927\u53A8|chef", 1],
  ["\u{1F468}\u200D\u{1F373}", "man cook", "\u7537\u53A8\u5E08", "\u505A\u996D|\u53A8\u5E08|\u5927\u53A8|\u7537|chef|cook|man", 1],
  ["\u{1F469}\u200D\u{1F373}", "woman cook", "\u5973\u53A8\u5E08", "\u505A\u996D|\u53A8\u5E08|\u5927\u53A8|\u5973|chef|cook|woman", 1],
  ["\u{1F9D1}\u200D\u{1F527}", "mechanic", "\u6280\u5DE5", "\u6C34\u7BA1\u5DE5|\u7535\u5DE5|electrician|plumber|tradesperson", 1],
  ["\u{1F468}\u200D\u{1F527}", "man mechanic", "\u7537\u6280\u5DE5", "\u6280\u5DE5|\u673A\u68B0\u5DE5|\u6742\u5DE5|\u6C34\u7BA1\u5DE5|electrician|man|mechanic|plumber", 1],
  ["\u{1F469}\u200D\u{1F527}", "woman mechanic", "\u5973\u6280\u5DE5", "\u4FEE\u7406\u5DE5|\u5973|\u6280\u5DE5|\u6C34\u7535\u5DE5|electrician|mechanic|plumber|tradesperson", 1],
  ["\u{1F9D1}\u200D\u{1F3ED}", "factory worker", "\u5DE5\u4EBA", "\u5DE5\u4E1A|\u5DE5\u5382|\u88C5\u914D|assembly|factory|industrial|worker", 1],
  ["\u{1F468}\u200D\u{1F3ED}", "man factory worker", "\u7537\u5DE5\u4EBA", "\u5DE5\u4E1A|\u5DE5\u4EBA|\u5DE5\u5382|\u7537|assembly|factory|industrial|man", 1],
  ["\u{1F469}\u200D\u{1F3ED}", "woman factory worker", "\u5973\u5DE5\u4EBA", "\u5973|\u5DE5\u4E1A|\u5DE5\u4EBA|\u5DE5\u5382|assembly|factory|industrial|woman", 1],
  ["\u{1F9D1}\u200D\u{1F4BC}", "office worker", "\u767D\u9886", "\u5546\u4EBA|\u5EFA\u7B51\u5E08|\u7ECF\u7406|architect|business|manager|office", 1],
  ["\u{1F468}\u200D\u{1F4BC}", "man office worker", "\u7537\u767D\u9886", "\u5546\u4EBA|\u5EFA\u7B51\u5E08|\u7537|\u767D\u9886|architect|business|man|manager", 1],
  ["\u{1F469}\u200D\u{1F4BC}", "woman office worker", "\u5973\u767D\u9886", "\u4EBA\u7269|\u5546\u4EBA|\u5973|\u5EFA\u7B51\u5E08|architect|business|manager|office", 1],
  ["\u{1F9D1}\u200D\u{1F52C}", "scientist", "\u79D1\u5B66\u5BB6", "\u5316\u5B66\u5BB6|\u5DE5\u7A0B\u5B66\u5BB6|\u7269\u7406\u5B66\u5BB6|\u751F\u7269\u5B66\u5BB6|biologist|chemist|engineer|mathematician", 1],
  ["\u{1F468}\u200D\u{1F52C}", "man scientist", "\u7537\u79D1\u5B66\u5BB6", "\u5316\u5B66\u5BB6|\u5DE5\u7A0B\u5B66\u5BB6|\u5DE5\u7A0B\u5E08|\u6570\u5B66\u5BB6|biologist|chemist|engineer|man", 1],
  ["\u{1F469}\u200D\u{1F52C}", "woman scientist", "\u5973\u79D1\u5B66\u5BB6", "\u5316\u5B66\u5BB6|\u5973|\u5DE5\u7A0B\u5B66\u5BB6|\u5DE5\u7A0B\u5E08|biologist|chemist|engineer|mathematician", 1],
  ["\u{1F9D1}\u200D\u{1F4BB}", "technologist", "\u7A0B\u5E8F\u5458", "\u53D1\u660E|\u5F00\u53D1\u4EBA\u5458|\u7801\u519C|\u8F6F\u4EF6|coder|computer|developer|inventor", 1],
  ["\u{1F468}\u200D\u{1F4BB}", "man technologist", "\u7537\u7A0B\u5E8F\u5458", "\u53D1\u660E\u5BB6|\u5DE5\u7A0B\u5E08|\u5F00\u53D1\u4EBA\u5458|\u7537|coder|computer|developer|inventor", 1],
  ["\u{1F469}\u200D\u{1F4BB}", "woman technologist", "\u5973\u7A0B\u5E8F\u5458", "\u53D1\u660E\u5BB6|\u5973|\u5DE5\u7A0B\u5E08|\u5F00\u53D1\u4EBA\u5458|coder|computer|developer|inventor", 1],
  ["\u{1F9D1}\u200D\u{1F3A4}", "singer", "\u6B4C\u624B", "\u6447\u6EDA\u6B4C\u624B|\u660E\u661F|\u6F14\u5458|\u827A\u4EBA|actor|entertainer|rock|rockstar", 1],
  ["\u{1F468}\u200D\u{1F3A4}", "man singer", "\u7537\u6B4C\u624B", "\u6447\u6EDA\u6B4C\u624B|\u660E\u661F|\u6B4C\u624B|\u7537|actor|entertainer|man|rock", 1],
  ["\u{1F469}\u200D\u{1F3A4}", "woman singer", "\u5973\u6B4C\u624B", "\u5973|\u6447\u6EDA\u6B4C\u624B|\u660E\u661F|\u6B4C\u624B|actor|entertainer|rock|rockstar", 1],
  ["\u{1F9D1}\u200D\u{1F3A8}", "artist", "\u827A\u672F\u5BB6", "\u753B\u5BB6|palette", 1],
  ["\u{1F468}\u200D\u{1F3A8}", "man artist", "\u7537\u827A\u672F\u5BB6", "\u7537|\u753B\u5BB6|\u827A\u672F|artist|man|palette", 1],
  ["\u{1F469}\u200D\u{1F3A8}", "woman artist", "\u5973\u827A\u672F\u5BB6", "\u5973|\u753B\u5BB6|\u827A\u672F|artist|palette|woman", 1],
  ["\u{1F9D1}\u200D\u2708\uFE0F", "pilot", "\u98DE\u884C\u5458", "\u98DE\u673A|plane", 1],
  ["\u{1F468}\u200D\u2708\uFE0F", "man pilot", "\u7537\u98DE\u884C\u5458", "\u673A\u957F|\u7537|\u98DE\u673A|\u98DE\u884C\u5458|man|pilot|plane", 1],
  ["\u{1F469}\u200D\u2708\uFE0F", "woman pilot", "\u5973\u98DE\u884C\u5458", "\u5973|\u673A\u957F|\u98DE\u673A|\u98DE\u884C\u5458|pilot|plane|woman", 1],
  ["\u{1F9D1}\u200D\u{1F680}", "astronaut", "\u5B87\u822A\u5458", "\u706B\u7BAD|rocket|space", 1],
  ["\u{1F468}\u200D\u{1F680}", "man astronaut", "\u7537\u5B87\u822A\u5458", "\u5B87\u5B99|\u5B87\u822A\u5458|\u706B\u7BAD|\u7537|astronaut|man|rocket|space", 1],
  ["\u{1F469}\u200D\u{1F680}", "woman astronaut", "\u5973\u5B87\u822A\u5458", "\u5973|\u5B87\u5B99|\u5B87\u822A\u5458|\u706B\u7BAD|astronaut|rocket|space|woman", 1],
  ["\u{1F9D1}\u200D\u{1F692}", "firefighter", "\u6D88\u9632\u5458", "\u6D88\u9632\u8F66|fire|firetruck", 1],
  ["\u{1F468}\u200D\u{1F692}", "man firefighter", "\u7537\u6D88\u9632\u5458", "\u6551\u706B|\u6D88\u9632|\u6D88\u9632\u5458|\u6D88\u9632\u8F66|fire|firefighter|firetruck|man", 1],
  ["\u{1F469}\u200D\u{1F692}", "woman firefighter", "\u5973\u6D88\u9632\u5458", "\u5973|\u6551\u706B|\u6D88\u9632|\u6D88\u9632\u5458|fire|firefighter|firetruck|woman", 1],
  ["\u{1F46E}", "police officer", "\u8B66\u5BDF", "\u4EA4\u8B66|\u4F20\u5524|\u516C\u5B89|\u5367\u5E95|apprehend|arrest|citation|cop", 1],
  ["\u{1F46E}\u200D\u2642\uFE0F", "man police officer", "\u7537\u8B66\u5BDF", "\u7537|\u8B66\u5B98|\u8B66\u5BDF|apprehend|arrest|citation|cop", 1],
  ["\u{1F46E}\u200D\u2640\uFE0F", "woman police officer", "\u5973\u8B66\u5BDF", "\u4EA4\u8B66|\u516C\u5B89|\u5367\u5E95|\u5973|apprehend|arrest|citation|cop", 1],
  ["\u{1F575}\uFE0F", "detective", "\u4FA6\u63A2", "\u7279\u5DE5|\u7537|\u95F4\u8C0D|sleuth|spy", 1],
  ["\u{1F575}\uFE0F\u200D\u2642\uFE0F", "man detective", "\u7537\u4FA6\u63A2", "\u4FA6\u63A2|\u7537|\u95F4\u8C0D|detective|man|sleuth|spy", 1],
  ["\u{1F575}\uFE0F\u200D\u2640\uFE0F", "woman detective", "\u5973\u4FA6\u63A2", "\u4FA6\u63A2|\u5973|\u7279\u5DE5|\u95F4\u8C0D|detective|sleuth|spy|woman", 1],
  ["\u{1F482}", "guard", "\u536B\u5175", "\u4F26\u6566|\u536B\u58EB|\u5B88\u536B|\u767D\u91D1\u6C49\u5BAB|buckingham|helmet|london|palace", 1],
  ["\u{1F482}\u200D\u2642\uFE0F", "man guard", "\u7537\u536B\u5175", "\u536B\u5175|\u536B\u58EB|\u5B88\u536B|\u7537|buckingham|guard|helmet|london", 1],
  ["\u{1F482}\u200D\u2640\uFE0F", "woman guard", "\u5973\u536B\u5175", "\u536B\u5175|\u536B\u58EB|\u5973|\u5B88\u536B|buckingham|guard|helmet|london", 1],
  ["\u{1F977}", "ninja", "\u5FCD\u8005", "\u4EBA\u7269|\u4FA0\u5BA2|\u523A\u5BA2|\u58EB\u5175|assassin|fight|fighter|hidden", 1],
  ["\u{1F477}", "construction worker", "\u5EFA\u7B51\u5DE5\u4EBA", "\u5305\u5DE5\u5934|\u5934\u76D4|\u5B89\u5168\u5E3D|\u5DE5\u4EBA|build|construction|fix|hardhat", 1],
  ["\u{1F477}\u200D\u2642\uFE0F", "man construction worker", "\u7537\u5EFA\u7B51\u5DE5\u4EBA", "\u5DE5\u4EBA|\u5EFA\u7B51|\u7537|build|construction|fix|hardhat", 1],
  ["\u{1F477}\u200D\u2640\uFE0F", "woman construction worker", "\u5973\u5EFA\u7B51\u5DE5\u4EBA", "\u5934\u76D4|\u5973|\u5DE5\u4EBA|\u5EFA\u7B51|build|construction|fix|hardhat", 1],
  ["\u{1FAC5}", "person with crown", "\u6234\u738B\u51A0\u7684\u4EBA", "\u541B\u4E3B|\u541B\u5A01|\u56FD\u738B|\u738B\u51A0|crown|monarch|noble|person", 1],
  ["\u{1F934}", "prince", "\u738B\u5B50", "\u7687\u5BB6|crown|fairy|fairytale|fantasy", 1],
  ["\u{1F478}", "princess", "\u516C\u4E3B", "\u7687\u51A0|\u7AE5\u8BDD|crown|fairy|fairytale|fantasy", 1],
  ["\u{1F473}", "person wearing turban", "\u6234\u5934\u5DFE\u7684\u4EBA", "\u5934\u5DFE|person|turban|wearing", 1],
  ["\u{1F473}\u200D\u2642\uFE0F", "man wearing turban", "\u6234\u5934\u5DFE\u7684\u7537\u4EBA", "\u5934\u5DFE|\u7537|man|turban|wearing", 1],
  ["\u{1F473}\u200D\u2640\uFE0F", "woman wearing turban", "\u6234\u5934\u5DFE\u7684\u5973\u4EBA", "\u5934\u5DFE|\u5973|\u7279\u672C|turban|wearing|woman", 1],
  ["\u{1F472}", "person with skullcap", "\u6234\u74DC\u76AE\u5E3D\u7684\u4EBA", "\u4EBA\u7269|\u5E3D\u5B50|\u74DC\u76AE\u5E3D|cap|chinese|gua|guapi", 1],
  ["\u{1F9D5}", "woman with headscarf", "\u5E26\u5934\u9970\u7684\u5973\u4EBA", "\u5934\u5DFE|\u5E0C\u8D3E\u5E03|\u6234\u5934\u5DFE\u7684\u5973\u4EBA|bandana|head|headscarf|hijab", 1],
  ["\u{1F935}", "person in tuxedo", "\u7A7F\u71D5\u5C3E\u670D\u7684\u4EBA", "\u4EBA|\u65B0\u90CE|\u6B63\u5F0F|\u71D5\u5C3E\u670D|formal|person|tuxedo|wedding", 1],
  ["\u{1F935}\u200D\u2642\uFE0F", "man in tuxedo", "\u7A7F\u793C\u670D\u7684\u7537\u4EBA", "\u7537\u4EBA|\u793C\u670D|formal|groom|man|tuxedo", 1],
  ["\u{1F935}\u200D\u2640\uFE0F", "woman in tuxedo", "\u7A7F\u793C\u670D\u7684\u5973\u4EBA", "\u5973\u4EBA|\u793C\u670D|formal|tuxedo|wedding|woman", 1],
  ["\u{1F470}", "person with veil", "\u6234\u5934\u7EB1\u7684\u4EBA", "\u4EBA|\u5934\u7EB1|\u5A5A\u793C|\u6234\u5934\u7EB1\u7684\u65B0\u5A18|person|veil|wedding", 1],
  ["\u{1F470}\u200D\u2642\uFE0F", "man with veil", "\u6234\u5934\u7EB1\u7684\u7537\u4EBA", "\u5934\u7EB1|\u7537\u4EBA|man|veil|wedding", 1],
  ["\u{1F470}\u200D\u2640\uFE0F", "woman with veil", "\u6234\u5934\u7EB1\u7684\u5973\u4EBA", "\u5934\u7EB1|\u5973\u4EBA|bride|veil|wedding|woman", 1],
  ["\u{1F930}", "pregnant woman", "\u5B55\u5987", "\u5973\u4EBA|\u6000\u5B55|\u6000\u5B55\u7684\u5973\u4EBA|pregnant|woman", 1],
  ["\u{1FAC3}", "pregnant man", "\u6000\u5B55\u7684\u7537\u4EBA", "\u5145\u6EE1|\u5403\u6491|\u6000\u5B55|\u7537\u5B50|belly|bloated|full|man", 1],
  ["\u{1FAC4}", "pregnant person", "\u6000\u5B55\u7684\u4EBA", "\u5145\u6EE1|\u5403\u6491|\u6000\u5B55|\u8179\u90E8|belly|bloated|full|overeat", 1],
  ["\u{1F931}", "breast-feeding", "\u6BCD\u4E73\u5582\u517B", "\u4E73\u623F|\u54FA\u4E73|\u5582\u5976|\u5A74\u513F|baby|breast|feeding|mom", 1],
  ["\u{1F469}\u200D\u{1F37C}", "woman feeding baby", "\u54FA\u4E73\u7684\u5973\u4EBA", "\u4EBA\u7269|\u4FDD\u59C6|\u54FA\u4E73|\u5582\u517B|baby|feed|feeding|mom", 1],
  ["\u{1F468}\u200D\u{1F37C}", "man feeding baby", "\u54FA\u4E73\u7684\u7537\u4EBA", "\u4EBA\u7269|\u4FDD\u59C6|\u54FA\u4E73|\u54FA\u80B2|baby|dad|father|feed", 1],
  ["\u{1F9D1}\u200D\u{1F37C}", "person feeding baby", "\u54FA\u4E73\u7684\u4EBA", "\u4EBA|\u4EBA\u7269|\u4FDD\u59C6|\u54FA\u4E73|baby|feed|feeding|nanny", 1],
  ["\u{1F47C}", "baby angel", "\u5C0F\u5929\u4F7F", "\u513F\u7AE5|\u5929\u4F7F|\u5B69\u5B50|angel|baby|church|face", 1],
  ["\u{1F385}", "Santa Claus", "\u5723\u8BDE\u8001\u4EBA", "\u5723\u8BDE|\u5723\u8BDE\u8282|\u8282\u65E5|celebration|christmas|claus|fairy", 1],
  ["\u{1F936}", "Mrs. Claus", "\u5723\u8BDE\u5976\u5976", "\u5723\u8BDE|\u5723\u8BDE\u8282|\u8282\u65E5|celebration|christmas|claus|fairy", 1],
  ["\u{1F9D1}\u200D\u{1F384}", "Mx Claus", "\u5723\u8BDE\u4EBA", "\u4EBA|\u4EBA\u7269|\u5723\u8BDE|\u5723\u8BDE\u5E3D|celebration|christmas|claus|fairy", 1],
  ["\u{1F9B8}", "superhero", "\u8D85\u7EA7\u82F1\u96C4", "\u5973\u82F1\u96C4|\u5973\u8D85\u4EBA|\u597D\u4EBA|\u82F1\u96C4|good|hero|superpower", 1],
  ["\u{1F9B8}\u200D\u2642\uFE0F", "man superhero", "\u7537\u8D85\u7EA7\u82F1\u96C4", "\u597D\u4EBA|\u7537\u4EBA|\u82F1\u96C4|\u8D85\u80FD\u529B|good|hero|man|superhero", 1],
  ["\u{1F9B8}\u200D\u2640\uFE0F", "woman superhero", "\u5973\u8D85\u7EA7\u82F1\u96C4", "\u5973\u4EBA|\u597D\u4EBA|\u82F1\u96C4|\u8D85\u80FD\u529B|good|hero|heroine|superhero", 1],
  ["\u{1F9B9}", "supervillain", "\u8D85\u7EA7\u5927\u574F\u86CB", "\u4EBA|\u574F\u86CB|\u5927\u53CD\u6D3E|\u6076\u9B54|bad|criminal|evil|superpower", 1],
  ["\u{1F9B9}\u200D\u2642\uFE0F", "man supervillain", "\u7537\u8D85\u7EA7\u5927\u574F\u86CB", "\u574F\u86CB|\u7537\u4EBA|\u7F6A\u72AF|\u8D85\u80FD\u529B|bad|criminal|evil|man", 1],
  ["\u{1F9B9}\u200D\u2640\uFE0F", "woman supervillain", "\u5973\u8D85\u7EA7\u5927\u574F\u86CB", "\u574F\u86CB|\u5973\u4EBA|\u7F6A\u72AF|\u8D85\u80FD\u529B|bad|criminal|evil|superpower", 1],
  ["\u{1F9D9}", "mage", "\u6CD5\u5E08", "\u53EC\u5524|\u5973\u5DEB|\u5973\u9B54\u672F\u5E08|\u5DEB\u5E08|fantasy|magic|play|sorcerer", 1],
  ["\u{1F9D9}\u200D\u2642\uFE0F", "man mage", "\u7537\u6CD5\u5E08", "\u7537\u5DEB|\u7537\u9B54\u672F\u5E08|fantasy|mage|magic|man", 1],
  ["\u{1F9D9}\u200D\u2640\uFE0F", "woman mage", "\u5973\u6CD5\u5E08", "\u5973\u5DEB|\u5973\u9B54\u672F\u5E08|fantasy|mage|magic|play", 1],
  ["\u{1F9DA}", "fairy", "\u7CBE\u7075", "\u4ED9\u5973|\u4ED9\u5B50|\u7AE5\u8BDD|\u7FC5\u8180|fairytale|fantasy|myth|person", 1],
  ["\u{1F9DA}\u200D\u2642\uFE0F", "man fairy", "\u4ED9\u4EBA", "\u4ED9\u7537|\u5929\u536B\u5341\u4E94|\u5929\u536B\u56DB|\u7537\u7CBE\u7075|fairy|fairytale|fantasy|man", 1],
  ["\u{1F9DA}\u200D\u2640\uFE0F", "woman fairy", "\u4ED9\u5973", "\u5973\u7CBE\u7075|\u5996\u7CBE\u738B\u540E|fairy|fairytale|fantasy|myth", 1],
  ["\u{1F9DB}", "vampire", "\u5438\u8840\u9B3C", "\u4E07\u5723\u8282|\u4E0D\u6B7B\u65CF|\u5229\u7259|\u6050\u6016|blood|dracula|fangs|halloween", 1],
  ["\u{1F9DB}\u200D\u2642\uFE0F", "man vampire", "\u7537\u5438\u8840\u9B3C", "\u7537\u4E0D\u6B7B\u65CF|blood|fangs|halloween|man", 1],
  ["\u{1F9DB}\u200D\u2640\uFE0F", "woman vampire", "\u5973\u5438\u8840\u9B3C", "\u5973\u4E0D\u6B7B\u65CF|blood|fangs|halloween|scary", 1],
  ["\u{1F9DC}", "merperson", "\u4EBA\u9C7C", "\u4E09\u53C9\u621F|\u5973\u4EBA\u9C7C|\u6C11\u95F4\u4F20\u8BF4|\u6D77\u5996|creature|fairytale|folklore|ocean", 1],
  ["\u{1F9DC}\u200D\u2642\uFE0F", "merman", "\u7537\u4EBA\u9C7C", "\u7279\u91CC\u540C|creature|fairytale|folklore|neptune", 1],
  ["\u{1F9DC}\u200D\u2640\uFE0F", "mermaid", "\u7F8E\u4EBA\u9C7C", "\u5973\u4EBA\u9C7C|creature|fairytale|folklore|merwoman", 1],
  ["\u{1F9DD}", "elf", "\u5C0F\u7CBE\u7075", "\u795E\u79D8|\u7CBE\u7075|\u9B54\u5E7B|\u9B54\u6CD5|elves|enchantment|fantasy|folklore", 1],
  ["\u{1F9DD}\u200D\u2642\uFE0F", "man elf", "\u7537\u5C0F\u7CBE\u7075", "\u7537\u6027\u9B54\u672F|elf|elves|enchantment|fantasy", 1],
  ["\u{1F9DD}\u200D\u2640\uFE0F", "woman elf", "\u5973\u5C0F\u7CBE\u7075", "\u5973\u6027\u9B54\u672F|elf|elves|enchantment|fantasy", 1],
  ["\u{1F9DE}", "genie", "\u5996\u602A", "\u5947\u5E7B|\u613F\u671B|\u64E6\u62ED\u795E\u706F|\u6770\u5C3C|djinn|fantasy|jinn|lamp", 1],
  ["\u{1F9DE}\u200D\u2642\uFE0F", "man genie", "\u7537\u5996\u602A", "\u7537\u795E\u7075|djinn|fantasy|genie|jinn", 1],
  ["\u{1F9DE}\u200D\u2640\uFE0F", "woman genie", "\u5973\u5996\u602A", "\u5973\u795E\u7075|djinn|fantasy|genie|jinn", 1],
  ["\u{1F9DF}", "zombie", "\u50F5\u5C38", "\u4E07\u5723\u8282|\u4E0D\u6B7B\u65CF|\u534A\u6B7B\u4E0D\u6D3B|\u5413\u4EBA|apocalypse|dead|halloween|horror", 1],
  ["\u{1F9DF}\u200D\u2642\uFE0F", "man zombie", "\u7537\u50F5\u5C38", "\u7537\u884C\u5C38\u8D70\u8089|apocalypse|dead|halloween|horror", 1],
  ["\u{1F9DF}\u200D\u2640\uFE0F", "woman zombie", "\u5973\u50F5\u5C38", "\u5973\u884C\u5C38\u8D70\u8089|apocalypse|dead|halloween|horror", 1],
  ["\u{1F9CC}", "troll", "\u7A74\u5C45\u5DE8\u602A", "\u5E7B\u60F3|\u602A\u517D|\u602A\u7269|\u795E\u8BDD\u6545\u4E8B|fairy|fantasy|monster|tale", 1],
  ["\u{1FAC8}", "hairy creature", "\u6BDB\u602A", "\u591A\u6BDB|\u5927\u578B|\u5927\u811A\u602A|\u5927\u811A\u91CE\u4EBA|bigfoot|cryptid|forest|giant", 1],
  ["\u{1F486}", "person getting massage", "\u6309\u6469", "\u4EAB\u53D7\u6309\u6469\u7684\u4EBA|\u5934\u75DB|\u653E\u677E|\u6C34\u7597|face|getting|headache|massage", 1],
  ["\u{1F486}\u200D\u2642\uFE0F", "man getting massage", "\u7537\u751F\u6309\u6469", "\u5934\u75DB|\u6309\u6469|\u7537|\u8138|face|getting|headache|man", 1],
  ["\u{1F486}\u200D\u2640\uFE0F", "woman getting massage", "\u5973\u751F\u6309\u6469", "\u5973|\u6309\u6469|face|getting|headache|massage", 1],
  ["\u{1F487}", "person getting haircut", "\u7406\u53D1", "\u526A\u5934|\u53D1\u578B|\u7406\u53D1\u5E08|\u7406\u53D1\u7684\u4EBA|barber|beauty|chop|cosmetology", 1],
  ["\u{1F487}\u200D\u2642\uFE0F", "man getting haircut", "\u7537\u751F\u7406\u53D1", "\u526A\u5934|\u7406\u53D1|\u7537|barber|beauty|chop|cosmetology", 1],
  ["\u{1F487}\u200D\u2640\uFE0F", "woman getting haircut", "\u5973\u751F\u7406\u53D1", "\u526A\u5934|\u5973|\u7406\u53D1|barber|beauty|chop|cosmetology", 1],
  ["\u{1F6B6}", "person walking", "\u884C\u4EBA", "\u538B\u9A6C\u8DEF|\u5F92\u6B65|\u6563\u6B65|\u6602\u9996\u9614\u6B65|amble|gait|hike|man", 1],
  ["\u{1F6B6}\u200D\u2642\uFE0F", "man walking", "\u7537\u884C\u4EBA", "\u5F92\u6B65|\u7537|\u8D70\u8DEF|amble|gait|hike|man", 1],
  ["\u{1F6B6}\u200D\u2640\uFE0F", "woman walking", "\u5973\u884C\u4EBA", "\u5973|\u5F92\u6B65|\u6F2B\u6B65|\u7F13\u884C|amble|gait|hike|man", 1],
  ["\u{1F6B6}\u200D\u27A1\uFE0F", "person walking facing right", "person walking facing right", "", 1],
  ["\u{1F6B6}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F", "woman walking facing right", "woman walking facing right", "", 1],
  ["\u{1F6B6}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F", "man walking facing right", "man walking facing right", "", 1],
  ["\u{1F9CD}", "person standing", "\u7AD9\u7ACB\u8005", "\u4EBA\u7269|\u7AD9\u7740|\u7AD9\u7740\u7684\u4EBA|\u7AD9\u7ACB|person|stand|standing", 1],
  ["\u{1F9CD}\u200D\u2642\uFE0F", "man standing", "\u7AD9\u7ACB\u7684\u7537\u4EBA", "\u7537|\u7AD9\u7740|\u7AD9\u7ACB|man|stand|standing", 1],
  ["\u{1F9CD}\u200D\u2640\uFE0F", "woman standing", "\u7AD9\u7ACB\u7684\u5973\u4EBA", "\u5973|\u7AD9\u7740|\u7AD9\u7ACB|stand|standing|woman", 1],
  ["\u{1F9CE}", "person kneeling", "\u4E0B\u8DEA\u8005", "\u4E0B\u8DEA|\u8DEA\u4E0B|\u8DEA\u5750|kneel|kneeling|knees|person", 1],
  ["\u{1F9CE}\u200D\u2642\uFE0F", "man kneeling", "\u8DEA\u4E0B\u7684\u7537\u4EBA", "\u4E0B\u8DEA|\u7537|\u8DEA\u5750|kneel|kneeling|knees|man", 1],
  ["\u{1F9CE}\u200D\u2640\uFE0F", "woman kneeling", "\u8DEA\u4E0B\u7684\u5973\u4EBA", "\u4E0B\u8DEA|\u5973|\u8DEA\u5750|kneel|kneeling|knees|woman", 1],
  ["\u{1F9CE}\u200D\u27A1\uFE0F", "person kneeling facing right", "person kneeling facing right", "", 1],
  ["\u{1F9CE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F", "woman kneeling facing right", "woman kneeling facing right", "", 1],
  ["\u{1F9CE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F", "man kneeling facing right", "man kneeling facing right", "", 1],
  ["\u{1F9D1}\u200D\u{1F9AF}", "person with white cane", "\u62C4\u76F2\u6756\u7684\u4EBA", "\u65E0\u969C\u788D|\u76F2|accessibility|blind|cane|person", 1],
  ["\u{1F9D1}\u200D\u{1F9AF}\u200D\u27A1\uFE0F", "person with white cane facing right", "person with white cane facing right", "", 1],
  ["\u{1F468}\u200D\u{1F9AF}", "man with white cane", "\u62C4\u76F2\u6756\u7684\u7537\u4EBA", "\u62D0\u6756|\u65E0\u969C\u788D|\u7537|\u7537\u4EBA|accessibility|blind|cane|man", 1],
  ["\u{1F468}\u200D\u{1F9AF}\u200D\u27A1\uFE0F", "man with white cane facing right", "man with white cane facing right", "", 1],
  ["\u{1F469}\u200D\u{1F9AF}", "woman with white cane", "\u62C4\u76F2\u6756\u7684\u5973\u4EBA", "\u5973|\u5973\u4EBA|\u5973\u6027|\u62D0\u6756|accessibility|blind|cane|probing", 1],
  ["\u{1F469}\u200D\u{1F9AF}\u200D\u27A1\uFE0F", "woman with white cane facing right", "woman with white cane facing right", "", 1],
  ["\u{1F9D1}\u200D\u{1F9BC}", "person in motorized wheelchair", "\u5750\u7535\u52A8\u8F6E\u6905\u7684\u4EBA", "\u65E0\u969C\u788D|\u8F6E\u6905|accessibility|motorized|person|wheelchair", 1],
  ["\u{1F9D1}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", "person in motorized wheelchair facing right", "person in motorized wheelchair facing right", "", 1],
  ["\u{1F468}\u200D\u{1F9BC}", "man in motorized wheelchair", "\u5750\u7535\u52A8\u8F6E\u6905\u7684\u7537\u4EBA", "\u65E0\u969C\u788D|\u7535\u52A8|\u7537|\u7537\u4EBA|accessibility|man|motorized|wheelchair", 1],
  ["\u{1F468}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", "man in motorized wheelchair facing right", "man in motorized wheelchair facing right", "", 1],
  ["\u{1F469}\u200D\u{1F9BC}", "woman in motorized wheelchair", "\u5750\u7535\u52A8\u8F6E\u6905\u7684\u5973\u4EBA", "\u5973|\u5973\u4EBA|\u5973\u5B50|\u65E0\u969C\u788D|accessibility|motorized|wheelchair|woman", 1],
  ["\u{1F469}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", "woman in motorized wheelchair facing right", "woman in motorized wheelchair facing right", "", 1],
  ["\u{1F9D1}\u200D\u{1F9BD}", "person in manual wheelchair", "\u5750\u624B\u52A8\u8F6E\u6905\u7684\u4EBA", "\u65E0\u969C\u788D|\u8F6E\u6905|accessibility|manual|person|wheelchair", 1],
  ["\u{1F9D1}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", "person in manual wheelchair facing right", "person in manual wheelchair facing right", "", 1],
  ["\u{1F468}\u200D\u{1F9BD}", "man in manual wheelchair", "\u5750\u624B\u52A8\u8F6E\u6905\u7684\u7537\u4EBA", "\u624B\u52A8|\u65E0\u969C\u788D|\u7537|\u7537\u4EBA|accessibility|man|manual|wheelchair", 1],
  ["\u{1F468}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", "man in manual wheelchair facing right", "man in manual wheelchair facing right", "", 1],
  ["\u{1F469}\u200D\u{1F9BD}", "woman in manual wheelchair", "\u5750\u624B\u52A8\u8F6E\u6905\u7684\u5973\u4EBA", "\u5973|\u5973\u4EBA|\u5973\u5B50|\u624B\u52A8|accessibility|manual|wheelchair|woman", 1],
  ["\u{1F469}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", "woman in manual wheelchair facing right", "woman in manual wheelchair facing right", "", 1],
  ["\u{1F3C3}", "person running", "\u8DD1\u6B65\u8005", "\u5306\u5FD9|\u5411\u524D\u51B2|\u5954\u8DD1|\u5FEB\u8DD1|fast|hurry|marathon|move", 1],
  ["\u{1F3C3}\u200D\u2642\uFE0F", "man running", "\u7537\u751F\u8DD1\u6B65", "\u7537|\u8DD1|\u9A6C\u62C9\u677E|fast|hurry|man|marathon", 1],
  ["\u{1F3C3}\u200D\u2640\uFE0F", "woman running", "\u5973\u751F\u8DD1\u6B65", "\u51B2\u523A|\u5973|\u6BD4\u8D5B|\u8DD1|fast|hurry|marathon|move", 1],
  ["\u{1F3C3}\u200D\u27A1\uFE0F", "person running facing right", "person running facing right", "", 1],
  ["\u{1F3C3}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F", "woman running facing right", "woman running facing right", "", 1],
  ["\u{1F3C3}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F", "man running facing right", "man running facing right", "", 1],
  ["\u{1F9D1}\u200D\u{1FA70}", "ballet dancer", "\u82AD\u857E\u821E\u8005", "\u821E\u8005|\u82AD\u857E|\u82AD\u857E\u821E|ballet|dancer", 1],
  ["\u{1F483}", "woman dancing", "\u8DF3\u821E\u7684\u5973\u4EBA", "\u4F18\u96C5|\u4F5B\u62C9\u95E8\u6208|\u5973\u4EBA|\u5973\u821E\u8005|dance|dancer|dancing|elegant", 1],
  ["\u{1F57A}", "man dancing", "\u8DF3\u821E\u7684\u7537\u4EBA", "\u4F5B\u62C9\u95E8\u6208|\u7537\u4EBA|\u7537\u821E\u8005|\u821E\u8005|dance|dancer|dancing|elegant", 1],
  ["\u{1F574}\uFE0F", "person in suit levitating", "\u897F\u88C5\u9769\u5C65\u7684\u4EBA", "\u5546\u52A1|\u6B63\u88C5|\u7537|\u897F\u88C5\u9769\u5C65|business|levitating|person|suit", 1],
  ["\u{1F46F}", "people with bunny ears", "\u6234\u5154\u8033\u6735\u7684\u4EBA", "\u5154\u5B50\u670D|\u5154\u8033\u6735|\u53CC\u4EBA\u821E|\u53CC\u80DE\u80CE|bestie|bff|bunny|counterpart", 1],
  ["\u{1F46F}\u200D\u2642\uFE0F", "men with bunny ears", "\u5154\u5148\u751F", "\u5154\u8033\u6735|\u540C\u597D|\u6C38\u8FDC\u7684\u597D\u670B\u53CB|\u6D3E\u5BF9|bestie|bff|bunny|counterpart", 1],
  ["\u{1F46F}\u200D\u2640\uFE0F", "women with bunny ears", "\u5154\u5973\u90CE", "\u5154\u8033\u6735|\u5973\u751F\u6D3E\u5BF9|\u6D3E\u5BF9|\u805A\u4F1A|bestie|bff|bunny|counterpart", 1],
  ["\u{1F9D6}", "person in steamy room", "\u84B8\u623F\u91CC\u7684\u4EBA", "\u5728\u6851\u62FF\u95F4\u7684\u4EBA|\u653E\u677E|\u6851\u62FF|\u6851\u62FF\u6D74|day|luxurious|pamper|person", 1],
  ["\u{1F9D6}\u200D\u2642\uFE0F", "man in steamy room", "\u84B8\u623F\u91CC\u7684\u7537\u4EBA", "\u6851\u62FF|\u7537\u6027\u6851\u62FF|day|luxurious|man|pamper", 1],
  ["\u{1F9D6}\u200D\u2640\uFE0F", "woman in steamy room", "\u84B8\u623F\u91CC\u7684\u5973\u4EBA", "\u5973\u6027\u6851\u62FF|\u6851\u62FF|day|luxurious|pamper|relax", 1],
  ["\u{1F9D7}", "person climbing", "\u6500\u722C\u7684\u4EBA", "\u5411\u4E0A\u722C\u7684\u4EBA|\u6500\u5CA9|\u6500\u5CA9\u8005|\u722C\u5C71|climb|climber|climbing|mountain", 1],
  ["\u{1F9D7}\u200D\u2642\uFE0F", "man climbing", "\u6500\u722C\u7684\u7537\u4EBA", "\u767B\u5C71\u8005|climb|climber|climbing|man", 1],
  ["\u{1F9D7}\u200D\u2640\uFE0F", "woman climbing", "\u6500\u722C\u7684\u5973\u4EBA", "\u767B\u5C71\u8005|climb|climber|climbing|mountain", 1],
  ["\u{1F93A}", "person fencing", "\u51FB\u5251\u9009\u624B", "\u4EBA|\u4F53\u80B2|\u51FB\u5251|\u5251|fencer|fencing|person|sword", 1],
  ["\u{1F3C7}", "horse racing", "\u8D5B\u9A6C", "\u4E09\u51A0|\u8D5B\u9A6C\u9A91\u5E08|\u9A6C|\u9A91\u5E08|horse|jockey|racehorse|racing", 1],
  ["\u26F7\uFE0F", "skier", "\u6ED1\u96EA\u7684\u4EBA", "\u6ED1\u96EA|\u96EA|ski|snow", 1],
  ["\u{1F3C2}", "snowboarder", "\u6ED1\u96EA\u677F", "\u5355\u677F|\u5355\u677F\u6ED1\u96EA|\u6ED1\u96EA|\u96EA|ski|snow|snowboard|sport", 1],
  ["\u{1F3CC}\uFE0F", "person golfing", "\u6253\u9AD8\u5C14\u592B\u7684\u4EBA", "pga|\u5C0F\u9E1F\u7403|\u63A8\u6746\u8FDB\u7403|\u7403|ball|birdie|caddy|driving", 1],
  ["\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", "man golfing", "\u7537\u751F\u6253\u9AD8\u5C14\u592B", "\u7537|\u9AD8\u5C14\u592B|ball|birdie|caddy|driving", 1],
  ["\u{1F3CC}\uFE0F\u200D\u2640\uFE0F", "woman golfing", "\u5973\u751F\u6253\u9AD8\u5C14\u592B", "\u5973|\u9AD8\u5C14\u592B|\u9AD8\u5C14\u592B\u7EC3\u7403\u573A|ball|birdie|caddy|driving", 1],
  ["\u{1F3C4}", "person surfing", "\u51B2\u6D6A", "\u51B2\u6D6A\u7684\u4EBA|\u51B2\u6D6A\u8005|\u6CE2\u6D6A|\u6D77\u4E0A\u8FD0\u52A8|beach|ocean|person|sport", 1],
  ["\u{1F3C4}\u200D\u2642\uFE0F", "man surfing", "\u7537\u751F\u51B2\u6D6A", "\u51B2\u6D6A|\u7537|beach|man|ocean|sport", 1],
  ["\u{1F3C4}\u200D\u2640\uFE0F", "woman surfing", "\u5973\u751F\u51B2\u6D6A", "\u51B2\u6D6A|\u5973|\u6D77\u6EE9|beach|ocean|person|sport", 1],
  ["\u{1F6A3}", "person rowing boat", "\u5212\u8247", "\u5212\u6868|\u5212\u8239\u8FD0\u52A8|\u6728\u7B4F|\u6CB3|boat|canoe|cruise|fishing", 1],
  ["\u{1F6A3}\u200D\u2642\uFE0F", "man rowing boat", "\u7537\u751F\u5212\u8239", "\u5212\u8239|\u5212\u8247|\u7537|\u8239|boat|canoe|cruise|fishing", 1],
  ["\u{1F6A3}\u200D\u2640\uFE0F", "woman rowing boat", "\u5973\u751F\u5212\u8239", "\u5212\u8239|\u5212\u8247|\u5973|\u8239|boat|canoe|cruise|fishing", 1],
  ["\u{1F3CA}", "person swimming", "\u6E38\u6CF3", "\u6E38\u6CF3\u7684\u4EBA|\u6E38\u6CF3\u8005|\u81EA\u7531\u6CF3|\u8FD0\u52A8|freestyle|person|sport|swim", 1],
  ["\u{1F3CA}\u200D\u2642\uFE0F", "man swimming", "\u7537\u751F\u6E38\u6CF3", "\u6E38\u6CF3|\u7537|freestyle|man|sport|swim", 1],
  ["\u{1F3CA}\u200D\u2640\uFE0F", "woman swimming", "\u5973\u751F\u6E38\u6CF3", "\u5973|\u6E38\u6CF3|freestyle|man|sport|swim", 1],
  ["\u26F9\uFE0F", "person bouncing ball", "\u73A9\u7403", "\u4F53\u80B2|\u5168\u7F51\u65E0\u963B|\u6253\u7403|\u6E38\u620F|athletic|ball|basketball|bouncing", 1],
  ["\u26F9\uFE0F\u200D\u2642\uFE0F", "man bouncing ball", "\u7537\u751F\u73A9\u7403", "\u7403|\u7537|athletic|ball|basketball|bouncing", 1],
  ["\u26F9\uFE0F\u200D\u2640\uFE0F", "woman bouncing ball", "\u5973\u751F\u73A9\u7403", "\u5973|\u5973\u751F\u6253\u7BEE\u7403|\u6E38\u620F|\u73A9|athletic|ball|basketball|bouncing", 1],
  ["\u{1F3CB}\uFE0F", "person lifting weights", "\u4E3E\u91CD", "\u4E3E\u91CD\u7684\u4EBA|\u4E3E\u91CD\u8FD0\u52A8\u5458|\u4E3E\u94C1|\u5065\u7F8E\u8005|barbell|bodybuilder|deadlift|lifter", 1],
  ["\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", "man lifting weights", "\u7537\u751F\u4E3E\u91CD", "\u4E3E\u91CD|\u7537|barbell|bodybuilder|deadlift|lifter", 1],
  ["\u{1F3CB}\uFE0F\u200D\u2640\uFE0F", "woman lifting weights", "\u5973\u751F\u4E3E\u91CD", "\u4E3E\u91CD|\u5973|\u8BAD\u7EC3|barbell|bodybuilder|deadlift|lifter", 1],
  ["\u{1F6B4}", "person biking", "\u9A91\u81EA\u884C\u8F66", "\u5355\u8F66|\u811A\u8E0F\u8F66|\u81EA\u884C\u8F66|\u81EA\u884C\u8F66\u8D5B|bicycle|bicyclist|bike|biking", 1],
  ["\u{1F6B4}\u200D\u2642\uFE0F", "man biking", "\u7537\u751F\u9A91\u81EA\u884C\u8F66", "\u5355\u8F66|\u7537|\u81EA\u884C\u8F66|\u9A91\u8F66|bicycle|bicyclist|bike|biking", 1],
  ["\u{1F6B4}\u200D\u2640\uFE0F", "woman biking", "\u5973\u751F\u9A91\u81EA\u884C\u8F66", "\u5355\u8F66|\u5973|\u5973\u751F\u9A91\u8F66|\u81EA\u884C\u8F66|bicycle|bicyclist|bike|biking", 1],
  ["\u{1F6B5}", "person mountain biking", "\u9A91\u5C71\u5730\u8F66", "\u4F53\u80B2\u7ADE\u6280|\u5355\u8F66|\u5C71|\u5C71\u5730\u81EA\u884C\u8F66|bicycle|bicyclist|bike|biking", 1],
  ["\u{1F6B5}\u200D\u2642\uFE0F", "man mountain biking", "\u7537\u751F\u9A91\u5C71\u5730\u8F66", "\u5355\u8F66|\u5C71\u5730\u8F66|\u7537|\u81EA\u884C\u8F66|bicycle|bicyclist|bike|biking", 1],
  ["\u{1F6B5}\u200D\u2640\uFE0F", "woman mountain biking", "\u5973\u751F\u9A91\u5C71\u5730\u8F66", "\u5355\u8F66|\u5973|\u5C71\u5730\u8F66|\u81EA\u884C\u8F66|bicycle|bicyclist|bike|biking", 1],
  ["\u{1F938}", "person cartwheeling", "\u4FA7\u624B\u7FFB", "\u4EBA|\u4F53\u64CD|\u4F53\u80B2|\u5174\u594B|active|cartwheel|cartwheeling|excited", 1],
  ["\u{1F938}\u200D\u2642\uFE0F", "man cartwheeling", "\u7537\u751F\u4FA7\u624B\u7FFB", "\u4F53\u64CD|\u4FA7\u624B\u7FFB|\u5174\u594B|\u5FEB\u4E50|active|cartwheel|cartwheeling|excited", 1],
  ["\u{1F938}\u200D\u2640\uFE0F", "woman cartwheeling", "\u5973\u751F\u4FA7\u624B\u7FFB", "\u4F53\u64CD|\u4FA7\u624B\u7FFB|\u5174\u594B|\u5973|active|cartwheel|cartwheeling|excited", 1],
  ["\u{1F93C}", "people wrestling", "\u6454\u8DE4\u9009\u624B", "\u4EBA|\u4F53\u80B2|\u5BF9\u51B3|\u6253\u67B6|combat|duel|grapple|people", 1],
  ["\u{1F93C}\u200D\u2642\uFE0F", "men wrestling", "\u7537\u751F\u6454\u8DE4", "\u5BF9\u51B3|\u6253\u67B6|\u640F\u6597|\u6454\u8DE4|combat|duel|grapple|men", 1],
  ["\u{1F93C}\u200D\u2640\uFE0F", "women wrestling", "\u5973\u751F\u6454\u8DE4", "\u5973|\u5973\u5B50\u6454\u8DE4|\u5BF9\u51B3|\u6253\u67B6|combat|duel|grapple|ring", 1],
  ["\u{1F93D}", "person playing water polo", "\u6C34\u7403", "\u4EBA|\u4F53\u80B2|\u6C34\u4E0A\u8DB3\u7403|\u6C34\u4E0A\u8FD0\u52A8|person|playing|polo|sport", 1],
  ["\u{1F93D}\u200D\u2642\uFE0F", "man playing water polo", "\u7537\u751F\u73A9\u6C34\u7403", "\u6C34\u4E0A\u8DB3\u7403|\u6C34\u4E0A\u8FD0\u52A8|\u6C34\u7403|\u6E38\u6CF3|man|playing|polo|sport", 1],
  ["\u{1F93D}\u200D\u2640\uFE0F", "woman playing water polo", "\u5973\u751F\u73A9\u6C34\u7403", "\u5973|\u5973\u5B50\u73A9\u6C34\u7403|\u6C34\u4E0A\u8DB3\u7403|\u6C34\u4E0A\u8FD0\u52A8|playing|polo|sport|swimming", 1],
  ["\u{1F93E}", "person playing handball", "\u624B\u7403", "\u4EBA|\u4F53\u80B2|\u6295|\u6295\u7403|athletics|ball|catch|chuck", 1],
  ["\u{1F93E}\u200D\u2642\uFE0F", "man playing handball", "\u7537\u751F\u73A9\u624B\u7403", "\u5899\u624B\u7403|\u624B\u7403|\u7537|athletics|ball|catch|chuck", 1],
  ["\u{1F93E}\u200D\u2640\uFE0F", "woman playing handball", "\u5973\u751F\u73A9\u624B\u7403", "\u5973|\u5973\u5B50\u73A9\u624B\u7403|\u624B\u7403|\u6254|athletics|ball|catch|chuck", 1],
  ["\u{1F939}", "person juggling", "\u629B\u63A5\u6742\u800D", "\u4E00\u5FC3\u591A\u7528|\u4EBA|\u5E73\u8861|\u5E73\u8861\u827A\u672F|act|balance|balancing|handle", 1],
  ["\u{1F939}\u200D\u2642\uFE0F", "man juggling", "\u7537\u751F\u629B\u63A5\u6742\u800D", "\u4E00\u5FC3\u591A\u7528|\u5E73\u8861\u827A\u672F|\u629B\u63A5\u7403|\u64CD\u7EB5|act|balance|balancing|handle", 1],
  ["\u{1F939}\u200D\u2640\uFE0F", "woman juggling", "\u5973\u751F\u629B\u63A5\u6742\u800D", "\u5973|\u6742\u6280|\u6742\u800D|\u98A0\u7403|act|balance|balancing|handle", 1],
  ["\u{1F9D8}", "person in lotus position", "\u76D8\u817F\u7684\u4EBA", "\u51A5\u60F3|\u653E\u677E|\u6C89\u601D|\u745C\u4F3D|cross|legged|legs|lotus", 1],
  ["\u{1F9D8}\u200D\u2642\uFE0F", "man in lotus position", "\u76D8\u817F\u7684\u7537\u4EBA", "\u548C\u5C1A|\u745C\u4F3D\u7537|cross|legged|legs|lotus", 1],
  ["\u{1F9D8}\u200D\u2640\uFE0F", "woman in lotus position", "\u76D8\u817F\u7684\u5973\u4EBA", "\u5C3C\u59D1|\u6BD4\u4E18\u5C3C|\u745C\u4F3D\u5973|cross|legged|legs|lotus", 1],
  ["\u{1F6C0}", "person taking bath", "\u6D17\u6FA1\u7684\u4EBA", "\u6D17\u6FA1|\u6D74\u76C6|\u6D74\u7F38|\u6FA1\u76C6|bath|bathtub|person|taking", 1],
  ["\u{1F6CC}", "person in bed", "\u8EBA\u5728\u5E8A\u4E0A\u7684\u4EBA", "\u5165\u7761|\u591C\u91CC|\u5BBE\u9986|\u665A\u5B89|bed|bedtime|good|goodnight", 1],
  ["\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}", "people holding hands", "\u624B\u62C9\u624B\u7684\u4E24\u4E2A\u4EBA", "\u4E24\u4E2A\u4EBA\u624B\u7275\u624B|\u4EBA|\u60C5\u4FA3|\u624B|bae|bestie|bff|couple", 1],
  ["\u{1F46D}", "women holding hands", "\u624B\u62C9\u624B\u7684\u4E24\u4E2A\u5973\u4EBA", "\u4E24\u4E2A\u5973\u4EBA|\u597D\u670B\u53CB|\u60C5\u4FA3|\u624B\u62C9\u624B|bae|bestie|bff|couple", 1],
  ["\u{1F46B}", "woman and man holding hands", "\u624B\u62C9\u624B\u7684\u4E00\u7537\u4E00\u5973", "\u4E00\u7537\u4E00\u5973|\u60C5\u4FA3|\u624B\u62C9\u624B|\u76F8\u604B|bae|bestie|bff|couple", 1],
  ["\u{1F46C}", "men holding hands", "\u624B\u62C9\u624B\u7684\u4E24\u4E2A\u7537\u4EBA", "\u4E24\u4E2A\u7537\u4EBA|\u53CC\u5B50\u5EA7|\u60C5\u4FA3|\u624B\u62C9\u624B|bae|bestie|bff|boys", 1],
  ["\u{1F48F}", "kiss", "\u4EB2\u543B", "\u5B9D\u8D1D|\u60C5\u4FA3|\u63A5\u543B|\u6D6A\u6F2B|anniversary|babe|bae|couple", 1],
  ["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "kiss: woman, man", "kiss: woman, man", "", 1],
  ["\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "kiss: man, man", "kiss: man, man", "", 1],
  ["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}", "kiss: woman, woman", "kiss: woman, woman", "", 1],
  ["\u{1F491}", "couple with heart", "\u60C5\u4FA3", "\u604B\u7231|\u6D6A\u6F2B|\u7EA2\u5FC3|\u7EA6\u4F1A|anniversary|babe|bae|couple", 1],
  ["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}", "couple with heart: woman, man", "couple with heart: woman, man", "", 1],
  ["\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}", "couple with heart: man, man", "couple with heart: man, man", "", 1],
  ["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}", "couple with heart: woman, woman", "couple with heart: woman, woman", "", 1],
  ["\u{1F468}\u200D\u{1F469}\u200D\u{1F466}", "family: man, woman, boy", "family: man, woman, boy", "", 1],
  ["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}", "family: man, woman, girl", "family: man, woman, girl", "", 1],
  ["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "family: man, woman, girl, boy", "family: man, woman, girl, boy", "", 1],
  ["\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "family: man, woman, boy, boy", "family: man, woman, boy, boy", "", 1],
  ["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "family: man, woman, girl, girl", "family: man, woman, girl, girl", "", 1],
  ["\u{1F468}\u200D\u{1F468}\u200D\u{1F466}", "family: man, man, boy", "family: man, man, boy", "", 1],
  ["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}", "family: man, man, girl", "family: man, man, girl", "", 1],
  ["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", "family: man, man, girl, boy", "family: man, man, girl, boy", "", 1],
  ["\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", "family: man, man, boy, boy", "family: man, man, boy, boy", "", 1],
  ["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", "family: man, man, girl, girl", "family: man, man, girl, girl", "", 1],
  ["\u{1F469}\u200D\u{1F469}\u200D\u{1F466}", "family: woman, woman, boy", "family: woman, woman, boy", "", 1],
  ["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}", "family: woman, woman, girl", "family: woman, woman, girl", "", 1],
  ["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "family: woman, woman, girl, boy", "family: woman, woman, girl, boy", "", 1],
  ["\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "family: woman, woman, boy, boy", "family: woman, woman, boy, boy", "", 1],
  ["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "family: woman, woman, girl, girl", "family: woman, woman, girl, girl", "", 1],
  ["\u{1F468}\u200D\u{1F466}", "family: man, boy", "family: man, boy", "", 1],
  ["\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", "family: man, boy, boy", "family: man, boy, boy", "", 1],
  ["\u{1F468}\u200D\u{1F467}", "family: man, girl", "family: man, girl", "", 1],
  ["\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", "family: man, girl, boy", "family: man, girl, boy", "", 1],
  ["\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", "family: man, girl, girl", "family: man, girl, girl", "", 1],
  ["\u{1F469}\u200D\u{1F466}", "family: woman, boy", "family: woman, boy", "", 1],
  ["\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "family: woman, boy, boy", "family: woman, boy, boy", "", 1],
  ["\u{1F469}\u200D\u{1F467}", "family: woman, girl", "family: woman, girl", "", 1],
  ["\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "family: woman, girl, boy", "family: woman, girl, boy", "", 1],
  ["\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "family: woman, girl, girl", "family: woman, girl, girl", "", 1],
  ["\u{1F5E3}\uFE0F", "speaking head", "\u8BF4\u8BDD", "\u526A\u5F71|\u5934|\u8138|\u8BB2\u8BDD|face|head|silhouette|speak", 1],
  ["\u{1F464}", "bust in silhouette", "\u4EBA\u50CF", "\u526A\u5F71|\u534A\u8EAB|\u534A\u8EAB\u50CF|bust|mysterious|shadow|silhouette", 1],
  ["\u{1F465}", "busts in silhouette", "\u53CC\u4EBA\u50CF", "\u526A\u5F71|\u534A\u8EAB|\u534A\u8EAB\u50CF|\u670B\u53CB|bff|bust|busts|everyone", 1],
  ["\u{1FAC2}", "people hugging", "\u4EBA\u7684\u62E5\u62B1", "\u518D\u89C1|\u53CB\u8C0A|\u544A\u522B|\u5B89\u6170|comfort|embrace|farewell|friendship", 1],
  ["\u{1F46A}", "family", "\u5BB6\u5EAD", "\u4EB2\u5B50|\u7236\u6BCD\u548C\u513F\u5B50|child", 1],
  ["\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}", "family: adult, adult, child", "\u4E00\u5B69\u5BB6\u5EAD", "\u4E00\u5B69|\u5BB6\u5EAD|\u7236\u6BCD|\u72EC\u751F\u5B50\u5973|adult|child|family", 1],
  ["\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}", "family: adult, adult, child, child", "\u4E8C\u5B69\u5BB6\u5EAD", "\u4E8C\u5B69|\u5BB6\u5EAD|\u7236\u6BCD|\u975E\u72EC\u751F\u5B50\u5973|adult|child|family", 1],
  ["\u{1F9D1}\u200D\u{1F9D2}", "family: adult, child", "\u5355\u4EB2\u4E00\u5B69\u5BB6\u5EAD", "\u4E00\u5B69|\u5355\u4EB2|\u5B69\u5B50|\u5BB6\u5EAD|adult|child|family", 1],
  ["\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}", "family: adult, child, child", "\u5355\u4EB2\u4E8C\u5B69\u5BB6\u5EAD", "\u4E8C\u5B69|\u5355\u4EB2|\u5B69\u5B50|\u5BB6\u5EAD|adult|child|family", 1],
  ["\u{1F463}", "footprints", "\u811A\u5370", "\u5728\u8DEF\u4E0A|\u8D64\u811A|\u8DB3\u8FF9|barefoot|clothing|footprint|omw", 1],
  ["\u{1FAC6}", "fingerprint", "\u6307\u7EB9", "\u4FA6\u63A2|\u5370\u8FF9|\u5B89\u5168|\u72AF\u7F6A|clue|crime|detective|forensics", 1],
  ["\u{1F435}", "monkey face", "\u7334\u5934", "\u52A8\u7269|\u7334|\u7334\u5B50|animal|banana|face|monkey", 2],
  ["\u{1F412}", "monkey", "\u7334\u5B50", "\u7334|animal|banana", 2],
  ["\u{1F98D}", "gorilla", "\u5927\u7329\u7329", "\u52A8\u7269|animal", 2],
  ["\u{1F9A7}", "orangutan", "\u7EA2\u6BDB\u7329\u7329", "\u52A8\u7269|\u7329\u7329|\u7334|\u7334\u5B50|animal|ape|monkey", 2],
  ["\u{1F436}", "dog face", "\u72D7\u8138", "\u5BA0\u7269|\u5C0F\u72D7|\u6C6A\u661F\u4EBA|\u72D7|adorbs|animal|dog|face", 2],
  ["\u{1F415}", "dog", "\u72D7", "\u52A8\u7269|\u5BA0\u7269|\u5C0F\u72D7|\u6C6A\u661F\u4EBA|animal|animals|dogs|pet", 2],
  ["\u{1F9AE}", "guide dog", "\u5BFC\u76F2\u72AC", "\u6307\u5F15|\u65E0\u969C\u788D|\u76F2|\u76F2\u4EBA|accessibility|animal|blind|dog", 2],
  ["\u{1F415}\u200D\u{1F9BA}", "service dog", "\u670D\u52A1\u72AC", "\u5DE5\u4F5C\u72AC|\u65E0\u969C\u788D|\u670D\u52A1|\u72AC|accessibility|animal|assistance|dog", 2],
  ["\u{1F429}", "poodle", "\u8D35\u5BBE\u72AC", "\u5377\u6BDB\u72D7|\u6BDB\u8338\u8338|\u72D7|animal|dog|fluffy", 2],
  ["\u{1F43A}", "wolf", "\u72FC", "\u5934|\u72FC\u5934|\u8138|animal|face", 2],
  ["\u{1F98A}", "fox", "\u72D0\u72F8", "\u52A8\u7269|\u5934|\u72D0\u72F8\u7684\u8138|\u8138|animal|face", 2],
  ["\u{1F99D}", "raccoon", "\u6D63\u718A", "\u52A8\u7269|\u597D\u5947|\u6DD8\u6C14|\u72E1\u733E|animal|curious|sly", 2],
  ["\u{1F431}", "cat face", "\u732B\u8138", "\u5BA0\u7269|\u732B|\u732B\u54AA|\u8138|animal|cat|face|kitten", 2],
  ["\u{1F408}", "cat", "\u732B", "\u5BA0\u7269|\u5C0F\u732B|animal|animals|cats|kitten", 2],
  ["\u{1F408}\u200D\u2B1B", "black cat", "\u9ED1\u732B", "\u4E07\u5723\u8282|\u4E0D\u5409\u5229|\u52A8\u7269|\u55B5|animal|black|cat|feline", 2],
  ["\u{1F981}", "lion", "\u72EE\u5B50", "\u72EE\u5B50\u5934|\u72EE\u5B50\u5EA7|\u8138|\u9EC4\u9053\u5341\u4E8C\u5BAB|alpha|animal|face|leo", 2],
  ["\u{1F42F}", "tiger face", "\u8001\u864E\u5934", "\u68EE\u6797\u4E4B\u738B|\u8001\u864E|\u8138|animal|big|cat|face", 2],
  ["\u{1F405}", "tiger", "\u8001\u864E", "\u52A8\u7269\u56ED|\u864E|animal|big|cat|predator", 2],
  ["\u{1F406}", "leopard", "\u8C79\u5B50", "\u52A8\u7269|\u730E\u8C79|\u8C79|animal|big|cat|predator", 2],
  ["\u{1F434}", "horse face", "\u9A6C\u5934", "\u76DB\u88C5\u821E\u6B65|\u9A6C|animal|dressage|equine|face", 2],
  ["\u{1FACE}", "moose", "\u9A7C\u9E7F", "\u52A8\u7269|\u54FA\u4E73\u52A8\u7269|\u9E7F\u89D2|\u9E8B\u9E7F|alces|animal|antlers|elk", 2],
  ["\u{1FACF}", "donkey", "\u9A74", "\u5014\u5F3A|\u52A8\u7269|\u54FA\u4E73\u52A8\u7269|\u56FA\u6267\u7684|animal|ass|burro|hinny", 2],
  ["\u{1F40E}", "horse", "\u9A6C", "\u52A8\u7269|\u6BD4\u8D5B|\u8D5B\u9A6C|\u9A91\u9A6C|animal|equestrian|farm|racehorse", 2],
  ["\u{1F984}", "unicorn", "\u72EC\u89D2\u517D", "\u5934|\u72EC\u89D2\u517D\u5934|\u8138|face", 2],
  ["\u{1F993}", "zebra", "\u6591\u9A6C", "\u6761\u7EB9|animal|stripe", 2],
  ["\u{1F98C}", "deer", "\u9E7F", "\u52A8\u7269|animal", 2],
  ["\u{1F9AC}", "bison", "\u5927\u91CE\u725B", "\u52A8\u7269|\u6B27\u6D32\u91CE\u725B|\u6C34\u725B|\u725B|animal|buffalo|herd|wisent", 2],
  ["\u{1F42E}", "cow face", "\u5976\u725B\u5934", "\u4E73\u725B|\u5976\u725B|\u6BCD\u725B|\u725B\u5934|animal|cow|face|farm", 2],
  ["\u{1F402}", "ox", "\u516C\u725B", "\u725B|\u91D1\u725B\u5EA7|\u9EC4\u9053\u5341\u4E8C\u5BAB|animal|animals|bull|farm", 2],
  ["\u{1F403}", "water buffalo", "\u6C34\u725B", "animal|buffalo|water|zoo", 2],
  ["\u{1F404}", "cow", "\u5976\u725B", "\u4E73\u725B|\u725B|animal|animals|farm|milk", 2],
  ["\u{1F437}", "pig face", "\u732A\u5934", "\u516B\u6212|\u732A|\u8138|animal|bacon|face|farm", 2],
  ["\u{1F416}", "pig", "\u732A", "\u57F9\u6839|\u732A\u8089|animal|bacon|farm|pork", 2],
  ["\u{1F417}", "boar", "\u91CE\u732A", "\u52A8\u7269|\u732A|animal|pig", 2],
  ["\u{1F43D}", "pig nose", "\u732A\u9F3B\u5B50", "\u732A|\u8138|\u95FB|\u9F3B|animal|face|farm|nose", 2],
  ["\u{1F40F}", "ram", "\u516C\u7F8A", "\u767D\u7F8A\u5EA7|\u7F8A|\u96C4\u6027|\u9EC4\u9053\u5341\u4E8C\u5BAB|animal|aries|horns|male", 2],
  ["\u{1F411}", "ewe", "\u6BCD\u7F8A", "\u54A9|\u6BDB\u8338\u8338|\u7EF5\u7F8A|\u7F8A|animal|baa|farm|female", 2],
  ["\u{1F410}", "goat", "\u5C71\u7F8A", "\u6469\u7FAF\u5EA7|\u9EC4\u9053\u5341\u4E8C\u5BAB|animal|capricorn|farm|milk", 2],
  ["\u{1F42A}", "camel", "\u9A86\u9A7C", "\u5355\u5CF0|\u5355\u5CF0\u9A7C|\u6C99\u6F20|\u9A7C\u5CF0|animal|desert|dromedary|hump", 2],
  ["\u{1F42B}", "two-hump camel", "\u53CC\u5CF0\u9A86\u9A7C", "\u53CC\u5CF0|\u6C99\u6F20|\u9A86\u9A7C|animal|bactrian|camel|desert", 2],
  ["\u{1F999}", "llama", "\u7F8E\u6D32\u9E35", "\u52A8\u7269|\u539F\u9A7C|\u5C0F\u7F8A\u9A7C|\u65E0\u5CF0\u9A7C|alpaca|animal|guanaco|vicu\xF1a", 2],
  ["\u{1F992}", "giraffe", "\u957F\u9888\u9E7F", "\u6591\u70B9|animal|spots", 2],
  ["\u{1F418}", "elephant", "\u5927\u8C61", "\u52A8\u7269|\u8C61|animal", 2],
  ["\u{1F9A3}", "mammoth", "\u731B\u72B8", "\u52A8\u7269|\u5927\u578B|\u6709\u7ED2\u6BDB\u7684|\u706D\u7EDD|animal|extinction|large|tusk", 2],
  ["\u{1F98F}", "rhinoceros", "\u7280\u725B", "\u52A8\u7269|animal", 2],
  ["\u{1F99B}", "hippopotamus", "\u6CB3\u9A6C", "\u52A8\u7269|animal|hippo", 2],
  ["\u{1F42D}", "mouse face", "\u8001\u9F20\u5934", "\u9F20|animal|face|mouse", 2],
  ["\u{1F401}", "mouse", "\u8001\u9F20", "\u8017\u5B50|\u9F20|animal|animals", 2],
  ["\u{1F400}", "rat", "\u8017\u5B50", "\u9F20|animal", 2],
  ["\u{1F439}", "hamster", "\u4ED3\u9F20", "\u4ED3\u9F20\u5934|\u556E\u9F7F|\u5934|\u5BA0\u7269|animal|face|pet", 2],
  ["\u{1F430}", "rabbit face", "\u5154\u5B50\u5934", "\u5154|\u5154\u5B9D\u5B9D|\u5BA0\u7269|animal|bunny|face|pet", 2],
  ["\u{1F407}", "rabbit", "\u5154\u5B50", "\u5154|\u52A8\u7269|animal|bunny|pet", 2],
  ["\u{1F43F}\uFE0F", "chipmunk", "\u677E\u9F20", "\u82B1\u6817\u9F20|\u91D1\u82B1\u9F20|animal|squirrel", 2],
  ["\u{1F9AB}", "beaver", "\u6D77\u72F8", "\u52A8\u7269|\u5927\u677F\u7259|\u6BCD\u755C|animal|dam|teeth", 2],
  ["\u{1F994}", "hedgehog", "\u523A\u732C", "\u591A\u523A|animal|spiny", 2],
  ["\u{1F987}", "bat", "\u8759\u8760", "\u5438\u8840\u9B3C|animal|vampire", 2],
  ["\u{1F43B}", "bear", "\u718A", "\u4F4E\u543C|\u5934|\u7070\u718A|\u718A\u5934|animal|face|grizzly|growl", 2],
  ["\u{1F43B}\u200D\u2744\uFE0F", "polar bear", "\u5317\u6781\u718A", "\u5317\u6781|\u718A|\u767D\u8272|animal|arctic|bear|polar", 2],
  ["\u{1F428}", "koala", "\u8003\u62C9", "\u52A8\u7269|\u6709\u888B\u7C7B\u52A8\u7269|\u6811\u888B\u718A|\u6FB3\u5927\u5229\u4E9A|animal|australia|bear|down", 2],
  ["\u{1F43C}", "panda", "\u718A\u732B", "\u5934|\u718A\u732B\u8138|\u732B\u718A|\u732B\u718A\u8138|animal|bamboo|face", 2],
  ["\u{1F9A5}", "sloth", "\u6811\u61D2", "\u6162|\u61D2|\u722C\u6811|\u8FDF\u7F13|lazy|slow", 2],
  ["\u{1F9A6}", "otter", "\u6C34\u736D", "\u52A8\u7269|\u597D\u73A9|\u6355\u9C7C|\u7231\u5F00\u73A9\u7B11|animal|fishing|playful", 2],
  ["\u{1F9A8}", "skunk", "\u81ED\u9F2C", "\u718F|\u81ED|\u9F2C|animal|stink", 2],
  ["\u{1F998}", "kangaroo", "\u888B\u9F20", "\u52A8\u7269|\u5C0F\u888B\u9F20|\u6709\u888B\u76EE\u52A8\u7269|\u6709\u888B\u7C7B\u52A8\u7269|animal|joey|jump|marsupial", 2],
  ["\u{1F9A1}", "badger", "\u737E", "\u52A8\u7269|\u6253\u6270|\u7EA0\u7F20|\u871C\u737E|animal|honey|pester", 2],
  ["\u{1F43E}", "paw prints", "\u722A\u5370", "\u722A|\u722A\u5B50|\u8DB3\u8FF9|feet|paw|paws|print", 2],
  ["\u{1F983}", "turkey", "\u706B\u9E21", "\u611F\u6069\u8282|bird|gobble|thanksgiving", 2],
  ["\u{1F414}", "chicken", "\u9E21", "\u52A8\u7269|animal|bird|ornithology", 2],
  ["\u{1F413}", "rooster", "\u516C\u9E21", "\u52A8\u7269|\u9E21|animal|bird|ornithology", 2],
  ["\u{1F423}", "hatching chick", "\u5C0F\u9E21\u7834\u58F3", "\u5C0F\u9E21|\u7834\u58F3|animal|baby|bird|chick", 2],
  ["\u{1F424}", "baby chick", "\u5C0F\u9E21", "\u9E21|animal|baby|bird|chick", 2],
  ["\u{1F425}", "front-facing baby chick", "\u6B63\u9762\u671D\u5411\u7684\u5C0F\u9E21", "\u5C0F\u9E21|animal|baby|bird|chick", 2],
  ["\u{1F426}", "bird", "\u9E1F", "\u52A8\u7269|\u9E1F\u7C7B\u5B66|animal|ornithology", 2],
  ["\u{1F427}", "penguin", "\u4F01\u9E45", "\u5357\u6781|\u5357\u6781\u6D32|animal|antarctica|bird|ornithology", 2],
  ["\u{1F54A}\uFE0F", "dove", "\u9E3D", "\u548C\u5E73|\u548C\u5E73\u8C61\u5F81|\u98DE\u7FD4|\u9E1F|bird|fly|ornithology|peace", 2],
  ["\u{1F985}", "eagle", "\u9E70", "\u8001\u9E70|\u9E1F|animal|bird|ornithology", 2],
  ["\u{1F986}", "duck", "\u9E2D\u5B50", "\u9E1F|\u9E2D|animal|bird|ornithology", 2],
  ["\u{1F9A2}", "swan", "\u5929\u9E45", "\u4E11\u5C0F\u9E2D|\u52A8\u7269|\u5C0F\u5929\u9E45|\u9E1F|animal|bird|cygnet|duckling", 2],
  ["\u{1F989}", "owl", "\u732B\u5934\u9E70", "\u777F\u667A|\u9E1F|animal|bird|ornithology|wise", 2],
  ["\u{1F9A4}", "dodo", "\u6E21\u6E21\u9E1F", "\u52A8\u7269|\u706D\u7EDD|\u9E1F|animal|bird|extinction|large", 2],
  ["\u{1FAB6}", "feather", "\u7FBD\u6BDB", "\u8F7B|\u98DE|\u9E1F|bird|flight|light|plumage", 2],
  ["\u{1F9A9}", "flamingo", "\u706B\u70C8\u9E1F", "\u534E\u4E3D|\u70ED\u5E26|\u7EA2\u9E73|\u8273\u4E3D|animal|bird|flamboyant|ornithology", 2],
  ["\u{1F99A}", "peacock", "\u5B54\u96C0", "\u5356\u5F04|\u62DB\u6447|\u8272\u5F69\u7F24\u7EB7|\u96CC\u5B54\u96C0|animal|bird|colorful|ornithology", 2],
  ["\u{1F99C}", "parrot", "\u9E66\u9E49", "\u527D\u7A83|\u6A21\u4EFF|\u8BF4\u8BDD|\u9E1F|animal|bird|ornithology|pirate", 2],
  ["\u{1FABD}", "wing", "\u7FC5\u8180", "\u5347\u5929|\u5929\u4F7F|\u5929\u4F7F\u7684|\u5929\u5802\u7684|angelic|ascend|aviation|bird", 2],
  ["\u{1F426}\u200D\u2B1B", "black bird", "\u9ED1\u8272\u7684\u9E1F", "\u4E4C\u9E26|\u52A8\u7269|\u5599|\u6E21\u9E26|animal|beak|bird|black", 2],
  ["\u{1FABF}", "goose", "\u9E45", "\u50BB|\u50BB\u74DC|\u52A8\u7269|\u560E\u560E\u53EB\u58F0|animal|bird|duck|flock", 2],
  ["\u{1F426}\u200D\u{1F525}", "phoenix", "\u51E4\u51F0", "\u4E0D\u673D|\u4E0D\u6B7B\u9E1F|\u4E1C\u5C71\u518D\u8D77|\u51E4\u51F0\u4F20\u5947|ascend|ascension|emerge|fantasy", 2],
  ["\u{1F438}", "frog", "\u9752\u86D9", "\u52A8\u7269|\u5934|\u8138|\u9752\u86D9\u5934|animal|face", 2],
  ["\u{1F40A}", "crocodile", "\u9CC4\u9C7C", "animal|zoo", 2],
  ["\u{1F422}", "turtle", "\u9F9F", "\u4E4C\u9F9F|\u6D77\u9F9F|\u9646\u9F9F|animal|terrapin|tortoise", 2],
  ["\u{1F98E}", "lizard", "\u8725\u8734", "\u722C\u884C\u52A8\u7269|animal|reptile", 2],
  ["\u{1F40D}", "snake", "\u86C7", "\u6301\u7968\u4EBA|\u72E1\u733E\u7684\u4EBA|\u86C7\u592B\u5EA7|\u9EC4\u9053\u5341\u4E8C\u5BAB|animal|bearer|ophiuchus|serpent", 2],
  ["\u{1F432}", "dragon face", "\u9F99\u5934", "\u795E\u8BDD|\u7AE5\u8BDD|\u9F99|animal|dragon|face|fairy", 2],
  ["\u{1F409}", "dragon", "\u9F99", "\u4E2D\u56FD|\u6743\u529B\u7684\u6E38\u620F|animal|fairy|fairytale|knights", 2],
  ["\u{1F995}", "sauropod", "\u8725\u8734\u7C7B", "\u4E07\u9F99\u5C5E|\u6050\u9F99|\u6881\u9F99|\u8155\u9F99|brachiosaurus|brontosaurus|dinosaur|diplodocus", 2],
  ["\u{1F996}", "T-Rex", "\u9738\u738B\u9F99", "\u6050\u9F99|\u66B4\u9F99|\u66B4\u9F99\u541B\u4E3B|dinosaur|rex|t|tyrannosaurus", 2],
  ["\u{1F433}", "spouting whale", "\u55B7\u6C34\u7684\u9CB8", "\u55B7\u6C34|\u9CB8|animal|beach|face|ocean", 2],
  ["\u{1F40B}", "whale", "\u9CB8\u9C7C", "animal|beach|ocean", 2],
  ["\u{1F42C}", "dolphin", "\u6D77\u8C5A", "\u9E2D\u811A\u677F|animal|beach|flipper|ocean", 2],
  ["\u{1FACD}", "orca", "\u864E\u9CB8", "\u5927\u6D77|\u6D77\u6D0B|\u9CB8|\u9CB8\u9C7C|marine|ocean|whale", 2],
  ["\u{1F9AD}", "seal", "\u6D77\u8C79", "\u52A8\u7269|\u6D77\u6D0B|\u6D77\u72EE|animal|lion|ocean|sea", 2],
  ["\u{1F41F}", "fish", "\u9C7C", "\u53CC\u9C7C\u5EA7|\u661F\u5EA7|\u9EC4\u9053\u5341\u4E8C\u5BAB|animal|dinner|fishes|fishing", 2],
  ["\u{1F420}", "tropical fish", "\u70ED\u5E26\u9C7C", "\u70ED\u5E26|\u9C7C|animal|fish|fishes|tropical", 2],
  ["\u{1F421}", "blowfish", "\u6CB3\u8C5A", "\u9C7C|animal|fish", 2],
  ["\u{1F988}", "shark", "\u9CA8\u9C7C", "\u9C7C|\u9CA8|animal|fish", 2],
  ["\u{1F419}", "octopus", "\u7AE0\u9C7C", "\u516B\u722A|\u9C7C|animal|creature|ocean", 2],
  ["\u{1F41A}", "spiral shell", "\u6D77\u87BA", "\u87BA|\u87BA\u65CB|animal|beach|conch|sea", 2],
  ["\u{1FAB8}", "coral", "\u73CA\u745A", "\u6C14\u5019\u53D8\u5316|\u6D77\u6D0B|\u73CA\u745A\u7901|\u7901|change|climate|ocean|reef", 2],
  ["\u{1FABC}", "jellyfish", "\u6C34\u6BCD", "\u523A\u6BDB|\u52A8\u7269|\u53D1\u5149|\u54CE\u54DF|animal|aquarium|burn|invertebrate", 2],
  ["\u{1F980}", "crab", "\u87F9", "\u5DE8\u87F9\u5EA7|\u8783\u87F9|\u9EC4\u9053\u5341\u4E8C\u5BAB|cancer|zodiac", 2],
  ["\u{1F99E}", "lobster", "\u9F99\u867E", "\u6D53\u6C64|\u6D77\u9C9C|\u7EA2\u9F99\u867E|\u8D1D\u7C7B\u6D53\u6C64|animal|bisque|claws|seafood", 2],
  ["\u{1F990}", "shrimp", "\u867E", "\u7532\u58F3|\u8D1D\u7C7B\u6C34\u4EA7|\u98DF\u7269|food|shellfish|small", 2],
  ["\u{1F991}", "squid", "\u4E4C\u8D3C", "\u8F6F\u4F53\u52A8\u7269|\u98DF\u7269|\u9C7F\u9C7C|\u58A8\u9C7C|animal|food|mollusk", 2],
  ["\u{1F9AA}", "oyster", "\u7261\u86CE", "\u6D77\u9C9C|\u73CD\u73E0|\u751F\u869D|diving|pearl", 2],
  ["\u{1F40C}", "snail", "\u8717\u725B", "\u6CD5\u56FD\u8717\u725B|animal|escargot|garden|nature", 2],
  ["\u{1F98B}", "butterfly", "\u8774\u8776", "\u6606\u866B|\u6F02\u4EAE|\u7F8E\u4E3D|insect|pretty", 2],
  ["\u{1FACC}", "monarch butterfly", "monarch butterfly", "", 2],
  ["\u{1F41B}", "bug", "\u6BDB\u6BDB\u866B", "\u6606\u866B|\u6BDB\u866B|animal|garden|insect", 2],
  ["\u{1F41C}", "ant", "\u8682\u8681", "animal|garden|insect", 2],
  ["\u{1F41D}", "honeybee", "\u871C\u8702", "\u52E4\u52B3|\u6606\u866B|\u8702\u871C|animal|bee|bumblebee|honey", 2],
  ["\u{1FAB2}", "beetle", "\u7532\u866B", "\u52A8\u7269|\u6606\u866B|\u866B\u5B50|animal|bug|insect", 2],
  ["\u{1F41E}", "lady beetle", "\u74E2\u866B", "\u6606\u866B|\u6BCD|animal|beetle|garden|insect", 2],
  ["\u{1F997}", "cricket", "\u87CB\u87C0", "\u6606\u866B|\u86B1\u8722|\u86D0\u86D0|animal|bug|grasshopper|insect", 2],
  ["\u{1FAB3}", "cockroach", "\u87D1\u8782", "\u52A8\u7269|\u5BB3\u866B|\u5C0F\u5F3A|\u6606\u866B|animal|insect|pest|roach", 2],
  ["\u{1F577}\uFE0F", "spider", "\u8718\u86DB", "\u6606\u866B|animal|insect", 2],
  ["\u{1F578}\uFE0F", "spider web", "\u8718\u86DB\u7F51", "\u86DB\u7F51|\u8718\u86DB|spider|web", 2],
  ["\u{1F982}", "scorpion", "\u874E\u5B50", "\u5929\u874E\u5BAB|\u5929\u874E\u5EA7|\u9EC4\u9053\u5341\u4E8C\u5BAB|scorpio|scorpius|zodiac", 2],
  ["\u{1F99F}", "mosquito", "\u868A\u5B50", "\u53D1\u70E7|\u53D1\u70ED|\u6606\u866B|\u759F\u75BE|bite|disease|fever|insect", 2],
  ["\u{1FAB0}", "fly", "\u82CD\u8747", "\u52A8\u7269|\u5BB3\u866B|\u75BE\u75C5|\u8150\u70C2|animal|disease|insect|maggot", 2],
  ["\u{1FAB1}", "worm", "\u8815\u866B", "\u52A8\u7269|\u5BC4\u751F\u866B|\u73AF\u8282\u52A8\u7269|\u86AF\u8693|animal|annelid|earthworm|parasite", 2],
  ["\u{1F9A0}", "microbe", "\u7EC6\u83CC", "\u53D8\u5F62\u866B|\u75C5\u6BD2|\u79D1\u5B66|\u963F\u7C73\u5DF4|amoeba|bacteria|science|virus", 2],
  ["\u{1F490}", "bouquet", "\u82B1\u675F", "\u5468\u5E74\u7EAA\u5FF5|\u751F\u65E5|\u7F57\u66FC\u53F2|\u9C9C\u82B1|anniversary|birthday|date|flower", 2],
  ["\u{1F338}", "cherry blossom", "\u6A31\u82B1", "\u82B1|blossom|cherry|flower|plant", 2],
  ["\u{1F4AE}", "white flower", "\u767D\u82B1", "\u82B1|flower|white", 2],
  ["\u{1FAB7}", "lotus", "\u83B2\u82B1", "\u4F5B\u6559|\u5370\u5EA6\u6559|\u5E7D\u9759|\u606C\u9759|beauty|buddhism|calm|flower", 2],
  ["\u{1F3F5}\uFE0F", "rosette", "\u5706\u5F62\u82B1\u9970", "\u5149\u8363\u82B1|\u690D\u7269|\u82B1|\u82B1\u5708|plant", 2],
  ["\u{1F339}", "rose", "\u73AB\u7470", "\u4F18\u96C5|\u7EA2\u73AB\u7470|\u82B1|beauty|elegant|flower|love", 2],
  ["\u{1F940}", "wilted flower", "\u67AF\u840E\u7684\u82B1", "\u51CB\u8C22|\u67AF\u840E|\u82B1|dying|flower|wilted", 2],
  ["\u{1F33A}", "hibiscus", "\u8299\u84C9", "\u6728\u69FF|\u690D\u7269|\u82B1|flower|plant", 2],
  ["\u{1F33B}", "sunflower", "\u5411\u65E5\u8475", "\u592A\u9633|\u592A\u9633\u82B1|\u82B1|flower|outdoors|plant|sun", 2],
  ["\u{1F33C}", "blossom", "\u5F00\u82B1", "\u82B1|\u84B2\u516C\u82F1|buttercup|dandelion|flower|plant", 2],
  ["\u{1F337}", "tulip", "\u90C1\u91D1\u9999", "\u5F00\u82B1|\u82B1|blossom|flower|growth|plant", 2],
  ["\u{1FABB}", "hyacinth", "\u98CE\u4FE1\u5B50", "\u6625\u5929|\u690D\u7269|\u704C\u6728|\u77E2\u8F66\u83CA|bloom|bluebonnet|flower|indigo", 2],
  ["\u{1F331}", "seedling", "\u5E7C\u82D7", "\u53D1\u82BD|\u82BD|\u82D7|plant|sapling|sprout|young", 2],
  ["\u{1FAB4}", "potted plant", "\u76C6\u683D\u690D\u7269", "\u57F9\u80B2|\u623F\u5B50|\u67AF\u71E5|\u690D\u7269|decor|grow|house|nurturing", 2],
  ["\u{1F332}", "evergreen tree", "\u677E\u6811", "\u5723\u8BDE\u6811|\u5E38\u9752\u6811|\u6811|christmas|evergreen|forest|pine", 2],
  ["\u{1F333}", "deciduous tree", "\u843D\u53F6\u6811", "\u6811|\u843D\u53F6|\u843D\u53F6\u690D\u7269|deciduous|forest|green|habitat", 2],
  ["\u{1F334}", "palm tree", "\u68D5\u6988\u6811", "\u6811|\u68D5\u6988|\u70ED\u5E26|beach|palm|plant|tree", 2],
  ["\u{1F335}", "cactus", "\u4ED9\u4EBA\u638C", "\u5E72\u65F1|\u690D\u7269|\u6C99\u6F20|desert|drought|nature|plant", 2],
  ["\u{1F33E}", "sheaf of rice", "\u7A3B\u5B50", "\u7A3B|\u7C73|\u7CAE\u98DF|\u8C37\u7269|ear|grain|grains|plant", 2],
  ["\u{1F33F}", "herb", "\u836F\u8349", "\u8349\u836F|\u9999\u8349|leaf|plant", 2],
  ["\u2618\uFE0F", "shamrock", "\u4E09\u53F6\u8349", "\u7231\u5C14\u5170|\u82DC\u84FF|\u9162\u6D46\u8349|irish|plant", 2],
  ["\u{1F340}", "four leaf clover", "\u56DB\u53F6\u8349", "\u5E78\u8FD0|\u7231\u5C14\u5170\u7684|4|clover|four|four-leaf", 2],
  ["\u{1F341}", "maple leaf", "\u67AB\u53F6", "\u6811\u53F6|\u79CB\u53F6|\u843D\u53F6|falling|leaf|maple", 2],
  ["\u{1F342}", "fallen leaf", "\u843D\u53F6", "\u53F6|\u79CB|autumn|fall|fallen|falling", 2],
  ["\u{1F343}", "leaf fluttering in wind", "\u98CE\u5439\u53F6\u843D", "\u53F6\u5B50|\u6811\u53F6|\u968F\u98CE\u98D8\u821E|blow|flutter|fluttering|leaf", 2],
  ["\u{1FAB9}", "empty nest", "\u7A7A\u5DE2", "\u5BB6|\u6811\u679D|\u7B51\u5DE2|\u9E1F\u5DE2|branch|empty|home|nest", 2],
  ["\u{1FABA}", "nest with eggs", "\u6709\u86CB\u7684\u5DE2", "\u6811\u679D|\u7B51\u5DE2|\u86CB|\u9E1F|bird|branch|egg|eggs", 2],
  ["\u{1F344}", "mushroom", "\u8611\u83C7", "\u6BD2\u8548|\u771F\u83CC|fungus|toadstool", 2],
  ["\u{1FABE}", "leafless tree", "\u65E0\u53F6\u6811", "\u51AC\u5929|\u51AC\u5B63|\u5E72\u65F1|\u65E0\u53F6|bare|barren|branches|dead", 2],
  ["\u{1F347}", "grapes", "\u8461\u8404", "\u6C34\u679C|dionysus|fruit|grape", 3],
  ["\u{1F348}", "melon", "\u751C\u74DC", "\u54C8\u5BC6\u74DC|\u6C34\u679C|\u871C\u74DC|\u9999\u74DC|cantaloupe|fruit", 3],
  ["\u{1F349}", "watermelon", "\u897F\u74DC", "\u6C34\u679C|fruit", 3],
  ["\u{1F34A}", "tangerine", "\u6A58\u5B50", "\u67D1\u6854|\u67D1\u6A58|\u6854\u5B50|\u6C34\u679C|c|citrus|fruit|nectarine", 3],
  ["\u{1F34B}", "lemon", "\u67E0\u6AAC", "\u67D1\u6A58|\u6C34\u679C|\u9178|citrus|fruit|sour", 3],
  ["\u{1F34B}\u200D\u{1F7E9}", "lime", "\u9752\u67E0", "\u67D1\u6A58\u5C5E|\u6A58\u5C5E|\u6C34\u679C|\u6E05\u723D|acidity|citrus|cocktail|fruit", 3],
  ["\u{1F34C}", "banana", "\u9999\u8549", "\u6C34\u679C|\u94BE|fruit|potassium", 3],
  ["\u{1F34D}", "pineapple", "\u83E0\u841D", "\u6C34\u679C|\u70ED\u5E26|colada|fruit|pina|tropical", 3],
  ["\u{1F96D}", "mango", "\u8292\u679C", "\u6C34\u679C|\u70ED\u5E26|\u98DF\u7269|food|fruit|tropical", 3],
  ["\u{1F34E}", "red apple", "\u7EA2\u82F9\u679C", "\u5065\u5EB7|\u6C34\u679C|\u719F|\u7EA2|apple|diet|food|fruit", 3],
  ["\u{1F34F}", "green apple", "\u9752\u82F9\u679C", "\u6C34\u679C|\u82F9\u679C|\u9752|apple|fruit|green", 3],
  ["\u{1F350}", "pear", "\u68A8", "\u6C34\u679C|fruit", 3],
  ["\u{1F351}", "peach", "\u6843", "\u6C34\u679C|fruit", 3],
  ["\u{1F352}", "cherries", "\u6A31\u6843", "\u6C34\u679C|berries|cherry|fruit|red", 3],
  ["\u{1F353}", "strawberry", "\u8349\u8393", "\u6C34\u679C|\u6D46\u679C|berry|fruit", 3],
  ["\u{1FAD0}", "blueberries", "\u84DD\u8393", "\u6C34\u679C|\u6D46\u679C|\u8D8A\u6854|\u98DF\u7269|berries|berry|bilberry|blue", 3],
  ["\u{1F95D}", "kiwi fruit", "\u7315\u7334\u6843", "\u5947\u5F02\u679C|\u6C34\u679C|\u98DF\u7269|food|fruit|kiwi", 3],
  ["\u{1F345}", "tomato", "\u897F\u7EA2\u67FF", "\u6C34\u679C|\u756A\u8304|\u852C\u83DC|food|fruit|vegetable", 3],
  ["\u{1FAD2}", "olive", "\u6A44\u6984", "\u98DF\u7269|food", 3],
  ["\u{1F965}", "coconut", "\u6930\u5B50", "\u68D5\u6988|\u83E0\u841D\u6930\u5B50\u5170\u59C6\u9152|colada|palm|pi\xF1a", 3],
  ["\u{1F951}", "avocado", "\u9CC4\u68A8", "\u6C34\u679C|\u725B\u6CB9\u679C|\u916A\u68A8|\u98DF\u7269|food|fruit", 3],
  ["\u{1F346}", "eggplant", "\u8304\u5B50", "\u852C\u83DC|aubergine|vegetable", 3],
  ["\u{1F954}", "potato", "\u571F\u8C46", "\u852C\u83DC|\u98DF\u7269|\u9A6C\u94C3\u85AF|food|vegetable", 3],
  ["\u{1F955}", "carrot", "\u80E1\u841D\u535C", "\u852C\u83DC|\u98DF\u7269|food|vegetable", 3],
  ["\u{1F33D}", "ear of corn", "\u7389\u7C73", "\u519C\u4F5C\u7269|\u5305\u8C37|\u82DE\u7C73|corn|crops|ear|farm", 3],
  ["\u{1F336}\uFE0F", "hot pepper", "\u7EA2\u8FA3\u6912", "\u8FA3|\u8FA3\u6912|hot|pepper", 3],
  ["\u{1FAD1}", "bell pepper", "\u706F\u7B3C\u6912", "\u852C\u83DC|\u8FA3\u6912|\u9752\u6912|\u98DF\u7269|bell|capsicum|food|pepper", 3],
  ["\u{1F952}", "cucumber", "\u9EC4\u74DC", "\u6CE1\u83DC|\u814C\u83DC|\u852C\u83DC|\u98DF\u7269|food|pickle|vegetable", 3],
  ["\u{1FADD}", "pickle", "pickle", "", 3],
  ["\u{1F96C}", "leafy green", "\u7EFF\u53F6\u852C\u83DC", "\u5377\u5FC3\u83DC|\u5706\u767D\u83DC|\u5C0F\u767D\u83DC|\u7518\u84DD|bok|burgers|cabbage|choy", 3],
  ["\u{1F966}", "broccoli", "\u897F\u5170\u82B1", "\u7518\u84DD|\u91CE\u751F\u5377\u5FC3\u83DC|cabbage|wild", 3],
  ["\u{1F9C4}", "garlic", "\u849C", "\u4F50\u6599|\u5927\u849C|\u849C\u5934|\u8C03\u5473|flavoring", 3],
  ["\u{1F9C5}", "onion", "\u6D0B\u8471", "\u4F50\u6599|\u8C03\u5473|flavoring", 3],
  ["\u{1F95C}", "peanuts", "\u82B1\u751F", "\u575A\u679C|\u852C\u83DC|\u98DF\u7269|food|nut|peanut|vegetable", 3],
  ["\u{1FAD8}", "beans", "\u8C46", "\u80BE|\u8C46\u5B50|\u8C46\u7C7B|\u98DF\u7269|food|kidney|legume|small", 3],
  ["\u{1F330}", "chestnut", "\u6817\u5B50", "\u674F\u4EC1|almond|plant", 3],
  ["\u{1FADA}", "ginger root", "\u59DC", "\u5065\u5EB7|\u5564\u9152|\u5929\u7136|\u6839|beer|ginger|health|herb", 3],
  ["\u{1FADB}", "pea pod", "\u8C4C\u8C46\u835A", "\u5927\u8C46|\u6BDB\u8C46|\u7D20\u98DF\u8005|\u835A|beans|beanstalk|edamame|legume", 3],
  ["\u{1F344}\u200D\u{1F7EB}", "brown mushroom", "\u8910\u8272\u8611\u83C7", "\u62AB\u8428\u914D\u6599|\u62D6\u6C93|\u65E0\u804A|\u68D5\u8272|food|fungi|fungus|mushroom", 3],
  ["\u{1FADC}", "root vegetable", "\u6839\u83DC", "\u6839|\u751C\u83DC|\u7D20\u98DF|\u8272\u62C9|beet|food|garden|radish", 3],
  ["\u{1F35E}", "bread", "\u9762\u5305", "\u4E00\u6761\u9762\u5305|\u5168\u9EA6\u9762\u5305|\u5C0F\u9EA6|\u6DC0\u7C89|carbs|food|grain|loaf", 3],
  ["\u{1F950}", "croissant", "\u7F8A\u89D2\u9762\u5305", "\u65B0\u6708\u5F62\u9762\u5305|\u6CD5\u5F0F|\u725B\u89D2\u9762\u5305|\u9762\u5305|bread|breakfast|crescent|food", 3],
  ["\u{1F956}", "baguette bread", "\u6CD5\u5F0F\u957F\u68CD\u9762\u5305", "\u6CD5\u5F0F|\u6CD5\u5F0F\u957F\u6761\u9762\u5305|\u9762\u5305|\u98DF\u7269|baguette|bread|food|french", 3],
  ["\u{1FAD3}", "flatbread", "\u6241\u9762\u5305", "\u5706\u76D8\u72B6\u70E4\u997C|\u7389\u7C73\u997C|\u76AE\u5854\u997C|\u8584\u8106\u997C|arepa|bread|food|gordita", 3],
  ["\u{1F968}", "pretzel", "\u6912\u76D0\u5377\u997C", "\u5F2F\u66F2|\u626D\u66F2\u98DF\u54C1|\u76D8\u7ED5|\u7F20\u7ED5|convoluted|twisted", 3],
  ["\u{1F96F}", "bagel", "\u9762\u5305\u5708", "\u5976\u916A\u9171|\u65E9\u9910|\u70D8\u70E4\u98DF\u54C1|\u786C\u9762\u5305\u5708|bakery|bread|breakfast|schmear", 3],
  ["\u{1F95E}", "pancakes", "\u70D9\u997C", "\u714E\u997C|\u8584\u714E\u997C|\u8584\u997C|\u98DF\u7269|breakfast|cr\xEApe|food|hotcake", 3],
  ["\u{1F9C7}", "waffle", "\u534E\u592B\u997C", "\u677E\u997C|\u683C\u5B50\u997C|\u70B9\u5FC3|\u70E4|breakfast|indecisive|iron", 3],
  ["\u{1F9C0}", "cheese wedge", "\u829D\u58EB", "\u5976\u916A|\u8D77\u53F8|cheese|wedge", 3],
  ["\u{1F356}", "meat on bone", "\u6392\u9AA8", "\u5E26\u9AA8\u7684\u8089|\u8089|\u9AA8|bone|meat", 3],
  ["\u{1F357}", "poultry leg", "\u5BB6\u79BD\u7684\u817F", "\u5BB6\u79BD|\u706B\u9E21|\u997F|\u9AA8|bone|chicken|drumstick|hungry", 3],
  ["\u{1F969}", "cut of meat", "\u8089\u5757", "\u6392\u9AA8|\u725B\u6392|\u732A\u6392|\u7EA2\u8089|chop|cut|lambchop|meat", 3],
  ["\u{1F953}", "bacon", "\u57F9\u6839", "\u70DF\u8089|\u718F\u8089|\u8089|\u80CC\u80AF|breakfast|food|meat", 3],
  ["\u{1F354}", "hamburger", "\u6C49\u5821", "\u5403|\u6C49\u5821\u5305|\u901F\u98DF|\u98DF\u7269|burger|eat|fast|food", 3],
  ["\u{1F35F}", "french fries", "\u85AF\u6761", "\u5FEB\u9910|\u6CB9\u70B8|\u98DF\u7269|fast|food|french|fries", 3],
  ["\u{1F355}", "pizza", "\u62AB\u8428", "\u4E00\u7247\u6BD4\u8428|\u6BD4\u8428|\u6BD4\u8428\u997C|\u8D77\u53F8|cheese|food|hungry|pepperoni", 3],
  ["\u{1F32D}", "hot dog", "\u70ED\u72D7", "\u9999\u80A0|dog|frankfurter|hot|hotdog", 3],
  ["\u{1F96A}", "sandwich", "\u4E09\u660E\u6CBB", "\u9762\u5305|bread", 3],
  ["\u{1F32E}", "taco", "\u58A8\u897F\u54E5\u5377\u997C", "\u5377\u997C|\u7389\u7C73\u5377\u997C|\u58A8\u897F\u54E5|\u58A8\u897F\u54E5\u7389\u7C73\u5377|mexican", 3],
  ["\u{1F32F}", "burrito", "\u58A8\u897F\u54E5\u7389\u7C73\u714E\u997C", "\u5377\u997C|\u7389\u7C73\u714E\u997C|\u58A8\u897F\u54E5|\u58A8\u897F\u54E5\u5377\u997C|mexican|wrap", 3],
  ["\u{1FAD4}", "tamale", "\u58A8\u897F\u54E5\u7CBD\u5B50", "\u5DF4\u897F\u7CBD|\u7CBD\u5B50|\u98DF\u7269|\u58A8\u897F\u54E5|food|mexican|pamonha|wrapped", 3],
  ["\u{1F959}", "stuffed flatbread", "\u5939\u5FC3\u997C", "\u5927\u997C|\u5939\u5FC3|\u6C99\u62C9\u4E09\u660E\u6CBB|\u70B8\u8C46\u4E38\u5B50|falafel|flatbread|food|gyro", 3],
  ["\u{1F9C6}", "falafel", "\u70B8\u8C46\u4E38\u5B50", "\u4E2D\u4E1C\u852C\u83DC\u7403|\u6CB9\u70B8\u9E70\u5634\u8C46\u997C|\u8089\u4E38|\u9E70\u5634\u8C46|chickpea|meatball", 3],
  ["\u{1F95A}", "egg", "\u86CB", "\u98DF\u7269|breakfast|food", 3],
  ["\u{1F373}", "cooking", "\u714E\u86CB", "\u4E00\u9762\u8001\u4E00\u9762\u5AE9\u7684\u714E\u86CB|\u505A\u83DC|\u53EA\u714E\u4E00\u9762\u8001|\u5E73\u5E95\u9505|breakfast|easy|egg|fry", 3],
  ["\u{1F958}", "shallow pan of food", "\u88C5\u6709\u98DF\u7269\u7684\u6D45\u5E95\u9505", "\u5E73\u5E95\u9505|\u6D45\u5E95|\u7096\u83DC|\u7096\u9505|casserole|food|paella|pan", 3],
  ["\u{1F372}", "pot of food", "\u4E00\u9505\u98DF\u7269", "\u7096\u83DC|\u9505|\u98DF\u7269|food|pot|soup|stew", 3],
  ["\u{1FAD5}", "fondue", "\u5976\u916A\u706B\u9505", "\u5976\u916A|\u5976\u916A\u9505|\u5DE7\u514B\u529B|\u706B\u9505|cheese|chocolate|food|melted", 3],
  ["\u{1F963}", "bowl with spoon", "\u7897\u52FA", "\u65E9\u9910|\u71D5\u9EA6|\u71D5\u9EA6\u7CA5|\u7897\u4E2D\u6C64\u5319|bowl|breakfast|cereal|congee", 3],
  ["\u{1F957}", "green salad", "\u7EFF\u8272\u6C99\u62C9", "\u6C99\u62C9|\u7EFF\u8272\u852C\u83DC|\u98DF\u7269|food|green|salad", 3],
  ["\u{1F37F}", "popcorn", "\u7206\u7C73\u82B1", "\u770B\u7535\u5F71|corn|movie|pop", 3],
  ["\u{1F9C8}", "butter", "\u9EC4\u6CB9", "\u4E73\u5236\u54C1|\u725B\u5976|dairy", 3],
  ["\u{1F9C2}", "salt", "\u76D0", "\u4F50\u6599\u74F6|\u5473\u9053|\u54B8|\u706B\u5927|condiment|flavor|mad|salty", 3],
  ["\u{1F96B}", "canned food", "\u7F50\u5934\u98DF\u54C1", "\u7F50\u5934|can|canned|food", 3],
  ["\u{1F371}", "bento box", "\u76D2\u996D", "\u4FBF\u5F53|\u4FBF\u5F53\u76D2|\u98DF\u7269|bento|box|food", 3],
  ["\u{1F358}", "rice cracker", "\u7C73\u997C", "\u7C73|\u7C73\u679C|\u98DF\u7269|cracker|food|rice", 3],
  ["\u{1F359}", "rice ball", "\u996D\u56E2", "\u65E5\u5F0F\u996D\u56E2|\u65E5\u672C|\u7C73|\u98DF\u7269|ball|food|japanese|rice", 3],
  ["\u{1F35A}", "cooked rice", "\u7C73\u996D", "\u4E3B\u98DF|\u7C73|\u98DF\u7269|\u996D|cooked|food|rice", 3],
  ["\u{1F35B}", "curry rice", "\u5496\u55B1\u996D", "\u5496\u55B1|\u98DF\u7269|\u996D|curry|food|rice", 3],
  ["\u{1F35C}", "steaming bowl", "\u9762\u6761", "\u62C9\u9762|\u6CB3\u7C89|\u70ED\u6C14\u817E\u817E|\u70ED\u6C14\u817E\u817E\u9762\u7897|bowl|chopsticks|food|noodle", 3],
  ["\u{1F35D}", "spaghetti", "\u610F\u7C89", "\u610F\u5927\u5229\u9762|\u610F\u9762|\u8089\u4E38|\u98DF\u7269|food|meatballs|pasta|restaurant", 3],
  ["\u{1F360}", "roasted sweet potato", "\u70E4\u7EA2\u85AF", "\u5730\u74DC|\u70E4\u5730\u74DC|\u7EA2\u85AF|\u98DF\u7269|food|potato|roasted|sweet", 3],
  ["\u{1F362}", "oden", "\u5173\u4E1C\u716E", "\u4E32|\u5361\u535A|\u6D77\u9C9C|\u98DF\u7269|food|kebab|restaurant|seafood", 3],
  ["\u{1F363}", "sushi", "\u5BFF\u53F8", "\u98DF\u7269|food", 3],
  ["\u{1F364}", "fried shrimp", "\u5929\u5987\u7F57", "\u5BF9\u867E|\u6CB9\u70B8|\u70B8\u867E|\u867E|fried|prawn|shrimp|tempura", 3],
  ["\u{1F365}", "fish cake with swirl", "\u9C7C\u677F", "\u9C7C|\u9C7C\u997C|cake|fish|food|pastry", 3],
  ["\u{1F96E}", "moon cake", "\u6708\u997C", "\u4E2D\u79CB\u8282|\u79CB|\u79CB\u5929|\u8282\u65E5|autumn|cake|festival|moon", 3],
  ["\u{1F361}", "dango", "\u56E2\u5B50", "\u4E32|\u548C\u679C\u5B50|\u65E5\u672C|\u751C\u70B9|dessert|japanese|skewer|stick", 3],
  ["\u{1F95F}", "dumpling", "\u997A\u5B50", "\u6069\u6F58\u7EB3\u8FBE|\u6C34\u997A|\u6CE2\u5170\u997A\u5B50|\u714E\u997A|empanada|gy\u014Dza|jiaozi|pierogi", 3],
  ["\u{1F960}", "fortune cookie", "\u5E78\u8FD0\u997C\u5E72", "\u7B7E\u9905|\u7B97\u547D|\u9884\u8A00|cookie|fortune|prophecy", 3],
  ["\u{1F961}", "takeout box", "\u5916\u5356\u76D2", "\u4E2D\u5F0F\u5916\u5356|\u5916\u5356|\u5916\u5356\u5305\u88C5|\u5916\u5356\u6876|box|chopsticks|delivery|food", 3],
  ["\u{1F366}", "soft ice cream", "\u5706\u7B52\u51B0\u6FC0\u51CC", "\u51B0\u6DC7\u6DCB|\u5706\u7B52\u51B0\u6DC7\u6DCB|\u751C|\u751C\u70B9|cream|dessert|food|ice", 3],
  ["\u{1F367}", "shaved ice", "\u5228\u51B0", "\u51B0|\u51B0\u6C99|\u6C99\u51B0|\u751C|dessert|ice|restaurant|shaved", 3],
  ["\u{1F368}", "ice cream", "\u51B0\u6DC7\u6DCB", "\u51B0|\u51B0\u6FC0\u51CC|\u5976\u6CB9|\u751C|cream|dessert|food|ice", 3],
  ["\u{1F369}", "doughnut", "\u751C\u751C\u5708", "\u751C|\u751C\u70B9|\u98DF\u7269|breakfast|dessert|donut|food", 3],
  ["\u{1F36A}", "cookie", "\u997C\u5E72", "\u5DE7\u514B\u529B\u7247|\u66F2\u5947|\u66F2\u5947\u997C|\u751C\u70B9|chip|chocolate|dessert|sweet", 3],
  ["\u{1F382}", "birthday cake", "\u751F\u65E5\u86CB\u7CD5", "\u5E86\u795D|\u751C|\u751C\u70B9|\u751F\u65E5|bday|birthday|cake|celebration", 3],
  ["\u{1F370}", "shortcake", "\u6C34\u679C\u86CB\u7CD5", "\u4E00\u7247\u86CB\u7CD5|\u5976\u6CB9|\u5976\u6CB9\u9165\u997C|\u751C\u70B9|cake|dessert|pastry|slice", 3],
  ["\u{1F9C1}", "cupcake", "\u7EB8\u676F\u86CB\u7CD5", "\u70D8\u7119\u98DF\u54C1|\u751C\u70B9|\u8BF7\u5BA2|\u9762\u5305\u5E97|bakery|dessert|sprinkles|sugar", 3],
  ["\u{1F967}", "pie", "\u6D3E", "\u4E00\u7247\u6D3E|\u5357\u74DC\u6D3E|\u6C34\u679C\u6D3E|\u6CB9\u9165\u70B9\u5FC3|apple|filling|fruit|meat", 3],
  ["\u{1F36B}", "chocolate bar", "\u5DE7\u514B\u529B", "\u4E07\u5723\u8282|\u5DE7\u514B\u529B\u68D2|\u751C|\u751C\u54C1|bar|candy|chocolate|dessert", 3],
  ["\u{1F36C}", "candy", "\u7CD6", "\u4E07\u5723\u8282|\u55DC\u751C\u98DF|\u7231\u5403\u751C\u98DF|\u751C|cavities|dessert|halloween|restaurant", 3],
  ["\u{1F36D}", "lollipop", "\u68D2\u68D2\u7CD6", "\u679C\u5B50|\u751C|\u7CD6|\u7CD6\u679C|candy|dessert|food|restaurant", 3],
  ["\u{1F36E}", "custard", "\u5976\u9EC4", "\u5361\u58EB\u8FBE|\u751C\u70B9|\u86CB\u5976\u51BB|\u86CB\u5976\u6C99\u53F8|dessert|pudding|sweet", 3],
  ["\u{1F36F}", "honey pot", "\u8702\u871C", "\u5C0F\u718A\u7EF4\u5C3C|\u6876|\u751C|\u871C\u7F50|barrel|bear|food|honey", 3],
  ["\u{1F37C}", "baby bottle", "\u5976\u74F6", "\u5976|\u5A74\u513F|\u65B0\u751F\u513F|babies|baby|birth|born", 3],
  ["\u{1F95B}", "glass of milk", "\u4E00\u676F\u5976", "\u559D|\u5976|\u676F|\u725B\u5976|drink|glass|milk", 3],
  ["\u2615", "hot beverage", "\u70ED\u996E", "\u5496\u5561|\u65E9\u6668|\u661F\u5DF4\u514B|\u70ED\u6C14\u817E\u817E|beverage|cafe|caffeine|chai", 3],
  ["\u{1FAD6}", "teapot", "\u8336\u58F6", "\u51B2\u6CE1|\u58F6|\u8336|\u98DF\u7269|brew|drink|food|pot", 3],
  ["\u{1F375}", "teacup without handle", "\u70ED\u8336", "\u4E4C\u9F99\u8336|\u65E0\u67C4\u8336\u676F|\u676F|\u6CA1\u6709\u628A\u624B\u7684\u8336\u676F|beverage|cup|drink|handle", 3],
  ["\u{1F376}", "sake", "\u6E05\u9152", "\u559D\u9152|\u6E05\u9152\u676F|\u6E05\u9152\u74F6|\u74F6|bar|beverage|bottle|cup", 3],
  ["\u{1F37E}", "bottle with popping cork", "\u5F00\u9999\u69DF", "\u559D\u9152|\u5E86\u795D|\u6728\u585E|\u74F6\u5B50|bar|bottle|cork|drink", 3],
  ["\u{1F377}", "wine glass", "\u8461\u8404\u9152", "\u4FF1\u4E50\u90E8|\u559D\u9152|\u9152|\u9152\u5427|alcohol|bar|beverage|booze", 3],
  ["\u{1F378}", "cocktail glass", "\u9E21\u5C3E\u9152", "\u4FF1\u4E50\u90E8|\u559D\u9152|\u676F|\u73BB\u7483\u676F|alcohol|bar|booze|club", 3],
  ["\u{1F379}", "tropical drink", "\u70ED\u5E26\u6C34\u679C\u996E\u6599", "\u4FF1\u4E50\u90E8|\u559D\u9152|\u70ED\u5E26\u996E\u6599|\u9152|alcohol|bar|booze|club", 3],
  ["\u{1F37A}", "beer mug", "\u5564\u9152", "\u5564\u9152\u8282|\u559D\u9152|\u676F|\u9152|alcohol|ale|bar|beer", 3],
  ["\u{1F37B}", "clinking beer mugs", "\u5E72\u676F", "\u5564\u9152|\u559D\u9152|\u78B0\u676F|\u9152|alcohol|bar|beer|booze", 3],
  ["\u{1F942}", "clinking glasses", "\u78B0\u676F", "\u559D|\u5E72\u676F|\u5E86\u795D|\u676F|celebrate|clink|clinking|drink", 3],
  ["\u{1F943}", "tumbler glass", "\u5E73\u5E95\u676F", "\u4E00\u676F\u5A01\u58EB\u5FCC|\u5A01\u58EB\u5FCC|\u5E73\u5E95\u65E0\u811A\u676F|\u676F|glass|liquor|scotch|shot", 3],
  ["\u{1FAD7}", "pouring liquid", "\u503E\u5012\u6DB2\u4F53", "\u5012\u51FA|\u503E\u5012|\u6D12\u51FA|\u6D41\u51FA|accident|drink|empty|glass", 3],
  ["\u{1F964}", "cup with straw", "\u5E26\u5438\u7BA1\u676F", "\u5E26\u5438\u7BA1\u7684\u676F\u5B50|\u679C\u6C41|\u6C34|\u6C7D\u6C34|cup|drink|juice|malt", 3],
  ["\u{1F9CB}", "bubble tea", "\u73CD\u73E0\u5976\u8336", "\u5976\u8336|\u6CE1\u6CE1|\u725B\u5976|\u73CD\u73E0|boba|bubble|food|milk", 3],
  ["\u{1F9C3}", "beverage box", "\u996E\u6599\u76D2", "\u5438\u7BA1|\u679C\u6C41|\u679C\u6C41\u76D2|\u751C\u5473|beverage|box|juice|straw", 3],
  ["\u{1F9C9}", "mate", "\u9A6C\u9EDB\u8336", "\u8336|\u996E\u6599|drink", 3],
  ["\u{1F9CA}", "ice", "\u51B0\u5757", "\u51B0|\u51B0\u51B7|\u51B0\u5C71|\u51B7|cold|cube|iceberg", 3],
  ["\u{1F962}", "chopsticks", "\u7B77\u5B50", "\u7BB8|hashi|jeotgarak|kuaizi", 3],
  ["\u{1F37D}\uFE0F", "fork and knife with plate", "\u9910\u5177", "\u505A\u83DC|\u5200|\u5200\u53C9\u4E0E\u76D8|\u53C9|cooking|dinner|eat|fork", 3],
  ["\u{1F374}", "fork and knife", "\u5200\u53C9", "\u4E2D\u9910|\u5200|\u5348\u9910|\u53C9|breakfast|breaky|cooking|cutlery", 3],
  ["\u{1F944}", "spoon", "\u5319", "\u52FA|\u52FA\u5B50|\u5319\u5B50|\u6C64\u5319|eat|tableware", 3],
  ["\u{1F52A}", "kitchen knife", "\u83DC\u5200", "\u4E3B\u53A8|\u5200|\u6B66\u5668|\u70F9\u996A|chef|cooking|hocho|kitchen", 3],
  ["\u{1FAD9}", "jar", "\u7F50", "\u5BB9\u5668|\u74F6\u5B50|\u7A7A|\u7A7A\u74F6|condiment|container|empty|nothing", 3],
  ["\u{1F3FA}", "amphora", "\u53CC\u8033\u74F6", "\u58F6|\u6C34\u74F6|\u7F50|aquarius|cooking|drink|jug", 3],
  ["\u{1F30D}", "globe showing Europe-Africa", "\u5730\u7403\u4E0A\u7684\u6B27\u6D32\u975E\u6D32", "\u4E16\u754C|\u5730\u7403|\u6B27\u6D32|\u975E\u6D32|africa|earth|europe|europe-africa", 4],
  ["\u{1F30E}", "globe showing Americas", "\u5730\u7403\u4E0A\u7684\u7F8E\u6D32", "\u4E16\u754C|\u5168\u7403|\u5730\u7403|\u7F8E\u6D32|americas|earth|globe|showing", 4],
  ["\u{1F30F}", "globe showing Asia-Australia", "\u5730\u7403\u4E0A\u7684\u4E9A\u6D32\u6FB3\u6D32", "\u4E16\u754C|\u4E9A\u6D32|\u4E9A\u6FB3|\u5168\u7403|asia|asia-australia|australia|earth", 4],
  ["\u{1F310}", "globe with meridians", "\u5E26\u7ECF\u7EAC\u7EBF\u7684\u5730\u7403", "\u4E16\u754C|\u5168\u7403|\u5730\u7403|\u5B50\u5348\u7EBF|earth|globe|internet|meridians", 4],
  ["\u{1F5FA}\uFE0F", "world map", "\u4E16\u754C\u5730\u56FE", "\u4E16\u754C|\u5730\u56FE|map|world", 4],
  ["\u{1F5FE}", "map of Japan", "\u65E5\u672C\u5730\u56FE", "\u5730\u56FE|\u65E5\u672C|japan|map", 4],
  ["\u{1F9ED}", "compass", "\u6307\u5357\u9488", "\u5B9A\u5411|\u5BFC\u822A|\u65B9\u5411|\u78C1\u6027|direction|magnetic|navigation|orienteering", 4],
  ["\u{1F3D4}\uFE0F", "snow-capped mountain", "\u96EA\u5C71", "\u51B7|\u5C71|\u6CE0|\u96EA|cold|mountain|snow|snow-capped", 4],
  ["\u26F0\uFE0F", "mountain", "\u5C71", "\u5CF0", 4],
  ["\u{1F6D8}", "landslide", "\u5C71\u4F53\u6ED1\u5761", "\u5371\u9669|\u5730\u9707|\u584C\u65B9|\u5C71|avalanche|danger|disaster|earthquake", 4],
  ["\u{1F30B}", "volcano", "\u706B\u5C71", "\u55B7\u53D1|\u5927\u81EA\u7136|\u5C71|\u7206\u53D1|eruption|mountain|nature", 4],
  ["\u{1F5FB}", "mount fuji", "\u5BCC\u58EB\u5C71", "\u5927\u81EA\u7136|\u5C71|fuji|mount|mountain|nature", 4],
  ["\u{1F3D5}\uFE0F", "camping", "\u9732\u8425", "\u5E10\u7BF7", 4],
  ["\u{1F3D6}\uFE0F", "beach with umbrella", "\u6C99\u6EE9\u4F1E", "\u4F1E|\u6709\u4F1E\u7684\u6D77\u6EE9|\u6C99\u6EE9|\u6D77\u6EE9|beach|umbrella", 4],
  ["\u{1F3DC}\uFE0F", "desert", "\u6C99\u6F20", "\u8352\u6F20", 4],
  ["\u{1F3DD}\uFE0F", "desert island", "\u65E0\u4EBA\u8352\u5C9B", "\u5C9B|\u6C99\u6EE9\u5B64\u5C9B|\u6C99\u6F20|\u8352\u5C9B|desert|island", 4],
  ["\u{1F3DE}\uFE0F", "national park", "\u56FD\u5BB6\u516C\u56ED", "\u516C\u56ED|\u81EA\u7136|\u98CE\u666F|national|park", 4],
  ["\u{1F3DF}\uFE0F", "stadium", "\u4F53\u80B2\u9986", "\u7ADE\u6280\u573A", 4],
  ["\u{1F3DB}\uFE0F", "classical building", "\u53E4\u5178\u5EFA\u7B51", "\u53E4\u5178|\u53E4\u5EFA\u7B51|building|classical", 4],
  ["\u{1F3D7}\uFE0F", "building construction", "\u65BD\u5DE5", "\u5174\u5EFA|\u5EFA\u7B51\u65BD\u5DE5|building|construction|crane", 4],
  ["\u{1F9F1}", "brick", "\u7816", "\u5899|\u7802\u6D46|\u9ECF\u571F|bricks|clay|mortar|wall", 4],
  ["\u{1FAA8}", "rock", "\u5CA9\u77F3", "\u56FA\u4F53|\u575A\u4E0D\u53EF\u6467|\u5DE8\u77F3|\u77F3\u5934|boulder|heavy|solid|stone", 4],
  ["\u{1FAB5}", "wood", "\u6728\u5934", "\u539F\u6728|\u5706\u6728|\u6728\u6750|\u6728\u6869|log|lumber|timber", 4],
  ["\u{1F6D6}", "hut", "\u5C0F\u5C4B", "\u5706\u5C4B|\u5BB6|\u8305\u5C4B|\u8499\u53E4\u5305|home|house|roundhouse|shelter", 4],
  ["\u{1F3D8}\uFE0F", "houses", "\u623F\u5C4B\u5EFA\u7B51", "\u4F4F\u5B85|\u5C0F\u533A|\u623F|\u623F\u5B50|house", 4],
  ["\u{1F3DA}\uFE0F", "derelict house", "\u5E9F\u589F", "\u5E9F\u5C4B|\u8352\u5B85|\u8352\u5E9F|\u9B3C\u5C4B|derelict|home|house", 4],
  ["\u{1F3E0}", "house", "\u623F\u5B50", "\u4F4F\u5BB6|\u5BB6|\u4E61\u6751\u5BB6\u56ED|\u5EFA\u7B51|building|country|heart|home", 4],
  ["\u{1F3E1}", "house with garden", "\u522B\u5885", "\u4F4F\u5BB6|\u5BB6|\u4E61\u6751\u5BB6\u56ED|\u5EAD\u9662|building|country|garden|heart", 4],
  ["\u{1F3E2}", "office building", "\u529E\u516C\u697C", "\u5199\u5B57\u697C|\u5EFA\u7B51|building|city|cubical|job", 4],
  ["\u{1F3E3}", "Japanese post office", "\u65E5\u672C\u90AE\u5C40", "\u5EFA\u7B51|\u65E5\u672C|\u90AE\u4FBF|\u90AE\u5C40|building|japanese|office|post", 4],
  ["\u{1F3E4}", "post office", "\u90AE\u5C40", "\u5EFA\u7B51|\u6B27\u6D32|\u6B27\u6D32\u90AE\u5C40|building|european|office|post", 4],
  ["\u{1F3E5}", "hospital", "\u533B\u9662", "\u533B\u751F|\u533B\u836F|\u5EFA\u7B51|\u770B\u75C5|building|doctor|medicine", 4],
  ["\u{1F3E6}", "bank", "\u94F6\u884C", "\u5EFA\u7B51|building", 4],
  ["\u{1F3E8}", "hotel", "\u9152\u5E97", "\u5EFA\u7B51|\u65C5\u9986|building", 4],
  ["\u{1F3E9}", "love hotel", "\u60C5\u4EBA\u9152\u5E97", "\u5EFA\u7B51|\u60C5\u4EBA\u65C5\u9986|\u60C5\u4FA3\u9152\u5E97|\u65C5\u9986|building|hotel|love", 4],
  ["\u{1F3EA}", "convenience store", "\u4FBF\u5229\u5E97", "24 \u5C0F\u65F6|\u5546\u5E97|\u5EFA\u7B51|24|building|convenience|hours", 4],
  ["\u{1F3EB}", "school", "\u5B66\u6821", "\u5EFA\u7B51|\u6559\u5B66\u697C|building", 4],
  ["\u{1F3EC}", "department store", "\u5546\u573A", "\u5EFA\u7B51|\u767E\u8D27\u516C\u53F8|\u767E\u8D27\u5546\u57CE|\u767E\u8D27\u5546\u5E97|building|department|store", 4],
  ["\u{1F3ED}", "factory", "\u5DE5\u5382", "\u5EFA\u7B51|building", 4],
  ["\u{1F3EF}", "Japanese castle", "\u65E5\u672C\u57CE\u5821", "\u57CE\u5821|\u5EFA\u7B51|\u65E5\u672C|building|castle|japanese", 4],
  ["\u{1F3F0}", "castle", "\u6B27\u6D32\u57CE\u5821", "\u57CE\u5821|\u5EFA\u7B51|\u6B27\u6D32|building|european", 4],
  ["\u{1F492}", "wedding", "\u5A5A\u793C", "\u6559\u5802|\u6D6A\u6F2B|\u7ED3\u5A5A|chapel|hitched|nuptials|romance", 4],
  ["\u{1F5FC}", "Tokyo tower", "\u4E1C\u4EAC\u5854", "\u4E1C\u4EAC|\u5854|tokyo|tower", 4],
  ["\u{1F5FD}", "Statue of Liberty", "\u81EA\u7531\u5973\u795E\u50CF", "\u5851\u50CF|\u7EBD\u7EA6|\u81EA\u7531|\u96D5\u5851|liberty|new|ny|nyc", 4],
  ["\u26EA", "church", "\u6559\u5802", "\u57FA\u7763|\u57FA\u7763\u6559|\u5B97\u6559|\u5C0F\u6559\u5802|bless|chapel|christian|cross", 4],
  ["\u{1F54C}", "mosque", "\u6E05\u771F\u5BFA", "\u4F0A\u65AF\u5170|\u5B97\u6559|\u7A46\u65AF\u6797|islam|masjid|muslim|religion", 4],
  ["\u{1F6D5}", "hindu temple", "\u5370\u5EA6\u5BFA\u5E99", "\u4F5B\u5BFA|\u4F5B\u6559|\u5BFA\u5E99|\u5BFA\u9662|hindu|temple", 4],
  ["\u{1F54D}", "synagogue", "\u72B9\u592A\u6559\u5802", "\u4F1A\u5802|\u5B97\u6559|\u72B9\u592A|\u72B9\u592A\u6559|jew|jewish|judaism|religion", 4],
  ["\u26E9\uFE0F", "shinto shrine", "\u795E\u793E", "\u5B97\u6559|\u65E5\u672C|\u795E\u9053\u6559|religion|shinto|shrine", 4],
  ["\u{1F54B}", "kaaba", "\u514B\u5C14\u767D", "\u4F0A\u65AF\u5170|\u5929\u623F|\u5B97\u6559|\u7A46\u65AF\u6797|hajj|islam|muslim|religion", 4],
  ["\u26F2", "fountain", "\u55B7\u6CC9", "", 4],
  ["\u26FA", "tent", "\u5E10\u7BF7", "\u9732\u8425|camping", 4],
  ["\u{1F301}", "foggy", "\u6709\u96FE", "\u96FE|\u973E|fog", 4],
  ["\u{1F303}", "night with stars", "\u591C\u665A", "\u661F\u7A7A|\u665A\u4E0A|night|star|stars", 4],
  ["\u{1F3D9}\uFE0F", "cityscape", "\u57CE\u5E02\u98CE\u5149", "\u57CE\u5E02|\u90FD\u5E02|\u90FD\u5E02\u666F\u89C2|\u9AD8\u697C\u5927\u53A6|city", 4],
  ["\u{1F304}", "sunrise over mountains", "\u5C71\u9876\u65E5\u51FA", "\u592A\u9633|\u5C71|\u65E5\u51FA|\u65E9\u6668|morning|mountains|over|sun", 4],
  ["\u{1F305}", "sunrise", "\u65E5\u51FA", "\u5927\u81EA\u7136|\u592A\u9633|\u65E9\u6668|\u6E05\u6668|morning|nature|sun", 4],
  ["\u{1F306}", "cityscape at dusk", "\u57CE\u5E02\u9EC4\u660F", "\u57CE\u5E02|\u591C\u665A|\u65E5\u843D|\u90FD\u5E02|at|building|city|cityscape", 4],
  ["\u{1F307}", "sunset", "\u65E5\u843D", "\u5915\u9633|building|dusk|sun", 4],
  ["\u{1F309}", "bridge at night", "\u591C\u5E55\u4E0B\u7684\u6865", "\u591C\u5E55|\u665A\u4E0A|\u6865|at|bridge|night", 4],
  ["\u2668\uFE0F", "hot springs", "\u6E29\u6CC9", "\u6C34|\u6CC9|\u70ED\u6C14\u817E\u817E|\u84B8\u6C7D|hot|hotsprings|springs|steaming", 4],
  ["\u{1F3A0}", "carousel horse", "\u65CB\u8F6C\u6728\u9A6C", "\u6728\u9A6C|\u6E38\u4E50\u56ED|carousel|entertainment|horse", 4],
  ["\u{1F6DD}", "playground slide", "\u6E38\u4E50\u573A\u6ED1\u68AF", "\u6E38\u4E50\u56ED|\u6E38\u4E50\u573A|\u6ED1\u68AF|\u73A9|amusement|park|play|playground", 4],
  ["\u{1F3A1}", "ferris wheel", "\u6469\u5929\u8F6E", "\u6E38\u4E50\u56ED|amusement|ferris|park|theme", 4],
  ["\u{1F3A2}", "roller coaster", "\u8FC7\u5C71\u8F66", "\u6E38\u4E50\u56ED|amusement|coaster|park|roller", 4],
  ["\u{1F488}", "barber pole", "\u7406\u53D1\u5E97", "\u65CB\u8F6C|\u67F1|\u7406\u53D1|\u7406\u53D1\u5E08|barber|cut|fresh|haircut", 4],
  ["\u{1F3AA}", "circus tent", "\u9A6C\u620F\u56E2\u5E10\u7BF7", "\u5E10\u7BF7|\u9A6C\u620F\u56E2|circus|tent", 4],
  ["\u{1F682}", "locomotive", "\u84B8\u6C7D\u706B\u8F66", "\u5B88\u8F66|\u65C5\u884C|\u706B\u8F66|\u706B\u8F66\u5934|caboose|engine|railway|steam", 4],
  ["\u{1F683}", "railway car", "\u8F68\u9053\u8F66", "\u65C5\u884C|\u7535\u8F66|\u94C1\u8DEF|car|electric|railway|train", 4],
  ["\u{1F684}", "high-speed train", "\u9AD8\u901F\u5217\u8F66", "\u52A8\u8F66|\u65B0\u5E72\u7EBF|\u706B\u8F66|\u901F\u5EA6|high-speed|railway|shinkansen|speed", 4],
  ["\u{1F685}", "bullet train", "\u5B50\u5F39\u5934\u9AD8\u901F\u5217\u8F66", "\u52A8\u8F66|\u5B50\u5F39\u5217\u8F66|\u5B50\u5F39\u5934|\u65B0\u5E72\u7EBF|bullet|high-speed|nose|railway", 4],
  ["\u{1F686}", "train", "\u706B\u8F66", "\u5230\u7AD9|\u545C\u545C|\u94C1\u8DEF|arrived|choo|railway", 4],
  ["\u{1F687}", "metro", "\u5730\u94C1", "\u6377\u8FD0|subway|travel", 4],
  ["\u{1F688}", "light rail", "\u8F7B\u8F68", "\u5230\u7AD9|\u5355\u8F68\u7535\u8F66|\u706B\u8F66|arrived|light|monorail|rail", 4],
  ["\u{1F689}", "station", "\u8F66\u7AD9", "\u5730\u94C1|\u6377\u8FD0|\u706B\u8F66|\u94C1\u8DEF|railway|train", 4],
  ["\u{1F68A}", "tram", "\u8DEF\u9762\u7535\u8F66", "\u6377\u8FD0|\u7535\u8F66|trolleybus", 4],
  ["\u{1F69D}", "monorail", "\u5355\u8F68", "\u5355\u8F68\u7535\u8F66|\u706B\u8F66|vehicle", 4],
  ["\u{1F69E}", "mountain railway", "\u5C71\u533A\u94C1\u8DEF", "\u5C71\u533A|\u5C71\u5730\u94C1\u8DEF|\u706B\u8F66|\u94C1\u8DEF|car|mountain|railway|trip", 4],
  ["\u{1F68B}", "tram car", "\u6709\u8F68\u7535\u8F66", "\u8F68\u9053|bus|car|tram|trolley", 4],
  ["\u{1F68C}", "bus", "\u516C\u4EA4\u8F66", "\u516C\u4EA4|\u516C\u5171\u6C7D\u8F66|\u5927\u5DF4|school|vehicle", 4],
  ["\u{1F68D}", "oncoming bus", "\u8FCE\u9762\u9A76\u6765\u7684\u516C\u4EA4\u8F66", "\u516C\u4EA4|\u516C\u5171\u6C7D\u8F66|\u5927\u5DF4|\u8FCE\u9762\u9A76\u6765|bus|cars|oncoming", 4],
  ["\u{1F68E}", "trolleybus", "\u65E0\u8F68\u7535\u8F66", "\u516C\u5171\u6C7D\u8F66|\u7535\u8F66|bus|tram|trolley", 4],
  ["\u{1F690}", "minibus", "\u5C0F\u5DF4", "\u516C\u5171\u6C7D\u8F66|\u5F00\u8F66|\u79FB\u52A8\u623F\u8F66|bus|drive|van|vehicle", 4],
  ["\u{1F691}", "ambulance", "\u6551\u62A4\u8F66", "\u6025\u6551|\u8F66\u8F86|emergency|vehicle", 4],
  ["\u{1F692}", "fire engine", "\u6D88\u9632\u8F66", "\u6551\u706B\u8F66|\u706B\u707E|engine|fire|truck", 4],
  ["\u{1F693}", "police car", "\u8B66\u8F66", "\u6A80\u5C9B\u8B66\u9A0E|\u6C7D\u8F66|\u8B66\u5BDF|\u5DE1\u903B|5\u20130|car|cops|patrol", 4],
  ["\u{1F694}", "oncoming police car", "\u8FCE\u9762\u9A76\u6765\u7684\u8B66\u8F66", "\u6C7D\u8F66|\u8B66\u5BDF|\u8B66\u8F66|car|oncoming|police", 4],
  ["\u{1F695}", "taxi", "\u51FA\u79DF\u8F66", "\u5C0F\u9EC4|\u5F00\u8F66|\u6C7D\u8F66|\u7684\u58EB|cab|cabbie|car|drive", 4],
  ["\u{1F696}", "oncoming taxi", "\u8FCE\u9762\u9A76\u6765\u7684\u51FA\u79DF\u8F66", "\u4F18\u6B65|\u51FA\u79DF\u8F66|\u53EB\u8F66|\u5C0F\u9EC4|cab|cabbie|cars|drove", 4],
  ["\u{1F697}", "automobile", "\u6C7D\u8F66", "\u5F00\u8F66|\u8F7F\u8F66|car|driving|vehicle", 4],
  ["\u{1F698}", "oncoming automobile", "\u8FCE\u9762\u9A76\u6765\u7684\u6C7D\u8F66", "\u5F00\u8F66|\u6C7D\u8F66|\u8F7F\u8F66|\u8FCE\u9762\u800C\u6765|automobile|car|cars|drove", 4],
  ["\u{1F699}", "sport utility vehicle", "\u8FD0\u52A8\u578B\u591A\u7528\u9014\u8F66", "suv|\u4F11\u65C5\u8F66|\u4F11\u95F2\u8F66|\u5F00\u8F66|car|drive|recreational|sport", 4],
  ["\u{1F6FB}", "pickup truck", "\u655E\u84EC\u5C0F\u578B\u8F7D\u8D27\u5361\u8F66", "\u4EA4\u901A\u5DE5\u5177|\u5361\u8F66|\u6C7D\u8F66|\u76AE\u5361|automobile|car|flatbed|pick-up", 4],
  ["\u{1F69A}", "delivery truck", "\u8D27\u8F66", "\u5361\u8F66|\u5F00\u8F66|\u9001\u8D27|car|delivery|drive|truck", 4],
  ["\u{1F69B}", "articulated lorry", "\u94F0\u63A5\u5F0F\u8D27\u8F66", "\u5361\u8F66|\u62D6\u8F66|\u642C\u8FD0|\u8D27\u8F66|articulated|car|drive|lorry", 4],
  ["\u{1F69C}", "tractor", "\u62D6\u62C9\u673A", "vehicle", 4],
  ["\u{1F3CE}\uFE0F", "racing car", "\u8D5B\u8F66", "\u6C7D\u8F66|\u75BE\u9A70|\u8DD1\u8F66|car|racing|zoom", 4],
  ["\u{1F3CD}\uFE0F", "motorcycle", "\u6469\u6258\u8F66", "\u6469\u6258|\u8D5B\u8F66|racing", 4],
  ["\u{1F6F5}", "motor scooter", "\u5C0F\u578B\u6469\u6258\u8F66", "\u6469\u6258\u8F66|\u8E0F\u677F\u8F66|motor|scooter", 4],
  ["\u{1F9BD}", "manual wheelchair", "\u624B\u52A8\u8F6E\u6905", "\u65E0\u969C\u788D|\u8F6E\u6905|accessibility|manual|wheelchair", 4],
  ["\u{1F9BC}", "motorized wheelchair", "\u7535\u52A8\u8F6E\u6905", "\u65E0\u969C\u788D|\u8F6E\u6905|accessibility|motorized|wheelchair", 4],
  ["\u{1F6FA}", "auto rickshaw", "\u4E09\u8F6E\u6469\u6258\u8F66", "\u4E09\u811A\u9E21|\u4E09\u8E66\u5B50|\u561F\u561F\u8F66|\u7535\u52A8\u4E09\u8F6E\u8F66|auto|rickshaw|tuk", 4],
  ["\u{1F6B2}", "bicycle", "\u81EA\u884C\u8F66", "\u5355\u8F66|\u811A\u8E0F\u8F66|\u81EA\u884C\u8F66\u9A91\u58EB|\u98DE\u9A70|bike|class|cycle|cycling", 4],
  ["\u{1F6F4}", "kick scooter", "\u6ED1\u677F\u8F66", "kick|scooter", 4],
  ["\u{1F6F9}", "skateboard", "\u6ED1\u677F", "\u677F|\u8E29\u6ED1\u677F|board|skate|skater|wheels", 4],
  ["\u{1F6FC}", "roller skate", "\u56DB\u8F6E\u6ED1\u51B0\u978B", "\u65F1\u51B0|\u6E9C\u51B0|\u6E9C\u51B0\u978B|\u6ED1\u51B0|blades|roller|skate|skates", 4],
  ["\u{1F68F}", "bus stop", "\u516C\u4EA4\u8F66\u7AD9", "\u516C\u4EA4\u7AD9|\u516C\u5171\u6C7D\u8F66\u7AD9|bus|busstop|stop", 4],
  ["\u{1F6E3}\uFE0F", "motorway", "\u9AD8\u901F\u516C\u8DEF", "\u516C\u8DEF|highway|road", 4],
  ["\u{1F6E4}\uFE0F", "railway track", "\u94C1\u8F68", "\u706B\u8F66|\u94C1\u8DEF|railway|track|train", 4],
  ["\u{1F6E2}\uFE0F", "oil drum", "\u77F3\u6CB9\u6876", "\u6876|\u6CB9\u6876|\u77F3\u6CB9|drum|oil", 4],
  ["\u26FD", "fuel pump", "\u6CB9\u6CF5", "\u52A0\u6CB9|\u52A0\u6CB9\u7AD9|\u67F4\u6CB9|\u71C3\u6599|diesel|fuel|fuelpump|gas", 4],
  ["\u{1F6DE}", "wheel", "\u8F66\u8F6E", "\u5706\u5708|\u6C7D\u8F66|\u8F66\u8F86|\u8F6C\u52A8|car|circle|tire|turn", 4],
  ["\u{1F6A8}", "police car light", "\u8B66\u8F66\u706F", "\u706F|\u7D27\u6025|\u8B66\u62A5|\u8B66\u706F|alarm|alert|beacon|car", 4],
  ["\u{1F6A5}", "horizontal traffic light", "\u6A2A\u5411\u7684\u7EA2\u7EFF\u706F", "\u4EA4\u901A\u706F|\u4FE1\u53F7\u706F|\u7EA2\u7EFF\u706F|horizontal|intersection|light|signal", 4],
  ["\u{1F6A6}", "vertical traffic light", "\u7EB5\u5411\u7684\u7EA2\u7EFF\u706F", "\u4EA4\u53C9\u53E3|\u4EA4\u901A\u706F|\u4FE1\u53F7\u706F|\u76F4\u7684\u7EA2\u7EFF\u706F|drove|intersection|light|signal", 4],
  ["\u{1F6D1}", "stop sign", "\u505C\u6B62\u6807\u5FD7", "\u505C\u6B62|\u516B\u89D2\u5F62|\u516B\u8FB9\u5F62|\u6807\u5FD7|octagonal|sign|stop", 4],
  ["\u{1F6A7}", "construction", "\u8DEF\u969C", "\u65BD\u5DE5|barrier", 4],
  ["\u{1F6D9}", "lighthouse", "lighthouse", "", 4],
  ["\u2693", "anchor", "\u951A", "\u505C\u6CCA|\u5DE5\u5177|\u8239|ship|tool", 4],
  ["\u{1F6DF}", "ring buoy", "\u6551\u751F\u5708", "\u5B89\u5168|\u6551\u63F4|\u6551\u751F|\u6551\u751F\u7528\u5177|buoy|float|life|lifesaver", 4],
  ["\u26F5", "sailboat", "\u5E06\u8239", "\u6E38\u8247|\u8239|\u9A7E\u5E06\u8239|boat|resort|sailing|sea", 4],
  ["\u{1F6F6}", "canoe", "\u72EC\u6728\u821F", "\u8239|boat", 4],
  ["\u{1F6A4}", "speedboat", "\u5FEB\u8247", "\u4EBF\u4E07\u5BCC\u7FC1|\u8239|\u8C6A\u534E\u6E38\u8247|billionaire|boat|lake|luxury", 4],
  ["\u{1F6F3}\uFE0F", "passenger ship", "\u5BA2\u8F6E", "\u5BA2\u8239|\u65C5\u5BA2|passenger|ship", 4],
  ["\u26F4\uFE0F", "ferry", "\u6E21\u8F6E", "\u65C5\u5BA2|\u6E21\u8239|\u8F6E\u8239|boat|passenger", 4],
  ["\u{1F6E5}\uFE0F", "motor boat", "\u6469\u6258\u8247", "\u8239|boat|motor|motorboat", 4],
  ["\u{1F6A2}", "ship", "\u8239", "\u65C5\u5BA2|\u65C5\u884C|boat|passenger|travel", 4],
  ["\u2708\uFE0F", "airplane", "\u98DE\u673A", "\u55B7\u6C14\u673A|\u65C5\u884C|\u98DE\u884C|aeroplane|fly|flying|jet", 4],
  ["\u{1F6E9}\uFE0F", "small airplane", "\u5C0F\u578B\u98DE\u673A", "\u5C0F\u98DE\u673A|\u98DE\u673A|aeroplane|airplane|plane|small", 4],
  ["\u{1F6EB}", "airplane departure", "\u822A\u73ED\u8D77\u98DE", "\u503C\u673A|\u51FA\u5883|\u62A5\u5230|\u767B\u673A|aeroplane|airplane|check-in|departure", 4],
  ["\u{1F6EC}", "airplane arrival", "\u822A\u73ED\u964D\u843D", "\u5230\u8FBE|\u7740\u9646|\u822A\u73ED|\u964D\u843D|aeroplane|airplane|arrival|arrivals", 4],
  ["\u{1FA82}", "parachute", "\u964D\u843D\u4F1E", "\u5E06\u4F1E|\u60AC\u6302\u6ED1\u7FD4|\u6ED1\u7FD4|\u6ED1\u7FD4\u4F1E|hang-glide|parasail|skydive", 4],
  ["\u{1F4BA}", "seat", "\u5EA7\u4F4D", "\u4F4D\u5B50|\u6905\u5B50|chair", 4],
  ["\u{1F681}", "helicopter", "\u76F4\u5347\u673A", "\u65C5\u884C|\u76F4\u5347\u98DE\u673A|copter|roflcopter|travel|vehicle", 4],
  ["\u{1F69F}", "suspension railway", "\u7A7A\u8F68", "\u60AC\u6302|\u60AC\u6302\u5F0F\u5355\u8F68|\u7A7A\u4E2D\u8F68\u9053\u5217\u8F66|railway|suspension", 4],
  ["\u{1F6A0}", "mountain cableway", "\u7F06\u8F66", "\u7A7A\u4E2D|\u7D22\u9053|cable|cableway|gondola|lift", 4],
  ["\u{1F6A1}", "aerial tramway", "\u7D22\u9053", "\u7A7A\u4E2D|\u7F06\u8F66|aerial|cable|car|gondola", 4],
  ["\u{1F6F0}\uFE0F", "satellite", "\u536B\u661F", "\u592A\u7A7A|space", 4],
  ["\u{1F680}", "rocket", "\u706B\u7BAD", "\u53D1\u5C04|\u592A\u7A7A|\u65C5\u884C|launch|rockets|space|travel", 4],
  ["\u{1F6F8}", "flying saucer", "\u98DE\u789F", "ufo|\u4E0D\u660E\u98DE\u884C\u7269|\u5916\u661F\u4EBA|\u5916\u661F\u7403|aliens|extra|flying|saucer", 4],
  ["\u{1F6CE}\uFE0F", "bellhop bell", "\u670D\u52A1\u94C3", "\u884C\u674E\u5458|\u9152\u5E97|\u94C3|bell|bellhop|hotel", 4],
  ["\u{1F9F3}", "luggage", "\u884C\u674E\u7BB1", "\u5305\u88C5|\u624B\u63D0\u7BB1|\u65C5\u884C|\u6EDA\u8F6E\u63D0\u7BB1|bag|packing|roller|suitcase", 4],
  ["\u231B", "hourglass done", "\u6C99\u6F0F", "\u65F6\u95F4|\u8BA1\u65F6|\u8BA1\u65F6\u5668|done|hourglass|sand|time", 4],
  ["\u23F3", "hourglass not done", "\u6C99\u6B63\u5F80\u4E0B\u6D41\u7684\u6C99\u6F0F", "\u6C99|\u6C99\u6F0F|\u7B49\u5F85|\u8BA1\u65F6\u5668|done|flowing|hourglass|hours", 4],
  ["\u231A", "watch", "\u624B\u8868", "\u65F6\u95F4|\u8868|clock|time", 4],
  ["\u23F0", "alarm clock", "\u95F9\u949F", "\u5C0F\u65F6|\u65F6\u95F4|\u949F|alarm|clock|hours|hrs", 4],
  ["\u23F1\uFE0F", "stopwatch", "\u79D2\u8868", "\u7801\u8868|\u8BA1\u65F6|\u8BA1\u65F6\u5668|clock|time", 4],
  ["\u23F2\uFE0F", "timer clock", "\u5B9A\u65F6\u5668", "\u65F6\u95F4|\u8BA1\u65F6|\u8BA1\u65F6\u5668|clock|timer", 4],
  ["\u{1F570}\uFE0F", "mantelpiece clock", "\u5EA7\u949F", "\u53F0\u949F|\u58C1\u7089\u949F|\u65F6\u949F|clock|mantelpiece|time", 4],
  ["\u{1F55B}", "twelve o\u2019clock", "\u5341\u4E8C\u70B9", "00|12|12:00|\u6574\u70B9|12|12:00|clock|o\u2019clock", 4],
  ["\u{1F567}", "twelve-thirty", "\u5341\u4E8C\u70B9\u534A", "12|12:30|30|\u65F6\u949F|12|12:30|30|clock", 4],
  ["\u{1F550}", "one o\u2019clock", "\u4E00\u70B9", "00|1|1:00|\u65F6\u95F4|1|1:00|clock|o\u2019clock", 4],
  ["\u{1F55C}", "one-thirty", "\u4E00\u70B9\u534A", "1|1:30|30|\u65F6\u95F4|1|1:30|30|clock", 4],
  ["\u{1F551}", "two o\u2019clock", "\u4E24\u70B9", "00|2|2:00|\u65F6\u949F|2|2:00|clock|o\u2019clock", 4],
  ["\u{1F55D}", "two-thirty", "\u4E24\u70B9\u534A", "2|2:30|30|\u65F6\u95F4|2|2:30|30|clock", 4],
  ["\u{1F552}", "three o\u2019clock", "\u4E09\u70B9", "00|3|3:00|\u65F6\u949F|3|3:00|clock|o\u2019clock", 4],
  ["\u{1F55E}", "three-thirty", "\u4E09\u70B9\u534A", "3|3:30|30|\u65F6\u95F4|3|3:30|30|clock", 4],
  ["\u{1F553}", "four o\u2019clock", "\u56DB\u70B9", "00|4|4:00|\u65F6\u949F|4|4:00|clock|four", 4],
  ["\u{1F55F}", "four-thirty", "\u56DB\u70B9\u534A", "30|4|4:30|\u65F6\u95F4|30|4|4:30|clock", 4],
  ["\u{1F554}", "five o\u2019clock", "\u4E94\u70B9", "00|5|5:00|\u65F6\u949F|5|5:00|clock|five", 4],
  ["\u{1F560}", "five-thirty", "\u4E94\u70B9\u534A", "30|5|5:30|\u65F6\u949F|30|5|5:30|clock", 4],
  ["\u{1F555}", "six o\u2019clock", "\u516D\u70B9", "00|6|6:00|\u65F6\u949F|6|6:00|clock|o\u2019clock", 4],
  ["\u{1F561}", "six-thirty", "\u516D\u70B9\u534A", "30|6|6:30|\u65F6\u949F|30|6|6:30|clock", 4],
  ["\u{1F556}", "seven o\u2019clock", "\u4E03\u70B9", "00|7|7:00|\u65F6\u949F|0|7|7:00|clock", 4],
  ["\u{1F562}", "seven-thirty", "\u4E03\u70B9\u534A", "30|7|7:30|\u65F6\u949F|30|7|7:30|clock", 4],
  ["\u{1F557}", "eight o\u2019clock", "\u516B\u70B9", "00|8|8:00|\u65F6\u95F4|8|8:00|clock|eight", 4],
  ["\u{1F563}", "eight-thirty", "\u516B\u70B9\u534A", "30|8|8:30|\u65F6\u949F|30|8|8:30|clock", 4],
  ["\u{1F558}", "nine o\u2019clock", "\u4E5D\u70B9", "00|9|9:00|\u65F6\u949F|9|9:00|clock|nine", 4],
  ["\u{1F564}", "nine-thirty", "\u4E5D\u70B9\u534A", "30|9|9:30|\u65F6\u949F|30|9|9:30|clock", 4],
  ["\u{1F559}", "ten o\u2019clock", "\u5341\u70B9", "00|10|10:00|\u65F6\u949F|0|10|10:00|clock", 4],
  ["\u{1F565}", "ten-thirty", "\u5341\u70B9\u534A", "10|10:30|30|\u65F6\u949F|10|10:30|30|clock", 4],
  ["\u{1F55A}", "eleven o\u2019clock", "\u5341\u4E00\u70B9", "00|11|11:00|\u65F6\u949F|11|11:00|clock|eleven", 4],
  ["\u{1F566}", "eleven-thirty", "\u5341\u4E00\u70B9\u534A", "11|11:30|30|\u65F6\u949F|11|11:30|30|clock", 4],
  ["\u{1F311}", "new moon", "\u6714\u6708", "\u65B0\u6708|\u6708\u4EAE|dark|moon|new|space", 4],
  ["\u{1F312}", "waxing crescent moon", "\u86FE\u7709\u6708", "\u4E09\u65E5\u6708|\u5A25\u7709\u6708|\u5F2F\u6708|\u6708\u4EAE|crescent|dreams|moon|space", 4],
  ["\u{1F313}", "first quarter moon", "\u4E0A\u5F26\u6708", "\u6708\u4EAE|first|moon|quarter|space", 4],
  ["\u{1F314}", "waxing gibbous moon", "\u76C8\u51F8\u6708", "\u6708\u4EAE|gibbous|moon|space|waxing", 4],
  ["\u{1F315}", "full moon", "\u6EE1\u6708", "\u6708\u4EAE|\u671B\u6708|full|moon|space", 4],
  ["\u{1F316}", "waning gibbous moon", "\u4E8F\u51F8\u6708", "\u6708\u4EAE|\u8870\u843D|gibbous|moon|space|waning", 4],
  ["\u{1F317}", "last quarter moon", "\u4E0B\u5F26\u6708", "\u6708\u4EAE|last|moon|quarter|space", 4],
  ["\u{1F318}", "waning crescent moon", "\u6B8B\u6708", "\u4E8F\u7709\u6708|\u5F2F\u6708|\u6708\u4EAE|crescent|moon|space|waning", 4],
  ["\u{1F319}", "crescent moon", "\u5F2F\u6708", "\u5A25\u7709\u6708|\u65B0\u6708\u5F62|\u6708\u4EAE|\u6B8B\u6708|crescent|moon|ramadan|space", 4],
  ["\u{1F31A}", "new moon face", "\u5FAE\u7B11\u7684\u6714\u6708", "\u65B0\u6708|\u6708\u4EAE|\u6714\u6708|face|moon|new|space", 4],
  ["\u{1F31B}", "first quarter moon face", "\u5FAE\u7B11\u7684\u4E0A\u5F26\u6708", "\u4E0A\u5F26\u6708|\u6708\u4EAE|\u86FE\u7709\u6708|face|first|moon|quarter", 4],
  ["\u{1F31C}", "last quarter moon face", "\u5FAE\u7B11\u7684\u4E0B\u5F26\u6708", "\u4E0B\u5F26\u6708|\u6708\u4EAE|\u6B8B\u6708|dreams|face|last|moon", 4],
  ["\u{1F321}\uFE0F", "thermometer", "\u6E29\u5EA6\u8BA1", "\u5929\u6C14|\u6C14\u6E29|\u6E29\u5EA6|weather", 4],
  ["\u2600\uFE0F", "sun", "\u592A\u9633", "\u5149\u7EBF|\u6674|\u6674\u5929|\u9633\u5149\u660E\u5A9A|bright|rays|space|sunny", 4],
  ["\u{1F31D}", "full moon face", "\u5FAE\u7B11\u7684\u6708\u4EAE", "\u6708\u4EAE|\u671B\u6708|\u6EE1\u6708|bright|face|full|moon", 4],
  ["\u{1F31E}", "sun with face", "\u5FAE\u7B11\u7684\u592A\u9633", "\u592A\u9633|\u6E29\u6696\u9633\u5149|\u9633\u5149\u660E\u5A9A|beach|bright|day|face", 4],
  ["\u{1FA90}", "ringed planet", "\u6709\u73AF\u884C\u661F", "\u571F\u661F|\u884C\u661F|planet|ringed|saturn|saturnine", 4],
  ["\u2B50", "star", "\u661F\u661F", "\u4E94\u89D2\u661F|\u767D\u8272\u661F\u661F|astronomy|medium|stars|white", 4],
  ["\u{1F31F}", "glowing star", "\u95EA\u4EAE\u7684\u661F\u661F", "\u53D1\u5149|\u661F\u661F|\u95EA\u4EAE|\u95EA\u5149|glittery|glow|glowing|night", 4],
  ["\u{1F320}", "shooting star", "\u6D41\u661F", "\u591C\u665A|\u592A\u7A7A|\u661F\u7A7A|\u9668\u843D\u4E4B\u661F|falling|night|shooting|space", 4],
  ["\u{1F30C}", "milky way", "\u94F6\u6CB3", "\u592A\u7A7A|\u661F\u7A7A|milky|space|way", 4],
  ["\u2601\uFE0F", "cloud", "\u4E91", "\u4E91\u5F69|\u4E91\u6735|\u5929\u6C14|\u9634|weather", 4],
  ["\u26C5", "sun behind cloud", "\u9634", "\u4E4C\u4E91\u853D\u65E5|\u591A\u4E91|behind|cloud|cloudy|sun", 4],
  ["\u26C8\uFE0F", "cloud with lightning and rain", "\u96F7\u9635\u96E8", "\u66B4\u98CE\u96E8|\u9635\u96E8|\u96E8|\u96F7|cloud|lightning|rain|thunder", 4],
  ["\u{1F324}\uFE0F", "sun behind small cloud", "\u6674\u5076\u6709\u4E91", "\u4E91|\u5929\u6C14|\u592A\u9633|\u5C11\u4E91|behind|cloud|sun|weather", 4],
  ["\u{1F325}\uFE0F", "sun behind large cloud", "\u591A\u4E91", "\u4E91|\u592A\u9633|\u6CE0|\u9634|behind|cloud|sun|weather", 4],
  ["\u{1F326}\uFE0F", "sun behind rain cloud", "\u6674\u8F6C\u96E8", "\u4E0B\u96E8|\u4E91|\u5929\u6C14|\u592A\u9633|behind|cloud|rain|sun", 4],
  ["\u{1F327}\uFE0F", "cloud with rain", "\u4E0B\u96E8", "\u4E91|\u5929\u6C14|\u96E8|cloud|rain|weather", 4],
  ["\u{1F328}\uFE0F", "cloud with snow", "\u4E0B\u96EA", "\u4E91|\u5929\u6C14|\u96EA|cloud|cold|snow|weather", 4],
  ["\u{1F329}\uFE0F", "cloud with lightning", "\u6253\u96F7", "\u4E91|\u5929\u6C14|\u95EA\u7535|\u96F7|cloud|lightning|weather", 4],
  ["\u{1F32A}\uFE0F", "tornado", "\u9F99\u5377\u98CE", "\u4E91|\u5929\u6C14|\u65CB\u98CE|cloud|weather|whirlwind", 4],
  ["\u{1F32B}\uFE0F", "fog", "\u96FE", "\u4E91|\u973E|cloud|weather", 4],
  ["\u{1F32C}\uFE0F", "wind face", "\u5927\u98CE", "\u72C2\u98CE|\u98CE\u5439|blow|cloud|face|wind", 4],
  ["\u{1F300}", "cyclone", "\u53F0\u98CE", "\u5929\u6C14|\u65CB\u98CE|\u6655|\u6C14\u65CB|dizzy|hurricane|twister|typhoon", 4],
  ["\u{1F308}", "rainbow", "\u5F69\u8679", "lgbt|\u53CC\u6027\u604B|\u540C\u5FD7|\u8DE8\u6027\u522B|gay|genderqueer|glbt|glbtq", 4],
  ["\u{1F302}", "closed umbrella", "\u6536\u8D77\u7684\u4F1E", "\u4E0B\u96E8|\u4F1E|\u96E8|\u96E8\u4F1E|closed|clothing|rain|umbrella", 4],
  ["\u2602\uFE0F", "umbrella", "\u4F1E", "\u96E8|\u96E8\u4F1E|clothing|rain", 4],
  ["\u2614", "umbrella with rain drops", "\u96E8\u4F1E", "\u4E0B\u96E8|\u4F1E|\u96E8\u6EF4|clothing|drop|drops|rain", 4],
  ["\u26F1\uFE0F", "umbrella on ground", "\u9633\u4F1E", "\u4E0B\u96E8|\u4F1E|\u5730\u4E0A\u7684\u9633\u4F1E|\u592A\u9633|ground|rain|sun|umbrella", 4],
  ["\u26A1", "high voltage", "\u9AD8\u538B", "\u5371\u9669|\u6709\u7535|\u95EA\u7535|danger|electric|electricity|high", 4],
  ["\u2744\uFE0F", "snowflake", "\u96EA\u82B1", "\u51B7|\u5929\u6C14|\u96EA|cold|snow|weather", 4],
  ["\u2603\uFE0F", "snowman", "\u96EA\u4E0E\u96EA\u4EBA", "\u6CE0|\u96EA|\u96EA\u4EBA|cold|man|snow", 4],
  ["\u26C4", "snowman without snow", "\u96EA\u4EBA", "\u4E0B\u96EA|\u6CE0|cold|man|snow|snowman", 4],
  ["\u2604\uFE0F", "comet", "\u5F57\u661F", "\u592A\u7A7A|space", 4],
  ["\u{1FA8B}", "meteor", "meteor", "", 4],
  ["\u{1F525}", "fire", "\u706B\u7130", "\u706B|\u70E7|\u71C3\u70E7|af|burn|flame|hot", 4],
  ["\u{1F4A7}", "droplet", "\u6C34\u6EF4", "\u51B7|\u5929\u6C14|\u6C34|\u6CEA|cold|comic|drop|nature", 4],
  ["\u{1F30A}", "water wave", "\u6D6A\u82B1", "\u6CE2\u6D6A|\u6D6A|\u6D77\u6D0B|nature|ocean|surf|surfer", 4],
  ["\u{1F383}", "jack-o-lantern", "\u5357\u74DC\u706F", "\u4E07\u5723\u8282|\u5357\u74DC|\u5E86\u795D|\u706F|celebration|halloween|jack|lantern", 5],
  ["\u{1F384}", "Christmas tree", "\u5723\u8BDE\u6811", "\u5723\u8BDE|\u5E86\u795D|\u6811|\u88C5\u9970|celebration|christmas|tree", 5],
  ["\u{1F386}", "fireworks", "\u7130\u706B", "\u5E86\u5178|\u5E86\u795D|\u70AE\u7AF9|\u70DF\u82B1|boom|celebration|entertainment|yolo", 5],
  ["\u{1F387}", "sparkler", "\u70DF\u82B1", "\u5E86\u795D|\u706B\u82B1|\u70DF\u706B|\u7130\u706B|boom|celebration|fireworks|sparkle", 5],
  ["\u{1F9E8}", "firecracker", "\u7206\u7AF9", "\u5149\u4EAE|\u706B\u82B1|\u70B8\u836F|\u70DF\u706B|dynamite|explosive|fire|fireworks", 5],
  ["\u2728", "sparkles", "\u95EA\u4EAE", "\u661F\u661F|\u706B\u82B1|\u95EA\u5149|\u95EA\u8000|*|magic|sparkle|star", 5],
  ["\u{1F388}", "balloon", "\u6C14\u7403", "\u5E86\u795D|\u751F\u65E5|\u8282\u65E5|birthday|celebrate|celebration", 5],
  ["\u{1F389}", "party popper", "\u62C9\u70AE\u5F69\u5E26", "\u5174\u594B|\u5471\u5471\u53EB|\u5E86\u795D|\u5F69\u5E26|awesome|birthday|celebrate|celebration", 5],
  ["\u{1F38A}", "confetti ball", "\u4E94\u5F69\u7EB8\u5C51\u7403", "\u4E94\u5F69\u7EB8\u5C51|\u5E86\u795D|\u5F69\u8272\u7EB8\u5C51|\u7403|ball|celebrate|celebration|confetti", 5],
  ["\u{1F38B}", "tanabata tree", "\u4E03\u5915\u6811", "\u4E03\u5915|\u5E86\u795D|\u65E5\u672C|\u6761\u5E45|banner|celebration|japanese|tanabata", 5],
  ["\u{1F38D}", "pine decoration", "\u95E8\u677E", "\u5E86\u795D|\u65E5\u672C|\u677E\u6811|\u76C6\u683D|bamboo|celebration|decoration|japanese", 5],
  ["\u{1F38E}", "Japanese dolls", "\u65E5\u672C\u4EBA\u5F62", "\u4EBA\u5076|\u5A03\u5A03|\u5E86\u795D|\u65E5\u672C|celebration|doll|dolls|festival", 5],
  ["\u{1F38F}", "carp streamer", "\u9CA4\u9C7C\u65D7", "\u5E86\u795D|\u65E5\u672C|\u7537\u5B69\u8282|\u957F\u65D7|carp|celebration|streamer", 5],
  ["\u{1F390}", "wind chime", "\u98CE\u94C3", "\u5E86\u795D|\u94C3\u94DB|\u98CE|bell|celebration|chime|wind", 5],
  ["\u{1F391}", "moon viewing ceremony", "\u8D4F\u6708", "\u4E2D\u79CB|\u4F73\u8282|\u5E86\u795D|\u6708\u4EAE|celebration|ceremony|moon|viewing", 5],
  ["\u{1F9E7}", "red envelope", "\u7EA2\u5305", "\u5229\u4E8B|\u5229\u662F|\u597D\u8FD0|\u793C\u7269|envelope|gift|good|h\xF3ngb\u0101o", 5],
  ["\u{1F380}", "ribbon", "\u8774\u8776\u7ED3", "\u4E1D\u5E26|\u5E86\u795D|\u7F0E\u5E26|celebration", 5],
  ["\u{1F381}", "wrapped gift", "\u793C\u7269", "\u5305\u793C\u7269|\u5305\u88C5|\u5723\u8BDE|\u5E86\u795D|birthday|bow|box|celebration", 5],
  ["\u{1F397}\uFE0F", "reminder ribbon", "\u63D0\u793A\u4E1D\u5E26", "\u4E1D\u5E26|\u5E86\u5178|\u5E86\u795D|\u6697\u793A|celebration|reminder|ribbon", 5],
  ["\u{1F39F}\uFE0F", "admission tickets", "\u5165\u573A\u5238", "\u7968|\u95E8\u7968|admission|ticket|tickets", 5],
  ["\u{1F3AB}", "ticket", "\u7968", "\u5165\u573A\u5238|\u7535\u5F71\u7968|\u7968\u6839|\u8F66\u7968|admission|stub", 5],
  ["\u{1F396}\uFE0F", "military medal", "\u519B\u529F\u7AE0", "\u519B\u961F|\u52CB\u7AE0|\u5956\u7AE0|award|celebration|medal|military", 5],
  ["\u{1F3C6}", "trophy", "\u5956\u676F", "\u51A0\u519B|\u5956\u52B1|\u5956\u54C1|\u5956\u8D4F|champion|champs|prize|slay", 5],
  ["\u{1F3C5}", "sports medal", "\u5956\u724C", "\u83B7\u80DC|\u8FD0\u52A8\u4F1A\u5956\u724C|\u8FD0\u52A8\u5458|\u91D1\u724C|award|gold|medal|sports", 5],
  ["\u{1F947}", "1st place medal", "\u91D1\u724C", "\u5956\u724C|\u7B2C\u4E00|\u7B2C\u4E00\u540D\u5956\u724C|1st|first|gold|medal", 5],
  ["\u{1F948}", "2nd place medal", "\u94F6\u724C", "\u4E9A\u519B|\u5956\u724C|\u7B2C\u4E8C|\u7B2C\u4E8C\u540D\u5956\u724C|2nd|medal|place|second", 5],
  ["\u{1F949}", "3rd place medal", "\u94DC\u724C", "\u5956\u724C|\u5B63\u519B|\u7B2C\u4E09|\u7B2C\u4E09\u540D\u5956\u724C|3rd|bronze|medal|place", 5],
  ["\u26BD", "soccer ball", "\u8DB3\u7403", "\u5927\u7F57|\u6885\u897F|\u7403|\u7403\u8D5B|ball|football|futbol|soccer", 5],
  ["\u26BE", "baseball", "\u68D2\u7403", "\u7403|\u8FD0\u52A8|ball|sport", 5],
  ["\u{1F94E}", "softball", "\u5792\u7403", "\u624B\u5957|\u7403|\u814B\u4E0B|\u8FD0\u52A8|ball|glove|sports|underarm", 5],
  ["\u{1F3C0}", "basketball", "\u7BEE\u7403", "\u6253\u7403|\u7403|\u7BEE\u7B50|\u8FD0\u52A8|ball|hoop|sport", 5],
  ["\u{1F3D0}", "volleyball", "\u6392\u7403", "\u7403|\u7403\u8D5B|ball|game", 5],
  ["\u{1F3C8}", "american football", "\u7F8E\u5F0F\u6A44\u6984\u7403", "\u6A44\u6984\u7403|\u7403|american|ball|bowl|football", 5],
  ["\u{1F3C9}", "rugby football", "\u82F1\u5F0F\u6A44\u6984\u7403", "\u6A44\u6984\u7403|\u7403|\u8FD0\u52A8|ball|football|rugby|sport", 5],
  ["\u{1F3BE}", "tennis", "\u7F51\u7403", "\u7403|\u7403\u62CD|\u7F51\u7403\u62CD|ball|racquet|sport", 5],
  ["\u{1F94F}", "flying disc", "\u98DE\u76D8", "\u5706\u76D8|\u6781\u9650|\u6781\u9650\u8FD0\u52A8|\u7EC8\u6781|disc|flying|ultimate", 5],
  ["\u{1F3B3}", "bowling", "\u4FDD\u9F84\u7403", "\u5168\u5012|\u7403|\u8FD0\u52A8|ball|game|sport|strike", 5],
  ["\u{1F3CF}", "cricket game", "\u677F\u7403", "\u7403|\u7403\u62CD|ball|bat|cricket|game", 5],
  ["\u{1F3D1}", "field hockey", "\u66F2\u68CD\u7403", "\u7403|\u7403\u68CD|\u7403\u8D5B|ball|field|game|hockey", 5],
  ["\u{1F3D2}", "ice hockey", "\u51B0\u7403", "\u51B0\u7403\u6746|\u7403|\u7403\u68CD|game|hockey|ice|puck", 5],
  ["\u{1F94D}", "lacrosse", "\u888B\u68CD\u7403", "\u5F97\u5206|\u7403|\u7403\u68CD|\u7403\u95E8|ball|goal|sports|stick", 5],
  ["\u{1F3D3}", "ping pong", "\u4E52\u4E53\u7403", "\u4E52\u4E53|\u684C\u7403|\u6BD4\u8D5B|\u7403|ball|bat|game|paddle", 5],
  ["\u{1F3F8}", "badminton", "\u7FBD\u6BDB\u7403", "\u7403\u62CD|\u7FBD\u7403|birdie|game|racquet|shuttlecock", 5],
  ["\u{1F94A}", "boxing glove", "\u62F3\u51FB\u624B\u5957", "\u624B\u5957|\u62F3\u51FB|boxing|glove", 5],
  ["\u{1F94B}", "martial arts uniform", "\u7EC3\u6B66\u670D", "\u5236\u670D|\u67D4\u9053|\u6B66\u672F|\u7A7A\u624B\u9053|arts|judo|karate|martial", 5],
  ["\u{1F945}", "goal net", "\u7403\u95E8", "\u7403\u7F51|goal|net", 5],
  ["\u26F3", "flag in hole", "\u9AD8\u5C14\u592B\u7403\u6D1E", "\u679C\u5CAD|\u679C\u5CAD\u65D7|\u7403\u6D1E|\u9AD8\u5C14\u592B|flag|golf|hole|sport", 5],
  ["\u26F8\uFE0F", "ice skate", "\u6ED1\u51B0", "\u51B0\u5200|\u6E9C\u51B0|ice|skate|skating", 5],
  ["\u{1F3A3}", "fishing pole", "\u9493\u9C7C\u7AFF", "\u9493\u7AFF|\u9C7C\u6746|entertainment|fish|fishing|pole", 5],
  ["\u{1F93F}", "diving mask", "\u6F5C\u6C34\u9762\u7F69", "\u6D6E\u6F5C|\u6DF1\u6F5C|\u6F5C\u6C34|diving|mask|scuba|snorkeling", 5],
  ["\u{1F3BD}", "running shirt", "\u8FD0\u52A8\u80CC\u5FC3", "\u4E0A\u8863|\u8DD1\u6B65|\u8FD0\u52A8\u670D|\u9970\u5E26|athletics|running|sash|shirt", 5],
  ["\u{1F3BF}", "skis", "\u6ED1\u96EA", "\u8FD0\u52A8|\u96EA|ski|snow|sport", 5],
  ["\u{1F6F7}", "sled", "\u96EA\u6A47", "\u4E0B\u96EA|\u4E58\u96EA\u6A47|\u5E73\u5E95\u96EA\u6A47|\u9A7E\u96EA\u6A47|luge|sledge|sleigh|snow", 5],
  ["\u{1F94C}", "curling stone", "\u51B0\u58F6", "\u51B0\u4E0A\u6E9C\u77F3|\u6BD4\u8D5B|\u6E38\u620F|\u77F3\u58F6|curling|game|rock|stone", 5],
  ["\u{1F3AF}", "bullseye", "\u6B63\u4E2D\u9776\u5FC3\u7684\u98DE\u9556", "\u547D\u4E2D|\u6807\u7684|\u76F4\u63A5\u547D\u4E2D|\u8981\u5BB3|bull|dart|direct|entertainment", 5],
  ["\u{1FA80}", "yo-yo", "\u60A0\u60A0\u7403", "\u4E0A\u4E0B\u8D77\u843D|\u6E9C\u6E9C\u7403|\u72B9\u8C6B\u4E0D\u51B3|\u73A9\u5177|fluctuate|toy", 5],
  ["\u{1FA81}", "kite", "\u98CE\u7B5D", "\u7FF1\u7FD4|\u98DE\u7FD4|fly|soar", 5],
  ["\u{1F52B}", "water pistol", "\u6C34\u67AA", "\u5DE5\u5177|\u5DE6\u8F6E|\u624B\u67AA|\u67AA|gun|handgun|pistol|revolver", 5],
  ["\u{1F3B1}", "pool 8 ball", "\u53F0\u7403", "8 \u7403\u5236\u684C\u7403|8\u53F7\u7403|\u53F0\u7403\u53F0|\u6E38\u620F|8|8ball|ball|billiard", 5],
  ["\u{1F52E}", "crystal ball", "\u6C34\u6676\u7403", "\u547D\u8FD0|\u5DE5\u5177|\u68A6\u5E7B|\u6C34\u6676|ball|crystal|fairy|fairytale", 5],
  ["\u{1FA84}", "magic wand", "\u9B54\u68D2", "\u5973\u5DEB|\u5DEB\u5E08|\u9B54\u672F|\u9B54\u672F\u5E08|magic|magician|wand|witch", 5],
  ["\u{1F3AE}", "video game", "\u6E38\u620F\u624B\u67C4", "\u624B\u67C4|\u6E38\u620F|\u6E38\u620F\u63A7\u5236\u5668|\u7535\u5B50\u6E38\u620F|controller|entertainment|game|video", 5],
  ["\u{1F579}\uFE0F", "joystick", "\u6E38\u620F\u64CD\u63A7\u6746", "\u64CD\u63A7\u6746|\u6E38\u620F|\u7535\u5B50\u6E38\u620F|game|video|videogame", 5],
  ["\u{1F3B0}", "slot machine", "\u8001\u864E\u673A", "\u5403\u89D2\u5B50\u8001\u864E|\u6E38\u620F|\u89D2\u5B50\u673A|\u8D4C\u535A|casino|gamble|gambling|game", 5],
  ["\u{1F3B2}", "game die", "\u9AB0\u5B50", "\u63B7\u9AB0\u5B50|\u8272\u5B50|\u9AB0\u5B50\u6E38\u620F|dice|die|entertainment|game", 5],
  ["\u{1F9E9}", "puzzle piece", "\u62FC\u56FE", "\u56FE\u7247|\u667A\u529B\u6E38\u620F|\u76F8\u6263|\u7EBF\u7D22|clue|interlocking|jigsaw|piece", 5],
  ["\u{1F9F8}", "teddy bear", "\u6CF0\u8FEA\u718A", "\u586B\u5145|\u6BDB\u7ED2\u73A9\u5177|\u718A|\u73A9\u5076|bear|plaything|plush|stuffed", 5],
  ["\u{1FA85}", "pi\xF1ata", "\u5F69\u7F50", "\u4E94\u6708\u8282|\u5E86\u795D|\u76AE\u7EB3\u5854|\u7CD6\u679C|candy|celebrate|celebration|cinco", 5],
  ["\u{1FAA9}", "mirror ball", "\u955C\u7403", "\u6D3E\u5BF9|\u805A\u4F1A|\u821E\u4F1A|\u821E\u5385|ball|dance|disco|glitter", 5],
  ["\u{1FA86}", "nesting dolls", "\u5957\u5A03", "\u4FC4\u7F57\u65AF\u5957\u5A03|\u4FC4\u7F57\u65AF\u5A03\u5A03|\u5A03\u5A03|babooshka|baboushka|babushka|doll", 5],
  ["\u2660\uFE0F", "spade suit", "\u9ED1\u6843", "\u6251\u514B|\u724C|\u8475\u6247|\u9ED1\u6843\u82B1\u8272|card|game|spade|suit", 5],
  ["\u2665\uFE0F", "heart suit", "\u7EA2\u6843", "\u6251\u514B|\u724C|\u7EA2\u5FC3|\u7EA2\u6843\u82B1\u8272|card|emotion|game|heart", 5],
  ["\u2666\uFE0F", "diamond suit", "\u65B9\u7247", "\u6251\u514B|\u65B9\u5757|\u724C|\u724C\u5C40|card|diamond|game|suit", 5],
  ["\u2663\uFE0F", "club suit", "\u6885\u82B1", "\u6251\u514B|\u6885\u82B1\u82B1\u8272|\u724C|\u8349\u82B1|card|club|clubs|game", 5],
  ["\u265F\uFE0F", "chess pawn", "\u5175", "\u53D7\u9A97\u8005|\u56FD\u9645\u8C61\u68CB|\u727A\u7272\u54C1|chess|dupe|expendable|pawn", 5],
  ["\u{1F0CF}", "joker", "\u5927\u5C0F\u738B", "\u5927\u738B|\u5C0F\u4E11|\u5C0F\u738B|\u6251\u514B|card|game|wildcard", 5],
  ["\u{1F004}", "mahjong red dragon", "\u7EA2\u4E2D", "\u65B9\u57CE\u4E4B\u6218|\u724C\u5C40|\u9EBB\u5C06|\u9EBB\u5C06\u7EA2\u4E2D|dragon|game|mahjong|red", 5],
  ["\u{1F3B4}", "flower playing cards", "\u82B1\u672D", "\u5361\u724C|\u65E5\u672C|\u6E38\u620F|\u82B1\u6597|card|cards|flower|game", 5],
  ["\u{1F3AD}", "performing arts", "\u8868\u6F14\u827A\u672F", "\u5267\u9662|\u5973\u6F14\u5458|\u620F\u5267|\u6F14\u5458|actor|actress|art|arts", 5],
  ["\u{1F5BC}\uFE0F", "framed picture", "\u5E26\u6846\u7684\u753B", "\u52A0\u6846\u7684\u7167\u7247|\u535A\u7269\u9986|\u6846|\u7167\u7247|art|frame|framed|museum", 5],
  ["\u{1F3A8}", "artist palette", "\u8C03\u8272\u76D8", "\u521B\u610F|\u535A\u7269\u9986|\u591A\u79CD\u8272\u5F69|\u5A31\u4E50|art|artist|artsy|arty", 5],
  ["\u{1F9F5}", "thread", "\u7EBF", "\u5377\u76D8|\u7EBF\u8F74|\u7EF3\u5B50|\u7F1D\u7EAB|needle|sewing|spool|string", 5],
  ["\u{1FAA1}", "sewing needle", "\u7F1D\u5408\u9488", "\u7EBF|\u7EE3\u82B1\u9488|\u7F1D\u5408|\u7F1D\u7EAB|embroidery|needle|sew|sewing", 5],
  ["\u{1F9F6}", "yarn", "\u6BDB\u7EBF", "\u6BDB\u7EBF\u7403|\u7EBF\u7403|\u7F16\u7EC7|\u94A9\u9488\u7F16\u7EC7|ball|crochet|knit", 5],
  ["\u{1FAA2}", "knot", "\u7ED3", "\u516B\u5B57\u7ED3|\u6253\u7ED3|\u7EF3\u5B50|\u7EF3\u6263|cord|rope|tangled|tie", 5],
  ["\u{1F453}", "glasses", "\u773C\u955C", "\u670D\u9970|\u773C\u775B|clothing|eye|eyeglasses|eyewear", 6],
  ["\u{1F576}\uFE0F", "sunglasses", "\u58A8\u955C", "\u592A\u9633\u955C|dark|eye|eyewear|glasses", 6],
  ["\u{1F97D}", "goggles", "\u62A4\u76EE\u955C", "\u62A4\u76EE|\u62A4\u773C|\u6C34\u80BA|\u6E38\u6CF3|dive|eye|protection|scuba", 6],
  ["\u{1F97C}", "lab coat", "\u767D\u5927\u8902", "\u533B\u751F|\u5916\u8863|\u5B9E\u9A8C|\u5B9E\u9A8C\u4EBA\u5458|clothes|coat|doctor|dr", 6],
  ["\u{1F9BA}", "safety vest", "\u6551\u751F\u8863", "\u5B89\u5168|\u7D27\u6025|\u80CC\u5FC3|\u9003\u751F|emergency|safety|vest", 6],
  ["\u{1F454}", "necktie", "\u9886\u5E26", "\u5DE5\u4F5C|\u6B63\u5F0F|\u886C\u886B\u9886\u5E26|clothing|employed|serious|shirt", 6],
  ["\u{1F455}", "t-shirt", "T\u6064", "\u4F11\u95F2\u670D\u88C5|\u6064\u886B|blue|casual|clothes|clothing", 6],
  ["\u{1F456}", "jeans", "\u725B\u4ED4\u88E4", "\u4F11\u95F2|\u5468\u672B|\u84DD\u8272|\u88E4\u5B50|blue|casual|clothes|clothing", 6],
  ["\u{1F9E3}", "scarf", "\u56F4\u5DFE", "\u51B7|\u5305\u7D27|\u56F4\u8116|\u5934\u5DFE|bundle|cold|neck|up", 6],
  ["\u{1F9E4}", "gloves", "\u624B\u5957", "\u624B|hand", 6],
  ["\u{1F9E5}", "coat", "\u5916\u5957", "\u51B7|\u5939\u514B|\u8D85\u51B7|brr|bundle|cold|jacket", 6],
  ["\u{1F9E6}", "socks", "\u889C\u5B50", "\u77ED\u889C|\u889C|\u957F\u889C|stocking", 6],
  ["\u{1F457}", "dress", "\u8FDE\u8863\u88D9", "\u8863\u670D|\u88D9\u5B50|clothes|clothing|dressed|fancy", 6],
  ["\u{1F458}", "kimono", "\u548C\u670D", "\u65E5\u672C|\u8863\u670D|clothing|comfortable", 6],
  ["\u{1F97B}", "sari", "\u7EB1\u4E3D", "\u5370\u5EA6|\u62AB\u80A9|\u838E\u4E3D|\u8863\u670D|clothing|dress", 6],
  ["\u{1FA71}", "one-piece swimsuit", "\u8FDE\u4F53\u6CF3\u8863", "\u4E00\u7247\u5F0F|\u6CF3\u8863|\u6CF3\u88C5|\u6E38\u6CF3|bathing|one-piece|suit|swimsuit", 6],
  ["\u{1FA72}", "briefs", "\u4E09\u89D2\u88E4", "\u4E00\u7247\u5F0F|\u5185\u88E4|\u6CF3\u8863|\u6CF3\u88C5|bathing|one-piece|suit|swimsuit", 6],
  ["\u{1FA73}", "shorts", "\u77ED\u88E4", "\u5185\u88E4|\u56DB\u89D2\u88E4|\u6CF3\u8863|\u6CF3\u88C5|bathing|pants|suit|swimsuit", 6],
  ["\u{1F459}", "bikini", "\u6BD4\u57FA\u5C3C", "\u4E09\u70B9\u5F0F|\u6CF3\u88C5|\u6E38\u6CF3|bathing|beach|clothing|pool", 6],
  ["\u{1F45A}", "woman\u2019s clothes", "\u5973\u88C5", "\u5973|\u5973\u751F\u8863\u670D|\u5973\u886C\u886B|\u8863\u670D|blouse|clothes|clothing|collar", 6],
  ["\u{1FAAD}", "folding hand fan", "\u6298\u6247", "\u51C9|\u51C9\u5FEB|\u556A\u55D2\u58F0|\u5BB3\u7F9E|clack|clap|cool|cooling", 6],
  ["\u{1F45B}", "purse", "\u94B1\u5305", "\u8840\u62FC|\u94DC\u677F|clothes|clothing|coin|dress", 6],
  ["\u{1F45C}", "handbag", "\u624B\u63D0\u5305", "\u5305\u5305|\u630E\u5305|\u8840\u62FC|bag|clothes|clothing|dress", 6],
  ["\u{1F45D}", "clutch bag", "\u624B\u888B", "\u5305|\u5316\u5986\u5305|\u624B\u62FF|\u624B\u62FF\u5305|bag|clothes|clothing|clutch", 6],
  ["\u{1F6CD}\uFE0F", "shopping bags", "\u8D2D\u7269\u888B", "\u5305|\u888B|\u8D2D\u7269|\u901B\u8857|bag|bags|hotel|shopping", 6],
  ["\u{1F392}", "backpack", "\u4E66\u5305", "\u4E0A\u5B66|\u5305|backpacking|bag|bookbag|education", 6],
  ["\u{1FA74}", "thong sandal", "\u5939\u8DBE\u51C9\u978B", "\u4EBA\u5B57\u62D6|\u51C9\u978B|\u6C99\u6EE9|\u6C99\u6EE9\u51C9\u978B|beach|flip|flop|sandal", 6],
  ["\u{1F45E}", "man\u2019s shoe", "\u7537\u978B", "\u68D5\u8272|\u76AE\u978B|\u978B|brown|clothes|clothing|feet", 6],
  ["\u{1F45F}", "running shoe", "\u8DD1\u978B", "\u8DD1|\u8FD0\u52A8\u978B|\u978B|athletic|clothes|clothing|fast", 6],
  ["\u{1F97E}", "hiking boot", "\u767B\u5C71\u978B", "\u5065\u884C|\u5F92\u6B65|\u6237\u5916|\u767B\u5C71|backpacking|boot|brown|camping", 6],
  ["\u{1F97F}", "flat shoe", "\u5E73\u5E95\u978B", "\u4E00\u811A\u8E6C|\u4FBF\u978B|\u5E73\u5E95\u82AD\u857E\u821E\u978B|\u82AD\u857E\u821E\u978B|ballet|comfy|flat|flats", 6],
  ["\u{1F460}", "high-heeled shoe", "\u9AD8\u8DDF\u978B", "\u5973|\u65F6\u88C5|\u978B|\u9AD8\u8DDF|clothes|clothing|dress|fashion", 6],
  ["\u{1F461}", "woman\u2019s sandal", "\u5973\u5F0F\u51C9\u978B", "\u51C9\u978B|\u5973|clothing|sandal|shoe|woman", 6],
  ["\u{1FA70}", "ballet shoes", "\u82AD\u857E\u821E\u978B", "\u821E\u8E48|\u821E\u978B|\u8DB3\u5C16\u978B|\u8DF3\u821E|ballet|dance|shoes", 6],
  ["\u{1F462}", "woman\u2019s boot", "\u5973\u9774", "\u5973|\u5973\u5F0F\u9774\u5B50|\u9774\u5B50|boot|clothes|clothing|dress", 6],
  ["\u{1FAAE}", "hair pick", "\u53D1\u5939", "\u5706\u84EC|\u5934\u53D1|\u5939\u5B50|\u5C0F\u5237\u5B50|afro|comb|groom|hair", 6],
  ["\u{1F451}", "crown", "\u7687\u51A0", "\u56FD\u738B|\u6743\u529B\u7684\u6E38\u620F|\u738B\u51A0|\u738B\u540E|clothing|family|king|medieval", 6],
  ["\u{1F452}", "woman\u2019s hat", "\u5973\u5E3D", "\u5973|\u5973\u5F0F|\u5E3D\u5B50|\u82B1\u56ED\u6D3E\u5BF9|clothes|clothing|garden|hat", 6],
  ["\u{1F3A9}", "top hat", "\u793C\u5E3D", "\u5E3D\u5B50|\u6B63\u5F0F|\u9AD8\u5E3D|clothes|clothing|fancy|formal", 6],
  ["\u{1F393}", "graduation cap", "\u6BD5\u4E1A\u5E3D", "\u56DB\u65B9\u5E3D|\u5B66\u4F4D|\u5B66\u8005|\u6BD5\u4E1A|cap|celebration|clothing|education", 6],
  ["\u{1F9E2}", "billed cap", "\u9E2D\u820C\u5E3D", "\u5E3D\u5B50|\u68D2\u7403\u5E3D|baseball|bent|billed|cap", 6],
  ["\u{1FA96}", "military helmet", "\u519B\u7528\u5934\u76D4", "\u519B\u4E8B|\u519B\u7528|\u519B\u961F|\u58EB\u5175|army|helmet|military|soldier", 6],
  ["\u26D1\uFE0F", "rescue worker\u2019s helmet", "\u767D\u5341\u5B57\u5934\u76D4", "\u5341\u5B57|\u5934\u76D4|\u5B89\u5168\u5E3D|\u6551\u63F4\u4EBA\u5458\u5934\u76D4|aid|cross|face|hat", 6],
  ["\u{1F4FF}", "prayer beads", "\u5FF5\u73E0", "\u5B97\u6559|\u73E0\u5B50|\u7948\u7977|\u9879\u94FE|beads|clothing|necklace|prayer", 6],
  ["\u{1F484}", "lipstick", "\u5507\u818F", "\u5316\u5986|\u5316\u5986\u54C1|\u53E3\u7EA2|\u7EA6\u4F1A|cosmetics|date|makeup", 6],
  ["\u{1F48D}", "ring", "\u6212\u6307", "\u7ED3\u5A5A|\u8BA2\u5A5A|\u94BB\u6212|\u95EA|diamond|engaged|engagement|married", 6],
  ["\u{1F48E}", "gem stone", "\u5B9D\u77F3", "\u5A5A\u793C|\u73E0\u5B9D|\u8BA2\u5A5A|\u94BB\u77F3|diamond|engagement|gem|jewel", 6],
  ["\u{1F507}", "muted speaker", "\u5DF2\u9759\u97F3\u7684\u626C\u58F0\u5668", "\u58F0\u97F3|\u5B89\u9759|\u626C\u58F0\u5668|\u626C\u58F0\u5668\u5173\u95ED|mute|muted|quiet|silent", 6],
  ["\u{1F508}", "speaker low volume", "\u4F4E\u97F3\u91CF\u7684\u626C\u58F0\u5668", "\u4F4E\u97F3\u91CF\u626C\u626C\u58F0|\u5587\u53ED|\u5C0F\u58F0|\u5C0F\u97F3\u91CF|low|soft|sound|speaker", 6],
  ["\u{1F509}", "speaker medium volume", "\u4E2D\u7B49\u97F3\u91CF\u7684\u626C\u58F0\u5668", "\u4E2D\u7B49|\u4E2D\u7B49\u97F3\u91CF|\u4E2D\u97F3\u91CF|\u4E2D\u97F3\u91CF\u626C\u58F0\u5668|medium|sound|speaker|volume", 6],
  ["\u{1F50A}", "speaker high volume", "\u9AD8\u97F3\u91CF\u7684\u626C\u58F0\u5668", "\u5927\u58F0|\u5927\u97F3\u91CF|\u626C\u58F0\u5668|\u97F3\u91CF|high|loud|music|sound", 6],
  ["\u{1F4E2}", "loudspeaker", "\u5587\u53ED", "\u516C\u5171\u5E7F\u64AD|\u5927\u58F0|\u5E7F\u64AD|\u6269\u97F3\u5668|address|communication|loud|public", 6],
  ["\u{1F4E3}", "megaphone", "\u6269\u97F3\u5668", "\u547C\u558A|\u5587\u53ED|\u5587\u53ED\u7B52|\u5927\u58F0|cheering|sound", 6],
  ["\u{1F4EF}", "postal horn", "\u90AE\u53F7", "\u53F7|\u53F7\u89D2|\u5587\u53ED|\u90AE\u653F|horn|post|postal", 6],
  ["\u{1F514}", "bell", "\u94C3\u94DB", "\u53EE\u5F53|\u54CD\u94C3|\u949F|\u949F\u58F0|break|church|sound", 6],
  ["\u{1F515}", "bell with slash", "\u7981\u6B62\u54CD\u94C3", "\u54CD\u94C3\u5173\u95ED|\u5B89\u9759|\u65E0\u58F0|\u94C3|bell|forbidden|mute|no", 6],
  ["\u{1F3BC}", "musical score", "\u4E50\u8C31", "\u4E94\u7EBF\u8C31|\u66F2\u8C31|\u97F3\u4E50|\u97F3\u7B26|music|musical|note|score", 6],
  ["\u{1F3B5}", "musical note", "\u97F3\u7B26", "\u4E50\u8C31|\u4E94\u7EBF\u8C31|\u516B\u5206\u97F3\u7B26|\u97F3\u4E50|music|musical|note|sound", 6],
  ["\u{1F3B6}", "musical notes", "\u591A\u4E2A\u97F3\u7B26", "\u4E50\u8C31|\u4E94\u7EBF\u8C31|\u516B\u5206\u97F3\u7B26|\u97F3\u4E50|music|musical|note|notes", 6],
  ["\u{1F399}\uFE0F", "studio microphone", "\u5F55\u97F3\u5BA4\u9EA6\u514B\u98CE", "\u5F55\u97F3\u5BA4|\u97F3\u4E50|\u9EA6|\u9EA6\u514B|mic|microphone|music|studio", 6],
  ["\u{1F39A}\uFE0F", "level slider", "\u7535\u5E73\u6ED1\u5757", "\u6ED1\u5757|\u7535\u5E73|\u8C03\u8282|\u8C03\u8282\u6ED1\u5757|level|music|slider", 6],
  ["\u{1F39B}\uFE0F", "control knobs", "\u63A7\u5236\u65CB\u94AE", "\u63A7\u5236|\u65CB\u94AE|\u8C03\u8282|\u97F3\u4E50|control|knobs|music", 6],
  ["\u{1F3A4}", "microphone", "\u9EA6\u514B\u98CE", "k\u6B4C|\u5361\u62C9ok|\u5531k|\u5531\u6B4C|karaoke|mic|music|sing", 6],
  ["\u{1F3A7}", "headphone", "\u8033\u673A", "\u5934\u6234\u5F0F\u8033\u673A|\u8033\u585E|earbud|sound", 6],
  ["\u{1F4FB}", "radio", "\u6536\u97F3\u673A", "\u5A31\u4E50|\u5E7F\u64AD|\u5E7F\u64AD\u7535\u53F0|\u65E0\u7EBF\u7535|entertainment|tbt|video", 6],
  ["\u{1F3B7}", "saxophone", "\u8428\u514B\u65AF\u7BA1", "\u4E50\u5668|\u5439\u594F|\u6F14\u594F|\u8428\u514B\u65AF\u98CE|instrument|music|sax", 6],
  ["\u{1F3BA}", "trumpet", "\u5C0F\u53F7", "\u4E50\u5668|\u5439\u594F|\u5587\u53ED|\u97F3\u4E50|instrument|music", 6],
  ["\u{1FA8A}", "trombone", "\u957F\u53F7", "\u4E50\u5668|\u60B2\u4F24|\u6ED1\u52A8|\u7235\u58EB|brass|instrument|jazz|music", 6],
  ["\u{1FA97}", "accordion", "\u624B\u98CE\u7434", "\u4E50\u5668|\u516D\u89D2\u5F62\u98CE\u7434|\u97F3\u4E50|\u98CE\u7434|box|concertina|instrument|music", 6],
  ["\u{1F3B8}", "guitar", "\u5409\u4ED6", "\u4E50\u5668|\u5F39\u594F|\u6F14\u594F|\u7535\u5409\u4ED6|instrument|music|strat", 6],
  ["\u{1F3B9}", "musical keyboard", "\u97F3\u4E50\u952E\u76D8", "\u4E50\u5668|\u5F39\u594F|\u6F14\u594F|\u94A2\u7434|instrument|keyboard|music|musical", 6],
  ["\u{1F3BB}", "violin", "\u5C0F\u63D0\u7434", "\u4E50\u5668|\u63D0\u7434|\u662F\u7279\u62C9\u8FEA\u74E6\u5C14|\u6F14\u594F|instrument|music", 6],
  ["\u{1FA95}", "banjo", "\u73ED\u5353\u7434", "\u5F26\u4E50\u5668|\u5F39\u594F|\u97F3\u4E50|music|stringed", 6],
  ["\u{1F941}", "drum", "\u9F13", "\u97F3\u4E50|\u9F13\u58F0|\u9F13\u69CC|drumsticks|music", 6],
  ["\u{1FA98}", "long drum", "\u957F\u9F13", "\u4E50\u5668|\u5EB7\u52A0\u9F13|\u5EB7\u8304\u9F13|\u6572|beat|conga|drum|instrument", 6],
  ["\u{1FA87}", "maracas", "\u6C99\u7403", "\u4E50\u5668|\u6070\u6070|\u6253\u51FB\u4E50\u5668|\u62E8\u6D6A\u9F13|cha|dance|instrument|music", 6],
  ["\u{1FA88}", "flute", "\u957F\u7B1B", "\u4E50\u5668|\u4E50\u961F|\u6728\u7BA1\u4E50\u5668|\u6A2A\u7B1B|band|fife|flautist|instrument", 6],
  ["\u{1FA89}", "harp", "\u7AD6\u7434", "\u4E18\u6BD4\u7279|\u4E50\u5668|\u7231|\u7BA1\u5F26\u4E50\u961F|cupid|instrument|love|music", 6],
  ["\u{1F4F1}", "mobile phone", "\u624B\u673A", "\u624B\u63D0\u7535\u8BDD|\u667A\u80FD\u624B\u673A|\u7535\u8BDD|\u79FB\u52A8|cell|communication|mobile|phone", 6],
  ["\u{1F4F2}", "mobile phone with arrow", "\u5E26\u6709\u7BAD\u5934\u7684\u624B\u673A", "\u624B\u673A|\u63A5\u6536|\u667A\u80FD\u624B\u673A|\u6765\u7535|arrow|build|call|cell", 6],
  ["\u260E\uFE0F", "telephone", "\u7535\u8BDD", "\u56FA\u5B9A\u7535\u8BDD|\u56FA\u8BDD|\u5EA7\u673A|phone", 6],
  ["\u{1F4DE}", "telephone receiver", "\u7535\u8BDD\u542C\u7B52", "\u542C\u7B52|\u56FA\u5B9A\u7535\u8BDD|\u56FA\u8BDD|\u5EA7\u673A|communication|phone|receiver|telephone", 6],
  ["\u{1F4DF}", "pager", "\u5BFB\u547C\u673A", "bb \u673A|\u4F20\u547C\u673A|\u547C\u673A|\u901A\u4FE1|communication", 6],
  ["\u{1F4E0}", "fax machine", "\u4F20\u771F\u673A", "\u4F20\u771F|\u4F20\u771F\u53F7|\u53D1\u4F20\u771F|communication|fax|machine", 6],
  ["\u{1F50B}", "battery", "\u7535\u6C60", "\u6B63\u6781|\u7535|\u7535\u6781|\u7535\u6E90", 6],
  ["\u{1FAAB}", "low battery", "\u7535\u6C60\u7535\u91CF\u4E0D\u8DB3", "\u4F4E\u80FD\u91CF|\u7535\u5B50|\u7535\u6C60|\u7535\u6C60\u7535\u91CF\u4F4E|battery|drained|electronic|energy", 6],
  ["\u{1F50C}", "electric plug", "\u7535\u6E90\u63D2\u5934", "\u63D2\u5934|\u7535\u63D2\u5934|\u7535\u6E90|\u7535\u7EBF|electric|electricity|plug", 6],
  ["\u{1F4BB}", "laptop", "\u7B14\u8BB0\u672C\u7535\u8111", "pc|\u4E2A\u4EBA\u7535\u8111|\u624B\u63D0\u7535\u8111|\u7535\u8111|computer|office|pc|personal", 6],
  ["\u{1F5A5}\uFE0F", "desktop computer", "\u53F0\u5F0F\u7535\u8111", "pc|\u4E2A\u4EBA\u7535\u8111|\u53F0\u5F0F|\u663E\u793A\u5668|computer|desktop|monitor", 6],
  ["\u{1F5A8}\uFE0F", "printer", "\u6253\u5370\u673A", "\u5370\u5237\u673A|\u55B7\u58A8\u6253\u5370|\u590D\u5370|\u6253\u5370|computer", 6],
  ["\u2328\uFE0F", "keyboard", "\u952E\u76D8", "\u6253\u5B57|\u6309\u952E|\u7535\u8111|\u8F93\u5165|computer", 6],
  ["\u{1F5B1}\uFE0F", "computer mouse", "\u7535\u8111\u9F20\u6807", "\u6709\u7EBF\u9F20\u6807|\u6FC0\u5149\u9F20\u6807|\u70B9\u51FB|\u70B9\u6309|computer|mouse", 6],
  ["\u{1F5B2}\uFE0F", "trackball", "\u8F68\u8FF9\u7403", "\u6709\u7EBF\u9F20\u6807|\u7535\u8111|\u8FFD\u8E2A\u7403|\u9F20\u6807|computer", 6],
  ["\u{1F4BD}", "computer disk", "\u7535\u8111\u5149\u76D8", "md|minidisk|mini\u5149\u76D8|\u5149\u76D8|computer|disk|minidisk|optical", 6],
  ["\u{1F4BE}", "floppy disk", "\u8F6F\u76D8", "3.5\u82F1\u5BF8|\u4FBF\u643A|\u5B58\u50A8|\u7535\u8111|computer|disk|floppy", 6],
  ["\u{1F4BF}", "optical disk", "\u5149\u76D8", "cd|\u4E13\u8F91|\u5B58\u50A8|\u5F71\u7247|blu-ray|cd|computer|disk", 6],
  ["\u{1F4C0}", "dvd", "DVD", "\u5149\u76D8|\u5149\u789F|\u5F71\u7247|\u7535\u8111|blu-ray|cd|computer|disk", 6],
  ["\u{1F9EE}", "abacus", "\u7B97\u76D8", "\u8BA1\u7B97|\u8BA1\u7B97\u5668|calculation|calculator", 6],
  ["\u{1F3A5}", "movie camera", "\u7535\u5F71\u6444\u5F71\u673A", "\u5F55\u50CF|\u6444\u50CF\u673A|\u6444\u5F55\u673A|\u6444\u5F71|bollywood|camera|cinema|film", 6],
  ["\u{1F39E}\uFE0F", "film frames", "\u5F71\u7247\u5E27", "\u5E27|\u7535\u5F71|\u7535\u5F71\u80F6\u5377|\u7535\u5F71\u80F6\u7247|cinema|film|frames|movie", 6],
  ["\u{1F4FD}\uFE0F", "film projector", "\u7535\u5F71\u653E\u6620\u673A", "\u5F71\u7247|\u6295\u5F71\u4EEA|\u653E\u6620\u673A|\u7535\u5F71|cinema|film|movie|projector", 6],
  ["\u{1F3AC}", "clapper board", "\u573A\u8BB0\u677F", "\u573A\u8BB0|\u6253\u677F|\u62CD\u7535\u5F71|action|board|clapper|movie", 6],
  ["\u{1F4FA}", "television", "\u7535\u89C6\u673A", "\u7535\u89C6|\u770B\u7535\u89C6|\u89C6\u9891|\u8282\u76EE|tv|video", 6],
  ["\u{1F4F7}", "camera", "\u76F8\u673A", "\u5361\u7247\u76F8\u673A|\u62CD\u7167|\u6444\u5F71|\u7167\u7247|photo|selfie|snap|tbt", 6],
  ["\u{1F4F8}", "camera with flash", "\u5F00\u95EA\u5149\u706F\u7684\u76F8\u673A", "\u5E26\u95EA\u5149\u706F\u7684\u76F8\u673A|\u62CD\u7167|\u76F8\u673A|\u95EA\u5149\u706F|camera|flash|video", 6],
  ["\u{1F4F9}", "video camera", "\u6444\u50CF\u673A", "\u5F55\u50CF|\u5F55\u50CF\u673A|\u5F55\u5F71|\u62CD\u6444|camcorder|camera|tbt|video", 6],
  ["\u{1F4FC}", "videocassette", "\u5F55\u50CF\u5E26", "vhs|\u5F55\u5F71\u5E26|\u78C1\u5E26|old|school|tape|vcr", 6],
  ["\u{1F50D}", "magnifying glass tilted left", "\u5DE6\u659C\u7684\u653E\u5927\u955C", "\u5DE5\u5177|\u641C\u7D22|\u653E\u5927|\u653E\u5927\u955C|glass|lab|left|left-pointing", 6],
  ["\u{1F50E}", "magnifying glass tilted right", "\u53F3\u659C\u7684\u653E\u5927\u955C", "\u5DE5\u5177|\u641C\u7D22|\u653E\u5927|\u653E\u5927\u955C|contact|glass|lab|magnifying", 6],
  ["\u{1F56F}\uFE0F", "candle", "\u8721\u70DB", "\u5149|\u70DB\u5149|\u70DB\u706B|\u7167\u660E|light", 6],
  ["\u{1F4A1}", "light bulb", "\u706F\u6CE1", "\u4E3B\u610F|\u60F3\u6CD5|\u70B9\u5B50|\u7535|bulb|comic|electric|idea", 6],
  ["\u{1F526}", "flashlight", "\u624B\u7535\u7B52", "\u5149|\u5DE5\u5177|\u624B\u7535|\u7167\u660E|electric|light|tool|torch", 6],
  ["\u{1F3EE}", "red paper lantern", "\u7EA2\u706F\u7B3C", "\u5149|\u559C\u5E86|\u5C45\u9152\u5C4B|\u65E5\u672C|bar|lantern|light|paper", 6],
  ["\u{1FA94}", "diya lamp", "\u5370\u5EA6\u6CB9\u706F", "\u6392\u706F\u8282|\u6CB9|\u706F|\u8FEA\u4E9A|diya|lamp|light|oil", 6],
  ["\u{1F4D4}", "notebook with decorative cover", "\u7CBE\u88C5\u7B14\u8BB0\u672C", "\u4E66|\u5199\u4F5C|\u5B66\u6821|\u5C01\u9762|book|cover|decorated|decorative", 6],
  ["\u{1F4D5}", "closed book", "\u5408\u4E0A\u7684\u4E66\u672C", "\u4E66|\u4E66\u672C|\u4E66\u672C\u5408\u8D77|\u5408\u4E0A|book|closed|education", 6],
  ["\u{1F4D6}", "open book", "\u6253\u5F00\u7684\u4E66\u672C", "\u4E66|\u4E66\u672C|\u56FE\u4E66\u9986|\u5C0F\u8BF4|book|education|fantasy|knowledge", 6],
  ["\u{1F4D7}", "green book", "\u7EFF\u8272\u4E66\u672C", "\u4E66|\u4E66\u672C|\u56FE\u4E66\u9986|\u6559\u80B2|book|education|fantasy|green", 6],
  ["\u{1F4D8}", "blue book", "\u84DD\u8272\u4E66\u672C", "\u4E66|\u4E66\u672C|\u56FE\u4E66\u9986|\u6559\u80B2|blue|book|education|fantasy", 6],
  ["\u{1F4D9}", "orange book", "\u6A59\u8272\u4E66\u672C", "\u4E66|\u4E66\u672C|\u56FE\u4E66\u9986|\u6559\u80B2|book|education|fantasy|library", 6],
  ["\u{1F4DA}", "books", "\u4E66", "\u4E66\u672C|\u4E66\u7C4D|\u56FE\u4E66|\u56FE\u4E66\u9986|book|education|fantasy|knowledge", 6],
  ["\u{1F4D3}", "notebook", "\u7B14\u8BB0\u672C", "\u65E5\u8BB0\u672C|\u672C\u5B50|\u7B14\u8BB0|\u8BB0\u4E8B\u672C", 6],
  ["\u{1F4D2}", "ledger", "\u8D26\u672C", "\u7B14\u8BB0\u672C|\u8BB0\u4E8B\u672C|\u8BB0\u8D26|\u8D26\u7C3F|notebook", 6],
  ["\u{1F4C3}", "page with curl", "\u5E26\u5377\u8FB9\u7684\u9875\u9762", "\u5377\u66F2|\u5377\u8FB9|\u6587\u4E66|\u6587\u4EF6|curl|document|page|paper", 6],
  ["\u{1F4DC}", "scroll", "\u5377\u8F74", "\u5377\u7EB8|\u753B\u5377|\u7EB8|\u7EB8\u5377|paper", 6],
  ["\u{1F4C4}", "page facing up", "\u6587\u4EF6", "\u6587\u4E66|\u6587\u6863|\u9875\u9762\u5411\u4E0A|document|facing|page|paper", 6],
  ["\u{1F4F0}", "newspaper", "\u62A5\u7EB8", "\u4F20\u64AD|\u62A5\u9053|\u65B0\u95FB|\u770B\u62A5|communication|news|paper", 6],
  ["\u{1F5DE}\uFE0F", "rolled-up newspaper", "\u62A5\u7EB8\u5377", "\u5377\u8D77|\u5377\u8D77\u7684\u62A5\u7EB8|\u62A5\u7EB8|\u65B0\u95FB|news|newspaper|paper|rolled", 6],
  ["\u{1F4D1}", "bookmark tabs", "\u6807\u7B7E\u9875", "\u4E66\u7B7E|\u4E66\u7B7E\u9875\u6807\u7B7E|\u6709\u4E66\u7B7E\u7684\u9875\u9762|\u6807\u7B7E|bookmark|mark|marker|tabs", 6],
  ["\u{1F516}", "bookmark", "\u4E66\u7B7E", "\u6807\u7B7E|\u8BFB\u4E66|\u9605\u8BFB|mark", 6],
  ["\u{1F3F7}\uFE0F", "label", "\u6807\u7B7E", "\u540A\u724C|\u6807\u8BB0|\u884C\u674E\u724C|tag", 6],
  ["\u{1FA99}", "coin", "\u786C\u5E01", "\u5BCC\u6709|\u6B27\u5143|\u7F8E\u5143|\u8D22\u5BCC|dollar|euro|gold|metal", 6],
  ["\u{1F4B0}", "money bag", "\u94B1\u888B", "\u4ED8\u94B1|\u5341\u4EBF|\u53D8\u73B0|\u5B88\u8D22\u5974|bag|bank|bet|billion", 6],
  ["\u{1FA8E}", "treasure chest", "\u5B9D\u7BB1", "\u52AB\u63A0|\u5956\u8D4F|\u5B9D\u7269|\u5B9D\u77F3|gem|gold|jewels|loot", 6],
  ["\u{1F4B4}", "yen banknote", "\u65E5\u5143", "\u65E5\u5E01|\u73B0\u91D1|\u7EB8\u5E01|\u8D27\u5E01|bank|banknote|bill|currency", 6],
  ["\u{1F4B5}", "dollar banknote", "\u7F8E\u5143", "\u73B0\u91D1|\u7EB8\u5E01|\u7F8E\u5200|\u7F8E\u949E|bank|banknote|bill|currency", 6],
  ["\u{1F4B6}", "euro banknote", "\u6B27\u5143", "\u73B0\u91D1|\u7EB8\u5E01|\u8D27\u5E01|\u949E\u7968|100|bank|banknote|bill", 6],
  ["\u{1F4B7}", "pound banknote", "\u82F1\u9551", "\u73B0\u91D1|\u7EB8\u5E01|\u8D27\u5E01|\u949E\u7968|bank|banknote|bill|billion", 6],
  ["\u{1F4B8}", "money with wings", "\u957F\u7FC5\u8180\u7684\u94B1", "\u7EB8\u5E01|\u7FC5\u8180|\u82B1\u94B1|\u94B1|bank|banknote|bill|billion", 6],
  ["\u{1F4B3}", "credit card", "\u4FE1\u7528\u5361", "\u4FE1\u7528|\u501F\u8BB0\u5361|\u5237\u5361|\u5361|bank|card|cash|charge", 6],
  ["\u{1F9FE}", "receipt", "\u6536\u636E", "\u4F1A\u8BA1|\u4FE1\u5C01|\u51ED\u636E|\u53D1\u7968|accounting|bookkeeping|evidence|invoice", 6],
  ["\u{1F4B9}", "chart increasing with yen", "\u8D8B\u52BF\u5411\u4E0A\u4E14\u5E26\u6709\u65E5\u5143\u7B26\u53F7\u7684\u56FE\u8868", "\u4E0A\u626C|\u4E0A\u6DA8|\u65E5\u5143|\u65E5\u5143\u5347\u503C|bank|chart|currency|graph", 6],
  ["\u2709\uFE0F", "envelope", "\u4FE1\u5C01", "\u4FE1\u4EF6|\u4FE1\u606F|\u6765\u4FE1|\u7535\u5B50\u90AE\u4EF6|e-mail|email|letter", 6],
  ["\u{1F4E7}", "e-mail", "\u7535\u5B50\u90AE\u4EF6", "\u4FE1\u4EF6|\u4FE1\u5C01|\u7535\u90AE|\u90AE\u4EF6|email|letter|mail", 6],
  ["\u{1F4E8}", "incoming envelope", "\u6765\u4FE1", "\u4FE1\u4EF6|\u4FE1\u5C01|\u53D1\u9001|\u63A5\u6536|delivering|e-mail|email|envelope", 6],
  ["\u{1F4E9}", "envelope with arrow", "\u6536\u90AE\u4EF6", "\u4FE1\u4EF6|\u4FE1\u5C01|\u53D1\u4FE1|\u53D1\u51FA|arrow|communication|down|e-mail", 6],
  ["\u{1F4E4}", "outbox tray", "\u53D1\u4EF6\u7BB1", "\u4FE1\u4EF6|\u53D1\u4FE1|\u53D1\u9001|\u53D1\u90AE\u4EF6|box|email|letter|mail", 6],
  ["\u{1F4E5}", "inbox tray", "\u6536\u4EF6\u7BB1", "\u4FE1\u4EF6|\u63A5\u6536|\u6536\u4FE1|\u6536\u5230\u90AE\u4EF6|box|email|inbox|letter", 6],
  ["\u{1F4E6}", "package", "\u5305\u88F9", "\u5FEB\u9012|\u6307\u5411|\u76D2\u5B50|\u7BB1\u5B50|box|communication|delivery|parcel", 6],
  ["\u{1F4EB}", "closed mailbox with raised flag", "\u6709\u5F85\u6536\u4FE1\u4EF6", "\u4FE1\u7BB1|\u65D7\u6807|\u6709\u65B0\u4FE1\u4EF6|\u90AE\u7BB1|closed|communication|flag|mail", 6],
  ["\u{1F4EA}", "closed mailbox with lowered flag", "\u65E0\u5F85\u6536\u4FE1\u4EF6", "\u4FE1\u7BB1|\u4FE1\u7BB1\u5173\u95ED\u7EA2\u65D7\u653E\u4E0B|\u653E\u4E0B|\u65D7\u6807|closed|flag|lowered|mail", 6],
  ["\u{1F4EC}", "open mailbox with raised flag", "\u6709\u65B0\u4FE1\u4EF6", "\u4FE1\u7BB1|\u4FE1\u7BB1\u6253\u5F00\u7EA2\u65D7\u5347\u8D77|\u6253\u5F00|\u65D7\u6807|flag|mail|mailbox|open", 6],
  ["\u{1F4ED}", "open mailbox with lowered flag", "\u65E0\u65B0\u4FE1\u4EF6", "\u4FE1\u7BB1|\u4FE1\u7BB1\u6253\u5F00|\u4FE1\u7BB1\u6253\u5F00\u7EA2\u65D7\u653E\u4E0B|\u65D7\u6807|flag|lowered|mail|mailbox", 6],
  ["\u{1F4EE}", "postbox", "\u90AE\u7B52", "\u4FE1|\u4FE1\u7BB1|\u5BC4\u4FE1|\u90AE\u7BB1|mail|mailbox", 6],
  ["\u{1F5F3}\uFE0F", "ballot box with ballot", "\u6295\u7968\u7BB1", "\u6295\u7968|\u76D2\u5B50|\u7968\u7BB1|\u9009\u4E3E|ballot|box", 6],
  ["\u270F\uFE0F", "pencil", "\u94C5\u7B14", "\u6A61\u76AE|\u6A61\u76AE\u64E6|\u753B\u753B|\u753B\u7B14", 6],
  ["\u2712\uFE0F", "black nib", "\u94A2\u7B14\u5C16", "\u5199\u5B57|\u786C\u7B14|\u7B14|\u7B14\u5C16|black|nib|pen", 6],
  ["\u{1F58B}\uFE0F", "fountain pen", "\u94A2\u7B14", "\u5199\u5B57|\u786C\u7B14|\u7B14|fountain|pen", 6],
  ["\u{1F58A}\uFE0F", "pen", "\u7B14", "\u539F\u5B50\u7B14|\u5706\u73E0\u7B14|\u6CB9\u7B14|ballpoint", 6],
  ["\u{1F58C}\uFE0F", "paintbrush", "\u753B\u7B14", "\u5237|\u6BDB\u7B14|\u753B\u5237|\u7B14\u5237|painting", 6],
  ["\u{1F58D}\uFE0F", "crayon", "\u8721\u7B14", "\u6CB9\u753B\u68D2|\u753B\u68D2", 6],
  ["\u{1F4DD}", "memo", "\u5907\u5FD8\u5F55", "\u4FBF\u6761|\u4FBF\u6761\u7C3F|\u4FBF\u7B3A|\u94C5\u7B14|communication|media|notes|pencil", 6],
  ["\u{1FA8C}", "eraser", "eraser", "", 6],
  ["\u{1F4BC}", "briefcase", "\u516C\u6587\u5305", "\u4E0A\u73ED|\u516C\u4E8B\u5305|\u529E\u516C\u5BA4|\u5305|office", 6],
  ["\u{1F4C1}", "file folder", "\u6587\u4EF6\u5939", "\u529E\u516C|\u6587\u4EF6|\u6587\u5177|\u786C\u7EB8\u5939|file|folder", 6],
  ["\u{1F4C2}", "open file folder", "\u6253\u5F00\u7684\u6587\u4EF6\u5939", "\u529E\u516C|\u6253\u5F00|\u6253\u5F00\u6587\u4EF6\u5939|\u6587\u4EF6|file|folder|open", 6],
  ["\u{1F5C2}\uFE0F", "card index dividers", "\u7D22\u5F15\u5206\u9694\u6587\u4EF6\u5939", "\u5206\u9694|\u5206\u9694\u5361|\u6587\u4EF6\u5939|\u7D22\u5F15|card|dividers|index", 6],
  ["\u{1F4C5}", "calendar", "\u65E5\u5386", "\u65E5\u671F|date", 6],
  ["\u{1F4C6}", "tear-off calendar", "\u624B\u6495\u65E5\u5386", "\u65E5\u5386|\u65E5\u671F|calendar|tear-off", 6],
  ["\u{1F5D2}\uFE0F", "spiral notepad", "\u7EBF\u5708\u672C", "\u6587\u5177|\u7B14\u8BB0\u672C|\u7EBF\u5708|\u8BB0\u4E8B\u672C|note|notepad|pad|spiral", 6],
  ["\u{1F5D3}\uFE0F", "spiral calendar", "\u7EBF\u5708\u65E5\u5386", "\u65E5\u5386|\u65E5\u671F|\u7EBF\u5708|\u8BB0\u4E8B\u672C|calendar|pad|spiral", 6],
  ["\u{1F4C7}", "card index", "\u5361\u7247\u7D22\u5F15", "\u5361\u7247|\u5361\u724C\u7D22\u5F15|\u540D\u7247\u7D22\u5F15|\u76EE\u5F55|card|index|old|rolodex", 6],
  ["\u{1F4C8}", "chart increasing", "\u8D8B\u52BF\u5411\u4E0A\u7684\u56FE\u8868", "\u4E0A\u5347|\u4E0A\u6DA8|\u4E0A\u6DA8\u56FE\u8868|\u4E0A\u6DA8\u8D8B\u52BF\u7EBF|chart|data|graph|growth", 6],
  ["\u{1F4C9}", "chart decreasing", "\u8D8B\u52BF\u5411\u4E0B\u7684\u56FE\u8868", "\u4E0B\u8DCC|\u4E0B\u8DCC\u56FE\u8868|\u4E0B\u8DCC\u8D8B\u52BF\u7EBF|\u4E0B\u964D|chart|data|decreasing|down", 6],
  ["\u{1F4CA}", "bar chart", "\u6761\u5F62\u56FE", "\u56FE\u5F62|\u56FE\u8868|\u67F1\u5F62\u56FE|\u76F4\u65B9\u56FE|bar|chart|data|graph", 6],
  ["\u{1F4CB}", "clipboard", "\u526A\u8D34\u677F", "\u5199\u5B57\u5939\u677F|\u5199\u5B57\u677F|\u526A\u8D34\u7C3F|\u5939\u5B50|do|list|notes", 6],
  ["\u{1F4CC}", "pushpin", "\u56FE\u9489", "\u56FA\u5B9A|\u62FC\u8D34|\u6309\u9489|collage|pin", 6],
  ["\u{1F4CD}", "round pushpin", "\u5706\u56FE\u9489", "\u4F4D\u7F6E|\u56FA\u5B9A|\u56FE\u9489|location|map|pin|pushpin", 6],
  ["\u{1F4CE}", "paperclip", "\u56DE\u5F62\u9488", "\u4E07\u5B57\u5939|\u56DE\u7EB9\u9488|\u66F2\u522B\u9488|\u7EB8\u5939", 6],
  ["\u{1F587}\uFE0F", "linked paperclips", "\u8FDE\u8D77\u6765\u7684\u4E24\u4E2A\u56DE\u5F62\u9488", "\u4E07\u5B57\u5939|\u56DE\u5F62\u9488|\u56DE\u7EB9\u9488|\u66F2\u522B\u9488|link|linked|paperclip|paperclips", 6],
  ["\u{1F4CF}", "straight ruler", "\u76F4\u5C3A", "\u5C3A|\u5C3A\u5B50|\u6570\u5B66|\u6587\u5177|angle|edge|math|ruler", 6],
  ["\u{1F4D0}", "triangular ruler", "\u4E09\u89D2\u5C3A", "\u4E09\u89D2|\u5C3A|\u6570\u5B66|\u6587\u5177|angle|math|rule|ruler", 6],
  ["\u2702\uFE0F", "scissors", "\u526A\u5200", "\u4FEE\u526A|\u526A|\u526A\u5B50|\u526A\u88C1|cut|cutting|paper|tool", 6],
  ["\u{1F5C3}\uFE0F", "card file box", "\u5361\u7247\u76D2", "\u5361\u7247|\u5B58\u6863|\u6587\u4EF6|\u6807\u7B7E|box|card|file", 6],
  ["\u{1F5C4}\uFE0F", "file cabinet", "\u6587\u4EF6\u67DC", "\u5B58\u6863|\u5F52\u6863|\u6536\u7EB3|\u67DC|cabinet|file|filing|paper", 6],
  ["\u{1F5D1}\uFE0F", "wastebasket", "\u5783\u573E\u6876", "\u5783\u573E|\u5783\u573E\u7BD3|\u5E9F\u7EB8\u7BD3|can|garbage|trash|waste", 6],
  ["\u{1F512}", "locked", "\u5408\u4E0A\u7684\u9501", "\u4E0A\u9501|\u79C1\u5BC6|\u9501|\u9501\u4F4F|closed|lock|private", 6],
  ["\u{1F513}", "unlocked", "\u6253\u5F00\u7684\u9501", "\u53D6\u6D88\u9501\u5B9A|\u5F00\u9501|\u6253\u5F00|\u7834\u89E3|cracked|lock|open|unlock", 6],
  ["\u{1F50F}", "locked with pen", "\u58A8\u6C34\u7B14\u548C\u9501", "\u7B14|\u7B14\u5C16|\u94A2\u7B14|\u9501|ink|lock|locked|nib", 6],
  ["\u{1F510}", "locked with key", "\u94A5\u5319\u548C\u9501", "\u5B89\u5168|\u811A\u8E0F\u8F66\u9501|\u94A5\u5319|\u9501|bike|closed|key|lock", 6],
  ["\u{1F511}", "key", "\u94A5\u5319", "\u5BC6\u7801|\u5BC6\u94A5|\u5F00\u9501|\u89E3\u9501|keys|lock|major|password", 6],
  ["\u{1F5DD}\uFE0F", "old key", "\u8001\u5F0F\u94A5\u5319", "\u53E4\u8001\u7684\u94A5\u5319|\u65E7\u94A5\u5319|\u7EBF\u7D22|\u94A5\u5319|clue|key|lock|old", 6],
  ["\u{1FA8D}", "net with handle", "net with handle", "", 6],
  ["\u{1F528}", "hammer", "\u9524\u5B50", "\u4FEE\u7406|\u5BB6\u5C45\u4FEE\u7F2E|\u5DE5\u5177|\u6572|home|improvement|repairs|tool", 6],
  ["\u{1FA93}", "axe", "\u65A7\u5934", "\u5207|\u5288|\u6728\u5934|\u780D|ax|chop|hatchet|split", 6],
  ["\u26CF\uFE0F", "pick", "\u94C1\u9550", "\u5DE5\u5177|\u6316|\u6316\u6398|\u91C7\u77FF|hammer|mining|tool", 6],
  ["\u2692\uFE0F", "hammer and pick", "\u9524\u5B50\u4E0E\u9550", "\u5DE5\u5177|\u94C1\u9524|\u94C1\u9550|\u9524\u5B50|hammer|pick|tool", 6],
  ["\u{1F6E0}\uFE0F", "hammer and wrench", "\u9524\u5B50\u4E0E\u6273\u624B", "\u5DE5\u5177|\u6273\u624B|\u94C1\u9524|\u9524\u5B50|hammer|spanner|tool|wrench", 6],
  ["\u{1F5E1}\uFE0F", "dagger", "\u5315\u9996", "\u5251|\u6B66\u5668|\u77ED\u5200|\u77ED\u5251|knife|weapon", 6],
  ["\u2694\uFE0F", "crossed swords", "\u4EA4\u53C9\u653E\u7F6E\u7684\u5251", "\u4EA4\u53C9|\u5251|\u5341\u5B57|\u53CC\u5251|crossed|swords|weapon", 6],
  ["\u{1F4A3}", "bomb", "\u70B8\u5F39", "\u7206\u70B8|boom|comic|dangerous|explosion", 6],
  ["\u{1FA83}", "boomerang", "\u56DE\u65CB\u9556", "\u53CD\u5F39|\u56DE\u5F39|\u571F\u8457|\u6B66\u5668|rebound|repercussion|weapon", 6],
  ["\u{1F3F9}", "bow and arrow", "\u5F13\u548C\u7BAD", "\u4EBA\u9A6C\u5EA7|\u5C04\u624B|\u5C04\u624B\u5EA7|\u5C04\u7BAD|archer|archery|arrow|bow", 6],
  ["\u{1F6E1}\uFE0F", "shield", "\u76FE\u724C", "\u6B66\u5668|\u76FE|\u9632\u5FA1|weapon", 6],
  ["\u{1FA9A}", "carpentry saw", "\u6728\u5DE5\u952F", "\u4FEE\u526A|\u5DE5\u5177|\u6728\u5320|\u6728\u6750|carpenter|carpentry|cut|lumber", 6],
  ["\u{1F527}", "wrench", "\u6273\u624B", "\u5BB6\u5C45\u4FEE\u7F2E|\u5DE5\u5177|\u87BA\u4E1D\u6273\u624B|home|improvement|spanner|tool", 6],
  ["\u{1FA9B}", "screwdriver", "\u87BA\u4E1D\u5200", "\u5DE5\u5177|\u87BA\u4E1D|flathead|handy|screw|tool", 6],
  ["\u{1F529}", "nut and bolt", "\u87BA\u6BCD\u4E0E\u87BA\u6813", "\u5DE5\u5177|\u87BA\u4E1D|\u87BA\u5E3D|\u87BA\u6813|bolt|home|improvement|nut", 6],
  ["\u2699\uFE0F", "gear", "\u9F7F\u8F6E", "\u4F20\u52A8|\u5DE5\u5177|\u673A\u68B0|\u96F6\u4EF6|cog|cogwheel|tool", 6],
  ["\u{1F5DC}\uFE0F", "clamp", "\u5939\u94B3", "\u538B\u7F29|\u5939\u5177|\u5DE5\u5177|\u673A\u68B0|compress|tool|vice", 6],
  ["\u2696\uFE0F", "balance scale", "\u5929\u5E73", "\u516C\u5E73|\u516C\u6B63|\u5929\u79E4|\u5929\u79E4\u5EA7|balance|justice|libra|scale", 6],
  ["\u{1F9AF}", "white cane", "\u76F2\u6756", "\u62D0\u6756|\u65E0\u969C\u788D|\u76F2|\u76F2\u4EBA|accessibility|blind|cane|probing", 6],
  ["\u{1F517}", "link", "\u94FE\u63A5", "\u7F51\u5740|\u94FE\u6761|\u9501\u94FE|links", 6],
  ["\u26D3\uFE0F\u200D\u{1F4A5}", "broken chain", "\u65AD\u94FE", "\u624B\u94D0|\u65AD\u5F00|\u65AD\u5F00\u7684\u94FE\u6761|\u81EA\u7531|break|breaking|broken|chain", 6],
  ["\u26D3\uFE0F", "chains", "\u94FE\u6761", "\u94C1\u94FE|\u94FE|\u9501\u94FE|chain", 6],
  ["\u{1FA9D}", "hook", "\u6302\u94A9", "\u5356\u70B9|\u5F2F\u94A9|\u6293|\u66F2\u7EBF|catch|crook|curve|ensnare", 6],
  ["\u{1F9F0}", "toolbox", "\u5DE5\u5177\u7BB1", "\u5927\u7BB1\u5B50|\u5DE5\u5177|\u673A\u4FEE|\u7BB1\u5B50|box|chest|mechanic|red", 6],
  ["\u{1F9F2}", "magnet", "\u78C1\u94C1", "u \u578B|\u5438\u5F15|\u5438\u5F15\u529B|\u6B63\u8D1F|attraction|horseshoe|magnetic|negative", 6],
  ["\u{1FA9C}", "ladder", "\u68AF\u5B50", "\u53F0\u9636|\u68AF\u7EA7|\u6A2A\u6863|\u722C|climb|rung|step", 6],
  ["\u{1FA8F}", "shovel", "\u94F2", "\u57CB|\u6316|\u6398|\u6D1E|bury|dig|garden|hole", 6],
  ["\u2697\uFE0F", "alembic", "\u84B8\u998F\u5668", "\u51C0\u5316|\u5316\u5B66|\u5B9E\u9A8C|\u5DE5\u5177|chemistry|tool", 6],
  ["\u{1F9EA}", "test tube", "\u8BD5\u7BA1", "\u5316\u5B66|\u5316\u5B66\u5BB6|\u5B9E\u9A8C|\u5B9E\u9A8C\u5BA4|chemist|chemistry|experiment|lab", 6],
  ["\u{1F9EB}", "petri dish", "\u57F9\u517B\u76BF", "\u57F9\u517B|\u5B9E\u9A8C\u5BA4|\u751F\u7269\u5B66|\u751F\u7269\u5B66\u5BB6|bacteria|biologist|biology|culture", 6],
  ["\u{1F9EC}", "dna", "DNA", "\u57FA\u56E0|\u6F14\u5316|\u751F\u547D|\u751F\u7269\u5B66\u5BB6|biologist|evolution|gene|genetics", 6],
  ["\u{1F52C}", "microscope", "\u663E\u5FAE\u955C", "\u5B9E\u9A8C|\u5B9E\u9A8C\u5BA4|\u5DE5\u5177|\u751F\u7269|experiment|lab|science|tool", 6],
  ["\u{1F52D}", "telescope", "\u671B\u8FDC\u955C", "\u5916\u661F\u4EBA|\u5929\u4F53|\u5929\u6587|\u5929\u6587\u5B66|contact|extraterrestrial|science|tool", 6],
  ["\u{1F4E1}", "satellite antenna", "\u536B\u661F\u5929\u7EBF", "\u4FE1\u53F7\u63A5\u6536|\u536B\u661F|\u536B\u661F\u63A5\u6536\u5929\u7EBF|\u536B\u661F\u789F\u5F62\u5929\u7EBF|aliens|antenna|contact|dish", 6],
  ["\u{1F489}", "syringe", "\u6CE8\u5C04\u5668", "\u533B\u5B66|\u533B\u751F|\u5DE5\u5177|\u6253\u9488|doctor|flu|medicine|needle", 6],
  ["\u{1FA78}", "drop of blood", "\u8840\u6EF4", "\u533B\u7597|\u6708\u7ECF|\u6D41\u8840|\u732E\u8840|bleed|blood|donation|drop", 6],
  ["\u{1F48A}", "pill", "\u836F\u4E38", "\u533B\u751F|\u5403\u836F|\u6CBB\u7597|\u751F\u75C5|doctor|drugs|medicated|medicine", 6],
  ["\u{1FA79}", "adhesive bandage", "\u521B\u53EF\u8D34", "ok\u7EF7|\u4F24\u53E3|\u53D7\u4F24|\u7EF7\u5E26|adhesive|bandage", 6],
  ["\u{1FA7C}", "crutch", "\u62D0\u6756", "\u53D7\u4F24|\u624B\u6756|\u6B8B\u75BE|\u6D3B\u52A8\u52A9\u884C\u7C7B\u8F85\u5177|aid|cane|disability|help", 6],
  ["\u{1FA7A}", "stethoscope", "\u542C\u8BCA\u5668", "\u533B\u751F|\u533B\u7597|\u5FC3\u810F|\u5FC3\u8DF3|doctor|heart|medicine", 6],
  ["\u{1FA7B}", "x-ray", "X\u5C04\u7EBF", "x \u5C04\u7EBF|\u533B\u751F|\u533B\u7597|\u9AA8\u67B6|bones|doctor|medical|skeleton", 6],
  ["\u{1F6AA}", "door", "\u95E8", "\u51FA\u5165\u53E3|\u524D\u95E8|\u540E\u95E8|\u5927\u95E8|back|closet|front", 6],
  ["\u{1F6D7}", "elevator", "\u7535\u68AF", "\u5347\u964D\u673A|\u53EF\u8FBE\u6027|accessibility|hoist|lift", 6],
  ["\u{1FA9E}", "mirror", "\u955C\u5B50", "\u5316\u5986|\u53CD\u5C04|\u53CD\u5C04\u955C|\u7AA5\u955C|makeup|reflection|reflector|speculum", 6],
  ["\u{1FA9F}", "window", "\u7A97\u6237", "\u5F00\u7A97|\u65B0\u9C9C\u7A7A\u6C14|\u666F\u8272|\u7A97\u53E3|air|frame|fresh|opening", 6],
  ["\u{1F6CF}\uFE0F", "bed", "\u5E8A", "\u5BBE\u9986|\u5E8A\u57AB|\u5E8A\u94FA|\u7761|hotel|sleep", 6],
  ["\u{1F6CB}\uFE0F", "couch and lamp", "\u6C99\u53D1\u548C\u706F", "\u5BB6|\u6C99\u53D1|\u706F|\u9605\u8BFB|couch|hotel|lamp", 6],
  ["\u{1FA91}", "chair", "\u6905\u5B50", "\u5750|\u5750\u4E0B|\u5EA7\u4F4D|\u6905\u80CC|seat|sit", 6],
  ["\u{1F6BD}", "toilet", "\u9A6C\u6876", "wc|\u536B\u751F\u95F4|\u5395\u6240|\u6D17\u624B\u95F4|bathroom", 6],
  ["\u{1FAA0}", "plunger", "\u6D3B\u585E", "\u4FBF\u4FBF|\u5438\u529B|\u640B\u5B50|\u6C34\u7BA1\u5DE5|cup|force|plumber|poop", 6],
  ["\u{1F6BF}", "shower", "\u6DCB\u6D74", "\u55B7\u5934|\u55B7\u6C34|\u6C34|\u6D17\u6FA1 \u82B1\u6D12|water", 6],
  ["\u{1F6C1}", "bathtub", "\u6D74\u7F38", "\u6C90\u6D74|\u6CE1\u6CAB\u6D74|\u6CE1\u6FA1|\u6D17\u6FA1|bath", 6],
  ["\u{1FAA4}", "mouse trap", "\u6355\u9F20\u5668", "\u5976\u916A|\u8001\u9F20\u5939|\u8BF1\u9975|\u9677\u8FDB|bait|cheese|lure|mouse", 6],
  ["\u{1FA92}", "razor", "\u5243\u987B\u5200", "\u5200|\u522E|\u522E\u5200|\u5243\u5200|sharp|shave", 6],
  ["\u{1F9F4}", "lotion bottle", "\u4E73\u6DB2\u74F6", "\u4E73\u6DB2|\u4FDD\u6E7F\u4E73\u6DB2|\u62A4\u80A4\u971C|\u6D17\u5242\u74F6|bottle|lotion|moisturizer|shampoo", 6],
  ["\u{1F9F7}", "safety pin", "\u5B89\u5168\u522B\u9488", "\u522B\u9488|\u6263\u9488|diaper|pin|punk|rock", 6],
  ["\u{1F9F9}", "broom", "\u626B\u5E1A", "\u5973\u5DEB|\u5DEB\u5A46|\u6253\u626B|\u626B\u5730|cleaning|sweeping|witch", 6],
  ["\u{1F9FA}", "basket", "\u7B50", "\u519C\u4F5C|\u6D17\u8863|\u79CD\u690D|\u7BEE\u5B50|farming|laundry|picnic", 6],
  ["\u{1F9FB}", "roll of paper", "\u5377\u7EB8", "\u536B\u751F\u7EB8|\u624B\u7EB8|\u7EB8\u5377|\u7EB8\u5DFE|paper|roll|toilet|towels", 6],
  ["\u{1FAA3}", "bucket", "\u6876", "\u5927\u6876|\u6728\u6876|\u6C34\u6876|\u7F38|cask|pail|vat", 6],
  ["\u{1F9FC}", "soap", "\u7682", "\u6740\u83CC|\u6CE1\u6CAB|\u6D17\u624B|\u6D17\u6FA1|bar|bathing|clean|cleaning", 6],
  ["\u{1FAE7}", "bubbles", "\u6C14\u6CE1", "\u6253\u55DD|\u6C34\u4E0B|\u6CE1\u6CE1|\u6E05\u6D01|bubble|burp|clean|floating", 6],
  ["\u{1FAA5}", "toothbrush", "\u7259\u5237", "\u5237|\u5237\u5B50|\u536B\u751F|\u60C5\u8282|bathroom|brush|clean|dental", 6],
  ["\u{1F9FD}", "sponge", "\u6D77\u7EF5", "\u5438\u6536|\u5438\u6C34|\u591A\u5B54|\u6D78\u6CE1|absorbing|cleaning|porous|soak", 6],
  ["\u{1F9EF}", "fire extinguisher", "\u706D\u706B\u5668", "\u538B\u5236|\u706B\u707E|\u706D\u706B|\u7184\u706D|extinguish|extinguisher|fire|quench", 6],
  ["\u{1F6D2}", "shopping cart", "\u8D2D\u7269\u8F66", "\u624B\u63A8\u8F66|\u8D2D\u7269|\u91C7\u8D2D|cart|shopping|trolley", 6],
  ["\u{1F6AC}", "cigarette", "\u9999\u70DF", "\u5377\u70DF|\u5438\u70DF|\u62BD\u70DF|\u70DF|smoking", 6],
  ["\u26B0\uFE0F", "coffin", "\u68FA\u6750", "\u57CB\u846C|\u6B7B\u4EA1|\u7075\u67E9|\u846C\u793C|dead|death|vampire", 6],
  ["\u{1FAA6}", "headstone", "\u5893\u7891", "\u516C\u5893|\u575F\u5893|\u5893\u56ED|\u5893\u5730|cemetery|dead|grave|graveyard", 6],
  ["\u26B1\uFE0F", "funeral urn", "\u9AA8\u7070\u7F38", "\u4E27\u793C|\u6B7B\u4EA1|\u74EE|\u7F38|ashes|death|funeral|urn", 6],
  ["\u{1F9FF}", "nazar amulet", "\u7EB3\u624E\u5C14\u62A4\u8EAB\u7B26", "\u5C0F\u88C5\u9970\u54C1|\u6076\u9B54\u4E4B\u773C|\u62A4\u8EAB\u7B26|\u73E0\u5B50|amulet|bead|blue|charm", 6],
  ["\u{1FAAC}", "hamsa", "\u6CD5\u8482\u739B\u4E4B\u624B", "\u4FDD\u62A4|\u597D\u8FD0|\u624B|\u624B\u638C|amulet|fatima|fortune|guide", 6],
  ["\u{1F5FF}", "moai", "\u6469\u57C3", "\u590D\u6D3B\u5C9B|\u590D\u6D3B\u8282\u5C9B|\u590D\u6D3B\u8282\u5C9B\u77F3\u50CF|\u6469\u827E|face|moyai|statue|stoneface", 6],
  ["\u{1FAA7}", "placard", "\u6807\u8BED\u724C", "\u544A\u793A|\u5E03\u544A|\u6807\u5FD7|\u6807\u724C|card|demonstration|notice|picket", 6],
  ["\u{1FAAA}", "identification card", "\u8EAB\u4EFD\u8BC1", "id|\u51ED\u8BC1|\u5B89\u5168|\u6267\u7167|card|credentials|document|id", 6],
  ["\u{1F3E7}", "ATM sign", "\u53D6\u6B3E\u673A", "atm|\u63D0\u6B3E\u673A|\u67DC\u5458\u673A|\u6807\u8BC6|atm|automated|bank|cash", 7],
  ["\u{1F6AE}", "litter in bin sign", "\u5012\u5783\u573E", "\u5783\u573E\u4E22\u5F03\u5904|\u5783\u573E\u5165\u7BD3|\u5783\u573E\u6876|bin|litter|litterbin|sign", 7],
  ["\u{1F6B0}", "potable water", "\u996E\u7528\u6C34", "\u53EF\u4EE5\u559D\u7684|\u559D\u6C34|\u63A5\u6C34|\u6C34|drinking|potable|water", 7],
  ["\u267F", "wheelchair symbol", "\u8F6E\u6905\u6807\u8BC6", "\u65E0\u969C\u788D|\u6B8B\u75BE|\u6B8B\u969C|\u8F6E\u6905|access|handicap|symbol|wheelchair", 7],
  ["\u{1F6B9}", "men\u2019s room", "\u7537\u5395", "\u536B\u751F\u95F4|\u5395\u6240|\u6D17\u624B\u95F4|\u7537\u58EB|bathroom|lavatory|man|men\u2019s", 7],
  ["\u{1F6BA}", "women\u2019s room", "\u5973\u5395", "\u536B\u751F\u95F4|\u5395\u6240|\u5973\u58EB|\u6D17\u624B\u95F4|bathroom|lavatory|restroom|room", 7],
  ["\u{1F6BB}", "restroom", "\u536B\u751F\u95F4", "wc|\u5395\u6240|\u6D17\u624B\u95F4|bathroom|lavatory|toilet|wc", 7],
  ["\u{1F6BC}", "baby symbol", "\u5B9D\u5B9D", "\u5A74\u513F|\u6362\u5C3F\u7247|\u6BCD\u5A74\u5BA4|baby|changing|symbol", 7],
  ["\u{1F6BE}", "water closet", "\u5395\u6240", "\u536B\u751F\u95F4|\u6D17\u624B\u95F4|\u76E5\u6D17\u5BA4|bathroom|closet|lavatory|restroom", 7],
  ["\u{1F6C2}", "passport control", "\u62A4\u7167\u68C0\u67E5", "\u5B89\u68C0|\u62A4\u7167|\u68C0\u67E5|\u901A\u884C\u8BC1|control|passport", 7],
  ["\u{1F6C3}", "customs", "\u6D77\u5173", "\u884C\u674E\u6253\u5305|packing", 7],
  ["\u{1F6C4}", "baggage claim", "\u63D0\u53D6\u884C\u674E", "\u63D0\u53D6|\u65C5\u884C|\u884C\u674E|arrived|baggage|bags|case", 7],
  ["\u{1F6C5}", "left luggage", "\u5BC4\u5B58\u884C\u674E", "\u50A8\u7269\u67DC|\u5BC4\u5B58|\u884C\u674E|baggage|case|left|locker", 7],
  ["\u26A0\uFE0F", "warning", "\u8B66\u544A", "\u5C0F\u5FC3|caution", 7],
  ["\u{1F6B8}", "children crossing", "\u513F\u7AE5\u8FC7\u8857", "\u4EA4\u901A|\u5B89\u5168|\u6307\u793A\u724C|\u884C\u4EBA|child|children|crossing|pedestrian", 7],
  ["\u26D4", "no entry", "\u7981\u6B62\u901A\u884C", "\u4EA4\u901A|\u7981\u6B62\u5165\u5185|\u7981\u884C|\u8BF7\u52FF\u5165\u5185|do|entry|fail|forbidden", 7],
  ["\u{1F6AB}", "prohibited", "\u7981\u6B62", "\u4E0D\u51C6|\u4E0D\u8BB8|\u4E25\u7981|\u7981\u5165|entry|forbidden|no|not", 7],
  ["\u{1F6B3}", "no bicycles", "\u7981\u6B62\u81EA\u884C\u8F66", "\u4E25\u7981|\u4EA4\u901A|\u7981\u6B62|\u7981\u884C\u81EA\u884C\u8F66|bicycle|bicycles|bike|forbidden", 7],
  ["\u{1F6AD}", "no smoking", "\u7981\u6B62\u5438\u70DF", "\u4E25\u7981|\u5438\u70DF|\u62BD\u70DF|\u7981\u6B62|forbidden|no|not|prohibited", 7],
  ["\u{1F6AF}", "no littering", "\u7981\u6B62\u4E71\u6254\u5783\u573E", "\u4E25\u7981|\u5783\u573E|\u7981\u4E22\u5783\u573E|\u7981\u6B62|forbidden|litter|littering|no", 7],
  ["\u{1F6B1}", "non-potable water", "\u975E\u996E\u7528\u6C34", "\u6C34|\u7981\u6B62\u7528\u6C34|\u8282\u7EA6\u7528\u6C34|\u975E\u76F4\u996E\u6C34|dry|non-drinking|non-potable|prohibited", 7],
  ["\u{1F6B7}", "no pedestrians", "\u7981\u6B62\u884C\u4EBA\u901A\u884C", "\u4E25\u7981|\u884C\u4EBA|forbidden|no|not|pedestrian", 7],
  ["\u{1F4F5}", "no mobile phones", "\u7981\u6B62\u4F7F\u7528\u624B\u673A", "\u4E25\u7981|\u624B\u673A|\u7535\u8BDD|\u7981\u6B62|cell|forbidden|mobile|no", 7],
  ["\u{1F51E}", "no one under eighteen", "18\u7981", "\u513F\u7AE5\u4E0D\u5B9C|\u672A\u6210\u5E74\u4EBA\u4E0D\u5B9C|\u7981\u6B62|18|age|eighteen|forbidden", 7],
  ["\u2622\uFE0F", "radioactive", "\u8F90\u5C04", "\u653E\u5C04\u6027|\u6807\u8BC6|sign", 7],
  ["\u2623\uFE0F", "biohazard", "\u751F\u7269\u5371\u5BB3", "\u52A8\u7269|\u5F53\u5FC3\u611F\u67D3|\u6C61\u67D3|\u8B66\u544A|sign", 7],
  ["\u2B06\uFE0F", "up arrow", "\u5411\u4E0A\u7BAD\u5934", "\u4E0A|\u5317|\u65B9\u4F4D|\u65B9\u5411|arrow|cardinal|direction|north", 7],
  ["\u2197\uFE0F", "up-right arrow", "\u53F3\u4E0A\u7BAD\u5934", "\u4E1C\u5317|\u53F3\u4E0A|\u65B9\u4F4D|\u65B9\u5411|arrow|direction|intercardinal|northeast", 7],
  ["\u27A1\uFE0F", "right arrow", "\u5411\u53F3\u7BAD\u5934", "\u4E1C|\u53F3|\u65B9\u5411|\u6807\u8BC6|arrow|cardinal|direction|east", 7],
  ["\u2198\uFE0F", "down-right arrow", "\u53F3\u4E0B\u7BAD\u5934", "\u4E1C\u5357|\u53F3\u4E0B|\u65B9\u4F4D|\u65B9\u5411|arrow|direction|down-right|intercardinal", 7],
  ["\u2B07\uFE0F", "down arrow", "\u5411\u4E0B\u7BAD\u5934", "\u5357|\u5411\u4E0B|\u57FA\u672C|\u65B9\u4F4D|arrow|cardinal|direction|down", 7],
  ["\u2199\uFE0F", "down-left arrow", "\u5DE6\u4E0B\u7BAD\u5934", "\u5DE6\u4E0B|\u65B9\u5411|\u6807\u8BC6|\u7BAD\u5934|arrow|direction|down-left|intercardinal", 7],
  ["\u2B05\uFE0F", "left arrow", "\u5411\u5DE6\u7BAD\u5934", "\u5DE6|\u65B9\u5411|\u6807\u8BC6|\u7BAD\u5934|arrow|cardinal|direction|left", 7],
  ["\u2196\uFE0F", "up-left arrow", "\u5DE6\u4E0A\u7BAD\u5934", "\u5DE6\u4E0A|\u65B9\u5411|\u6807\u8BC6|\u7BAD\u5934|arrow|direction|intercardinal|northwest", 7],
  ["\u2195\uFE0F", "up-down arrow", "\u4E0A\u4E0B\u7BAD\u5934", "\u4E0A\u4E0B|\u7BAD\u5934|arrow|up-down", 7],
  ["\u2194\uFE0F", "left-right arrow", "\u5DE6\u53F3\u7BAD\u5934", "\u5DE6\u53F3|\u7BAD\u5934|arrow|left-right", 7],
  ["\u21A9\uFE0F", "right arrow curving left", "\u53F3\u8F6C\u5F2F\u7BAD\u5934", "\u53F3\u8F6C\u5F2F|\u5411\u5DE6\u5F2F\u66F2\u7684\u53F3\u7BAD\u5934|\u7BAD\u5934|arrow|curving|left|right", 7],
  ["\u21AA\uFE0F", "left arrow curving right", "\u5DE6\u8F6C\u5F2F\u7BAD\u5934", "\u5411\u53F3\u5F2F\u66F2\u7684\u5DE6\u7BAD\u5934|\u5DE6\u8F6C\u5F2F|\u7BAD\u5934|arrow|curving|left|right", 7],
  ["\u2934\uFE0F", "right arrow curving up", "\u53F3\u4E0A\u5F2F\u7BAD\u5934", "\u53F3\u4E0A\u5F2F|\u5411\u4E0A\u5F2F\u66F2\u7684\u53F3\u7BAD\u5934|\u7BAD\u5934|arrow|curving|right|up", 7],
  ["\u2935\uFE0F", "right arrow curving down", "\u53F3\u4E0B\u5F2F\u7BAD\u5934", "\u53F3\u4E0B\u5F2F|\u5411\u4E0B\u5F2F\u66F2\u7684\u53F3\u7BAD\u5934|\u7BAD\u5934|arrow|curving|down|right", 7],
  ["\u{1F503}", "clockwise vertical arrows", "\u987A\u65F6\u9488\u5782\u76F4\u7BAD\u5934", "\u5237\u65B0|\u5782\u76F4\u987A\u65F6\u9488\u7BAD\u5934|\u65B9\u5411|\u6807\u8BC6|arrow|arrows|clockwise|refresh", 7],
  ["\u{1F504}", "counterclockwise arrows button", "\u9006\u65F6\u9488\u7BAD\u5934\u6309\u94AE", "\u5012\u8F6C|\u518D\u6B21|\u5237\u65B0|\u7BAD\u5934|again|anticlockwise|arrow|arrows", 7],
  ["\u{1F519}", "BACK arrow", "\u8FD4\u56DE\u7BAD\u5934", "\u56DE\u9000|\u7BAD\u5934|\u8FD4\u56DE|arrow|back", 7],
  ["\u{1F51A}", "END arrow", "\u7ED3\u675F\u7BAD\u5934", "\u7BAD\u5934|\u7EC8\u70B9|\u7ED3\u675F|arrow|end", 7],
  ["\u{1F51B}", "ON! arrow", "ON! \u7BAD\u5934", "on|\u5F00\u59CB|\u6807\u8BC6|\u7BAD\u5934|arrow|mark|on!", 7],
  ["\u{1F51C}", "SOON arrow", "SOON \u7BAD\u5934", "\u5728\u8DEF\u4E0A|\u7ACB\u523B\u56DE\u6765|\u7BAD\u5934|\u9A6C\u4E0A|arrow|brb|omw|soon", 7],
  ["\u{1F51D}", "TOP arrow", "\u7F6E\u9876", "\u5411\u4E0A|\u6807\u8BC6|\u9876|arrow|homie|top|up", 7],
  ["\u{1F6D0}", "place of worship", "\u5B97\u6559\u573A\u6240", "\u5730\u70B9|\u5B97\u6559|\u5D07\u62DC|\u656C\u795E|place|pray|religion|worship", 7],
  ["\u269B\uFE0F", "atom symbol", "\u539F\u5B50\u7B26\u53F7", "\u539F\u5B50|\u65E0\u795E\u8BBA|\u7269\u8D28|atheist|atom|symbol", 7],
  ["\u{1F549}\uFE0F", "om", "\u5965\u59C6", "\u5370\u5EA6|\u5370\u5EA6\u6559|\u5535|\u5B97\u6559|hindu|religion", 7],
  ["\u2721\uFE0F", "star of David", "\u516D\u8292\u661F", "\u516D\u89D2\u661F|\u5927\u536B\u4E4B\u661F|\u5927\u536B\u661F|\u5B97\u6559|david|jew|jewish|judaism", 7],
  ["\u2638\uFE0F", "wheel of dharma", "\u6CD5\u8F6E", "\u4F5B|\u5B97\u6559|\u8235|\u8F6E\u76D8|buddhist|dharma|religion|wheel", 7],
  ["\u262F\uFE0F", "yin yang", "\u9634\u9633", "\u592A\u6781|\u5B97\u6559|\u9053|\u9053\u6559|difficult|lives|religion|tao", 7],
  ["\u271D\uFE0F", "latin cross", "\u5341\u5B57\u67B6", "\u57FA\u7763|\u5929\u4E3B\u6559|\u5B97\u6559|christ|christian|cross|latin", 7],
  ["\u2626\uFE0F", "orthodox cross", "\u4E1C\u6B63\u6559\u5341\u5B57\u67B6", "\u4E1C\u6B63\u6559|\u5341\u5B57\u67B6|\u57FA\u7763|\u5B97\u6559|christian|cross|orthodox|religion", 7],
  ["\u262A\uFE0F", "star and crescent", "\u661F\u6708", "\u4F0A\u65AF\u5170|\u5B97\u6559|\u658B\u6212\u6708|\u7A46\u65AF\u6797|crescent|islam|muslim|ramadan", 7],
  ["\u262E\uFE0F", "peace symbol", "\u548C\u5E73\u7B26\u53F7", "\u548C\u5E73|healing|peace|peaceful|symbol", 7],
  ["\u{1F54E}", "menorah", "\u70DB\u53F0", "\u5149\u660E\u8282|\u5B97\u6559|\u706F\u53F0|\u72B9\u592A|candelabrum|candlestick|hanukkah|jewish", 7],
  ["\u{1F52F}", "dotted six-pointed star", "\u5E26\u4E2D\u95F4\u70B9\u7684\u516D\u8292\u661F", "\u516D\u8292\u661F|\u516D\u8292\u661F\u52A0\u5706\u70B9|\u516D\u89D2\u661F|\u547D\u8FD0|dotted|fortune|jewish|judaism", 7],
  ["\u{1FAAF}", "khanda", "\u574E\u8FBE", "\u4FE1\u4EF0|\u5361\u5C14\u8428|\u5584\u4E1A\u4E0E\u4F69\u5251\u5F97\u80DC|\u574E\u8FBE\u957F\u5251|deg|fateh|khalsa|religion", 7],
  ["\u2648", "Aries", "\u767D\u7F8A\u5EA7", "\u516C\u7F8A|\u661F\u5EA7|\u7261\u7F8A\u5EA7|horoscope|ram|zodiac", 7],
  ["\u2649", "Taurus", "\u91D1\u725B\u5EA7", "\u516C\u725B|\u661F\u5EA7|\u91D1\u725B|bull|horoscope|ox|zodiac", 7],
  ["\u264A", "Gemini", "\u53CC\u5B50\u5EA7", "\u53CC\u5B50|\u5B6A\u751F\u5B50|\u661F\u5EA7|horoscope|twins|zodiac", 7],
  ["\u264B", "Cancer", "\u5DE8\u87F9\u5EA7", "\u5DE8\u87F9|\u661F\u5EA7|\u8783\u87F9|crab|horoscope|zodiac", 7],
  ["\u264C", "Leo", "\u72EE\u5B50\u5EA7", "\u661F\u5EA7|\u96C4\u72EE|horoscope|lion|zodiac", 7],
  ["\u264D", "Virgo", "\u5904\u5973\u5EA7", "\u5BA4\u5973\u5EA7|\u661F\u5EA7|\u9EC4\u9053\u5341\u4E8C\u5BAB|horoscope|zodiac", 7],
  ["\u264E", "Libra", "\u5929\u79E4\u5EA7", "\u5E73\u8861|\u661F\u5EA7|\u6B63\u4E49|balance|horoscope|justice|scales", 7],
  ["\u264F", "Scorpio", "\u5929\u874E\u5EA7", "\u5929\u874E|\u661F\u5EA7|\u874E\u5B50|horoscope|scorpion|scorpius|zodiac", 7],
  ["\u2650", "Sagittarius", "\u5C04\u624B\u5EA7", "\u4EBA\u9A6C\u5EA7|\u5C04\u624B|\u5F13\u7BAD\u624B|\u661F\u5EA7|archer|horoscope|zodiac", 7],
  ["\u2651", "Capricorn", "\u6469\u7FAF\u5EA7", "\u5929\u5BAB\u56FE|\u5C71\u7F8A|\u6469\u7FAF|\u661F\u5EA7|goat|horoscope|zodiac", 7],
  ["\u2652", "Aquarius", "\u6C34\u74F6\u5EA7", "\u661F\u5EA7|\u6C34|bearer|horoscope|water|zodiac", 7],
  ["\u2653", "Pisces", "\u53CC\u9C7C\u5EA7", "\u53CC\u9C7C|\u661F\u5EA7|\u9C7C|fish|horoscope|zodiac", 7],
  ["\u26CE", "Ophiuchus", "\u86C7\u592B\u5EA7", "\u661F\u5EA7|\u86C7|\u86C7\u592B|bearer|serpent|snake|zodiac", 7],
  ["\u{1F500}", "shuffle tracks button", "\u968F\u673A\u64AD\u653E\u97F3\u8F68\u6309\u94AE", "\u4EA4\u53C9|\u6253\u4E71|\u968F\u673A|\u968F\u673A\u64AD\u653E|arrow|button|crossed|shuffle", 7],
  ["\u{1F501}", "repeat button", "\u91CD\u590D\u6309\u94AE", "\u5FAA\u73AF|\u5FAA\u73AF\u64AD\u653E|\u7BAD\u5934|\u987A\u65F6\u9488|arrow|button|clockwise|repeat", 7],
  ["\u{1F502}", "repeat single button", "\u91CD\u590D\u4E00\u6B21\u6309\u94AE", "\u5355\u66F2\u5FAA\u73AF|\u5FAA\u73AF|\u7BAD\u5934|\u987A\u65F6\u9488|arrow|button|clockwise|once", 7],
  ["\u25B6\uFE0F", "play button", "\u64AD\u653E\u6309\u94AE", "\u4E09\u89D2|\u53F3|\u5411\u53F3|\u64AD\u653E|arrow|button|play|right", 7],
  ["\u23E9", "fast-forward button", "\u5FEB\u8FDB\u6309\u94AE", "\u53CC\u7BAD\u5934|\u5411\u524D|\u5FEB\u8FDB|\u5FEB\u901F|arrow|button|double|fast", 7],
  ["\u23ED\uFE0F", "next track button", "\u4E0B\u4E00\u4E2A\u97F3\u8F68\u6309\u94AE", "\u4E09\u89D2|\u4E0B\u4E00\u4E2A|\u4E0B\u4E00\u66F2|\u4E0B\u4E00\u9996|arrow|button|next|scene", 7],
  ["\u23EF\uFE0F", "play or pause button", "\u64AD\u653E\u6216\u6682\u505C\u6309\u94AE", "\u4E09\u89D2|\u5411\u53F3|\u64AD\u653E|\u64AD\u653E\u6216\u6682\u505C|arrow|button|pause|play", 7],
  ["\u25C0\uFE0F", "reverse button", "\u5012\u9000\u6309\u94AE", "\u4E09\u89D2|\u5012\u8F6C|\u540E\u9000|\u5411\u5DE6|arrow|button|left|reverse", 7],
  ["\u23EA", "fast reverse button", "\u5FEB\u9000\u6309\u94AE", "\u5012\u56DE|\u53CC\u7BAD\u5934|\u5FEB\u9000|\u5FEB\u901F\u5012\u5E26|arrow|button|double|fast", 7],
  ["\u23EE\uFE0F", "last track button", "\u4E0A\u4E00\u4E2A\u97F3\u8F68\u6309\u94AE", "\u4E09\u89D2|\u4E0A\u4E00\u4E2A|\u4E0A\u4E00\u66F2|\u4E0A\u4E00\u9996|arrow|button|last|previous", 7],
  ["\u{1F53C}", "upwards button", "\u5411\u4E0A\u4E09\u89D2\u5F62\u6309\u94AE", "\u4E0A|\u5411\u4E0A|\u5411\u4E0A\u6309\u94AE|\u5F80\u4E0A|arrow|button|red|up", 7],
  ["\u23EB", "fast up button", "\u5FEB\u901F\u4E0A\u5347\u6309\u94AE", "\u4E0A|\u53CC\u7BAD\u5934|\u5411\u4E0A|\u5FEB\u901F\u5411\u4E0A|arrow|button|double|fast", 7],
  ["\u{1F53D}", "downwards button", "\u5411\u4E0B\u4E09\u89D2\u5F62\u6309\u94AE", "\u4E0B|\u5411\u4E0B|\u5411\u4E0B\u6309\u94AE|\u5F80\u4E0B|arrow|button|down|downwards", 7],
  ["\u23EC", "fast down button", "\u5FEB\u901F\u4E0B\u964D\u6309\u94AE", "\u4E0B|\u53CC\u7BAD\u5934|\u5411\u4E0B|\u5FEB\u901F\u5411\u4E0B|arrow|button|double|down", 7],
  ["\u23F8\uFE0F", "pause button", "\u6682\u505C\u6309\u94AE", "\u505C\u6B62|\u53CC\u6761\u5F62|\u6682\u505C|bar|button|double|pause", 7],
  ["\u23F9\uFE0F", "stop button", "\u505C\u6B62\u6309\u94AE", "\u505C\u6B62|\u65B9\u5F62|\u6B63\u65B9\u5F62|\u7EC8\u6B62|button|square|stop", 7],
  ["\u23FA\uFE0F", "record button", "\u5F55\u5236\u6309\u94AE", "\u5236\u4F5C|\u5706|\u5F55\u50CF|\u5F55\u5236|button|circle|record", 7],
  ["\u23CF\uFE0F", "eject button", "\u63A8\u51FA\u6309\u94AE", "\u5411\u4E0A\u4E09\u89D2|\u5F39\u51FA|button|eject", 7],
  ["\u{1F3A6}", "cinema", "\u7535\u5F71\u9662", "\u5267\u9662|\u573A\u6240|\u5F71\u7247|\u6444\u5F71\u673A|camera|film|movie", 7],
  ["\u{1F505}", "dim button", "\u4F4E\u4EAE\u5EA6\u6309\u94AE", "\u4EAE\u5EA6|\u4F4E|\u4F4E\u4EAE\u5EA6|\u660F\u6697|brightness|button|dim|low", 7],
  ["\u{1F506}", "bright button", "\u9AD8\u4EAE\u5EA6\u6309\u94AE", "\u4EAE|\u4EAE\u5EA6|\u592A\u9633|\u660E\u4EAE|bright|brightness|button|light", 7],
  ["\u{1F4F6}", "antenna bars", "\u4FE1\u53F7\u5F3A\u5EA6\u6761", "\u4FE1\u53F7|\u5929\u7EBF|\u5F3A\u5EA6|\u624B\u673A|antenna|bar|bars|cell", 7],
  ["\u{1F6DC}", "wireless", "\u65E0\u7EBF", "wi-fi|wlan|\u4E92\u8054\u7F51|\u5BBD\u5E26|broadband|computer|connectivity|hotspot", 7],
  ["\u{1F4F3}", "vibration mode", "\u632F\u52A8\u6A21\u5F0F", "\u624B\u673A|\u632F\u52A8|\u9707\u52A8|cell|communication|mobile|mode", 7],
  ["\u{1F4F4}", "mobile phone off", "\u624B\u673A\u5173\u673A", "\u5173\u673A|\u5173\u95ED|\u5173\u95ED\u624B\u673A|\u624B\u673A|cell|mobile|off|phone", 7],
  ["\u2640\uFE0F", "female sign", "\u5973\u6027\u7B26\u53F7", "\u7B26\u53F7|\u96CC\u6027|female|sign|woman", 7],
  ["\u2642\uFE0F", "male sign", "\u7537\u6027\u7B26\u53F7", "\u7B26\u53F7|\u96C4\u6027|male|man|sign", 7],
  ["\u26A7\uFE0F", "transgender symbol", "\u8DE8\u6027\u522B\u7B26\u53F7", "\u8DE8\u6027\u522B|symbol|transgender", 7],
  ["\u2716\uFE0F", "multiply", "\u4E58", "x|\u4E58\u53F7|\u53D6\u6D88|\u76F8\u4E58|\xD7|cancel|multiplication|sign", 7],
  ["\u2795", "plus", "\u52A0", "\u52A0\u53F7|\u5341\u5B57|\u6570\u5B66|\u76F8\u52A0|+", 7],
  ["\u2796", "minus", "\u51CF", "\u51CF\u53F7|\u6570\u5B66|\u6A2A\u7EBF|\u7B26\u53F7|-|\u2212|heavy|math", 7],
  ["\u2797", "divide", "\u9664", "\u6570\u5B66|\u76F8\u9664|\u7B26\u53F7|\u9664\u53F7|\xF7|division|heavy|math", 7],
  ["\u{1F7F0}", "heavy equals sign", "\u7C97\u7B49\u53F7", "\u56DE\u7B54|\u5E73\u7B49|\u6570\u5B66|\u76F8\u7B49|answer|equal|equality|equals", 7],
  ["\u267E\uFE0F", "infinity", "\u65E0\u7A77\u5927", "\u5B87\u5B99|\u65E0\u5C3D|\u6781\u5927|forever|unbounded|universal", 7],
  ["\u203C\uFE0F", "double exclamation mark", "\u53CC\u611F\u53F9\u53F7", "\uFF01|\uFF01\uFF01|\u4E24\u4E2A|\u53CC\u53F9\u53F7|!|!!|bangbang|double", 7],
  ["\u2049\uFE0F", "exclamation question mark", "\u611F\u53F9\u7591\u95EE\u53F7", "\uFF01|\uFF01\uFF1F|\uFF1F|\u53F9\u53F7|!|!?|?|exclamation", 7],
  ["\u2753", "red question mark", "\u7EA2\u8272\u95EE\u53F7", "\u4E3A\u4EC0\u4E48|\u6807\u70B9|\u6807\u70B9\u7B26\u53F7|\u7591\u95EE|?|mark|punctuation|question", 7],
  ["\u2754", "white question mark", "\u767D\u8272\u95EE\u53F7", "\uFF1F|\u4E3A\u4EC0\u4E48|\u6807\u70B9\u7B26\u53F7|\u7A7A\u5FC3|?|mark|outlined|punctuation", 7],
  ["\u2755", "white exclamation mark", "\u767D\u8272\u611F\u53F9\u53F7", "\uFF01|\u53F9\u53F7|\u5403\u60CA|\u6807\u70B9\u7B26\u53F7|!|exclamation|mark|outlined", 7],
  ["\u2757", "red exclamation mark", "\u7EA2\u8272\u611F\u53F9\u53F7", "\uFF01|\u53F9\u53F7|\u5403\u60CA|\u60CA\u8BB6|!|exclamation|mark|punctuation", 7],
  ["\u3030\uFE0F", "wavy dash", "\u6CE2\u6D6A\u578B\u7834\u6298\u53F7", "\u6807\u70B9\u7B26\u53F7|\u6CE2\u6D6A\u7EBF|\u6D6A\u82B1|\u8C61\u58F0\u53F7|dash|punctuation|wavy", 7],
  ["\u{1F4B1}", "currency exchange", "\u8D27\u5E01\u5151\u6362", "\u5151\u6362|\u5916\u6C47|\u6362\u6C47|\u6C47\u7387|bank|currency|exchange|money", 7],
  ["\u{1F4B2}", "heavy dollar sign", "\u7C97\u7F8E\u5143\u7B26\u53F7", "\u73B0\u91D1|\u7F8E\u5143|\u7F8E\u5143\u7B26\u53F7|\u7F8E\u5200|billion|cash|charge|currency", 7],
  ["\u2695\uFE0F", "medical symbol", "\u533B\u7597\u6807\u5FD7", "\u533B\u5B66|\u533B\u7597|\u86C7\u6756|\u963F\u65AF\u514B\u52D2\u5E87\u4FC4\u65AF|aesculapius|medical|medicine|staff", 7],
  ["\u267B\uFE0F", "recycling symbol", "\u56DE\u6536\u6807\u5FD7", "\u518D\u5229\u7528|\u518D\u751F|\u56DE\u6536|\u5FAA\u73AF|recycle|recycling|symbol", 7],
  ["\u269C\uFE0F", "fleur-de-lis", "\u767E\u5408\u82B1\u9970", "\u9E22\u5C3E\u82B1|knights", 7],
  ["\u{1F531}", "trident emblem", "\u4E09\u53C9\u621F\u5FBD\u7AE0", "\u4E09\u53C9\u621F|\u5DE5\u5177|\u6CE2\u585E\u51AC|\u8239|anchor|emblem|poseidon|ship", 7],
  ["\u{1F4DB}", "name badge", "\u59D3\u540D\u724C", "\u540D\u724C|\u5FBD\u7AE0|\u80F8\u724C|\u8BC1\u7AE0|badge|name", 7],
  ["\u{1F530}", "Japanese symbol for beginner", "\u65E5\u672C\u65B0\u624B\u9A7E\u9A76\u6807\u5FD7", "v \u578B\u81C2\u7AE0|v\u5F62\u56FE\u6848|\u4EBA\u5B57\u5F62\u56FE\u8BB0|\u519B\u8B66|beginner|chevron|green|japanese", 7],
  ["\u2B55", "hollow red circle", "\u7EA2\u8272\u7A7A\u5FC3\u5706\u5708", "0|o\u5F62|\u5706\u5708|\u5927|circle|heavy|hollow|large", 7],
  ["\u2705", "check mark button", "\u52FE\u53F7\u6309\u94AE", "\u52FE|\u52FE\u53F7|\u5B8C\u6210|\u6253\u52FE|\u2713|button|check|checked", 7],
  ["\u2611\uFE0F", "check box with check", "\u52FE\u9009\u6846", "\u505A\u597D|\u52FE\u53F7|\u52FE\u9009|\u590D\u9009\u6846|\u2713|ballot|box|check", 7],
  ["\u2714\uFE0F", "check mark", "\u52FE\u53F7", "\u5BF9\u52FE|\u6253\u52FE|\u6B63\u786E|\u7B26\u53F7|\u2713|check|checked|checkmark", 7],
  ["\u274C", "cross mark", "\u53C9\u53F7", "x|\u4E58|\u4EA4\u53C9|\u53D6\u6D88|\xD7|cancel|cross|mark", 7],
  ["\u274E", "cross mark button", "\u53C9\u53F7\u6309\u94AE", "\u4E58|\u4E58\u53F7|\u53C9|\u53D6\u6D88|\xD7|button|cross|mark", 7],
  ["\u27B0", "curly loop", "\u5377\u66F2\u73AF", "\u5355\u73AF|\u65E5\u672C\u5355\u73AF\u6807\u5FD7|\u6807\u5FD7|curl|curly|loop", 7],
  ["\u27BF", "double curly loop", "\u53CC\u5377\u66F2\u73AF", "\u514D\u8D39\u7535\u8BDD|\u53CC\u73AF|\u65E5\u672C\u514D\u8D39\u7535\u8BDD\u6807\u5FD7|\u6807\u5FD7|curl|curly|double|loop", 7],
  ["\u303D\uFE0F", "part alternation mark", "\u5EB5\u70B9", "\u5F00\u59CB\u6B4C\u5531|\u6B4C\u8BB0\u53F7|\u7B26\u53F7|alternation|mark|part", 7],
  ["\u2733\uFE0F", "eight-spoked asterisk", "\u516B\u8F6E\u8F90\u661F\u53F7", "\u516B\u8292\u661F|\u661F\u53F7|*|asterisk|eight-spoked", 7],
  ["\u2734\uFE0F", "eight-pointed star", "\u516B\u89D2\u661F", "\u661F|\u7B26\u53F7|*|eight-pointed|star", 7],
  ["\u2747\uFE0F", "sparkle", "\u706B\u82B1", "\u70DF\u706B|\u95EA\u5149|\u95EA\u8000|*", 7],
  ["\xA9\uFE0F", "copyright", "\u7248\u6743", "c", 7],
  ["\xAE\uFE0F", "registered", "\u6CE8\u518C", "\u6CE8\u518C\u6807\u8BB0|r", 7],
  ["\u2122\uFE0F", "trade mark", "\u5546\u6807", "\u4EA7\u54C1|\u6807\u5FD7|mark|tm|trade|trademark", 7],
  ["\u{1FADF}", "splatter", "\u6CFC\u6E85", "\u55B7\u6D12|\u6C61\u6E0D|\u6CB9\u6F06|\u6EA2\u51FA|drip|holi|ink|liquid", 7],
  ["#\uFE0F\u20E3", "keycap: #", "keycap: #", "", 7],
  ["*\uFE0F\u20E3", "keycap: *", "keycap: *", "", 7],
  ["0\uFE0F\u20E3", "keycap: 0", "\u6309\u952E: 0", "0|\u6309\u952E|0|keycap|zero", 7],
  ["1\uFE0F\u20E3", "keycap: 1", "\u6309\u952E: 1", "1|\u4E00|\u6309\u952E|1|keycap|one", 7],
  ["2\uFE0F\u20E3", "keycap: 2", "\u6309\u952E: 2", "2|\u4E8C|\u6309\u952E|2|keycap|two", 7],
  ["3\uFE0F\u20E3", "keycap: 3", "\u6309\u952E: 3", "3|\u4E09|\u6309\u952E|3|keycap|three", 7],
  ["4\uFE0F\u20E3", "keycap: 4", "\u6309\u952E: 4", "4|\u56DB|\u6309\u952E|4|four|keycap", 7],
  ["5\uFE0F\u20E3", "keycap: 5", "\u6309\u952E: 5", "5|\u4E94|\u6309\u952E|5|five|keycap", 7],
  ["6\uFE0F\u20E3", "keycap: 6", "\u6309\u952E: 6", "6|\u516D|\u6309\u952E|6|keycap|six", 7],
  ["7\uFE0F\u20E3", "keycap: 7", "\u6309\u952E: 7", "7|\u4E03|\u6309\u952E|7|keycap|seven", 7],
  ["8\uFE0F\u20E3", "keycap: 8", "\u6309\u952E: 8", "8|\u516B|\u6309\u952E|8|eight|keycap", 7],
  ["9\uFE0F\u20E3", "keycap: 9", "\u6309\u952E: 9", "9|\u4E5D|\u6309\u952E|9|keycap|nine", 7],
  ["\u{1F51F}", "keycap: 10", "keycap: 10", "", 7],
  ["\u{1F520}", "input latin uppercase", "\u8F93\u5165\u5927\u5199\u62C9\u4E01\u5B57\u6BCD", "abcd|\u5927\u5199\u5B57\u6BCD|\u5927\u5199\u5B57\u6BCD\u952E|\u5B57\u6BCD|abcd|input|latin|letters", 7],
  ["\u{1F521}", "input latin lowercase", "\u8F93\u5165\u5C0F\u5199\u62C9\u4E01\u5B57\u6BCD", "abcd|\u5C0F\u5199\u5B57\u6BCD|\u5C0F\u5199\u5B57\u6BCD\u952E|\u6253\u5B57|abcd|input|latin|letters", 7],
  ["\u{1F522}", "input numbers", "\u8F93\u5165\u6570\u5B57", "1234|\u6253\u5B57|\u6570\u5B57|1234|input|numbers", 7],
  ["\u{1F523}", "input symbols", "\u8F93\u5165\u7B26\u53F7", "\u5B57\u7B26|\u6253\u5B57|\u7B26\u53F7|&|%|\u266A|\u3012", 7],
  ["\u{1F524}", "input latin letters", "\u8F93\u5165\u62C9\u4E01\u5B57\u6BCD", "abc|\u5B57\u6BCD|\u6253\u5B57|\u62C9\u4E01\u5B57\u6BCD|abc|alphabet|input|latin", 7],
  ["\u{1F170}\uFE0F", "A button (blood type)", "A\u578B\u8840", "a|\u5B57\u6BCDa|\u6309\u94AE|\u8840\u578B|blood|button|type", 7],
  ["\u{1F18E}", "AB button (blood type)", "AB\u578B\u8840", "ab|\u5B57\u6BCDab|\u6309\u94AE|\u8840\u578B|ab|blood|button|type", 7],
  ["\u{1F171}\uFE0F", "B button (blood type)", "B\u578B\u8840", "b|\u6309\u94AE|\u8840\u578B|\u8840\u6DB2|b|blood|button|type", 7],
  ["\u{1F191}", "CL button", "CL\u6309\u94AE", "cl|\u624B\u673A|\u6E05\u7406|\u6E05\u9664|button|cl", 7],
  ["\u{1F192}", "COOL button", "cool\u6309\u94AE", "cool|\u6309\u952E|\u9177|button|cool", 7],
  ["\u{1F193}", "FREE button", "\u514D\u8D39\u6309\u94AE", "free|\u4E0D\u6536\u8D39|\u514D\u8D39|\u6309\u94AE|button|free", 7],
  ["\u2139\uFE0F", "information", "\u4FE1\u606F", "\u4FE1\u606F\u4E2D\u5FC3|\u67E5\u8BE2|\u8D44\u6599|i", 7],
  ["\u{1F194}", "ID button", "ID\u6309\u94AE", "id|\u6309\u952E|\u8BC6\u522B|\u8EAB\u4EFD|button|id|identity", 7],
  ["\u24C2\uFE0F", "circled M", "\u5706\u5708\u5305\u56F4\u7684M", "m|\u5708|\u5B57\u6BCD|\u7C73|circle|circled|m", 7],
  ["\u{1F195}", "NEW button", "new\u6309\u94AE", "\u6309\u952E|\u65B0|\u65B0\u7684|button|new", 7],
  ["\u{1F196}", "NG button", "NG\u6309\u94AE", "ng|\u6309\u94AE|\u6309\u952E|\u82B1\u7D6E|button|ng", 7],
  ["\u{1F17E}\uFE0F", "O button (blood type)", "O \u578B\u8840", "o|o\u578B\u8840|\u5B57\u6BCDo|\u6309\u94AE|blood|button|o|type", 7],
  ["\u{1F197}", "OK button", "OK\u6309\u94AE", "ok|\u540C\u610F|\u6309\u952E|button|ok|okay", 7],
  ["\u{1F17F}\uFE0F", "P button", "\u505C\u8F66\u6309\u94AE", "p|\u505C\u8F66|\u6309\u952E|\u6CCA\u8F66|button|p|parking", 7],
  ["\u{1F198}", "SOS button", "SOS\u6309\u94AE", "sos|\u6309\u952E|\u6551\u547D|\u6C42\u6551|button|help|sos", 7],
  ["\u{1F199}", "UP! button", "up\u6309\u94AE", "up|\u5411\u4E0A|\u6309\u952E|button|mark|up|up!", 7],
  ["\u{1F19A}", "VS button", "VS\u6309\u94AE", "vs|\u5BF9|\u5BF9\u51B3|\u6309\u952E|button|versus|vs", 7],
  ["\u{1F201}", "Japanese \u201Chere\u201D button", "\u65E5\u6587\u7684\u201C\u8FD9\u91CC\u201D\u6309\u94AE", "koko|\u6309\u952E|\u65E5\u6587|\u65E5\u8BED|button|here|japanese|katakana", 7],
  ["\u{1F202}\uFE0F", "Japanese \u201Cservice charge\u201D button", "\u65E5\u6587\u7684\u201C\u670D\u52A1\u8D39\u201D\u6309\u94AE", "sa|\u6309\u952E|\u6536\u8D39|\u65E5\u6587|button|charge|japanese|katakana", 7],
  ["\u{1F237}\uFE0F", "Japanese \u201Cmonthly amount\u201D button", "\u65E5\u6587\u7684\u201C\u6708\u603B\u91CF\u201D\u6309\u94AE", "\u6309\u952E|\u65E5\u6587|\u65E5\u672C|\u6708|amount|button|ideograph|japanese", 7],
  ["\u{1F236}", "Japanese \u201Cnot free of charge\u201D button", "\u65E5\u6587\u7684\u201C\u6536\u8D39\u201D\u6309\u94AE", "\u6309\u952E|\u65E5\u6587|\u65E5\u672C|\u6709|button|charge|free|ideograph", 7],
  ["\u{1F22F}", "Japanese \u201Creserved\u201D button", "\u65E5\u6587\u7684\u201C\u9884\u7559\u201D\u6309\u94AE", "\u4FDD\u7559|\u6307|\u6309\u952E|\u65E5\u6587|button|ideograph|japanese|reserved", 7],
  ["\u{1F250}", "Japanese \u201Cbargain\u201D button", "\u65E5\u6587\u7684\u201C\u8BAE\u4EF7\u201D\u6309\u94AE", "\u5F97|\u6309\u952E|\u65E5\u6587|\u65E5\u672C|bargain|button|ideograph|japanese", 7],
  ["\u{1F239}", "Japanese \u201Cdiscount\u201D button", "\u65E5\u6587\u7684\u201C\u6253\u6298\u201D\u6309\u94AE", "\u5272|\u6253\u6298|\u6298\u6263|\u6309\u952E|button|discount|ideograph|japanese", 7],
  ["\u{1F21A}", "Japanese \u201Cfree of charge\u201D button", "\u65E5\u6587\u7684\u201C\u514D\u8D39\u201D\u6309\u94AE", "\u514D\u8D39|\u514D\u94B1|\u6309\u952E|\u65E0|button|charge|free|ideograph", 7],
  ["\u{1F232}", "Japanese \u201Cprohibited\u201D button", "\u65E5\u6587\u7684\u201C\u7981\u6B62\u201D\u6309\u94AE", "\u4E25\u7981|\u6309\u952E|\u65E5\u6587|\u65E5\u672C|button|ideograph|japanese|prohibited", 7],
  ["\u{1F251}", "Japanese \u201Cacceptable\u201D button", "\u65E5\u6587\u7684\u201C\u53EF\u63A5\u53D7\u201D\u6309\u94AE", "\u53EF|\u53EF\u63A5\u53D7|\u6309\u952E|\u65E5\u6587|acceptable|button|ideograph|japanese", 7],
  ["\u{1F238}", "Japanese \u201Capplication\u201D button", "\u65E5\u6587\u7684\u201C\u7533\u8BF7\u201D\u6309\u94AE", "\u65E5\u6587|\u65E5\u672C|\u65E5\u8BED|\u7533|application|button|ideograph|japanese", 7],
  ["\u{1F234}", "Japanese \u201Cpassing grade\u201D button", "\u65E5\u6587\u7684\u201C\u5408\u683C\u201D\u6309\u94AE", "\u53CA\u683C|\u5408|\u6309\u952E|\u65E5\u6587|button|grade|ideograph|japanese", 7],
  ["\u{1F233}", "Japanese \u201Cvacancy\u201D button", "\u65E5\u6587\u7684\u201C\u6709\u7A7A\u4F4D\u201D\u6309\u94AE", "\u65E5\u6587|\u65E5\u672C|\u65E5\u8BED|\u6709\u7A7A\u4F4D|button|ideograph|japanese|vacancy", 7],
  ["\u3297\uFE0F", "Japanese \u201Ccongratulations\u201D button", "\u65E5\u6587\u7684\u201C\u795D\u8D3A\u201D\u6309\u94AE", "\u5E86\u8D3A|\u6309\u952E|\u65E5\u6587|\u65E5\u672C|button|congratulations|ideograph|japanese", 7],
  ["\u3299\uFE0F", "Japanese \u201Csecret\u201D button", "\u65E5\u6587\u7684\u201C\u79D8\u5BC6\u201D\u6309\u94AE", "\u4FDD\u5BC6|\u6309\u952E|\u65E5\u6587|\u65E5\u672C|button|ideograph|japanese|secret", 7],
  ["\u{1F23A}", "Japanese \u201Copen for business\u201D button", "\u65E5\u6587\u7684\u201C\u5F00\u59CB\u8425\u4E1A\u201D\u6309\u94AE", "\u5F00\u95E8|\u6309\u952E|\u65E5\u6587|\u65E5\u672C|business|button|ideograph|japanese", 7],
  ["\u{1F235}", "Japanese \u201Cno vacancy\u201D button", "\u65E5\u6587\u7684\u201C\u6CA1\u6709\u7A7A\u4F4D\u201D\u6309\u94AE", "\u5EA7\u4F4D|\u6309\u952E|\u65E5\u6587|\u65E5\u672C|button|ideograph|japanese|no", 7],
  ["\u{1F534}", "red circle", "\u7EA2\u8272\u5706", "\u51E0\u4F55|\u5706|\u5708|\u7EA2|circle|geometric|red", 7],
  ["\u{1F7E0}", "orange circle", "\u6A59\u8272\u5706", "\u5706|\u5706\u5708|\u5708|\u6A59|circle|orange", 7],
  ["\u{1F7E1}", "yellow circle", "\u9EC4\u8272\u5706", "\u5706|\u5708|\u9EC4|\u9EC4\u8272|circle|yellow", 7],
  ["\u{1F7E2}", "green circle", "\u7EFF\u8272\u5706", "\u5706|\u5706\u5708|\u5708|\u7EFF|circle|green", 7],
  ["\u{1F535}", "blue circle", "\u84DD\u8272\u5706", "\u5706|\u5708|\u84DD|\u84DD\u5708|blue|circle|geometric", 7],
  ["\u{1F7E3}", "purple circle", "\u7D2B\u8272\u5706", "\u5706|\u5706\u5708|\u5708|\u7D2B|circle|purple", 7],
  ["\u{1F7E4}", "brown circle", "\u68D5\u8272\u5706", "\u5706|\u5706\u5708|\u5708|\u68D5|brown|circle", 7],
  ["\u26AB", "black circle", "\u9ED1\u8272\u5706", "\u5706|\u5708|\u9ED1|black|circle|geometric", 7],
  ["\u26AA", "white circle", "\u767D\u8272\u5706", "\u5706|\u5708|\u767D|\u767D\u5708|circle|geometric|white", 7],
  ["\u{1F7E5}", "red square", "\u7EA2\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u6B63\u65B9\u5F62|\u7EA2|card|penalty|red|square", 7],
  ["\u{1F7E7}", "orange square", "\u6A59\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u6A59|\u6A59\u8272|orange|square", 7],
  ["\u{1F7E8}", "yellow square", "\u9EC4\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u6B63\u65B9\u5F62|\u9EC4|card|penalty|square|yellow", 7],
  ["\u{1F7E9}", "green square", "\u7EFF\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u6B63\u65B9\u5F62|\u7EFF|green|square", 7],
  ["\u{1F7E6}", "blue square", "\u84DD\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u6B63\u65B9\u5F62|\u84DD|blue|square", 7],
  ["\u{1F7EA}", "purple square", "\u7D2B\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u6B63\u65B9\u5F62|\u7D2B|purple|square", 7],
  ["\u{1F7EB}", "brown square", "\u68D5\u8272\u65B9\u5757", "\u65B9\u5757|\u65B9\u6846|\u68D5|\u68D5\u8272|brown|square", 7],
  ["\u2B1B", "black large square", "\u9ED1\u7EBF\u5927\u65B9\u6846", "\u5927|\u65B9\u5F62|\u6B63\u65B9\u5F62|\u9ED1\u8272|black|geometric|large|square", 7],
  ["\u2B1C", "white large square", "\u767D\u7EBF\u5927\u65B9\u6846", "\u5927|\u65B9\u5F62|\u6B63\u65B9\u5F62|\u767D\u8272|geometric|large|square|white", 7],
  ["\u25FC\uFE0F", "black medium square", "\u9ED1\u8272\u4E2D\u65B9\u5757", "\u4E2D\u7B49|\u51E0\u4F55|\u65B9\u5F62|\u6B63\u65B9\u5F62|black|geometric|medium|square", 7],
  ["\u25FB\uFE0F", "white medium square", "\u767D\u8272\u4E2D\u65B9\u5757", "\u4E2D\u7B49|\u65B9\u5F62|\u6B63\u65B9\u5F62|\u767D\u8272|geometric|medium|square|white", 7],
  ["\u25FE", "black medium-small square", "\u9ED1\u8272\u4E2D\u5C0F\u65B9\u5757", "\u4E2D\u5C0F|\u65B9\u5F62|\u6B63\u65B9\u5F62|\u9ED1\u8272|black|geometric|medium-small|square", 7],
  ["\u25FD", "white medium-small square", "\u767D\u8272\u4E2D\u5C0F\u65B9\u5757", "\u4E2D\u5C0F \u6B63\u65B9\u5F62|\u51E0\u4F55|\u65B9\u5F62|\u767D\u8272|geometric|medium-small|square|white", 7],
  ["\u25AA\uFE0F", "black small square", "\u9ED1\u8272\u5C0F\u65B9\u5757", "\u51E0\u4F55|\u51E0\u4F55\u56FE\u5F62|\u5C0F|\u65B9\u5F62|black|geometric|small|square", 7],
  ["\u25AB\uFE0F", "white small square", "\u767D\u8272\u5C0F\u65B9\u5757", "\u5C0F|\u65B9\u5F62|\u6B63\u65B9\u5F62|\u767D\u8272|geometric|small|square|white", 7],
  ["\u{1F536}", "large orange diamond", "\u6A59\u8272\u5927\u83F1\u5F62", "\u5927|\u65B9\u5757|\u65B9\u7247|\u6A58\u8272\u65B9\u5757|diamond|geometric|large|orange", 7],
  ["\u{1F537}", "large blue diamond", "\u84DD\u8272\u5927\u83F1\u5F62", "\u5927|\u65B9\u5757|\u65B9\u7247|\u83F1\u5F62|blue|diamond|geometric|large", 7],
  ["\u{1F538}", "small orange diamond", "\u6A59\u8272\u5C0F\u83F1\u5F62", "\u5C0F|\u65B9\u5757|\u65B9\u7247|\u6A58\u8272\u65B9\u5757|diamond|geometric|orange|small", 7],
  ["\u{1F539}", "small blue diamond", "\u84DD\u8272\u5C0F\u83F1\u5F62", "\u5C0F|\u65B9\u7247|\u83F1\u5F62|\u84DD\u8272|blue|diamond|geometric|small", 7],
  ["\u{1F53A}", "red triangle pointed up", "\u7EA2\u8272\u6B63\u4E09\u89D2", "\u4E09\u89D2\u5F62|\u5411\u4E0A|\u6B63\u4E09\u89D2|\u7EA2\u8272|geometric|pointed|red|triangle", 7],
  ["\u{1F53B}", "red triangle pointed down", "\u7EA2\u8272\u5012\u4E09\u89D2", "\u4E09\u89D2\u5F62|\u4E0B|\u5012\u4E09\u89D2|\u5411\u4E0B|down|geometric|pointed|red", 7],
  ["\u{1F4A0}", "diamond with a dot", "\u5E26\u5706\u70B9\u7684\u83F1\u5F62", "\u4E2D\u5FC3|\u5185\u90E8|\u5706|\u65B9\u5757|comic|diamond|dot|geometric", 7],
  ["\u{1F518}", "radio button", "\u5355\u9009\u6309\u94AE", "\u5355\u72EC|\u5355\u9009\u94AE|\u5706\u5FC3|\u6309\u94AE|button|geometric|radio", 7],
  ["\u{1F533}", "white square button", "\u767D\u8272\u65B9\u5F62\u6309\u94AE", "\u6309\u94AE|\u65B9\u5F62|\u767D\u7EBF\u65B9\u5F62\u6309\u94AE|\u767D\u7EBF\u6B63\u65B9\u5F62\u6309\u94AE|button|geometric|outlined|square", 7],
  ["\u{1F532}", "black square button", "\u9ED1\u8272\u65B9\u5F62\u6309\u94AE", "\u51E0\u4F55|\u51E0\u4F55\u56FE\u5F62|\u6309\u94AE|\u65B9\u5F62|black|button|geometric|square", 7]
];

// src/emoji-catalog.ts
var EMOJI_BY_CHAR = new Map(EMOJI_ROWS.map((row) => [row[0], row]));
var EMOJI_SEARCH_LIMIT = 120;
var HAYSTACKS = EMOJI_ROWS.map((row) => `${row[1]} ${row[2]} ${row[3].replaceAll("|", " ")}`.toLowerCase());
var BY_CATEGORY = EMOJI_CATEGORIES.map((_, index) => EMOJI_ROWS.filter((row) => row[4] === index));
function emojiLabel(row) {
  return row[2] === row[1] ? row[1] : `${row[2]} \xB7 ${row[1]}`;
}
function categoryRows(index) {
  return BY_CATEGORY[index] ?? [];
}
function emojiRow(char) {
  return EMOJI_BY_CHAR.get(char);
}
function searchEmoji(query) {
  const trimmed = query.trim();
  if (trimmed === "") return { rows: EMOJI_ROWS, total: EMOJI_ROWS.length };
  const tokens = trimmed.toLowerCase().split(/\s+/u);
  const rows = [];
  const exact = EMOJI_BY_CHAR.get(trimmed);
  if (exact !== void 0) rows.push(exact);
  let total = rows.length;
  for (let index = 0; index < EMOJI_ROWS.length; index++) {
    const row = EMOJI_ROWS[index];
    if (row === void 0 || row === exact) continue;
    const haystack = HAYSTACKS[index];
    if (haystack === void 0 || !tokens.every((token) => haystack.includes(token))) continue;
    total += 1;
    if (rows.length < EMOJI_SEARCH_LIMIT) rows.push(row);
  }
  return { rows, total };
}

// src/navigator.ts
var MAX_BOARDS = 24;
var MAX_BOARD_NAME = 32;
var MAX_TAGS_PER_ENTITY = 8;
var MAX_TAG_LENGTH = 24;
var MAX_VIEWS = 20;
var MAX_GOTO_MATCHES = 10;
function validateBoardName(name2) {
  const trimmed = name2.trim();
  if (trimmed === "" || trimmed.length > MAX_BOARD_NAME) {
    throw new Error(`board name must be 1..${MAX_BOARD_NAME} characters after trimming`);
  }
  return trimmed;
}
function suggestBoardId(name2, existingIds = []) {
  const root = name2.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, MAX_BOARD_NAME) || "board";
  if (!existingIds.includes(root)) return root;
  let suffix = 2;
  while (existingIds.includes(`${root}-${suffix}`)) suffix += 1;
  return `${root}-${suffix}`;
}
function normalizeBoards(value) {
  const byId = {};
  const membership = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) return { byId, membership };
  const candidate = value;
  if (typeof candidate.byId === "object" && candidate.byId !== null) {
    for (const [id, raw] of Object.entries(candidate.byId)) {
      if (raw === null || typeof raw !== "object") continue;
      const record = raw;
      if (typeof record.name !== "string" || record.name.trim() === "" || typeof record.order !== "number") continue;
      byId[id] = { name: record.name.trim().slice(0, MAX_BOARD_NAME), order: record.order };
    }
  }
  if (typeof candidate.membership === "object" && candidate.membership !== null) {
    for (const [pinId, boardId] of Object.entries(candidate.membership)) {
      if (typeof boardId === "string" && byId[boardId] !== void 0) membership[pinId] = boardId;
    }
  }
  return { byId, membership };
}
function emptyBoards() {
  return { byId: {}, membership: {} };
}
function upsertBoard(boards, id, name2) {
  const trimmed = validateBoardName(name2);
  const existing = boards.byId[id];
  if (existing === void 0 && Object.keys(boards.byId).length >= MAX_BOARDS) {
    throw new Error(`at most ${MAX_BOARDS} boards`);
  }
  const nextOrder = existing?.order ?? nextOrderOf(boards);
  return {
    byId: { ...boards.byId, [id]: { name: trimmed, order: nextOrder } },
    membership: boards.membership
  };
}
function removeBoard(boards, id) {
  const byId = { ...boards.byId };
  delete byId[id];
  const membership = {};
  for (const [pinId, boardId] of Object.entries(boards.membership)) {
    if (boardId !== id) membership[pinId] = boardId;
  }
  return { byId, membership };
}
function reorderBoards(boards, orderedIds) {
  const byId = {};
  const placed = /* @__PURE__ */ new Set();
  let order = 0;
  for (const id of orderedIds) {
    const record = boards.byId[id];
    if (record === void 0 || placed.has(id)) continue;
    placed.add(id);
    byId[id] = { name: record.name, order: order++ };
  }
  const rest = Object.entries(boards.byId).filter(([id]) => !placed.has(id)).sort((a, b) => a[1].order - b[1].order);
  for (const [id, record] of rest) byId[id] = { name: record.name, order: order++ };
  return { byId, membership: boards.membership };
}
function assignPinToBoard(boards, pinId, boardId) {
  const membership = { ...boards.membership };
  if (boardId === "") delete membership[pinId];
  else if (boards.byId[boardId] !== void 0) membership[pinId] = boardId;
  return { byId: boards.byId, membership };
}
function nextOrderOf(boards) {
  let max = -1;
  for (const record of Object.values(boards.byId)) max = Math.max(max, record.order);
  return max + 1;
}
function normalizeTags(value) {
  const out = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) return out;
  for (const [id, raw] of Object.entries(value)) {
    if (!Array.isArray(raw)) continue;
    const tags = [];
    const seen = /* @__PURE__ */ new Set();
    for (const item of raw) {
      if (typeof item !== "string") continue;
      const tag = item.trim().slice(0, MAX_TAG_LENGTH);
      if (tag === "" || seen.has(tag)) continue;
      seen.add(tag);
      tags.push(tag);
    }
    if (tags.length > 0) out[id] = tags.slice(0, MAX_TAGS_PER_ENTITY);
  }
  return out;
}
function setEntityTags(tags, id, next) {
  const normalized = normalizeTags({ [id]: next })[id] ?? [];
  const out = { ...tags };
  if (normalized.length === 0) delete out[id];
  else out[id] = normalized;
  return out;
}
function normalizeViews(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const raw of value) {
    if (raw === null || typeof raw !== "object") continue;
    const record = raw;
    if (typeof record.id !== "string" || record.id === "" || typeof record.name !== "string" || record.name.trim() === "") continue;
    const tags = Array.isArray(record.tags) ? record.tags.filter((tag) => typeof tag === "string").slice(0, MAX_TAGS_PER_ENTITY) : [];
    out.push({
      id: record.id,
      name: record.name.trim().slice(0, MAX_BOARD_NAME),
      text: typeof record.text === "string" ? record.text : "",
      tags,
      ...typeof record.board === "string" && record.board !== "" ? { board: record.board } : {}
    });
  }
  return out.slice(0, MAX_VIEWS);
}
function saveView(views, view) {
  const next = views.filter((item) => item.id !== view.id);
  next.push(view);
  return next.slice(-MAX_VIEWS);
}
function filterEntries(entries, filter) {
  const needle = filter.text.toLowerCase();
  return entries.filter((entry) => {
    if (filter.board !== void 0 && entry.boardId !== filter.board) return false;
    if (needle !== "" && !entry.name.toLowerCase().includes(needle)) return false;
    if (filter.tags.length > 0 && !filter.tags.some((tag) => entry.tags.includes(tag))) return false;
    return true;
  });
}
function groupPinnedByBoard(ids, boards) {
  const buckets = /* @__PURE__ */ new Map();
  for (const id of ids) {
    const boardId = boards.membership[id] ?? "";
    const bucket = buckets.get(boardId);
    if (bucket === void 0) buckets.set(boardId, [id]);
    else bucket.push(id);
  }
  const ordered = Object.entries(boards.byId).sort((a, b) => a[1].order - b[1].order);
  const groups = [];
  for (const [boardId] of ordered) {
    const bucket = buckets.get(boardId);
    if (bucket !== void 0 && bucket.length > 0) groups.push({ boardId, ids: bucket });
  }
  const ungrouped = buckets.get("");
  if (ungrouped !== void 0 && ungrouped.length > 0) groups.push({ boardId: void 0, ids: ungrouped });
  return groups;
}
function summarizeHealth(events) {
  let lastActivity = null;
  let messages = 0;
  let lastDirection = null;
  for (const event of events) {
    if (typeof event.time === "number" && Number.isFinite(event.time)) {
      lastActivity = lastActivity === null ? event.time : Math.max(lastActivity, event.time);
    }
    if (event.type === "user/message") {
      messages += 1;
      lastDirection = "user";
    } else if (event.type === "assistant/message") {
      messages += 1;
      lastDirection = "assistant";
    }
  }
  return { lastActivity, messages, lastDirection };
}
function gotoMatches(entries, keyword) {
  const needle = keyword.trim().toLowerCase();
  if (needle === "") return [];
  return entries.filter((entry) => entry.name.toLowerCase().includes(needle) || entry.tags.some((tag) => tag.toLowerCase().includes(needle))).slice(0, MAX_GOTO_MATCHES);
}
function sanitizeLabel(text) {
  return text.replace(/[\u0000-\u001f\u007f]/g, "").slice(0, 200);
}

// src/pin-core.ts
var MAX_RECENT_EMOJI = 12;
function normalizePins(value) {
  if (!Array.isArray(value)) return [];
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const item of value) {
    if (typeof item !== "string" || item.length === 0 || seen.has(item)) continue;
    seen.add(item);
    out.push(item);
  }
  return out;
}
function topAnchor(orderedIds, id) {
  const index = orderedIds.indexOf(id);
  if (index <= 0) return void 0;
  return orderedIds[0];
}
function isEmojiChar(value) {
  return typeof value === "string" && EMOJI_BY_CHAR.has(value);
}
function normalizeEmojiMap(value) {
  const out = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) return out;
  for (const [key, emoji] of Object.entries(value)) {
    if (key.length === 0 || !isEmojiChar(emoji)) continue;
    out[key] = emoji;
  }
  return out;
}
function normalizeRecentEmoji(value) {
  if (!Array.isArray(value)) return [];
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const item of value) {
    if (!isEmojiChar(item) || seen.has(item)) continue;
    seen.add(item);
    out.push(item);
    if (out.length >= MAX_RECENT_EMOJI) break;
  }
  return out;
}
function rememberEmoji(recent, emoji) {
  if (!isEmojiChar(emoji)) return [...recent];
  return [emoji, ...recent.filter((item) => item !== emoji)].slice(0, MAX_RECENT_EMOJI);
}
function pruneEmoji(emoji, liveIds) {
  const out = {};
  for (const [id, char] of Object.entries(emoji)) {
    if (liveIds.has(id)) out[id] = char;
  }
  return out;
}
function emptyStoredPins() {
  return {
    pinned: [],
    workspacePinned: [],
    emoji: {},
    workspaceEmoji: {},
    recentEmoji: [],
    boards: emptyBoards(),
    tags: {},
    views: []
  };
}
function encodeStoredPins(doc) {
  const payload = {
    v: 4,
    pinned: [...doc.pinned],
    workspacePinned: [...doc.workspacePinned],
    emoji: { ...doc.emoji },
    workspaceEmoji: { ...doc.workspaceEmoji },
    recentEmoji: normalizeRecentEmoji(doc.recentEmoji),
    boards: normalizeBoards(doc.boards),
    tags: normalizeTags(doc.tags),
    views: normalizeViews(doc.views)
  };
  return JSON.stringify(payload);
}
function decodeStoredPins(value) {
  const empty2 = emptyStoredPins();
  if (Array.isArray(value)) return { ...empty2, pinned: normalizePins(value) };
  if (typeof value === "object" && value !== null) {
    const candidate = value;
    if (candidate.v === 1 && Array.isArray(candidate.pinned)) {
      return { ...empty2, pinned: normalizePins(candidate.pinned) };
    }
    if (candidate.v === 2) {
      return {
        ...empty2,
        pinned: normalizePins(candidate.pinned),
        workspacePinned: normalizePins(candidate.workspacePinned)
      };
    }
    if (candidate.v === 3) {
      return {
        ...empty2,
        pinned: normalizePins(candidate.pinned),
        workspacePinned: normalizePins(candidate.workspacePinned),
        boards: normalizeBoards(candidate.boards),
        tags: normalizeTags(candidate.tags),
        views: normalizeViews(candidate.views)
      };
    }
    if (candidate.v === 4) {
      return {
        pinned: normalizePins(candidate.pinned),
        workspacePinned: normalizePins(candidate.workspacePinned),
        emoji: normalizeEmojiMap(candidate.emoji),
        workspaceEmoji: normalizeEmojiMap(candidate.workspaceEmoji),
        recentEmoji: normalizeRecentEmoji(candidate.recentEmoji),
        boards: normalizeBoards(candidate.boards),
        tags: normalizeTags(candidate.tags),
        views: normalizeViews(candidate.views)
      };
    }
  }
  return empty2;
}
function prunePins(pinned, liveIds) {
  return pinned.filter((id) => liveIds.has(id));
}
function reorderMoves(orderedIds, pinned) {
  const present = pinned.filter((id) => orderedIds.includes(id));
  if (present.length === 0) return [];
  const head = orderedIds.slice(0, present.length);
  const inOrder = head.length === present.length && head.every((id, index) => id === present[index]);
  if (inOrder) return [];
  return [...present].reverse();
}

// src/pin-controller.ts
var LIST_READY = "ready";
function sameSectionValue(left, right) {
  return JSON.stringify(left ?? null) === JSON.stringify(right ?? null);
}
var PinController = class {
  constructor(store, list, workspaceList, reorderer, remote) {
    this.store = store;
    this.list = list;
    this.workspaceList = workspaceList;
    this.reorderer = reorderer;
    this.remote = remote;
    this.snapshot = store.read();
  }
  snapshot;
  listeners = /* @__PURE__ */ new Set();
  disposers = [];
  /** Locally committed field values shadowing a lagging Host echo. */
  pending = /* @__PURE__ */ new Map();
  started = false;
  /** Subscribe the store and list feeds and run the initial refresh. Idempotent. */
  start() {
    if (this.started) return;
    this.started = true;
    this.disposers.push(
      this.store.subscribe(() => this.refresh()),
      this.list.subscribe(() => this.onListChange()),
      this.workspaceList.subscribe(() => this.onWorkspaceListChange())
    );
    this.refresh();
    this.onListChange();
    this.onWorkspaceListChange();
  }
  /** Dispose every subscription; the controller becomes inert. */
  stop() {
    for (const dispose of this.disposers.splice(0)) dispose();
    this.listeners.clear();
    this.started = false;
  }
  /**
   * Subscribe to pin/emoji-state changes.
   * @param listener - invoked after each adopted or refreshed state.
   * @returns the unsubscribe function.
   */
  // Arrow property, not a prototype method: slot components hand
  // `pin.subscribe` to React's useSyncExternalStore, which invokes it
  // unbound — a method body would lose `this` and crash on the first render.
  subscribe = (listener) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
  /** The normalized pinned session ids, newest pin first (stable reference between changes). */
  getPinned() {
    return this.snapshot.pinned;
  }
  /** Whether one session id is currently pinned. */
  isPinned(id) {
    return this.snapshot.pinned.includes(id);
  }
  /** The normalized pinned workspace ids, newest pin first (stable reference between changes). */
  getWorkspacePinned() {
    return this.snapshot.workspacePinned;
  }
  /** Whether one workspace id is currently pinned. */
  isWorkspacePinned(id) {
    return this.snapshot.workspacePinned.includes(id);
  }
  /** The pin-count limit in force, per level (0 = unlimited). */
  getMaxPins() {
    return this.snapshot.maxPins;
  }
  /**
   * Whether a settings write is still unacknowledged by the Host. The settings
   * round trip takes about a second, so the UI can surface a syncing state and
   * a reload can wait for durability instead of racing a queued write.
   * @returns true while at least one committed field awaits its Host echo.
   */
  hasPendingWrites() {
    return this.pending.size > 0;
  }
  /** Stored row emoji of one session, or undefined. */
  getEmoji(id) {
    return this.snapshot.emoji[id];
  }
  /** Stored row emoji of one workspace, or undefined. */
  getWorkspaceEmoji(id) {
    return this.snapshot.workspaceEmoji[id];
  }
  /** The recently picked emoji, newest first (shared by both levels). */
  getRecentEmoji() {
    return this.snapshot.recentEmoji;
  }
  // ── Navigation organizer (boards / tags / views) ────────────────────────
  /** The board registry (pin groups + membership). */
  getBoards() {
    return this.snapshot.boards;
  }
  /** The id → tags map. */
  getTags() {
    return this.snapshot.tags;
  }
  /** The saved filter views, newest last. */
  getViews() {
    return this.snapshot.views;
  }
  /** Create a board (or rename when the id exists) and persist.
   * @param id - stable board id.
   * @param name - display name.
   */
  async createBoard(id, name2) {
    const boards = upsertBoard(this.snapshot.boards, id, name2);
    await this.commit({ boards });
  }
  /** Remove a board; its pins fall back to the ungrouped section.
   * @param id - board id.
   */
  async removeBoard(id) {
    const boards = removeBoard(this.snapshot.boards, id);
    await this.commit({ boards });
  }
  /** Rename an existing board (a missing id creates it, mirroring createBoard).
   * @param id - board id.
   * @param name - new display name.
   */
  async renameBoard(id, name2) {
    return this.createBoard(id, name2);
  }
  /** Persist a drag-reordered board sequence (unknown ids keep trailing order).
   * @param orderedIds - the desired board order.
   */
  async reorderBoards(orderedIds) {
    const boards = reorderBoards(this.snapshot.boards, orderedIds);
    await this.commit({ boards });
  }
  /** Assign one pinned entity to a board ('' ungroups).
   * @param pinId - session or workspace id.
   * @param boardId - board id or ''.
   */
  async assignBoard(pinId, boardId) {
    const boards = assignPinToBoard(this.snapshot.boards, pinId, boardId);
    await this.commit({ boards });
  }
  /** Set one entity's tags (empty list removes the entry).
   * @param id - session or workspace id.
   * @param tags - next tags.
   */
  async setTags(id, tags) {
    const next = setEntityTags(this.snapshot.tags, id, tags);
    await this.commit({ tags: next });
  }
  /** Save a filter view (same id replaces; the list caps at MAX_VIEWS).
   * @param view - the view to save.
   */
  async saveView(view) {
    const views = saveView(this.snapshot.views, view);
    await this.commit({ views });
  }
  /**
   * Toggle one session id based on the store's membership. Callers with a
   * fresher truth (the log-backed projection) use {@link setPinned} with the
   * explicit next state instead.
   * @param id - session id to pin or unpin.
   * @returns the outcome.
   */
  async toggle(id) {
    return this.setPinned(id, !this.snapshot.pinned.includes(id));
  }
  /**
   * Commit an explicit next session-emoji state. Unpinning always succeeds;
   * pinning beyond the limit answers `'limit'` without a write. A successful
   * pin also moves the session to the front of its workspace account.
   * @param id - session id to pin or unpin.
   * @param next - the explicit post-change membership.
   * @returns the outcome.
   */
  async setPinned(id, next) {
    const currently = this.snapshot.pinned.includes(id);
    if (next === currently) return next ? "pinned" : "unpinned";
    if (next && this.snapshot.maxPins > 0 && this.snapshot.pinned.length >= this.snapshot.maxPins) return "limit";
    const candidate = next ? [id, ...this.snapshot.pinned.filter((item) => item !== id)] : this.snapshot.pinned.filter((item) => item !== id);
    if (this.remote !== void 0) {
      const result = await this.remote.setPinned(id, next);
      if (result.ok) {
        await this.commit({ pinned: candidate });
        if (next) void this.reorderer.moveToTop(id);
        return next ? "pinned" : "unpinned";
      }
    }
    await this.commit({ pinned: candidate });
    if (next) void this.reorderer.moveToTop(id);
    return next ? "pinned" : "unpinned";
  }
  /** Toggle one workspace id based on the store's membership.
   * @param id - workspace id to pin or unpin.
   * @returns the outcome.
   */
  async toggleWorkspace(id) {
    return this.setWorkspacePinned(id, !this.snapshot.workspacePinned.includes(id));
  }
  /**
   * Commit an explicit next workspace-pin state (store-only; no remote).
   * A successful pin moves the workspace to the front of the workspace list.
   * @param id - workspace id to pin or unpin.
   * @param next - the explicit post-change membership.
   * @returns the outcome.
   */
  async setWorkspacePinned(id, next) {
    const currently = this.snapshot.workspacePinned.includes(id);
    if (next === currently) return next ? "pinned" : "unpinned";
    if (next && this.snapshot.maxPins > 0 && this.snapshot.workspacePinned.length >= this.snapshot.maxPins) return "limit";
    const candidate = next ? [id, ...this.snapshot.workspacePinned.filter((item) => item !== id)] : this.snapshot.workspacePinned.filter((item) => item !== id);
    await this.commit({ workspacePinned: candidate });
    if (next) void this.reorderer.moveWorkspaceToTop(id);
    return next ? "pinned" : "unpinned";
  }
  /** Commit one session emoji (null clears; catalog chars only). Picking an
   * emoji also moves it to the front of the shared recents list.
   * @param id - session id.
   * @param emoji - next emoji or null to clear.
   */
  async setEmoji(id, emoji) {
    if (emoji !== null && !isEmojiChar(emoji)) return;
    const map = { ...this.snapshot.emoji };
    if (emoji === null) delete map[id];
    else map[id] = emoji;
    const recentEmoji = emoji === null ? this.snapshot.recentEmoji : rememberEmoji(this.snapshot.recentEmoji, emoji);
    await this.commit(emoji === null ? { emoji: map } : { emoji: map, recentEmoji });
  }
  /** Remove one session's emoji. */
  async clearEmoji(id) {
    await this.setEmoji(id, null);
  }
  /** Commit one workspace emoji (null clears; catalog chars only). Picking an
   * emoji also moves it to the front of the shared recents list.
   * @param id - workspace id.
   * @param emoji - next emoji or null to clear.
   */
  async setWorkspaceEmoji(id, emoji) {
    if (emoji !== null && !isEmojiChar(emoji)) return;
    const map = { ...this.snapshot.workspaceEmoji };
    if (emoji === null) delete map[id];
    else map[id] = emoji;
    const recentEmoji = emoji === null ? this.snapshot.recentEmoji : rememberEmoji(this.snapshot.recentEmoji, emoji);
    await this.commit(emoji === null ? { workspaceEmoji: map } : { workspaceEmoji: map, recentEmoji });
  }
  /** Remove one workspace's emoji. */
  async clearWorkspaceEmoji(id) {
    await this.setWorkspaceEmoji(id, null);
  }
  /**
   * Re-assert pinned order against the current workspace accounts and the
   * workspace list. Glue wires this to workspace-list changes; the
   * reorderer's idempotence makes repeated calls safe.
   */
  reapplyOrder() {
    if (!this.snapshot.reorderOnLoad) return;
    if (this.snapshot.pinned.length > 0) this.reorderer.reapplyOrder(this.snapshot.pinned);
    if (this.snapshot.workspacePinned.length > 0) this.reorderer.reapplyWorkspaceOrder(this.snapshot.workspacePinned);
  }
  /** Store feed arrived: re-read the snapshot and republish. */
  refresh() {
    const next = this.store.read();
    for (const [field, value] of this.pending) {
      const observed = next[field];
      if (sameSectionValue(observed, value)) this.pending.delete(field);
      else next[field] = value;
    }
    this.snapshot = next;
    this.notify();
  }
  /**
   * Commit one partial section: paint it at the click and keep it authoritative
   * until the Host echo agrees. A rejected write drops the shadow and re-reads
   * the Host truth.
   * @param section - the partial section to persist.
   */
  async commit(section) {
    this.adopt(section);
    const shadowed = Object.keys(section).map((field) => [field, this.snapshot[field]]);
    for (const [field, value] of shadowed) this.pending.set(field, value);
    try {
      await this.store.write(section);
    } catch {
      for (const [field, value] of shadowed) {
        if (sameSectionValue(this.pending.get(field), value)) this.pending.delete(field);
      }
      this.refresh();
    }
  }
  /** Sessions list changed: gate pruning and initial reorder on the ready phase. */
  onListChange() {
    const list = this.list.getSnapshot();
    if (list.phase !== LIST_READY) return;
    if (this.snapshot.pruneStale) {
      const live = new Set(list.ids);
      const pruned = prunePins(this.snapshot.pinned, live);
      const emoji = pruneEmoji(this.snapshot.emoji, live);
      if (pruned.length !== this.snapshot.pinned.length || Object.keys(emoji).length !== Object.keys(this.snapshot.emoji).length) {
        void this.commit({ pinned: pruned, emoji });
      }
    }
    this.reapplyOrder();
  }
  /** Workspaces list changed: gate pruning and initial reorder on the ready phase. */
  onWorkspaceListChange() {
    const list = this.workspaceList.getSnapshot();
    if (list.phase !== LIST_READY) return;
    if (this.snapshot.pruneStale) {
      const live = new Set(list.ids);
      const pruned = prunePins(this.snapshot.workspacePinned, live);
      const emoji = pruneEmoji(this.snapshot.workspaceEmoji, live);
      if (pruned.length !== this.snapshot.workspacePinned.length || Object.keys(emoji).length !== Object.keys(this.snapshot.workspaceEmoji).length) {
        void this.commit({ workspacePinned: pruned, workspaceEmoji: emoji });
      }
    }
    this.reapplyOrder();
  }
  /** Adopt locally computed partial state and republish. */
  /**
   * One-shot migration entry (legacy-namespace import): commit a whole section
   * patch through the usual adopt → shadow → Host write sequence, so the UI
   * shows the imported state immediately and the pending flag covers the round
   * trip. Callers decide the patch; the controller never inspects it.
   * @param section - section fields to write.
   */
  async importSection(section) {
    await this.commit(section);
  }
  adopt(partial) {
    const next = { ...this.snapshot };
    if (partial.pinned !== void 0) next.pinned = normalizePins(partial.pinned);
    if (partial.workspacePinned !== void 0) next.workspacePinned = normalizePins(partial.workspacePinned);
    if (partial.emoji !== void 0) next.emoji = { ...partial.emoji };
    if (partial.workspaceEmoji !== void 0) next.workspaceEmoji = { ...partial.workspaceEmoji };
    if (partial.recentEmoji !== void 0) next.recentEmoji = [...partial.recentEmoji];
    if (partial.boards !== void 0) next.boards = partial.boards;
    if (partial.tags !== void 0) next.tags = partial.tags;
    if (partial.views !== void 0) next.views = partial.views;
    this.snapshot = next;
    this.notify();
  }
  notify() {
    for (const listener of [...this.listeners]) listener();
  }
};

// src/pin-ui-shared.ts
var BADGE_CLASS = "__dsh-session-emoji-badge__";
var PINNED_CLASS = "__dsh-session-emoji-pinned__";
var HEADER_CLASS = "__dsh-session-emoji-header__";
var FOOTER_CLASS = "__dsh-session-emoji-footer__";
var PANEL_CLASS = "__dsh-session-emoji-panel__";
var PANEL_ROW_CLASS = "__dsh-session-emoji-panel-row__";
var PANEL_SECTION_CLASS = "__dsh-session-emoji-panel-section__";
var PANEL_EMOJI_CLASS = "__dsh-session-emoji-panel-emoji__";
var PANEL_GROUP_CLASS = "__dsh-session-emoji-panel-group__";
var PANEL_GROUP_TOGGLE_CLASS = "__dsh-session-emoji-panel-group-toggle__";
var MANAGE_CLASS = "__dsh-session-emoji-manage__";
var PANEL_EDITOR_CLASS = "__dsh-session-emoji-editor__";
var ROW_CONTROLS_CLASS = "__dsh-session-emoji-row-controls__";
var EMOJI_BUTTON_CLASS = "__dsh-session-emoji-emoji__";
var PICKER_CLASS = "__dsh-session-emoji-picker__";
var PICKER_SEARCH_CLASS = "__dsh-session-emoji-picker-search__";
var PICKER_TABS_CLASS = "__dsh-session-emoji-picker-tabs__";
var PICKER_TAB_CLASS = "__dsh-session-emoji-picker-tab__";
var PICKER_TAB_ACTIVE_CLASS = "__dsh-session-emoji-picker-tab-active__";
var PICKER_BODY_CLASS = "__dsh-session-emoji-picker-body__";
var PICKER_HEADING_CLASS = "__dsh-session-emoji-picker-heading__";
var PICKER_GRID_CLASS = "__dsh-session-emoji-picker-grid__";
var PICKER_OPTION_CLASS = "__dsh-session-emoji-picker-option__";
var PICKER_OPTION_ACTIVE_CLASS = "__dsh-session-emoji-picker-option-active__";
var PICKER_OPTION_SELECTED_CLASS = "__dsh-session-emoji-picker-option-selected__";
var PICKER_HINT_CLASS = "__dsh-session-emoji-picker-hint__";
var PIN_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>';
var CONTROL_STYLE = [
  "all:unset;display:inline-flex;align-items:center;justify-content:center;",
  "cursor:pointer;border-radius:4px;color:#8b949e;",
  "transition:color 120ms ease,background-color 120ms ease;",
  "box-sizing:border-box;flex:none;"
].join("");
var STYLE_TEXT = [
  // Row controls wrapper: the [pin][emoji] pair, hidden until row hover /
  // pinned / decorated / keyboard focus.
  `span.${ROW_CONTROLS_CLASS}{display:inline-flex;align-items:center;gap:2px;margin-right:4px;flex:none;}`,
  `button.${BADGE_CLASS}{`,
  CONTROL_STYLE,
  "width:16px;height:16px;opacity:0;",
  "transition:opacity 80ms ease,color 120ms ease,background-color 120ms ease;",
  "}",
  `button.${EMOJI_BUTTON_CLASS}{`,
  CONTROL_STYLE,
  "width:16px;height:16px;opacity:0;position:relative;font-size:12px;line-height:1;",
  "transition:opacity 80ms ease,color 120ms ease,background-color 120ms ease;",
  "}",
  // Empty-circle placeholder until an emoji is set (the color-era affordance).
  `button.${EMOJI_BUTTON_CLASS}::after{`,
  'content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);',
  "width:9px;height:9px;border-radius:50%;",
  "border:1.5px solid currentColor;background-color:transparent;",
  "}",
  `[role="treeitem"]:hover button.${BADGE_CLASS},`,
  `[role="treeitem"]:hover button.${EMOJI_BUTTON_CLASS},`,
  `button.${BADGE_CLASS}.${PINNED_CLASS},`,
  `button.${BADGE_CLASS}:focus-visible,`,
  `button.${EMOJI_BUTTON_CLASS}:focus-visible,`,
  `button.${EMOJI_BUTTON_CLASS}[data-emoji]{opacity:1;}`,
  // A set emoji replaces the placeholder and renders at glyph size.
  `button.${EMOJI_BUTTON_CLASS}[data-emoji]::after{display:none;}`,
  `button.${BADGE_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${EMOJI_BUTTON_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${BADGE_CLASS}.${PINNED_CLASS}{color:#eab308;}`,
  `button.${BADGE_CLASS}.${PINNED_CLASS}:hover{color:#fbbf24;background-color:rgba(234,179,8,.12);}`,
  // Session-header toggle: always visible, amber while pinned.
  `button.${HEADER_CLASS}{`,
  CONTROL_STYLE,
  "width:24px;height:24px;",
  "}",
  `button.${HEADER_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${HEADER_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  `button.${HEADER_CLASS}.${PINNED_CLASS}{color:#eab308;background-color:rgba(234,179,8,.12);}`,
  // Sidebar foot action.
  `button.${FOOTER_CLASS}{`,
  CONTROL_STYLE,
  "gap:6px;width:100%;height:28px;padding:0 8px;font-size:12px;",
  "}",
  `button.${FOOTER_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${FOOTER_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  // Overlay panel: floats over the frame; opts back into pointer events.
  `div.${PANEL_CLASS}{`,
  "position:fixed;top:48px;right:12px;width:280px;max-height:60vh;overflow:auto;",
  "background:#1f2428;border:1px solid #30363d;border-radius:8px;",
  "box-shadow:0 8px 24px rgba(0,0,0,.4);padding:8px;pointer-events:auto;",
  "color:#e6edf3;font-size:13px;z-index:1000;",
  "}",
  `div.${PANEL_SECTION_CLASS}{`,
  "padding:4px 8px 2px;font-size:11px;letter-spacing:.4px;color:#8b949e;",
  "text-transform:uppercase;",
  "}",
  `div.${PANEL_ROW_CLASS}{`,
  "display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:6px;",
  "cursor:pointer;",
  "}",
  `div.${PANEL_ROW_CLASS}:hover{background:rgba(140,149,159,.12);}`,
  // Panel row emoji slot: read-only; empty circle when the row has no emoji.
  `span.${PANEL_EMOJI_CLASS}{width:14px;height:14px;flex:none;display:inline-flex;`,
  "align-items:center;justify-content:center;font-size:13px;line-height:1;",
  "}",
  `span.${PANEL_EMOJI_CLASS}::after{`,
  'content:"";width:9px;height:9px;border-radius:50%;',
  "border:1.5px solid #8b949e;background-color:transparent;",
  "}",
  `span.${PANEL_EMOJI_CLASS}[data-emoji]::after{display:none;}`,
  // Board-group header: collapsible, uppercase like the section headings.
  `button.${PANEL_GROUP_CLASS}{`,
  "all:unset;display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;",
  "padding:3px 8px;border-radius:6px;cursor:pointer;font-size:11px;letter-spacing:.4px;",
  "text-transform:uppercase;color:#8b949e;",
  "}",
  `button.${PANEL_GROUP_CLASS}:hover{background:rgba(140,149,159,.12);color:#e6edf3;}`,
  `span.${PANEL_GROUP_TOGGLE_CLASS}{width:12px;text-align:center;flex:none;}`,
  // Per-row manage button: hidden until the row hovers / is keyboard focused.
  `button.${MANAGE_CLASS}{`,
  CONTROL_STYLE,
  "width:16px;height:16px;margin-left:auto;opacity:0;font-size:12px;",
  "}",
  `div.${PANEL_ROW_CLASS}:hover button.${MANAGE_CLASS},`,
  `button.${MANAGE_CLASS}:focus-visible{opacity:1;}`,
  `button.${MANAGE_CLASS}:hover{color:#e6edf3;background-color:rgba(140,149,159,.12);}`,
  // Inline per-row board/tag editor.
  `div.${PANEL_EDITOR_CLASS}{`,
  "display:flex;flex-direction:column;gap:4px;padding:6px 8px;margin:0 4px 4px;",
  "border:1px solid #30363d;border-radius:6px;background:#10151b;",
  "}",
  `div.${PANEL_EDITOR_CLASS} select,div.${PANEL_EDITOR_CLASS} input{`,
  "all:unset;box-sizing:border-box;width:100%;padding:3px 6px;border-radius:4px;",
  "background:#1f2428;border:1px solid #3d444d;color:#e6edf3;font-size:12px;",
  "}",
  `div.${PANEL_EDITOR_CLASS} label{font-size:10px;color:#8b949e;letter-spacing:.4px;text-transform:uppercase;}`,
  // Emoji picker popover: anchored, above every other plugin surface.
  `div.${PICKER_CLASS}{`,
  "position:fixed;z-index:1100;width:296px;box-sizing:border-box;",
  "background:#1f2428;border:1px solid #30363d;border-radius:8px;",
  "box-shadow:0 8px 24px rgba(0,0,0,.45);padding:8px;color:#e6edf3;font-size:13px;",
  "}",
  `input.${PICKER_SEARCH_CLASS}{`,
  "all:unset;box-sizing:border-box;width:100%;padding:5px 8px;border-radius:6px;",
  "background:#10151b;border:1px solid #3d444d;color:#e6edf3;font-size:12px;",
  "}",
  `input.${PICKER_SEARCH_CLASS}::placeholder{color:#8b949e;}`,
  `input.${PICKER_SEARCH_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  `div.${PICKER_TABS_CLASS}{display:flex;gap:2px;overflow-x:auto;margin:6px 0 2px;}`,
  `button.${PICKER_TAB_CLASS}{`,
  "all:unset;flex:none;padding:2px 6px;border-radius:6px;cursor:pointer;",
  "font-size:11px;color:#8b949e;white-space:nowrap;",
  "}",
  `button.${PICKER_TAB_CLASS}:hover{color:#e6edf3;background:rgba(140,149,159,.12);}`,
  `button.${PICKER_TAB_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  `button.${PICKER_TAB_CLASS}.${PICKER_TAB_ACTIVE_CLASS}{color:#eab308;background:rgba(234,179,8,.12);}`,
  `div.${PICKER_BODY_CLASS}{max-height:320px;overflow-y:auto;}`,
  `div.${PICKER_HEADING_CLASS}{`,
  "padding:4px 2px 2px;font-size:10px;letter-spacing:.4px;",
  "text-transform:uppercase;color:#8b949e;",
  "}",
  `div.${PICKER_GRID_CLASS}{display:grid;grid-template-columns:repeat(8,1fr);gap:2px;}`,
  `button.${PICKER_OPTION_CLASS}{`,
  "all:unset;box-sizing:border-box;width:100%;height:30px;display:inline-flex;",
  "align-items:center;justify-content:center;font-size:17px;line-height:1;",
  "border-radius:6px;cursor:pointer;",
  "}",
  `button.${PICKER_OPTION_CLASS}:hover{background:rgba(140,149,159,.16);}`,
  `button.${PICKER_OPTION_CLASS}.${PICKER_OPTION_ACTIVE_CLASS}{background:rgba(140,149,159,.2);outline:1px solid #3d444d;}`,
  `button.${PICKER_OPTION_CLASS}.${PICKER_OPTION_SELECTED_CLASS}{background:rgba(234,179,8,.16);outline:1px solid #eab308;}`,
  `div.${PICKER_HINT_CLASS}{padding:6px 2px;font-size:11px;color:#8b949e;}`
].join("");

// src/emoji-picker.ts
var COLUMNS = 8;
var CATEGORY_KEYS = {
  smileys: "categorySmileys",
  people: "categoryPeople",
  animals: "categoryAnimals",
  food: "categoryFood",
  travel: "categoryTravel",
  activities: "categoryActivities",
  objects: "categoryObjects",
  symbols: "categorySymbols"
};
var optionId = (index) => `dsh-session-emoji-option-${String(index)}`;
function createEmojiPicker(deps) {
  const { doc, t } = deps;
  const win = doc.defaultView ?? void 0;
  let root;
  let search;
  let body;
  let anchor;
  let current;
  let onPick;
  let query = "";
  let categoryIndex = 0;
  let visible = [];
  let activeIndex = -1;
  let listening = false;
  let reflowFrame = false;
  const build = () => {
    if (root !== void 0) return;
    root = doc.createElement("div");
    root.className = PICKER_CLASS;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "false");
    search = doc.createElement("input");
    search.type = "search";
    search.className = PICKER_SEARCH_CLASS;
    search.setAttribute("autocomplete", "off");
    search.addEventListener("input", () => {
      query = search?.value ?? "";
      render();
    });
    root.addEventListener("keydown", onKeyDown);
    body = doc.createElement("div");
    body.className = PICKER_BODY_CLASS;
    root.append(search, body);
  };
  const render = () => {
    if (root === void 0 || body === void 0) return;
    root.setAttribute("aria-label", t("emojiPickerTitle"));
    search?.setAttribute("placeholder", t("emojiSearch"));
    search?.setAttribute("aria-label", t("emojiSearch"));
    body.textContent = "";
    if (query.trim() !== "") {
      const result = searchEmoji(query);
      visible = result.rows;
      if (result.rows.length === 0) body.append(hint(t("emojiNoResults")));
      else body.append(grid(result.rows, 0));
      if (result.total > result.rows.length) body.append(hint(t("emojiMore")));
      setActive(result.rows.length > 0 ? 0 : -1);
      return;
    }
    const recentRows = deps.recent().map((char) => emojiRow(char)).filter((row) => row !== void 0);
    const rows = categoryRows(categoryIndex);
    visible = recentRows.length === 0 ? rows : [...recentRows, ...rows];
    body.append(tabs());
    if (recentRows.length > 0) body.append(heading(t("emojiRecent")), grid(recentRows, 0));
    body.append(grid(rows, recentRows.length));
    setActive(visible.length > 0 ? 0 : -1);
  };
  const tabs = () => {
    const strip = doc.createElement("div");
    strip.className = PICKER_TABS_CLASS;
    EMOJI_CATEGORIES.forEach((category, index) => {
      const tab = doc.createElement("button");
      tab.type = "button";
      tab.className = index === categoryIndex ? `${PICKER_TAB_CLASS} ${PICKER_TAB_ACTIVE_CLASS}` : PICKER_TAB_CLASS;
      const key = CATEGORY_KEYS[category.id];
      tab.textContent = key === void 0 ? category.en : t(key);
      tab.title = category.en;
      tab.addEventListener("click", () => {
        categoryIndex = index;
        render();
      });
      strip.append(tab);
    });
    return strip;
  };
  const heading = (label) => {
    const element = doc.createElement("div");
    element.className = PICKER_HEADING_CLASS;
    element.textContent = label;
    return element;
  };
  const hint = (label) => {
    const element = doc.createElement("div");
    element.className = PICKER_HINT_CLASS;
    element.textContent = label;
    return element;
  };
  const grid = (rows, offset) => {
    const element = doc.createElement("div");
    element.className = PICKER_GRID_CLASS;
    element.setAttribute("role", "listbox");
    rows.forEach((row, index) => {
      const listIndex = offset + index;
      const option = doc.createElement("button");
      option.type = "button";
      option.className = row[0] === current ? `${PICKER_OPTION_CLASS} ${PICKER_OPTION_SELECTED_CLASS}` : PICKER_OPTION_CLASS;
      option.textContent = row[0];
      option.title = emojiLabel(row);
      option.setAttribute("aria-label", emojiLabel(row));
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(row[0] === current));
      option.id = optionId(listIndex);
      option.dataset.index = String(listIndex);
      option.dataset.emoji = row[0];
      option.addEventListener("click", () => {
        choose(row[0]);
      });
      element.append(option);
    });
    return element;
  };
  const setActive = (index) => {
    if (root === void 0) return;
    if (visible.length === 0 || index < 0) {
      activeIndex = -1;
      search?.removeAttribute("aria-activedescendant");
      return;
    }
    activeIndex = Math.min(index, visible.length - 1);
    const cell = root.querySelector(`[data-index="${String(activeIndex)}"]`);
    for (const previous of root.querySelectorAll(`.${PICKER_OPTION_ACTIVE_CLASS}`)) previous.classList.remove(PICKER_OPTION_ACTIVE_CLASS);
    cell?.classList.add(PICKER_OPTION_ACTIVE_CLASS);
    search?.setAttribute("aria-activedescendant", optionId(activeIndex));
    if (cell !== null && typeof cell.scrollIntoView === "function") cell.scrollIntoView({ block: "nearest" });
  };
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close();
      return;
    }
    if (event.key === "Enter") {
      const row = visible[activeIndex];
      if (row === void 0) return;
      event.preventDefault();
      choose(row[0]);
      return;
    }
    const stride = event.key === "ArrowDown" ? COLUMNS : event.key === "ArrowUp" ? -COLUMNS : event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (stride === 0) return;
    event.preventDefault();
    setActive(activeIndex + stride);
  };
  const choose = (char) => {
    const chosen = char === current ? null : char;
    const callback = onPick;
    close();
    callback?.(chosen);
  };
  const position = () => {
    if (root === void 0 || anchor === void 0) return;
    const rect = anchor.getBoundingClientRect();
    const width = root.offsetWidth > 0 ? root.offsetWidth : 296;
    const height = root.offsetHeight > 0 ? root.offsetHeight : 360;
    const vw = win?.innerWidth ?? 1024;
    const vh = win?.innerHeight ?? 768;
    let left = rect.left;
    let top = rect.bottom + 4;
    if (left < 8) left = 8;
    if (left + width > vw - 8) left = Math.max(8, vw - width - 8);
    if (top + height > vh - 8) top = Math.max(8, rect.top - height - 4);
    root.style.left = `${String(Math.round(left))}px`;
    root.style.top = `${String(Math.round(top))}px`;
  };
  const reflow = () => {
    if (reflowFrame) return;
    reflowFrame = true;
    const run = () => {
      reflowFrame = false;
      if (anchor !== void 0 && !anchor.isConnected) {
        close();
        return;
      }
      position();
    };
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(run);
    else setTimeout(run, 0);
  };
  const onDocumentClick = (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (root?.contains(target) === true) return;
    if (anchor !== void 0 && (target === anchor || anchor.contains(target))) return;
    close();
  };
  const listen = () => {
    if (listening) return;
    listening = true;
    doc.addEventListener("click", onDocumentClick, true);
    win?.addEventListener("scroll", reflow, true);
    win?.addEventListener("resize", reflow);
  };
  const unlisten = () => {
    if (!listening) return;
    listening = false;
    doc.removeEventListener("click", onDocumentClick, true);
    win?.removeEventListener("scroll", reflow, true);
    win?.removeEventListener("resize", reflow);
  };
  const open = (nextAnchor, nextCurrent, nextOnPick) => {
    if (anchor === nextAnchor && root?.isConnected === true) {
      close();
      return;
    }
    close();
    build();
    anchor = nextAnchor;
    current = nextCurrent;
    onPick = nextOnPick;
    query = "";
    if (search !== void 0) search.value = "";
    if (root !== void 0) doc.body.append(root);
    render();
    position();
    listen();
    search?.focus();
  };
  const close = () => {
    unlisten();
    root?.remove();
    anchor = void 0;
    current = void 0;
    onPick = void 0;
    visible = [];
    activeIndex = -1;
  };
  return {
    open,
    close,
    isOpen: () => root?.isConnected === true,
    dispose: () => {
      close();
      root?.remove();
      root = void 0;
      search = void 0;
      body = void 0;
    }
  };
}

// src/reorder-pump.ts
function createReorderPump(deps) {
  let running = false;
  let pending = false;
  let scheduled = false;
  let issued;
  const pass = async () => {
    const { orderKey, moves } = deps.plan();
    if (moves.length === 0) return;
    const planKey = moves.map((move) => `${move.kind}:${move.id}`).join("\0");
    if (issued !== void 0 && issued.orderKey === orderKey && issued.planKey === planKey) return;
    issued = { orderKey, planKey };
    for (const move of moves) await deps.apply(move);
  };
  const run = async () => {
    if (running) {
      pending = true;
      return;
    }
    running = true;
    try {
      do {
        pending = false;
        await pass();
      } while (pending);
    } catch (error) {
      deps.onError?.(error);
    } finally {
      running = false;
    }
  };
  return {
    request() {
      if (running) {
        pending = true;
        return;
      }
      if (scheduled) return;
      scheduled = true;
      queueMicrotask(() => {
        scheduled = false;
        void run();
      });
    },
    reset() {
      issued = void 0;
    }
  };
}

// src/pin-store.ts
var STORAGE_KEY = "dsh.session-emoji.pinned";
var LEGACY_STORAGE_KEY = "dsh.session-pin.pinned";
function isLocalMode(scope) {
  const snapshot = scope.getSnapshot();
  return snapshot.mode === "memory" || snapshot.status === "unavailable";
}
async function writeField(scope, field, value) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const accepted = await scope.set(field, value);
    if (accepted !== false) return;
  }
  throw new Error(`the Host did not accept the ${field} write`);
}
function createPinStore(scope, storage, storageEvents) {
  const fieldWrites = /* @__PURE__ */ new Map();
  const drainField = async (field) => {
    const state = fieldWrites.get(field);
    if (state === void 0) return;
    while (state.queued !== void 0) {
      const { value, settle } = state.queued;
      state.queued = void 0;
      try {
        await writeField(scope, field, value);
        for (const waiter of settle) waiter.resolve();
      } catch (error) {
        for (const waiter of settle) waiter.reject(error);
      }
    }
    state.running = false;
  };
  const queueField = (field, value) => {
    const state = fieldWrites.get(field) ?? { running: false };
    fieldWrites.set(field, state);
    return new Promise((resolve, reject) => {
      if (state.queued === void 0) state.queued = { value, settle: [] };
      else state.queued.value = value;
      state.queued.settle.push({ resolve, reject });
      if (!state.running) {
        state.running = true;
        void drainField(field);
      }
    });
  };
  const readLocal = () => {
    try {
      return decodeStoredPins(JSON.parse(storage.getItem(STORAGE_KEY) ?? "[]"));
    } catch {
      return emptyStoredPins();
    }
  };
  const snapshot = () => {
    if (isLocalMode(scope)) {
      return {
        ...readLocal(),
        local: true,
        maxPins: 0,
        reorderOnLoad: true,
        pruneStale: true,
        enableBoards: true,
        enableTags: true,
        enableViews: true,
        enableHealth: true,
        enableGoto: true
      };
    }
    const value = scope.getSnapshot().value;
    return {
      pinned: normalizePins(value?.pinned ?? []),
      workspacePinned: normalizePins(value?.workspacePinned ?? []),
      emoji: normalizeEmojiMap(value?.emoji ?? {}),
      workspaceEmoji: normalizeEmojiMap(value?.workspaceEmoji ?? {}),
      recentEmoji: normalizeRecentEmoji(value?.recentEmoji ?? []),
      boards: normalizeBoards(value?.boards),
      tags: normalizeTags(value?.tags),
      views: normalizeViews(value?.views),
      local: false,
      maxPins: value?.maxPins ?? 0,
      reorderOnLoad: value?.reorderOnLoad ?? true,
      pruneStale: value?.pruneStale ?? true,
      enableBoards: value?.enableBoards ?? true,
      enableTags: value?.enableTags ?? true,
      enableViews: value?.enableViews ?? true,
      enableHealth: value?.enableHealth ?? true,
      enableGoto: value?.enableGoto ?? true
    };
  };
  return {
    read: snapshot,
    write(section) {
      if (isLocalMode(scope)) {
        const doc = readLocal();
        if (section.pinned !== void 0) doc.pinned = normalizePins(section.pinned);
        if (section.workspacePinned !== void 0) doc.workspacePinned = normalizePins(section.workspacePinned);
        if (section.emoji !== void 0) doc.emoji = normalizeEmojiMap(section.emoji);
        if (section.workspaceEmoji !== void 0) doc.workspaceEmoji = normalizeEmojiMap(section.workspaceEmoji);
        if (section.recentEmoji !== void 0) doc.recentEmoji = normalizeRecentEmoji(section.recentEmoji);
        if (section.boards !== void 0) doc.boards = normalizeBoards(section.boards);
        if (section.tags !== void 0) doc.tags = normalizeTags(section.tags);
        if (section.views !== void 0) doc.views = normalizeViews(section.views);
        try {
          storage.setItem(STORAGE_KEY, encodeStoredPins(doc));
        } catch {
        }
        return;
      }
      const writes = [];
      for (const [field, value] of Object.entries(section)) writes.push(queueField(field, value));
      return Promise.all(writes).then(() => void 0);
    },
    subscribe(listener) {
      const disposeScope = scope.subscribe(listener);
      const onStorage = (event) => {
        if (event.key === null || event.key === STORAGE_KEY) listener();
      };
      storageEvents.addEventListener("storage", onStorage);
      return () => {
        storageEvents.removeEventListener("storage", onStorage);
        disposeScope();
      };
    }
  };
}

// src/nav-ui.ts
var BAR_CLASS = "__dsh-session-emoji-nav__";
var CHIP_CLASS = "__dsh-session-emoji-nav-chip__";
var CHIP_ACTIVE_CLASS = "__dsh-session-emoji-nav-chip-active__";
var BAR_STYLE_ID = "__dsh-session-emoji-nav-bar-style__";
function ensureBarStyle() {
  if (document.getElementById(BAR_STYLE_ID) !== null) return;
  const style = document.createElement("style");
  style.id = BAR_STYLE_ID;
  style.textContent = [
    `div.${BAR_CLASS}{`,
    "position:fixed;top:48px;right:300px;width:280px;",
    "background:#1f2428;border:1px solid #30363d;border-radius:8px;",
    "box-shadow:0 8px 24px rgba(0,0,0,.4);padding:6px;pointer-events:auto;",
    "color:#e6edf3;font-size:12px;z-index:1001;display:flex;flex-direction:column;gap:6px;",
    "}",
    `button.${CHIP_CLASS}{`,
    "all:unset;cursor:pointer;padding:2px 8px;border-radius:12px;font-size:11px;",
    "border:1px solid #30363d;color:#8b949e;",
    "}",
    `button.${CHIP_CLASS}.${CHIP_ACTIVE_CLASS}{border-color:#eab308;color:#eab308;}`,
    `input.${BAR_CLASS}input{`,
    "all:unset;box-sizing:border-box;width:100%;padding:3px 6px;border-radius:6px;",
    "background:#10151b;border:1px solid #3d444d;color:#e6edf3;font-size:12px;",
    "}",
    `div.${BAR_CLASS}chips{display:flex;flex-wrap:wrap;gap:4px;}`,
    `span.${BAR_CLASS}chipwrap{display:inline-flex;align-items:center;gap:2px;}`,
    `div.${PANEL_ROW_CLASS} span.${BAR_CLASS}health{display:block;margin-left:auto;font-size:10px;color:#8b949e;white-space:nowrap;}`
  ].join("\n");
  document.head.appendChild(style);
}
function mountNavigator(args) {
  const { pin, options, health, goto, openSession } = args;
  ensureBarStyle();
  let bar;
  let disposed = false;
  let filter = { text: "", tags: [], board: void 0 };
  let boardNames = {};
  let draggingBoardId;
  const panelRoot = () => document.querySelector(`div.${PANEL_CLASS}`);
  const applyFilter = () => {
    const root = panelRoot();
    if (root === null) return;
    const rows = [...root.querySelectorAll(`div.${PANEL_ROW_CLASS}`)];
    const entries = rows.map((row) => ({
      id: row.dataset["id"] ?? "",
      name: row.dataset["title"] ?? "",
      tags: (row.dataset["tags"] ?? "").split(" ").filter((tag) => tag !== ""),
      ...row.dataset["board"] === void 0 ? {} : { boardId: row.dataset["board"] }
    }));
    const visible = new Set(filterEntries(entries, filter).map((entry) => entry.id));
    for (const row of rows) {
      row.style.display = visible.has(row.dataset["id"] ?? "") ? "" : "none";
    }
  };
  const refreshHealth = () => {
    if (!options.enableHealth) return;
    const root = panelRoot();
    if (root === null) return;
    for (const row of root.querySelectorAll(`div.${PANEL_ROW_CLASS}[data-session-id]`)) {
      const id = row.dataset["sessionId"];
      if (id === void 0) continue;
      let label = row.querySelector(`span.${BAR_CLASS}health`);
      const events = health.healthFor(id);
      const summary = events === void 0 ? null : summarizeHealth(events);
      const text = summary === null || summary.messages === 0 ? "" : `${summary.messages} msgs \xB7 ${summary.lastDirection === "user" ? "you" : "ai"} \xB7 ${relative(summary.lastActivity)}`;
      if (label === null) {
        label = document.createElement("span");
        label.className = `${BAR_CLASS}health`;
        row.appendChild(label);
      }
      label.textContent = sanitizeLabel(text);
    }
  };
  const renderBar = () => {
    if (bar === void 0 || disposed) return;
    bar.textContent = "";
    const chips = document.createElement("div");
    chips.className = `${BAR_CLASS}chips`;
    const boardChip = (label, boardId) => {
      const wrap = document.createElement("span");
      wrap.className = `${BAR_CLASS}chipwrap`;
      const button = document.createElement("button");
      button.type = "button";
      button.className = boardId === filter.board ? `${CHIP_CLASS} ${CHIP_ACTIVE_CLASS}` : CHIP_CLASS;
      button.textContent = label;
      button.addEventListener("click", () => {
        filter = { ...filter, board: boardId };
        applyFilter();
        renderBar();
      });
      wrap.appendChild(button);
      if (boardId !== void 0) {
        button.draggable = true;
        button.addEventListener("dragstart", (event) => {
          draggingBoardId = boardId;
          const dataTransfer = event.dataTransfer;
          if (dataTransfer != null) dataTransfer.effectAllowed = "move";
        });
        button.addEventListener("dragover", (event) => {
          event.preventDefault();
        });
        button.addEventListener("drop", (event) => {
          event.preventDefault();
          const source = draggingBoardId;
          draggingBoardId = void 0;
          if (source === void 0 || source === boardId) return;
          const ordered = Object.entries(pin.getBoards().byId).sort((a, b) => a[1].order - b[1].order).map(([id]) => id);
          const without = ordered.filter((id) => id !== source);
          without.splice(Math.max(0, without.indexOf(boardId)), 0, source);
          void pin.reorderBoards(without).then(() => renderBar());
        });
        const rename = document.createElement("button");
        rename.type = "button";
        rename.className = CHIP_CLASS;
        rename.textContent = "\u270E";
        rename.title = "Rename board";
        rename.addEventListener("click", (event) => {
          event.stopPropagation();
          const name2 = (window.prompt("Board name", label) ?? "").trim();
          if (name2 === "") return;
          void pin.renameBoard(boardId, name2).then(() => renderBar());
        });
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = CHIP_CLASS;
        remove.textContent = "\u2715";
        remove.title = "Delete board";
        remove.addEventListener("click", (event) => {
          event.stopPropagation();
          if (!window.confirm(`Delete board "${label}"?`)) return;
          void pin.removeBoard(boardId).then(() => {
            if (filter.board === boardId) filter = { ...filter, board: void 0 };
            applyFilter();
            renderBar();
          });
        });
        wrap.append(rename, remove);
      }
      chips.appendChild(wrap);
    };
    if (options.enableBoards) {
      boardChip("All", void 0);
      const byOrder = Object.entries(pin.getBoards().byId).sort((a, b) => a[1].order - b[1].order);
      for (const [id, board] of byOrder) {
        boardNames[id] = board.name;
        boardChip(board.name, id);
      }
      const add = document.createElement("button");
      add.type = "button";
      add.className = CHIP_CLASS;
      add.textContent = "+ board";
      add.addEventListener("click", () => {
        const name2 = (window.prompt("Board name") ?? "").trim();
        if (name2 === "") return;
        const existing = Object.keys(pin.getBoards().byId);
        void pin.createBoard(suggestBoardId(name2, existing), name2).then(() => renderBar());
      });
      chips.appendChild(add);
    }
    bar.appendChild(chips);
    if (options.enableTags) {
      const tagInput = document.createElement("input");
      tagInput.className = `${BAR_CLASS}input`;
      tagInput.placeholder = "filter: text, #tag";
      tagInput.value = filter.text;
      tagInput.addEventListener("input", () => {
        filter = { ...filter, text: tagInput.value };
        applyFilter();
      });
      tagInput.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        const value = tagInput.value.trim();
        if (value.startsWith("#")) {
          filter = { ...filter, tags: value.slice(1).split(",").map((tag) => tag.trim()).filter((tag) => tag !== "") };
          tagInput.value = "";
        }
        applyFilter();
        renderBar();
      });
      bar.appendChild(tagInput);
    }
    if (options.enableViews) {
      const viewRow = document.createElement("div");
      viewRow.className = `${BAR_CLASS}chips`;
      const save = document.createElement("button");
      save.type = "button";
      save.className = CHIP_CLASS;
      save.textContent = "+ view";
      save.addEventListener("click", () => {
        void pin.saveView({
          id: `view-${Date.now()}`,
          name: filter.board !== void 0 ? boardNames[filter.board] ?? "board" : (filter.tags[0] ?? filter.text) || `view-${pin.getViews().length + 1}`,
          text: filter.text,
          tags: filter.tags,
          ...filter.board === void 0 ? {} : { board: filter.board }
        });
        renderBar();
      });
      viewRow.appendChild(save);
      for (const view of pin.getViews()) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = CHIP_CLASS;
        button.textContent = view.name;
        button.addEventListener("click", () => {
          filter = { text: view.text, tags: view.tags, board: view.board };
          applyFilter();
          renderBar();
        });
        viewRow.appendChild(button);
      }
      bar.appendChild(viewRow);
    }
  };
  const sync = () => {
    if (disposed) return;
    const root = panelRoot();
    if (root === null) {
      if (bar !== void 0) bar.style.display = "none";
      return;
    }
    if (bar === void 0) {
      bar = document.createElement("div");
      bar.className = BAR_CLASS;
      document.body.appendChild(bar);
    }
    bar.style.display = "flex";
    renderBar();
    applyFilter();
    refreshHealth();
  };
  let syncTimer;
  const scheduleSync = () => {
    if (syncTimer !== void 0) clearTimeout(syncTimer);
    syncTimer = setTimeout(sync, 60);
  };
  const observer = new MutationObserver(scheduleSync);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  sync();
  const onKeydown = (event) => {
    if (!options.enableGoto || event.key !== "Enter" || event.isComposing) return;
    const composer = event.target instanceof HTMLTextAreaElement && event.target.closest("[data-input-scroll]") !== null ? event.target : void 0;
    if (composer === void 0) return;
    const match = /^\/goto\s+(\S.*)$/.exec(composer.value.trim());
    if (match === null) return;
    event.preventDefault();
    event.stopPropagation();
    const keyword = match[1];
    const hits = gotoMatches(goto.entries(), keyword);
    if (hits.length === 1) {
      openSession(hits[0].id);
      composer.value = "";
    } else if (hits.length > 1) {
      const names = hits.map((entry) => `- ${sanitizeLabel(entry.name)}`).join("\n");
      window.alert(`goto "${keyword}" matches ${hits.length} sessions:
${names}`);
    } else {
      window.alert(`goto "${keyword}": no session title or tag matches`);
    }
  };
  window.addEventListener("keydown", onKeydown, true);
  const disposePin = pin.subscribe(scheduleSync);
  return () => {
    disposed = true;
    window.removeEventListener("keydown", onKeydown, true);
    observer.disconnect();
    disposePin();
    if (syncTimer !== void 0) clearTimeout(syncTimer);
    bar?.remove();
    bar = void 0;
  };
}
function relative(time) {
  if (time === null) return "\u2014";
  const delta = Date.now() - time;
  if (delta < 6e4) return "now";
  if (delta < 36e5) return `${Math.floor(delta / 6e4)}m ago`;
  if (delta < 864e5) return `${Math.floor(delta / 36e5)}h ago`;
  return `${Math.floor(delta / 864e5)}d ago`;
}

// src/locales.ts
var LOCALE_NS = "session-emoji";
var ENGLISH = {
  pin: "Pin session",
  unpin: "Unpin session",
  limit: "Pin limit reached; unpin another session first",
  pinWorkspace: "Pin workspace",
  unpinWorkspace: "Unpin workspace",
  limitWorkspace: "Workspace pin limit reached; unpin another workspace first",
  emojiPick: "Select emoji (Shift+click to clear)",
  emojiPickerTitle: "Choose an emoji",
  emojiSearch: "Search emoji\u2026",
  emojiRecent: "Recently used",
  emojiNoResults: "No matching emoji",
  emojiMore: "More matches \u2014 keep typing to narrow the list",
  categorySmileys: "Smileys",
  categoryPeople: "People",
  categoryAnimals: "Animals",
  categoryFood: "Food",
  categoryTravel: "Travel",
  categoryActivities: "Activity",
  categoryObjects: "Objects",
  categorySymbols: "Symbols",
  panelTitle: "Pinned sessions",
  panelEmpty: "Nothing pinned yet",
  panelSessions: "Sessions",
  panelWorkspaces: "Workspaces",
  footerTitle: "Pinned sessions",
  ungrouped: "Ungrouped",
  manageRow: "Assign board or tags",
  boardLabel: "Board",
  tagsLabel: "Tags",
  save: "Save",
  close: "Close"
};
var LOCALE_DICTS = {
  zh: {
    pin: "\u7F6E\u9876\u4F1A\u8BDD",
    unpin: "\u53D6\u6D88\u7F6E\u9876",
    limit: "\u5DF2\u8FBE\u7F6E\u9876\u4E0A\u9650\uFF0C\u8BF7\u5148\u53D6\u6D88\u5176\u4ED6\u4F1A\u8BDD",
    pinWorkspace: "\u7F6E\u9876\u5DE5\u4F5C\u533A",
    unpinWorkspace: "\u53D6\u6D88\u5DE5\u4F5C\u533A\u7F6E\u9876",
    limitWorkspace: "\u5DF2\u8FBE\u5DE5\u4F5C\u533A\u7F6E\u9876\u4E0A\u9650\uFF0C\u8BF7\u5148\u53D6\u6D88\u5176\u4ED6\u5DE5\u4F5C\u533A",
    emojiPick: "\u9009\u62E9\u8868\u60C5\uFF08Shift+\u70B9\u51FB\u6E05\u9664\uFF09",
    emojiPickerTitle: "\u9009\u62E9\u8868\u60C5",
    emojiSearch: "\u641C\u7D22\u8868\u60C5\u2026",
    emojiRecent: "\u6700\u8FD1\u4F7F\u7528",
    emojiNoResults: "\u6CA1\u6709\u5339\u914D\u7684\u8868\u60C5",
    emojiMore: "\u7ED3\u679C\u8FC7\u591A\uFF0C\u7EE7\u7EED\u8F93\u5165\u4EE5\u7F29\u5C0F\u8303\u56F4",
    categorySmileys: "\u7B11\u8138",
    categoryPeople: "\u4EBA\u7269",
    categoryAnimals: "\u52A8\u7269",
    categoryFood: "\u98DF\u7269",
    categoryTravel: "\u65C5\u884C",
    categoryActivities: "\u6D3B\u52A8",
    categoryObjects: "\u7269\u54C1",
    categorySymbols: "\u7B26\u53F7",
    panelTitle: "\u5DF2\u7F6E\u9876\u7684\u4F1A\u8BDD",
    panelEmpty: "\u8FD8\u6CA1\u6709\u7F6E\u9876\u4EFB\u4F55\u5185\u5BB9",
    panelSessions: "\u4F1A\u8BDD",
    panelWorkspaces: "\u5DE5\u4F5C\u533A",
    footerTitle: "\u5DF2\u7F6E\u9876\u7684\u4F1A\u8BDD",
    ungrouped: "\u672A\u5206\u7EC4",
    manageRow: "\u5F52\u7EC4\u6216\u8BBE\u7F6E\u6807\u7B7E",
    boardLabel: "\u5206\u7EC4",
    tagsLabel: "\u6807\u7B7E",
    save: "\u4FDD\u5B58",
    close: "\u5173\u95ED"
  },
  en: ENGLISH
};
var fallbackTranslate = (key) => ENGLISH[key];

// src/overlay.ts
var OVERLAY_OWNED = "1";
var LIMIT_FLASH_MS = 1800;
function mountOverlay(deps) {
  const { sessions, workspaces, pin, t, doc } = deps;
  let renderScheduled = false;
  const flashes = /* @__PURE__ */ new Map();
  const titleOf = () => {
    const list = sessions.getSnapshot();
    const byTitle = /* @__PURE__ */ new Map();
    for (const id of list.ids) {
      const summary = list.byId[id];
      if (summary === void 0 || summary.blank) continue;
      const existing = byTitle.get(summary.displayTitle);
      if (existing === void 0) byTitle.set(summary.displayTitle, [id]);
      else existing.push(id);
    }
    return byTitle;
  };
  const workspaceTitleOf = () => {
    const byTitle = /* @__PURE__ */ new Map();
    for (const item of workspaces.getSnapshot().items) {
      if (item.title !== "") byTitle.set(item.title, item.workspaceId);
    }
    return byTitle;
  };
  const sessionIdsFor = (row) => {
    const byTitle = titleOf();
    const span = [...row.querySelectorAll("span")].find((span2) => span2.textContent !== null && span2.textContent !== "" && byTitle.has(span2.textContent));
    if (span === void 0) return void 0;
    return { title: span.textContent ?? "", ids: byTitle.get(span.textContent ?? "") ?? [] };
  };
  const workspaceIdFor = (row) => {
    const byTitle = workspaceTitleOf();
    const span = [...row.querySelectorAll("span")].find((span2) => span2.textContent !== null && span2.textContent !== "" && byTitle.has(span2.textContent));
    if (span === void 0) return void 0;
    return byTitle.get(span.textContent ?? "");
  };
  const hasForeignBadge = (row) => {
    for (const badge of row.querySelectorAll(`button.${BADGE_CLASS}`)) {
      if (badge.dataset.overlayOwned !== OVERLAY_OWNED) return true;
    }
    return false;
  };
  const createControls = (row, kind) => {
    const badge = doc.createElement("button");
    badge.type = "button";
    badge.className = BADGE_CLASS;
    badge.dataset.overlayOwned = OVERLAY_OWNED;
    badge.innerHTML = PIN_SVG;
    const emoji = doc.createElement("button");
    emoji.type = "button";
    emoji.className = EMOJI_BUTTON_CLASS;
    emoji.dataset.overlayOwned = OVERLAY_OWNED;
    const wrapper = doc.createElement("span");
    wrapper.className = ROW_CONTROLS_CLASS;
    wrapper.dataset.overlayOwned = OVERLAY_OWNED;
    wrapper.append(badge, emoji);
    row.insertBefore(wrapper, row.firstChild);
    const flash = (key, limitLabel, onRejected) => {
      const started = Date.now();
      flashes.set(key, started);
      onRejected(limitLabel);
      setTimeout(() => {
        if (flashes.get(key) !== started) return;
        flashes.delete(key);
        scheduleRender();
      }, LIMIT_FLASH_MS);
    };
    badge.addEventListener("click", (event) => {
      event.stopPropagation();
      if (kind === "session" && !deps.sessionSlotActive()) {
        const target = sessionIdsFor(row)?.ids[0];
        if (target === void 0) return;
        const key = `s:${target}`;
        void pin.toggle(target).then((result) => {
          if (result !== "limit") return;
          deps.warn(`session-emoji: pin limit (${String(pin.getMaxPins())}) reached; unpin another session first`);
          flash(key, t("limit"), (label) => {
            badge.title = label;
            badge.setAttribute("aria-label", label);
          });
        });
        return;
      }
      if (kind === "workspace") {
        const workspace = workspaceIdFor(row);
        if (workspace === void 0) return;
        const key = `w:${workspace}`;
        void pin.toggleWorkspace(workspace).then((result) => {
          if (result !== "limit") return;
          deps.warn(`session-emoji: workspace pin limit (${String(pin.getMaxPins())}) reached; unpin another workspace first`);
          flash(key, t("limitWorkspace"), (label) => {
            badge.title = label;
            badge.setAttribute("aria-label", label);
          });
        });
      }
    });
    emoji.addEventListener("click", (event) => {
      event.stopPropagation();
      if (kind === "session" && !deps.sessionSlotActive()) {
        const target = sessionIdsFor(row)?.ids[0];
        if (target === void 0) return;
        if (event.shiftKey) void pin.clearEmoji(target);
        else deps.picker.open(emoji, pin.getEmoji(target), (chosen) => {
          void (chosen === null ? pin.clearEmoji(target) : pin.setEmoji(target, chosen));
        });
        return;
      }
      if (kind === "workspace") {
        const workspace = workspaceIdFor(row);
        if (workspace === void 0) return;
        if (event.shiftKey) void pin.clearWorkspaceEmoji(workspace);
        else deps.picker.open(emoji, pin.getWorkspaceEmoji(workspace), (chosen) => {
          void (chosen === null ? pin.clearWorkspaceEmoji(workspace) : pin.setWorkspaceEmoji(workspace, chosen));
        });
      }
    });
    return { badge, emoji };
  };
  const renderSessionRow = (row) => {
    if (deps.sessionSlotActive()) {
      for (const wrapper2 of row.querySelectorAll(`span.${ROW_CONTROLS_CLASS}[data-overlay-owned="${OVERLAY_OWNED}"]`)) wrapper2.remove();
      return;
    }
    if (hasForeignBadge(row)) {
      for (const wrapper2 of row.querySelectorAll(`span.${ROW_CONTROLS_CLASS}[data-overlay-owned="${OVERLAY_OWNED}"]`)) wrapper2.remove();
      return;
    }
    const match = sessionIdsFor(row);
    let wrapper = row.querySelector(`:scope > span.${ROW_CONTROLS_CLASS}[data-overlay-owned="${OVERLAY_OWNED}"]`);
    if (match === void 0 || match.ids.length === 0) {
      wrapper?.remove();
      return;
    }
    if (wrapper === null) wrapper = createControls(row, "session").badge.parentElement;
    const { badge, emoji } = readControls(wrapper);
    if (badge === void 0 || emoji === void 0) return;
    const ids = match.ids;
    const target = ids[0];
    const isPinned = ids.some((id) => pin.isPinned(id));
    badge.classList.toggle(PINNED_CLASS, isPinned);
    badge.setAttribute("aria-pressed", String(isPinned));
    paintEmojiButton(emoji, pin.getEmoji(target));
    const flashing = flashes.has(`s:${target}`);
    if (!flashing) {
      const label = t(ids.some((id) => pin.isPinned(id)) ? "unpin" : "pin");
      badge.title = label;
      badge.setAttribute("aria-label", label);
    }
  };
  const renderWorkspaceRow = (row) => {
    const id = workspaceIdFor(row);
    let wrapper = row.querySelector(`:scope > span.${ROW_CONTROLS_CLASS}[data-overlay-owned="${OVERLAY_OWNED}"]`);
    if (id === void 0) {
      wrapper?.remove();
      return;
    }
    if (wrapper === null) wrapper = createControls(row, "workspace").badge.parentElement;
    const { badge, emoji } = readControls(wrapper);
    if (badge === void 0 || emoji === void 0) return;
    const isPinned = pin.isWorkspacePinned(id);
    badge.classList.toggle(PINNED_CLASS, isPinned);
    badge.setAttribute("aria-pressed", String(isPinned));
    paintEmojiButton(emoji, pin.getWorkspaceEmoji(id));
    const flashing = flashes.has(`w:${id}`);
    if (!flashing) {
      const label = t(isPinned ? "unpinWorkspace" : "pinWorkspace");
      badge.title = label;
      badge.setAttribute("aria-label", label);
    }
  };
  const readControls = (wrapper) => ({
    badge: wrapper.querySelector(`button.${BADGE_CLASS}`) ?? void 0,
    emoji: wrapper.querySelector(`button.${EMOJI_BUTTON_CLASS}`) ?? void 0
  });
  const paintEmojiButton = (button, emoji) => {
    const label = t("emojiPick");
    button.title = label;
    button.setAttribute("aria-label", label);
    if (emoji === void 0) {
      button.textContent = "";
      button.removeAttribute("data-emoji");
    } else {
      button.textContent = emoji;
      button.setAttribute("data-emoji", emoji);
    }
  };
  const render = () => {
    renderScheduled = false;
    for (const row of doc.querySelectorAll('[role="treeitem"][aria-selected]')) {
      if (!(row instanceof HTMLElement)) continue;
      renderSessionRow(row);
    }
    for (const row of doc.querySelectorAll('[role="treeitem"][aria-expanded]')) {
      if (!(row instanceof HTMLElement)) continue;
      if (row.hasAttribute("aria-selected")) continue;
      renderWorkspaceRow(row);
    }
  };
  const scheduleRender = () => {
    if (renderScheduled) return;
    renderScheduled = true;
    const run = () => {
      render();
    };
    const raf = deps.raf;
    if (raf !== void 0) raf(run);
    else if (typeof requestAnimationFrame === "function") requestAnimationFrame(run);
    else setTimeout(run, 0);
  };
  const observer = new MutationObserver(() => {
    scheduleRender();
  });
  observer.observe(doc.body, { childList: true, subtree: true, characterData: true });
  const disposePin = pin.subscribe(scheduleRender);
  const disposeSessions = sessions.subscribe(scheduleRender);
  const disposeWorkspaces = workspaces.subscribe(scheduleRender);
  const disposeSlots = deps.onSlotsChange(scheduleRender);
  scheduleRender();
  return () => {
    disposeSlots();
    disposeWorkspaces();
    disposeSessions();
    disposePin();
    observer.disconnect();
    for (const wrapper of doc.querySelectorAll(`span.${ROW_CONTROLS_CLASS}[data-overlay-owned="${OVERLAY_OWNED}"]`)) wrapper.remove();
    flashes.clear();
  };
}

// src/ui.ts
var React = __toESM(require("react"), 1);
function createPinUiState() {
  let open = false;
  let snapshot = { open };
  const listeners = /* @__PURE__ */ new Set();
  const notify = () => {
    for (const listener of [...listeners]) listener();
  };
  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    setOpen(next) {
      if (next === open) return;
      open = next;
      snapshot = { open };
      notify();
    },
    toggle() {
      open = !open;
      snapshot = { open };
      notify();
    }
  };
}
function PinHeaderButton(props) {
  const { sessionId, useProjection, pin, t } = props;
  const id = sessionId;
  const readProjection = useProjection;
  const projected = readProjection("pin");
  const stored = React.useSyncExternalStore(
    pin.subscribe,
    () => pin.isPinned(id)
  );
  const isPinned = projected?.pinned ?? stored;
  const label = isPinned ? t("unpin") : t("pin");
  return React.createElement("button", {
    type: "button",
    className: `${HEADER_CLASS}${isPinned ? ` ${PINNED_CLASS}` : ""}`,
    title: label,
    "aria-label": label,
    "aria-pressed": isPinned,
    onClick: (event) => {
      event.stopPropagation();
      void pin.setPinned(id, !isPinned);
    }
  }, React.createElement("span", { dangerouslySetInnerHTML: { __html: PIN_SVG } }));
}
function PinFooterAction(props) {
  const { wide, pin, ui, t } = props;
  const count = React.useSyncExternalStore(pin.subscribe, () => pin.getPinned().length + pin.getWorkspacePinned().length);
  const syncPending = React.useSyncExternalStore(pin.subscribe, () => pin.hasPendingWrites());
  const open = React.useSyncExternalStore(ui.subscribe, () => ui.getSnapshot().open);
  const label = t("footerTitle");
  return React.createElement(
    "button",
    {
      type: "button",
      className: FOOTER_CLASS,
      title: label,
      "aria-label": label,
      "aria-pressed": open,
      // The settings round trip is asynchronous; mark the control while a
      // committed change has not been acknowledged by the Host yet.
      "data-pending": syncPending ? "1" : void 0,
      onClick: () => {
        ui.toggle();
      }
    },
    React.createElement("span", { dangerouslySetInnerHTML: { __html: PIN_SVG } }),
    wide ? React.createElement("span", null, count > 0 ? `${label} (${count})` : label) : null
  );
}
function boardName(boards, boardId, ungroupedLabel) {
  return boardId === void 0 ? ungroupedLabel : boards.byId[boardId]?.name ?? boardId;
}
function panelRow(key, title, emoji, onClick, navigator, manageLabel, onManage) {
  return React.createElement(
    "div",
    {
      key,
      className: PANEL_ROW_CLASS,
      role: "button",
      tabIndex: 0,
      title,
      "data-id": navigator.id,
      "data-title": title,
      "data-tags": navigator.tags.join(" "),
      ...navigator.boardId === void 0 ? {} : { "data-board": navigator.boardId },
      ...navigator.sessionId === void 0 ? {} : { "data-session-id": navigator.sessionId },
      onClick,
      onKeyDown: (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        onClick();
      }
    },
    React.createElement("span", { dangerouslySetInnerHTML: { __html: PIN_SVG } }),
    React.createElement("span", { className: PANEL_EMOJI_CLASS, ...emoji === void 0 ? {} : { "data-emoji": emoji } }, emoji),
    React.createElement("span", null, title),
    React.createElement("button", {
      type: "button",
      className: MANAGE_CLASS,
      title: manageLabel,
      "aria-label": manageLabel,
      onClick: (event) => {
        event.stopPropagation();
        onManage();
      }
    }, "\u22EF")
  );
}
function groupHeader(key, label, count, collapsed, onToggle) {
  return React.createElement(
    "button",
    {
      key,
      type: "button",
      className: PANEL_GROUP_CLASS,
      onClick: onToggle,
      "aria-expanded": !collapsed
    },
    React.createElement("span", { className: PANEL_GROUP_TOGGLE_CLASS }, collapsed ? "\u25B8" : "\u25BE"),
    React.createElement("span", null, `${label} (${count})`)
  );
}
function RowEditor(props) {
  const { id, boards, currentBoard, currentTags, pin, t, onClose } = props;
  const [text, setText] = React.useState(currentTags.join(", "));
  const boardOptions = Object.entries(boards.byId).sort((a, b) => a[1].order - b[1].order);
  const save = () => {
    void pin.setTags(id, text.split(",").map((tag) => tag.trim()).filter((tag) => tag !== ""));
    onClose();
  };
  return React.createElement(
    "div",
    { className: PANEL_EDITOR_CLASS, onClick: (event) => event.stopPropagation() },
    React.createElement("label", null, t("boardLabel")),
    React.createElement(
      "select",
      {
        value: currentBoard ?? "",
        onChange: (event) => {
          void pin.assignBoard(id, event.target.value);
        }
      },
      React.createElement("option", { value: "" }, t("ungrouped")),
      boardOptions.map(([boardId, board]) => React.createElement("option", { key: boardId, value: boardId }, board.name))
    ),
    React.createElement("label", null, t("tagsLabel")),
    React.createElement("input", {
      value: text,
      onChange: (event) => {
        setText(event.target.value);
      },
      onKeyDown: (event) => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        save();
      }
    }),
    React.createElement(
      "div",
      { style: { display: "flex", gap: "4px" } },
      React.createElement("button", { type: "button", onClick: save, "aria-label": t("save") }, "\u2713"),
      React.createElement("button", { type: "button", onClick: onClose, "aria-label": t("close") }, "\u2715")
    )
  );
}
function PinPanel(props) {
  const { pin, ui, sessions, workspaces, t, openSession, openWorkspace } = props;
  const open = React.useSyncExternalStore(ui.subscribe, () => ui.getSnapshot().open);
  const pinned = React.useSyncExternalStore(pin.subscribe, () => pin.getPinned());
  const workspacePinned = React.useSyncExternalStore(pin.subscribe, () => pin.getWorkspacePinned());
  const boards = React.useSyncExternalStore(pin.subscribe, () => pin.getBoards());
  const tags = React.useSyncExternalStore(pin.subscribe, () => pin.getTags());
  const list = React.useSyncExternalStore(sessions.subscribe, () => sessions.getSnapshot());
  const workspaceList = React.useSyncExternalStore(workspaces.subscribe, () => workspaces.getSnapshot());
  const [collapsed, setCollapsed] = React.useState({});
  const [editing, setEditing] = React.useState(null);
  const panelRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") ui.setOpen(false);
    };
    const onClick = (event) => {
      const target = event.target;
      if (target instanceof Node && panelRef.current?.contains(target)) return;
      ui.setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick, true);
    };
  }, [open, ui]);
  if (!open) return null;
  const rows = [];
  const wsById = new Map(workspaceList.items.map((item) => [item.workspaceId, item.title]));
  const renderSection = (sectionKey, sectionLabel, ids, titleOf, emojiOf, openRow, isSession) => {
    if (ids.length === 0) return;
    rows.push(React.createElement("div", { key: `${sectionKey}-head`, className: PANEL_SECTION_CLASS }, sectionLabel));
    for (const group of groupPinnedByBoard(ids, boards)) {
      const groupBoardId = group.boardId;
      const groupKey = `${sectionKey}:${groupBoardId ?? "ungrouped"}`;
      const isCollapsed = collapsed[groupKey] === true;
      rows.push(groupHeader(groupKey, boardName(boards, groupBoardId, t("ungrouped")), group.ids.length, isCollapsed, () => {
        setCollapsed((prev) => ({ ...prev, [groupKey]: !isCollapsed }));
      }));
      if (isCollapsed) continue;
      for (const id of group.ids) {
        const title = titleOf(id);
        rows.push(panelRow(
          `${sectionKey}:${id}`,
          title,
          emojiOf(id),
          () => {
            openRow(id);
            ui.setOpen(false);
          },
          {
            id,
            tags: tags[id] ?? [],
            ...boards.membership[id] === void 0 ? {} : { boardId: boards.membership[id] },
            ...isSession ? { sessionId: id } : {}
          },
          t("manageRow"),
          () => setEditing(editing === id ? null : id)
        ));
        if (editing === id) {
          rows.push(React.createElement(RowEditor, {
            key: `edit:${sectionKey}:${id}`,
            id,
            boards,
            currentBoard: boards.membership[id],
            currentTags: tags[id] ?? [],
            pin,
            t,
            onClose: () => setEditing(null)
          }));
        }
      }
    }
  };
  renderSection("w", t("panelWorkspaces"), workspacePinned, (id) => wsById.get(id) ?? id, (id) => pin.getWorkspaceEmoji(id), openWorkspace, false);
  renderSection("s", t("panelSessions"), pinned, (id) => String(list.byId[id]?.displayTitle ?? id), (id) => pin.getEmoji(id), openSession, true);
  if (rows.length === 0) {
    rows.push(React.createElement("div", { key: "__empty__", className: PANEL_ROW_CLASS }, t("panelEmpty")));
  }
  return React.createElement("div", {
    ref: panelRef,
    className: PANEL_CLASS,
    role: "dialog",
    "aria-label": t("panelTitle")
  }, rows);
}
function registerSlots(deps) {
  const { ctx, pin, ui, sessions, workspaces, t, openSession, openWorkspace } = deps;
  const disposers = [];
  disposers.push(ctx.slots.inject("conversation.session.header.actions", () => ctx.slots.register(
    {
      name: "conversation.session.header.actions",
      id: "dsh-session-emoji",
      order: 50,
      inject: () => ({ pin, t })
    },
    PinHeaderButton
  )));
  disposers.push(ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register(
    {
      name: "sidebar.footer.action",
      id: "dsh-session-emoji",
      order: 50,
      inject: () => ({ pin, ui, t })
    },
    PinFooterAction
  )));
  disposers.push(ctx.slots.inject("shell.overlay", () => ctx.slots.register(
    {
      name: "shell.overlay",
      id: "dsh-session-emoji-panel",
      order: 50,
      inject: () => ({ pin, ui, sessions, workspaces, t, openSession, openWorkspace })
    },
    PinPanel
  )));
  return () => {
    for (const dispose of disposers.splice(0)) dispose();
  };
}

// src/legacy-import.ts
var LEGACY_ENTRY_ID = "session-pin";
function empty(value) {
  if (value === void 0 || value === null) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}
function planLegacyImport(legacy, current) {
  if (legacy === void 0) return null;
  const patch = {};
  const pins = normalizePins(legacy.pinned ?? []);
  if (pins.length > 0 && empty(current.pinned)) patch.pinned = pins;
  const workspacePins = normalizePins(legacy.workspacePinned ?? []);
  if (workspacePins.length > 0 && empty(current.workspacePinned)) patch.workspacePinned = workspacePins;
  const emoji = normalizeEmojiMap(legacy.emoji ?? {});
  if (Object.keys(emoji).length > 0 && empty(current.emoji)) patch.emoji = emoji;
  const workspaceEmoji = normalizeEmojiMap(legacy.workspaceEmoji ?? {});
  if (Object.keys(workspaceEmoji).length > 0 && empty(current.workspaceEmoji)) patch.workspaceEmoji = workspaceEmoji;
  const recentEmoji = normalizeRecentEmoji(legacy.recentEmoji ?? []);
  if (recentEmoji.length > 0 && empty(current.recentEmoji)) patch.recentEmoji = recentEmoji;
  const boards = normalizeBoards(legacy.boards);
  if ((Object.keys(boards.byId).length > 0 || Object.keys(boards.membership).length > 0) && empty(current.boards)) patch.boards = boards;
  const tags = normalizeTags(legacy.tags);
  if (Object.keys(tags).length > 0 && empty(current.tags)) patch.tags = tags;
  const views = normalizeViews(legacy.views);
  if (views.length > 0 && empty(current.views)) patch.views = views;
  return Object.keys(patch).length === 0 ? null : patch;
}
function runLegacyImport(deps) {
  let finished = false;
  const attempt = () => {
    if (finished) return;
    const legacy2 = deps.legacyScope();
    const own = deps.scope.getSnapshot();
    if (own.status === "loading") return;
    let patch = null;
    if (legacy2 !== void 0) {
      const snapshot = legacy2.getSnapshot();
      if (snapshot.status === "loading") return;
      patch = snapshot.status === "ready" && snapshot.value !== void 0 ? planLegacyImport(snapshot.value, own.value ?? {}) : null;
    } else {
      patch = planLegacyImport(readLegacyDocument(deps.storage), own.value ?? {});
    }
    finished = true;
    if (patch === null) return;
    void deps.apply(patch).then(
      () => void 0,
      (error) => {
        deps.logger.warn(`session-emoji: legacy state import failed: ${String(error)}`);
      }
    );
  };
  const disposeOwn = deps.scope.subscribe(attempt);
  const legacy = deps.legacyScope();
  const disposeLegacy = legacy === void 0 ? () => {
  } : legacy.subscribe(attempt);
  attempt();
  return () => {
    disposeOwn();
    disposeLegacy();
  };
}
function readLegacyDocument(storage) {
  try {
    const raw = storage.getItem(LEGACY_STORAGE_KEY);
    if (raw === null || raw.length === 0) return void 0;
    return decodeStoredPins(JSON.parse(raw));
  } catch {
    return void 0;
  }
}

// src/row-slot.ts
var React2 = __toESM(require("react"), 1);
var ROW_SLOT_KEY = "sessions.row.action";
function RowEmoji(props) {
  const { emoji, pin, picker, id, t } = props;
  const label = t("emojiPick");
  const ref = React2.useRef(null);
  return React2.createElement("button", {
    type: "button",
    ref,
    className: EMOJI_BUTTON_CLASS,
    title: label,
    "aria-label": label,
    ...emoji === void 0 ? {} : { "data-emoji": emoji },
    onClick: (event) => {
      event.stopPropagation();
      if (event.shiftKey) {
        void pin.clearEmoji(id);
        return;
      }
      const anchor = ref.current;
      if (anchor === null) return;
      picker.open(anchor, emoji, (chosen) => {
        void (chosen === null ? pin.clearEmoji(id) : pin.setEmoji(id, chosen));
      });
    }
  }, emoji === void 0 ? null : emoji);
}
function RowBadge(props) {
  const { sessionId, pin, t } = props;
  const isPinned = React2.useSyncExternalStore(pin.subscribe, () => pin.isPinned(sessionId));
  const emoji = React2.useSyncExternalStore(pin.subscribe, () => pin.getEmoji(sessionId));
  const label = isPinned ? t("unpin") : t("pin");
  return React2.createElement(
    "span",
    { className: ROW_CONTROLS_CLASS },
    React2.createElement("button", {
      type: "button",
      className: `${BADGE_CLASS}${isPinned ? ` ${PINNED_CLASS}` : ""}`,
      title: label,
      "aria-label": label,
      "aria-pressed": isPinned,
      onClick: (event) => {
        event.stopPropagation();
        void pin.toggle(sessionId);
      }
    }, React2.createElement("span", { dangerouslySetInnerHTML: { __html: PIN_SVG } })),
    React2.createElement(RowEmoji, { emoji, pin, picker: props.picker, id: sessionId, t })
  );
}
function mountRowSlot(deps) {
  return deps.slots.inject(ROW_SLOT_KEY, () => deps.slots.register(
    {
      name: ROW_SLOT_KEY,
      id: "dsh-session-emoji",
      order: 50,
      inject: () => ({ pin: deps.pin, picker: deps.picker, t: deps.t })
    },
    ((props) => RowBadge(props))
  ));
}

// src/client.ts
var name = "session-emoji";
var inject = ["sessions", "workspaces", "configForms", "connection", "slots"];
var SETTINGS_ENTRY_ID = "session-emoji";
var PLUGIN_ID = "dsh-session-emoji";
function injectStyles() {
  const tag = document.createElement("style");
  tag.dataset.plugin = PLUGIN_ID;
  tag.textContent = STYLE_TEXT;
  document.head.appendChild(tag);
  return tag;
}
function guardedStorage() {
  return {
    getItem(key) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    setItem(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
      }
    }
  };
}
var REMOTE_COMMIT_TIMEOUT_MS = 300;
function buildPinRemote(ctx) {
  const connection = ctx.connection;
  const generic = connection?.rpc?.call;
  if (typeof generic !== "function") return void 0;
  let enabled = true;
  const commit = async (id, pinned) => {
    try {
      const call = generic("/api", "session.setPinned", { sessionId: id, pinned });
      const timeout = new Promise((resolve) => {
        setTimeout(() => resolve({ ok: false }), REMOTE_COMMIT_TIMEOUT_MS);
      });
      const result = await Promise.race([call, timeout]);
      return result.ok ? { ok: true } : { ok: false };
    } catch {
      return { ok: false };
    }
  };
  return {
    setPinned: async (id, pinned) => {
      if (!enabled) return { ok: false };
      const result = await commit(id, pinned);
      if (!result.ok) enabled = false;
      return result;
    },
    reenable: () => {
      enabled = true;
    }
  };
}
function apply(ctx) {
  const c = ctx;
  injectStyles();
  const scope = c.configForms.get(SETTINGS_ENTRY_ID);
  const store = createPinStore(scope, guardedStorage(), window);
  let sessionsCache;
  const sessionsFace = {
    getSnapshot: () => {
      if (sessionsCache !== void 0) return sessionsCache;
      const list = c.sessions.list.getSnapshot();
      const byId = {};
      for (const [id, summary] of Object.entries(list.byId)) {
        byId[id] = { displayTitle: summary.displayTitle, blank: summary.blank };
      }
      return sessionsCache = { phase: list.phase, ids: list.ids.map((id) => id), byId };
    },
    subscribe: (listener) => c.sessions.list.subscribe(() => {
      sessionsCache = void 0;
      listener();
    })
  };
  let workspacesCache;
  const workspacesFace = {
    getSnapshot: () => {
      if (workspacesCache !== void 0) return workspacesCache;
      const snapshot = c.workspaces.list.getSnapshot();
      return workspacesCache = {
        phase: snapshot.phase,
        items: snapshot.items.map((item) => ({ workspaceId: item.workspaceId, title: item.title }))
      };
    },
    subscribe: (listener) => c.workspaces.list.subscribe(() => {
      workspacesCache = void 0;
      listener();
    })
  };
  const warnedOnce = /* @__PURE__ */ new Set();
  const warnOnce = (key, message) => {
    if (warnedOnce.has(key)) return;
    warnedOnce.add(key);
    c.logger.warn(message);
  };
  const moveToTop = async (id) => {
    const sessionId = id;
    const snapshot = c.workspaces.list.getSnapshot();
    const workspace = snapshot.items.find((item) => item.sessionIds.includes(sessionId));
    if (workspace === void 0) {
      warnOnce(`ungrouped:${id}`, `session-emoji: session ${id} has no workspace account; host-side reorder skipped`);
      return;
    }
    const anchor = topAnchor(workspace.sessionIds, id);
    if (anchor === void 0) return;
    try {
      await c.workspaces.insertSessionBefore?.(workspace.workspaceId, sessionId, anchor);
    } catch (error) {
      c.logger.warn(`session-emoji: reorder rejected: ${String(error)}`);
    }
  };
  const moveWorkspaceToTop = async (id) => {
    const insertBefore = c.workspaces.insertBefore;
    if (typeof insertBefore !== "function") {
      warnOnce("workspace-reorder-unavailable", "session-emoji: workspace-level reorder is unavailable on this baseline; workspace pins keep working without it");
      return;
    }
    const items = c.workspaces.list.getSnapshot().items;
    const index = items.findIndex((item) => item.workspaceId === id);
    if (index <= 0) return;
    try {
      await insertBefore(id, items[0].workspaceId);
    } catch (error) {
      c.logger.warn(`session-emoji: workspace reorder rejected: ${String(error)}`);
    }
  };
  let pinnedSessions = [];
  let pinnedWorkspaces = [];
  const reorderPump = createReorderPump({
    plan: () => {
      const snapshot = c.workspaces.list.getSnapshot();
      const moves = [];
      if (pinnedSessions.length > 0) {
        for (const item of snapshot.items) {
          for (const id of reorderMoves(item.sessionIds, pinnedSessions)) {
            moves.push({ kind: "session", id });
          }
        }
      }
      if (pinnedWorkspaces.length > 0) {
        const ids = snapshot.items.map((item) => item.workspaceId);
        for (const id of reorderMoves(ids, pinnedWorkspaces)) moves.push({ kind: "workspace", id });
      }
      return {
        orderKey: snapshot.items.map((item) => `${item.workspaceId}/${item.sessionIds.join(",")}`).join("|"),
        moves
      };
    },
    apply: async (move) => {
      if (move.kind === "workspace") await moveWorkspaceToTop(move.id);
      else await moveToTop(move.id);
    },
    onError: (error) => {
      c.logger.warn(`session-emoji: reorder pass failed: ${String(error)}`);
    }
  });
  const reorderer = {
    moveToTop,
    reapplyOrder: (pinned) => {
      pinnedSessions = [...pinned];
      reorderPump.request();
    },
    moveWorkspaceToTop,
    reapplyWorkspaceOrder: (pinned) => {
      pinnedWorkspaces = [...pinned];
      reorderPump.request();
    }
  };
  const remote = buildPinRemote(ctx);
  c.on("connection/reset", () => {
    remote?.reenable();
    reorderPump.reset();
  });
  const workspacePinSource = {
    getSnapshot: () => {
      const snapshot = workspacesFace.getSnapshot();
      return { phase: snapshot.phase, ids: snapshot.items.map((item) => item.workspaceId) };
    },
    subscribe: workspacesFace.subscribe
  };
  const controller = new PinController(store, sessionsFace, workspacePinSource, reorderer, remote);
  const ui = createPinUiState();
  const picker = createEmojiPicker({
    doc: document,
    t: (key) => translate(key),
    recent: () => controller.getRecentEmoji()
  });
  const navSnapshot = store.read();
  const healthSource = {
    healthFor: (id) => {
      const binding = c.sessions.binding(id);
      const nodes = binding?.session.getSnapshot().nodes;
      if (nodes === void 0) return void 0;
      return nodes.map((node) => ({
        type: node.kind === "user" ? "user/message" : node.kind === "assistant" ? "assistant/message" : node.kind ?? "unknown",
        time: node.time ?? 0
      }));
    }
  };
  const gotoSource = {
    entries: () => {
      const snapshot = sessionsFace.getSnapshot();
      const tags = controller.getTags();
      return snapshot.ids.map((id) => ({ id, name: snapshot.byId[id]?.displayTitle ?? id, tags: tags[id] ?? [] }));
    }
  };
  let translate = fallbackTranslate;
  c.inject(["locale"], (localeCtx) => {
    localeCtx.effect(() => localeCtx.locale.register(LOCALE_NS, LOCALE_DICTS), "dsh-session-emoji: dictionaries");
    const bound = localeCtx.locale.bind(LOCALE_NS);
    translate = (key) => bound(key);
  });
  const slotsGate = c.slots;
  let rowSlotActive = false;
  const refreshRowSlotActive = () => {
    rowSlotActive = typeof slotsGate.snapshot === "function" && slotsGate.snapshot(ROW_SLOT_KEY).length > 0;
  };
  refreshRowSlotActive();
  const subscribeSlots = typeof slotsGate.subscribe === "function" ? (listener) => slotsGate.subscribe(ROW_SLOT_KEY, listener) : () => () => {
  };
  c.effect(() => {
    controller.start();
    const disposeLegacyImport = runLegacyImport({
      scope,
      legacyScope: () => {
        try {
          return c.configForms.get(LEGACY_ENTRY_ID);
        } catch {
          return void 0;
        }
      },
      storage: guardedStorage(),
      apply: (patch) => controller.importSection(patch),
      logger: c.logger
    });
    const disposeRowSlot = mountRowSlot({
      slots: c.slots,
      pin: controller,
      picker,
      t: (key) => translate(key)
    });
    const disposeGate = subscribeSlots(() => {
      refreshRowSlotActive();
    });
    const disposeOverlay = mountOverlay({
      sessions: sessionsFace,
      workspaces: workspacesFace,
      pin: controller,
      picker,
      t: (key) => translate(key),
      warn: (message) => {
        c.logger.warn(message);
      },
      doc: document,
      sessionSlotActive: () => rowSlotActive,
      onSlotsChange: subscribeSlots
    });
    const disposeSlots = registerSlots({
      ctx: { slots: c.slots },
      pin: controller,
      ui,
      sessions: sessionsFace,
      workspaces: workspacesFace,
      t: (key) => translate(key),
      openSession: (id) => {
        c.sessions.retain(id, { source: "gateway" });
      },
      openWorkspace: (id) => {
        const startSession = c.workspaces.startSession;
        if (typeof startSession === "function") startSession(id);
        else warnOnce("workspace-open-unavailable", "session-emoji: workspace open unavailable on this baseline");
      }
    });
    const disposeWorkspaces = c.workspaces.list.subscribe(() => {
      controller.reapplyOrder();
    });
    const disposeNav = mountNavigator({
      pin: controller,
      options: {
        enableBoards: navSnapshot.enableBoards,
        enableTags: navSnapshot.enableTags,
        enableViews: navSnapshot.enableViews,
        enableHealth: navSnapshot.enableHealth,
        enableGoto: navSnapshot.enableGoto
      },
      health: healthSource,
      goto: gotoSource,
      openSession: (id) => {
        c.sessions.retain(id, { source: "gateway" });
      }
    });
    return () => {
      disposeNav();
      disposeWorkspaces();
      disposeSlots();
      disposeOverlay();
      disposeGate();
      disposeRowSlot();
      disposeLegacyImport();
      picker.dispose();
      controller.stop();
    };
  }, "session-emoji: pin store, badges, slots, and navigation organizer");
}
return module.exports; } });
//# sourceMappingURL=client.js.map
