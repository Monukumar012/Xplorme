import { FallingLines } from 'react-loader-spinner';
import './LoaderStyle.css'

const Loader = () => {
    return (
        <div className='loader-main'>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    )
}

export default Loader