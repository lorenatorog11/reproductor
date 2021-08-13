import ReactPlayer from 'react-player';
import subtitles from './subtitles/subtitles.vtt';

function App() {
  return (
    <div className='video'>
      <ReactPlayer 
        width='100%'
        height='100%'
        playing
        controls
        url='https://d2ni8vd6etkcfg.cloudfront.net/assets/2ea43277-ec46-4897-a551-066095ffd7d9/HLS/142_THE_TERMINAL_.m3u8'
        config={{ file: {
          tracks: [
            {kind: 'subtitles', src: subtitles, srcLang: 'es', default:true, label:'Español'},
          ]
        }}} 
      />
    </div>
  );
}

export default App;
