import { ImageViewer } from './components/image-viewer';
import { Vendor } from './components/vendor';
import './index.css';

function App() {
  return (
    <div className="flex fill-container">
        <ImageViewer imgAlt={'Place Holder vendor Image'} />
        <Vendor />
    </div>
  );
}

export default App;
