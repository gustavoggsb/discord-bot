const Discord = require("discord.js");

const logo =
  "https://vignette.wikia.nocookie.net/minecraft/images/e/e7/BlueFire.gif";
const blackgroung = "`";

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
  wLMessage: () => {
    return new Discord.MessageEmbed()
      .setTitle("Sistema de Whitelist")
      .setDescription(
        `Sistema desenvolvido exclusivamente para o servidor **Buglândia**.\n\nAqui você poderá iniciar sua **Whitelist**.\nBasta dar o comando:\n\n  ${blackgroung}!whitelist${blackgroung}\n\nO bot irá te chamar para fazer algumas perguntas.\nResponda atenciosamente, e tenha o **Nickname** do seu personagem em mãos.\nÉ importante que quando solicitado você escreva ele de forma correta, respeitando letras maiúsculas e caractéres especiais.\n\n Boa sorte!!\n\n`
      )
      .setThumbnail(logo)
      .setFooter("Atenciosamente Buglândia")
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
        `Perfeito <@${userId}>!\nRegistrei sua resposta.\n\n- Supondo que Creeper exploda em você e danifique o chão.\nO que você **deve fazer**?\n\n\n<a:loading:736686995258212472> Você tem 5 minutos para responder`
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
      .setTitle(`Whitelist de ${name}`)
      .setThumbnail(userAvatar)
      .addFields(
        {
          name: "Nome",
          value: `${blackgroung}${name}${blackgroung}`,
          inline: false,
        },
        {
          name: "Idade",
          value: `${blackgroung}${age}${blackgroung}`,
          inline: false,
        },
        {
          name: "Possui Minecraft Original?",
          value: `${blackgroung}${haveMc}${blackgroung}`,
          inline: false,
        },
        {
          name: "Nickname",
          value: `${blackgroung}${nickName}${blackgroung}`,
          inline: false,
        },
        {
          name: "Por que quer jogar em nosso servidor?",
          value: `${blackgroung}${whyPlay}${blackgroung}`,
          inline: false,
        },
        {
          name: "Descreva seu modo de jogo",
          value: `${blackgroung}${gameMode}${blackgroung}`,
          inline: false,
        },
        {
          name: "Se um Creeper explodir o que você faz?",
          value: `${blackgroung}${whatYouDo}${blackgroung}`,
          inline: false,
        },
        {
          name: "Você seria um jogador ativo?",
          value: `${blackgroung}${beActive}${blackgroung}`,
          inline: false,
        }
      )
      .setColor("#00AAFF")
      .setFooter(`!aprovar <@${userId}> | !reprovar <@${userId}>`);
  },
  aprovedEmbedPv: (targetId, nickName) => {
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
  aprovedEmbed: (targetId, nickName, author) => {
    return new Discord.MessageEmbed()
      .setTitle(`Aprovado!!`)
      .setDescription(
        `**Parabéns <@${targetId}>!!!**\n\nVocê acaba de ser aprovado em nosso servidor!\n\n**Nickname:**${blackgroung}${nickName}${blackgroung}\n\n`
      )
      .setThumbnail(logo)
      .addField("Aprovado por:", `<@${author}>`, true)
      .setColor("#00AAFF")
      .setFooter(`Atenciosamente Buglândia`);
  },
  reprovedEmbed: (targetId, author) => {
    return new Discord.MessageEmbed()
      .setTitle(`Reprovado!!`)
      .setDescription(
        `**Que triste <@${targetId}>!**\n\nVocê não passou na whitelist do nosso servidor!\nMas fique tranquilo, você pode tentar novamente a qualquer momento.\nTente dessa vez ser um pouco mais atencioso e usar respostas mais elaboradas\n\nTe aguardo novamente! 😉`
      )
      .setThumbnail(logo)
      .addField("Reprovado por:", `<@${author}>`, true)
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
  wlChannelMsgWrong: (author) => {
    return new Discord.MessageEmbed()
      .setTitle(`Comando errado!`)
      .setDescription(
        `<@${author}>.\nApenas é permitido digitar neste canal o comando: ${blackgroung}!whitelist${blackgroung}`
      )
      .setColor("#FF0000");
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
