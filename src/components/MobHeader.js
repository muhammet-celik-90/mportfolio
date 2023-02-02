import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../features/HeaderShowSlice';

export default function MobHeader() {

    const dispatch = useDispatch()
    const headerShow = useSelector((state) => state.headerShow.value)

    return (
        <div className="mob-button" onClick={() => {dispatch(toggle())}}>
            {headerShow ? <GrClose className='mob-list rotate-center'/> : <RxHamburgerMenu className="mob-list rotate-center"/> }
        </div>
    )
}