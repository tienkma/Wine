import { useEffect, useState } from "react";

export default function PortableModal() {
    const [modalState, setModal] = useState({
        open: false,
        title: '',
      });
  
  
    return (
      <>
      <div
      >
        <div>
          <h5 className="modal-title mt-0">
            {modalState.title}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setModal({ open: false, title: '' })}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
        </>
    )
  }
  