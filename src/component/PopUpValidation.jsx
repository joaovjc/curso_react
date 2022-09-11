import "./PopUpValidation.css"

export const PopUpValidation = ({ content }) => {
    return (
        <div class="popup-error-container" modal nested>
            <p>{content}</p>
        </div>
    )
} 