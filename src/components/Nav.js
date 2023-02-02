import { useDispatch, useSelector } from "react-redux";
import { tr, en } from '../features/LangSlice'


export default function Nav() {

    const dispatch = useDispatch()
    const currentLang = useSelector((state) => state.language.value)


    const handleTR = e => {
        e.preventDefault();
        dispatch(tr())
    }
    const handleEN = e => {
        e.preventDefault();
        dispatch(en())
    }


    return (
        <div className="nav">
            <button className={currentLang === 'TR' ? "lang-btn active" : "lang-btn"} onClick={handleTR}>TR</button>
            <button className={currentLang === 'EN' ? "lang-btn active" : "lang-btn"} onClick={handleEN}>EN</button>
        </div>
    )
}