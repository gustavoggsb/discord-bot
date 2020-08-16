const execa = require('execa')
const { sleep } = require("../plugins/util")
const embeds = require("../plugins/embeds");

module.exports.default = async (client) => {
const ip = '8.8.8.8'
const pingChannel = client.channels.cache.get('744656296464351372')

for (var i=0; i<Infinity; i++) {
    const result = execa.commandSync(`ping ${ip} -q -c 3`)
    //console.log(result)
    let time = new Date()
    time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    const latency = result.stdout.split('=')[1].split('/')[1]
    //console.log(`Latency is: ${latency} ms at ${time}`)
    const msg = await pingChannel.send(embeds.pingEmbed(latency, time))
    sleep(10000)
    msg.delete()
}
}