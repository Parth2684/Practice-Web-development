
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'


function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>

    </>
  )
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilState(totalNotificationSelector)
  return <div>
    <button>Home</button>

    <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount}) </button>
    <button>Jobs ({jobsAtomCount}) </button>
    <button>Messaging ({messagingAtomCount >=100 ? "99+" : messagingAtomCount}) </button>
    <button>Notification ({notificationAtomCount}) </button>

    <button>Me({totalNotificationCount})</button>

    <br></br><br></br>
    
    <button onClick={ () => {
      setMessagingAtomCount((c) => c + 1)
    }}>Increase Message Notification</button>
  </div>
}
export default App
