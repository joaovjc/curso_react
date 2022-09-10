import "./PopUpError.css"
import { CloseIconCOmponent } from "./CloseIcon"


export const PopupError = ({ handleClose , content }) => {
    return (
        <div class="popup-error-container" modal nested>
            <p>{content}</p>
            <button onClick={handleClose}>
                <CloseIconCOmponent />
            </button>
        </div>
    )
} 