const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./res/config.json");
const command = require("./lib/plugins/command");
const { sleep } = require("./lib/plugins/util");

const embeds = require("./lib/plugins/embeds");

const database = require("./lib/plugins/database");

const commands = require("./lib/modules");

client.on("ready", async () => {
  await database.connect();
  console.log(`Bot foi iniciado com sucesso`);
  commands.serverPing(client)

  command(client, "clear", async (message) => commands.clearAll(message));

  command(client, "limpar", async (message) => {
    const { content } = message;
    const split = content.trim().split(" ");
    const args = split[1];

    if (message.member.hasPermission("ADMINISTRATOR")) {
      try {
        message.channel.bulkDelete(args);
      } catch (error) {
        console.log("Erro ao apagar mensagens");
      }
    } else {
      const msg = await message.channel.send(
        `Você não tem permissão para executar este comando!`
      );
      await sleep(7000);
      await msg.delete();
    }
  });

  command(client, "verify", (message) => {
    message.channel.send(embeds.verifyMessage());
  });

  command(client, "wlembed", (message) => {
    message.channel.send(embeds.wLMessage());
  });

  command(client, "whitelist", (message) =>
    commands.whitelist(client, message)
  );

  command(client, "aprovar", (message) => commands.aprove(client, message));

  command(client, "reprovar", (message) => commands.reprove(client, message));
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

client.login(config.token);
