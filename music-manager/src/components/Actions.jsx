import sprite from "../assets/images/sprite.svg";

function Actions() {
  return (
    <div>
        <svg width="50px" height="50px">
            <use href={`${sprite}#add-new`} />
        </svg>
    </div>
  )
}

export {Actions}