const { sleep } = require("../plugins/util");

module.exports.default = async (message) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.messages.fetch().then((results) => {
          message.channel.bulkDelete(results);
        });
      } else {
        const msg = await message.channel.send(
          `Você não tem permissão para executar este comando!`
        );
        await sleep(7000);
        await msg.delete();
      }
}