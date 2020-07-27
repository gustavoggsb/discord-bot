const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./config.json");
const command = require("./command");
const sleep = require("util").promisify(setTimeout);

const embeds = require("./embeds");

client.on("ready", () => {
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

  command(client, "w", async (message) => {
    const userId = message.member.user.id;
    if (message.channel.id === "734849330002788563") {
      if (!message.member.roles.cache.has("727637167370797187")) {
        const userName = message.member.user.username;
        // const userAvatar = message.member.user.avatar;
        // const everyoneRole = "472791218133401610";
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
        console.log(channel.name);
        let time;
        await channel.send(embeds.initialWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const name = collected.first().content;
            console.log(name);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.secondWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const age = collected.first().content;
            console.log(age);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.thirdWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const haveMC = collected.first().content;
            console.log(haveMC);
          });
        await channel.send(embeds.fourthWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const nkname = collected.first().content;
            console.log(nkname);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.fifthWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const whyPlay = collected.first().content;
            console.log(whyPlay);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.sixthWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const gameMode = collected.first().content;
            console.log(gameMode);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.seventhWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const creeperQuestion = collected.first().content;
            console.log(creeperQuestion);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.octaveWlMsg(userId));
        await channel
          .awaitMessages((m) => m.author.id == userId, {
            max: 1,
            time: 30000,
          })
          .then((collected) => {
            const activityGame = collected.first().content;
            console.log(activityGame);
          })
          .catch(() => {
            time = "30 segundos";
            channel.send(embeds.timeOut(time));
          });
        await channel.send(embeds.finalWlMsg(userId));
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

client.login(config.token);
