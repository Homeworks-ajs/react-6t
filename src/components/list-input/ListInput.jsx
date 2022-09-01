import React from 'react'

function ListInput({onSubmitForm}) {
  return (
    <div className="row py-1 my-3">
      <form className="form" >
        <h5>New notes</h5>
        <input name="card-text" />
        <input type="submit" className="btn btn-primary mx-3" value={"Add"} onClick={onSubmitForm}/>
      </form>
    </div>
  )
}

export default ListInput
