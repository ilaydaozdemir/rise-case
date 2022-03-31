import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

import { AppContext } from "../context";

import "./job-list.css";

function JobList() {
  const { jobs, dispatcher } = useContext(AppContext);

  const [filteredJobs, setFilteredJobs] = useState([]);

  const [filterName, setFilterName] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const nameChanged = (e) => {
    setFilterName(e.target.value);
  };

  const priorityChanged = (e) => {
    setFilterPriority(e.target.value);
  };

  useEffect(() => {
    // create results array
    let results = [...jobs];

    // filter results by name if filterName is set
    if (filterName !== "") {
      results = results.filter((job) => job.name.includes(filterName));
    }

    // filter results by priority if filterPriorty is set
    if (filterPriority !== "") {
      results = results.filter((job) => job.priority === filterPriority);
    }

    // set the state of filteredJobs
    setFilteredJobs(results);
  }, [jobs, filterName, filterPriority]);

  const deleteJob = (index) => {
    dispatcher({ type: "DELETE_JOB", payload: index });
  };

  return (
    <Container>
      <Header>
        <Title>Job List</Title>
        <div>
          ({filteredJobs.length}/{jobs.length})
        </div>
      </Header>

      <div>
        <FilterContainer>
          <FilterController id="name-filter-controller">
            <FilterInput
              id="name-filter"
              value={filterName}
              onChange={nameChanged}
              placeholder="Job Name"
            />
          </FilterController>

          <FilterController>
            <FilterSelect
              value={filterPriority}
              onChange={priorityChanged}
              placeholder="Priority"
            >
              <option value="">All</option>
              <option value={"urgent"}>Urgent</option>
              <option value="trival">Trival</option>
              <option value="regular">Regular</option>
            </FilterSelect>
          </FilterController>
        </FilterContainer>
        <table style={{ width: "100%" }}>
          <thead style={{ backgroundColor: "#cbd2e5", color: "#fff" }}>
            <tr>
              <td>Name</td>
              <td>Priority</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.name}</td>
                <td style={{ width: "80px" }}>{job.priority}</td>
                <td style={{ width: "50px", textAlign: "right" }}>
                  <IconEdit>
                    <BsPencil />
                  </IconEdit>
                  <IconDelete>
                    <RiDeleteBin5Line onClick={() => deleteJob(index)} />
                  </IconDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredJobs.length === 0 && <p>Job not found</p>}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 480px;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.div`
  flex-grow: 1;
`;

const FilterContainer = styled.div`
  background-color: #e3eafd;
  padding: 8px;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FilterController = styled.div`
  margin: 0;
  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 0;
`;

const FilterSelect = styled.select`
  padding: 0;
`;

const IconEdit = styled.a`
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
  background-color: #ebe7e7;
  color: gray;
  border-radius: 2px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #2479e1;
    color: white;
  }
`;

const IconDelete = styled.a`
  margin-left: 4px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
  background-color: #ebe7e7;
  border-radius: 2px;
  color: gray;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #e03535;
    color: white;
  }
`;

export default JobList;
