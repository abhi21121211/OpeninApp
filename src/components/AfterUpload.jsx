import React, { useState } from "react";

const AfterUpload = () => {
  const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3"]);
  const [selectedTags, setSelectedTags] = useState(["Tag 1"]);

  const handleAddTag = (event, tag) => {
    event.preventDefault();
    setTags((prevTags) => [...prevTags, tag]);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleTagSelect = (event) => {
    const selectedTag = event.target.value;
    if (selectedTag && !selectedTags.includes(selectedTag)) {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, selectedTag]);
    }
  };

  return (
    <div className="p-10">
      <div className="text-left font-semibold text-xl">
        <p>Uploads</p>
      </div>

      <div className="my-10 overflow-x-auto">
        <table className="w-full lastTable table-auto">
          <thead className="border h-10">
            <tr>
              <th>SI.NO</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {[1].map((ele, idx) => {
              return (
                <tr key={idx}>
                  <td>{ele}</td>
                  <td>
                    <a href="">www.google.com</a>
                  </td>
                  <td>prefixsample</td>
                  <td>
                  <select onChange={handleTagSelect}>
                  <option>Select</option>
                      <option onClick={(e) => handleAddTag(e, tags[tags.length - 1])} value="Tag 1">Tag 1</option>
                      <option  onClick={(e) => handleAddTag(e, tags[tags.length - 1])} value="Tag 2">Tag 2</option>
                      <option onClick={(e) => handleAddTag(e, tags[tags.length - 1])} value="Tag 3">Tag 3</option>
                      <option onClick={(e) => handleAddTag(e, tags[tags.length - 1])} value="Tag 4">Tag 4</option>
                      <option onClick={(e) => handleAddTag(e, tags[tags.length - 1])} value="Tag 5">Tag 5</option>
                    </select>
                    
                  </td>
                  <td>
                    {selectedTags.map((tag) => (
                      <span onClick={() => handleRemoveTag(tag)} key={tag} className="mr-2">
                        {tag}
                        
                      </span>
                    ))}
                  </td>
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AfterUpload;
