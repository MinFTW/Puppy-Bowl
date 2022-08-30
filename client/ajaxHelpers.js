const cohortName = '2202-FTB-ET-WEB-PT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if (result.error) throw result.error;

    return result.data.players;
  } catch (err) {
    console.error(`Uh oh, trouble fetching players!`, err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    if (result.error) throw result.error;

    return result.data.player;
  } catch (err) {
    console.error(`Uh oh, trouble fetching player ${playerId}!`, err);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/JSON`,
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    if (result.error) throw result.error;

    return result.data.player;
  } catch (err) {
    console.error(`Uh oh, trouble adding new player!`, err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: `DELETE`,
    });
    const result = await response.json();
    if (result.error) throw result.error;

    return;
  } catch (err) {
    console.error(`Uh oh, trouble deleting player!`, err);
  }
};

// TEST FUNCTION
export const showTeammates = async () => {
  try {
    const response = await fetch(`${APIURL}/teams`);
    const result = await response.json();
    if (result.error) throw result.error;

    return result.data.teams;
  } catch (err) {
    console.error(`Uh oh, trouble fetching teams!`, err);
  }
};
