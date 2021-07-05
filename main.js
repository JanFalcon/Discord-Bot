const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log("Bot is online :)");
})

client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    switch(command){
        case 'play':
            if(!message.member.voice.channel){
                message.channel.send("You must be in a voice channel to play the bot.");
                break;
            }
            
            if(!args){
                message.channel.send("Play what exactly??? " + args);
                break;
            }
            
            var voiceChannel = message.member.voice.channel;

            try{
                var connection = await voiceChannel.join();
                const dispatcher = connection.play(ytdl(args))
                .on('finish', () => {
                    voiceChannel.leave();
                })
                .on('error', () => {
                    voiceChannel.leave();
                    message.channel.send("error");
                });
                message.channel.send("Now playing " + args);
            }
            catch(error){
                message.channel.send(error);
            }
        break;

        case 'leave':
            var voiceChannel = message.member.voice.channel;
            try{
                var connection = await voiceChannel.join();
                voiceChannel.leave();

            }
            catch(error){
                message.channel.send(error);
            }
        break;
    }

    if(command === 'ping'){
        message.channel.send("@everyone");
        memes(message, 'https://cdn.discordapp.com/emojis/533631853865992232.gif?v=1');
    }
    else if(command === 'ken'){
        memes(message, 'https://cdn.discordapp.com/emojis/767140721576640552.png?v=1');
    }
    else if(command === 'daflash'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/770738044054929488/11111.jpg');
    }
    else if(command === 'hikuys'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/759608782627536916/Screenshot_20200414-005313_Messenger.jpg');
    }
    else if(command === 'haydyokids'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/759608871986790470/Screenshot_20200414-014632_Messenger.jpg');
    }
    else if(command === 'eykuys'){
        memes(message, 'https://cdn.discordapp.com/attachments/458655123560726538/770731800514920529/eyb0ss222.jpg');
    }
    else if(command === 'ricefields'){
        memes(message, 'https://cdn.discordapp.com/emojis/760803085156089937.png?v=1');
    }
    else if(command === 'wagpoh'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770767051773575218/Screenshot_20201028_055250_com.android.gallery3d.jpg');
    }
    else if(command === 'jovananana'){
        memes(message, 'https://cdn.discordapp.com/emojis/760811030879797268.png?v=1');
    }
    else if(command === 'kyutkyut'){
        memes(message, 'https://cdn.discordapp.com/emojis/760811050282778672.png?v=1');
    }
    else if(command === 'nigs'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770769728163020821/received_10204963005153819.jpeg');
    }
    else if(command === '200'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770771534582644786/received_1913534042001935.jpeg');
    }
    else if(command === 'rambo'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770771860002570280/received_550719278807713.jpeg');
    }
    else if(command === 'warflashbacks'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770771789118308422/received_3853762481301873.jpeg');
    }
    else if(command === 'mayday'){
        message.channel.send("< roger that " + message.author.username + " sending help >");
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770772331635146792/received_655098212094004.jpeg');
    }
    else if(command === 'rip'){
        message.channel.send("in loving memmory of jovannie cambalo");
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770771892621279262/received_258813788667785.jpeg');
    }
    else if(command === 'sarapmo'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770773506127953930/received_636398527264393.jpeg');
    }
    else if(command === 'mcr'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770774001005887518/rtc-snapshot--873273368.jpeg');
    }
    else if(command === 'playnow'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770774151123566612/received_362010561773802.jpeg');
    }
    else if(command === 'exodia'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770773566936580116/received_325116935226282.jpeg');
    }
    else if(command === 'joyce'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770773593889964092/received_788205885337675.jpeg');
        setTimeout(() => {
            message.delete();
        }, 5000);
    }
    else if(command === 'komsay'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770775908130095104/received_380686379212382.jpeg');
    }
    else if(command === '   '){
        memes(message, 'https://media.discordapp.net/attachments/770742523617607702/770776240436936765/received_774906769584949.jpeg?width=237&height=420');
    }
    else if(command === 'lvl1000mafiaboss'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770776377510330398/received_306159516713603.jpeg');
    }
    else if(command === 'madeagirlwet'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770776500903346177/received_449144445856643.jpeg');   
    }
    else if(command === 'almostdj'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770776647975567380/received_1963811300392206.jpeg');
    }
    else if(command === 'walangbebe'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770776521530540052/received_499186184283734.jpeg');
    }
    else if(command === 'taropacard'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770776083695403048/received_337061376949559.webp');
    }
    else if(command === 'hackerman'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770777258011918336/received_381327989334255.jpeg');
    }
    else if(command === 'canadianshot'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770778011678670848/received_513943295997730.jpeg');
    }
    else if(command === 'deletdis'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770777779972603944/received_2387856538148564.jpeg');
    }
    else if(command === 'missyou'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770778027285413898/received_723275148059692.jpeg');
    }
    else if(command === 'endure'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770778535068565524/received_249305412435004.jpeg');
    }
    else if(command === 'kargador'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770778999735320596/received_602761970125903.webp');
    }
    else if(command === 'awit'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/773512228674469888/received_2125050901077576.jpeg');
    }
    else if(command === 'notimpressed'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770779390484283413/received_1321385674707396.webp');
    }
    else if(command === 'bayadpo'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770779610144702525/received_736795166744560.jpeg');
    }
    else if(command === 'anthem'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770779685881643051/received_246480862937569.jpeg');
    }
    else if(command === 'rip2'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770780163210084352/received_227145014817016.jpeg');
    }
    else if(command === 'awiiit'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770780618811637770/received_663464494035662.webp');
    }
    else if(command === 'oooo'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770780849012473906/received_407727129898051.jpeg');
    }
    else if(command === 'missionpassed'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770780796461121667/received_690241924819966.jpeg');
    }
    else if(command === 'mama!'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770781808601858058/received_1950715601617112.webp');
    }
    else if(command === 'isangshot'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770780736583499786/received_2482495912005764.jpeg');
    }
    else if(command === 'taphcard'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770781605404344340/received_2005060459525825.jpeg');
    }
    else if(command === 'damson'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770782141545709578/received_1980458058652732.jpeg');
    }
    else if(command === 'harem'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770783575511138304/received_1025249150967130.jpeg');
    }
    else if(command === 'russianhaker'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770779244606259220/received_467362507180880.jpeg');
    }
    else if(command === 'expectationsvsreality'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770784299301208104/received_990002394491806.jpeg');
    }
    else if(command === 'kensdreambody'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770784602821623808/received_1825203794168294.jpeg');
    }
    else if(command === 'oof'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770785339953512468/received_1835916429773563.jpeg');
    }
    else if(command === 'here4u'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770785473365803068/received_973990299426349.jpeg');
    }
    else if(command === 'sadboi'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770784885060141056/received_417156292224512.jpeg');
    }
    else if(command === 'elbowman'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770788907955781692/received_1889237417764931.jpeg');
    }
    else if(command === 'elbowman2'){
        memes(message, 'https://cdn.discordapp.com/attachments/770742523617607702/770788927871123467/received_1916103178421554.jpeg');
    }
    else if(command === '1month'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/779391763365363722/IMG20201108134046.jpg');
    }
    else if(command === 'knife'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/779393840577773638/IMG20200116203228.jpg');
    }
    else if(command === 'bamboozling'){
        memes(message, 'https://cdn.discordapp.com/emojis/759518762772070430.png?v=1');
    }
    else if(command === 'miguelita'){
        memes(message, 'https://cdn.discordapp.com/attachments/756914289801166968/779408204337119262/IMG_20201030_143548.jpg');
    }

    // message.delete();
});

function memes(message, meme){
    message.channel.send(meme);
}

client.login('NzY5MzA2Mjc1NjY1MjgxMDQ2.X5NGTQ.roQvACX_lvjxywgsUA2_Y60neb0');


// weaker97@gmail.com
// tutankhamen12