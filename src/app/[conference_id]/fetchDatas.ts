export async function getConferenceDatas(conference_id: string) {
  console.log(conference_id);
  // const query = `
  //   query {
  //     conference(id:"${conference_id}") {
  //       id
  //       name
  //       slogan
  //       organizer {
  //         aboutShort
  //         company
  //         tagline
  //         noPhotography
  //       }
  //       speakers {
  //         aboutShort
  //         company
  //         tagline
  //         noPhotography
  //       }
  //       schedules {
  //         description
  //       }
  //       sponsors {
  //         aboutShort
  //         company
  //         tagline
  //         noPhotography
  //       }
  //     }
  //   }`;

  const query = `
    query {
      conference(id:"${conference_id}") {
        name
        slogan
        schedules {
          description
        }
      }
    }`;

  const jsonQuery = JSON.stringify({ query });
  console.log(jsonQuery)

  const res = await fetch(`https://api.react-finland.fi/graphql?`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: 'no-cache'
  })
  return res.json()
}
