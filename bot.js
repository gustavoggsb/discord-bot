const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./config.json");
const command = require("./command");
const sleep = require("util").promisify(setTimeout);

const embeds = require("./embeds");

const database = require("./database");
const { finalWlEmbed } = require("./embeds");

client.on("ready", async () => {
  await database.connect();

  console.log(`Bot foi iniciado com sucesso`);

  command(client, "ping", (message) => {
    message.channel.send("Pong!");
  });

  command(client, "servers", (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} tem um total de ${guild.memberCount} membros!`
      );
    });
  });

  command(client, ["clear", "limpar"], (message) => {
    const { content } = message;
    const split = content.trim().split(" ");
    const args = split[1];
    const syntax = "!limpar <número de mensagens a serem apagadas | all>";
    console.log(args);
    if (message.member.hasPermission("ADMINISTRATOR")) {
      if (split.length > 2 || split.length === 1) {
        message.channel.send(`${message.author}, use: ` + syntax);
      }
      if (args !== 0 && split.length === 2) {
        try {
          message.channel.bulkDelete(args);
        } catch (error) {
          console.log("Erro ao apagar mensagens");
        }
      }
    } else {
      message.channel.send(
        `Você não tem permissão para executar este comando!`
      );
    }
  });

  command(client, "status", (message) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      const content = message.content.replace("!status ", "");

      client.user.setPresence({
        activity: {
          name: content,
          type: 0,
        },
      });
    } else {
      message.channel.send(
        `Você não tem permissão para executar este comando!`
      );
    }
  });

  command(client, "newtextchannel", (message) => {
    const name = message.content.replace("!newtextchannel ", "");
    message.guild.channels
      .create(name, {
        type: "text",
      })
      .then((channel) => {
        console.log(channel);
      });
  });

  command(client, "newvoicechannel", (message) => {
    const name = message.content.replace("!newvoicechannel ", "");
    message.guild.channels
      .create(name, {
        type: "voice",
      })
      .then((channel) => {
        console.log(channel);
      });
  });

  command(client, "verify", (message) => {
    message.channel.send(embeds.verifyMessage());
  });

  command(client, "wlembed", (message) => {
    message.channel.send(embeds.wLMessage());
  });

  command(client, "whitelist", async (message) => {
    const userId = message.member.user.id;

    let user = await database.User.findById(userId);
    if (user) {
      // await message.channel.send(
      //  // `${user.name}, seu usuário já está cadastrado! Se você continuar, seus dados serão sobrescritos.`
      // );
    } else {
      user = new database.User({ _id: userId });
    }

    if (message.channel.id === "734849330002788563") {
      if (!message.member.roles.cache.has("727637167370797187")) {
        const userName = message.member.user.username;
        const userAvatar = client.users.cache.get(userId).avatarURL();
        const ReiceivedWlChannel = client.channels.cache.get(
          "737080397317537822"
        );
        const channelName = "whitelist-" + userName;
        let channel;
        try {
          channel = await message.guild.channels.create(channelName, {
            type: "text",
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ["VIEW_CHANNEL"],
              },
              {
                id: message.author.id,
                allow: ["VIEW_CHANNEL"],
              },
            ],
          });
        } catch (error) {
          console.error(`Deu o seguinte erro na hora de dar certo: ${error}`);
        }
        const categoryId = "734848350695981157";
        await channel.setParent(categoryId);

        let botMsg;
        let userMsg;

        botMsg = await channel.send(embeds.initialWlMsg(userId));

        let time = 180000;
        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          user.name = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.secondWlMsg(userId));
        time = 60000;
        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          user.age = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.thirdWlMsg(userId));
        let haveMc;
        time = 60000;

        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          haveMc = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.fourthWlMsg(userId));
        time = 180000;

        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          user.nickname = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.fifthWlMsg(userId));
        let whyPlay;
        time = 300000;

        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          whyPlay = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.sixthWlMsg(userId));
        let gameMode;
        time = 300000;

        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          gameMode = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.seventhWlMsg(userId));
        let whatYouDo;
        time = 300000;

        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          whatYouDo = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        botMsg = await channel.send(embeds.octaveWlMsg(userId));
        let beActive;
        time = 60000;

        try {
          const collected = await channel.awaitMessages(
            (m) => m.author.id == userId,
            {
              max: 1,
              time,
            }
          );
          beActive = collected.first().content;
          userMsg = collected.first();
          await userMsg.delete();
          await botMsg.delete();
        } catch (error) {
          channel.send(embeds.timeOut(time));
          await sleep(30000);
          await channel.delete();
          return;
        }

        await user.save();

        await channel.send(embeds.finalWlMsg(userId));
        await ReiceivedWlChannel.send(
          finalWlEmbed(
            userId,
            userAvatar,
            user.name,
            user.age,
            haveMc,
            user.nickname,
            whyPlay,
            gameMode,
            whatYouDo,
            beActive
          )
        );

        await sleep(30000);

        try {
          await channel.delete();
        } catch (error) {
          console.log("Opa, parece que o canal já foi deletado!");
        }
      } else {
        const msg = message.channel.send(embeds.findWlRole(userId));
        await sleep(15000);
        try {
          await msg.delete();
        } catch (error) {
          console.log("Opa, parece que mensagem já foi deletada!");
        }
      }
    } else {
      const msg = message.channel.send(embeds.wrongWlchannel(userId));
      await sleep(15000);
      try {
        await msg.delete();
      } catch (error) {
        console.log("Opa, parece que mensagem já foi deletada!");
      }
    }
  });

  command(client, "aprovar", async (message) => {
    const { mentions } = message;
    if (message.member.hasPermission("ADMINISTRATOR")) {
      const target = mentions.members.first();
      const author = await message.member.user.id;
      const whitelistRole = "727637167370797187";
      let targetId = target.id;

      if (targetId) {
        if (!target.roles.cache.has(whitelistRole)) {
          let user = await database.User.findById(targetId);
          if (user) {
            targetId = user._id;
            const aprovedChannel = client.channels.cache.get(
              "734850572376866978"
            );
            await target.roles.add("727637167370797187");
            await aprovedChannel.send(
              embeds.aprovedEmbed(targetId, user.nickname, author)
            );
            await target.send(embeds.aprovedEmbedPv(targetId, user.nickname));
          } else {
            await message.channel.send(
              `O usuário <@${targetId}> não existe no banco de dados`
            );
          }
        } else {
          await message.channel.send(
            `O usuário <@${targetId}> já possui Whitelist`
          );
        }
      }
    }

    command(client, "reprovar", async (message) => {
      const { mentions } = message;
      if (message.member.hasPermission("ADMINISTRATOR")) {
        const target = mentions.members.first();
        const author = await message.member.user.id;
        const whitelistRole = "727637167370797187";
        let targetId = target.id;

        if (targetId) {
          if (!target.roles.cache.has(whitelistRole)) {
            let user = await database.User.findById(targetId);
            if (user) {
              targetId = user._id;
              const reprovedChannel = client.channels.cache.get(
                "734850787188015214"
              );
              await reprovedChannel.send(
                embeds.reprovedEmbed(targetId, author)
              );
              await target.send(embeds.reprovedEmbed(targetId, author));
            } else {
              await message.channel.send(
                `O usuário <@${targetId}> não existe no banco de dados`
              );
            }
          } else {
            await message.channel.send(
              `O usuário <@${targetId}> já possui Whitelist`
            );
          }
        }
      }
    });
  });

  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (reaction.message.channel.id === "734846757665767476") {
      if (reaction.emoji.name === "✅") {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add("734847544777113651");
      }
    }
  });

  client.on("message", async (message) => {
    var sender = message.author;
    if (sender.id !== "734626271077728377") {
      if (message.channel.id === "734849330002788563") {
        if (message.content !== "!whitelist") {
          await message.delete();
          const msg = await message.channel.send(
            embeds.wlChannelMsgWrong(sender.id)
          );
          await sleep(15000);
          try {
            await msg.delete();
          } catch (error) {
            console.log("Erro ao deletar a mensagem!");
          }
        }
      }
    }
  });
});

client.login(config.token);
