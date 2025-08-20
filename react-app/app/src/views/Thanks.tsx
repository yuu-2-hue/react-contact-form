import { Link } from 'react-router-dom'

import '../css/Thanks.css'

export const Thanks = () => {
    return (
        <>
            <div className="thanks__container">
                <h1>お問合せありがとうございました</h1>
                <Link className='button' to="/">Home</Link>
            </div>
        </>
    );
}

export default Thanks