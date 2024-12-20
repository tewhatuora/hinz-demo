import React, { useEffect, useState } from "react";

const RFC_DEFINITIONS = {
  MUST: 'This word, or the terms "REQUIRED" or "SHALL", mean that the definition is an absolute requirement of the specification.',
  "MUST NOT": 'This phrase, or the phrase "SHALL NOT", mean that the definition is an absolute prohibition of the specification.',
  SHOULD: 'This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.',
  "SHOULD NOT": 'This phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood and the case carefully weighed before implementing any behavior described with this label.',
  MAY: 'This word, or the adjective "OPTIONAL", mean that an item is truly optional. One vendor may choose to include the item because a particular marketplace requires it or because the vendor feels that it enhances the product while another vendor may omit the same item.',
};

const SECTIONS = {
  'All sections': '',
  // 'Part B: API Security': '/api-security/',
  // 'Part C: API Design and Development Standards': '/api-development/',
  // 'Part D: HL7 FHIR API Design and Development Standards': '/fhir-api-standard/',
  // 'Part E: API Publishing Standards': '/api-publishing/'
};

const StandardsChecklist = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState('All sections');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const baseUrl = window.location.href;
        const path = baseUrl.includes('/draft/') ? '/draft/assets/api-standards.json' : '/assets/api-standards.json';
        console.log(path);
        const response = await fetch(path);
        console.log(response);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = () => {
    if (currentSection === 'All sections') {
      return data;
    } else {
      const sectionUrl = SECTIONS[currentSection];
      const filtered = {};
      Object.keys(data).forEach(key => {
        const sectionData = data[key].filter(item => {
          return item.link.includes(sectionUrl)
        });
        if (sectionData.length > 0) {
          filtered[key] = sectionData;
        }
      });
      return filtered;
    }
  };

  const createTable = (tableData) => {
    return (
      <table style={{ maxWidth: "100%", tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "90%" }}>Standard</th>
            <th style={{ width: "5%" }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, idx) => (
            <tr key={`${item.id}-${idx}`}>
              <td>
                <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
                  <strong dangerouslySetInnerHTML={{ __html: item.id.replaceAll("_", "_<wbr>") }}></strong>
                </p>
                <p style={{ marginBottom: 0 }}>{item.content}</p>
              </td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const displayData = filteredData();

  return (
    <div>
      <label htmlFor="sectionSelect">Filter by section:</label>
      <br />
      <select id="sectionSelect" style={{ color: '#00558c' }} value={currentSection} onChange={e => setCurrentSection(e.target.value)}>
        {Object.keys(SECTIONS).map(section => (
          <option key={section} value={section}>{section}</option>
        ))}
      </select>
      <br />
      <br />
      <div>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="spinner"></div> {/* Styling for spinner is assumed to be in CSS */}
          </div>
        ) : (
          <div>
            {Object.keys(displayData || {}).length ? (
              Object.keys(displayData).map((key) => (
                displayData[key].length > 0 ? (
                  <div key={key}>
                    <h3 id={key}>{key}</h3>
                    <p>{RFC_DEFINITIONS[key]}</p>
                    {createTable(displayData[key])}
                  </div>
                ) : (<p>No data available for this section.</p>)
              ))
            ) : (
              <p>No data available for this section.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StandardsChecklist;
