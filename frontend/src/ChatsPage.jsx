import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
    '7592bafd-52ac-4127-a287-8ba7939bb762',
    props.user.username,
    props.user.secret
    );
    return (
    <div style={{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
    }
    export default ChatsPage
