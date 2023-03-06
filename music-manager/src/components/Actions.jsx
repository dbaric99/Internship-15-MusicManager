import sprite from "../assets/images/sprite.svg";

function Actions() {
  return (
    <div className="actions-wrapper">
        <svg width="50px" height="50px">
            <use href={`${sprite}#add-new`} />
        </svg>
        <div className="input-actions">
          <svg width="20px" height="20px">
            <use href={`${sprite}#search`} />
          </svg>
          <svg width="30px" height="30px">
            <use href={`${sprite}#dropdown`} />
          </svg>
        </div>
    </div>
  )
}

export {Actions}