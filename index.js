const BlipSdk = require('blip-sdk');
const WebSocketTransport = require('lime-transport-websocket');
const Lime = require('lime-js');
const fetch = require("node-fetch");
const data_json = require("./data.json");
const credentials_json = require("./credentials.json");


function delay(time) {
    return new Promise(resolve =>
        setTimeout(resolve, time)
    )
}
let identifier = credentials_json[0].credentials[0].IDENTIFIER
let acess_key = credentials_json[0].credentials[0].ACCESS_KEY

let client = new BlipSdk.ClientBuilder()
    .withIdentifier(identifier)
    .withAccessKey(acess_key)
    .withTransportFactory(() => new WebSocketTransport())
    .build();


client.connect().then(async (session) => {
    let TO_MESSAGE = session
    if (session.state !== 'established') return;

    for (const message of data_json[0].initial_message) {
        await client.sendMessage(message)
        await delay(500)

    }

    const messages = [
        {
            id: Lime.Guid(),
            type: "application/vnd.lime.collection+json",
            to: "3af67f6a-0de5-4284-ae19-38b9fca3c7fe.luci7@0mn.io/default",
            content: data_json[0].teste[0]
        }
    ]

    
    for (const message of messages) {
        await client.sendMessage(message)
        await delay(500)
    }

    client.addMessageReceiver(true, function (message) {
        let key = message.content.key1;
        if (key) {
            switch (key) {
                case 'takeBe':
                    client.sendMessage(data_json[0].messages_carousel[0]);
                    break;
                case 'takeTeam':
                    client.sendMessage(data_json[0].messages_carousel[1]);
                    break;
                case 'takeEx':
                    client.sendMessage(data_json[0].messages_carousel[2]);
                    break;

                case 'takeCharge':
                    client.sendMessage(data_json[0].messages_carousel[3]);
                    break;

                case 'takeSimple':
                    client.sendMessage(data_json[0].messages_carousel[4]);
                    break;

                case 'takeHigher':
                    client.sendMessage(data_json[0].messages_carousel[5]);
                    break;

                case 'desafio':
                    client.sendMessage(data_json[0].messages_carousel[6]);

                    (function () {
                        const url = "https://api.github.com/orgs/takenet/repos?direction=asc&per_page=5"


                        async function getData() {
                            const response = await fetch(`${url}`)
                            const data = await response.json()
                            var name = [];
                            var descriptions = [];
                            for (var i in data) {
                                name.push(data[i].name)
                                descriptions.push(data[i].description)
                            }
                            client.sendMessage({
                                id: Lime.Guid(),
                                type: "application/vnd.lime.collection+json",
                                to: "3af67f6a-0de5-4284-ae19-38b9fca3c7fe.luci7@0mn.io/default",
                                content: {
                                    itemType: "application/vnd.lime.document-select+json",
                                    items: [{
                                        header: {
                                            type: "application/vnd.lime.media-link+json",
                                            value: {
                                                title: name[0],
                                                text: descriptions[0],
                                                type: "image/jpeg",
                                                uri: "https://lh3.googleusercontent.com/pw/ACtC-3dMmfWihwoa2HnqnDMyQIu3601opQRDcb4fp6JnaWEfGjZdXOedREuZ36LLyQuBSgRtFMipjzBsNJCLtayavhHJLj_cwPUReDrJCCBn9OkSLu4vrYHX73Pk0WYYzHu2_h_FMiLEzSMroTM3bUfW9wfb=w632-h334-no?authuser=0"
                                            }
                                        },
                                    }, {
                                        header: {
                                            type: "application/vnd.lime.media-link+json",
                                            value: {
                                                title: name[1],
                                                text: descriptions[1],
                                                type: "image/jpeg",
                                                uri: "https://lh3.googleusercontent.com/pw/ACtC-3dMmfWihwoa2HnqnDMyQIu3601opQRDcb4fp6JnaWEfGjZdXOedREuZ36LLyQuBSgRtFMipjzBsNJCLtayavhHJLj_cwPUReDrJCCBn9OkSLu4vrYHX73Pk0WYYzHu2_h_FMiLEzSMroTM3bUfW9wfb=w632-h334-no?authuser=0"
                                            }
                                        },
                                    }, {
                                        header: {
                                            type: "application/vnd.lime.media-link+json",
                                            value: {
                                                title: name[2],
                                                text: descriptions[2],
                                                type: "image/jpeg",
                                                uri: "https://lh3.googleusercontent.com/pw/ACtC-3dMmfWihwoa2HnqnDMyQIu3601opQRDcb4fp6JnaWEfGjZdXOedREuZ36LLyQuBSgRtFMipjzBsNJCLtayavhHJLj_cwPUReDrJCCBn9OkSLu4vrYHX73Pk0WYYzHu2_h_FMiLEzSMroTM3bUfW9wfb=w632-h334-no?authuser=0"
                                            }
                                        },
                                    }, {
                                        header: {
                                            type: "application/vnd.lime.media-link+json",
                                            value: {
                                                title: name[3],
                                                text: descriptions[3],
                                                type: "image/jpeg",
                                                uri: "https://lh3.googleusercontent.com/pw/ACtC-3dMmfWihwoa2HnqnDMyQIu3601opQRDcb4fp6JnaWEfGjZdXOedREuZ36LLyQuBSgRtFMipjzBsNJCLtayavhHJLj_cwPUReDrJCCBn9OkSLu4vrYHX73Pk0WYYzHu2_h_FMiLEzSMroTM3bUfW9wfb=w632-h334-no?authuser=0"
                                            }
                                        },
                                    }, {
                                        header: {
                                            type: "application/vnd.lime.media-link+json",
                                            value: {
                                                title: name[4],
                                                text: descriptions[4],
                                                type: "image/jpeg",
                                                uri: "https://lh3.googleusercontent.com/pw/ACtC-3dMmfWihwoa2HnqnDMyQIu3601opQRDcb4fp6JnaWEfGjZdXOedREuZ36LLyQuBSgRtFMipjzBsNJCLtayavhHJLj_cwPUReDrJCCBn9OkSLu4vrYHX73Pk0WYYzHu2_h_FMiLEzSMroTM3bUfW9wfb=w632-h334-no?authuser=0"
                                            }
                                        },
                                    }
                                    ]
                                }
                            })
                            return name
                        }
                        getData();
                    })();
                    break;
            }

            async function sendFinalMessage(message) {
                await delay(1000)
                client.sendMessage({
                    id: Lime.Guid(),
                    type: "application/vnd.lime.select+json",
                    to: "3af67f6a-0de5-4284-ae19-38b9fca3c7fe.luci7@0mn.io/default",
                    content: data_json[0].message_final[0]
                });
            }
            sendFinalMessage();
        }
    });


}).catch(function (err) { /* Connection failed. */ });



