const embeds = require("../plugins/embeds");
const database = require("../plugins/database");
const { sleep } = require("../plugins/util");

module.exports.default = async (client, message) => {
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
        embeds.finalWlEmbed(
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
};
