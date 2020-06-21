import React, { useState } from 'react';
import styled from 'styled-components';

const ExerciseSelectionPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: var(--red);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 2rem 1rem;
  border-radius: 2rem;
  min-height: 38rem;
  width: 28rem;
`;

const Input = styled.input`
  margin-top: 0.2rem;
  font-size: 2rem;
  background: white;
  border-radius: 0.4rem;
  border: none;
  padding: 0.7rem;
  color: var(--dark-blue);
  &::placeholder {
    color: var(--placeholder-text);
  }
`;

const Label = styled.label`
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  color: palevioletred;
  border: 2px solid palevioletred;
  background: var(--white);
  font-size: 2rem;
  padding: 1rem;
  border-radius: 0.4rem;
`;

const ExerciseSelection = ({ setStage, stages, setExercises }) => {
  const [form, setForm] = useState({});

  const handleInputChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExercises(form);
    setStage(stages.workout);
  };

  return (
    <ExerciseSelectionPage>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="hearts">
          Hearts Exercise
          <Input
            name="hearts"
            id="hearts"
            required
            placeholder="Push Ups"
            defaultValue="Push Ups"
            onChange={handleInputChange}
          />
        </Label>
        <Label htmlFor="clubs">
          Clubs Exercise
          <Input
            name="clubs"
            id="clubs"
            required
            placeholder="Squats"
            defaultValue="Squats"
            onChange={handleInputChange}
          />
        </Label>
        <Label htmlFor="spades">
          Spades Exercise
          <Input
            name="spades"
            id="spades"
            required
            placeholder="Burpees"
            defaultValue="Burpees"
            onChange={handleInputChange}
          />
        </Label>
        <Label htmlFor="diamonds">
          Diamonds Exercise
          <Input
            name="diamonds"
            id="diamonds"
            required
            placeholder="Pull Ups"
            defaultValue="Pull Ups"
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">START</Button>
      </Form>
    </ExerciseSelectionPage>
  );
};

export default ExerciseSelection;
