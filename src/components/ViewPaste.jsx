import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    const paste = allPastes.find((paste) => paste._id === id);
    setTitle(paste.title);
    setContent(paste.content);
  }, [id]);

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          type="text"
          value={title}
          disabled
          className="p-2 mt-2 rounded-lg border border-b-amber-600 w-[60%] pl-4"
        />
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 border"
          value={content}
          disabled
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
