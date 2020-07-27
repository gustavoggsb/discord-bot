const Discord = require("discord.js");

const logo =
  "https://vignette.wikia.nocookie.net/minecraft/images/e/e7/BlueFire.gif";

module.exports = {
  verifyMessage: () => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Proteção contra BOTS")
      .setDescription(
        "Sistema desenvolvido exclusivamente para o servidor **Buglândia**. \nApós esta etapa poderá prosseguir com sua **Whitelist**. \nObrigado!! "
      )
      .setThumbnail(logo)
      .setFooter("*Reaja abaixo para continuar.")
      .setColor("#00AAFF");
  },
  initialWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Olá <@${userId}>, estamos iniciando seu processo de whitelist por este canal! Antes de começar, gostaria apenas de te lembrar que atualmente estamos apenas aceitando jogadores que possuam **Minecraft original!**. Caso atenda a esse requisito podemos prosseguir.\n\n- Para iniciarmos digite seu **Nome** *(Pode ser apenas o primeiro)*\n\n\n<a:loading:736686995258212472> Você tem 3 minutos para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  secondWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Digite agora sua **idade**.\n\n\n<a:loading:736686995258212472> Você tem 1 minuto para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  thirdWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Você possui **Minecraft Original**?\n\n\n<a:loading:736686995258212472> Você tem 1 minuto para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  fourthWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Qual seu **NickName** do Minecraft?\n*(Escreva exatamente como exibido!)*\n\n\n<a:loading:736686995258212472> Você tem 3 minutos para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  fifthWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Me conte agora **Por que quer jogar neste servidor?**\n\n\n<a:loading:736686995258212472> Você tem 5 minutos para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  sixthWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Descreva pra mim **seu modo de jogo.** \n\n\n<a:loading:736686995258212472> Você tem 5 minutos para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  seventhWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Supondo que Creeper exploda em você e danifique o chão.\nO que você **deve fazer**?\n\n\n<a:loading:736686995258212472> Você tem 3 minutos para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  octaveWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Você seria um jogador **ativo**? \n\n\n<a:loading:736686995258212472> Você tem 1 minuto para responder`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  finalWlMsg: (userId) => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whiteslist")
      .setDescription(
        `Perfeito <@${userId}>!\nRegistrei todas as suas respostas.\n\nAguarde que em breve retornarei informando seu resultado\nMuito obrigado!`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF");
  },
  finalWlEmbed: (
    userId,
    userAvatar,
    name,
    age,
    haveMc,
    nickName,
    whyPlay,
    gameMode,
    whatYouDo,
    beActive
  ) => {
    return new Discord.MessageEmbed()
      .setTitle(`Whitelist de <@${userId}>`)
      .setDescription()
      .setThumbnail(userAvatar)
      .addFields(
        { name: "Nome", value: `${name}` },
        { name: "Idade", value: `${age}` },
        {
          name: "Possui Minecraft Original?",
          value: `${haveMc}`,
          inline: false,
        },
        { name: "Nickname", value: `${nickName}`, inline: false },
        {
          name: "Por que quer jogar em nosso servidor?",
          value: `${whyPlay}`,
          inline: false,
        },
        {
          name: "Descreva seu modo de jogo",
          value: `${gameMode}`,
          inline: false,
        },
        {
          name: "Se um Creeper explodir o que você faz?",
          value: `${whatYouDo}`,
          inline: false,
        },
        {
          name: "Você seria um jogador ativo?",
          value: `${beActive}`,
          inline: false,
        }
      )
      .setColor("#00AAFF");
  },
  aprovedEmbedPv: (targetId, nickName) => {
    const blackgroung = "```";
    return new Discord.MessageEmbed()
      .setTitle(`Aprovado!!`)
      .setDescription(
        `**Parabéns <@${targetId}>!!!**\n\nVocê acaba de ser aprovado em nosso servidor!\n\n**Nickname:**${blackgroung}${nickName}${blackgroung}\n\n`
      )
      .setThumbnail(logo)
      .addFields(
        {
          name: `*Confira nossas regras em:* `,
          value: `<#736237812747337748>`,
          inline: false,
        },
        {
          name: `*IP do servidor:* `,
          value: `<#734859396324262002>`,
          inline: false,
        }
      )
      .setColor("#00AAFF")
      .setFooter(`Atenciosamente Buglândia`);
  },
  aprovedEmbed: (targetId, nickName) => {
    const blackgroung = "```";
    return new Discord.MessageEmbed()
      .setTitle(`Aprovado!!`)
      .setDescription(
        `**Parabéns <@${targetId}>!!!**\n\nVocê acaba de ser aprovado em nosso servidor!\n\n**Nickname:**${blackgroung}${nickName}${blackgroung}\n\n`
      )
      .setThumbnail(logo)
      .setColor("#00AAFF")
      .setFooter(`Atenciosamente Buglândia`);
  },
  findWlRole: (userId) => {
    return new Discord.MessageEmbed()
      .setDescription(
        `Olá <@${userId}>!\n\nIdentifiquei que você já possui Whitelist.\nPortando não é necessário repeti-la.\nObrigado!!`
      )
      .setColor("#00AAFF");
  },
  wrongWlchannel: (userId) => {
    return new Discord.MessageEmbed()
      .setDescription(
        `Olá <@${userId}>!\n\nEste comando somente pode ser realizado\nno canal <#734849330002788563>.`
      )
      .setColor("#00AAFF");
  },
  timeOut: (time) => {
    return new Discord.MessageEmbed()
      .setDescription(
        `Você demorou mais do que ${getHumanReadableTime(
          time
        )}, operação cancelada`
      )
      .setColor("#00AAFF");
  },
};

const getHumanReadableTime = (timeInMs) => {
  if (timeInMs >= 60000) {
    // check if is minute
    const newTime = timeInMs / 60000;
    return `${newTime} minuto${newTime == 1 ? "" : "s"}`;
  } else {
    const newTime = timeInMs / 1000;
    return `${newTime} segundo${newTime == 1 ? "" : "s"}`;
  }
};
