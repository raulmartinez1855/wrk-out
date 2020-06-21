import React, { useState } from 'react';
import ExerciseSelection from './ExerciseSelection';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppHeader = styled.h1`
  font-size: 4rem;
`;

const stages = {
  selection: 'selection',
  workout: 'workout',
  end: 'end',
};

const exerciseDummyData = {
  hearts: 'Push Ups',
  clubs: 'Squats',
  spades: 'Burpees',
  diamonds: 'Pull Ups',
};

function App() {
  const [stage, setStage] = useState(stages.workout);
  const [exercises, setExercises] = useState(exerciseDummyData);

  return (
    <AppContainer>
      <AppHeader>WRK OUT</AppHeader>
      {stage === stages.selection && (
        <ExerciseSelection
          setStage={setStage}
          stages={stages}
          setExercises={setExercises}
        />
      )}
    </AppContainer>
  );
}

export default App;
