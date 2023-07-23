import { Avatar } from "@mui/material";

const ProfilePage = () => {
  return (
    <main className="minHeight">
      <div className="relative flex flex-col bg-white border border-black/[0,125] rounded-sm shadow mb-10">
        <div className="flex-1 p-4">
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
                <Avatar>
                  <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                </Avatar>
                <div className="ms-4">
                  <span className="h4 d-block mb-0">Julianne Moore</span>
                  <a href="#" className="text-sm font-semibold text-muted">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="ms-auto">
              <button
                type="button"
                className="inline-block font-normal cursor-pointer transition-colors rounded-sm px-3 py-1.5 btn-sm bg-background hover:bg-color"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h5 className="mb-0">Contact Information</h5>
      </div>
      <form className="mb-6">
        <div className="flex mb-5">
          <div className="col-md-6">
            <div className="">
              <label className="form-label" htmlFor="first_name">
                First name
              </label>
              <input type="text" className="form-control" id="first_name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <label className="form-label" htmlFor="last_name">
                Last name
              </label>
              <input type="text" className="form-control" id="last_name" />
            </div>
          </div>
        </div>
        <div className="flex g-5">
          <div className="col-md-6">
            <div className="">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <label className="form-label" htmlFor="phone_number">
                Phone number
              </label>
              <input type="tel" className="form-control" id="phone_number" />
            </div>
          </div>
          <div className="col-12">
            <div className="">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <input type="text" className="form-control" id="address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <label className="form-label" htmlFor="city">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <label className="form-label" htmlFor="zip">
                ZIP
              </label>
              <input type="tel" className="form-control" id="zip" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="check_primary_address"
                id="check_primary_address"
              />
              <label
                className="form-check-label"
                htmlFor="check_primary_address"
              >
                Make this my default address
              </label>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="inline-block font-normal cursor-pointer transition-colors rounded-sm px-3 py-1.5 btn-sm mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-block font-normal cursor-pointer transition-colors rounded-sm px-3 py-1.5 btn-sm "
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default ProfilePage;
