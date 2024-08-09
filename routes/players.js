const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.post('/', async (req, res) => {
    try {

        const existPlayer = await Player.find({ "id_gc": req.body.id_gc });
        if (existPlayer.length == 0) {
            console.log('Player not in database, getting gamers club data');
            const response = await fetch("https://gamersclub.com.br/api/box/init/" + req.body.id_gc, {
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
                    "cookie": "_gcl_au=1.1.1590980947.1721331780; sib_cuid=04e52cc9-97c5-4103-abf6-e38e62bd13c9; _tt_enable_cookie=1; _ttp=2esRiodI6t1x5LPRySOjX7u9WWk; _fbp=fb.2.1721331780341.773965149448558284; 51QQyhcLyDRpqrY2Gh3vO=1; language=pt-br; _hjSessionUser_2263196=eyJpZCI6IjRiNDA3MmE1LTgyZDEtNWE4YS04OGIyLWRmMDhmMzQ2YzQ1YSIsImNyZWF0ZWQiOjE3MjEzMzE4MDQzODgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_H7ETJY03DT=deleted; _hjSessionUser_1963917=eyJpZCI6IjljYmYxMTc1LWY5YjUtNTFhMy04NDhkLThmNjI0MjJhYWNjMCIsImNyZWF0ZWQiOjE3MjEzMzE3ODA0NDMsImV4aXN0aW5nIjp0cnVlfQ==; FCNEC=%5B%5B%22AKsRol8u-xh6f5r9W-JxCXRYmR3VeN2KIl4eq9iSXBOXcFyn-oGGujvsYAa3Xj543FDN8_XNygfWBnOhrxPnjr6fzosyAnakZUdgEDmtp4f-tko1e_5cHnhiZKkqLKyKDCs6SG2-sBpFOWy1aLH1N1LH7ktSiW0X2A%3D%3D%22%5D%5D; _ga_GDBFGFR1PC=deleted; _gid=GA1.3.279895920.1722811358; cf_clearance=HCae7RpgM4aGLvB6QFXdeyrimb8RZE6KTuoQ6NCp5pw-1722969215-1.0.1.1-jACbj1cgcTRHxJVenSBfQ4p6tBIZMaCpdaZ1UDe0D2oMrw5b4UqufSIYIw6yjfkI0MJsUR3IAmqyfsYU9JN2_w; gclubsess=b320a516e518da61054d2290cc7dcecd744339e3; _ce.clock_event=1; _ce.clock_data=102%2C179.84.96.52%2C1%2C362d7fe3d8b2581bffa359f0eeda7106%2CChrome%2CBR; _ce.irv=returning; cebs=1; __gads=ID=db0b9dc7a53addde:T=1721331810:RT=1723131653:S=ALNI_Ma1jwgyXt8fsGiANg8esF-Zf8xcbw; __gpi=UID=00000a441187fc73:T=1721331810:RT=1723131653:S=ALNI_MbcZ0Q8WX-afz5uNySvNacjPPHVtw; __eoi=ID=8397c1bb7f786164:T=1721331810:RT=1723131653:S=AA-Afja_pE7zIv0WfAknrz41F7xt; _hjSession_2263196=eyJpZCI6Ijg2YzU4ZTcxLWUzOTUtNDMwMy1iMzkxLWM5Njk2YTcxZTg4MSIsImMiOjE3MjMxNDI1ODg0MDcsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; _ga_HZPJ0EKL99=GS1.3.1723142589.71.1.1723143049.0.0.0; cebsp_=9; _ga=GA1.3.1439008375.1721331780; __cf_bm=S77t1F1sZIQyJQZaD8IQrPpaTFHpeBOv1zr3ZdULJeE-1723144527-1.0.1.1-r9U0nm_GFVB8AnBIZhAf.gT_ee15tk03mFwUCqFo_I5ZXePh5KlH8kzFxttK2zg6cgYMITZEY5QxhQWDPTLi0A; _ga_1WKB6YC210=GS1.1.1723142587.71.1.1723144587.60.0.0; _ga_H7ETJY03DT=GS1.1.1723142587.70.1.1723144587.60.0.0; _ga_GDBFGFR1PC=GS1.1.1723142587.70.1.1723144587.60.0.0; _ce.s=v~8a00dc3dfad74339831de1e854c3626d3a5ff9f2~lcw~1723144587313~lva~1723131241018~vpv~64~as~false~v11.cs~419044~v11.s~0fad28f0-55b6-11ef-873e-bf6b48c0a56b~v11.sla~1723144587666~v11.send~1723144587087~lcw~1723144587666",
                    "Referer": "https://gamersclub.com.br/player/" + req.body.id_gc,
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": null,
                "method": "GET"
            });

            if (!response.ok) throw new Error('Gamersclub API not responding with this id');
            const data = await response.json();
            if (data.playerInfo.id > 0) {
                const player = new Player({
                    nick: data.playerInfo.nick,
                    level: data.playerInfo.level,
                    id_steam: req.body.id_steam,
                    id_gc: req.body.id_gc,
                    url_photo: req.body.url_photo,
                    url_gc_level: req.body.url_gc_level
                });
                await player.save();
                res.status(201).json(player);

            } else {
                console.log('Player not found on gamersclub');
                res.status(404).json({ error: "Player not found on gamersclub" });
            }

        } else {
            console.log('Player already added in database');
            res.status(200).json({ success: "Player already added" });
        }

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

});


router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/update', async (req, res) => {
    try {
        const players = await Player.find();

        for (const player of players) {

            const response = await fetch("https://gamersclub.com.br/api/box/init/" + player.id_gc, {
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
                    "cookie": "_gcl_au=1.1.1590980947.1721331780; sib_cuid=04e52cc9-97c5-4103-abf6-e38e62bd13c9; _tt_enable_cookie=1; _ttp=2esRiodI6t1x5LPRySOjX7u9WWk; _fbp=fb.2.1721331780341.773965149448558284; 51QQyhcLyDRpqrY2Gh3vO=1; language=pt-br; _hjSessionUser_2263196=eyJpZCI6IjRiNDA3MmE1LTgyZDEtNWE4YS04OGIyLWRmMDhmMzQ2YzQ1YSIsImNyZWF0ZWQiOjE3MjEzMzE4MDQzODgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_H7ETJY03DT=deleted; _hjSessionUser_1963917=eyJpZCI6IjljYmYxMTc1LWY5YjUtNTFhMy04NDhkLThmNjI0MjJhYWNjMCIsImNyZWF0ZWQiOjE3MjEzMzE3ODA0NDMsImV4aXN0aW5nIjp0cnVlfQ==; FCNEC=%5B%5B%22AKsRol8u-xh6f5r9W-JxCXRYmR3VeN2KIl4eq9iSXBOXcFyn-oGGujvsYAa3Xj543FDN8_XNygfWBnOhrxPnjr6fzosyAnakZUdgEDmtp4f-tko1e_5cHnhiZKkqLKyKDCs6SG2-sBpFOWy1aLH1N1LH7ktSiW0X2A%3D%3D%22%5D%5D; _ga_GDBFGFR1PC=deleted; _gid=GA1.3.279895920.1722811358; cf_clearance=HCae7RpgM4aGLvB6QFXdeyrimb8RZE6KTuoQ6NCp5pw-1722969215-1.0.1.1-jACbj1cgcTRHxJVenSBfQ4p6tBIZMaCpdaZ1UDe0D2oMrw5b4UqufSIYIw6yjfkI0MJsUR3IAmqyfsYU9JN2_w; gclubsess=b320a516e518da61054d2290cc7dcecd744339e3; _ce.clock_event=1; _ce.clock_data=102%2C179.84.96.52%2C1%2C362d7fe3d8b2581bffa359f0eeda7106%2CChrome%2CBR; _ce.irv=returning; cebs=1; __gads=ID=db0b9dc7a53addde:T=1721331810:RT=1723131653:S=ALNI_Ma1jwgyXt8fsGiANg8esF-Zf8xcbw; __gpi=UID=00000a441187fc73:T=1721331810:RT=1723131653:S=ALNI_MbcZ0Q8WX-afz5uNySvNacjPPHVtw; __eoi=ID=8397c1bb7f786164:T=1721331810:RT=1723131653:S=AA-Afja_pE7zIv0WfAknrz41F7xt; _hjSession_2263196=eyJpZCI6Ijg2YzU4ZTcxLWUzOTUtNDMwMy1iMzkxLWM5Njk2YTcxZTg4MSIsImMiOjE3MjMxNDI1ODg0MDcsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; _ga_HZPJ0EKL99=GS1.3.1723142589.71.1.1723143049.0.0.0; cebsp_=9; _ga=GA1.3.1439008375.1721331780; __cf_bm=S77t1F1sZIQyJQZaD8IQrPpaTFHpeBOv1zr3ZdULJeE-1723144527-1.0.1.1-r9U0nm_GFVB8AnBIZhAf.gT_ee15tk03mFwUCqFo_I5ZXePh5KlH8kzFxttK2zg6cgYMITZEY5QxhQWDPTLi0A; _ga_1WKB6YC210=GS1.1.1723142587.71.1.1723144587.60.0.0; _ga_H7ETJY03DT=GS1.1.1723142587.70.1.1723144587.60.0.0; _ga_GDBFGFR1PC=GS1.1.1723142587.70.1.1723144587.60.0.0; _ce.s=v~8a00dc3dfad74339831de1e854c3626d3a5ff9f2~lcw~1723144587313~lva~1723131241018~vpv~64~as~false~v11.cs~419044~v11.s~0fad28f0-55b6-11ef-873e-bf6b48c0a56b~v11.sla~1723144587666~v11.send~1723144587087~lcw~1723144587666",
                    "Referer": "https://gamersclub.com.br/player/" + player.id_gc,
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": null,
                "method": "GET"
            });

            if (!response.ok) throw new Error('Gamersclub API not responding with this id');
            const data = await response.json();
            await Player.findByIdAndUpdate(player._id, { nick: data.playerInfo.nick, level: data.playerInfo.level }, { new: true, runValidators: true });

        }
        res.status(200).json({ success: "Database updated" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!player) return res.status(404).json({ error: 'Player not found' });
        res.json(player);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) return res.status(404).json({ error: 'Player not found' });
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
