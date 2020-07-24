const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./config.json");
const command = require("./command");

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
    if (message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results);
      });
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

  command(client, "embed", (message) => {
    const logo =
      "https://vignette.wikia.nocookie.net/minecraft/images/e/e7/BlueFire.gif";
    const embed = new Discord.MessageEmbed()
      .setTitle("Sistema de Proteção contra BOTS")
      //.setURL('https://media2.giphy.com/media/lpHQvZu6stHKo/giphy.gif')
      //.setAuthor(message.author.username)
      //.setImage(logo)
      .setDescription(
        "Sistema desenvolvido exclusivamente para o servidor **Buglândia**. \nApós esta etapa poderá prosseguir com sua **Whitelist**. \nObrigado!! "
      )
      .setThumbnail(logo)
      .setFooter("*Reaja abaixo para continuar.")
      .setColor("#00AAFF");
    /*.addFields(
    {
      name: '1',
      value: '###',
      inline: true,
    },
    {
      name: '2',
      value: '###',
      inline: true,
    },
    {
      name: '3',
      value: '###',
      inline: true,
    }
  )*/
    message.channel.send(embed);
  });

  command(client, "w", async (message) => {
    if (message.channel.id === "734849330002788563") {
      if (!message.member.roles.cache.has("727637167370797187")) {
        const userId = message.member.user.id;
        // const userName = message.member.user.username;
        // const userAvatar = message.member.user.avatar;
        // const everyoneRole = "472791218133401610";
        const channelName = "whitelist-" + userId;
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
        const message1 = `Olá <@${userId}>`;
        await channel.send(message1);
        try {
          setTimeout(async () => {
            await channel.delete();
          }, 30000);
        } catch (error) {
          console.log("Opa, parece que o canal já foi deletado!");
        }
      } else {
        console.log(`Já possui whitelist`);
      }
    } else {
      message.channel.send(
        `Este comando somente pode ser realizado\nno canal #734849330002788563!`
      );
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
