import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  //Your work goes here
  const [filterTeam, setFilterTeam] = useState("");

  const [filterRunnerUp, setFilterRunnerUp] = useState(false);

  const uniqueTeamNames = [

    ...new Set(
      props.gameData.reduce((all, current) => {
        return all.concat([current.winner, current.runner_up]);
      }, [])
    ),
  ].sort();

  
  let displayedData = props.gameData;
  if (filterTeam !== "") {
    displayedData = props.gameData.filter((game) => {
      return (
        game.winner === filterTeam ||
        (filterRunnerUp && game.runner_up === filterTeam)
      );
    });
  }

  function applyFilter(teamName, includeRunnerUp) {
    setFilterTeam(teamName);
    setFilterRunnerUp(includeRunnerUp);
  }


  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>

      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames}applyFilterCallback={applyFilter}/>
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>
          Data from{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">
            Wikipedia
          </a>
          .
        </small>
      </footer>
    </div>
  );
}

export default App;
