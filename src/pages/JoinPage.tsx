import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len: number) {
    let result = '';
    if (result) return result;
    const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length;
    len = len || 5;
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(
    url = window.location.href
) {
    const urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
}

export default function App() {
    const roomID = getUrlParams().get('roomID') || randomID(5);
    const myMeeting = async (element: never) => {

        // generate Kit Token
        const appID = parseInt(import.meta.env.VITE_ZEGOCLOUD_APPID);
        const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt
            .generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <div
            className="myCallContainer"
            ref={myMeeting}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
}
