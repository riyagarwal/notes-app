import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    // console.log(pasteId);
    dispatch(removeFromPastes(pasteId));
  };

  return (
    <>
      <div className="flex flex-row gap-7 place-content-between">
        {/* search bar */}
        <input
          type="search"
          placeholder="Search in pastes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 mt-2 rounded-xl border border-b-amber-600 w-[60%] pl-4"
        />

        {/* search button */}
        <button>Search</button>
      </div>

      {/* paste list */}
      <div className="flex flex-col gap-5 mt-8">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            // card container
            <div className="border rounded-md p-5 flex flex-row place-content-between">
              {/* title and content*/}
              <div className="flex flex-col gap-4">
                <h2 className="text-left">{paste.title}</h2>
                <p className="text-left">{paste.content}</p>
              </div>
              {/* buttons and date */}
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <button> Edit </button>
                  <button> View </button>
                  <button onClick={() => handleDelete(paste._id)}>
                    Delete
                  </button>
                  <button> Copy </button>
                  <button> share </button>
                </div>
                <div>date</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Pastes;
