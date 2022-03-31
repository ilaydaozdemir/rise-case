import React, { useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context";

import "./create-job.css";

const CreateJob = () => {
  const { dispatcher } = useContext(AppContext);

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const create = () => {
    // name is required, check name's length
    if (name.trim().length === 0) {
      alert("name required");
      return;
    }

    // create job
    const job = {
      name,
      priority,
    };

    // dispatch ADD_JOB action with the job payload
    dispatcher({ type: "ADD_JOB", payload: job });

    setName("");
    setPriority("");
  };

  const nameChanged = (e) => {
    setName(e.target.value);
  };

  const priorityChanged = (e) => {
    setPriority(e.target.value);
  };

  return (
    <Container>
      <Title>Create New Job</Title>
      <FormContainer>
        <FormController id="job-name">
          <Label>Job Name</Label>
          <FormInput value={name} onChange={nameChanged} />
        </FormController>

        <FormController id="job-priority">
          <Label>Job Priority</Label>
          <FormSelect value={priority} onChange={priorityChanged}>
            <option value={"urgent"}>Urgent</option>
            <option value="trival">Trival</option>
            <option value="regular">Regular</option>
          </FormSelect>
        </FormController>

        <Button onClick={() => create()}>+ Create</Button>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  font-weight: 400;
`;
const Button = styled.button`
  background-color: #2479e1;
  color: white;
  border: solid thin blue;
  border-radius: 2px;
  padding: 8px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;

  @media (min-width: 576px) {
    width: 120px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: #aaaaaa;
  display: block;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormController = styled.div`
  margin: 0;
  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  border: solid thin #ccc;
  border-radius: 2px;
  padding: 0;
`;

const FormSelect = styled.select`
  width: 120px;
  border: solid thin #ccc;
  border-radius: 2px;
  padding: 0;
`;

export default CreateJob;
