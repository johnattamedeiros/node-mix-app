const cron = require('node-cron');
//const fetch = require('node-fetch');
const Match = require('./models/match');
const Player = require('./models/player');


const fetchAndStoreMatchData = async () => {
    try {

        const players = await Player.find();

        for (const player of players) {

            const response = await fetch('https://gamersclub.com.br/api/box/history/' + player.id_gc, {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                    "authorization": "Basic ZnJvbnRlbmQ6NDdhMTZHMmtHTCFmNiRMRUQlJVpDI25X",
                    "priority": "u=1, i",
                    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
                    "sec-ch-ua-arch": "\"x86\"",
                    "sec-ch-ua-bitness": "\"64\"",
                    "sec-ch-ua-full-version": "\"127.0.6533.99\"",
                    "sec-ch-ua-full-version-list": "\"Not)A;Brand\";v=\"99.0.0.0\", \"Google Chrome\";v=\"127.0.6533.99\", \"Chromium\";v=\"127.0.6533.99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-model": "\"\"",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-platform-version": "\"10.0.0\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "cookie": "_gcl_au=1.1.1590980947.1721331780; sib_cuid=04e52cc9-97c5-4103-abf6-e38e62bd13c9; _tt_enable_cookie=1; _ttp=2esRiodI6t1x5LPRySOjX7u9WWk; _fbp=fb.2.1721331780341.773965149448558284; 51QQyhcLyDRpqrY2Gh3vO=1; language=pt-br; _hjSessionUser_2263196=eyJpZCI6IjRiNDA3MmE1LTgyZDEtNWE4YS04OGIyLWRmMDhmMzQ2YzQ1YSIsImNyZWF0ZWQiOjE3MjEzMzE4MDQzODgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_H7ETJY03DT=deleted; _hjSessionUser_1963917=eyJpZCI6IjljYmYxMTc1LWY5YjUtNTFhMy04NDhkLThmNjI0MjJhYWNjMCIsImNyZWF0ZWQiOjE3MjEzMzE3ODA0NDMsImV4aXN0aW5nIjp0cnVlfQ==; FCNEC=%5B%5B%22AKsRol8u-xh6f5r9W-JxCXRYmR3VeN2KIl4eq9iSXBOXcFyn-oGGujvsYAa3Xj543FDN8_XNygfWBnOhrxPnjr6fzosyAnakZUdgEDmtp4f-tko1e_5cHnhiZKkqLKyKDCs6SG2-sBpFOWy1aLH1N1LH7ktSiW0X2A%3D%3D%22%5D%5D; _ga_GDBFGFR1PC=deleted; _gid=GA1.3.279895920.1722811358; cf_clearance=HCae7RpgM4aGLvB6QFXdeyrimb8RZE6KTuoQ6NCp5pw-1722969215-1.0.1.1-jACbj1cgcTRHxJVenSBfQ4p6tBIZMaCpdaZ1UDe0D2oMrw5b4UqufSIYIw6yjfkI0MJsUR3IAmqyfsYU9JN2_w; gclubsess=b320a516e518da61054d2290cc7dcecd744339e3; _ce.clock_event=1; _ce.clock_data=102%2C179.84.96.52%2C1%2C362d7fe3d8b2581bffa359f0eeda7106%2CChrome%2CBR; _ce.irv=returning; cebs=1; __gads=ID=db0b9dc7a53addde:T=1721331810:RT=1723131653:S=ALNI_Ma1jwgyXt8fsGiANg8esF-Zf8xcbw; __gpi=UID=00000a441187fc73:T=1721331810:RT=1723131653:S=ALNI_MbcZ0Q8WX-afz5uNySvNacjPPHVtw; __eoi=ID=8397c1bb7f786164:T=1721331810:RT=1723131653:S=AA-Afja_pE7zIv0WfAknrz41F7xt; _ga=GA1.3.1439008375.1721331780; _ga_HZPJ0EKL99=GS1.3.1723131240.69.1.1723134443.0.0.0; cebsp_=5; __cf_bm=f5u36Sidx.dTXV8omuuTB_.B9W4qymMo3XJUahbb_5c-1723138229-1.0.1.1-la22Vu_qRopuUNLU9kt.fJW7nqo9zb1cbLZIReeaGR1El3HcVUDhdcv2WcdUWjxBne67t9ZDwoPsZZsJdMt8Tw; _ce.s=v~8a00dc3dfad74339831de1e854c3626d3a5ff9f2~lcw~1723134490848~lva~1723131241018~vpv~64~as~false~v11.cs~419044~v11.s~17ad7a90-55a3-11ef-88c9-47ec5ed07d12~v11.sla~1723134490847~v11.send~1723138460173~lcw~1723138460174; _ga_GDBFGFR1PC=GS1.1.1723138460.69.0.1723138465.55.0.0; _ga_H7ETJY03DT=GS1.1.1723138460.69.0.1723138465.55.0.0; _ga_1WKB6YC210=GS1.1.1723138460.70.0.1723138465.55.0.0",
                    "Referer": "https://gamersclub.com.br/player/" + player.id_gc,
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": null,
                "method": "GET"
            });

            if (!response.ok) throw new Error('Gamersclub API not responding');
            const data = await response.json();
            await Player.findByIdAndUpdate(player._id, { stat: data.stat }, { new: true, runValidators: true });
            for (const match of data.monthMatches) {
                const newMatch = new Match({
                    id_gc: player.id_gc,
                    matchData: match
                });

                if (BigInt(match.id) > BigInt(player.id_last_match)) {
                    console.log('Saving match ' + match.id);
                    await newMatch.save();
                    await Player.findByIdAndUpdate(player._id, { id_last_match: match.id }, { new: true, runValidators: true });
                }
            }
        }
        console.log('All players updated data. Total: ' + players.length);
    } catch (error) {
        console.error('Error fetching and storing match data:', error);
    }

};

cron.schedule('*/1 * * * *', fetchAndStoreMatchData);

module.exports = fetchAndStoreMatchData;
